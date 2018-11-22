import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { APPROVAL_CELL_STYLE_DATAPOINT, APPROVAL_CELL_STYLE_LABEL } from '@core/app.const';
import { IngestionType } from '@core/enum/ingestion-type.enum';
import { CharacteristicItem } from '@core/models/project/data-approval/characteristic-item';
import { DimensionItem } from '@core/models/project/data-approval/dimension-item';
import { Dimension } from '@core/models/project/data-approval/dimension-model';
import { DataCell } from '@core/models/project/data-cell';
import { DimensionCharacteristic } from '@core/models/project/dimension-characteristic';
import { CellWithStyle } from '@shared/spread-sheet/cell';
import { ValidatedPopupComponent } from '@shared/validated-popup/validated-popup.component';
import { DxRadioGroupComponent, DxValidationGroupComponent } from 'devextreme-angular';

@Component({
    selector: 'kosmos-approval-popup',
    templateUrl: './approval-popup.component.html',
    styleUrls: ['./approval-popup.component.scss']
})
export class ApprovalPopupComponent extends ValidatedPopupComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('typeRadioGroup')
    private _typeRadioGroup: DxRadioGroupComponent;
    @ViewChild(DxValidationGroupComponent)
    private _validationGroupComponent: DxValidationGroupComponent;
    @Input()
    displayCells: CellWithStyle[];
    @Input()
    set dataCells(value: DataCell[]) {
        this._dataCells = value;
        this.mergeDimensionSelections();
        this.initPopup();
    }
    get dataCells(): DataCell[] {
        return this._dataCells;
    }
    @Input()
    set dimensions(value: Dimension[]) {
        this._dimensions = value;
        this.mergeDimensionSelections();
    }
    @Input()
    get displayCellValue(): string {
        let cellValue = '-';
        if (!this.isNullOrUndefined(this._dataCells)) {
            if (this._dataCells.length == 1) {
                cellValue = this._dataCells[0].originalDisplayString;
            } else if (this._dataCells.length > 1) {
                cellValue = this._dataCells.length + ' cells selected';
            }
        }
        return cellValue;
    }
    @Input()
    get displayCellName(): string {
        let cellName = '-';
        if (!this.isNullOrUndefined(this.displayCells)) {
            if (this.displayCells.length == 1) {
                cellName = this.displayCells[0].name;
            } else if (this.displayCells.length > 1) {
                cellName = this.formatCellRangeName(this.displayCells);
            }
        }
        return cellName;
    }
    @Input()
    get dataPointCellCounter(): number {
        let num = 0;
        if (this._dataCells) {
            num = this._dataCells.filter(cell => cell.ingestionType == IngestionType.DATA_POINT).length;
        }
        return num;
    }

    get isSeveralDataTypesSelected(): boolean {
        return this._isSeveralDataTypesSelected;
    }
    set isSeveralDataTypesSelected(value: boolean) {
        this._isSeveralDataTypesSelected = value;
        this.popupHeight = value ? 643 : 600;
    }

    @Output()
    submitEvent: EventEmitter<DataCell[]> = new EventEmitter<DataCell[]>();
    @Output()
    displayUpdateEvent: EventEmitter<Dimension> = new EventEmitter<Dimension>();
    isDataPoint: boolean;
    typeOptions: any[];
    displayedDimensions: DimensionItem[];
    isTypeSelectionDisabled: boolean;
    isSaveButtonDisabled: boolean = false;
    includeInRangeCheckBoxDisabled: boolean = true;
    includeInRangeValue: boolean = false;
    inRangeCheckBoxOptions: any = undefined;
    popupHeight: number = 600;

    private _dataCells: DataCell[];
    private _dimensions: Dimension[];
    private _isSeveralDataTypesSelected: boolean;

    constructor() {
        super();
        this.typeOptions = [
            { text: 'Label', value: APPROVAL_CELL_STYLE_LABEL },
            { text: 'Data Point', value: APPROVAL_CELL_STYLE_DATAPOINT }
        ];
    }

    ngOnInit() {
        super.ngOnInit();
        this.inRangeCheckBoxOptions = {
            text: 'Include in range',
            value: false,
            onValueChanged: this.onInRangeValueChanged
        };
    }

    ngAfterViewInit() {
        this.initPopup();
    }

    titleRendered(event: any): void {
        if (event) {
            event.titleElement.firstChild.firstChild.firstChild.removeAttribute('style');
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propertyName in changes) {
            if (changes.hasOwnProperty(propertyName)) {
                const change = changes[propertyName];
                switch (propertyName) {
                    case 'displayCells':
                        this.displayCells = <CellWithStyle[]>change.currentValue;
                        this.initPopup();
                        break;
                    case 'dataCell':
                        this.dataCells = <DataCell[]>change.currentValue;
                        this.initPopup();
                        break;
                }
            }
        }
    }

    show(): void {
        super.show();
        this.cleanup();
    }

    cleanup(): void {
        this.isSeveralDataTypesSelected = false;
        this.isTypeSelectionDisabled = false;
        this.isSaveButtonDisabled = true;
        this.isDataPoint = false;
        this.displayCells = undefined;
        this._dataCells = undefined;
        if (this._validationGroupComponent) {
            this._validationGroupComponent.instance.reset();
        }
        if (this._typeRadioGroup) {
            this._typeRadioGroup.instance.option('value', undefined);
        }
    }

    resetSpecificValidation(): void {}

    submitForm(): void {
        this.mergeDimensionSelections();

        this._dataCells.forEach(cell => {
            if (!this.isSeveralDataTypesSelected) {
                cell.ingestionType = this.getTypeOption();
            }
            if (cell.ingestionType == IngestionType.DATA_POINT && this.includeInRangeValue != undefined) {
                cell.isInRange = this.includeInRangeValue;
            }
        });
        this.submitEvent.emit(this.dataCells.filter(cell => cell.ingestionType != IngestionType.UNSET));
    }

    specificValidation(next?: () => void) {
        if (next) {
            next();
        }
    }

    mergeDimensionSelections() {
        if (this.isNullOrUndefined(this._dimensions)) {
            return;
        }
        if (this.isNullOrUndefined(this._dataCells) || this._dataCells.length == 0) {
            return;
        }

        this.displayedDimensions = [];
        this._dimensions.forEach(d => {
            const displayedDimension: DimensionItem = {
                id: d.id,
                name: d.name,
                freeTextType: d.freeTextType,
                characteristics: d.characteristics,
                values: []
            };
            this._dataCells.forEach(cell => {
                if (cell.ingestionType != IngestionType.DATA_POINT) {
                    return;
                }

                cell.dimensionCharacteristics.forEach(dc => {
                    this.mergeDimension(cell, dc, displayedDimension);
                });
            });
            this.displayedDimensions.push(displayedDimension);
        });
    }

    private mergeDimension(
        cell: DataCell,
        dimensionCharacteristic: DimensionCharacteristic,
        displayedDimension: DimensionItem
    ): void {
        if (dimensionCharacteristic.dimensionId == displayedDimension.id) {
            const foundCharacteristic: CharacteristicItem = displayedDimension.values.find(
                item => item.id == dimensionCharacteristic.characteristicId
            );
            if (!foundCharacteristic) {
                const selectedCharacteristic = new CharacteristicItem(
                    dimensionCharacteristic.characteristicId,
                    dimensionCharacteristic.characteristicName
                );
                selectedCharacteristic.assignedCellIds.push(cell.id);
                displayedDimension.values.push(selectedCharacteristic);
            } else {
                foundCharacteristic.assignedCellIds.push(cell.id);
            }
        }
    }

    getCellCounterForDimension(dimension: Dimension): number {
        let counter = 0;
        this._dataCells.forEach(cell => {
            if (cell.dimensionCharacteristics.some(d => d.dimensionId == dimension.id)) {
                counter++;
            }
        });
        return counter;
    }

    trackDimensionChange(index: number, item: Dimension): number {
        return item.id;
    }

    private initPopup(): void {
        if (!this.isNullOrUndefined(this._dataCells)) {
            this.setDataType(this._dataCells);
        }

        this.setIncludeInRangeValue();
        this.setIncludeInRangeState();
        this.isSaveButtonDisabled = this.isNullOrUndefined(this._dataCells) || this._dataCells.length == 0;
    }

    private setDataType(cells: DataCell[]) {
        if (
            !this._dataCells.every(cell => cell.ingestionType == IngestionType.DATA_POINT) &&
            this._dataCells.some(cell => cell.ingestionType == IngestionType.DATA_POINT)
        ) {
            // different data types but at least datapoint
            this.setTypeOption(IngestionType.DATA_POINT);
            this.isTypeSelectionDisabled = true;
            this.isSeveralDataTypesSelected = true;
        } else if (this._dataCells.every(cell => cell.ingestionType == IngestionType.DATA_LABEL)) {
            // all are datapoints
            this.setTypeOption(IngestionType.DATA_LABEL);
            this.isTypeSelectionDisabled = false;
            this.isSeveralDataTypesSelected = false;
        } else if (this._dataCells.every(cell => cell.ingestionType == IngestionType.DATA_POINT)) {
            // all are data labels
            this.setTypeOption(IngestionType.DATA_POINT);
            this.isTypeSelectionDisabled = false;
            this.isSeveralDataTypesSelected = false;
        } else if (this._dataCells.some(cell => cell.ingestionType == IngestionType.UNSET)) {
            // there is at least one unset cell => no type selection possible
            this.setTypeOption(IngestionType.UNSET);
            this.isTypeSelectionDisabled = true;
            this.isSeveralDataTypesSelected = false;
        } else {
            // only data labels and undefined
            this.setTypeOption(IngestionType.NONE);
            this.isTypeSelectionDisabled = false;
            this.isSeveralDataTypesSelected = false;
        }
    }

    private setTypeOption(ingestionType: IngestionType): void {
        if (ingestionType == IngestionType.DATA_LABEL) {
            this._typeRadioGroup.instance.option('value', this.typeOptions[0].value);
            this.isDataPoint = false;
        } else if (ingestionType == IngestionType.DATA_POINT) {
            this._typeRadioGroup.instance.option('value', this.typeOptions[1].value);
            this.isDataPoint = true;
        } else {
            this._typeRadioGroup.instance.option('value', undefined);
            this.isDataPoint = false;
        }
    }

    private getTypeOption(): IngestionType {
        let ingestionType = IngestionType.NONE;

        if (!this.isNullOrUndefined(this._typeRadioGroup)) {
            ingestionType =
                this._typeRadioGroup.value == this.typeOptions[0].value
                    ? IngestionType.DATA_LABEL
                    : this._typeRadioGroup.value == this.typeOptions[1].value
                        ? IngestionType.DATA_POINT
                        : IngestionType.NONE;
        }

        return ingestionType;
    }

    onIngestionTypeClicked(event: any): void {
        this.isDataPoint = this.getTypeOption() == IngestionType.DATA_POINT;

        const type = this.getTypeOption();
        this._dataCells.forEach(cell => (cell.ingestionType = type));
        this.mergeDimensionSelections();

        this.setIncludeInRangeState();
    }

    onInRangeValueChanged = (event: any): void => {
        this.includeInRangeValue = event.value;
    };

    private setIncludeInRangeState() {
        const type = this.getTypeOption();
        this.includeInRangeCheckBoxDisabled =
            type != IngestionType.DATA_POINT || this.isNullOrUndefined(this._dataCells);
    }

    private setIncludeInRangeValue() {
        if (this.isNullOrUndefined(this._dataCells) || !this._dataCells.some(cell => cell.isInRange)) {
            this.includeInRangeValue = false;
        } else if (this._dataCells.every(cell => cell.isInRange)) {
            this.includeInRangeValue = true;
        } else {
            this.includeInRangeValue = undefined;
        }
        if (this.inRangeCheckBoxOptions) {
            this.inRangeCheckBoxOptions.value = this.includeInRangeValue;
        }
    }

    private formatCellRangeName(cells: CellWithStyle[]): string {
        let minRow;
        let maxRow;
        let minCol;
        let maxCol;
        cells.forEach(cell => {
            if (!minRow || cell.row < minRow) {
                minRow = cell.row;
            }
            if (!maxRow || cell.row > maxRow) {
                maxRow = cell.row;
            }
            if (!minCol || cell.column < minCol) {
                minCol = cell.column;
            }
            if (!maxCol || cell.column > maxCol) {
                maxCol = cell.column;
            }
        });
        const leftTopCell = cells.find(cell => {
            return cell.row == minRow && cell.column == minCol;
        });
        const rightBottomCell = cells.find(cell => {
            return cell.row == maxRow && cell.column == maxCol;
        });

        return leftTopCell.name + ':' + rightBottomCell.name;
    }

    private isNullOrUndefined(obj: any) {
        return obj === null || obj === undefined;
    }
}
