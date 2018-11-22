import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'kosmos-setup-delete-button',
    templateUrl: './setup-delete-button.component.html',
    styleUrls: ['./setup-delete-button.component.scss']
})
export class SetupDeleteButtonComponent {
    @Input()
    @Output()
    clickHandler = new EventEmitter();

    @HostListener('click')
    handleClick($event: MouseEvent): void {
        this.clickHandler.emit($event);
    }
}
