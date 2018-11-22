import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { X_CORRELATION_ID_HEADER_KEY, X_CORRELATION_ID_STORAGE_KEY } from '@core/app.const';
import { SharedStorageService } from 'ngx-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class XCorrelationIdInterceptor implements HttpInterceptor {
    constructor(private _sharedStorageService: SharedStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._sharedStorageService.get(X_CORRELATION_ID_STORAGE_KEY)) {
            req = req.clone({
                setHeaders: {
                    'X-Correlation-id': this._sharedStorageService.get(X_CORRELATION_ID_STORAGE_KEY)
                }
            });
        }

        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const res: HttpResponse<any> = event;

                    if (res.headers.get(X_CORRELATION_ID_HEADER_KEY)) {
                        this._sharedStorageService.set(
                            X_CORRELATION_ID_STORAGE_KEY,
                            res.headers.get(X_CORRELATION_ID_HEADER_KEY)
                        );
                    }
                }
            })
        );
    }
}
