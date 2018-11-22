import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NG_PROGRESS_COLOR, NG_PROGRESS_SPINNER } from '@core/app.const';
import {
    DxLocaleLoaderService,
    KosmosConfigurationService,
    LocaleLoaderService,
    PingService,
    TranslationConfigurationService,
    UserService,
    VersionApiService
} from '@core/services';
import { PingOnActionListenerService } from '@core/services/ping-on-action/ping-on-action-listener.service';
import { WindowRef } from '@core/window-ref.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {
    AuthenticationInterceptor,
    CacheInterceptor,
    ErrorInterceptor,
    LoggingInterceptor,
    SessionTimerInterceptor,
    XCorrelationIdInterceptor
} from '@shared/index';
import { SharedModule } from '@shared/shared.module';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'ngx-logger';
import { WebStorageModule } from 'ngx-store';
import { DeclarationsModule } from './declarations/declarations.module';
import { KosmosRoutingModule } from './kosmos-routing.module';
import { KosmosComponent } from './kosmos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { ProtoComponent } from './proto/proto.component';

@NgModule({
    declarations: [KosmosComponent, NotFoundComponent, UserLogoutComponent, ProtoComponent],
    imports: [
        WebStorageModule,
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        KosmosRoutingModule,
        HttpClientModule,
        DeclarationsModule,
        LoggerModule.forRoot({
            level: NgxLoggerLevel.WARN
        }),
        NgProgressModule.forRoot({
            color: NG_PROGRESS_COLOR,
            spinner: NG_PROGRESS_SPINNER
        }),
        NgProgressHttpModule.forRoot()
    ],
    providers: [
        KosmosConfigurationService,
        VersionApiService,
        LocaleLoaderService,
        DxLocaleLoaderService,
        UserService,
        TranslationConfigurationService,
        PingOnActionListenerService,
        WindowRef,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenticationInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: XCorrelationIdInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SessionTimerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CacheInterceptor,
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (dxLocales: DxLocaleLoaderService) => () => dxLocales.initializer(),
            deps: [DxLocaleLoaderService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (user: UserService) => () => user.getCurrentUser(),
            deps: [UserService],
            multi: true
        },
        PingService
    ],
    bootstrap: [KosmosComponent]
})
export class KosmosModule {
    constructor(private _logger: NGXLogger, private _translationConfigurationService: TranslationConfigurationService) {
        this._translationConfigurationService.registerLocales();

        this._logger.updateConfig({
            level: <NgxLoggerLevel>NgxLoggerLevel[KosmosConfigurationService.appConfig.clientLogLevel],
            serverLoggingUrl: KosmosConfigurationService.appConfig.serverLogUrl,
            serverLogLevel: <NgxLoggerLevel>NgxLoggerLevel[KosmosConfigurationService.appConfig.serverLogLevel]
        });
    }
}
