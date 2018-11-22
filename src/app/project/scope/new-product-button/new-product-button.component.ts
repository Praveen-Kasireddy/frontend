import {
    Component,
    Input,
    Output,
    EventEmitter,
    HostListener,
    ElementRef,
    AfterViewInit,
    ChangeDetectorRef
} from '@angular/core';
import { ProductButtonResizeService } from '@core/services/project/product-button-resize.service';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-product-button',
    templateUrl: 'new-product-button.component.html',
    styleUrls: ['new-product-button.component.scss']
})
export class NewProductButtonComponent implements AfterViewInit {
    @Input()
    @Output()
    clickHandler = new EventEmitter();

    styleWidth: string;

    constructor(
        private _elementRef: ElementRef,
        private _productButtonResizeService: ProductButtonResizeService,
        private cdRef: ChangeDetectorRef
    ) {}

    @HostListener('click')
    handleClick($event: MouseEvent): void {
        this.clickHandler.emit($event);
    }

    ngAfterViewInit(): void {
        this.styleWidth = this._productButtonResizeService.assembleWidthStyle(
            this._productButtonResizeService.announceWidth(this._elementRef, 'new') - 10
        );
        this._productButtonResizeService.maxWidthChanged.subscribe(
            width => (this.styleWidth = this._productButtonResizeService.assembleWidthStyle(width - 10))
        );
        this.cdRef.detectChanges();
    }
}
