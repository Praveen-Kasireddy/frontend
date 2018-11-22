import {
    Component,
    Input,
    OnInit,
    OnChanges,
    ChangeDetectionStrategy,
    SimpleChanges
} from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'kosmos-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent implements OnInit, OnChanges {
    @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
    @Input() label: string;
    @Input() subtitle: string;
    @Input() count: number;

    public heading: string | SafeHtml;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.updateHeading(this.label);
    }

    ngOnChanges(changes: SimpleChanges) {
        const label = changes.label;
        if (label) {
            this.updateHeading(label.currentValue);
        }
    }

    private updateHeading(label) {
        const { level, count, sanitizer } = this;
        const countHtml = count > 0 ? `<em>${count}</em>` : '';

        if (label) {
            this.heading = sanitizer.bypassSecurityTrustHtml(`
                <h${level} data-rendering-placeholder="[[#SECTION_NUMBER]]. [[#SECTION_NAME]]">
                    ${label}${countHtml}
				</h${level}>
			`);
        }
    }
}
