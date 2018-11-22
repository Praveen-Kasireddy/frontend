import { FreeTextType } from '@core/enum/';
import { Characteristic } from '@core/models';

export class Dimension {
    id: number;
    name: string;
    freeTextType: FreeTextType;
    characteristics: Characteristic[];
}
