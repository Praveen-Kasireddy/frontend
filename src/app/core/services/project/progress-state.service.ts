import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgressState } from '@core/models';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProgressStateService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'progressstate';
    }

    getProgressStates(projectId: string): Observable<ProgressState[]> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}`;

        return this._http.get<ProgressState[]>(url);
    }
}
