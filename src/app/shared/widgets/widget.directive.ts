import { Directive, HostListener, HostBinding } from '@angular/core';
import { WidgetService } from '@core/services/widget/widget.service';

@Directive({
    selector: '[kosmosWidget]'
})
export class WidgetDirective {

    constructor(private _widgetService: WidgetService) { }

    @HostBinding('draggable')
    get draggable() {
        return true;
    }

    @HostListener('dragStart', ['$event'])
    onDragStart(event: any) {
        // TODO implement dragging
        // E.g. see: https://www.radzen.com/blog/angular-drag-and-drop/
        // this._widgetService.startDrag('');
        // event.dataTransfer.setData('Text', JSON.stringify(data));
    }

    @HostListener('dragEnd', ['$event'])
    onDragEnd(event: any) {

    }
}
