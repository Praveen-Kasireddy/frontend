import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '@core/models/role';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'role';
    }

    getProjectRoles(): Observable<Role[]> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/project`;

        return this._http.get<Role[]>(url);
    }
}
