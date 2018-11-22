import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { DxTooltipModule } from 'devextreme-angular';
import { CharacteristicHeaderComponent } from './characteristic-header.component';

describe('CharacteristicHeaderComponent', () => {
    let component: CharacteristicHeaderComponent;
    let fixture: ComponentFixture<CharacteristicHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CharacteristicHeaderComponent],
            providers: [],
            imports: [DxTooltipModule]
        });
    });

    describe('non-column dimension', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
            component.sheetDimensionType = SheetDimensionType.Rows;
            component.characteristicIndex = 45;
            component.isRemovedFromChart = false;
            fixture.detectChanges();
            component.ngOnChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('the label should be index + 2', () => {
            fixture.detectChanges();
            expect(component.label).toEqual('47');
        });

        it('the tooltip should be hide from chart', () => {
            expect(component.chartTooltip).toEqual('Hide from chart');
        });

        it('the show in chart button should be enabled', () => {
            expect(component.showInChartEnabled).toBe(true);
        });
    });

    describe('column dimension', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
        });

        it('the label should be alphabetical with B as first column', () => {
            component.sheetDimensionType = SheetDimensionType.Columns;
            component.characteristicIndex = 0;
            fixture.detectChanges();
            component.ngOnChanges();
            expect(component.label).toEqual('B');
        });

        it('the label should be alphabetical continuing AA', () => {
            component.sheetDimensionType = SheetDimensionType.Columns;
            component.characteristicIndex = 25;
            fixture.detectChanges();
            component.ngOnChanges();
            expect(component.label).toEqual('AA');
        });

        it('the label should be alphabetical case AD', () => {
            component.sheetDimensionType = SheetDimensionType.Columns;
            component.characteristicIndex = 28;
            fixture.detectChanges();
            component.ngOnChanges();
            expect(component.label).toEqual('AD');
        });

        it('the show in chart button should be enabled', () => {
            expect(component.showInChartEnabled).toBe(true);
        });
    });

    describe('if chart is disabled', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
            component.sheetDimensionType = SheetDimensionType.Rows;
            component.isRemovedFromChart = true;
            fixture.detectChanges();
            component.ngOnChanges();
        });

        it('the tooltip should be show in chart', () => {
            expect(component.chartTooltip).toEqual('Show in chart');
        });
    });

    describe('if global sheet dimension', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
            component.sheetDimensionType = SheetDimensionType.Global;
            component.isRemovedFromChart = false;
            fixture.detectChanges();
        });

        it('the show in chart button should be disabled', () => {
            expect(component.showInChartEnabled).toBe(false);
        });
    });
});
