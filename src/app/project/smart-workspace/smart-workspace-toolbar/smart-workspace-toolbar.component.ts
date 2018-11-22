import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kosmos-smart-workspace-toolbar',
    template: '<ng-content></ng-content>',
    styleUrls: ['./smart-workspace-toolbar.component.scss']
})
export class SmartWorkspaceToolbarComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
