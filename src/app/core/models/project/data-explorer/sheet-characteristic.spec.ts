import { SheetCharacteristicType, SheetDimensionType } from '@core/enum';
import { EqualityComparer } from '@shared/equality-comparer/equality-comparer';
import { AnalysisMapper } from '../../../../shared';

describe('SheetCharacteristic', () => {
    describe('childrenInDepthAndMe', () => {
        it('should return only me if no children exists', () => {
            const ch = new AnalysisMapper().mapCompleteSheetCharacteristicFromDto(
                { id: 1, type: SheetCharacteristicType.CustomFormula, caption: 'formula', formulaItems: [] },
                SheetDimensionType.Columns,
                undefined
            );
            expect(new EqualityComparer(ch.childrenInDepthAndMe, [ch]).equals).toBeTruthy();
        });

        it('should return all children in depth', () => {
            const ch = new AnalysisMapper().mapCompleteSheetCharacteristicFromDto(
                { id: 1, type: SheetCharacteristicType.CustomFormula, caption: 'formula', formulaItems: [] },
                SheetDimensionType.Columns,
                undefined
            );
            expect(new EqualityComparer(ch.childrenInDepthAndMe, [ch]).equals).toBeTruthy();
        });
    });
});
