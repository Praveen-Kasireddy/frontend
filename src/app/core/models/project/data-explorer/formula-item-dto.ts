import { FormulaItemType } from '@core/enum';

export class FormulaItemDto {
    type: FormulaItemType;
    sheetCharacteristicId?: number;
    mathematicCaption?: string;
    constantValue?: number;
}
