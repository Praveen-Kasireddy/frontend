import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { FormulaItem } from '@core/models/project/data-explorer/formula-item';

export class SheetCharacteristicUpdate {
    type: SheetCharacteristicType;
    caption: string;
    removeFromChart: boolean;
    characteristicIds?: number[];
    formulaItems?: FormulaItem[];
}
