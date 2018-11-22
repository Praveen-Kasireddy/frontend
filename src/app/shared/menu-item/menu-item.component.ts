import { Component } from '@angular/core';
import { fadeInOutAnimation } from '@shared/animations/fade-in-out.animation';

@Component({
    selector: 'kosmos-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    animations: [fadeInOutAnimation(100)]
})
export class MenuItemComponent {}
