import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';

@Injectable()
export class LocaleLoaderService {
    constructor(private httpClient: HttpClient, private _logger: NGXLogger) {}

    getCaGregorian(language) {
        return this.httpClient.get(`assets/localization/cldr-data/main/${language}/ca-gregorian.json`);
    }

    getNumbers(language) {
        return this.httpClient.get(`assets/localization/cldr-data/main/${language}/numbers.json`);
    }

    getCurrencies(language) {
        return this.httpClient.get(`assets/localization/cldr-data/main/${language}/currencies.json`);
    }
}
