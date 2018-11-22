import { Component } from '@angular/core';
import { RIGHTS } from '@core/app.const';

@Component({
    selector: 'kosmos-new-team-member',
    templateUrl: './team-member-new.component.html',
    styleUrls: ['./team-member-new.component.scss']
})
export class NewTeamMemberComponent {
    RIGHTS = RIGHTS;
}
