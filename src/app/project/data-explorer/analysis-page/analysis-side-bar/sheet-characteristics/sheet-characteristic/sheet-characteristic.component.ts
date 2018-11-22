import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DragItemSourceType } from '@core/enum/drag-item-source-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { DataExplorerService } from '@core/services';
import { CharacteristicInfo } from '../characteristic-info';
import { FilterInfo } from '../filter-info';

@Component({
    moduleId: module.id,
    selector: 'kosmos-sheet-characteristic',
    templateUrl: 'sheet-characteristic.component.html',
    styleUrls: ['sheet-characteristic.component.scss']
})
export class SheetCharacteristicComponent implements OnInit {
    @Input()
    characteristic: SheetCharacteristic;
    @Input()
    characteristicIndex: number;
    @Input()
    characteristicCaption: string;
    @Input()
    isRemovedFromChart: boolean;
    @Input()
    sheetDimensionType: SheetDimensionType;
    @Input()
    canBeChartItem: boolean = true;

    @Output()
    filterDrop: EventEmitter<number> = new EventEmitter();
    @Output()
    characteristicDrop: EventEmitter<number> = new EventEmitter();
    @Output()
    characteristicRemove: EventEmitter<number> = new EventEmitter();
    @Output()
    characteristicToggleChart: EventEmitter<number> = new EventEmitter();
    @Output()
    filterRemove: EventEmitter<FilterInfo> = new EventEmitter();
    @Output()
    characteristicRename: EventEmitter<CharacteristicInfo> = new EventEmitter();
    enterCounter: number = 0;
    enterCountContent: number = 0;
    draggableOverMe: boolean;
    isOverContent: boolean;

    constructor(private _dataExplorerService: DataExplorerService) {}

    get isCustomFormula(): boolean {
        return this.characteristic.type == SheetCharacteristicType.CustomFormula;
    }

    ngOnInit(): void {}

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        let setCharacteristicSource: boolean = false;
        const alreadyExistingDataText = event.dataTransfer.getData('Text');

        if (alreadyExistingDataText && alreadyExistingDataText != '') {
            const alreadyExistingData = JSON.parse(alreadyExistingDataText);
            if (alreadyExistingData.source != DragItemSourceType.Filter) {
                setCharacteristicSource = true;
            }
        } else {
            setCharacteristicSource = true;
        }

        if (setCharacteristicSource) {
            const data = {
                source: DragItemSourceType.Characteristic,
                type: SheetCharacteristicType.Characteristic,
                characteristicId: -1,
                dimension: undefined,
                index: this.characteristicIndex
            };
            event.dataTransfer.setData('Text', JSON.stringify(data));
        }
    }

    onDragEnter(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.enterCounter++;
        this.draggableOverMe = true;
        return false;
    }

    onDragLeave(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.enterCounter--;
        if (this.enterCounter <= 0) {
            this.draggableOverMe = false;
        }
        return false;
    }

    onDragEnterContent(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.enterCountContent++;
        this.isOverContent = true;
        return false;
    }

    onDragLeaveContent(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.enterCountContent--;
        if (this.enterCountContent <= 0) {
            this.isOverContent = false;
        }
        return false;
    }

    onEditFormula() {
        this._dataExplorerService.editFormula(this.characteristic);
    }

    onDrop(event) {
        this.enterCounter = 0;
        this.draggableOverMe = false;
        this.characteristicDrop.emit(this.characteristicIndex);
    }

    onDropFilter(event) {
        this.filterDrop.emit(-1);
    }

    onDropFilterOnPosition(event) {
        this.filterDrop.emit(event);
    }

    onRemoveCharacteristic(event) {
        this.characteristicRemove.emit(event);
    }

    onToggleChartEnabled(event) {
        this.characteristicToggleChart.emit(event);
    }

    onRemoveFilter(filterPosition: number) {
        const filterInfo: FilterInfo = {
            characteristicIndex: this.characteristicIndex,
            filterIndex: filterPosition
        };
        this.filterRemove.emit(filterInfo);
    }

    onChangeCharacteristicName(characteristicInfo: CharacteristicInfo) {
        this.characteristicRename.emit(characteristicInfo);
    }
}
