import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { SheetCharacteristicDto } from '@core/models/project/data-explorer/sheet-characteristic-dto';

export class SheetDimensionDto {
    type: SheetDimensionType;
    characteristics: SheetCharacteristicDto[];
}
