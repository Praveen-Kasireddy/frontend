import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RIGHTS } from '@core/app.const';
import { Objective } from '@core/models/project/objective';
import { DxValidationGroupComponent } from 'devextreme-angular';

@Component({
    selector: 'kosmos-project-objectives',
    templateUrl: './project-objectives.component.html',
    styleUrls: ['./project-objectives.component.scss']
})
export class ProjectObjectivesComponent implements OnInit {
    @Input('items')
    objectives: Objective[] = [];
    @Output()
    changed = new EventEmitter();
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;

    newValue: Objective = new Objective();
    RIGHTS = RIGHTS;

    constructor() {
        this.newValue.description = '';
    }

    ngOnInit() {}

    onSubmit(): void {
        const result = this.validationGroup.instance.validate();
        if (result.isValid) {
            this.objectives.push(this.newValue);

            this.newValue = new Objective();
            this.newValue.description = '';

            this.validationGroup.instance.reset();
            this.changed.emit();
        }
    }

    remove(index: number): void {
        if (index > -1) {
            this.objectives.splice(index, 1);
            this.changed.emit();
        }
    }

    submitIfNewNotEmpty(): void {
        if (this.newValue.description.length > 0) {
            this.onSubmit();
        }
    }
}
