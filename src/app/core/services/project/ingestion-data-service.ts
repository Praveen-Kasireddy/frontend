import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    DataCell,
    DataCellUpdateResultEntry,
    Dimension,
    SourceData,
    SourceDataPage,
    UpdateDataCell
} from '@core/models';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { CellCoordinates } from '@shared/spread-sheet/cell';
import { NGXLogger } from 'ngx-logger';
import { combineLatest, Observable, Subject } from 'rxjs';

@Injectable()
export class IngestionDataService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'ingestiondata';
    }

    getPageCount(projectGuid: string, storageId: string): Observable<SourceDataPage> {
        return this._http.get<SourceDataPage>(
            `${this._baseUrl}/${this._apiEndpoint}/pages/${projectGuid}/${storageId}`
        );
    }

    getDataCellsPaged(projectGuid: string, storageId: string, page: number, pageSize: number): Observable<SourceData> {
        return this._http.get<SourceData>(
            `${this._baseUrl}/${this._apiEndpoint}/datacells/${projectGuid}/${storageId}/page/${page}/size/${pageSize}`
        );
    }

    getAllDataCells(projectGuid: string, storageId: string): Observable<SourceData> {
        const subject = new Subject<SourceData>();

        this.getPageCount(projectGuid, storageId).subscribe(page => {
            const obs: Observable<SourceData>[] = [];

            for (let i = 1; i <= page.pageCount; i++) {
                obs.push(this.getDataCellsPaged(projectGuid, storageId, i, page.pageSize));
            }

            combineLatest(obs).subscribe(
                result => {
                    const sourceData: SourceData = <SourceData>{ data: [], styles: [] };

                    result.forEach(e => {
                        e.data.forEach(d => sourceData.data.push(d));
                        e.styles.forEach(s => sourceData.styles.push(s));
                    });

                    subject.next(sourceData);
                },
                error => {
                    throw new Error(`Error while loading: ${error}`);
                }
            );
        });

        return subject.asObservable();
    }

    getDataCells(projectGuid: string, storageId: string, cells: CellCoordinates[]): Observable<DataCell[]> {
        return this._http.post<DataCell[]>(
            `${this._baseUrl}/${this._apiEndpoint}/datacells/${projectGuid}/${storageId}`,
            cells
        );
    }

    getDataOverview(projectGuid: string): Observable<any> {
        return this._http.get<any>(`${this._baseUrl}/${this._apiEndpoint}/dataoverview/${projectGuid}`);
    }

    updateDataCells(projectGuid: string, cells: UpdateDataCell[]): Observable<DataCellUpdateResultEntry[]> {
        return this._http.put<DataCellUpdateResultEntry[]>(
            `${this._baseUrl}/${this._apiEndpoint}/datacell/${projectGuid}`,
            cells
        );
    }

    getDimensions(projectGuid: string): Observable<Dimension[]> {
        return this._http.get<Dimension[]>(`${this._baseUrl}/${this._apiEndpoint}/dimensions/${projectGuid}`);
    }
}
