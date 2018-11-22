import { EventEmitter } from '@angular/core';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { Analysis, AnalysisDto } from '@core/models';
import { Characteristic } from '@core/models/project/characteristic';
import { SheetDimension } from '@core/models/project/data-explorer/sheet-dimension';
import { DataPaletteItem } from '@core/models/project/data-palette-item';
import { Observable, of } from 'rxjs';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { FormulaItem } from '@core/models/project/data-explorer/formula-item';

export class DataExplorerMockService {
    currentAnalysis: Analysis;
    currentAnalysisChanged: EventEmitter<Analysis> = new EventEmitter();
    currentFormulaItemIndex: number;
    currentFormulaItemChanged: EventEmitter<void> = new EventEmitter();
    currentSheetCharacteristic: SheetCharacteristic;
    currentSheetCharacteristicChanged: EventEmitter<void> = new EventEmitter();
    dimensionChanged: EventEmitter<SheetDimension> = new EventEmitter();
    editFormulaRequested: EventEmitter<void> = new EventEmitter();
    formulaItemAdded: EventEmitter<void> = new EventEmitter();
    openPaletteRequested: EventEmitter<void> = new EventEmitter();
    selectedDimension: SheetDimension;

    addFormulaItem(item: FormulaItem): void {
        this.currentSheetCharacteristic.formulaItems.push(item);
        this.formulaItemAdded.emit();
        this.notifyCurrentAnalysisChanged();
    }

    createAnalysis(projectGuid: string, analysis: AnalysisDto): Observable<number> {
        return of(1);
    }

    editFormula(characteristic: SheetCharacteristic): void {
        this.setCurrentSheetCharacteristic(characteristic);
        this.editFormulaRequested.emit();
    }

    existsAnalysis(projectGuid: string, name: string): Observable<boolean> {
        return of(true);
    }

    getAcceptableNewFormulaItems(
        projectGuid: string,
        analysis: AnalysisDto,
        dimensionType: SheetDimensionType,
        characteristicId: number
    ): Observable<FormulaItem[]> {
        return of([]);
    }

    getAnalysis() {
        return of({ name: 'existing analysis name' });
    }

    getAnalysisChartDataById(projectGuid: string, analysisId: number): Observable<any[]> {
        return of([]);
    }

    getAnalysisOnly(projectGuid: string, analysisId: number): Observable<Analysis> {
        return of(new Analysis());
    }

    getCharacteristics(projectGuid: string): Observable<Characteristic[]> {
        return of([]);
    }

    getChartData(projectGuid: string, model: AnalysisDto): Observable<any[]> {
        return of([]);
    }

    getFormulaPlaceHolders(
        projectGuid: string,
        analysis: AnalysisDto,
        dimensionType: SheetDimensionType,
        characteristicId: number
    ): Observable<string[]> {
        return of([]);
    }

    html(projectGuid: string, explorerId: number): Observable<string> {
        return of('');
    }

    htmlForModel(projectGuid: string, model: AnalysisDto): Observable<string> {
        return of('<table></table>');
    }

    list(projectGuid: string): Observable<Analysis[]> {
        return of([]);
    }

    listByUser(projectGuid: string): Observable<Analysis[]> {
        return of([]);
    }

    notifyCurrentAnalysisChanged() {
        this.currentAnalysisChanged.emit(this.currentAnalysis);
    }

    openPaletteRequest(): void {
        this.openPaletteRequested.emit();
    }

    palette(projectGuid: string, forColumns: boolean, forRows: boolean): Observable<DataPaletteItem[]> {
        return of([]);
    }

    public populateLabelIndex(analysis: Analysis): void {
        for (const d of analysis.dimensions) {
            let i: number = 1;
            for (const sc of d.characteristics) {
                if (sc.sheetCharacteristics && sc.sheetCharacteristics.length > 0) {
                    for (const ssc of sc.sheetCharacteristics) {
                        ssc.labelIndex = i;
                        i++;
                    }
                }
                sc.labelIndex = i;
                i++;
            }
        }
    }

    removeWholeFormula(): void {
        this.currentSheetCharacteristic.formulaItems = [];
        this.currentFormulaItemChanged.emit();
        this.notifyCurrentAnalysisChanged();
    }

    removeFormulaItem(index: number): void {
        this.currentSheetCharacteristic.formulaItems.splice(index, 1);
        this.currentFormulaItemChanged.emit();
        this.notifyCurrentAnalysisChanged();
    }

    setAnalysis(analysis: Analysis): void {
        this.currentAnalysis = analysis;
        this.currentAnalysisChanged.emit(analysis);
        this.selectDimension(this.currentAnalysis.dimensions[0]);
    }

    setCurrentSheetCharacteristic(characteristic: SheetCharacteristic) {
        this.currentSheetCharacteristic = characteristic;
        this.currentSheetCharacteristicChanged.emit();
    }

setCurrentFormulaItem(index: number) {
    this.currentFormulaItemIndex = index;
}

    selectDimension(dimension: SheetDimension) {
        this.selectedDimension = dimension;
        this.dimensionChanged.emit(dimension);
    }

    selectDimensionType(dimensionType: SheetDimensionType) {
        this.selectDimension({} as SheetDimension);
    }

    updateAnalysis(projectGuid: string, id: number, analysis: AnalysisDto): Observable<Object> {
        return of();
    }
}
