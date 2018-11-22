import { DragItemSourceType } from '@core/enum/drag-item-source-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { Analysis, SheetCharacteristic } from '@core/models';

export class DraggedCharacteristicInfo {
    sourceType: DragItemSourceType;
    mainLevelPosition: number;
    subLevelPosition: number;
    filterPosition?: number;
    characteristicId?: number;
    sheetCharacteristicType?: SheetCharacteristicType;
    dataDimensionName?: string;
    name?: string;

    static createSheetCharacteristic(info: DraggedCharacteristicInfo, analysis: Analysis): SheetCharacteristic {
        const result = new SheetCharacteristic();
        result.id = analysis.newSheetCharacteristicId;
        result.type = info.sheetCharacteristicType;
        result.caption = info.name;
        result.characteristics =
            info.sheetCharacteristicType == SheetCharacteristicType.Characteristic && info.characteristicId > 0
                ? [{ id: info.characteristicId, name: info.name }]
                : [];
        result.formulaItems = [];
        result.removeFromChart = false;
        return result;
    }

    static fromGroup(mainIndex: number): DraggedCharacteristicInfo {
        return {
            sourceType: DragItemSourceType.Group,
            mainLevelPosition: mainIndex,
            subLevelPosition: -1
        };
    }

    static fromCharacteristic(mainIndex: number, subIndex): DraggedCharacteristicInfo {
        return {
            sourceType: DragItemSourceType.Characteristic,
            mainLevelPosition: mainIndex,
            subLevelPosition: subIndex
        };
    }

    static fromFilter(mainIndex: number, subIndex: number, filterIndex: number): DraggedCharacteristicInfo {
        return {
            sourceType: DragItemSourceType.Filter,
            mainLevelPosition: mainIndex,
            subLevelPosition: subIndex,
            filterPosition: filterIndex
        };
    }

    static fromJson(text: string): DraggedCharacteristicInfo {
        const result = JSON.parse(text);
        switch (result.sourceType) {
            case DragItemSourceType.Group:
                return result.mainLevelPosition == undefined ? undefined : result;
            case DragItemSourceType.Characteristic:
                return result.mainLevelPosition == undefined && result.subLevelPosition == undefined
                    ? undefined
                    : result;
            case DragItemSourceType.Filter:
                return result.mainLevelPosition == undefined &&
                    result.subLevelPosition == undefined &&
                    result.filterPosition == undefined
                    ? undefined
                    : result;
            case DragItemSourceType.Palette:
                return result.sheetCharacteristicType == undefined ||
                    result.characteristicId == undefined ||
                    result.dataDimensionName == undefined
                    ? undefined
                    : result;
            default:
                return undefined;
        }
    }

    static fromPalette(
        sheetCharacteristicType: SheetCharacteristicType,
        dataCharacteristicId: number,
        dataDimensionName: string
    ): DraggedCharacteristicInfo {
        return {
            sourceType: DragItemSourceType.Palette,
            sheetCharacteristicType: sheetCharacteristicType,
            characteristicId: dataCharacteristicId,
            dataDimensionName: dataDimensionName,
            mainLevelPosition: -1,
            subLevelPosition: -1
        };
    }
}
