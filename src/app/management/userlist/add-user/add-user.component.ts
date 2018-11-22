import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '@core/models/user';
import { ValidatedPopupComponent } from '../../../shared';

@Component({
    selector: 'kosmos-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent extends ValidatedPopupComponent implements OnInit {
    user: User;

    @Output()
    done: EventEmitter<User> = new EventEmitter();

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        this.setNewUser();
    }

    submitForm(): void {
        this.done.emit(this.user);
    }

    onHidden() {
        this.setNewUser();
    }

    private setNewUser() {
        this.user = new User();
        this.user.isActive = true;
        this.user.isAdmin = false;
    }
}
