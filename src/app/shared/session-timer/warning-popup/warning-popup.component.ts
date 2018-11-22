import { Component, Input } from '@angular/core';
import { PingService } from '@core/services';

@Component({
    selector: 'kosmos-warning-popup',
    templateUrl: './warning-popup.component.html',
    styleUrls: ['./warning-popup.component.scss']
})
export class WarningPopupComponent {
    @Input()
    visible: boolean = false;
    @Input()
    message: string = '1:00';
    @Input()
    expired: boolean = false;

    messageText: string =
        'Please extend your session or make sure to save possible changes otherwise they will be lost.';
    expiredMessageText: string =
        'Your session has expired. Please refresh your page by using F5 or the "Refresh" button right of the URL.';

    constructor(private _pingService: PingService) {}

    confirmed = (): void => {
        if (!this.expired) {
            this._pingService.ping();
        }
    };
}
