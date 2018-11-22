import { Component, ContentChildren, ElementRef, HostListener, OnDestroy, QueryList } from '@angular/core';
import { fadeInOutAnimation } from '@shared/animations/fade-in-out.animation';
import { MenuFooterComponent } from '@shared/menu-footer/menu-footer.component';
import { MenuItemComponent } from '@shared/menu-item/menu-item.component';
import { TakeUntilDestroy } from 'ngx-take-until-destroy';

const ESCAPE_KEY_CODE: number = 27;
const FADE_DELAY_DEFAULT: number = 80;

@Component({
    selector: 'kosmos-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [fadeInOutAnimation(100)]
})
@TakeUntilDestroy()
export class MenuComponent implements OnDestroy {
    isOpen: boolean = false;

    @ContentChildren(MenuItemComponent)
    private menuItems: QueryList<MenuItemComponent>;

    @ContentChildren(MenuFooterComponent)
    private footerItems: QueryList<MenuFooterComponent>;

    get isActive(): boolean {
        return this.hasMenuItems && this.isOpen;
    }

    get isActiveFooter(): boolean {
        return this.hasFooterItems && this.isOpen;
    }

    @HostListener('document:click', ['$event.target'])
    onClickOutside(target: HTMLElement) {
        if (this.isOpen && !this.element.nativeElement.contains(target)) {
            this.close();
        }
    }

    @HostListener('document:keydown', ['$event'])
    onEscapeKeydown(event: any) {
        if (this.isOpen && event.keyCode === ESCAPE_KEY_CODE) {
            this.close();
        }
    }

    constructor(public element: ElementRef) {}

    ngOnDestroy(): void {}

    get hasMenuItems(): boolean {
        return this.menuItems.length > 0;
    }

    get hasFooterItems(): boolean {
        return this.footerItems.length > 0;
    }

    get fadeDelay() {
        return FADE_DELAY_DEFAULT;
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.isOpen = true;
    }

    close(event?: any) {
        let foundMenuItem: any;

        if (!event) {
            this.isOpen = false;
            return;
        }

        if (event.propagationPath()) {
            foundMenuItem = event.propagationPath().find(function(element) {
                return element.nodeName == 'KOSMOS-MENU-ITEM';
            });
        }

        if (foundMenuItem) {
            if (!foundMenuItem.classList.contains('noCloseOnClick')) {
                this.isOpen = false;
            }
        } else {
            this.isOpen = false;
        }
    }
}
