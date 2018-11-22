import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WhenEmpty } from '@core/decorators/when-empty';
import { ReportPageType } from '@core/enum';
import { SmartWorkspaceMessageType } from '@core/enum/smart-workspace-message-type.enum';
import { ReportPageNavigation, TableOfContent } from '@core/models';
import { ReportService, SmartWorkspaceMessageService } from '@core/services';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';

@TakeUntilDestroy()
@Component({
    selector: 'kosmos-smart-workspace-table-of-content',
    templateUrl: './smart-workspace-table-of-content.component.html',
    styleUrls: ['./smart-workspace-table-of-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartWorkspaceTableOfContentComponent implements OnInit, OnDestroy {
    @Input()
    @WhenEmpty(false)
    @HostBinding('class.open')
    isOpen: boolean;

    @Output()
    selectPage = new EventEmitter<ReportPageNavigation>();
    @Output()
    close = new EventEmitter();
    @Output()
    addPage = new EventEmitter<TableOfContent>();
    @Output()
    deletePage = new EventEmitter<TableOfContent>();

    tableOfContent: TableOfContent[] = [];
    pageType = ReportPageType;

    get selectedTaskId(): number {
        return +this._route.snapshot.paramMap.get('taskId');
    }

    private get _selectedProjectId(): string {
        return this._route.snapshot.paramMap.get('id');
    }

    private get _selectedSequenceNumber(): number {
        return +this._route.snapshot.paramMap.get('sequenceNumber');
    }

    constructor(
        private _ref: ChangeDetectorRef,
        private _reportService: ReportService,
        private _smartWorkspaceMessageService: SmartWorkspaceMessageService,
        private _route: ActivatedRoute
    ) {}

    ngOnInit() {
        this._loadTableOfContent();

        this._route.params.subscribe(params => {
            this._refreshProducts(this.isOpen);
        });

        this._smartWorkspaceMessageService
            .getMessage()
            .pipe(untilDestroyed(this))
            .subscribe(message => {
                switch (message.type) {
                    case SmartWorkspaceMessageType.STRUCTURE_CHANGED:
                        this._loadTableOfContent();
                        break;
                }
            });
    }

    ngOnDestroy(): void {}

    trackById(_, item: any) {
        return item.id;
    }

    isSelected(item: TableOfContent): boolean {
        if (item.taskId == null || item.sequenceNumber == null) {
            return false;
        }

        if (item.taskId != this.selectedTaskId || item.sequenceNumber != this._selectedSequenceNumber) {
            return false;
        }

        if (this._selectedSequenceNumber == 1 && this.hasChildren(item)) {
            return false;
        }

        return true;
    }

    hasChildren(item: TableOfContent): boolean {
        return item.children != null && item.children.length > 0;
    }

    onSelect(item: TableOfContent, event: MouseEvent): void {
        event.stopPropagation();
        if (item.taskId != null && item.sequenceNumber != null) {
            this.selectPage.emit(
                new ReportPageNavigation(item.productId, item.chapterId, item.taskId, item.sequenceNumber, item.guid)
            );
        }
    }

    onCollapse(item: TableOfContent): void {
        item.isCollapsed = !item.isCollapsed;
    }

    onClose(): void {
        this.close.emit();
    }

    onAddPage(item: TableOfContent): void {
        if (item.taskId == null) {
            return;
        }

        this.addPage.emit(item);
    }

    onDeletePage(item: TableOfContent): void {
        if (item.taskId == null || item.sequenceNumber == null) {
            return;
        }

        this.deletePage.emit(item);
    }

    private _loadTableOfContent(): void {
        this._reportService.getTableOfContent(this._selectedProjectId).subscribe(tableOfContent => {
            this.tableOfContent = tableOfContent;

            this._refreshProducts();
        });
    }

    private _refreshProducts(isOpen: boolean = false): void {
        this.tableOfContent.forEach(item => {
            const check = item.includedTasks.find(x => x == this.selectedTaskId) != null;

            if (!check && !isOpen) {
                item.isCollapsed = false;
            } else if (check) {
                item.isCollapsed = true;
            }
        });

        if (this.isOpen) {
            this._ref.detectChanges();
        }
    }
}
