import { FreeTextType } from '@core/enum';
import { CharacteristicItem } from '@core/models/project/data-approval/characteristic-item';
import { Dimension } from '@core/models/project/data-approval/dimension-model';

export class DimensionItem extends Dimension {
    values: CharacteristicItem[];

    constructor(id: number, name: string, freeTextType: FreeTextType) {
        super();
        this.id = id;
        this.name = name;
        this.freeTextType = freeTextType;
        this.characteristics = [];
        this.values = [];
    }
}
