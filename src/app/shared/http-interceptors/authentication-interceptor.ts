import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LOCAL_TEST_USER } from '@core/app.const';

import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!KosmosConfigurationService.appConfig.production) {
            const reqWithAuthHeader = req.clone({ setHeaders: { 'x-username': LOCAL_TEST_USER } });
            return next.handle(reqWithAuthHeader);
        } else {
            return next.handle(req);
        }
    }
}
