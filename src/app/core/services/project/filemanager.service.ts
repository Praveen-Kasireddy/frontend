import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '@core/models/project/file-model';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class FileManagerService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    private _apiTestUrl: string = 'python';

    private _apiBlobUrl: string = '/api/cellvalue';

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'filemanager';
    }

    getExcelDataFromPython(filename: string) {
        let localurl = `${this._apiBlobUrl}?file=${filename}`;
        return this._http.get(localurl, httpOptions);
    }

    getContent(projectGuid: string, storageId: string): any {
        return this._http.get(`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/file/${storageId}/content`, {
            responseType: 'arraybuffer'
        });
    }

    getFiles(projectGuid: string): Observable<FileModel[]> {
        return this._http.get<FileModel[]>(`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`);
    }

    getFile(projectGuid: string, storageId: string): Observable<FileModel> {
        return this._http.get<FileModel>(`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/file/${storageId}`);
    }

    postFile(fileToUpload: File, projectGuid: string): Observable<string> {
        const endpoint = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`; // `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`;
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this._http.post<string>(endpoint, formData);
    }

    getDownloadLink(projectGuid: string, fileId: string) {
        return `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/file/${fileId}/content`;
    }

    getDataUrl(projectGuid: string) {
        return `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`;
    }

    getPostUrl(projectGuid: string) {
        return `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`; //`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`;
    }

    getAllowedFileTypes() {
        return this._http.get<string[]>(`${this._baseUrl}/${this._apiEndpoint}/allowedfiletypes`);
    }
}
