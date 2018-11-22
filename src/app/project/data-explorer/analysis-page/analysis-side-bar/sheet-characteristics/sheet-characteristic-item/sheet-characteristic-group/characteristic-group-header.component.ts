import { Component, Input, OnInit } from '@angular/core';
import { SheetDimensionType } from '@core/enum';
import { SheetCharacteristic } from '@core/models';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';

@Component({
    selector: 'kosmos-characteristic-group-header',
    templateUrl: './characteristic-group-header.component.html',
    styleUrls: ['./characteristic-group-header.component.scss']
})
export class CharacteristicGroupHeaderComponent implements OnInit {
    @Input()
    characteristic: SheetCharacteristic;
    @Input()
    groupIndex: number;
    @Input()
    canBeChartItem: boolean;
    @Input()
    sheetDimensionType: SheetDimensionType;

    label: string;
    chartButtonId: string;
    chartButtonTarget: string;
    chartTooltip: string = 'Hide from chart';
    showInChartEnabled: boolean;

    constructor(private _sheetCharacteristicService: SheetCharacteristicService) {}

    ngOnInit() {
        this.showInChartEnabled = this.canBeChartItem;

        this.label = 'A';
        this.chartButtonId = 'chartButton' + String(this.groupIndex);
        this.chartButtonTarget = '#' + String(this.chartButtonId);
    }

    remove() {
        this._sheetCharacteristicService.removeCharacteristicItem(CharacteristicItemInfo.fromGroups(this.groupIndex));
    }

    edited(newName: string) {
        this._sheetCharacteristicService.renameCharacteristic(
            CharacteristicItemInfo.fromGroups(this.groupIndex, newName)
        );
    }

    toggleChart() {
        this._sheetCharacteristicService.toggleCharacteristicChartEnabled(
            CharacteristicItemInfo.fromGroups(this.groupIndex)
        );

        this.handleChartButtonTooltip(this.characteristic.removeFromChart);
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
