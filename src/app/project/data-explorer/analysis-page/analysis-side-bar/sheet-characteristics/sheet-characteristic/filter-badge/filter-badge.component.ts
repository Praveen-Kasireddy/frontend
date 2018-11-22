import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DragItemSourceType } from '@core/enum/drag-item-source-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';

@Component({
    selector: 'kosmos-filter-badge',
    templateUrl: './filter-badge.component.html',
    styleUrls: ['./filter-badge.component.scss']
})
export class FilterBadgeComponent implements OnInit {
    @Input()
    caption: string;
    @Input()
    id: number;
    @Input()
    characteristicIndex: number;
    @Output()
    removeFilter: EventEmitter<number> = new EventEmitter();
    draggableOverMe: boolean;

    constructor() {}

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        const data = {
            source: DragItemSourceType.Filter,
            type: SheetCharacteristicType.Characteristic,
            characteristicId: this.id,
            dimension: undefined,
            index: this.characteristicIndex
        };
        event.dataTransfer.setData('Text', JSON.stringify(data));
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

    remove() {
        this.removeFilter.emit(this.id);
    }
}
