import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@core/models/project/product';

@Component({
    selector: 'kosmos-product-button',
    templateUrl: './product-button.component.html',
    styleUrls: ['./product-button.component.scss']
})
export class ProductButtonComponent {
    @Input()
    product: Product;
    @Input()
    wasSelected: boolean;
    @Output()
    remove = new EventEmitter();
    @Output()
    selected = new EventEmitter();
    @Input()
    canBeDeleted: boolean;

    onClicked(event: MouseEvent) {
        this.selected.emit();
    }

    onRemove() {
        this.remove.emit();
    }
}
