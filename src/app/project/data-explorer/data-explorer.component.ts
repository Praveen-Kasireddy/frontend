import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '@core/models';
import { Analysis } from '@core/models/project/data-explorer/analysis';
import { DataExplorerService } from '@core/services/project/data-explorer.service';
import { SharedStorageService } from 'ngx-store';
import { NewAnalysisPopupComponent } from './new-analysis-popup/new-analysis-popup.component';

@Component({
    moduleId: module.id,
    templateUrl: 'data-explorer.component.html',
    styleUrls: ['data-explorer.component.scss']
})
export class DataExplorerComponent implements OnInit {
    @ViewChild(NewAnalysisPopupComponent)
    newPopup: NewAnalysisPopupComponent;
    selectedProject: Project;
    analyses: Analysis[];
    id: number;
    html: string;

    constructor(
        private route: ActivatedRoute,
        private _dataExplorerService: DataExplorerService,
        private _sharedStorageService: SharedStorageService,
        private _router: Router
    ) {}

    openPopup(): void {
        this.newPopup.show();

        if (this.newPopup.validationGroup) {
            this.newPopup.validationGroup.instance.reset();
        }
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this._dataExplorerService
            .list(this.selectedProject.projectGuid)
            .subscribe(analyses => (this.analyses = analyses));
        this.newPopup.closeEvent.subscribe(() => this.newPopup.hide());
    }

    showHtml() {
        this._dataExplorerService
            .html(this.selectedProject.projectGuid, this.id)
            .subscribe(html => (document.getElementsByClassName('htmlDiv')[0].innerHTML = html));
    }
}
