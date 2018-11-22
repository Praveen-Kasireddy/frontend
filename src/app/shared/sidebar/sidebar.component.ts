import { Component, Input } from '@angular/core';
import { WhenEmpty } from '@core/decorators/when-empty';

@Component({
    selector: 'kosmos-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isContentMiddleCollapsed: boolean = false;

    @Input()
    @WhenEmpty(true)
    showHelp: boolean;

    @Input()
    @WhenEmpty(true)
    showHelpToggle: boolean;

    @Input()
    @WhenEmpty(false)
    isHeaderHidden: boolean;

    @Input()
    @WhenEmpty(undefined)
    additionalSidebarStyle: any;

    @Input()
    @WhenEmpty(false)
    isSmartWorkspace: boolean;

    toggleHelp() {
        this.showHelp = !this.showHelp;
    }
}
