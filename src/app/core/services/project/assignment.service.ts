import { Injectable, Output, EventEmitter } from '@angular/core';
import { TeamMemberWithCounter } from '@core/models/project/team-member-with-counter';
import { Observable, of } from 'rxjs';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { HttpClient } from '@angular/common/http';
import { NamedUser } from '@core/models/configuration/named-user';

@Injectable()
export class AssignmentService {
    private _baseUrl: string;
    private _projectApiEndpoint: string;
    private _getAssigneeApiEndpoint: string;
    private _projectGuid: string;
    private _productGuid: string;
    assignees: TeamMemberWithCounter[] = [];
    changed: EventEmitter<TeamMemberWithCounter[]> = new EventEmitter();
    selectedUser: NamedUser;

    constructor(private _http: HttpClient) {
        this._baseUrl = KosmosConfigurationService.appConfig.API_URL_CORE;
        this._projectApiEndpoint = 'project';
        this._getAssigneeApiEndpoint = 'assignees';
    }

    getAssignees(): Observable<TeamMemberWithCounter[]> {
        if (this._projectGuid && this._productGuid) {
            return this._http.get<TeamMemberWithCounter[]>(
                `${this._baseUrl}/${this._projectApiEndpoint}/${this._projectGuid}/${this._getAssigneeApiEndpoint}/${
                    this._productGuid
                }`
            );
        } else {
            return of([]);
        }
    }

    requery(): void {
        this.getAssignees().subscribe(assignees => this.changed.emit(assignees));
    }

    setProduct(productGuid: string): void {
        this._productGuid = productGuid;
        this.requery();
    }

    setProject(projectGuid: string): void {
        this._projectGuid = projectGuid;
        this.requery();
    }
}
