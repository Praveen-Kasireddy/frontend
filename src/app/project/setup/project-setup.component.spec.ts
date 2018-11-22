import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockConfigurationService } from '@core/mocks/configuration/configuration.mock.service';
import { MockProjectService, ProjectSetupObject } from '@core/mocks/project/project.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { MockRightService } from '@core/mocks/user/right.mock.service';
import { User } from '@core/models';
import { ConfigurationService, ProjectService, RightService } from '@core/services';
import {
    AvatarComponent,
    CheckRightstDirective,
    DxModule,
    HeaderComponent,
    SidebarComponent,
    SvgIconComponent
} from '@shared/index';
import { DxDataGridModule } from 'devextreme-angular';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { of } from 'rxjs';
import { SetupDeleteButtonComponent } from './delete-button/setup-delete-button.component';
import { ProjectLegalEntitiesComponent } from './project-legal-entities/project-legal-entities.component';
import { ProjectMilestonesComponent } from './project-milestones/project-milestones.component';
import { ProjectObjectivesComponent } from './project-objectives/project-objectives.component';
import { ProjectSetupComponent } from './project-setup.component';
import { StakeholderCardComponent } from './project-stakeholders/card/stakeholder-card.component';
import { StakeholderPopupComponent } from './project-stakeholders/popup/stakeholder-popup.component';
import { ProjectStakeholdersComponent } from './project-stakeholders/project-stakeholders.component';
import { NewStakeholderComponent } from './project-stakeholders/stakeholder-new/stakeholder-new.component';
import { TeamMemberCardComponent } from './team-members/card/team-member-card.component';
import { TeamMemberPopupComponent } from './team-members/popup/team-member-popup.component';
import { NewTeamMemberComponent } from './team-members/team-member-new/team-member-new.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const configurator = path => {
    TestBed.configureTestingModule({
        declarations: [
            // shared
            AvatarComponent,
            HeaderComponent,
            SvgIconComponent,
            SidebarComponent,
            // component
            NewStakeholderComponent,
            NewTeamMemberComponent,
            StakeholderPopupComponent,
            ProjectSetupComponent,
            ProjectLegalEntitiesComponent,
            ProjectMilestonesComponent,
            ProjectObjectivesComponent,
            ProjectStakeholdersComponent,
            StakeholderCardComponent,
            SetupDeleteButtonComponent,
            TeamMemberCardComponent,
            TeamMemberPopupComponent,
            TeamMembersComponent,
            CheckRightstDirective
        ],
        imports: [DxModule, DxDataGridModule, NoopAnimationsModule, RouterTestingModule, FormsModule],
        providers: [
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        paramMap: {
                            get: function(key: string) {
                                return 'guid value';
                            }
                        },
                        url: [{ path: 'project' }, { path: path }]
                    },
                    data: of({
                        projectRoles: [
                            { id: 1, name: 'Role 1', isGlobal: false },
                            { id: 2, name: 'Role 2', isGlobal: false }
                        ]
                    })
                }
            },
            { provide: ProjectService, useClass: MockProjectService },
            { provide: ConfigurationService, useClass: MockConfigurationService },
            {
                provide: LocalStorageService,
                useValue: {
                    get: function(key: string): any {
                        const usr = new User();
                        usr.email = 'tt@kpmg.com';
                        usr.gpid = 'KPMG0000006';
                        usr.firstName = 'Toni';
                        usr.lastName = 'Tester';
                        return usr;
                    }
                }
            },
            { provide: SharedStorageService, useClass: MockSharedStorageService }
        ]
    });
    TestBed.compileComponents();
};

xdescribe('ProjectSetupComponent in create mode', () => {
    let component: ProjectSetupComponent;
    let fixture: ComponentFixture<ProjectSetupComponent>;

    beforeEach(async(() => {
        configurator('not setup');
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectSetupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('project name should not be initialized', () => {
        expect(component.project.name).toBeUndefined('project name with value');
    });

    xit('edit handler should be of type create handler', () => {});
});

xdescribe('ProjectSetupComponent in update mode', () => {
    let component: ProjectSetupComponent;
    let fixture: ComponentFixture<ProjectSetupComponent>;

    beforeEach(async(() => {
        configurator('setup');
    }));

    beforeEach(() => {
        try {
            fixture = TestBed.createComponent(ProjectSetupComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        } catch (exception) {
            console.log(exception);
        }
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('values from project should be shown', () => {
        // TODO -> update handler
        const findValue = (element => selector => element.query(By.css(selector)).componentInstance.value)(
            fixture.debugElement
        );
        expect(findValue('.name')).toBe(ProjectSetupObject.name, 'wrong project name');
        expect(findValue('.clientName')).toBe(ProjectSetupObject.clientName, 'wrong client name');
        expect(findValue('.clientId')).toBe(ProjectSetupObject.clientId, 'wrong client id');
        expect(findValue('.engagement')).toBe(ProjectSetupObject.engagementNumber, 'wrong engagement');
        expect(findValue('.startDate')).toBe(ProjectSetupObject.startDate, 'wrong start');
        expect(findValue('.dueDate')).toBe(ProjectSetupObject.dueDate, 'wrong due date');
        expect(findValue('dx-text-area')).toBe(ProjectSetupObject.summary, 'wrong summary');
        expect(findValue('.targetName')).toBe(ProjectSetupObject.targetCompanyName, 'wrong company target name');
    });

    it('commercial actions radio group should show configured descriptions', () => {
        const descriptionNodes = document
            .getElementsByTagName('dx-radio-group')[0]
            .getElementsByClassName('dx-item-content');
        const descriptions: string[] = Array.from(descriptionNodes).map(e => e.innerHTML);
        expect(descriptions.length).toBe(2);
        expect(descriptions[0]).toBe('Action One');
        expect(descriptions[1]).toBe('Action Two');
    });

    it('commercial action of the loaded project should be selected', () => {
        expect(component).toBeTruthy();
        component.project.commercialAction = 2;
        fixture.detectChanges();
        const radioValueNodes = document.getElementsByTagName('dx-radio-group')[0].getElementsByClassName('dx-item');
        const firstElementAttribute = radioValueNodes[0].attributes as NamedNodeMap;
        const secondElementAttribute = radioValueNodes[1].attributes as NamedNodeMap;
        expect(firstElementAttribute.getNamedItem('aria-checked').value).toBe('false');
        expect(secondElementAttribute.getNamedItem('aria-checked').value).toBe('true');
    });

    it('fees select box should show configured descriptions', () => {
        const selectbox: HTMLElement = document.getElementsByTagName('dx-select-box')[0] as HTMLElement;
        (selectbox.getElementsByClassName('dx-texteditor-input')[0] as HTMLElement).click();
        fixture.detectChanges();
        const descriptions = Array.from(document.getElementsByClassName('dx-list-item-content')).map(e => e.innerHTML);

        expect(descriptions.length).toBe(2);
        expect(descriptions[0]).toBe('First Fees');
        expect(descriptions[1]).toBe('Second Fees');
    });

    it('fees value of the loaded project should be selected', () => {
        const selectbox: HTMLElement = document.getElementsByTagName('dx-select-box')[0] as HTMLElement;
        (selectbox.getElementsByClassName('dx-texteditor-input')[0] as HTMLElement).click();
        fixture.detectChanges();

        const selectedAttribute = document
            .getElementsByClassName('dx-list-item-selected')[0]
            .attributes.getNamedItem('aria-selected').value;

        expect(selectedAttribute).toBe('true');
    });

    it('should show toast after save', () => {
        fixture.detectChanges();
        component.project.name = 'TestProject';
        component.project.clientName = 'client name';
        component.project.targetCompanyName = 'target name';
        component.project.commercialAction = 1;
        component.project.startDate = '2018-05-13';
        component.project.dueDate = '2018-05-14';
        component.project.fees = 1;
        component.project.engagementNumber = 1234567;
        component.project.objectives = [{ id: 1, description: 'description 1' }];
        component.project.milestones = [{ id: 1, description: 'description 1', date: '01/01/2019 ' }];
        component.project.legalEntities = [{ id: 1, companyName: 'Foo', abbreviation: 'Bar' }];
        component.project.team = [{ gpid: 'gpid1', fullName: 'full name 1', roleId: 1 }];
        fixture.detectChanges();

        component.validateAndSubmitForm();
        expect(component.isToastVisible).toBe(true);
    });

    xit('requires mandatory properties', () => {});

    xit('does not require optional properties', () => {});

    xit('creates a project', () => {});

    xit('calls custom property validator when leaving custom properties', () => {});

    xit('calls objectives validator when leaving objectives', () => {});

    xit('calls milestone validator when leaving milestones', () => {});

    xit('calls legal entity validator when leaving legal entities', () => {});

    xit('calls team member validator when changing team members', () => {});
});

describe('ProjectSetupComponent', () => {
    let component: ProjectSetupComponent;
    let fixture: ComponentFixture<ProjectSetupComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                // shared
                AvatarComponent,
                HeaderComponent,
                SvgIconComponent,
                SidebarComponent,
                // component
                NewStakeholderComponent,
                NewTeamMemberComponent,
                StakeholderPopupComponent,
                ProjectSetupComponent,
                ProjectLegalEntitiesComponent,
                ProjectMilestonesComponent,
                ProjectObjectivesComponent,
                ProjectStakeholdersComponent,
                StakeholderCardComponent,
                SetupDeleteButtonComponent,
                TeamMemberCardComponent,
                TeamMemberPopupComponent,
                TeamMembersComponent,
                CheckRightstDirective
            ],
            imports: [DxModule, DxDataGridModule, NoopAnimationsModule, RouterTestingModule, FormsModule],
            providers: [
                { provide: ConfigurationService, useClass: MockConfigurationService },
                {
                    provide: LocalStorageService,
                    useValue: {
                        get: function(key: string): any {
                            const usr = new User();
                            usr.email = 'tt@kpmg.com';
                            usr.gpid = 'KPMG0000006';
                            usr.firstName = 'Toni';
                            usr.lastName = 'Tester';
                            return usr;
                        }
                    }
                },
                { provide: ProjectService, useClass: MockProjectService },
                { provide: RightService, useClass: MockRightService },
                { provide: SharedStorageService, useClass: MockSharedStorageService }
            ]
        });
        TestBed.compileComponents();
        const projectService = TestBed.get(ProjectService);
        spyOn(projectService, 'getIndustries').and.returnValue(
            of([{ id: 1, description: 'parent', children: [{ id: 2, description: 'child', children: [] }] }])
        );
        fixture = TestBed.createComponent(ProjectSetupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.industries.length).toBe(1);
        expect(component.allIndustries.length).toBe(2);
        expect(component.allIndustries[1].id).toBe(2);
    });
});
