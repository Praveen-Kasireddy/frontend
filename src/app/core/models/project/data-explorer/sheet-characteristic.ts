import { SheetDimensionType } from '@core/enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { Characteristic } from '@core/models/project/characteristic';
import { FormulaItem } from '@core/models/project/data-explorer/formula-item';

export class SheetCharacteristic {
    id: number;
    dimensionType: SheetDimensionType;
    type: SheetCharacteristicType;
    characteristics: Characteristic[];
    caption: string;
    removeFromChart: boolean;
    formulaItems: FormulaItem[];
    formatPercent?: boolean;
      sheetCharacteristics: SheetCharacteristic[];
    labelIndex?: number;

    get childrenInDepthAndMe(): SheetCharacteristic[] {
        return (this.sheetCharacteristics.length == 0
            ? []
            : this.sheetCharacteristics.map(c => c.childrenInDepthAndMe).reduce((a, c) => a.concat(c))
        ).concat(this);
    }

    get label(): string {
        if (this.id) {
            switch (this.dimensionType) {
                case SheetDimensionType.Columns:
                    return this.getColumnIndexLetter(this.labelIndex);
                case SheetDimensionType.Rows:
                    return String(this.labelIndex + 1);
                default:
                    return '1';
            }
        }
        return '';
    }

    private getColumnIndexLetter(i: number) {
        const previousLetters = i >= 26 ? this.getColumnIndexLetter(Math.floor(i / 26) - 1) : '';
        const lastLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i % 26];
        return previousLetters + lastLetter;
    }
}
