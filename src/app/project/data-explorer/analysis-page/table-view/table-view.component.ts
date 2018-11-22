import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Analysis, Project } from '@core/models';
import { DataExplorerService } from '@core/services';
import { AnalysisMapper } from '@shared/data-explorer/analysis-mapper';
import { SharedStorageService } from 'ngx-store';

@Component({
    selector: 'kosmos-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TableViewComponent implements OnDestroy, OnInit {
    @Input()
    analysis: Analysis;
    html: SafeHtml = '';
    selectedProject: Project;
    showData: boolean = false;
    subscriptionToUnsubscribe: any;

    constructor(
        private _dataExplorerService: DataExplorerService,
        private _sharedStorageService: SharedStorageService
    ) {}

    ngOnDestroy() {
        this.subscriptionToUnsubscribe.unsubscribe();
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        if (this.analysis) {
            this.reloadHtml(this.analysis.name, this.analysis);
        }
        this.subscriptionToUnsubscribe = this._dataExplorerService.currentAnalysisChanged.subscribe(analysis => {
            this.reloadHtml(analysis.name, this._dataExplorerService.currentAnalysis);
        });
    }

    reloadHtml(name: string, analysis: Analysis) {
        if (analysis.dimensions[0].characteristics.length > 0 || analysis.dimensions[1].characteristics.length > 0) {
            this.showData = true;
            this._dataExplorerService
                .htmlForModel(this.selectedProject.projectGuid, new AnalysisMapper().mapToDto(name, analysis))
                .subscribe(html => (this.html = html));
        } else {
            this.showData = false;
        }
    }
}
