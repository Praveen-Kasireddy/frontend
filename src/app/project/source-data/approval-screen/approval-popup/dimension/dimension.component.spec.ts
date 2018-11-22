import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FreeTextType, IngestionType } from '@core/enum';
import { CharacteristicItem, DataCell, DimensionItem } from '@core/models';
import { DxModule } from '@shared/dx.module';
import { DxNumberBoxModule } from 'devextreme-angular';
import { DimensionComponent } from './dimension.component';

xdescribe('DimensionComponent', () => {
    let component: DimensionComponent;
    let fixture: ComponentFixture<DimensionComponent>;
    let find: any;

    let characteristics: CharacteristicItem[];
    let dimension: DimensionItem;
    let dataCells: DataCell[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DimensionComponent],
            imports: [DxModule, DxNumberBoxModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DimensionComponent);
        component = fixture.componentInstance;

        characteristics = [
            new CharacteristicItem(1, 'Characteristic 1'),
            new CharacteristicItem(2, 'Characteristic 2'),
            new CharacteristicItem(3, 'Characteristic 3')
        ];

        dimension = {
            id: 1,
            freeTextType: FreeTextType.ALPHA_NUMERIC,
            name: 'Testing Dimension',
            characteristics: characteristics,
            values: [characteristics[1]]
        };

        dataCells = [
            {
                id: 1,
                column: 10,
                row: 5,
                ingestionType: IngestionType.DATA_POINT,
                dimensionCharacteristics: [],
                isInRange: false,
                value: 246.9,
                originalValue: 123.45,
                originalDisplayString: '123,45',
                valueType: 'IsNumeric'
            }
        ];

        find = selector => fixture.debugElement.query(By.css(selector));

        component.dimension = dimension;
        component.dataCells = dataCells;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show one characteristic initially, if only one is selected', () => {
        expect(component.hasOnlyOne).toBeTruthy();
        expect(component.dimension.values[0].name).toBe(characteristics[1].name);
    });

    it('should show no characteristic initially, if none is selected', () => {
        component.dimension.values = [];
        fixture.detectChanges();

        expect(component.hasOnlyOne).toBeFalsy();
        expect(component.dimension.values.length).toBe(0);
    });

    it('should show no characteristics initially, if more than one are selected', () => {
        component.dimension.values.push(characteristics[0]);
        component.dimension.values.push(characteristics[2]);
        fixture.detectChanges();

        expect(component.hasOnlyOne).toBeFalsy();
        expect(component.dimension.values.length).toBeGreaterThanOrEqual(2);
    });

    it('should not show characteristic in first row, if control is epxanded', () => {
        component.expand();
        fixture.detectChanges();

        const elementFirstRow = document.getElementById('characteristicInFirstRow');
        const elementSecondRow = document.getElementById('characteristicInSecondRow');
        const elementAddBtn = document.getElementById('addButton');

        expect(component.hasOnlyOne).toBeTruthy();
        expect(component.isExpanded).toBeTruthy();

        expect(elementFirstRow).toBeNull();
        expect(elementSecondRow).toBeDefined();
        expect(elementAddBtn).toBeNull();
    });

    it('should show add in second row, if control is epxanded and nothing is selected', () => {
        component.dimension.values = [];
        component.expand();
        fixture.detectChanges();

        const elementFirstRow = document.getElementById('characteristicInFirstRow');
        const elementSecondRow = document.getElementById('characteristicInSecondRow');
        const elementAddBtn = document.getElementById('addButton');

        expect(component.hasOnlyOne).toBeFalsy();
        expect(component.isExpanded).toBeTruthy();

        expect(elementFirstRow).toBeNull();
        expect(elementSecondRow).toBeNull();
        expect(elementAddBtn).toBeDefined();
    });

    it('should open editor when add button is clicked', () => {
        component.dimension.values = [];
        component.collapse();
        spyOn(component, 'onAddCharacteristic');
        fixture.detectChanges();

        const elementAddBtn = document.getElementById('addButton');
        elementAddBtn.click();
        fixture.detectChanges();

        expect(component.onAddCharacteristic).toHaveBeenCalledTimes(1);
    });

    it('should have opened editor when add button was clicked', () => {
        component.dimension.values = [];
        component.expand();
        fixture.detectChanges();

        const elementAddBtn = document.getElementById('addButton');
        elementAddBtn.click();
        fixture.detectChanges();

        const elementEditor = document.getElementById('characteristicEditor');
        expect(elementEditor).toBeDefined();
        expect(component.isEditorOpen).toBeTruthy();
    });

    it('should show free text editor, if is allowed by dimension', () => {
        component.dimension.values = [];
        component.dimension.freeTextType = FreeTextType.ALPHA_NUMERIC;
        component.isExpanded = true;
        component.isEditorOpen = true;
        fixture.detectChanges();

        const elementEditor = document.getElementById('characteristicEditor');
        const elementFreeText = document.getElementById('characteristicFreeText');
        expect(elementEditor).toBeDefined();
        expect(elementFreeText).toBeDefined();
    });

    it('should not show free text editor, if is not allowed by dimension', () => {
        component.dimension.values = [];
        component.dimension.freeTextType = FreeTextType.POSITIVE_INTEGERS_ONLY;
        component.isExpanded = true;
        component.isEditorOpen = true;
        fixture.detectChanges();

        const elementEditor = document.getElementById('characteristicEditor');
        const elementFreeText = document.getElementById('characteristicFreeText');
        expect(elementEditor).toBeDefined();
        expect(elementFreeText).toBeNull();
    });

    it('should display number of selections in first row when multiple cells are selected', () => {
        component.onSelectCharacteristic(characteristics[2]);
        fixture.detectChanges();
        const expectedSelectionCount = '' + component.dimension.values.length;

        expect(component.showAssignmentCounter).toBeTruthy();

        const elementCounter: HTMLElement = document.getElementById('cellCounter');
        expect(elementCounter).toBeDefined();

        const content = elementCounter.innerHTML;
        expect(content).toBe(expectedSelectionCount);
    });

    it('should not display number of selections when multiple cells are selected, with no characteristic assigned', () => {
        component.dimension.values = [];
        fixture.detectChanges();

        expect(component.showAssignmentCounter).toBeFalsy();

        const elementCounter: HTMLElement = document.getElementById('cellCounter');
        expect(elementCounter).toBeNull();
    });

    it('should show add button when multiple cells are selected, but not all have characteristic assigned', () => {
        component.dataCells.push(<DataCell>{
            id: 2,
            column: 99,
            row: 99,
            value: 1,
            originalValue: 1,
            valueType: 'IsNumeric',
            ingestionType: IngestionType.DATA_LABEL,
            dimensionCharacteristics: [],
            isInRange: false
        });
        // component.onSelectCharacteristic(<CharacteristicItem>{ id: 2, name: 'Characteristic 2', isNew: false, assignedCellIds: [1] });
        fixture.detectChanges();

        expect(component.canAdd).toBeTruthy();
        const elementAddBtn: HTMLElement = document.getElementById('addButton');
        expect(elementAddBtn).toBeDefined();
    });

    it('should not show add button when multiple cells are selected, and all have characteristic assigned', () => {
        component.dimension.values = [
            <CharacteristicItem>{ id: 2, name: 'Characteristic 2', isNew: false, assignedCellIds: [1, 2] },
            <CharacteristicItem>{ id: 3, name: 'Characteristic 3', isNew: false, assignedCellIds: [3] }
        ];
        fixture.detectChanges();

        expect(component.canAdd).toBeFalsy();
        const elementAddBtn: HTMLElement = document.getElementById('addButton');
        expect(elementAddBtn).toBeNull();
    });

    it('should calculate number of assigned numbers on add', () => {
        component.dimension.values = [characteristics[1]];
        component.onSelectCharacteristic(characteristics[0]);
        fixture.detectChanges();

        expect(component.dimension.values.length).toBe(2);
        expect(component.dimension.values.find(c => c.id == 1).counter).toBe(2);
        expect(component.dimension.values.find(c => c.id == 2).counter).toBe(1);
        expect(component.numberOfAssignmentItems).toBe(3);
    });

    it('should show newly assigned characteristics in green', () => {
        component.dimension.values = [characteristics[1]];
        component.onSelectCharacteristic(characteristics[0]);
        fixture.detectChanges();

        const elementOldCharacteristics = document.getElementsByClassName('isOld');
        expect(elementOldCharacteristics.length).toBe(1);
        const elementNewCharacteristics = document.getElementsByClassName('isNew');
        expect(elementNewCharacteristics.length).toBe(1);
    });
});
