import { FormulaItemType } from '@core/enum/formula-item-type.enum';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';

export class FormulaItem {
    type: FormulaItemType;
    sheetCharacteristic?: SheetCharacteristic;
    mathematicCaption?: string;
    constantValue?: number;

    get caption(): string {
        switch (this.type) {
            case FormulaItemType.Constant:
                return this.constantValue.toString();
            case FormulaItemType.Mathematic:
                return this.mathematicCaption;
            case FormulaItemType.SheetCharacteristic:
                return this.sheetCharacteristic
                    ? this.sheetCharacteristic.label + ' ' + this.sheetCharacteristic.caption
                    : 'deleted column/row';
            default:
                throw new Error('type ' + this.type + ' not supported');
        }
    }
}
