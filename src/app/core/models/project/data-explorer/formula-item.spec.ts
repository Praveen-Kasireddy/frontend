import { TestBed } from '@angular/core/testing';
import { FormulaItemType, SheetCharacteristicType, SheetDimensionType } from '@core/enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { DataExplorerService } from '@core/services';
import { FormulaItemHelper } from '../../../../project/data-explorer/analysis-page/formula-editor/formula-item-helper';
import { AnalysisMapper } from '../../../../shared';

describe('FormulaItem', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                }
            ]
        });
    });

    it('should show constant value for constant type', () => {
        const item = FormulaItemHelper.mapFromDto(TestBed.get(DataExplorerService), {
            type: FormulaItemType.Constant,
            constantValue: 1000.0
        });
        expect(item.caption).toBe('1000');
    });

    it('should show mathematic caption for mathematic type', () => {
        const item = FormulaItemHelper.mapFromDto(undefined, {
            type: FormulaItemType.Mathematic,
            mathematicCaption: 'SUM('
        });
        expect(item.caption).toBe('SUM(');
    });

    it('should show sheet characteristics label for sheet characteristic type', () => {
        const analysis = new AnalysisMapper().mapFromDto(TestBed.get(DataExplorerService), {
            dimensions: [
                {
                    type: SheetDimensionType.Columns,
                    characteristics: [
                        {
                            type: SheetCharacteristicType.Characteristic,
                            id: 1,
                            caption: 'characteristic'
                        }
                    ]
                }
            ]
        });
        const item = FormulaItemHelper.mapFromDto(analysis, {
            type: FormulaItemType.SheetCharacteristic,
            sheetCharacteristicId: 1
        });
        expect(item.caption).toBe('B characteristic');
    });

    it('should display deleted column/row for undefined sheet characteristic', () => {
        const item = FormulaItemHelper.mapFromDto(undefined, {
            type: FormulaItemType.SheetCharacteristic
        });
        expect(item.caption).toBe('deleted column/row');
    });
});
