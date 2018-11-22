import { CHART_ARGUMENT_FIELD_NAME } from '@core/app.const';
import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';

export class ChartData {
    chartData: any[];
    chartArgumentField: string = CHART_ARGUMENT_FIELD_NAME;
    chartRows: string[] = [];
    chartIsBar: boolean = true;
    chartDisplayModeString: string = 'bar';
    chartDisplayMode: ChartDisplayMode = ChartDisplayMode.NORMAL;
    chartType: ChartType = ChartType.BAR;
    chartsWidth = 300;
    chartsHeight = 300;
    renderOptions = {
        force: true, // forces redrawing
        animate: false, // redraws the widget without animation
        asyncSeriesRendering: false // redraws the widget synchronously
    };
}
