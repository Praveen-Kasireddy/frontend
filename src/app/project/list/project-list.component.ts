import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@core/models/project/project';
import { User } from '@core/models/user';
import { ProjectService } from '@core/services/project/project.service';
import { WidgetService } from '@core/services/widget/widget.service';
import { fadeInAnimation } from '@shared/animations/fade-in.animation';
import { BadgeStatusType } from '@shared/status-badge/status-badge.status-types.enum';
import { WidgetDirective } from '@shared/widgets/widget.directive';
import notify from 'devextreme/ui/notify';
import { get } from 'lodash';
import { LocalStorageService, SharedStorageService } from 'ngx-store';

@Component({
    selector: 'kosmos-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    animations: [fadeInAnimation(200)]
})
export class ProjectListComponent extends WidgetDirective implements OnInit {
    projects: Project[];
    errorMessage: string;

    showNewProjectCard$: boolean;
    hasProjects$: boolean;
    private _currentUser: User;

    isPopupVisible: boolean;

    constructor(
        private _projectService: ProjectService,
        private _router: Router,
        private _localStorageService: LocalStorageService,
        private _sharedStorageService: SharedStorageService,
        widgetService: WidgetService
    ) {
        super(widgetService);
        this._currentUser = this._localStorageService.get('currentUser');
    }

    ngOnInit(): void {
        this.requeryProjects();

        if (this._currentUser != undefined) {
            this.showNewProjectCard$ = this._currentUser.rights.projectCreation;
        } else {
            notify({
                message: 'Problem reading current User',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
        }
    }

    trackById(_, item: Project) {
        return item.projectGuid;
    }

    closePopup() {
        this.isPopupVisible = false;
    }

    projectSelected(project: Project) {
        this._router.navigate(['/projects', project.projectGuid, 'tasks']);
    }

    getProjectStatus(project: Project) {
        const projectStatus = get(project, 'status.name');
        switch (projectStatus) {
            case 'active':
                return BadgeStatusType.ACTIVE;
            case 'closed':
                return BadgeStatusType.CLOSED;
            default:
                return BadgeStatusType.DRAFT;
        }
    }

    handleAddProject(): void {
        this.isPopupVisible = true;
    }

    requeryProjects(): void {
        this._projectService.getProjects().subscribe(projects => {
            this.projects = projects;
            this.hasProjects$ = this.projects != undefined;
        });
    }

    projectCreated(project: Project): void {
        this.projects.unshift(project);
        this.hasProjects$ = this.projects != undefined;
    }

    projectLoaded(project: Project): void {
        const item = this.projects.find(p => p.projectGuid == project.projectGuid);
        const index = this.projects.indexOf(item);
        if (index > -1) {
            this.projects[index] = project;
            this._orderProjectsByName();
        }
    }

    projectLoadError(project: Project): void {
        const item = this.projects.find(p => p.projectGuid == project.projectGuid);
        const index = this.projects.indexOf(item);
        if (index > -1) {
            this.projects.splice(index, 1);
            this._orderProjectsByName();
        }
    }

    private _orderProjectsByName(): void {
        this.projects.sort((n1: Project, n2: Project) => {
            if (n1.name == undefined) {
                return -1;
            }

            if (n2.name == undefined) {
                return 1;
            }

            return n1.name.toLowerCase() < n2.name.toLowerCase() ? -1 : 1;
        });
    }
}
