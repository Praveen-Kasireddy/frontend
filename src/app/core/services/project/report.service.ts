import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportPageType } from '@core/enum';
import { ReportPageOrientation } from '@core/enum/report-page-orientation.enum';
import {
    ReportCreationSettings,
    ReportPage,
    ReportPageLinks,
    ReportPageNavigation,
    ReportPageTemplateContent,
    ReportPageUpdate,
    ReportTemplate,
    TableOfContent
} from '@core/models';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Observable } from 'rxjs';

@Injectable()
export class ReportService {
    private _baseUrl: string;
    private _apiEndpoint: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._apiEndpoint = 'report';
    }

    getTableOfContent(projectId: string): Observable<TableOfContent[]> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/tableofcontent`;

        return this._http.get<TableOfContent[]>(url);
    }

    getPage(
        projectId: string,
        productId: number,
        chapterId: number,
        taskId?: number,
        pageNumber?: number
    ): Observable<ReportPage> {
        let url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/page/${productId}/${chapterId}`;

        if (taskId) {
            url = `${url}/${taskId}`;

            if (pageNumber) {
                url = `${url}/${pageNumber}`;
            }
        }

        return this._http.get<ReportPage>(url);
    }

    getMasterTemplate(
        portrait: boolean,
        projectId: string,
        productId: number,
        chapterId: number,
        taskId?: number,
        pageNumber?: number
    ): Observable<ReportPage> {
        let url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/${
            portrait ? 'portrait' : 'landscape'
        }/${productId}/${chapterId}`;

        if (taskId) {
            url = `${url}/${taskId}`;

            if (pageNumber) {
                url = `${url}/${pageNumber}`;
            }
        }

        return this._http.get<ReportPage>(url);
    }

    getReport(projectId: string, settings: ReportCreationSettings, taskId?: number): any {
        let url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/report`;

        if (taskId) {
            url = `${url}/${taskId}`;
        }

        return this._http.post(url, settings, { responseType: 'blob' });
    }

    save(payload: ReportPageUpdate, projectId: string, taskId: number, pageNumber?: number): Observable<Object> {
        let url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/page/${taskId}`;

        if (pageNumber) {
            url = `${url}/${pageNumber}`;
        }

        return this._http.put(url, payload);
    }

    saveContentTemplate(payload: ReportPageUpdate, projectId: string, taskId: number): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/template/${taskId}`;

        return this._http.post(url, payload);
    }

    getContentTemplate(templateId: number): Observable<ReportPageTemplateContent> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/template/${templateId}`;

        return this._http.get<ReportPageTemplateContent>(url);
    }

    deleteContentTemplate(templateId: number): Observable<Object> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/template/${templateId}`;

        return this._http.delete(url);
    }

    newPage(
        projectId: string,
        taskId: number,
        templateId?: number | undefined,
        orientation?: ReportPageOrientation | undefined,
        type?: ReportPageType | undefined
    ): Observable<ReportPageLinks> {
        let url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/page/${taskId}`;

        let body: any = null;

        if (templateId) {
            url = `${url}/${templateId}`;
        } else if (orientation != undefined) {
            body = {
                orientation: orientation
            };

            if (type != undefined) {
                body.type = type;
            }
        }

        return this._http.post<ReportPageLinks>(url, body);
    }

    removePage(projectId: string, taskId: number, pageNumber: number): Observable<ReportPageLinks> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/page/${taskId}/${pageNumber}`;

        return this._http.delete<ReportPageLinks>(url);
    }

    getSelfNavigation(links: ReportPageLinks): ReportPageNavigation {
        return this.splitLinksToObject(links.self);
    }

    getNextNavigation(links: ReportPageLinks): ReportPageNavigation {
        return this.splitLinksToObject(links.next);
    }

    getPreviousNavigation(links: ReportPageLinks): ReportPageNavigation {
        return this.splitLinksToObject(links.previous);
    }

    getTemplates(projectId: string, taskId: number): Observable<ReportTemplate[]> {
        const url = `${this._baseUrl}/${this._apiEndpoint}/${projectId}/template/${taskId}`;

        return this._http.get<ReportTemplate[]>(url);
    }

    private splitLinksToObject(link: string): ReportPageNavigation {
        const split = link.split('/');

        return new ReportPageNavigation(+split[0], +split[1], +split[2], +split[3], split[4]);
    }
}
