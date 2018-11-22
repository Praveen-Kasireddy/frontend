import { Component, Input, OnInit } from '@angular/core';
import { SheetDimensionType } from '@core/enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetCharacteristic } from '@core/models';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { SheetCharacteristicService } from '../sheet-characteristic.service';

@Component({
    selector: 'kosmos-sheet-characteristic-item',
    templateUrl: './sheet-characteristic-item.component.html',
    styleUrls: ['./sheet-characteristic-item.component.scss']
})
export class SheetCharacteristicItemComponent implements OnInit {
    @Input()
    characteristic: SheetCharacteristic;
    @Input()
    itemIndex: number;
    @Input()
    sheetDimensionType: SheetDimensionType;
    @Input()
    canBeChartItem: boolean = true;

    // members used in the html
    characteristicType: SheetCharacteristicType = SheetCharacteristicType.Characteristic;
    customFormulaType: SheetCharacteristicType = SheetCharacteristicType.CustomFormula;
    characteristicGroupType: SheetCharacteristicType = SheetCharacteristicType.CharacteristicGroup;

    constructor(private _sheetCharacteristicService: SheetCharacteristicService) {}

    ngOnInit() {}

    onDropOnCharacteristicOfTopLevel(index: number) {
        this._sheetCharacteristicService.dropItem(DroppedCharacteristicInfo.fromCharacteristic(undefined, index));
    }

    onDropOnGroup(index: number) {
        this._sheetCharacteristicService.dropItem(DroppedCharacteristicInfo.fromGroup(index));
    }
}
