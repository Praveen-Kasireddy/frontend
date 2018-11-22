import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@core/models/project/project';
import { User } from '@core/models/user';
import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { RIGHTS } from '@core/app.const';

@Component({
    selector: 'kosmos-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
    currentUser: User;
    selectedProject: Project;
    projectGuid: string;
    RIGHTS = RIGHTS;
    SvgIconTypes = SvgIconTypes;

    constructor(
        private route: ActivatedRoute,
        private localStorageService: LocalStorageService,
        private sharedStorageService: SharedStorageService
    ) {
        this.currentUser = this.localStorageService.get('currentUser');
    }

    ngOnInit() {
        this.projectGuid = this.route.snapshot.paramMap.get('id');

        this.sharedStorageService.observe('selectedProject').subscribe(event => {
            if (event.newValue.projectGuid != undefined) {
                this.selectedProject = event.newValue;
            } else {
                this.selectedProject = undefined;
            }

            if (this.selectedProject) {
                this.projectGuid = this.selectedProject.projectGuid;
            } else {
                this.projectGuid = undefined;
            }
        });
    }
}
