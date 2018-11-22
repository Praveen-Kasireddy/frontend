import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WhenEmpty } from '@core/decorators/when-empty';
import { ProgressState } from '@core/models/project/progress-state';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector: 'kosmos-task-progress-state',
    template: '<ng-content></ng-content>',
    styleUrls: ['./task-progress-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@TakeUntilDestroy()
export class TaskProgressStateComponent implements OnChanges, OnDestroy {
    @Input()
    stateId: number;

    @Input()
    @WhenEmpty('normal')
    size: string;

    @HostBinding('class')
    class = `-size-${this.size}`;

    @HostBinding('style.background-color')
    get backgroundColor(): string {
        // TODO: refactor -> infinity loop
        // currently don't know a better way to update backgroundcolor
        if (!this._state) {
            return '#fff';
        }
        return this._state.color;
    }

    private _state: ProgressState;

    constructor(private _route: ActivatedRoute) {}

    ngOnChanges(): void {
        this._route.data.pipe(untilDestroyed(this)).subscribe((data: { states: ProgressState[] }) => {
            const defaultState = data.states.find(x => x.isDefault);
            let state: ProgressState;

            if (this.stateId) {
                state = data.states.find(x => x.id == this.stateId);
            }

            if (!state) {
                state = defaultState;
            }

            this._state = state;
        });
    }

    ngOnDestroy(): void {}
}
