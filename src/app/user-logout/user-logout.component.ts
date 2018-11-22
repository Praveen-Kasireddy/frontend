import { Component, OnInit } from '@angular/core';

@Component({
    template: ''
})
export class UserLogoutComponent implements OnInit {
    ngOnInit(): void {
        const protocol = window.location.protocol;
        const host = window.location.host;
        const newUrl = protocol + '//' + host + '/logout';

        window.location.assign(newUrl);
    }
}
