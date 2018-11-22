import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@core/models';
import { DataExplorerService } from '@core/services';
import { ValidatedPopupComponent } from '@shared/validated-popup/validated-popup.component';
import { SharedStorageService } from 'ngx-store';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-analysis-popup',
    templateUrl: 'new-analysis-popup.component.html',
    styleUrls: ['new-analysis-popup.component.scss']
})
export class NewAnalysisPopupComponent extends ValidatedPopupComponent implements OnInit {
    selectedProject: Project;
    name: string;
    showExistsMessage: boolean;

    constructor(
        private _sharedStorageService: SharedStorageService,
        private _router: Router,
        private _dataExplorerService: DataExplorerService
    ) {
        super();
    }

    cleanup(): void {
        this.name = undefined;
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.selectedProject = this._sharedStorageService.get('selectedProject');
    }

    resetSpecificValidation(): void {
        this.showExistsMessage = false;
    }

    submitForm(): void {
        this._sharedStorageService.set('newAnalysisName', this.name);
        this._router.navigate(['/projects', this.selectedProject.projectGuid, 'analysis']);
    }

    specificValidation(next?: () => void) {
        this._dataExplorerService.existsAnalysis(this.selectedProject.projectGuid, this.name).subscribe(exists => {
            this.showExistsMessage = exists;
            if (!exists && next) {
                next();
            }
        });
    }
}
