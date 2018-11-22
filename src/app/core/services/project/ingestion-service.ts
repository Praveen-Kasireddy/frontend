import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessResult } from '@core/models/process-result';
import { IngestionRequestModel } from '@core/models/project/ingestion-request-model';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';

@Injectable()
export class IngestionService {
    private _baseUrl: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_INGEST;
    }

    ingest(projectGuid: string, storageGuid: string): Observable<Object> {
        const endpoint = this._baseUrl;
        const model = new IngestionRequestModel();
        model.projectGuid = projectGuid;
        model.storageId = storageGuid;
        return this._http.post<Object>(endpoint, model);
    }

    checkStatus(projectGuid: string, storageGuid: string): Observable<ProcessResult> {
        const endpoint = `${this._baseUrl}/status/${projectGuid}/${storageGuid}`;
        return this._http.get<ProcessResult>(endpoint);
    }
}
