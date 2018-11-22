import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { CookiesStorageService } from 'ngx-store';
import { registerLocaleData } from '@angular/common';

import { TranslationConfigurationService } from './translation-configuration.service';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { DEFAULT_PROJECT_CULTURE_NAME } from '@core/app.const';

const cookiesStorageService = new CookiesStorageService();
const kosmosConfigurationService = new KosmosConfigurationService(cookiesStorageService);
const translationConfig = new TranslationConfigurationService(kosmosConfigurationService);

describe('TranslationConfig isDefaultLanguage Tests', () => {
    beforeEach(() => {
        kosmosConfigurationService.saveLanguageCultureName('');
    });

    it('Default Language should return true', () => {
        const result = translationConfig.isDefaultLanguage();
        expect(result).toEqual(true);
    });

    it('Default Language should return false', () => {
        kosmosConfigurationService.saveLanguageCultureName('de');
        const result = translationConfig.isDefaultLanguage();
        expect(result).toEqual(false);
    });
});

describe('TranslationConfig getLocale Tests', () => {
    beforeEach(() => {
        kosmosConfigurationService.saveLanguageCultureName('');
    });

    it('Default Language should return en', () => {
        kosmosConfigurationService.saveLanguageCultureName('');
        const result = translationConfig.getLocale();
        expect(result).toEqual(DEFAULT_PROJECT_CULTURE_NAME);
    });

    it('Default Language should return de', () => {
        const locale = 'de';
        kosmosConfigurationService.saveLanguageCultureName(locale);
        const result = translationConfig.getLocale();
        expect(result).toEqual(locale);
    });
});

describe('TranslationConfig getProvider Tests', () => {
    beforeEach(() => {
        kosmosConfigurationService.saveLanguageCultureName('');
    });

    it('Should return no providers', () => {
        kosmosConfigurationService.saveLanguageCultureName('');

        translationConfig.getProviders().then(providers => {
            const noProviders: Object[] = [];
            expect(providers).toEqual(noProviders);
        });
    });

    it('Should return providers for de', () => {
        kosmosConfigurationService.saveLanguageCultureName('de');
        translationConfig.getProviders().then(providers => {
            expect(providers.length).toEqual(3);
        });
    });
});
