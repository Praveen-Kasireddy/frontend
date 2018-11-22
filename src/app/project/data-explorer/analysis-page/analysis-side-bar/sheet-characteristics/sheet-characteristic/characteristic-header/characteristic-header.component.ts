import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { CharacteristicInfo } from '../../characteristic-info';

@Component({
    selector: 'kosmos-characteristic-header',
    templateUrl: './characteristic-header.component.html',
    styleUrls: ['./characteristic-header.component.scss']
})
export class CharacteristicHeaderComponent implements OnInit, OnChanges {
    @Input()
    characteristicIndex: number;
    @Input()
    characteristicCaption: string;
    @Input()
    sheetDimensionType: SheetDimensionType;
    @Input()
    isRemovedFromChart: boolean = false;
    @Input()
    canBeChartItem: boolean = true;

    @Output()
    removeCharacteristic: EventEmitter<number> = new EventEmitter();
    @Output()
    toggleChartEnabled: EventEmitter<number> = new EventEmitter();
    @Output()
    changeCharacteristicName: EventEmitter<CharacteristicInfo> = new EventEmitter();

    label: string;
    chartButtonId: string;
    chartButtonTarget: string;
    chartTooltip: string = 'Hide from chart';
    showInChartEnabled: boolean = true;

    constructor() {}

    ngOnInit() {
        this.showInChartEnabled = this.canBeChartItem;

        if (this.sheetDimensionType == SheetDimensionType.Global) {
            this.label = '1';
            this.showInChartEnabled = false;
        }

        this.chartButtonId = 'chartButton' + String(this.characteristicIndex);
        this.chartButtonTarget = '#' + String(this.chartButtonId);

        this.handleChartButton(this.isRemovedFromChart);
    }

    ngOnChanges() {
        this.setLabel();
    }

    remove() {
        this.removeCharacteristic.emit(this.characteristicIndex);
    }

    toggleChart() {
        this.handleChartButton(!this.isRemovedFromChart);
        this.toggleChartEnabled.emit(this.characteristicIndex);
    }

    edited(newName: string) {
        this.changeCharacteristicName.emit({ index: this.characteristicIndex, caption: newName });
    }

    private getColumnName(i: number) {
        const previousLetters = i >= 26 ? this.getColumnName(Math.floor(i / 26) - 1) : '';
        const lastLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i % 26];
        return previousLetters + lastLetter;
    }

    private handleChartButton(displayStatus: boolean) {
        // true is removed, false is shown
        if (displayStatus) {
            this.chartTooltip = 'Show in chart';
        } else {
            this.chartTooltip = 'Hide from chart';
        }
        this.isRemovedFromChart = displayStatus;
    }

    private setLabel() {
        const labelIndex = Number(this.characteristicIndex) + 1;
        this.label = String(labelIndex + 1);
        if (this.sheetDimensionType == SheetDimensionType.Columns) {
            this.label = this.getColumnName(labelIndex);
        }
        if (this.sheetDimensionType == SheetDimensionType.Global) {
            this.label = '1';
        }
    }
}
