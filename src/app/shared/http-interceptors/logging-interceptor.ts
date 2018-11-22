import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { SharedStorageService } from 'ngx-store';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    constructor(
        private _logger: NGXLogger,
        private _sharedStorageService: SharedStorageService,
        private _router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let msg = `${req.method} "${req.urlWithParams}" | waiting for response...`;
        this._logger.debug(msg);
        const started = Date.now();
        let ok: string;

        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // do stuff with response, if you want
                    ok = 'succeeded';
                }
            }),
            // Log when response observable either completes or errors
            finalize(() => {
                const elapsed = Date.now() - started;
                msg = `${req.method} "${req.urlWithParams}" | ${ok} in ${elapsed} ms.`;
                this._logger.debug(msg);
            })
        );
    }
}
