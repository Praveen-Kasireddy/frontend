import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaItemType } from '@core/enum/formula-item-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { FormulaItem } from '@core/models/project/data-explorer/formula-item';
import { DataExplorerService } from '@core/services';
import { DxModule } from '@shared/dx.module';
import { SharedStorageService } from 'ngx-store';
import { of } from 'rxjs';
import { AnalysisMapper } from '../../../../shared';
import { FormulaEditorComponent } from './formula-editor.component';
import { FormulaPaletteComponent } from './formula-palette/formula-palette.component';

describe('FormulaEditorComponent', () => {
    let component: FormulaEditorComponent;
    let fixture: ComponentFixture<FormulaEditorComponent>;
    let dxService: DataExplorerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormulaEditorComponent, FormulaPaletteComponent],
            imports: [DxModule],
            providers: [
                { provide: DataExplorerService, useClass: DataExplorerMockService },
                { provide: SharedStorageService, useClass: MockSharedStorageService }
            ]
        });
        dxService = TestBed.get(DataExplorerService);
        dxService.setAnalysis(
            new AnalysisMapper().mapFromDto(dxService, {
                name: undefined,
                isChartAnalysis: false,
                chartDisplayMode: undefined,
                chartType: undefined,
                dimensions: [
                    {
                        type: SheetDimensionType.Columns,
                        characteristics: [
                            {
                                id: 1,
                                caption: 'Custom formula',
                                type: SheetCharacteristicType.CustomFormula,
                                formulaItems: [
                                    {
                                        type: FormulaItemType.Constant,
                                        constantValue: 1
                                    }
                                ],
                                removeFromChart: false,
                                characteristics: []
                            }
                        ]
                    }
                ],
                scale: undefined,
                userCreatedBy: undefined
            })
        );
        dxService.setCurrentSheetCharacteristic(dxService.currentAnalysis.dimensions[0].characteristics[0]);
        spyOn(dxService, 'getFormulaPlaceHolders').and.returnValue(of(['placeholder 1', 'placeholder 2']));
        fixture = TestBed.createComponent(FormulaEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('on close should reset current index, hide palette and emit close request', () => {
        component.currentItemIndex = 1;
        spyOn(component.formulaPalette, 'hide');
        spyOn(component.closeRequested, 'emit');
        (document.getElementsByClassName('kpmg-icon-check')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(component.currentItemIndex).toBeUndefined();
        expect(component.formulaPalette.hide).toHaveBeenCalled();
        expect(component.closeRequested.emit).toHaveBeenCalled();
    });

    it('should refresh on formula item add', () => {
        const formulaItem: FormulaItem = new FormulaItem();
        const characteristic = new AnalysisMapper().mapSheetCharacteristicFromDto(
            { id: 2, type: SheetCharacteristicType.CustomFormula, caption: 'new formula' },
            SheetDimensionType.Columns
        );
        characteristic.formulaItems = [];
        dxService.setCurrentSheetCharacteristic(characteristic);
        dxService.addFormulaItem(formulaItem);
        expect(component.items.length).toBe(1);
    });

    it('should remove item', () => {
        (document.getElementsByClassName('remove')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('remove').length).toBe(0);
    });

    it('should remove whole formula', () => {
        (document.getElementsByClassName('removeAll')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('remove').length).toBe(0);
    });

    describe('for all refreshing operations', () => {
        beforeEach(() => {
            spyOn(component.formulaPalette, 'show');
        });

        afterEach(() => {
            expect(component.items).toBe(dxService.currentSheetCharacteristic.formulaItems);
            expect(dxService.getFormulaPlaceHolders).toHaveBeenCalled();
            expect(document.getElementsByClassName('first-place-holder').length).toBe(1);
            expect(document.getElementsByClassName('place-holder').length).toBe(1);
            expect(component.formulaPalette.show).toHaveBeenCalled();
        });

        it('on item click should set current item and refresh items', () => {
            (document.getElementsByClassName('label')[0] as HTMLDivElement).click();
            fixture.detectChanges();
            expect(component.currentItemIndex).toBe(0);
        });

        it('on placeholder click should reset index', () => {
            component.currentItemIndex = 0;
            (document.getElementsByClassName('first-place-holder')[0] as HTMLDivElement).click();
            fixture.detectChanges();
            expect(component.currentItemIndex).toBeUndefined();
        });
    });
});
