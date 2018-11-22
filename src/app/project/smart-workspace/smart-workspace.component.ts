import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { KPMG_CHART_COLOR_SET, PLACE_HOLDER_TEXT, RIGHTS } from '@core/app.const';
import {
    ReportPageOrientation,
    ReportPageType,
    SmartWorkspaceContainerType,
    SmartWorkspaceMessageType,
    TemplateType
} from '@core/enum';
import { UnsavedChanges } from '@core/guards/unsaved-changes/unsaved-changes';
import {
    Analysis,
    ChartData,
    InfoSnippet,
    Layout,
    ProgressState,
    ReportCreationSettings,
    ReportPage,
    ReportPageData,
    ReportPageGridLayout,
    ReportPageNavigation,
    ReportPageUpdate,
    ReportTemplate,
    TableOfContent,
    User
} from '@core/models';
import {
    DataExplorerService,
    ReportService,
    ScopeItemService,
    SmartWorkspaceMessageService,
    SnippetsService
} from '@core/services';
import { AnalysisMapper, ChartViewComponent } from '@shared/index';
import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';
import { DxChartComponent } from 'devextreme-angular';
import { DxSwitchComponent } from 'devextreme-angular/ui/switch';
import notify from 'devextreme/ui/notify';
import { currentPalette, registerPalette } from 'devextreme/viz/palette';
import { saveAs } from 'file-saver';
import { NGXLogger } from 'ngx-logger';
import { LocalStorageService } from 'ngx-store';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DrawIOExtensionService } from './services/draw-io-extension.service';
import { DrawIOScriptService } from './services/draw-io-scripts.service';
import { FroalaExtensionService } from './services/froala-extension.service';

enum EditorType {
    Froala
}

declare const App: any;
declare var $: any;

@Component({
    templateUrl: './smart-workspace.component.html',
    styleUrls: ['./smart-workspace.component.scss']
})
@TakeUntilDestroy()
export class SmartWorkspaceComponent extends UnsavedChanges implements OnInit, OnDestroy {
    SvgIcons = SvgIconTypes;
    @ViewChild('switchIntroColumn')
    switchIntroColumn: DxSwitchComponent;

    @ViewChild(ChartViewComponent)
    private chartViewComponent: ChartViewComponent;

    private _froala: any;
    private _myInterval: NodeJS.Timer;
    private _froalaToolbarHeight: number = 82;
    private _froalaPopupStyleSheet: any;
    private _froalaPopupBreakSize: number = 858;
    private _froalaPopupBreakColumn: number = 4;
    private _froalaPopupSnippetsBreakSize: number = 641;
    private _froalaPopupSnippetsBreakColumn: number = 3;
    RIGHTS = RIGHTS;
    PAGE_TYPE = ReportPageType;
    analysisForUser: boolean = true;

    ReportPageOrientation: typeof ReportPageOrientation = ReportPageOrientation;

    // Froala
    froalaOptions: any;
    froalaPopupSize: any = {
        width: 1100,
        height: 600,
        className: '',
        snippetsStyle: undefined,
        snippetsScrollViewStyle: undefined
    };

    // table of content
    tableOfContentVisible: boolean = false;

    // popups
    confirmDeletePopupVisible: boolean = false;
    confirmDeleteTemplateVisible: boolean = false;
    isNewContentTemplatePopupVisible: boolean = false;
    popupVisible: boolean = false;
    chartsPopupVisible: boolean = false;
    imagePopupVisible: boolean = false;
    generateReportPopupVisible: boolean = false;

    pageToDelete: ReportPageData;
    templateToDeleteId: number = undefined;
    isAnalysisContainerSelected: boolean = false;
    isSnippetsVisible: boolean = false;
    reportPage: ReportPage;
    reportTemplates$: Observable<ReportTemplate[]>;
    taskState: ProgressState = undefined;
    progressStates: ProgressState[] = [];

    guidanceSnippetText: string | SafeHtml = undefined;

    introColumnEnabled: boolean = false;
    guidanceIsLoading: boolean = false;

    analysis: Analysis;
    analysises: Analysis[];
    analysisesByUser: Analysis[];
    analysisesList: Analysis[];
    imageFromCell: string;

    currentUser: User;

    layouts: Layout[];

    // Analysis
    @ViewChild('chartVar')
    analysisChart: DxChartComponent;
    dxChartData = new ChartData();

    hasUnsavedChanges = false;
    isPageContentLoaded = false;

    constructor(
        private el: ElementRef,
        private _logger: NGXLogger,
        private _drawIOScriptService: DrawIOScriptService,
        private _reportService: ReportService,
        private _taskService: ScopeItemService,
        private _smartWorkspaceMessageService: SmartWorkspaceMessageService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dataExplorerService: DataExplorerService,
        private _localStorageService: LocalStorageService,
        private _froalaExtensionService: FroalaExtensionService,
        private _drawIOExtensionService: DrawIOExtensionService,
        private _snippetsService: SnippetsService,
        private _sanitizer: DomSanitizer
    ) {
        super();
        this.loadScripts();
        this.froalaOptions = this._froalaExtensionService.getFroalaOptions();
    }

    hasChanges(): boolean {
        return this.hasUnsavedChanges;
    }

    loadScripts() {
        this._drawIOScriptService
            .load()
            .then(data => {
                // console.log('script loaded', data);
            })
            .catch(error => console.log(error));
    }

    ngOnInit() {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        this._froalaPopupStyleSheet = style.sheet;

        registerPalette('kpmgPalette', KPMG_CHART_COLOR_SET);
        currentPalette('kpmgPalette');

        this.guidanceIsLoading = true;
        this.layouts = this._drawIOExtensionService.layouts;

        this._froalaExtensionService.init();

        this.currentUser = this._localStorageService.get('currentUser');

        this._route.data
            .pipe(untilDestroyed(this))
            .subscribe((data: { states: ProgressState[]; taskState: ProgressState }) => {
                this.progressStates = data.states;
                this.taskState = data.taskState;
            });

        // Interval is for checking if draw.io is ready
        this._myInterval = setInterval(() => {
            if (typeof App != 'undefined') {
                clearInterval(this._myInterval);

                this._route.params.pipe(untilDestroyed(this)).subscribe(params => {
                    const projectId = params['id'];
                    const productId = +params['productId'];
                    const chapterId = +params['chapterId'];
                    const taskId = +params['taskId'];
                    const sequenceNumber = +params['sequenceNumber'];

                    this.reportTemplates$ = this._reportService.getTemplates(projectId, taskId);

                    this._dataExplorerService.list(projectId).subscribe(data => {
                        this.analysises = data;
                        this.analysisesByUser = data.filter(a => a.userCreatedBy.gpid.includes(this.currentUser.gpid));
                        this.showAnalysis(true);
                    });

                    this.guidanceIsLoading = true;
                    this._snippetsService
                        .getGuidanceSnippetByTask(projectId, taskId)
                        .pipe(untilDestroyed(this))
                        .subscribe(text => {
                            if (text) {
                                this.guidanceSnippetText = this._sanitizer.bypassSecurityTrustHtml(text.contentHtml);
                            } else {
                                this.guidanceSnippetText = undefined;
                            }
                            this.guidanceIsLoading = false;
                        });

                    this._reportService
                        .getPage(projectId, productId, chapterId, taskId, sequenceNumber)
                        .pipe(untilDestroyed(this))
                        .subscribe(
                            page => {
                                this.reportPage = page;

                                if (!this._drawIOExtensionService.isLoaded) {
                                    this._drawIOExtensionService.init(this, this.reportPage.data.content);
                                } else {
                                    this._drawIOExtensionService.setContent(this.reportPage.data.content);
                                }

                                this._generatePopupStyles(page.grid);
                            },
                            error => {
                                if (error instanceof HttpErrorResponse) {
                                    if (error.status == 404) {
                                        this._router.navigate(['projects', projectId, 'tasks']);
                                    }
                                }
                            }
                        );
                });
            }
        }, 500);
        this._drawIOExtensionService.contentChanged
            .pipe(untilDestroyed(this))
            .subscribe((data: boolean) => (this.hasUnsavedChanges = data));

        this._drawIOExtensionService.chartCellChanged
            .pipe(untilDestroyed(this))
            .subscribe((data: any) => this.updateChartsDimensionAndRender(data));

        this._drawIOExtensionService.imageCellChanged
            .pipe(untilDestroyed(this))
            .subscribe((data: any) => this.updateImageContainer(data));
    }

    ngOnDestroy(): void {
        this._drawIOExtensionService.dispose();
    }

    showAnalysis(showByUser: boolean) {
        this.analysisForUser = showByUser;

        if (this.analysisForUser) {
            this.analysisesList = this.analysisesByUser;
        } else {
            this.analysisesList = this.analysises;
        }
    }

    /**
     * Save Action handler
     *
     * @memberof SmartWorkspaceComponent
     */
    doSavePage(): void {
        this.hasUnsavedChanges = false;
        const projectId = this._route.snapshot.paramMap.get('id');

        const xml = this.b64EncodeUnicode(this._drawIOExtensionService.graphXml);
        const payload = new ReportPageUpdate(xml);
        this._reportService
            .save(payload, projectId, this.reportPage.data.scopeItemId, this.reportPage.data.sequenceNumber)
            .subscribe();
    }

    doSaveTemplate(): void {
        this.isNewContentTemplatePopupVisible = true;
    }

    saveContentTemplate(templateName: string): void {
        const projectId = this._route.snapshot.paramMap.get('id');

        let templateType = TemplateType.CONTENT_TEMPLATE_PAGE;
        if (this.reportPage.data.type == ReportPageType.COVER) {
            templateType = TemplateType.CONTENT_TEMPLATE_COVER;
        }

        const xml = this.b64EncodeUnicode(this._drawIOExtensionService.graphXml);
        const payload = new ReportPageUpdate(xml, templateName, templateType);
        this._reportService.saveContentTemplate(payload, projectId, this.reportPage.data.scopeItemId).subscribe(() => {
            this.reportTemplates$ = this._reportService.getTemplates(projectId, this.reportPage.data.scopeItemId);
        });
        this.isNewContentTemplatePopupVisible = false;
    }

    closeContentTemplatePopup(): void {
        this.isNewContentTemplatePopupVisible = false;
    }

    flipOrientation(): void {
        const isPortrait = this.isPortrait(
            this._drawIOExtensionService.pageFormat.width,
            this._drawIOExtensionService.pageFormat.height
        );

        const projectId = this._route.snapshot.paramMap.get('id');

        this._reportService
            .getMasterTemplate(
                !isPortrait,
                projectId,
                this.reportPage.data.productId,
                this.reportPage.data.chapterId,
                this.reportPage.data.scopeItemId,
                this.reportPage.data.sequenceNumber
            )
            .pipe(untilDestroyed(this))
            .subscribe(page => {
                this._drawIOExtensionService.setContent(page.data.content);
            });
    }

    addNewPage(orientation: ReportPageOrientation): void {
        this._addNewPage(this.reportPage.data.scopeItemId, undefined, orientation);
    }

    addNewCoverPage(orientation: ReportPageOrientation): void {
        this._addNewPage(this.reportPage.data.scopeItemId, undefined, orientation, ReportPageType.COVER);
    }

    addNewPageByTemplate(templateId: number): void {
        this._addNewPage(this.reportPage.data.scopeItemId, templateId);
    }

    addNewPageByTableOfContent(item: TableOfContent): void {
        this._addNewPage(item.taskId);
    }

    removePage(): void {
        this.pageToDelete = new ReportPageData();
        this.pageToDelete.scopeItemId = this.reportPage.data.scopeItemId;
        this.pageToDelete.sequenceNumber = this.reportPage.data.sequenceNumber;
        this.pageToDelete.taskName = this.reportPage.data.taskName;
        this.pageToDelete.pageNumber = this.reportPage.data.pageNumber;

        this.confirmDeletePopupVisible = true;
    }

    removePageByTableOfContent(item: TableOfContent): void {
        this.pageToDelete = new ReportPageData();
        this.pageToDelete.scopeItemId = item.taskId;
        this.pageToDelete.sequenceNumber = item.sequenceNumber;
        this.pageToDelete.taskName = item.title;
        this.pageToDelete.pageNumber = item.pageNumber;

        this.confirmDeletePopupVisible = true;
    }

    onConfirmDeletePagePopup = (): void => {
        this.confirmDeletePopupVisible = false;

        this._removePage(this.pageToDelete.scopeItemId, this.pageToDelete.sequenceNumber);
    };

    onCloseDeletePagePopup = (): void => {
        this.confirmDeletePopupVisible = false;
        this.pageToDelete = undefined;
    };

    nextPage(): void {
        const navigation = this._reportService.getNextNavigation(this.reportPage.links);

        this.navigateToReportPage(navigation);
    }

    previousPage(): void {
        const navigation = this._reportService.getPreviousNavigation(this.reportPage.links);

        this.navigateToReportPage(navigation);
    }

    selectPage(navigation: ReportPageNavigation): void {
        this.navigateToReportPage(navigation);
    }

    showTableOfContent() {
        this.tableOfContentVisible = true;
    }

    hideTableOfContent() {
        this.tableOfContentVisible = false;
    }

    /**
     * Generate Report action handler
     *
     * @private
     * @memberof SmartWorkspaceComponent
     */
    doGenerateReport(): void {
        this.generateReportPopupVisible = true;
    }

    generateReport(settings: ReportCreationSettings): void {
        const projectId = this._route.snapshot.paramMap.get('id');
        const taskId = this.reportPage.data.scopeItemId;

        this._reportService.getReport(projectId, settings, taskId).subscribe(
            pdfBytes => {
                const file = new Blob([pdfBytes], { type: 'application/pdf' });
                const filename = 'report.pdf';
                saveAs(file, filename);
            },
            error => {
                notify({
                    message: 'No report to display',
                    type: 'error',
                    displayTime: 5000,
                    closeOnClick: true
                });
            }
        );

        this.generateReportPopupVisible = false;
    }

    closeGenerateReportPopup(): void {
        this.generateReportPopupVisible = false;
    }

    closeImagePopup(): void {
        this.imagePopupVisible = false;
        this._drawIOExtensionService.enableGraph();
    }

    /**
     * function to add our special Generic Container
     *
     * @memberof SmartWorkspaceComponent
     */
    addGenericContainer(): void {
        this._drawIOExtensionService.addGenericContainer();
    }

    /**
     * function to add our special Generic Container
     *
     * @memberof SmartWorkspaceComponent
     */
    addImageContainer(): void {
        this._drawIOExtensionService.addImageContainer();
    }

    /**
     * function to insert Table Container
     *
     * @memberof SmartWorkspaceComponent
     */
    InsertTableContainer(): void {
        this._drawIOExtensionService.InsertTableContainer();
    }

    /**
     * Froala is called first time (initialisation)
     * @param froala
     */
    initFroala(froala) {
        this._froala = froala;
    }

    /**
     * Froala is called again
     */
    onEditPopupShowing() {
        this._drawIOExtensionService.disableGraph();
        this._froala.initialize();
        this._froala.getEditor()('html.set', this._drawIOExtensionService.selectedValue);
        this._clearEmptyFroalaContent();
    }

    onDonePopup = (): void => {
        let froalaContent = this._froala.getEditor()('html.get');

        if (this._drawIOExtensionService.isIntroColumnSelected && froalaContent.length > 0) {
            const content$ = $(froalaContent)
                .wrapAll('<div/>')
                .parent();
            content$.find('h1, h2, h3, p, blockquote').addClass('intro-column');

            froalaContent = content$.html();
        }

        this._drawIOExtensionService.updateAndEnableGraph(froalaContent);
        this._drawIOExtensionService.fireStopEditingEvent();
        this.clearFroala();
    };

    onFroalaPopupHiding() {
        this._drawIOExtensionService.enableGraph();
        this.clearFroala();
    }

    /**
     * handler for changing intro column
     *
     * @memberof SmartWorkspaceComponent
     */
    onIntroColumnChange = (event): void => {
        this.introColumnEnabled = event.value;

        // Intro column should be on left side over all rows
        if (event.value == true) {
            this._drawIOExtensionService.addIntroColumn();
        } else {
            this._drawIOExtensionService.removeIntroColumn();
        }
    };

    /**
     * helper to set the width for the dropdown
     *
     * @param {*} e
     * @memberof SmartWorkspaceComponent
     */
    onLayoutSelectBoxOpen(e) {
        e.component.reset();
        e.component._popup.option('width', 100);
    }

    /**
     * handler when layout was changed
     *
     * @param {*} e
     * @memberof SmartWorkspaceComponent
     */
    onLayoutSelectBoxChange(e) {
        const selectedLayout: Layout = e.selectedItem;

        if (selectedLayout) {
            if (this._drawIOExtensionService.hasOnlyIntroColumn) {
                this._drawIOExtensionService.removeIntroColumn();
            }
            if (!this._drawIOExtensionService.hasContainers) {
                this.switchIntroColumn.instance.option('value', selectedLayout.layoutColumn);
                selectedLayout.layoutContainers.forEach(container => {
                    this._drawIOExtensionService.addContainerWithSize(container);
                });
            } else {
                notify({
                    message: 'There is alreay content on the page',
                    type: 'error',
                    displayTime: 3000,
                    closeOnClick: true
                });
            }
        }
    }

    handleSnippetClicked(snippet: InfoSnippet) {
        this._clearEmptyFroalaContent();

        this._froala.getEditor()(
            'html.insert',
            $.FroalaEditor.START_MARKER + snippet.contentHtml + $.FroalaEditor.END_MARKER,
            true
        );
    }

    handleSidebarSnippetClicked(snippet: InfoSnippet) {
        if (this._drawIOExtensionService.getIsContentEditing) {
            const range = window.getSelection().getRangeAt(0);
            const content = range.extractContents();
            content.textContent = snippet.contentHtml;
            range.insertNode(content);
        } else {
            const currentCell = this._drawIOExtensionService.currentCell;
            const existingContent = this._drawIOExtensionService.getAttributeFromCell(currentCell, 'label');
            let newContent = '';
            if (this._drawIOExtensionService.isIntroColumnSelected) {
                if (existingContent == '<p class="intro-column"></p>') {
                    newContent = '<p class="intro-column">' + snippet.contentHtml + '</p>';
                } else {
                    newContent = existingContent + '<p class="intro-column">' + snippet.contentHtml + '</p>';
                }
            } else {
                if (
                    existingContent == '<p></p>' ||
                    existingContent == this._drawIOExtensionService.containerPlaceHolderText
                ) {
                    newContent = '<p>' + snippet.contentHtml + '</p>';
                } else {
                    newContent = existingContent + '<p>' + snippet.contentHtml + '</p>';
                }
            }

            this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', newContent);
            this._drawIOExtensionService.fireStopEditingEvent();
        }
    }

    setState(progressState: ProgressState): void {
        const projectId = this._route.snapshot.paramMap.get('id');
        const taskId = +this._route.snapshot.paramMap.get('taskId');

        const oldTaskState = this.taskState;
        this.taskState = progressState;

        this._taskService.changeState(projectId, taskId, progressState.id).subscribe(
            () => {
                this._smartWorkspaceMessageService.sendMessage(SmartWorkspaceMessageType.STRUCTURE_CHANGED);
            },
            error => {
                if (error instanceof HttpErrorResponse) {
                    this.taskState = oldTaskState;
                }
            }
        );
    }

    setFroalaPopupSize(width: number, height: number): void {
        const dxPopupContentPadding: number = 20;
        const dxPopupBorder: number = 1;
        const dxPopupHeaderFooter: number = 36;

        this.froalaOptions.width = this._getFroalaWidth(width);
        this.froalaOptions.height = height;
        this.froalaPopupSize.width =
            this._getFroalaWidth(width) + this._getSnippetsWidth(width) + dxPopupContentPadding * 2 + dxPopupBorder * 2;
        this.froalaPopupSize.height =
            height + this._froalaToolbarHeight + dxPopupHeaderFooter * 2 + dxPopupContentPadding * 2 + 60;
        this.froalaPopupSize.className = this._getFroalaAdditionalClassName(width);
        this.froalaPopupSize.snippetsStyle = this._getSnippetsStyle(width, height);
    }

    private _generatePopupStyles(gridLayout: ReportPageGridLayout): void {
        const width = gridLayout.pageWidth - (gridLayout.left + gridLayout.right);
        const boxWidth = Math.floor((width - (gridLayout.columns - 1) * gridLayout.spacing) / gridLayout.columns);

        for (let i = 0; i < this._froalaPopupStyleSheet.rules.length; i++) {
            this._froalaPopupStyleSheet.removeRule(i);
        }

        for (let i = 0; i < gridLayout.columns; i++) {
            const size = boxWidth * (i + 1) + gridLayout.spacing * i;

            if (i + 1 == this._froalaPopupBreakColumn) {
                this._froalaPopupBreakSize = size;
            }

            if (i + 1 == this._froalaPopupSnippetsBreakColumn) {
                this._froalaPopupSnippetsBreakSize = size;
            }

            this._froalaPopupStyleSheet.insertRule(`.froala-container.size${size} .fr-wrapper {width: ${size}px;}`, 0);
        }
    }

    private _getSnippetsWidth(width: number): number {
        if (width <= this._froalaPopupSnippetsBreakSize) {
            return 0;
        }

        return 232;
    }

    private _getSnippetsStyle(width: number, height: number): any {
        const basePadding: number = 12;
        let baseTop: number = 0;
        let padding: number = 0;
        if (width <= this._froalaPopupSnippetsBreakSize) {
            baseTop = this._froalaToolbarHeight;
            padding = basePadding;
        } else {
            height += this._froalaToolbarHeight;
        }

        return {
            top: `${baseTop + padding}px`,
            left: `${width + basePadding}px`,
            height: `${height - padding}px`
        };
    }

    private _getFroalaAdditionalClassName(width: number): string {
        if (width <= this._froalaPopupBreakSize) {
            return `size${width}`;
        }
        return '';
    }

    private _getFroalaWidth(width: number): any {
        if (width <= this._froalaPopupBreakSize) {
            return this._froalaPopupBreakSize;
        }

        return width;
    }

    private isPortrait(width: number, height: number): boolean {
        return width <= height;
    }

    private _addNewPage(
        taskId: number,
        templateId?: number | undefined,
        orientation?: ReportPageOrientation | undefined,
        type?: ReportPageType | undefined
    ): void {
        if (taskId == null) {
            return;
        }

        const projectId = this._route.snapshot.paramMap.get('id');

        this._reportService.newPage(projectId, taskId, templateId, orientation, type).subscribe(links => {
            this._smartWorkspaceMessageService.sendMessage(SmartWorkspaceMessageType.STRUCTURE_CHANGED);

            const navigation = this._reportService.getSelfNavigation(links);

            this.navigateToReportPage(navigation);
        });
    }

    private clearFroala() {
        this._froala.destroy();
        this.popupVisible = false;
    }

    private _removePage(taskId: number, sequenceNumber: number) {
        if (taskId == null || sequenceNumber == null) {
            return;
        }

        const projectId = this._route.snapshot.paramMap.get('id');

        this._reportService.removePage(projectId, taskId, sequenceNumber).subscribe(links => {
            this._smartWorkspaceMessageService.sendMessage(SmartWorkspaceMessageType.STRUCTURE_CHANGED);

            let navigation: ReportPageNavigation;

            if (taskId != this.reportPage.data.scopeItemId || sequenceNumber > this.reportPage.data.sequenceNumber) {
                // stay at the same page
            } else if (sequenceNumber < this.reportPage.data.sequenceNumber) {
                navigation = new ReportPageNavigation(
                    this.reportPage.data.productId,
                    this.reportPage.data.chapterId,
                    this.reportPage.data.scopeItemId,
                    this.reportPage.data.sequenceNumber - 1,
                    this.reportPage.data.guid
                );
            } else {
                navigation = this._reportService.getSelfNavigation(links);
            }

            if (navigation) {
                this.navigateToReportPage(navigation);
            }
        });
    }

    private navigateToReportPage(navigation: ReportPageNavigation, triggerRefresh: boolean = false) {
        const projectId = this._route.snapshot.paramMap.get('id');

        const urlTree = this._router.createUrlTree([
            'projects',
            projectId,
            'smart-workspace',
            navigation.productId,
            navigation.chapterId,
            navigation.taskId,
            'page',
            navigation.sequenceNumber,
            navigation.guid
        ]);

        if (triggerRefresh) {
            this._router.navigate(['/'], { skipLocationChange: true }).then(params => {
                this._router.navigateByUrl(urlTree, { replaceUrl: true });
            });
        } else {
            this._router.navigateByUrl(urlTree);
        }
    }

    private _clearEmptyFroalaContent() {
        const _froalaContent: any = $('#froala-editor .fr-element');
        if (_froalaContent != undefined) {
            if (_froalaContent.html() == '<p><br></p>' || _froalaContent.html() == '<br>') {
                _froalaContent.html(' ');
                _froalaContent.empty();
            }
        }
    }

    addImageToCell(event: string) {
        const currentCell = this._drawIOExtensionService.currentCell;
        const style = this._drawIOExtensionService.getCurrentCellStyle;
        style.fillColor = 'none';
        style.strokeColor = 'none';
        let newStyle: string = '';
        for (const [key, value] of Object.entries(style)) {
            newStyle = newStyle + (key + '=' + value + ';');
        }

        this._drawIOExtensionService.setCurrentCellStyle(newStyle);
        const style2 = this._drawIOExtensionService.getCurrentCellStyle;

        const image = new Image();

        image.onload = (e: any) => {
            const imageDimension = this.getImageDimensions(image, currentCell);

            const fullImg =
                // tslint:disable-next-line:max-line-length
                `<img alt="" width="` +
                imageDimension.width +
                `" height="` +
                imageDimension.height +
                `"` +
                ` src="` +
                event +
                `">`;

            this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', fullImg);
        };

        image.src = event;
    }

    deleteTemplate(e, template) {
        e.stopPropagation();

        this.templateToDeleteId = template.id;
        this.confirmDeleteTemplateVisible = true;
    }

    onConfirmDeleteTemplatePopup = (): void => {
        const projectId = this._route.snapshot.paramMap.get('id');

        this.confirmDeleteTemplateVisible = false;
        this._reportService.deleteContentTemplate(this.templateToDeleteId).subscribe(() => {
            this.reportTemplates$ = this._reportService.getTemplates(projectId, this.reportPage.data.scopeItemId);
            notify({
                message: 'Content Template deleted',
                type: 'success',
                displayTime: 5000,
                closeOnClick: true
            });
        });
        this.templateToDeleteId = undefined;
    };

    onCloseDeleteTemplatePopup = (): void => {
        this.confirmDeleteTemplateVisible = false;
        this.templateToDeleteId = undefined;
    };

    downloadTemplate(e, template) {
        e.stopPropagation();

        this._reportService
            .getContentTemplate(template.id)
            .pipe(
                catchError((error: any) => {
                    notify({
                        message: 'Content template could not be downloaded',
                        type: 'error',
                        displayTime: 5000,
                        closeOnClick: true
                    });

                    return throwError(error);
                })
            )
            .subscribe(templateContent => {
                const templateFileData: ReportPageUpdate = {
                    name: template.name,
                    backgroundColor: template.backgroundColor,
                    id: template.id,
                    content: templateContent.content,
                    templateType: template.templateType
                };

                const encodedJson = this.b64EncodeUnicode(JSON.stringify(templateFileData));

                const blob = new Blob([encodedJson], { type: 'text/plain;charset=utf-8' });
                saveAs(
                    blob,
                    `${this.reportPage.data.scopeItemId} ${template.name.replace(/[\\/:"*?<>|]+/g, '')}.cosmos`
                );
            });
    }

    importTemplate(event: any) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                try {
                    const importfile = this.b64DecodeUnicode(e.target.result);
                    this.validateAndImportTempate(importfile);
                } catch {
                    notify({
                        message: 'File can not be imported',
                        type: 'error',
                        displayTime: 3000,
                        closeOnClick: true
                    });
                }
            };
            reader.readAsText(event.target.files[0]);
        }
    }

    validateAndImportTempate(importedFile) {
        const decodedTemplate: ReportPageUpdate = JSON.parse(importedFile);

        if (decodedTemplate.content) {
            const projectId = this._route.snapshot.paramMap.get('id');

            let templateType = decodedTemplate.templateType;
            if (!templateType) {
                templateType = TemplateType.CONTENT_TEMPLATE_PAGE;
            }

            const xml = this.b64EncodeUnicode(decodedTemplate.content);

            const payload = new ReportPageUpdate(xml, decodedTemplate.name, templateType);
            this._reportService
                .saveContentTemplate(payload, projectId, this.reportPage.data.scopeItemId)
                .subscribe(() => {
                    this.reportTemplates$ = this._reportService.getTemplates(
                        projectId,
                        this.reportPage.data.scopeItemId
                    );
                    notify({
                        message: 'Content Template imported',
                        type: 'success',
                        displayTime: 5000,
                        closeOnClick: true
                    });
                });
            this.isNewContentTemplatePopupVisible = false;
        }
    }

    // Charts functions -------------------

    /**
     * load data for given analysis and insert it if space is available
     *
     * @param {Analysis} analysis
     * @memberof SmartWorkspaceComponent
     */
    addAnalysis(analysis: Analysis): void {
        const projectId = this._route.snapshot.paramMap.get('id');

        const freeCellsInSameRow = this._drawIOExtensionService.checkForFreeCellsWithSpan();

        // if there is no space no need to query BE
        if (typeof freeCellsInSameRow != 'undefined') {
            this._dataExplorerService.getAnalysis(projectId, analysis.id).subscribe(analysisData => {
                const analysisGot: Analysis = new AnalysisMapper().mapFromDto(this._dataExplorerService, analysisData);
                if (analysisData.isChartAnalysis) {
                    this.analysis = analysisGot;
                    // load chart
                    this.loadChartData(analysisGot);
                } else {
                    // load table
                    this.loadTableData(analysisGot);
                }
            });
        } else {
            notify({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
        }
    }

    /**
     * load Table data and create Container
     *
     * @param {Analysis} analysis
     * @memberof SmartWorkspaceComponent
     */
    loadTableData(analysis: Analysis): void {
        const projectId = this._route.snapshot.paramMap.get('id');
        this._dataExplorerService.html(projectId, analysis.id).subscribe(tableData => {
            tableData = tableData.replace(PLACE_HOLDER_TEXT, analysis.name + ' - ' + this.reportPage.data.taskName);
            this._drawIOExtensionService.addDataSheetContainer(analysis.id, tableData, projectId, 2);
        });
    }

    /**
     * load Chart Data and create container
     *
     * @param {Analysis} analysis
     * @memberof SmartWorkspaceComponent
     */
    loadChartData(analysis: Analysis): void {
        const projectId = this._route.snapshot.paramMap.get('id');

        this._dataExplorerService.getAnalysisChartDataById(projectId, analysis.id).subscribe(data => {
            this.dxChartData.chartData = data;
            const encodedChartData = this.b64EncodeUnicode(JSON.stringify(data));
            const encodedAnalysis = this.b64EncodeUnicode(JSON.stringify(analysis));

            this._drawIOExtensionService.addAnalysisGenericContainer(
                analysis.id,
                encodedChartData,
                encodedAnalysis,
                analysis.name,
                projectId,
                2
            );
        });
    }

    /**
     * updates charts dimension and render chart
     *
     * @param {*} cell
     */
    updateChartsDimensionAndRender(cell) {
        this._drawIOExtensionService.disableGraph();

        this._logger.debug('Render Charts after resizing', cell.geometry.width, cell.geometry.height);
        this.chartViewComponent.chartsHeight = cell.geometry.height - 32;
        this.chartViewComponent.chartsWidth = cell.geometry.width - 2;

        const analysisId = this._drawIOExtensionService.getAttributeFromCell(cell, 'AnalysisId');
        const analysisDataDecoded = JSON.parse(
            this.b64DecodeUnicode(this._drawIOExtensionService.getAttributeFromCell(cell, 'AnalysisData'))
        );
        const chartDataDecoded = JSON.parse(
            this.b64DecodeUnicode(this._drawIOExtensionService.getAttributeFromCell(cell, 'ChartData'))
        );

        this.chartViewComponent.loadStaticData(analysisDataDecoded, chartDataDecoded);
    }

    calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
        const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
        return { width: Math.round(srcWidth * ratio), height: Math.round(srcHeight * ratio) };
    }

    updateImageContainer(cell) {
        const currentCell = this._drawIOExtensionService.currentCell;

        const content = this._drawIOExtensionService.getAttributeFromCell(cell, 'label');

        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.innerHTML = content;
        const imageElement = <HTMLImageElement>wrapper.firstChild;

        const image = new Image();

        image.onload = (e: any) => {
            const imageDimension = this.getImageDimensions(image, currentCell);

            imageElement.height = imageDimension.height;
            imageElement.width = imageDimension.width;

            this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', imageElement.outerHTML);
        };

        image.src = imageElement.src;
    }

    getImageDimensions(image, currentCell) {
        let imageDimension = { width: 0, height: 0 };

        if (image.width > currentCell.geometry.width || image.height > currentCell.geometry.height) {
            imageDimension = this.calculateAspectRatioFit(
                image.width,
                image.height,
                currentCell.geometry.width,
                currentCell.geometry.height
            );
        } else {
            imageDimension.height = image.height;
            imageDimension.width = image.width;
        }

        return imageDimension;
    }

    /**
     * listener when the chart has finished rendering
     *
     */
    onChartReadyEvent(chartInstance): void {
        const currentCell = this._drawIOExtensionService.currentCell;
        if (typeof currentCell != 'undefined') {
            this._drawIOExtensionService.updateChartSVG(
                this.b64EncodeUnicode(chartInstance.svg()),
                this.chartViewComponent.chartsWidth,
                this.chartViewComponent.chartsHeight,
                currentCell,
                this.reportPage.data.taskName
            );
        }
    }
    onEditInDataExplorer(): void {
        const projectId = this._route.snapshot.paramMap.get('id');
        const currentCell = this._drawIOExtensionService.currentCell;
        const analysisId = this._drawIOExtensionService.getAttributeFromCell(currentCell, 'AnalysisId');
        this._router.navigate(['/projects', projectId, 'analysis', analysisId]);
    }

    onUpdateAnalysis = (): void => {
        const projectId = this._route.snapshot.paramMap.get('id');
        const currentCell = this._drawIOExtensionService.currentCell;
        const analysisId = this._drawIOExtensionService.getAttributeFromCell(currentCell, 'AnalysisId');
        this._logger.debug('update on analysis triggerd id:', analysisId);

        this._dataExplorerService.getAnalysis(projectId, analysisId).subscribe(analysisData => {
            if (analysisData.isChartAnalysis) {
                // update chart
                this._dataExplorerService.getAnalysisChartDataById(projectId, analysisId).subscribe(data => {
                    this.dxChartData.chartData = data;
                    this._logger.debug('got new chart data from api:', data);
                    const encodedChartData = this.b64EncodeUnicode(JSON.stringify(data));
                    const encodedAnalysis = this.b64EncodeUnicode(JSON.stringify(analysisData));
                    currentCell.setAttribute('SmartWorkspaceContainerType', SmartWorkspaceContainerType.Charts);
                    currentCell.setAttribute('ChartData', encodedChartData);
                    currentCell.setAttribute('AnalysisData', encodedAnalysis);
                    currentCell.setAttribute('AnalysisName', analysisData.name);
                    this.updateChartsDimensionAndRender(currentCell);
                });
            } else {
                // update table
                this._dataExplorerService.html(projectId, analysisId).subscribe(tableData => {
                    this._logger.debug('got now table data from api:', tableData);

                    tableData = tableData.replace(
                        PLACE_HOLDER_TEXT,
                        analysisData.name + ' - ' + this.reportPage.data.taskName
                    );

                    currentCell.setAttribute(
                        'SmartWorkspaceContainerType',
                        SmartWorkspaceContainerType.DataExplorerTable
                    );
                    currentCell.setAttribute('ChartData', '');
                    currentCell.setAttribute('AnalysisData', '');
                    this._drawIOExtensionService.disableGraph();
                    this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', tableData);
                });
            }
        });
    };
    b64EncodeUnicode(str) {
        return btoa(
            encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            })
        );
    }

    b64DecodeUnicode(str) {
        return decodeURIComponent(
            Array.prototype.map
                .call(atob(str), function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );
    }
}
