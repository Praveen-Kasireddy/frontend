import { HttpClient } from '@angular/common/http';
import { HostBinding, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Pipe({
    name: 'secure'
})
export class SecurePipe implements PipeTransform {
    @HostBinding('class.error2') hasError: boolean = false;

    constructor(private _http: HttpClient, private _sanitizer: DomSanitizer) {}

    transform(url: string, fallback?: string | undefined): Observable<SafeUrl> {
        return this._http.get(url, { responseType: 'blob' }).pipe(
            map(val => this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(val))),
            catchError((error: any) => {
                this.hasError = true;
                if (!fallback) {
                    return of('notfound');
                }
                return of(fallback);
            })
        );
    }
}
