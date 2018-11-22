import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { Router } from '@angular/router';

declare const require;

@Injectable()
export class DxLocaleLoaderService {
    constructor(
        private httpClient: HttpClient,
        private _logger: NGXLogger,
        private _kosmosConfigurationService: KosmosConfigurationService
    ) {}

    initializer() {
        return new Promise((resolve, reject) => {
            this._kosmosConfigurationService.getCurrentLanguageCultureNameForAppStart().then(mylocale => {
                this.registerLocalesForDevextreme(mylocale).then(a => {});
                resolve();
            });
        });
    }

    private async registerLocalesForDevextreme(language) {
        require('devextreme/localization/globalize/number');
        require('devextreme/localization/globalize/date');
        require('devextreme/localization/globalize/currency');
        require('devextreme/localization/globalize/message');

        // DevExtreme messages (en messages already included)
        const Messages = require(`../../../../../node_modules/devextreme/localization/messages/${language}.json`);

        const CaGregorian = await this.httpClient
            .get(`assets/localization/cldr-data/main/${language}/ca-gregorian.json`)
            .toPromise();
        const Numbers = await this.httpClient
            .get(`assets/localization/cldr-data/main/${language}/numbers.json`)
            .toPromise();
        const Currencies = await this.httpClient
            .get(`assets/localization/cldr-data/main/${language}/currencies.json`)
            .toPromise();

        const likelySubtags = require(`../../../../../node_modules/cldr-data/supplemental/likelySubtags.json`);
        const timeData = require(`../../../../../node_modules/cldr-data/supplemental/timeData.json`);
        const weekData = require(`../../../../../node_modules/cldr-data/supplemental/weekData.json`);
        const currencyData = require(`../../../../../node_modules/cldr-data/supplemental/currencyData.json`);
        const numberingSystems = require(`../../../../../node_modules/cldr-data/supplemental/numberingSystems.json`);

        const Globalize = require('globalize');

        Globalize.load(
            CaGregorian,
            Numbers,
            Currencies,

            likelySubtags,
            timeData,
            weekData,
            currencyData,
            numberingSystems
        );

        Globalize.locale(language);
        Globalize.loadMessages(Messages);
    }
}
