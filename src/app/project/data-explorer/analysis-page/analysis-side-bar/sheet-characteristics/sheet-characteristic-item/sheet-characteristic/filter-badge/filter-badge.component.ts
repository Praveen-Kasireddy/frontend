import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DraggedCharacteristicInfo } from '@shared/data-explorer/dragged-characteristic-info';
import { Subscription } from 'rxjs';
import { SheetCharacteristicService } from '../../../sheet-characteristic.service';

@Component({
    selector: 'kosmos-filter-badge',
    templateUrl: './filter-badge.component.html',
    styleUrls: ['./filter-badge.component.scss']
})
export class FilterBadgeComponent implements OnInit {
    @Input()
    caption: string;
    @Input()
    characteristicIndex: number;
    @Input()
    groupIndex: number = -1;
    @Input()
    filterIndex: number;
    draggableOverMe: boolean;

    subscription: Subscription;

    constructor(private _sheetCharacteristicService: SheetCharacteristicService) {}

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        event.dataTransfer.setData(
            'Text',
            JSON.stringify(
                DraggedCharacteristicInfo.fromFilter(
                    this.groupIndex > -1 ? this.groupIndex : this.characteristicIndex,
                    this.groupIndex > -1 ? this.characteristicIndex : -1,
                    this.filterIndex
                )
            )
        );
    }

    ngOnInit() {}

    onDragEnter(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.draggableOverMe = true;
        return false;
    }

    onDragLeave(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.draggableOverMe = false;
        return false;
    }

    onDrop($event) {
        this.draggableOverMe = false;
    }

    remove() {
        this._sheetCharacteristicService.removeCharacteristicItem(
            CharacteristicItemInfo.fromFilter(this.groupIndex, this.characteristicIndex, this.filterIndex)
        );
    }
}
