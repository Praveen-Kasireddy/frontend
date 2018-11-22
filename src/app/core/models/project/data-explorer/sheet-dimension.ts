import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';

export class SheetDimension {
    type: SheetDimensionType;
    characteristics: SheetCharacteristic[];

    get expandedCharacteristics(): SheetCharacteristic[] {
        return this.characteristics.length == 0
            ? []
            : this.characteristics.map(c => c.childrenInDepthAndMe).reduce((a, c) => a.concat(c));
    }
}
