import { HttpClient, HttpHandler } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '@core/models/user';
import { PingService } from '@core/services';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { UserService } from '@core/services/user/user.service';
import { VersionApiService } from '@core/services/version-api/version-api.service';
import {
    AvatarComponent,
    CheckRightstDirective,
    MainNavItemComponent,
    SvgIconComponent,
    UserComponent
} from '@shared/index';
import { MainNavItemLanguageComponent } from '@shared/main-nav-item-language/main-nav-item-language.component';
import { WarningPopupComponent } from '@shared/session-timer/warning-popup/warning-popup.component';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { NGXLogger, NGXLoggerHttpService, NGXLoggerHttpServiceMock, NGXLoggerMock } from 'ngx-logger';
import { CookiesStorageService, LocalStorageService, SharedStorageService } from 'ngx-store';
import { VersionComponent } from '../../declarations/version/version.component';
import { SessionTimerComponent } from '../../shared/session-timer/session-timer.component';
import { MainNavComponent } from './main-nav.component';

xdescribe('MainNavComponent', () => {
    let component: MainNavComponent;
    let fixture: ComponentFixture<MainNavComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let navItems: any[];

    const USERS: User[] = [
        {
            id: 1,
            gpid: '42',
            salutation: 'Mrs.',
            firstName: 'Jane',
            lastName: 'Jungle',
            email: 'jane@jungle.wild',
            isActive: true,
            isAdmin: true
        },
        {
            id: 2,
            gpid: '0815',
            salutation: 'Mr.',
            firstName: 'Tarzan',
            lastName: 'Jungle',
            email: 'tarzan@jungle.wild',
            isActive: false,
            isAdmin: false
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainNavComponent,
                SvgIconComponent,
                UserComponent,
                AvatarComponent,
                VersionComponent,
                MainNavItemComponent,
                MainNavItemLanguageComponent,
                SessionTimerComponent,
                WarningPopupComponent,
                CheckRightstDirective
            ],
            imports: [RouterTestingModule, DxPopupModule],
            providers: [
                VersionApiService,
                HttpClient,
                HttpHandler,
                { provide: NGXLogger, useCLass: NGXLoggerMock },
                { provide: NGXLoggerHttpService, useCLass: NGXLoggerHttpServiceMock },
                SharedStorageService,
                LocalStorageService,
                CookiesStorageService,
                KosmosConfigurationService,
                UserService,
                { provide: PingService, useValue: { ping: () => {} } }
            ]
        });

        fixture = TestBed.createComponent(MainNavComponent);

        component = fixture.componentInstance;
        component.currentUser = USERS[0];
        de = fixture.debugElement;

        el = de.nativeElement;

        fixture.detectChanges();
        navItems = fixture.debugElement.queryAll(By.directive(MainNavItemComponent));
    });

    xdescribe('MainNavComponent', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should render some nav links', () => {
            expect(navItems).toBeTruthy();
            expect(navItems.length).toBeGreaterThan(0);
        });
    });

    xdescribe('MainNavComponent', () => {
        xit('should render with a Projects link', () => {
            const link = navItems.filter(item => item.componentInstance.icon == 'kpmg-icon-menu-home');

            expect(link.length).toBe(1);
        });
    });
});
