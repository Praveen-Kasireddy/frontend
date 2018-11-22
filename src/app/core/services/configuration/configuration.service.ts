import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '@core/models/configuration/configuration';
import { ConfigurationDetails } from '@core/models/configuration/configuration-details';
import { ProjectSetupConfiguration } from '@core/models/configuration/project-setup-configuration';
import { User } from '@core/models/user';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { LocalStorageService } from 'ngx-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigurationService {
    private _baseUrl: string;
    private _currentUser: User;
    private _apiEndpoint: string;
    private projectSetupConfigApiEndpoint: string;

    constructor(
        private _http: HttpClient,
        private _logger: NGXLogger,
        private _localStorageService: LocalStorageService
    ) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._currentUser = this._localStorageService.get('currentUser');
        this._apiEndpoint = 'configuration/';
        this.projectSetupConfigApiEndpoint = this._apiEndpoint + 'projectSetup';
    }

    /**
     * returns a list of projects
     *
     * @returns {Observable<Configuration[]>}
     * @memberof ConfigurationService
     */
    getConfigurations$(): Observable<Configuration[]> {
        return this._http.get<Configuration[]>(`${this._baseUrl}/${this._apiEndpoint}` + this._currentUser.gpid);
    }

    getConfiguration(id: string) {
        return this.getConfigurations$().pipe(
            map(configurations => configurations.find(configuration => configuration.configGuid == id))
        );
    }

    getConfigurationDetails$(guid: string): Observable<ConfigurationDetails> {
        return this._http.get<ConfigurationDetails>(`${this._baseUrl}/${this._apiEndpoint}` + guid);
    }

    getConfigurationDetails(guid: string) {
        return this.getConfigurationDetails$(guid);
    }

    getProjectSetupConfiguration(): Observable<ProjectSetupConfiguration> {
        return this._http.get<ProjectSetupConfiguration>(`${this._baseUrl}/${this.projectSetupConfigApiEndpoint}`);
    }
}
