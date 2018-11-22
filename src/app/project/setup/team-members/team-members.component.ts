import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RIGHTS } from '@core/app.const';
import { NamedUser } from '@core/models/configuration/named-user';
import { fadeInAnimation } from '@shared/animations/fade-in.animation';

@Component({
    selector: 'kosmos-team-members',
    templateUrl: './team-members.component.html',
    styleUrls: ['./team-members.component.scss'],
    animations: [fadeInAnimation(200)]
})
export class TeamMembersComponent {
    @Input('items')
    teamMembers: NamedUser[];
    @Input()
    availableUsers: NamedUser[];
    @Output()
    changed = new EventEmitter<NamedUser[]>();
    RIGHTS = RIGHTS;
    isPopupVisible: boolean = false;

    closePopup(assignedUser: NamedUser[]) {
        this.isPopupVisible = false;
        if (assignedUser) {
            this.changed.emit(assignedUser);
        }
    }

    delete(teamMember: NamedUser) {
        const index = this.teamMembers.indexOf(teamMember, 0);
        if (index > -1) {
            this.teamMembers.splice(index, 1);
        }
    }

    openPopup() {
        this.isPopupVisible = true;
    }
}
