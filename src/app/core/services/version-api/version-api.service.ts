import { Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable()
export class VersionApiService {
    private _baseUrl: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
    }

    public getApiVersion$(): Observable<any> {
        return this._http.options(`${this._baseUrl}`, {
            observe: 'response'
        });
    }
}
