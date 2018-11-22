import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services';
import { PingOnActionListenerService } from '@core/services/ping-on-action/ping-on-action-listener.service';
import { PingService } from '@core/services/ping-service/ping-service';
import { DateTime } from '@shared/date-time/date-time';
import { OnDestroy, TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';

export const pingIsOldAfterMinutes: number = 1;

@TakeUntilDestroy()
@Component({
    moduleId: module.id,
    selector: 'kosmos-ping-on-action',
    template: '',
    styleUrls: []
})
export class PingOnActionComponent implements OnInit, OnDestroy {
    lastPing: DateTime;
    isListenerOn: boolean = true;

    constructor(
        private _pingService: PingService,
        private _userService: UserService,
        private _pingOnActionListenerService: PingOnActionListenerService
    ) {}

    ngOnInit() {
        this._pingOnActionListenerService.removeListener$.pipe(untilDestroyed(this)).subscribe(() => {
            this.deactivatePing();
        });
        this.isListenerOn = true;
        window.addEventListener('keydown', () => {
            this.pingIfLastPingIsOld();
        });
        window.addEventListener('click', () => {
            this.pingIfLastPingIsOld();
        });
    }

    ngOnDestroy() {}

    deactivatePing() {
        this.isListenerOn = false;
    }

    pingIfLastPingIsOld() {
        if (
            this.isListenerOn &&
            (this.lastPing == undefined || DateTime.now.subtract(this.lastPing).totalMinutes > pingIsOldAfterMinutes)
        ) {
            this.lastPing = DateTime.now;
            this._pingService.ping();
            this._userService.getCurrentUser();
        }
    }
}
