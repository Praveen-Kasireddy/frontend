import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { SheetCharacteristicUpdate } from '@core/models/project/data-explorer/sheet-characteristic-update';

export class SheetDimensionUpdate {
    type: SheetDimensionType;
    characteristics: SheetCharacteristicUpdate[];
}
