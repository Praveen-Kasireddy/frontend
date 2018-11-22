import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@core/models/user';
import { ValidatedPopupComponent } from '../../../shared';

@Component({
    selector: 'kosmos-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent extends ValidatedPopupComponent implements OnInit {
    user: User;

    @Input()
    set selectedUser(value: User) {
        this.user = value;
    }

    @Output()
    done: EventEmitter<User> = new EventEmitter();

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

    submitForm(): void {
        this.done.emit(this.user);
    }
}
