import { Component, ContentChildren, ElementRef, HostListener, OnDestroy, QueryList } from '@angular/core';
import { fadeInOutAnimation } from '@shared/animations/fade-in-out.animation';
import { MenuItemComponent } from '@shared/menu-item/menu-item.component';
import { TakeUntilDestroy } from 'ngx-take-until-destroy';

const ESCAPE_KEY_CODE: number = 27;
const FADE_DELAY_DEFAULT: number = 80;

@Component({
    selector: 'kosmos-segmented-button',
    templateUrl: './segmented-button.component.html',
    styleUrls: ['./segmented-button.component.scss'],
    animations: [fadeInOutAnimation(100)]
})
@TakeUntilDestroy()
export class SegmentedButtonComponent implements OnDestroy {
    isOpen: boolean = false;

    @ContentChildren(MenuItemComponent)
    private menuItems: QueryList<MenuItemComponent>;

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

    get isActive(): boolean {
        return this.hasMenuItems && this.isOpen;
    }

    get hasMenuItems(): boolean {
        return this.menuItems.length > 1;
    }

    get fadeDelay() {
        return FADE_DELAY_DEFAULT;
    }

    constructor(public element: ElementRef) {}

    ngOnDestroy(): void {}

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

    close() {
        this.isOpen = false;
    }
}
