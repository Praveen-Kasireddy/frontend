import { Location } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NG_PROGRESS_COLOR, NG_PROGRESS_SPINNER } from '@core/app.const';
import { ProjectState } from '@core/enum/project-state.enum';
import { ProjectMockComponent } from '@core/mocks/project/project-mock.component';
import { ProjectRoutesMock } from '@core/mocks/project/project-routing-mock.module';
import { MockProjectService } from '@core/mocks/project/project.mock.service';
import { Project } from '@core/models/project/project';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { PingService } from '@core/services/ping-service/ping-service';
import { ProjectService } from '@core/services/project/project.service';
import { VersionApiService } from '@core/services/version-api/version-api.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {
    AvatarComponent,
    CheckRightstDirective,
    DxModule,
    MainNavItemComponent,
    MainNavItemLanguageComponent,
    SvgIconComponent,
    UserComponent
} from '@shared/index';
import { PingOnActionComponent } from '@shared/ping-on-action/ping-on-action.component';
import { WarningPopupComponent } from '@shared/session-timer/warning-popup/warning-popup.component';
import { UnsavedChangesPopupComponent } from '@shared/unsaved-changes-popup/unsaved-changes-popup.component';
import { UnsavedChangesPopupService } from '@shared/unsaved-changes-popup/unsaved-changes-popup.service';
import { NGXLogger, NGXLoggerHttpService, NGXLoggerHttpServiceMock, NGXLoggerMock } from 'ngx-logger';
import { CookiesStorageService, LocalStorageService, SharedStorageService } from 'ngx-store';
import { MainNavComponent } from '../../../declarations/main-nav/main-nav.component';
import { VersionComponent } from '../../../declarations/version/version.component';
import { KosmosComponent } from '../../../kosmos.component';
import { SessionTimerComponent } from '../../../shared/session-timer/session-timer.component';
import { ProjectResolver } from '../project/project-resolver';

const PROJECT_OBJECT: Project[] = [
    {
        projectGuid: '10f2a02b-a8a7-48dc-acb0-86997bae8338',
        configGuid: 'E52DCCDE-B049-40D9-B15E-B09A4F325678',
        stakeholders: undefined,
        dueDate: new Date(),
        language: 'de',
        user: 'xxx',
        engagementNumber: 1234,
        financialYearEnd: '2017-12-31T12:59:59',
        masterCurrency: 'USD',
        name: 'Project 1',
        client: {
            name: 'client name',
            clientId: '1234567890'
        },
        milestones: [],
        objectives: [],
        legalEntities: [],
        startDate: new Date(),
        status: 'active',
        projectSummary: 'Summary',
        systemOfRecord: 'The System',
        tags: ['foo', 'bar'],
        id: 1,
        manager: {},
        team: [],
        targetCompanyName: 'Test company',
        sections: [],
        scopeItemSummary: {
            total: 10,
            completed: 5
        },
        fees: 1,
        commercialAction: 2,
        state: ProjectState.DONE
    }
];

xdescribe('Test Project Routing and Resolver', () => {
    let location: Location;
    let router: Router;
    let fixture;
    const _sharedStorageService: SharedStorageService = new SharedStorageService();
    let selectedProject: Project;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(ProjectRoutesMock),
                DxModule,
                NgProgressModule.forRoot({
                    color: NG_PROGRESS_COLOR,
                    spinner: NG_PROGRESS_SPINNER
                }),
                NgProgressHttpModule
            ],
            declarations: [
                CheckRightstDirective,
                ProjectMockComponent,
                KosmosComponent,
                MainNavItemComponent,
                MainNavComponent,
                MainNavItemLanguageComponent,
                UserComponent,
                VersionComponent,
                AvatarComponent,
                SvgIconComponent,
                SessionTimerComponent,
                PingOnActionComponent,
                UnsavedChangesPopupComponent,
                WarningPopupComponent
            ],
            providers: [
                { provide: ProjectService, useClass: MockProjectService },
                ProjectResolver,
                SharedStorageService,
                LocalStorageService,
                CookiesStorageService,
                KosmosConfigurationService,
                VersionApiService,
                HttpClient,
                HttpHandler,
                UnsavedChangesPopupService,
                { provide: NGXLogger, useCLass: NGXLoggerMock },
                { provide: NGXLoggerHttpService, useCLass: NGXLoggerHttpServiceMock },
                { provide: PingService, useValue: { ping: () => {} } }
            ]
            // schemas: [NO_ERRORS_SCHEMA]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(KosmosComponent);
        router.initialNavigation();
    });

    it('should navigate to the scope Page', fakeAsync(() => {
        router.navigate(['/' + PROJECT_OBJECT[0].projectGuid + '/scope']).then(
            () => {
                expect(router.url).toBe('/' + PROJECT_OBJECT[0].projectGuid + '/scope');
            },
            () => {
                fail('Failed to open page');
            }
        );
    }));

    it('resolver should fetched project', fakeAsync(() => {
        router.navigate(['/' + PROJECT_OBJECT[0].projectGuid + '/scope']).then(
            () => {
                selectedProject = _sharedStorageService.get('selectedProject');
                expect(PROJECT_OBJECT[0].projectGuid).toBe(selectedProject.projectGuid);
            },
            () => {
                fail('Failed to open page');
            }
        );
    }));
});
