import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { Characteristic } from '@core/models/project/characteristic';
import { Analysis } from '@core/models/project/data-explorer/analysis';
import { AnalysisValidationDto } from '@core/models/project/data-explorer/analysis-validation-dto';
import { AnalysisDto } from '@core/models/project/data-explorer/analysis-dto';
import { FormulaItem } from '@core/models/project/data-explorer/formula-item';
import { FormulaItemDto } from '@core/models/project/data-explorer/formula-item-dto';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { SheetDimension } from '@core/models/project/data-explorer/sheet-dimension';
import { DataPaletteItem } from '@core/models/project/data-palette-item';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';

@Injectable()
export class DataExplorerService {
    currentAnalysisChanged: EventEmitter<Analysis> = new EventEmitter();
    currentAnalysis: Analysis;
    dimensionChanged: EventEmitter<SheetDimension> = new EventEmitter();
    openPaletteRequested: EventEmitter<void> = new EventEmitter();
    selectedDimension: SheetDimension;
    editFormulaRequested: EventEmitter<void> = new EventEmitter();
    currentSheetCharacteristic: SheetCharacteristic;
    currentSheetCharacteristicChanged: EventEmitter<void> = new EventEmitter();
    currentFormulaItemChanged: EventEmitter<void> = new EventEmitter();
    currentFormulaItemIndex: number;
    hasChanges: boolean;
    private _baseUrl: string;
    private apiEndpoint: string;
    private _analysisEndPonit: string;
    private _htmlEndPoint: string;
    private _chartEndPoint: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this.apiEndpoint = 'dataexplorer';
        this._analysisEndPonit = 'analysis';
        this._htmlEndPoint = 'html';
        this._chartEndPoint = 'chart/data';
        this.hasChanges = false;
    }

    addFormulaItem(item: FormulaItem): void {
        this.currentSheetCharacteristic.formulaItems.splice(
            this.currentFormulaItemIndex == undefined
                ? this.currentSheetCharacteristic.formulaItems.length
                : this.currentFormulaItemIndex,
            this.currentFormulaItemIndex == undefined ? 0 : 1,
            item
        );
        this.currentFormulaItemChanged.emit();
        this.notifyCurrentAnalysisChanged();
    }

    createAnalysis(projectGuid: string, analysis: AnalysisDto): Observable<number> {
        this.hasChanges = false;
        return this._http.post<number>(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}`, analysis);
    }

    editFormula(characteristic: SheetCharacteristic): void {
        this.setCurrentSheetCharacteristic(characteristic);
        this.editFormulaRequested.emit();
    }

    existsAnalysis(projectGuid: string, name: string): Observable<boolean> {
        const dto: AnalysisValidationDto = { name: name };
        return this._http.post<boolean>(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/exists`, dto);
    }

    getAcceptableNewFormulaItems(
        projectGuid: string,
        analysis: AnalysisDto,
        characteristicId: number,
        currentFormulaItemIndex: number
    ): Observable<FormulaItemDto[]> {
        return this._http.post<FormulaItemDto[]>(
            `${this._baseUrl}/${
                this.apiEndpoint
            }/${projectGuid}/acceptableFormulaItems/${characteristicId}/${currentFormulaItemIndex}`,
            analysis
        );
    }

    getAnalysis(projectGuid: string, analysisId: number): Observable<AnalysisDto> {
        return this._http.get<AnalysisDto>(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/${analysisId}`);
    }

    getCharacteristics(projectGuid: string): Observable<Characteristic[]> {
        return this._http.get<Characteristic[]>(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/characteristics`);
    }

    getFormulaPlaceHolders(projectGuid: string, analysis: AnalysisDto, characteristicId: number): Observable<string[]> {
        return this._http.post<string[]>(
            `${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/formulaPlaceHolders/${characteristicId}`,
            analysis
        );
    }

    html(projectGuid: string, analysisId: number): Observable<string> {
        return this._http.get<string>(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/html/${analysisId}`);
    }

    htmlForModel(projectGuid: string, model: AnalysisDto): Observable<string> {
        return this._http.post<string>(
            `${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/${this._htmlEndPoint}`,
            model
        );
    }

    list(projectGuid: string): Observable<Analysis[]> {
        return this._http.get<Analysis[]>(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}`);
    }

    listByUser(projectGuid: string): Observable<AnalysisDto[]> {
        return this._http.get<AnalysisDto[]>(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/ByUser`);
    }

    notifyCurrentAnalysisChanged() {
        this.hasChanges = true;
        this.populateLabelIndex(this.currentAnalysis);
        this.currentAnalysisChanged.emit(this.currentAnalysis);
    }

    openPaletteRequest(): void {
        this.openPaletteRequested.emit();
    }

    palette(projectGuid: string, dimension: SheetDimensionType): Observable<DataPaletteItem[]> {
        return this._http.get<DataPaletteItem[]>(
            `${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/palette/${dimension}`
        );
    }

    removeFormulaItem(index: number): void {
        this.currentSheetCharacteristic.formulaItems.splice(index, 1);
        this.currentFormulaItemChanged.emit();
        this.notifyCurrentAnalysisChanged();
    }

    removeWholeFormula(): void {
        this.currentSheetCharacteristic.formulaItems = [];
        this.currentFormulaItemChanged.emit();
        this.notifyCurrentAnalysisChanged();
    }

    setAnalysis(analysis: Analysis): void {
        this.hasChanges = false;
        this.populateLabelIndex(analysis);
        this.currentAnalysis = analysis;
        this.currentAnalysisChanged.emit(analysis);
        this.selectDimension(this.currentAnalysis.dimensions[0]);
    }

    setCurrentFormulaItem(index: number) {
        this.currentFormulaItemIndex = index;
    }

    setCurrentSheetCharacteristic(characteristic: SheetCharacteristic) {
        this.currentSheetCharacteristic = characteristic;
        this.hasChanges = true;
        this.currentSheetCharacteristicChanged.emit();
    }

    selectDimension(dimension: SheetDimension) {
        this.selectedDimension = dimension;
        this.dimensionChanged.emit(dimension);
    }

    selectDimensionType(dimensionType: SheetDimensionType) {
        this.selectDimension(this.currentAnalysis.dimensions.find(d => d.type == dimensionType));
    }

    updateAnalysis(projectGuid: string, id: number, analysis: AnalysisDto): Observable<Object> {
        this.hasChanges = false;
        return this._http.put(`${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/${id}`, analysis);
    }

    getChartData(projectGuid: string, model: AnalysisDto): Observable<any[]> {
        return this._http.post<any[]>(
            `${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/${this._chartEndPoint}`,
            model
        );
    }

    getAnalysisChartDataById(projectGuid: string, analysisId: number): Observable<any[]> {
        return this._http.get<any[]>(
            `${this._baseUrl}/${this.apiEndpoint}/${projectGuid}/${this._chartEndPoint}/${analysisId}`
        );
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
}
