import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';

export class DataPaletteItem {
    type: SheetCharacteristicType;
    characteristicId?: number;
    name?: string;
    isExpanded?: boolean;
    cssClass?: string;
    children?: DataPaletteItem[];
}
