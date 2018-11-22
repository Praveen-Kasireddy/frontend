import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RIGHTS } from '@core/app.const';
import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { UnsavedChanges } from '@core/guards/unsaved-changes/unsaved-changes';
import { Project } from '@core/models';
import { Analysis } from '@core/models/project/data-explorer/analysis';
import { AnalysisDto } from '@core/models/project/data-explorer/analysis-dto';
import { DataExplorerService } from '@core/services';
import { AnalysisMapper } from '@shared/data-explorer/analysis-mapper';
import { SharedStorageService } from 'ngx-store';

@Component({
    moduleId: module.id,
    selector: 'kosmos-analysis-page',
    templateUrl: 'analysis-page.component.html',
    styleUrls: ['analysis-page.component.scss']
})
export class AnalysisPageComponent extends UnsavedChanges implements OnDestroy, OnInit {
    @ViewChild('ScaleDropDown')
    scaleDropDown;
    selectedProject: Project;
    analysis: Analysis;
    showTable: boolean;
    showChart: boolean;
    selectedScales: number[];
    availableScales: { value: number; display: string; displaySelected: string }[] = [
        { value: 1, display: '1', displaySelected: 'Scale: 1' },
        { value: 1000, display: '1,000', displaySelected: 'Scale: 1,000' },
        { value: 1000000, display: '1,000,000', displaySelected: 'Scale: 1,000,000' }
    ];
    tableViewCaption = 'Table';
    chartViewCaption = 'Chart';
    RIGHTS = RIGHTS;
    editFormula: boolean = false;
    subscriptionsToUnsubscribe: any[] = [];

    get analysisName(): string {
        return this.analysis ? this.analysis.name : '';
    }
    set analysisName(value: string) {
        if (this.analysis != undefined && this.analysis != null && this.analysis.name != value) {
            this.analysis.name = value;
            this._dataExplorerService.notifyCurrentAnalysisChanged();
        }
    }

    constructor(
        private _sharedStorageService: SharedStorageService,
        private _route: ActivatedRoute,
        private _dataExplorerService: DataExplorerService,
        private _router: Router
    ) {
        super();
        this.selectedScales = [this.availableScales[0].value];
    }

    closeFormulaEditor() {
        this.editFormula = false;
    }

    ngOnDestroy() {
        this.subscriptionsToUnsubscribe.forEach(s => s.unsubscribe());
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        const sharedStorage = this._sharedStorageService;
        this.subscriptionsToUnsubscribe.push(
            this._route.paramMap.subscribe(params => {
                const analysisId = params.get('analysisId');
                if (analysisId) {
                    this._dataExplorerService
                        .getAnalysis(this.selectedProject.projectGuid, Number(analysisId))
                        .subscribe(dto => {
                            this.analysis = new AnalysisMapper().mapFromDto(this._dataExplorerService, dto);
                            this.showChart = dto.isChartAnalysis;
                            this.showTable = !this.showChart;
                            this.selectedScales = [dto.scale];
                            this._dataExplorerService.setAnalysis(this.analysis);
                        });
                } else {
                    this._dataExplorerService.setAnalysis(
                        (this.analysis = new AnalysisMapper().mapFromDto(this._dataExplorerService, {
                            name: sharedStorage.get('newAnalysisName'),
                            userCreatedBy: undefined,
                            isChartAnalysis: false,
                            chartDisplayMode: ChartDisplayMode.NORMAL,
                            chartType: ChartType.BAR,
                            scale: this.selectedScales[0],
                            dimensions: [
                                { type: SheetDimensionType.Columns, characteristics: [] },
                                { type: SheetDimensionType.Rows, characteristics: [] },
                                { type: SheetDimensionType.Global, characteristics: [] }
                            ]
                        }))
                    );
                    this._dataExplorerService.selectDimension(this.analysis.dimensions[0]);
                    this.showTable = true;
                }
            })
        );
        this._dataExplorerService.editFormulaRequested.subscribe(() => (this.editFormula = true));

        this.subscriptionsToUnsubscribe.push(
            this._dataExplorerService.currentAnalysisChanged.subscribe(analysis => (this.analysis = analysis))
        );
    }

    onScaleDropDownBoxSelectionChanged = function(args) {
        this.scaleDropDown.instance.close();
        this._dataExplorerService.currentAnalysis.scale = this.selectedScales[0];
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    };

    save() {
        // save chart type and display mode fist as the values are not updated in analysis of the service
        const chartType = this.analysis.chartType;
        const chartDisplayMode = this.analysis.chartDisplayMode;
        this.analysis = this._dataExplorerService.currentAnalysis;
        this.analysis.isChartAnalysis = this.showChart;
        this.analysis.chartDisplayMode = this.showChart ? chartDisplayMode : undefined;
        this.analysis.chartType = this.showChart ? chartType : undefined;
        this.analysis.scale = this.selectedScales[0];
        const model: AnalysisDto = new AnalysisMapper().mapToDto(this.analysis.name, this.analysis);
        if (this.analysis.id) {
            this._dataExplorerService
                .updateAnalysis(this.selectedProject.projectGuid, this.analysis.id, model)
                .subscribe();
        } else {
            this._dataExplorerService.createAnalysis(this.selectedProject.projectGuid, model).subscribe(id => {
                this.analysis.id = id;
                this._router.navigate(['/projects', this.selectedProject.projectGuid, 'analysis', id]);
            });
        }
    }

    onTableViewClicked() {
        if (!this.showTable) {
            this.showTable = true;
            this.showChart = !this.showTable;
            this._dataExplorerService.notifyCurrentAnalysisChanged();
        }
    }

    onChartViewClicked() {
        this.showChart = true;
        this.analysis.chartType = ChartType.BAR;
        this.analysis.chartDisplayMode = ChartDisplayMode.NORMAL;
        this.showTable = !this.showChart;
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }

    validate = (params: any): void => {
        this._dataExplorerService.existsAnalysis(this.selectedProject.projectGuid, params.value).subscribe(exists => {
            params.rule.isValid = !exists;
            params.rule.message = exists ? 'The title already exists' : '';
            params.validator.validate();
        });
    };

    hasChanges(): boolean {
        return this._dataExplorerService.hasChanges;
    }
}
