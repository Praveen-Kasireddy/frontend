import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DragItemSourceType } from '@core/enum/drag-item-source-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { DataExplorerService } from '@core/services';
import { DraggedCharacteristicInfo } from '@shared/data-explorer/dragged-characteristic-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';

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
    sheetDimensionType: SheetDimensionType;
    @Input()
    canBeChartItem: boolean = true;
    @Input()
    groupIndex: number = -1;

    enterCounter: number = 0;
    enterCountContent: number = 0;
    draggableOverMe: boolean;
    isOverContent: boolean;

    constructor(
        private _dataExplorerService: DataExplorerService,
        private _sheetCharacteristicService: SheetCharacteristicService
    ) {}

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
            if (alreadyExistingData.sourceType != DragItemSourceType.Filter) {
                setCharacteristicSource = true;
            }
        } else {
            setCharacteristicSource = true;
        }

        if (setCharacteristicSource) {
            event.dataTransfer.setData(
                'Text',
                JSON.stringify(
                    DraggedCharacteristicInfo.fromCharacteristic(
                        this.groupIndex > -1 ? this.groupIndex : this.characteristicIndex,
                        this.groupIndex > -1 ? this.characteristicIndex : -1
                    )
                )
            );
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
    }

    onDropFilterOnPosition(event) {
        this._sheetCharacteristicService.dropItem(
            DroppedCharacteristicInfo.fromFilter(
                this.groupIndex >= 0 ? this.groupIndex : undefined,
                this.characteristicIndex,
                event
            )
        );
    }

    onToggleFormatPercent() {
        this.characteristic.formatPercent = !this.characteristic.formatPercent;
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }
}
