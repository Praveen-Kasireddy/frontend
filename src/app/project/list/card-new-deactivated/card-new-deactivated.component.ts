import {
    Component,
    Output,
    EventEmitter,
    HostListener,
    Input,
    HostBinding
} from '@angular/core';
import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';
import { WhenEmpty } from '@core/decorators/when-empty/when-empty.decorator';

const ICON_SIZE_LARGE: number = 66;
const ICON_SIZE_DEFAULT: number = 95;

@Component({
    selector: 'kosmos-new-deactivated-project-card',
    templateUrl: './card-new-deactivated.component.html',
    styleUrls: ['./card-new-deactivated.component.scss']
})
export class NewDeactivatedProjectCardComponent {
    iconAdd = SvgIconTypes.ADD_CIRCLE;

    @Input()
    @WhenEmpty(true)
    @HostBinding('class.-has-projects')
    hasProjects: boolean;

    get iconSize() {
        return this.hasProjects ? ICON_SIZE_DEFAULT : ICON_SIZE_LARGE;
    }
}
