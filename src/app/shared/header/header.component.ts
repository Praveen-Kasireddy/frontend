import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'kosmos-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    displayShowMoreButton = false;
    showMoreVisible = false;
    isEditing: boolean = false;

    private resizeTimeout = undefined;
    private hasShowMoreContent = false;
    private buttons = [];
    private initialRightSideContainerWidth = 0;
    private initialButtonClasses = [];
    private initialShowMoreItemButtonClasses = [];

    @Input()
    title: string;

    @Input()
    subtitle: string;
    @Output()
    subtitleChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    subtitleValidationCallback: Function;

    @Input()
    info: string;

    @Input()
    editable: boolean;

    @Input()
    validate: any;

    @ViewChild('headerRightSideContainerElementRef')
    headerRightSideContainerElementRef: ElementRef;
    @ViewChild('buttonsContainerElementRef')
    buttonsContainerElementRef: ElementRef;
    @ViewChild('headerElementRef')
    headerElementRef: ElementRef;
    @ViewChild('headerSubtitleRef')
    headerSubtitleRed: ElementRef;
    @ViewChild('menuItems')
    menuItems: ElementRef;

    private shouldCollapseButtons() {
        return (
            this.buttonsContainerElementRef.nativeElement.children.length > 0 &&
            this.headerRightSideContainerElementRef.nativeElement.offsetWidth >=
                this.headerElementRef.nativeElement.offsetWidth / 2
        );
    }

    private shouldExpandButtons() {
        return (
            this.buttons.length > 0 &&
            this.initialRightSideContainerWidth <= this.headerElementRef.nativeElement.offsetWidth / 2
        );
    }

    private extractButtons() {
        const buttons = this.buttonsContainerElementRef.nativeElement.children[0].getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            this.buttons.push(buttons[i]);
        }
    }

    private storeInitialButtonsClasses() {
        if (this.buttonsContainerElementRef.nativeElement.children.length > 0) {
            const buttons = this.buttonsContainerElementRef.nativeElement.children[0].getElementsByTagName('button');
            if (buttons) {
                this.initialButtonClasses = [];
                for (const c of buttons[0].classList) {
                    this.initialButtonClasses.push(c);
                }
            }
        }
        if (this.hasShowMoreContent && this.menuItems.nativeElement.children[0].getElementsByTagName('button')) {
            const buttons = this.menuItems.nativeElement.children[0].getElementsByTagName('button');
            if (buttons) {
                this.initialShowMoreItemButtonClasses = [];
                for (const c of buttons[0].classList) {
                    this.initialShowMoreItemButtonClasses.push(c);
                }
            }
        }
    }

    private styleAndMoveButtonsInShowMore() {
        for (let i = 0; i < this.buttons.length; i++) {
            const button = this.buttons[i];
            button.classList.remove(...this.initialButtonClasses);
            if (this.hasShowMoreContent) {
                button.classList.add(...this.initialShowMoreItemButtonClasses);
                this.menuItems.nativeElement.children[0].children[0].insertBefore(
                    button,
                    this.menuItems.nativeElement.children[0].children[0].children[0]
                );
            } else {
                button.classList.add('show-more-button-item-default');
                this.menuItems.nativeElement.insertBefore(button, undefined);
            }
        }
    }

    private styleAndMoveButtonsBack() {
        for (const button of this.buttons) {
            if (this.hasShowMoreContent) {
                this.menuItems.nativeElement.children[0].children[0].removeChild(button);
                button.classList.remove(...this.initialShowMoreItemButtonClasses);
            } else {
                this.menuItems.nativeElement.removeChild(button);
                button.classList.remove('show-more-button-item-default');
            }
            button.classList.add(...this.initialButtonClasses);
            this.buttonsContainerElementRef.nativeElement.children[0].appendChild(button);
        }
    }

    private emptyButtonsArea() {
        this.buttonsContainerElementRef.nativeElement.children[0].innerHTML = '';
    }

    private handleShowMore() {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(
            (() => {
                if (this.shouldCollapseButtons()) {
                    this.extractButtons();
                    this.styleAndMoveButtonsInShowMore();
                    this.emptyButtonsArea();
                    this.displayShowMoreButton = true;
                } else {
                    if (this.shouldExpandButtons()) {
                        this.styleAndMoveButtonsBack();
                        this.buttons = [];
                        this.displayShowMoreButton = this.menuItems.nativeElement.children.length > 0;
                        if (!this.hasShowMoreContent) {
                            this.showMoreVisible = false;
                        }
                    }
                }
            }).bind(this),
            100
        );
    }

    @HostListener('window:resize')
    onWindowResize() {
        this.handleShowMore();
    }

    onClick(event: any): void {
        if (this.editable) {
            this.isEditing = true;
        }
    }

    onSubtitleValidated(validationResult: any): void {
        if (validationResult.isValid) {
            this.subtitleChange.emit(this.subtitle);
            this.isEditing = false;
        }
    }

    ngOnInit() {
        this.hasShowMoreContent = this.menuItems.nativeElement.children.length > 0;
        this.displayShowMoreButton = this.hasShowMoreContent;
        this.initialRightSideContainerWidth = this.headerRightSideContainerElementRef.nativeElement.offsetWidth;
        this.storeInitialButtonsClasses();
        this.handleShowMore();
    }
}
