import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTaskModel } from '@core/models/project/create-task-model';
import { ProgressState } from '@core/models/project/progress-state';
import { ScopeItem } from '@core/models/project/scope-item';
import { ScopeItemUpdateModel } from '@core/models/project/scope-item-update-model';
import { TaskAssignmentModel } from '@core/models/project/task-assignment-model';
import { TaskChangeState } from '@core/models/project/task-change-state';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { TasksFilterInfo } from '../../../shared/project-scope/tasks-filer-info';

@Injectable()
export class ScopeItemService {
    private _baseUrl: string;
    private _apiEndpoint: string;
    private _product: string;
    private _toogleAssignment: string;
    private chapterEndPoint: string;
    private _user: string;

    constructor(private _http: HttpClient, private _logger: NGXLogger) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'scopeitem';
        this._product = 'product';
        this._toogleAssignment = 'toogleAssignment';
        this.chapterEndPoint = 'chapter';
        this._user = 'user';
    }

    create(projectGuid: string, task: CreateTaskModel): Observable<Object> {
        return this._http.post(`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`, task);
    }

    /**
     * returns a list of scope items for the selected project
     *
     * @returns {Observable<ScopeItem[]>}
     * @memberof ScopeItemService
     */
    getScopeItems(projectGuid: string): Observable<ScopeItem[]> {
        return this._http.get<ScopeItem[]>(`${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`);
    }

    /**
     * returns a list of chapters with tasks for the selected project
     *
     * @returns {Observable<ScopeItem[]>}
     * @memberof ScopeItemService
     */
    // tslint:disable-next-line:max-line-length
    getChapter(projectGuid: string, productId: string, filterInfo: TasksFilterInfo): Observable<ScopeItem[]> {
        let params: HttpParams = new HttpParams();
        if (filterInfo.statusFilter && filterInfo.statusFilter.length > 0) {
            for (const param of filterInfo.statusFilter) {
                params = params.append('progressStates', String(param));
            }
        }
        return this._http.get<ScopeItem[]>(
            `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${this._product}/${productId}/${
                filterInfo.filterType
            }`,
            { params }
        );
    }

    /**
     * returns a list of chapters with tasks for the selected project
     *
     * @returns {Observable<ScopeItem[]>}
     * @memberof ScopeItemService
     */
    getTasks(projectGuid: string, chapterId: number): Observable<ScopeItem[]> {
        return this._http.get<ScopeItem[]>(
            `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${this.chapterEndPoint}/${chapterId}`
        );
    }

    mapItemToUpdateModel(item: ScopeItem): ScopeItemUpdateModel {
        return { id: item.id, name: item.name, isSelected: item.isSelected };
    }

    /**
     * updates a task
     * @returns {void}
     * @memberof ScopeItemService
     */
    putScopeItems(projectGuid: string, models: ScopeItemUpdateModel[]): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}`;
        return this._http.put(url, models);
    }

    toogleAssignment(projectGuid: string, model: TaskAssignmentModel): Observable<ScopeItem> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${this._toogleAssignment}`;
        return this._http.put<ScopeItem>(url, model);
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

    moveScopeItem(projectGuid: string, itemId: number, destChapterId: number, insertAt: number, insertBefore: boolean) {
        const inbe = insertBefore ? 1 : 0;

        const url = `${this._baseUrl}/${
            this._apiEndpoint
        }/${projectGuid}/${itemId}/move/${destChapterId}/${insertAt}/${inbe}`;
        console.log(url);
        return this._http.put(url, undefined);
    }

    deleteScopeItem(projectGuid: string, scopeItemId: number): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${scopeItemId}`;
        return this._http.delete(url);
    }

    getState(projectGuid: string, taskId: number): Observable<ProgressState> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${taskId}/state`;
        return this._http.get<ProgressState>(url);
    }

    changeState(projectGuid: string, taskId: number, newProgressStateId: number): Observable<object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${taskId}/state`;
        const payload = new TaskChangeState(newProgressStateId);
        return this._http.put(url, payload);
    }
}
