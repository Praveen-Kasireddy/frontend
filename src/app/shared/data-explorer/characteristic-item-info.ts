import { DropItemDestinationType } from '@core/enum/drop-item-destination-type.enum';

export class CharacteristicItemInfo {
    groupIndex: number;
    characteristicIndex?: number;
    filterIndex?: number;
    caption?: string;
    itemType: DropItemDestinationType;

    static fromGroups(groupIndex: number, caption?: string): CharacteristicItemInfo {
        return {
            groupIndex: groupIndex,
            caption: caption,
            itemType: DropItemDestinationType.Group
        };
    }

    static fromCharacteristics(
        groupIndex: number,
        characteristicIndex: number,
        caption?: string
    ): CharacteristicItemInfo {
        return {
            groupIndex: groupIndex,
            characteristicIndex: characteristicIndex,
            caption: caption,
            itemType: DropItemDestinationType.Characteristic
        };
    }
    static fromFilter(groupIndex: number, characteristicIndex: number, filterIndex: number): CharacteristicItemInfo {
        return {
            groupIndex: groupIndex,
            characteristicIndex: characteristicIndex,
            filterIndex: filterIndex,
            itemType: DropItemDestinationType.Filter
        };
    }
}
