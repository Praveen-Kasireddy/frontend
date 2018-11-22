import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoSnippet } from '@core/models';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Observable } from '../../../../../node_modules/rxjs';

@Injectable({ providedIn: 'root' })
export class SnippetsService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'snippets';
    }

    getTextSnippets(scopeItemGuid: string): Observable<Array<InfoSnippet>> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${scopeItemGuid}/text`;

        return this._http.get<Array<InfoSnippet>>(url);
    }

    getTextSnippetsByTask(projectGuid: string, taskId: number): Observable<Array<InfoSnippet>> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${taskId}/text`;

        return this._http.get<Array<InfoSnippet>>(url);
    }

    getGuidanceSnippet(scopeItemGuid: string): Observable<InfoSnippet> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${scopeItemGuid}/guidance`;

        return this._http.get<InfoSnippet>(url);
    }

    getGuidanceSnippetByTask(projectGuid: string, taskId: number): Observable<InfoSnippet> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${taskId}/guidance`;

        return this._http.get<InfoSnippet>(url);
    }
}
