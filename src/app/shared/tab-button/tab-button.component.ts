import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'kosmos-tab-button',
    templateUrl: './tab-button.component.html',
    styleUrls: ['./tab-button.component.scss']
})
export class TabButtonComponent implements OnInit {
    @Input() caption: string;
    @Input() icon: string;
    @Input() isLargeButton: boolean;
    @Input() isSelected: boolean;
    @Input() isDisabled: boolean;

    constructor() {}

    ngOnInit() {}
}
