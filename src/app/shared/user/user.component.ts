import { Component, Input, OnInit } from '@angular/core';
import { AvatarSize } from '../avatar/avatar.enum';
import { User } from '@core/models/user';

@Component({
    selector: 'kosmos-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public fullName: string;
    /**
     *  Bindings
     */
    @Input() user: User;
    @Input() showFullname: boolean;
    @Input() size: number = AvatarSize.MEDIUM;

    ngOnInit(): void {
        if (!!this.user) {
            this.fullName = this.user.firstName + ' ' + this.user.lastName;
        }
    }
}
