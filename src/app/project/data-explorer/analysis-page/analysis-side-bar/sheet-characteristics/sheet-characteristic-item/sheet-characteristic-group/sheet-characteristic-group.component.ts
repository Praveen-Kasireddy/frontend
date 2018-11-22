import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SheetDimensionType } from '@core/enum';
import { DragItemSourceType } from '@core/enum/drag-item-source-type.enum';
import { SheetCharacteristic } from '@core/models';
import { DataExplorerService } from '@core/services';
import { DraggedCharacteristicInfo } from '@shared/data-explorer/dragged-characteristic-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';

@Component({
    selector: 'kosmos-sheet-characteristic-group',
    templateUrl: './sheet-characteristic-group.component.html',
    styleUrls: ['./sheet-characteristic-group.component.scss']
})
export class SheetCharacteristicGroupComponent implements OnInit {
    @Input()
    characteristic: SheetCharacteristic;
    @Input()
    groupIndex: number;
    @Input()
    characteristicCaption: string;
    @Input()
    isRemovedFromChart: boolean;
    @Input()
    sheetDimensionType: SheetDimensionType;
    @Input()
    canBeChartItem: boolean = true;

    enterCounter: number = 0;
    draggableOverMe: boolean;
    draggableOverPlaceholder: boolean;

    constructor(
        private _sheetCharacteristicService: SheetCharacteristicService,
        private _dataExplorerService: DataExplorerService
    ) {}

    ngOnInit() {}

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        let setCharacteristicSource: boolean = false;
        const alreadyExistingDataText = event.dataTransfer.getData('Text');

        if (alreadyExistingDataText && alreadyExistingDataText != '') {
            const alreadyExistingData = JSON.parse(alreadyExistingDataText);
            if (
                alreadyExistingData.sourceType != DragItemSourceType.Characteristic &&
                alreadyExistingData.sourceType != DragItemSourceType.Filter
            ) {
                setCharacteristicSource = true;
            }
        } else {
            setCharacteristicSource = true;
        }

        if (setCharacteristicSource) {
            event.dataTransfer.setData('Text', JSON.stringify(DraggedCharacteristicInfo.fromGroup(this.groupIndex)));
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

    onDragEnterPlaceholder(event) {
        this.draggableOverPlaceholder = true;
        return false;
    }

    onDragLeavePlaceholder(event) {
        this.draggableOverPlaceholder = false;
        return false;
    }

    onDrop(event) {
        this.enterCounter = 0;
    }

    onDropSubCharacteristic(index: number) {
        this._sheetCharacteristicService.dropItem(DroppedCharacteristicInfo.fromCharacteristic(this.groupIndex, index));
    }

    onCharacteristicToggleFormatPercent(pos: number) {
        const ch: SheetCharacteristic = this.characteristic.sheetCharacteristics[pos];
        if (ch) {
            ch.formatPercent = !ch.formatPercent;
        }
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }
}
