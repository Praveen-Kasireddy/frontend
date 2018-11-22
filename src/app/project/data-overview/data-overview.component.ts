import { Component, OnInit } from '@angular/core';
import { Project } from '@core/models';
import { IngestionDataService } from '@core/services/project/ingestion-data-service';
import { SharedStorageService } from 'ngx-store';

@Component({
    selector: 'kosmos-data-overview',
    templateUrl: './data-overview.component.html',
    styleUrls: ['./data-overview.component.scss']
})
export class DataOverviewComponent implements OnInit {
    selectedProject: Project;
    data: any;

    constructor(
        private _ingestionDataService: IngestionDataService,
        private _sharedStorageService: SharedStorageService
    ) {}

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');

        if (this.selectedProject) {
            this._ingestionDataService.getDataOverview(this.selectedProject.projectGuid).subscribe(result => {
                this.data = result;
            });
        }
    }
}
