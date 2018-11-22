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
    selector: 'kosmos-new-project-card',
    templateUrl: './card-new.component.html',
    styleUrls: ['./card-new.component.scss']
})
export class NewProjectCardComponent {
    iconAdd = SvgIconTypes.ADD_CIRCLE;

    @Input()
    @WhenEmpty(true)
    @HostBinding('class.-has-projects')
    hasProjects: boolean;

    @Output() clickHandler = new EventEmitter();

    @HostListener('click')
    handleClick($event: MouseEvent): void {
        this.clickHandler.emit($event);
    }

    get iconSize() {
        return this.hasProjects ? ICON_SIZE_DEFAULT : ICON_SIZE_LARGE;
    }
}
