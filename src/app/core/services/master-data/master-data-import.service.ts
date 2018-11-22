import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessResult } from '@core/models/process-result';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';

@Injectable()
export class MasterDataImportService {
    private _baseUrl: string;
    private _apiEndpoint: string;
    private _industriesApiEndpoint: string;
    private _usersApiEndpoint: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'masterdataimport';
        this._industriesApiEndpoint = 'industries';
        this._usersApiEndpoint = 'users';
    }

    postFile(fileToUpload: File): Observable<Object> {
        return this.postFileWithFormData(`${this._baseUrl}/${this._apiEndpoint}`, fileToUpload);
    }

    checkResult(): Observable<ProcessResult> {
        const endpoint = `${this._baseUrl}/${this._apiEndpoint}`;
        return this._http.get<ProcessResult>(endpoint);
    }

    postIndustries(fileToUpload: File): Observable<Object> {
        return this.postFileWithFormData(
            `${this._baseUrl}/${this._apiEndpoint}/${this._industriesApiEndpoint}`,
            fileToUpload
        );
    }

    postUsers(fileToUpload: File): Observable<Object> {
        return this.postFileWithFormData(
            `${this._baseUrl}/${this._apiEndpoint}/${this._usersApiEndpoint}`,
            fileToUpload
        );
    }

    private postFileWithFormData(endpoint: string, fileToUpload: File): Observable<Object> {
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this._http.post<Object>(endpoint, formData);
    }
}
