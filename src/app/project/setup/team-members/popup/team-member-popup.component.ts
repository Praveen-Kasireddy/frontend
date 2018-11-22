import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { NamedUser } from '@core/models';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';

@Component({
    selector: 'kosmos-team-member-popup',
    templateUrl: './team-member-popup.component.html',
    styleUrls: ['./team-member-popup.component.scss']
})
export class TeamMemberPopupComponent implements OnInit, OnChanges {
    @ViewChild(DxDataGridComponent)
    dataGrid: DxDataGridComponent;
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;
    @Input()
    visible: boolean = false;
    @Input()
    assignedUsers: NamedUser[];
    @Input()
    availableUsers: NamedUser[];
    @Output()
    closeEvent = new EventEmitter<NamedUser[]>();

    selectedGpid: string[];

    constructor() {}

    ngOnInit() {}

    ngOnChanges(): void {
        this.selectedGpid = this.assignedUsers.map(a => a.gpid);
    }

    onSubmit = (): void => {
        const users = [];

        this.selectedGpid.forEach(gpid => {
            let user = this.assignedUsers.find(u => u.gpid == gpid);
            if (user == undefined) {
                user = this.availableUsers.find(u => u.gpid == gpid);
            }

            users.push(user);
        });

        this.closeEvent.emit(users);
    };

    popupVisibleChanged() {
        if (!this.popup.visible) {
            this.dataGrid.instance.clearFilter();
            this.closeEvent.emit();
        }
    }
}
