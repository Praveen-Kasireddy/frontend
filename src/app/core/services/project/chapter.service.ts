import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChapterUpdateModel } from '@core/models/project/chapter-update-model';
import { CreateChapterModel } from '@core/models/project/create-chapter-model';
import { ScopeItem } from '@core/models/project/scope-item';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';

@Injectable()
export class ChapterService {
    private _baseUrl: string;
    private _apiEndpoint: string;
    private _toogleAssignmentEndpoint: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'chapter';
        this._toogleAssignmentEndpoint = 'toogleAssignment';
    }

    create(projectGuid: string, chapter: CreateChapterModel): Observable<Object> {
        return this._http.post(`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`, chapter);
    }

    mapChapterToUpdateModel(chapter: ScopeItem): ChapterUpdateModel {
        return { id: chapter.id, name: chapter.name };
    }

    /**
     * updates a chapter
     * @returns {void}
     * @memberof ChapaterService
     */
    putChapter(projectGuid: string, model: ChapterUpdateModel): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`;
        return this._http.put(url, model);
    }

    toogleAssignment(projectGuid: string, chapterId: number, userGpid: string): Observable<ScopeItem[]> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${
            this._toogleAssignmentEndpoint
        }/${chapterId}/${userGpid}`;
        return this._http.put<ScopeItem[]>(url, null);
    }

    deleteChapter(projectGuid: string, chapterId: number): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${chapterId}`;
        return this._http.delete(url);
    }

    /**
     * Swap positions of the two items
     * @param projectGuid
     * @param item1
     * @param item2
     */
    swap(projectGuid: string, item1: number, item2: number): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/swap/${item1}/${item2}`;
        return this._http.put(url, undefined);
    }
}
