import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FreeTextType, IngestionType } from '@core/enum';
import { CharacteristicItem, DataCell, DimensionItem } from '@core/models';
import { DimensionCharacteristic } from '@core/models/project/dimension-characteristic';
import { DxNumberBoxComponent } from 'devextreme-angular';

@Component({
    selector: 'kosmos-dimension',
    templateUrl: './dimension.component.html',
    styleUrls: ['./dimension.component.scss']
})
export class DimensionComponent implements OnInit {
    @ViewChild(DxNumberBoxComponent)
    private _numberBox: DxNumberBoxComponent;
    @Input()
    get dimension(): DimensionItem {
        return this._dimension;
    }
    set dimension(value: DimensionItem) {
        this._dimension = value;
        this.calculateNumberOfAssignmentItems();
    }
    @Input()
    dataCells: DataCell[];

    isExpanded: boolean;
    isEditorOpen: boolean;
    numberOfAssignmentItems: number;

    get showAssignmentCounter(): boolean {
        return this._dimension.values.length > 1;
    }
    get showCellCounter(): boolean {
        return this.dataCells.length > 1;
    }
    get canAdd(): boolean {
        return !this.isNullOrUndefined(this._dimension) && this.notEnoughAssignments;
    }
    get notEnoughAssignments(): boolean {
        return this.getNumberOfUnassignedCells() > 0;
    }
    get hasOnlyOne(): boolean {
        return (
            !this.isNullOrUndefined(this._dimension) &&
            (!this.isNullOrUndefined(this._dimension.values) && this._dimension.values.length == 1)
        );
    }
    get availableCharacteristics(): CharacteristicItem[] {
        return this.getAvailableCharacteristics();
    }

    private _searchTerm: string;
    private _dimension: DimensionItem;

    FreeTextType = FreeTextType; // ugly workaround to make the enumeration visible in the html page

    constructor() {
        this.isExpanded = false;
        this.isEditorOpen = false;
        this._searchTerm = undefined;
        this.numberOfAssignmentItems = 0;
    }

    ngOnInit() {}

    expand(): void {
        this.isExpanded = true;
        this._searchTerm = undefined;
    }

    collapse(): void {
        this.isExpanded = false;
        this.isEditorOpen = false;
        this._searchTerm = undefined;
    }

    onRemoveCharacteristic(characteristicItem: CharacteristicItem): void {
        const list = this.dataCells.filter(cell => characteristicItem.assignedCellIds.some(i => i == cell.id));
        list.forEach(cell => {
            const idx = cell.dimensionCharacteristics.findIndex(dc => {
                // if there is already an assignment for this dimension, we can't put another one to this cell
                return dc.characteristicId == characteristicItem.id && dc.dimensionId == this._dimension.id;
            });
            if (idx >= 0) {
                cell.dimensionCharacteristics.splice(idx, 1);
            }
        });

        const idxValue = this._dimension.values.findIndex(v => v == characteristicItem);
        if (idxValue >= 0) {
            this._dimension.values.splice(idxValue, 1);
        }
        // if there is a new item of the same characteristic, move the deleted assignments to this
        const secondValue = this._dimension.values.find(v => v.isNew);
        if (secondValue) {
            const dc: DimensionCharacteristic = {
                characteristicId: secondValue.id,
                characteristicName: secondValue.name,
                dimensionId: this._dimension.id,
                dimensionName: this._dimension.name
            };

            characteristicItem.assignedCellIds.forEach(id => {
                secondValue.assignedCellIds.push(id);
                this.dataCells.find(c => c.id == id).dimensionCharacteristics.push(dc);
            });
            this.calculateNumberOfAssignmentItems();
        }
    }

    onSelectCharacteristic(characteristicItem: CharacteristicItem): void {
        const addedCharacteristic = CharacteristicItem.clone(characteristicItem);
        addedCharacteristic.isNew = true;

        this.dataCells.filter(cell => cell.ingestionType == IngestionType.DATA_POINT).forEach(cell => {
            const foundAssignment = cell.dimensionCharacteristics.find(
                // dc => dc.characteristicId == addedCharacteristic.id && dc.dimensionId == this._dimension.id
                dc => dc.dimensionId == this._dimension.id
            );
            if (!foundAssignment) {
                const dc: DimensionCharacteristic = {
                    characteristicId: addedCharacteristic.id,
                    characteristicName: addedCharacteristic.name,
                    dimensionId: this._dimension.id,
                    dimensionName: this._dimension.name
                };
                cell.dimensionCharacteristics.push(dc);
                addedCharacteristic.assignedCellIds.push(cell.id);
            }
        });
        this._dimension.values.push(addedCharacteristic);

        this.calculateNumberOfAssignmentItems();
        this.isEditorOpen = false;
    }

    trackCharacteristics(index: number, item: CharacteristicItem): number {
        return item.id;
    }

    onAddCharacteristic(): void {
        this.isEditorOpen = true;
    }

    onEnterFreeText(event: any): void {
        let value: string = event.event.target.value;

        if (!this.isValid(value)) {
            value = this._numberBox.min.toString();
        }

        let characteristicItem: CharacteristicItem = this.getCharacteristicWithText(value);
        if (this.isNullOrUndefined(characteristicItem)) {
            characteristicItem = new CharacteristicItem(-1, value);
        }
        this._searchTerm = undefined;
        this.onSelectCharacteristic(characteristicItem);
    }

    onKeyUp(event: any): void {
        const value = event.event.target.value;

        if (value.length > 0) {
            this._searchTerm = value;
        }
    }

    onValueChanged(event: any): void {
        const value = event.value;

        if (this.isNullOrUndefined(value) || value.length == 0) {
            this._searchTerm = undefined;
        }
    }

    private getAvailableCharacteristics(): CharacteristicItem[] {
        const result: CharacteristicItem[] = [];
        this._dimension.characteristics.forEach(c => {
            if (
                this.isNullOrUndefined(this._searchTerm) ||
                (!this.isNullOrUndefined(this._searchTerm) &&
                    c.name.toLowerCase().indexOf(this._searchTerm.toLowerCase()) >= 0)
            ) {
                result.push(new CharacteristicItem(c.id, c.name));
            }
        });
        return result;
    }

    private isValid(value: string): boolean {
        if (this._dimension.freeTextType == FreeTextType.POSITIVE_INTEGERS_ONLY) {
            const numberValue: number = Number.parseInt(value, undefined);
            return numberValue >= this._numberBox.min;
        } else {
            return true;
        }
    }

    private getCharacteristicWithText(text: string): CharacteristicItem {
        if (text === null || text === undefined || text.length === 0) {
            return undefined;
        }
        const lowerText = typeof text === 'number' ? text : text.toLowerCase();
        const foundCharacteristic = this._dimension.characteristics.find(c => {
            return c.name.toLowerCase() == lowerText;
        });
        if (foundCharacteristic) {
            return new CharacteristicItem(foundCharacteristic.id, foundCharacteristic.name);
        } else {
            return undefined;
        }
    }

    private getNumberOfUnassignedCells(): number {
        let total = this.dataCells.filter(cell => cell.ingestionType == IngestionType.DATA_POINT).length;
        this._dimension.values.forEach(c => {
            total -= c.counter;
        });
        return total;
    }

    private isNullOrUndefined(obj: any) {
        return obj === null || obj === undefined;
    }

    private calculateNumberOfAssignmentItems(): void {
        this.numberOfAssignmentItems = 0;
        const foundItems = [];
        this._dimension.values.forEach(i => {
            if (foundItems.indexOf(i.id) < 0) {
                foundItems.push(i.id);
                this.numberOfAssignmentItems++;
            }
        });
    }
}
