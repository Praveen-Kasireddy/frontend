import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'environments/environment';
import { ScopeItem } from '@core/models/project/scope-item';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Stakeholder } from '@core/models/project/stakeholder';
import { _countGroupLabelsBeforeOption } from '@angular/material';

@Injectable()
export class StakeHolderService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'stakeholder';
    }

    /**
     * returns a list of stakeholder
     *
     * @returns {Observable<Stakeholder[]>}
     * @memberof StakeHolderService
     */

    getStakeHolders(projectGuid: string): Observable<Stakeholder[]> {
        return this._http.get<Stakeholder[]>(`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`).pipe(
            tap((data: any) => {
                // temporary for debug purpose...
                // this._logger.debug(data);
            })
        );
    }

    postStakeholder(model: Stakeholder, projectGuid: string): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`;
        return this._http.post(url, model);
    }

    putStakeholder(model: Stakeholder): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}`;
        return this._http.post(url, model);
    }
}
