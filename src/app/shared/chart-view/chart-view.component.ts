import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { CHART_ARGUMENT_FIELD_NAME, CHART_ISPERCENTVALUE_FIELD_NAME, KPMG_CHART_COLOR_SET, CHART_NAME_FIELD_NAME, CHART_VALUE_FIELD_NAME } from '@core/app.const';
import { ChartActiveType } from '@core/enum/chart-active-type.enum';
import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';
import { Analysis, Project } from '@core/models';
import { DataExplorerService } from '@core/services';
import { AnalysisMapper } from '@shared/data-explorer/analysis-mapper';
import { currentPalette, registerPalette } from 'devextreme/viz/palette';
import { SharedStorageService } from 'ngx-store';
import { ChartConfigurationBarComponent } from './chart-configuration-bar/chart-configuration-bar.component';

@Component({
    selector: 'kosmos-chart-view',
    templateUrl: './chart-view.component.html'
})
export class ChartViewComponent implements OnDestroy, OnInit {
    @ViewChild(ChartConfigurationBarComponent)
    private chartConfigurationBar: ChartConfigurationBarComponent;
    @Input()
    analysis: Analysis;
    @Input()
    showBar: boolean = true;

    @Output()
    chartDrawn = new EventEmitter<any>();

    activeChartTypeEnum = ChartActiveType;
    activeChartType: ChartActiveType;

    dxChart: any;
    dxPieChartNormal: any;
    dxPieChartPercent: any;

    chartDisplayMode: ChartDisplayMode = ChartDisplayMode.NORMAL;
    chartType: ChartType = ChartType.BAR;
    isBar: boolean = true;
    chartDisplayModeString: string = 'bar';
    selectedProject: Project;
    argumentField: string = CHART_ARGUMENT_FIELD_NAME;
    nameField: string = CHART_NAME_FIELD_NAME;
    valueField: string = CHART_VALUE_FIELD_NAME;
    percentageFlag: string = CHART_ISPERCENTVALUE_FIELD_NAME;
    enableMargin: boolean = true;
    isPie: boolean = false;
    showNormalPie: boolean = true;
    canDisplayPie: boolean = false;
    // use border only for line and area charts
    useBorder: boolean = false;

    chartsWidth;
    chartsHeight;
    renderOptions = {
        force: true, // forces redrawing
        animate: false, // redraws the widget without animation
        asyncSeriesRendering: false // redraws the widget synchronously
    };

    data: any[];
    pieChartData: any[] = [];

    showData: boolean = false;

    subscriptionToUnsubscribe: any;

    pieChartLabelNormal(arg) {
        let labelText: string = arg.argumentText;
        let labelValue: string = arg.valueText;
        if (arg.argumentText.substring(0, 3) == '#-#') {
            labelText = arg.argumentText.substring(3, arg.argumentText.length);
            labelValue = (Number(arg.valueText) * -1).toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2});
        } else {
            labelValue = Number(arg.valueText).toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2});
        }
        return labelText + ' ' + labelValue;
    }

    pieChartLabelPercent(arg) {
        let labelText: string = arg.argumentText;
        let labelValue: string = arg.percentText;
        if (arg.argumentText.substring(0, 3) == '#-#') {
            labelText = arg.argumentText.substring(3, arg.argumentText.length);
            labelValue = '-' + arg.percentText;
        }
        return labelText + ' ' + labelValue;
    }

    chartLabel(arg: any) {
        return arg.point.data[CHART_ISPERCENTVALUE_FIELD_NAME]
            ? arg.value.toLocaleString('en', {maximumFractionDigits: 1, minimumFractionDigits: 0, style: 'percent'})
            : arg.value.toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2});
    }

    constructor(
        private _dataExplorerService: DataExplorerService,
        private _sharedStorageService: SharedStorageService
    ) {}

    ngOnDestroy() {
        this.subscriptionToUnsubscribe.unsubscribe();
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');

        registerPalette('kpmgPalette', KPMG_CHART_COLOR_SET);
        currentPalette('kpmgPalette');

        if (this.analysis != undefined) {
            this.reloadData(this.analysis);
        }

        this.subscriptionToUnsubscribe = this._dataExplorerService.currentAnalysisChanged.subscribe(analysis => {
            this.reloadData(analysis);
        });
    }

    saveChartInstance(selectedChartType: ChartActiveType, event) {
        switch (selectedChartType) {
            case ChartActiveType.Chart:
                this.dxChart = event.component;
                break;
            case ChartActiveType.PieChartNormal:
                this.dxPieChartNormal = event.component;
                break;
            case ChartActiveType.PieChartPercent:
                this.dxPieChartPercent = event.component;
                break;
            default:
                break;
        }
    }

    reloadData(analysis: Analysis) {
        if (!analysis.chartType) {
            analysis.chartType = ChartType.BAR;
        }

        if (!analysis.chartDisplayMode) {
            analysis.chartDisplayMode = ChartDisplayMode.NORMAL;
        }

        this.chartConfigurationBar.setChartType(analysis.chartType, false);
        this.chartConfigurationBar.setChartDisplayMode(analysis.chartDisplayMode, false);

        this.chartType = analysis.chartType;
        this.chartDisplayMode = analysis.chartDisplayMode;

        this.setChartParameters();

        if (analysis.dimensions[0].characteristics.length > 0 || analysis.dimensions[1].characteristics.length > 0) {
            this.showData = true;
            this._dataExplorerService
                .getChartData(this.selectedProject.projectGuid, new AnalysisMapper().mapToDto(analysis.name, analysis))
                .subscribe(data => {
                    this.createChartData(data);
                });
        } else {
            this.showData = false;
        }
    }

    loadStaticData(analysis: Analysis, data: any) {
        this.showData = true;
        if (!analysis.chartType) {
            analysis.chartType = ChartType.BAR;
        }

        if (!analysis.chartDisplayMode) {
            analysis.chartDisplayMode = ChartDisplayMode.NORMAL;
        }

        this.chartConfigurationBar.setChartType(analysis.chartType, false);
        this.chartConfigurationBar.setChartDisplayMode(analysis.chartDisplayMode, false);

        this.chartType = analysis.chartType;
        this.chartDisplayMode = analysis.chartDisplayMode;

        this.setChartParameters();

        this.createChartData(data);

        setTimeout(() => {
            this.renderCharts();
        }, 100);
    }

    createChartData(data: any) {
        this.data = data;

        this.pieChartData = [];
        if (data && data.length > 0) {
            const arg = data[0].argumentField;
            for (const o of data) {
                this.canDisplayPie = true;
                if (o[this.argumentField] != arg) {
                    this.pieChartData = [];
                    this.canDisplayPie = false;
                    break;
                }
                let absKey: string = o[this.nameField];
                let absValue: number = Number(o[this.valueField]);
                if (absValue < 0) {
                    absKey = '#-#' + absKey;
                    absValue = Math.abs(absValue);
                }

                this.pieChartData.push({ argumentField: absKey, valueField: absValue });
            }

            // refresh
            this.renderCharts();
        }
    }

    renderCharts() {
        try {
            switch (this.activeChartType) {
                case ChartActiveType.Chart:
                    this.dxChart.render(this.renderOptions);
                    break;
                case ChartActiveType.PieChartNormal:
                    this.dxPieChartNormal.render(this.renderOptions);
                    break;
                case ChartActiveType.PieChartPercent:
                    this.dxPieChartPercent.render(this.renderOptions);
                    break;
                default:
                    break;
            }
        } catch (e) {
            // just ignore the error, only occurs when dx component is not ready
        }
    }

    onSetChartType(chartType: ChartType) {
        this.chartType = chartType;
        this.setChartParameters();

        this.analysis.chartType = this.chartType;
        this.chartConfigurationBar.setChartType(this.chartType, false);
        this.chartConfigurationBar.setChartDisplayMode(this.chartDisplayMode, false);
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }

    onSetChartDisplayMode(chartDisplayMode: ChartDisplayMode) {
        this.chartDisplayMode = chartDisplayMode;
        this.setChartParameters();

        this.analysis.chartDisplayMode = this.chartDisplayMode;
        this.chartConfigurationBar.setChartDisplayMode(this.chartDisplayMode, false);
    }

    onChartReady(type: ChartActiveType) {
        switch (this.activeChartType) {
            case ChartActiveType.Chart:
                this.chartDrawn.emit(this.dxChart);
                break;
            case ChartActiveType.PieChartNormal:
                this.chartDrawn.emit(this.dxPieChartNormal);
                break;
            case ChartActiveType.PieChartPercent:
                this.chartDrawn.emit(this.dxPieChartPercent);
                break;
            default:
                break;
        }
    }

    private setChartParameters() {
        this.isBar = false;

        switch (this.chartType) {
            case ChartType.BAR:
                this.isBar = true;
                this.isPie = false;
                this.chartDisplayModeString = 'bar';
                this.setBarChartMode();
                this.enableMargin = true;
                this.activeChartType = ChartActiveType.Chart;
                this.useBorder = false;
                break;
            case ChartType.COL:
                this.isBar = false;
                this.isPie = false;
                this.chartDisplayModeString = 'bar';
                this.enableMargin = true;
                this.setBarChartMode();
                this.activeChartType = ChartActiveType.Chart;
                this.useBorder = false;
                break;
            case ChartType.LINE:
                this.isBar = false;
                this.isPie = false;
                this.chartDisplayModeString = 'line';
                if (this.chartDisplayMode == ChartDisplayMode.STACKED) {
                    this.chartDisplayModeString = 'stackedline';
                }
                if (this.chartDisplayMode == ChartDisplayMode.PERCENTAGE) {
                    this.chartDisplayModeString = 'fullstackedline';
                }
                this.enableMargin = false;
                this.activeChartType = ChartActiveType.Chart;
                this.useBorder = true;
                break;
            case ChartType.AREA:
                this.isBar = false;
                this.isPie = false;
                this.chartDisplayModeString = 'area';
                if (this.chartDisplayMode == ChartDisplayMode.STACKED) {
                    this.chartDisplayModeString = 'stackedarea';
                }
                if (this.chartDisplayMode == ChartDisplayMode.PERCENTAGE) {
                    this.chartDisplayModeString = 'fullstackedarea';
                }
                this.enableMargin = false;
                this.activeChartType = ChartActiveType.Chart;
                this.useBorder = true;
                break;
            case ChartType.PIE:
                this.isPie = true;
                if (this.chartDisplayMode == ChartDisplayMode.STACKED) {
                    this.chartDisplayMode =
                        this.analysis.chartDisplayMode == ChartDisplayMode.STACKED
                            ? ChartDisplayMode.NORMAL
                            : this.analysis.chartDisplayMode;
                }
                if (this.chartDisplayMode == ChartDisplayMode.NORMAL) {
                    this.showNormalPie = true;
                    this.activeChartType = ChartActiveType.PieChartNormal;
                } else {
                    this.showNormalPie = false;
                    this.activeChartType = ChartActiveType.PieChartPercent;
                }
                this.useBorder = false;
                break;
            default:
                break;
        }
    }

    private setBarChartMode() {
        if (this.chartDisplayMode == ChartDisplayMode.STACKED) {
            this.chartDisplayModeString = 'stackedBar';
        }
        if (this.chartDisplayMode == ChartDisplayMode.PERCENTAGE) {
            this.chartDisplayModeString = 'fullStackedBar';
        }
    }
}
