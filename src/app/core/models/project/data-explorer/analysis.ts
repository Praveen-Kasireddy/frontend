import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { SheetDimension } from '@core/models/project/data-explorer/sheet-dimension';
import { User } from '@core/models/user';

export class Analysis {
    id?: number;
    name: string;
    timestamp?: string;
    dimensions: SheetDimension[];
    isChartAnalysis: boolean;
    chartDisplayMode: ChartDisplayMode;
    chartType: ChartType;
    userCreatedBy: User;
    scale: number;
    maxId?: number;

    get allCharacteristics(): SheetCharacteristic[] {
        const ds = this.dimensions.map(d => d.expandedCharacteristics);
        return ds.length == 0 ? [] : ds.reduce((a, c) => a.concat(c));
    }

    get newSheetCharacteristicId(): number {
        if (this.maxId == undefined) {
            this.maxId = 0;
        }
        const cs = this.allCharacteristics;
        this.maxId = Math.max(this.maxId, cs.length == 0 ? 0 : Math.max(...cs.map(c => c.id)));
        return ++this.maxId;
    }

    sheetCharacteristic(id: number): SheetCharacteristic {
        return this.allCharacteristics.find(c => c.id == id);
    }
}
