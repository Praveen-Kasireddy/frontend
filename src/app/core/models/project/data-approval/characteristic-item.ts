import { Characteristic } from '@core/models/project/characteristic';

export class CharacteristicItem extends Characteristic {
    isNew: boolean;
    get counter(): number { return this.assignedCellIds ? this.assignedCellIds.length : 0; }
    assignedCellIds: number[];

    constructor(id: number, name: string) {
        super();
        this.id = id;
        this.name = name;
        this.isNew = false;
        this.assignedCellIds = [];
    }

    public static clone(source: CharacteristicItem): CharacteristicItem {
        const clone = new CharacteristicItem(source.id, source.name);
        clone.isNew = source.isNew;
        clone.assignedCellIds = source.assignedCellIds;

        return clone;
    }
}
