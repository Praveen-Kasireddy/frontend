import { Injectable } from '@angular/core';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { Subject } from 'rxjs';

@Injectable()
export class SheetCharacteristicService {
    // Observable Sources
    private characteristicToggleChartEnabledSource = new Subject<CharacteristicItemInfo>();
    private characteristicRenamedSource = new Subject<CharacteristicItemInfo>();
    private characteristicItemRemovedSource = new Subject<CharacteristicItemInfo>();
    private itemDropOnSource = new Subject<DroppedCharacteristicInfo>();
    private groupCreatedSource = new Subject<number>();
    private groupReleasedSource = new Subject<CharacteristicItemInfo>();

    // Observable streams
    characteristicChartEnableToggled$ = this.characteristicToggleChartEnabledSource.asObservable();
    characteristicRenamed$ = this.characteristicRenamedSource.asObservable();
    characteristicItemRemoved$ = this.characteristicItemRemovedSource.asObservable();
    itemDropOn$ = this.itemDropOnSource.asObservable();
    groupCreated$ = this.groupCreatedSource.asObservable();
    releasedFromGroup$ = this.groupReleasedSource.asObservable();

    // functions
    toggleCharacteristicChartEnabled(info: CharacteristicItemInfo) {
        this.characteristicToggleChartEnabledSource.next(info);
    }

    renameCharacteristic(info: CharacteristicItemInfo) {
        this.characteristicRenamedSource.next(info);
    }

    createGroup(characteristicIndex: number) {
        this.groupCreatedSource.next(characteristicIndex);
    }

    releaseFromGroup(info: CharacteristicItemInfo) {
        this.groupReleasedSource.next(info);
    }

    removeCharacteristicItem(info: CharacteristicItemInfo) {
        this.characteristicItemRemovedSource.next(info);
    }

    dropItem(info: DroppedCharacteristicInfo) {
        this.itemDropOnSource.next(info);
    }
}
