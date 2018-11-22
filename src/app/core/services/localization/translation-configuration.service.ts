import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, Injectable, Inject } from '@angular/core';
import { CookiesStorageService } from 'ngx-store';
import { registerLocaleData } from '@angular/common';
import { LocaleLoaderService } from './localeLoader.service';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
declare const require;

@Injectable()
export class TranslationConfigurationService {
    CaGregorian;
    Numbers;
    Currencies;

    constructor(private _kosmosConfigurationService: KosmosConfigurationService) {}

    // get providers for language
    public getProviders(): Promise<Object[]> {
        const noProviders: Object[] = [];

        if (this.isDefaultLanguage()) {
            return Promise.resolve(noProviders);
        }

        const languageCultureName = this._kosmosConfigurationService.getCurrentLanguageCultureName();

        const translations = require(`raw-loader!../../../../locale/messages.${languageCultureName}.xlf`);

        const Providers = [
            { provide: TRANSLATIONS, useValue: translations },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf2' },
            { provide: LOCALE_ID, useValue: languageCultureName }
        ];
        return Promise.resolve(Providers);
    }

    // check for default language
    public isDefaultLanguage(): boolean {
        const languageCultureName = this._kosmosConfigurationService.getCurrentLanguageCultureName();

        if (languageCultureName == 'en' || languageCultureName == undefined || languageCultureName == '') {
            return true;
        }
        return false;
    }

    public getLocale() {
        if (this.isDefaultLanguage()) {
            return 'en';
        } else {
            return this._kosmosConfigurationService.getCurrentLanguageCultureName();
        }
    }

    // loading locales for date, currency etc.
    public registerLocales(): void {
        if (this.isDefaultLanguage()) {
            return;
        }

        const languageCultureName = this._kosmosConfigurationService.getCurrentLanguageCultureName();

        let localeExtraText = require(`raw-loader!../../../../assets/localization/angular/extra/${languageCultureName}.js`);

        const startPos = localeExtraText.indexOf('export default ');
        localeExtraText = 'return ' + localeExtraText.substring(startPos + 15);
        const f = new Function(localeExtraText);
        const localeExtra = f();

        const locale = require(`../../../../assets/localization/angular/${languageCultureName}.js`);
        registerLocaleData(locale.default, languageCultureName, localeExtra);
    }
}
