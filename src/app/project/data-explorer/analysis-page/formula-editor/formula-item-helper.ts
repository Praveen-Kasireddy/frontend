import { FormulaItemType } from '@core/enum';
import { Analysis, FormulaItem } from '@core/models';
import { FormulaItemDto } from '@core/models/project/data-explorer/formula-item-dto';

export class FormulaItemHelper {
    static newConstant(value: number): FormulaItem {
        const result = new FormulaItem();
        result.type = FormulaItemType.Constant;
        result.constantValue = value;
        result.mathematicCaption = undefined;
        result.sheetCharacteristic = undefined;
        return result;
    }

    static mapFromDto(analysis: Analysis, dto: FormulaItemDto): FormulaItem {
        const result = new FormulaItem();
        result.type = dto.type;
        result.sheetCharacteristic = dto.sheetCharacteristicId
            ? analysis.sheetCharacteristic(dto.sheetCharacteristicId)
            : undefined;
        result.mathematicCaption = dto.mathematicCaption;
        result.constantValue = dto.constantValue;
        return result;
    }

    static mapToDtos(items: FormulaItem[]): FormulaItemDto[] {
        return items
            ? items.map(i => ({
                  type: i.type,
                  sheetCharacteristicId:
                      i.type == FormulaItemType.SheetCharacteristic
                          ? i.sheetCharacteristic
                              ? i.sheetCharacteristic.id
                              : undefined
                          : undefined,
                  mathematicCaption: i.mathematicCaption,
                  constantValue: i.constantValue
              }))
            : [];
    }
}
