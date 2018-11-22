import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';

@Component({
    selector: 'kosmos-chart-configuration-bar',
    templateUrl: './chart-configuration-bar.component.html',
    styleUrls: ['./chart-configuration-bar.component.scss']
})
export class ChartConfigurationBarComponent implements OnInit {
    @Input()
    isStackedAllowed: boolean;
    @Output()
    chartTypeChanged = new EventEmitter<ChartType>();
    @Output()
    chartDisplayModeChanged = new EventEmitter<ChartDisplayMode>();

    isBarType: boolean = false;
    isColType: boolean = false;
    isLineType: boolean = false;
    isAreaType: boolean = false;
    isPieType: boolean = false;

    isNormal: boolean = false;
    isStacked: boolean = false;
    isPercentage: boolean = false;

    // Enumeration variables for using in template
    chartDisplayMode = ChartDisplayMode;
    chartType = ChartType;

    constructor() {}

    ngOnInit() {}

    setChartType(chartType: ChartType, doEmit: boolean) {
        this.isBarType = false;
        this.isColType = false;
        this.isLineType = false;
        this.isAreaType = false;
        this.isPieType = false;

        switch (chartType) {
            case ChartType.BAR:
                this.isBarType = true;
                break;
            case ChartType.COL:
                this.isColType = true;
                break;
            case ChartType.LINE:
                this.isLineType = true;
                break;
            case ChartType.AREA:
                this.isAreaType = true;
                break;
            case ChartType.PIE:
                this.isPieType = true;
                break;
            default:
                break;
        }

        if (doEmit) {
            this.chartTypeChanged.emit(chartType);
        }
    }

    setChartDisplayMode(chartDisplayMode: ChartDisplayMode, doEmit: boolean) {
        this.isNormal = false;
        this.isStacked = false;
        this.isPercentage = false;

        switch (chartDisplayMode) {
            case ChartDisplayMode.NORMAL:
                this.isNormal = true;
                break;
            case ChartDisplayMode.PERCENTAGE:
                this.isPercentage = true;
                break;
            case ChartDisplayMode.STACKED:
                this.isStacked = true;
                break;
            default:
                break;
        }

        if (doEmit) {
            this.chartDisplayModeChanged.emit(chartDisplayMode);
        }
    }
}
