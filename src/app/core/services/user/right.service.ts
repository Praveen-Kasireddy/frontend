import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Right } from '@core/models/right';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RightService {
    private _baseUrl: string;
    private _apiEndpoint: string;
    private _subject = new Subject<Right[]>();

    rightsLoaded: boolean;
    rights: Right[];

    constructor(private _http: HttpClient) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'rights';
        this.rightsLoaded = false;
    }

    getProjectRights(projectId: string): Observable<Right[]> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}`;
        return this._http.get<Right[]>(url);
    }

    getAndStoreRights(projectId: string): void {
        this.getProjectRights(projectId).subscribe(data => {
            this.rights = data;
            this.sendMessage(data);
            this.rightsLoaded = true;
        });
    }

    sendMessage(type: Right[]) {
        this._subject.next(type);
    }

    clearMessage() {
        this._subject.next();
    }

    getMessage(): Observable<Right[]> {
        return this._subject.asObservable();
    }
}
