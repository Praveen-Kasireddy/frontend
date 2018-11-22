import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Stakeholder } from '@core/models/project/stakeholder';
import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';

@Component({
    selector: 'kosmos-stakeholder-card',
    templateUrl: './stakeholder-card.component.html',
    styleUrls: ['./stakeholder-card.component.scss']
})
export class StakeholderCardComponent implements OnInit {
    SvgIcons = SvgIconTypes;
    iconSize = 32;

    @Input()
    stakeholder: Stakeholder = new Stakeholder();
    @Output()
    deleteEvent = new EventEmitter<Stakeholder>();

    @Input()
    @Output()
    clickHandler = new EventEmitter();

    @HostListener('click')
    handleClick($event: MouseEvent): void {
        this.clickHandler.emit(this.stakeholder);
    }

    constructor() {}

    ngOnInit() {}

    delete() {
        this.deleteEvent.emit(this.stakeholder);
    }
}
