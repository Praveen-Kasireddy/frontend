import { TestBed } from '@angular/core/testing';
import { SheetCharacteristicType, SheetDimensionType } from '@core/enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { DataExplorerService } from '@core/services';
import { AnalysisMapper } from 'app/shared';

describe('Analysis', () => {
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

    describe('allCharacteristics', () => {
        it('should expand nested characteristics', () => {
            const analysis = getNestedAnalysis();
            const chs = analysis.allCharacteristics;
            expect(chs[0].id).toBe(2);
            expect(chs[1].id).toBe(1);
        });
    });

    describe('newSheetCharacteristicId', () => {
        it('on empty analysis should start from 1', () => {
            const analysis = new AnalysisMapper().mapFromDto(TestBed.get(DataExplorerService), { dimensions: [] });
            expect(analysis.newSheetCharacteristicId).toBe(1);
            expect(analysis.newSheetCharacteristicId).toBe(2);
        });

        it('on not empty analysis should start from max id', () => {
            const analysis = getNestedAnalysis();
            expect(analysis.newSheetCharacteristicId).toBe(3);
            expect(analysis.newSheetCharacteristicId).toBe(4);
        });
    });

    function getNestedAnalysis() {
        return new AnalysisMapper().mapFromDto(TestBed.get(DataExplorerService), {
            dimensions: [
                {
                    type: SheetDimensionType.Columns,
                    characteristics: [
                        {
                            type: SheetCharacteristicType.CharacteristicGroup,
                            id: 1,
                            caption: 'group',
                            sheetCharacteristics: [
                                {
                                    type: SheetCharacteristicType.CustomFormula,
                                    id: 2,
                                    caption: 'custom formula'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});
