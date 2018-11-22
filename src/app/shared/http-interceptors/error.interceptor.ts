import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_ERROR } from '@core/app.const';
import { PingOnActionListenerService } from '@core/services/ping-on-action/ping-on-action-listener.service';
import { NGXLogger } from 'ngx-logger';
import { SharedStorageService } from 'ngx-store';
import { Observable, throwError as _throw } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MainPopup } from './../../core/models/popup/mainpopup';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private _logger: NGXLogger,
        private _sharedStorageService: SharedStorageService,
        private _router: Router,
        private _pingOnActionListenerService: PingOnActionListenerService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: any) => {
                this._logger.debug(error);
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401) {
                        if (error.headers.get('WWW-Authenticate').includes('The access token expired')) {
                            this._pingOnActionListenerService.removeListener();
                            const popup: MainPopup = new MainPopup();
                            popup.title = 'ERROR';
                            popup.content = 'The access token expired, click Ok to reload the Website';
                            popup.visible = true;
                            popup.reloadPage = true;
                            this._sharedStorageService.set('mainPopup', popup);
                        }
                        // return empty();
                    } else if (error.status == 403) {
                        this._router.navigate(['/'], { queryParams: { error: ROUTING_ERROR.ACCESS_FORBIDDEN } });
                    }
                }
                return _throw(error);
            })
        );
    }
}
