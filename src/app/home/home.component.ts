import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTING_ERROR } from '@core/app.const';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'kosmos-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _router: Router) {}

    ngOnInit() {
        const error = this._route.snapshot.queryParamMap.get('error');

        if (error == ROUTING_ERROR.ACCESS_FORBIDDEN) {
            notify({
                message: 'Access forbidden',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });

            this._router.navigate(['/']);
        }
    }
}
