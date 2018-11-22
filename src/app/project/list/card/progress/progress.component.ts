import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'kosmos-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
    @Input() value: number;
    @Input() max: number;

    @HostBinding('class.-is-completed')
    get isCompleted() {
        const completed = Number(this.value);
        const max = Number(this.max);

        return max > 0 && completed >= max;
    }

    @HostBinding('style.padding-right')
    get size() {
        const max = Number(this.max);
        const value = Number(this.value);

        if (isNaN(max) && isNaN(value)) {
            return '0%';
        }

        if (max == 0) {
            return '100%';
        }

        return this.percentString(value, max);
    }

    private percentString(value, max): string {
        let percent = value / max * 100;
        if (percent > 100) {
            percent = 100;
        }

        return `${100 - percent}%`;
    }
}
