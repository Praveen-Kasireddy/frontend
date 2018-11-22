import { Component, OnInit } from '@angular/core';
import { SharedStorageService } from 'ngx-store';

const TIME: number = 900;
const WARNING_TIME: number = 300;
const POPUP_TIME: number = 60;

@Component({
    selector: 'kosmos-session-timer',
    templateUrl: './session-timer.component.html',
    styleUrls: ['./session-timer.component.scss']
})
export class SessionTimerComponent implements OnInit {
    timer: number = 0;
    message: string = '00:00';
    sessiontext: string = 'Session time left';
    warning: boolean = false;
    isPopupVisible: boolean = false;
    expired: boolean = false;

    constructor(private _sharedStorageService: SharedStorageService) {
        this.timerReset();
    }

    ngOnInit() {
        this._sharedStorageService.observe('sessionTimer').subscribe(event => {
            this.timerReset();
        });

        const time = setInterval(() => {
            --this.timer;

            if (this.timer > 0) {
                const minutes: number = Math.floor(this.timer / 60);
                const seconds: number = this.timer % 60;
                this.message =
                    (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
            } else {
                this.message = '00:00';
                this.sessiontext = 'Session is expired';
            }

            if (this.timer < WARNING_TIME && !this.warning) {
                this.warning = true;
            }
            if (this.timer < POPUP_TIME && this.timer > 0 && !this.isPopupVisible) {
                this.isPopupVisible = true;
            }
            if (this.timer <= 0) {
                // logged off
                this.expired = true;
            }
        }, 1000);
    }

    timerReset(): void {
        if (!this.expired) {
            this.timer = TIME;
            this.sessiontext = 'Session time left';
            this.warning = false;
            this.isPopupVisible = false;
        }
    }
}
