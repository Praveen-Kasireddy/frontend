import { Component } from '@angular/core';
import { fadeInOutAnimation } from '@shared/animations/fade-in-out.animation';

@Component({
    selector: 'kosmos-menu-footer',
    templateUrl: './menu-footer.component.html',
    styleUrls: ['./menu-footer.component.scss'],
    animations: [fadeInOutAnimation(100)]
})
export class MenuFooterComponent {}
