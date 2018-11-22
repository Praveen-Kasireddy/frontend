import { SheetDimensionType } from '@core/enum';
import { Analysis, SheetCharacteristic, SheetDimension } from '@core/models';
import { AnalysisDto } from '@core/models/project/data-explorer/analysis-dto';
import { SheetCharacteristicDto } from '@core/models/project/data-explorer/sheet-characteristic-dto';
import { SheetDimensionDto } from '@core/models/project/data-explorer/sheet-dimension-dto';
import { DataExplorerService } from '@core/services';
import { FormulaItemHelper } from '../../project/data-explorer/analysis-page/formula-editor/formula-item-helper';

export class AnalysisMapper {
    getAllDtoSheetCharacteristics(analysisDto: AnalysisDto) {
        const chs =
            analysisDto.dimensions.length > 0
                ? analysisDto.dimensions.map(d => d.characteristics).reduce((a, c) => a.concat(c))
                : [];
        if (chs.length > 0) {
            return chs.map(c => this.getAllDtoSheetCharacteristicsFromCharacterisic(c)).reduce((a, c) => a.concat(c));
        }
        return [];
    }
    getAllDtoSheetCharacteristicsFromCharacterisic(characteristic: SheetCharacteristicDto): SheetCharacteristicDto[] {
        if (characteristic.sheetCharacteristics && characteristic.sheetCharacteristics.length > 0) {
            return characteristic.sheetCharacteristics
                .map(c => this.getAllDtoSheetCharacteristicsFromCharacterisic(c))
                .reduce((a, c) => a.concat(c))
                .concat(characteristic);
        }
        return [characteristic];
    }

    getAllSheetCharacteristics(analysis: Analysis) {
        const chs = analysis.dimensions.map(d => d.characteristics).reduce((a, c) => a.concat(c));
        if (chs.length > 0) {
            return chs.map(c => this.getAllSheetCharacteristicsFromCharacterisic(c)).reduce((a, c) => a.concat(c));
        }
        return [];
    }
    getAllSheetCharacteristicsFromCharacterisic(characteristic: SheetCharacteristic): SheetCharacteristic[] {
        if (characteristic.sheetCharacteristics && characteristic.sheetCharacteristics.length > 0) {
            return characteristic.sheetCharacteristics
                .map(c => this.getAllSheetCharacteristicsFromCharacterisic(c))
                .reduce((a, c) => a.concat(c))
                .concat(characteristic);
        }
        return [characteristic];
    }

    mapDimensionFromDto(dto: SheetDimensionDto): SheetDimension {
        const result = new SheetDimension();
        result.type = dto.type;
        result.characteristics = dto.characteristics.map(c => this.mapSheetCharacteristicFromDto(c, dto.type));
        return result;
    }

    mapFromDto(dataExplorerService: DataExplorerService, dto: AnalysisDto): Analysis {
        const result = new Analysis();
        result.id = dto.id;
        result.name = dto.name;
        result.dimensions = dto.dimensions.map(d => this.mapDimensionFromDto(d));
        result.isChartAnalysis = dto.isChartAnalysis;
        result.chartDisplayMode = dto.chartDisplayMode;
        result.chartType = dto.chartType;
        result.userCreatedBy = dto.userCreatedBy;
        result.scale = dto.scale;
        this.getAllDtoSheetCharacteristics(dto).forEach(
            c =>
                (result.sheetCharacteristic(c.id).formulaItems = c.formulaItems
                    ? c.formulaItems.map(i => FormulaItemHelper.mapFromDto(result, i))
                    : [])
        );
        dataExplorerService.populateLabelIndex(result);
        return result;
    }

    mapCompleteSheetCharacteristicFromDto(
        dto: SheetCharacteristicDto,
        dimensionType: SheetDimensionType,
        analysis: Analysis
    ) {
        const result = this.mapSheetCharacteristicFromDto(dto, dimensionType);
        result.formulaItems = dto.formulaItems.map(i => FormulaItemHelper.mapFromDto(analysis, i));
        return result;
    }

    mapSheetCharacteristicFromDto(dto: SheetCharacteristicDto, dimensionType: SheetDimensionType): SheetCharacteristic {
        const result = new SheetCharacteristic();
        result.id = dto.id;
        result.dimensionType = dimensionType;
        result.type = dto.type;
        result.characteristics = dto.characteristics;
        result.caption = dto.caption;
        result.removeFromChart = dto.removeFromChart;
        result.sheetCharacteristics = dto.sheetCharacteristics
            ? dto.sheetCharacteristics.map(d => this.mapSheetCharacteristicFromDto(d, dimensionType))
            : [];
        result.formatPercent = dto.formatPercent;
        return result;
    }

    mapToDto(name: string, currentAnalysis: Analysis): AnalysisDto {
        return {
            id: currentAnalysis.id,
            name: name,
            dimensions: currentAnalysis.dimensions.map<SheetDimensionDto>(d => ({
                type: d.type,
                characteristics: d.characteristics.map<SheetCharacteristicDto>(
                    c =>
                        ({
                            id: c.id,
                            type: c.type,
                            caption: c.caption,
                            characteristics: c.characteristics,
                            removeFromChart: c.removeFromChart,
                            formulaItems: FormulaItemHelper.mapToDtos(c.formulaItems),
                            sheetCharacteristics: c.sheetCharacteristics
                                ? c.sheetCharacteristics.map<SheetCharacteristicDto>(
                                      s =>
                                          ({
                                              id: s.id,
                                              type: s.type,
                                              caption: s.caption,
                                              characteristics: s.characteristics,
                                              removeFromChart: s.removeFromChart,
                                              formulaItems: FormulaItemHelper.mapToDtos(s.formulaItems),
                                              formatPercent: s.formatPercent
                                          } as SheetCharacteristicDto)
                                  )
                                : undefined,
                            formatPercent: c.formatPercent
                        } as SheetCharacteristicDto)
                )
            })),
            isChartAnalysis: currentAnalysis.isChartAnalysis,
            chartDisplayMode: currentAnalysis.chartDisplayMode,
            chartType: currentAnalysis.chartType,
            userCreatedBy: currentAnalysis.userCreatedBy,
            scale: currentAnalysis.scale
        };
    }
}
