import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NamedUser } from '@core/models/configuration/named-user';
import { Role } from '@core/models/role';
import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';
import { RIGHTS } from '@core/app.const';

@Component({
    selector: 'kosmos-team-member-card',
    templateUrl: './team-member-card.component.html',
    styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent implements OnChanges {
    SvgIcons = SvgIconTypes;
    roles: Role[];
    RIGHTS = RIGHTS;

    @Input()
    assignedUser: NamedUser = new NamedUser();
    @Output()
    deleteEvent = new EventEmitter<NamedUser>();

    constructor(private _route: ActivatedRoute) {}

    ngOnChanges(): void {
        this._route.data.subscribe((data: { projectRoles: Role[] }) => {
            this.roles = data.projectRoles;
        });
    }

    delete() {
        this.deleteEvent.emit(this.assignedUser);
    }
}
