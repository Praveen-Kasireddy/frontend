import { DropItemDestinationType } from '@core/enum/drop-item-destination-type.enum';

export class DroppedCharacteristicInfo {
    groupPosition: number;
    characteristicPosition: number;
    filterPosition: number;
    destinationType: DropItemDestinationType;

    static fromFilter(groupIndex: number, characteristicIndex: number, filterIndex: number): DroppedCharacteristicInfo {
        return {
            groupPosition: groupIndex,
            characteristicPosition: characteristicIndex,
            filterPosition: filterIndex,
            destinationType: DropItemDestinationType.Filter
        };
    }

    static fromCharacteristic(groupIndex: number, characteristicIndex: number): DroppedCharacteristicInfo {
        return {
            groupPosition: groupIndex,
            characteristicPosition: characteristicIndex,
            filterPosition: -1,
            destinationType: DropItemDestinationType.Characteristic
        };
    }

    static fromGroup(groupIndex: number): DroppedCharacteristicInfo {
        return {
            groupPosition: groupIndex,
            characteristicPosition: -1,
            filterPosition: -1,
            destinationType: DropItemDestinationType.Group
        };
    }

    static fromTopLevel(): DroppedCharacteristicInfo {
        return {
            groupPosition: -1,
            characteristicPosition: -1,
            filterPosition: -1,
            destinationType: undefined
        };
    }
}
