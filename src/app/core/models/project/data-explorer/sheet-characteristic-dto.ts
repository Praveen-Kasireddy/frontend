import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { Characteristic } from '@core/models/project/characteristic';
import { FormulaItemDto } from '@core/models/project/data-explorer/formula-item-dto';

export class SheetCharacteristicDto {
    id: number;
    type: SheetCharacteristicType;
    caption: string;
    removeFromChart?: boolean;
    characteristics?: Characteristic[];
    formulaItems?: FormulaItemDto[];
    sheetCharacteristics?: SheetCharacteristicDto[];
    formatPercent?: boolean;
}
