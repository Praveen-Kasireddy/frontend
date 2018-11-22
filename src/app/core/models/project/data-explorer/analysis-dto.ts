import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';
import { User } from '@core/models';
import { SheetDimensionDto } from '@core/models/project/data-explorer/sheet-dimension-dto';

export class AnalysisDto {
    id?: number;
    name?: string;
    dimensions: SheetDimensionDto[];
    isChartAnalysis?: boolean;
    chartDisplayMode?: ChartDisplayMode;
    chartType?: ChartType;
    userCreatedBy?: User;
    scale?: number;
}
