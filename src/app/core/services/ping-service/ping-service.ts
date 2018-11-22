import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { tap } from 'rxjs/operators';

/**
 * Service for keeping alive the session
 */
@Injectable()
export class PingService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'ping';
    }

    /**
     * pings the sever
     * @returns {Observable<string>}
     * @memberof PingService
     */
    ping(): void {
        this._http
            .get<string>(`${this._baseUrl}/${this._apiEndpoint}`)
            .pipe(
                tap((data: any) => {
                    // this._logger.debug(data);
                })
            )
            .subscribe();
    }
}
