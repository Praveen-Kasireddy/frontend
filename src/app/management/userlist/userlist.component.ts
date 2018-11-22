import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcessStateEnum } from '@core/enum/process-state-enum';
import { StaffMember } from '@core/models/staffMember';
import { User } from '@core/models/user';
import { MasterDataImportService } from '@core/services';
import { UserService } from '@core/services/user/user.service';
import { MessageBoxComponent } from '@shared/message-box/message-box.component';
import { DxDataGridComponent } from 'devextreme-angular';
import { LocalStorageService } from 'ngx-store';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
    selector: 'kosmos-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
    @ViewChild(EditUserComponent)
    editUserPopup: EditUserComponent;
    @ViewChild(AddUserComponent)
    addUserPopup: AddUserComponent;
    @ViewChild(DxDataGridComponent)
    dataGrid: DxDataGridComponent;
    users: User[];
    currentUser: User;
    showHeaderFilter: boolean;
    isEditing: boolean = false;
    selectBoxData: StaffMember[];
    dataGridInstance: any;
    requestResult: boolean;
    subscription: any;
    showExistsMessage: boolean = false;
    showSuccessMessage: boolean = false;
    oldUser: User = null;
    editSelectedUser: User; // choosen user to edit

    @ViewChild(MessageBoxComponent)
    private _messageBox: MessageBoxComponent;
    private _intervalId: NodeJS.Timer;
    isImporting: boolean;

    constructor(
        private _userService: UserService,
        private localStorageService: LocalStorageService,
        private _masterDataImportService: MasterDataImportService
    ) {
        this.currentUser = this.localStorageService.get('currentUser');
    }

    ngOnInit() {
        this._userService.getUsers().subscribe(
            users => {
                this.users = users;
                this.showHeaderFilter = true;
            },
            error => {}
        );
        this.addUserPopup.closeEvent.subscribe(() => this.addUserPopup.hide());
        this.editUserPopup.closeEvent.subscribe(() => this.editUserPopup.hide());
        this.editSelectedUser = new User();
    }

    /**
     * open a popup to add a user
     */
    addUser() {
        this.addUserPopup.show();
    }

    /**
     * open popup to edit a user
     * @param event
     */
    editUser(event: any) {
        this.editUserPopup.show();
        this.editSelectedUser = Object.create(event.data);
    }

    /**
     * Add a user on done-click
     * @param user
     */
    addDoneHandler(user: User) {
        this._userService.postUser(user).subscribe(
            () => {
                this._userService.getUsers().subscribe(
                    users => {
                        this.users = users;
                        this.showHeaderFilter = true;
                    },
                    error => {}
                );
                this.dataGrid.instance.refresh();
                this.showSuccessMessage = true;
            },
            () => {
                this.showExistsMessage = true;
            }
        );
    }

    /**
     * Edit a user on done-click
     * @param user
     */
    editDoneHandler(user: User) {
        this.editSelectedUser = user;
        this._userService.editUser(this.editSelectedUser).subscribe(
            () => {
                this.reloadUsers();
            },
            () => {
                this.showExistsMessage = true;
            }
        );
    }

    importUsers(files: FileList) {
        if (files.length > 0) {
            this.subscribeAndHandleResult(this._masterDataImportService.postUsers(files.item(0)));
        }
    }

    processResult(result: boolean) {
        if (!result) {
            this.showExistsMessage = true;
            if (this.oldUser != null) {
                const userindex = this.users.findIndex(x => x.gpid == this.oldUser.gpid);
                this.users[userindex] = this.oldUser;
                this.oldUser = null;
            }
        }
    }

    private checkImportResult(): void {
        this._masterDataImportService.checkResult().subscribe(result => {
            if (result == undefined || result == null || result.state == ProcessStateEnum.STARTED) {
                return;
            }

            this.isImporting = false;
            if (this._intervalId) {
                clearInterval(this._intervalId);
            }

            if (result.state == ProcessStateEnum.FINISHED) {
                this.showMessageBox('Success', 'The data was imported successfully.');
            } else if (result.state == ProcessStateEnum.FINISHED_WITH_ERRRORS) {
                this.showMessageBox('Error', 'The import file violates the following conventions: ' + result.message);
            }
            this.resetUserFile();
            this.reloadUsers();
        });
    }

    reloadUsers() {
        this._userService.getUsers().subscribe(
            users => {
                this.users = users;
                this.showHeaderFilter = true;
                this.dataGrid.instance.refresh();
            },
            error => {}
        );
    }

    resetUserFile() {
        (document.getElementById('userFile') as HTMLInputElement).value = '';
    }

    showMessageBox(title: string, message: string) {
        this._messageBox.title = title;
        this._messageBox.message = message;
        this._messageBox.show();
    }

    private subscribeAndHandleResult(observable: Observable<Object>): void {
        observable.subscribe(
            data => {
                this.isImporting = true;
                this._intervalId = setInterval(() => {
                    this.checkImportResult();
                }, 10000);
            },
            error => {
                this.showMessageBox('Error', 'The import function is currently not available.');
                this.resetUserFile();
            }
        );
    }
}
