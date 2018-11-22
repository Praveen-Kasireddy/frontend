import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@core/models';
import { Analysis } from '@core/models/project/data-explorer/analysis';
import { SharedStorageService } from 'ngx-store';

@Component({
    moduleId: module.id,
    selector: 'kosmos-analysis-card',
    templateUrl: 'analysis-card.component.html',
    styleUrls: ['analysis-card.component.scss']
})
export class AnalysisCardComponent implements OnInit {
    @Input() analysis: Analysis;
    selectedProject: Project;

    @HostListener('click')
    handleClick(): void {
        this._router.navigate(['/projects', this.selectedProject.projectGuid, 'analysis', this.analysis.id]);
    }

    constructor(private _router: Router, private _sharedStorageService: SharedStorageService) {}

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
    }
}
