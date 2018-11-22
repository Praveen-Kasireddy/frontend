import { Component, OnInit } from '@angular/core';
import { IProject } from '../project.interface';
import { SharedStorageService } from 'ngx-store';

@Component({
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    project: IProject;
    errorMessage: string;

    constructor(private _sharedStorageService: SharedStorageService) {}

    ngOnInit(): void {
        this.project = this._sharedStorageService.get('selectedProject');
    }
}
