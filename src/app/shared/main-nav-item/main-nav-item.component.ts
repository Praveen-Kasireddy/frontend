import { Component, Input } from '@angular/core';

import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';
import { WhenEmpty } from '@core/decorators/when-empty/when-empty.decorator';

@Component({
    selector: 'kosmos-main-nav-item',
    templateUrl: './main-nav-item.component.html',
    styleUrls: ['./main-nav-item.component.scss']
})
export class MainNavItemComponent {
    @Input() icon: SvgIconTypes;
    @Input() url: string;
    @Input()
    @WhenEmpty(true)
    routerLinkActiveExact: boolean;
    @Input() isActive: boolean;
}
