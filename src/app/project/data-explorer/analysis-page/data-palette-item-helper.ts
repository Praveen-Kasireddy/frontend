import { SheetDimensionType } from '@core/enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { Analysis, DataPaletteItem } from '@core/models';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { AnalysisMapper } from 'app/shared';

export class DataPaletteItemHelper {
    private prefix = 'reference_';

    equals(one: DataPaletteItem, other: DataPaletteItem): boolean {
        return (
            one.type === other.type &&
            (one.type != SheetCharacteristicType.Characteristic || one.characteristicId == other.characteristicId)
        );
    }
    fromClassList(classList: any): DataPaletteItem {
        const reference = (Array.from(classList).find(c => (c as string).startsWith(this.prefix)) as string).substring(
            this.prefix.length
        );
        const referenceItems = reference.split('_');
        return { type: SheetCharacteristicType[referenceItems[0]], characteristicId: Number(referenceItems[1]) };
    }
    reference(item: DataPaletteItem): string {
        return `reference_${item.type}_${item.characteristicId}`;
    }
    sheetCharacteristic(
        item: DataPaletteItem,
        dimensionType: SheetDimensionType,
        analysis: Analysis
    ): SheetCharacteristic {
        return new AnalysisMapper().mapCompleteSheetCharacteristicFromDto(
            {
                id: analysis.newSheetCharacteristicId,
                type: item.type,
                caption: item.name,
                characteristics:
                    item.type == SheetCharacteristicType.Characteristic && item.characteristicId > 0
                        ? [{ id: item.characteristicId, name: item.name }]
                        : [],
                formulaItems: [],
                removeFromChart: false
            },
            dimensionType,
            analysis
        );
    }
}
