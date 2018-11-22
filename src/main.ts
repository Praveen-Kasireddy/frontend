import { enableProdMode, Injector, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { TranslationConfigurationService } from '@core/services/localization/translation-configuration.service';
import { CookiesStorageService } from 'ngx-store';
import { KosmosModule } from './app/kosmos.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const injector = Injector.create({
    providers: [
        {
            provide: TranslationConfigurationService,
            deps: [KosmosConfigurationService]
        },
        {
            provide: KosmosConfigurationService,
            deps: [CookiesStorageService]
        },
        {
            provide: CookiesStorageService,
            deps: []
        }
    ]
});
const translationConfig = injector.get(TranslationConfigurationService);

KosmosConfigurationService.loadKosmosConfig()
    .then(() => {
        translationConfig
            .getProviders()
            .then(providers => {
                platformBrowserDynamic([providers]).bootstrapModule(KosmosModule, {
                    missingTranslation: MissingTranslationStrategy.Warning,
                    providers: [providers]
                });
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
