import { Component, Input } from '@angular/core';

import { SvgIconTypes } from '@shared/svg-icon/svg-icon.enum';
import { WhenEmpty } from '@core/decorators/when-empty/when-empty.decorator';
import { Language } from '@core/models/language';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';

@Component({
    selector: 'kosmos-main-nav-item-language',
    templateUrl: './main-nav-item-language.component.html',
    styleUrls: ['./main-nav-item-language.component.scss']
})
export class MainNavItemLanguageComponent {
    currentLanguage: Language;
    selectedLanguage: Language;
    languages: Language[];
    popupVisible: boolean = false;

    constructor(private _kosmosConfigurationService: KosmosConfigurationService) {
        this.languages = this._kosmosConfigurationService.getLanguages();
        this.currentLanguage = this._kosmosConfigurationService.getCurrentLanguage();
    }

    showLanguages(): void {
        this.selectedLanguage = this.currentLanguage;
        this.popupVisible = true;
    }

    closeLanguages = (): void => {
        this.popupVisible = false;

        if (this.selectedLanguage.id != this.currentLanguage.id) {
            this._kosmosConfigurationService.saveLanguageCultureName(this.selectedLanguage.cultureName);
            this.currentLanguage = this.selectedLanguage;
            setTimeout(function() {
                window.location.reload(true);
            }, 500);
        }
    };

    selectLanguage(lang: Language): void {
        if (!lang.isActive) {
            return;
        }

        this.selectedLanguage = lang;
    }
}
