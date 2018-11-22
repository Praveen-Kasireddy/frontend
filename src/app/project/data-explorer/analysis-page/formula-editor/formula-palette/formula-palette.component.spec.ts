import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetCharacteristicType, SheetDimensionType } from '@core/enum';
import { FormulaItemType } from '@core/enum/formula-item-type.enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { FormulaItem } from '@core/models';
import { DataExplorerService } from '@core/services';
import { DxModule } from '@shared/dx.module';
import { EqualityComparer } from '@shared/equality-comparer/equality-comparer';
import { SharedStorageService } from 'ngx-store';
import { of } from 'rxjs';
import { AnalysisMapper } from '../../../../../shared';
import { FormulaItemHelper } from '../formula-item-helper';
import { FormulaPaletteComponent } from './formula-palette.component';

describe('FormulaPaletteComponent', () => {
    let component: FormulaPaletteComponent;
    let fixture: ComponentFixture<FormulaPaletteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormulaPaletteComponent],
            imports: [DxModule],
            providers: [
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                },
                { provide: SharedStorageService, useClass: MockSharedStorageService }
            ]
        });
        const dxService = TestBed.get(DataExplorerService);
        spyOn(dxService, 'getAcceptableNewFormulaItems').and.returnValue(
            of([
                { type: FormulaItemType.Constant, caption: undefined },
                { type: FormulaItemType.SheetCharacteristic, caption: undefined }
            ])
        );
        fixture = TestBed.createComponent(FormulaPaletteComponent);
        component = fixture.componentInstance;
        const storageService = TestBed.get(SharedStorageService);
        spyOn(storageService, 'get').and.returnValue({});
        dxService.setAnalysis({ dimensions: [{ characteristics: [] }] });
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('add constant should call service', () => {
        const service = TestBed.get(DataExplorerService);
        const characteristic = new AnalysisMapper().mapSheetCharacteristicFromDto(
            { id: 1, type: SheetCharacteristicType.CustomFormula, caption: 'custom formula' },
            SheetDimensionType.Columns
        );
        service.setCurrentSheetCharacteristic(characteristic);
        component.show();
        fixture.detectChanges();
        let passedFormulaItem: FormulaItem;
        spyOn(service, 'addFormulaItem').and.callFake(item => (passedFormulaItem = item));
        component.constant = 100;
        (document.getElementsByClassName('kpmg-icon-add')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        const expectedItem = FormulaItemHelper.mapFromDto(undefined, {
            type: FormulaItemType.Constant,
            constantValue: 100
        });
        expect(new EqualityComparer(expectedItem, passedFormulaItem).equals).toBeTruthy();
        expect(component.items.length).toBe(1);
        expect(component.constant).toBeUndefined();
    });
});
