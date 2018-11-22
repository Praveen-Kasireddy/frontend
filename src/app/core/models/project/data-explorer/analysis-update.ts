import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';
import { SheetDimensionUpdate } from '@core/models/project/data-explorer/sheet-dimension-update';

export class AnalysisUpdate {
    name: string;
    dimensions: SheetDimensionUpdate[];
    isChartAnalysis: boolean;
    chartDisplayMode: ChartDisplayMode;
    chartType: ChartType;
    scale: number;
}
