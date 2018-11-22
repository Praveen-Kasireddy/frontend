import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressState } from '@core/models/project/progress-state';

@Component({
    selector: 'kosmos-workflow-state',
    template: `<span class="workflow-state" [ngStyle]="{'background-color': backgroundColor}" *ngIf="state">{{ state?.name }}</span>`,
    styleUrls: ['workflow-status.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowStatusComponent implements OnChanges {
    @Input()
    stateId: number;

    get backgroundColor(): string {
        if (!this.state) {
            return '#fff';
        }
        return this.state.color;
    }

    state: ProgressState;

    constructor(private _route: ActivatedRoute) {}

    ngOnChanges(): void {
        this._route.data.subscribe((data: { states: ProgressState[] }) => {
            const defaultState = data.states.find(x => x.isDefault);
            let state: ProgressState;

            if (this.stateId) {
                state = data.states.find(x => x.id == this.stateId);
            }

            if (!state) {
                state = defaultState;
            }

            this.state = state;
        });
    }
}
