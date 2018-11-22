import { Component, Input, OnInit } from '@angular/core';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { SheetCharacteristic } from '@core/models';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';

@Component({
    selector: 'kosmos-characteristic-header',
    templateUrl: './characteristic-header.component.html',
    styleUrls: ['./characteristic-header.component.scss']
})
export class CharacteristicHeaderComponent implements OnInit {
    @Input()
    characteristicIndex: number;
    @Input()
    characteristic: SheetCharacteristic;
    @Input()
    sheetDimensionType: SheetDimensionType;
    @Input()
    canBeChartItem: boolean = true;
    @Input()
    groupIndex: number = -1;

    label: string;
    chartButtonId: string;
    chartButtonTarget: string;
    chartTooltip: string = 'Hide from chart';
    groupButtonId: string;
    groupButtonTarget: string;
    groupTooltip: string;

    showInChartEnabled: boolean = true;

    constructor(private _sheetCharacteristicService: SheetCharacteristicService) {}

    ngOnInit() {
        this.showInChartEnabled = this.canBeChartItem;

        if (this.sheetDimensionType == SheetDimensionType.Global) {
            this.showInChartEnabled = false;
        }

        this.chartButtonId = 'chartButton' + String(this.groupIndex) + String(this.characteristicIndex);
        this.chartButtonTarget = '#' + String(this.chartButtonId);

        this.handleChartButtonTooltip(this.characteristic.removeFromChart);

        this.groupButtonId = 'groupButton' + String(this.groupIndex) + String(this.characteristicIndex);
        this.groupButtonTarget = '#' + String(this.groupButtonId);

        this.groupTooltip = this.groupIndex >= 0 ? 'Release from group' : 'Add to new group';
    }

    remove() {
        this._sheetCharacteristicService.removeCharacteristicItem(
            CharacteristicItemInfo.fromCharacteristics(this.groupIndex, this.characteristicIndex)
        );
    }

    handleGrouping() {
        if (this.groupIndex == -1) {
            this._sheetCharacteristicService.createGroup(this.characteristicIndex);
        } else {
            this._sheetCharacteristicService.releaseFromGroup(
                CharacteristicItemInfo.fromCharacteristics(this.groupIndex, this.characteristicIndex)
            );
        }
    }

    toggleChart() {
        this._sheetCharacteristicService.toggleCharacteristicChartEnabled(
            CharacteristicItemInfo.fromCharacteristics(this.groupIndex, this.characteristicIndex)
        );

        this.handleChartButtonTooltip(this.characteristic.removeFromChart);
    }

    edited(newName: string) {
        this._sheetCharacteristicService.renameCharacteristic(
            CharacteristicItemInfo.fromCharacteristics(this.groupIndex, this.characteristicIndex, newName)
        );
    }

    private handleChartButtonTooltip(displayStatus: boolean) {
        // true is removed, false is shown
        if (displayStatus) {
            this.chartTooltip = 'Show in chart';
        } else {
            this.chartTooltip = 'Hide from chart';
        }
    }
}
