import { Component } from '@angular/core';
import { RIGHTS } from '@core/app.const';
import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';

const ICON_SIZE: number = 50;

@Component({
    selector: 'kosmos-new-stakeholder',
    templateUrl: './stakeholder-new.component.html',
    styleUrls: ['./stakeholder-new.component.scss']
})
export class NewStakeholderComponent {
    iconAdd = SvgIconTypes.ADD_CIRCLE;
    RIGHTS = RIGHTS;
    get iconSize() {
        return ICON_SIZE;
    }
}
