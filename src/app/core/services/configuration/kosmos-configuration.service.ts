import { Injectable } from '@angular/core';
import { DEFAULT_PROJECT_CULTURE_NAME, LANUGAGE_COOKIE_KEY } from '@core/app.const';
import { KosmosConfig } from '@core/models/configuration/kosmos-config';
import { Language } from '@core/models/language';
import { environment } from 'environments/environment';
import { CookiesStorageService } from 'ngx-store';

@Injectable()
export class KosmosConfigurationService {
    static appConfig: KosmosConfig;

    private _languages: Language[];

    constructor(private _cookiesStorageService: CookiesStorageService) {
        this._languages = [
            new Language(1, 'de', 'de', 'Deutsch'),
            new Language(2, 'gb', 'en', 'English (UK)'),
            new Language(3, 'us', 'en-US', 'English (US)', false),
            new Language(4, 'fr', 'fr-FR', 'Français (France)', false),
            new Language(5, 'es', 'es-ES', 'Español (España)', false),
            new Language(6, 'it', 'it-IT', 'Italiano', false),
            new Language(7, 'cn', 'zh-CHS', '中文(简体)', false)
        ];
    }

    static loadKosmosConfig() {
        const jsonFile = `assets/configs/${environment.configname}`;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.overrideMimeType('application/json');
            xhr.open('GET', jsonFile, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        this.appConfig = JSON.parse(xhr.responseText);
                        resolve();
                    } else {
                        reject(`Could not load file '${jsonFile}': ${xhr.status}`);
                    }
                }
            };
            xhr.send(null);
        });
    }

    public getCurrentLanguageCultureName(): string {
        let value = this._cookiesStorageService.get(LANUGAGE_COOKIE_KEY);
        if (value == undefined || value == '') {
            value = DEFAULT_PROJECT_CULTURE_NAME;
        }

        return value;
    }

    public getCurrentLanguageCultureNameForAppStart() {
        return new Promise((resolve, reject) => {
            const lng = this.getCurrentLanguageCultureName();
            resolve(lng);
        });
    }

    public getLanguages(): Language[] {
        return this._languages;
    }

    public getLanguage(cultureName: string): Language {
        const language = this._languages.filter(l => l.cultureName == cultureName)[0];
        if (language == null) {
            return this.getLanguage(DEFAULT_PROJECT_CULTURE_NAME);
        }
        return language;
    }

    public getCurrentLanguage(): Language {
        return this.getLanguage(this.getCurrentLanguageCultureName());
    }

    public saveLanguageCultureName(language: string): void {
        this._cookiesStorageService.set(LANUGAGE_COOKIE_KEY, language);
    }
}
