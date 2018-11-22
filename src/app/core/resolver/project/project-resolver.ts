import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Project } from '@core/models/project/project';
import { ProjectService } from '@core/services/project/project.service';
import { SharedStorageService } from 'ngx-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectResolver implements Resolve<Project> {
    constructor(
        private _projectService: ProjectService,
        private router: Router,
        private _sharedStorageService: SharedStorageService
    ) {}
    selectedProject: Project;
    projectGuid: string;
    emptyProject: Project = new Project();

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.projectGuid = route.paramMap.get('id');

        // if no ID is given on project Rout remove saved project
        if (this.projectGuid == undefined) {
            this._sharedStorageService.set('selectedProject', this.emptyProject);
            return null;
        }

        if (this.selectedProject == undefined || this.selectedProject.projectGuid != this.projectGuid) {
            // no project selected or another project guid so fetch one
            return this._projectService.getProject(this.projectGuid).pipe(
                map(project => {
                    if (project != undefined) {
                        this._sharedStorageService.set('selectedProject', project);
                        return project;
                    } else {
                        this._sharedStorageService.set('selectedProject', this.emptyProject);
                        return null;
                    }
                })
            );
        }
    }
}
