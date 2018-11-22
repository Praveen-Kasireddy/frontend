import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedStorageService } from 'ngx-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SessionTimerInterceptor implements HttpInterceptor {
    constructor(private _sharedStorageService: SharedStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.ok) {
                    this._sharedStorageService.set('sessionTimer', Date.now());
                }
            })
        );
    }
}
