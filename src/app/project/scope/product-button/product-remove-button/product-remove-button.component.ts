import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'kosmos-product-remove-button',
    templateUrl: './product-remove-button.component.html',
    styleUrls: ['./product-remove-button.component.scss']
})
export class ProductRemoveButtonComponent {
    @Input() isSelected: boolean = false;
    @Input()
    @Output()
    removeEvent = new EventEmitter();

    @HostListener('click')
    handleClick(event: MouseEvent): void {
        this.removeEvent.emit();
    }
}
