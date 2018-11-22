import { Component, HostBinding, Input } from '@angular/core';
import { BadgeStatusType } from './status-badge.status-types.enum';

@Component({
    selector: 'kosmos-status-badge',
    templateUrl: 'status-badge.component.html',
    styleUrls: ['status-badge.component.scss']
})
export class StatusBadgeComponent {
    @Input()
    status: BadgeStatusType;

    @HostBinding('class')
    class = `-${this.status}`;
}
