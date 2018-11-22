import { NamedUser } from '@core/models/configuration/named-user';

export class TeamMemberWithCounter {
    teamMember: NamedUser;
    counter: number;
    isSelected: boolean;

    constructor(teamMember: NamedUser) {
        this.teamMember = teamMember;
        this.counter = 0;
        this.isSelected = false;
    }
}
