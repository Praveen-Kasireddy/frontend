import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Industry } from '@core/models/project/industry-model';
import { Project } from '@core/models/project/project';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { ProjectStartModel } from '@core/models/project/project-start-model';
import { User } from '@core/models/user';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { LocalStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    private _projectsUrl = 'projects.json';
    private _configurationtemplatesUrl = 'configurationtemplates.json';
    private _baseUrl: string;
    private _currentUser: User;
    private _apiEndpoint: string;
    private _setupApiEndpoint: string;
    private _startApiEndPoint: string;
    private _industriesApiEndPoint: string;

    constructor(private _http: HttpClient, private _localStorageService: LocalStorageService) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._currentUser = this._localStorageService.get('currentUser');
        this._apiEndpoint = 'project';
        this._setupApiEndpoint = 'project/setup';
        this._industriesApiEndPoint = 'industries';
    }

    getIndustries(projectGuid: string): Observable<Industry[]> {
        return this._http.get<Industry[]>(
            `${this._baseUrl}/${this._apiEndpoint}/${projectGuid}/${this._industriesApiEndPoint}`
        );
    }

    /**
     * returns a list of projects
     *
     * @returns {Observable<IProject[]>}
     * @memberof ProjectService
     */
    getProjects(): Observable<Project[]> {
        if (!this._currentUser) {
            return of([]);
        }
        return this._http.get<Project[]>(`${this._baseUrl}/${this._apiEndpoint}/${this._currentUser.gpid}`);
    }

    /**
     * returns a single project
     * @returns {Observable<Project>}
     * @memberof ProjectService
     */
    getProject(id: string): Observable<Project> {
        return this._http.get<Project>(`${this._baseUrl}/${this._apiEndpoint}/${id}`);
    }

    /**
     * returns a project setup model
     * @returns {Observable<ProjectSetupModel>}
     * @memberof ProjectService
     */
    getProjectSetup(id: string): Observable<ProjectSetupModel> {
        return this._http.get<ProjectSetupModel>(`${this._baseUrl}/${this._setupApiEndpoint}/${id}`);
    }

    /**
     * post a new project
     * @returns {void}
     * @memberof ProjectService
     */
    postProject(model: ProjectStartModel): Observable<Project> {
        const url = `${this._baseUrl}/${this._apiEndpoint}`;
        return this._http.post<Project>(url, model);
    }

    /**
     * updates an existing project
     * @returns {void}
     * @memberof ProjectService
     */
    putProject(id: string, model: ProjectSetupModel): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${id}`;
        return this._http.put(url, model);
    }
}
