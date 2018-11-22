import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScopeItem } from '@core/models/project/scope-item';

@Component({
    moduleId: module.id,
    selector: 'kosmos-up-down-button',
    templateUrl: 'up-down-button.component.html',
    styleUrls: ['up-down-button.component.scss']
})
export class UpDownButtonComponent implements OnInit {
    @Input()
    isBottomMost: boolean;
    @Input()
    isTopMost: boolean;
    @Output()
    moveUpEvent = new EventEmitter<ScopeItem>();
    @Output()
    moveDownEvent = new EventEmitter<ScopeItem>();

    constructor() {}

    ngOnInit() {}

    onMoveUpClick() {
        this.moveUpEvent.emit();
    }

    onMoveDownClick() {
        this.moveDownEvent.emit();
    }
}
