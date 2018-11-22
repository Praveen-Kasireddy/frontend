import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RIGHTS } from '@core/app.const';
import { Milestone } from '@core/models/project/milestone';
import { DxValidationGroupComponent } from 'devextreme-angular';

@Component({
    selector: 'kosmos-project-milestones',
    templateUrl: './project-milestones.component.html',
    styleUrls: ['./project-milestones.component.scss']
})
export class ProjectMilestonesComponent implements OnInit {
    @Input('items')
    milestones: Milestone[] = [];
    @Output()
    changed = new EventEmitter();
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;

    newMilestone: Milestone = new Milestone();
    RIGHTS = RIGHTS;

    constructor() {}

    ngOnInit() {}

    onSubmit(): void {
        const result = this.validationGroup.instance.validate();
        if (result.isValid) {
            this.milestones.push(this.newMilestone);

            this.newMilestone = new Milestone();

            this.validationGroup.instance.reset();
            this.changed.emit();
        }
    }

    remove(index: number): void {
        if (index > -1) {
            this.milestones.splice(index, 1);
            this.changed.emit();
        }
    }

    submitIfNewNotEmpty(): void {
        if (this.newMilestone.date || this.newMilestone.description) {
            this.onSubmit();
        }
    }
}
