import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NamedUser } from '@core/models/configuration/named-user';
import { ProjectSetupConfiguration } from '@core/models/configuration/project-setup-configuration';
import { ProjectStartModel } from '@core/models/project/project-start-model';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { ProjectService } from '@core/services/project/project.service';
import { DxModule } from '@shared/dx.module';
import { Observable, of } from 'rxjs';
import { ProjectStartComponent } from './project-start.component';

xdescribe('ProjectStartComponent with all properties', () => {
    let component: ProjectStartComponent;
    let fixture: ComponentFixture<ProjectStartComponent>;
    let projectService: ProjectService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectStartComponent],
            imports: [DxModule],
            providers: [
                {
                    provide: ConfigurationService,
                    useValue: {
                        getProjectSetupConfiguration: function(): Observable<ProjectSetupConfiguration> {
                            return of({
                                commercialActions: [
                                    { id: 1, description: 'action 1' },
                                    { id: 2, description: 'action 2' }
                                ],
                                availableUsers: [
                                    { gpid: 'gpid1', fullName: 'full name 1', roleId: 1 },
                                    { gpid: 'gpid2', fullName: 'full name 2', roleId: 1 }
                                ],
                                fees: [{ id: 1, description: 'fees 1' }, { id: 2, description: 'fees 2' }],
                                customProjectProperties: [
                                    { id: 1, isMandatory: true, name: 'ClientName', value: '' },
                                    { id: 1, isMandatory: true, name: 'TargetName', value: '' },
                                    { id: 1, isMandatory: true, name: 'DAContact', value: '' },
                                    { id: 1, isMandatory: true, name: 'CommercialAction', value: '' },
                                    { id: 1, isMandatory: true, name: 'StartEndDate', value: '' },
                                    { id: 1, isMandatory: true, name: 'Fees', value: '' },
                                    { id: 1, isMandatory: false, name: 'Briefing', value: '' }
                                ]
                            });
                        }
                    }
                },
                {
                    provide: ProjectService,
                    useValue: {
                        startProject: function(model: ProjectStartModel): Observable<Object> {
                            return of(new Object());
                        }
                    }
                }
            ]
        });
    }));

    beforeEach(() => {
        try {
            fixture = TestBed.createComponent(ProjectStartComponent);
            projectService = TestBed.get(ProjectService);
            fixture.detectChanges();
            component = fixture.componentInstance;
            component.visible = true;
            fixture.detectChanges();
        } catch (exception) {
            console.log(exception);
        }
    });

    afterEach(() => {
        component.visible = false;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('commercial actions radio group should show configured descriptions', () => {
        const descriptionNodes: NodeListOf<Element> = document
            .getElementsByTagName('dx-radio-group')[0]
            .getElementsByClassName('dx-item-content');
        const descriptions: string[] = Array.from(descriptionNodes).map(e => e.innerHTML);
        expect(descriptions.length).toBe(2);
        expect(descriptions[0]).toBe('action 1');
        expect(descriptions[1]).toBe('action 2');
    });

    it('fees select box should show configured descriptions', () => {
        const selectbox: HTMLElement = document.getElementsByTagName('dx-select-box')[0] as HTMLElement;
        (selectbox.getElementsByClassName('dx-texteditor-input')[0] as HTMLElement).click();
        fixture.detectChanges();
        const descriptions = Array.from(document.getElementsByClassName('dx-list-item-content')).map(e => e.innerHTML);
        expect(descriptions.length).toBe(2);
        expect(descriptions[0]).toBe('fees 1');
        expect(descriptions[1]).toBe('fees 2');
    });

    it('addDAContact should add contact and remove it from available users', () => {
        fixture.detectChanges();
        component.daContactToAdd = { gpid: 'gpid1', fullName: 'full name 1', roleId: 1 };
        fixture.detectChanges();
        component.addDAContact();
        fixture.detectChanges();
        expect(component.project.daContacts[0].gpid).toBe('gpid1', 'wrong da contact gpid');
        expect(document.getElementsByClassName('da-contact-name')[0].innerHTML).toBe(
            'full name 1',
            'wrong da contact name'
        );
        expect(component.configuration.availableUsers.length).toBe(1, 'wrong available users length');
        expect(component.daContactControl.value).toBeUndefined('daContactControl value not undefined');
    });

    function expectContactValidation() {
        expect(document.getElementsByClassName('validation-message')[0].innerHTML).toContain(
            'Please add at least one DA contact',
            'wrong validation message'
        );
    }

    it('addDAContact should clean up previous validation messasge', () => {
        fixture.detectChanges();
        component.validateDaContacts();
        fixture.detectChanges();
        expectContactValidation();
        component.daContactToAdd = { gpid: 'gpid1', fullName: 'full name 1', roleId: 1 };
        fixture.detectChanges();
        component.addDAContact();
        fixture.detectChanges();
        expect(document.getElementsByClassName('validation-message').length).toBe(0);
    });

    it('deleteDAContact of last contact should show validation message', () => {
        fixture.detectChanges();
        const contact: NamedUser = { gpid: 'gpid1', fullName: 'full name 1', roleId: 1 };
        component.daContactToAdd = contact;
        fixture.detectChanges();
        component.addDAContact();
        fixture.detectChanges();
        component.deleteDAContact(contact);
        fixture.detectChanges();
        expectContactValidation();
    });

    it('hide and show should remove validation messages and clean values', () => {
        fixture.detectChanges();
        component.project.name = 'name of the project';
        fixture.detectChanges();
        component.validateAndSubmitForm();
        fixture.detectChanges();
        expect(document.getElementsByClassName('validation-message').length).toBeGreaterThan(0);
        spyOn(component.closeEvent, 'emit');
        component.visible = false;
        fixture.detectChanges();
        expect(component.closeEvent.emit).toHaveBeenCalled();
        component.visible = true;
        fixture.detectChanges();
        expect(document.getElementsByClassName('validation-message').length).toBe(0);
        const nameBox: HTMLInputElement = document
            .getElementsByClassName('projectName')[0]
            .getElementsByTagName('input')[0] as HTMLInputElement;
        expect(nameBox.value.length).toBe(0);
    });

    function checkSingleValidation(standard: boolean) {
        fixture.detectChanges();
        component.validateAndSubmitForm();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(standard ? 2 : 0);
        expect(document.getElementsByClassName('validation-message').length).toBe(standard ? 0 : 1);
        expect(component.isToastVisible).toBe(false);
        expect(component.closeEvent.emit).not.toHaveBeenCalled();
        expect(component.projectCreated.emit).not.toHaveBeenCalled();
    }

    it('check all validations singularly', () => {
        fixture.detectChanges();
        component.project.clientName = 'client name';
        component.project.targetName = 'target name';
        component.project.commercialAction = 1;
        component.project.startDate = '2018-05-13';
        component.project.endDate = '2018-05-14';
        component.project.fees = 1;
        component.project.daContacts = [{ gpid: 'gpid1', fullName: 'full name 1', roleId: 1 }];
        spyOn(component.closeEvent, 'emit');
        spyOn(component.projectCreated, 'emit');
        checkSingleValidation(true);
        component.project.name = 'name of the project';
        component.project.targetName = undefined;
        checkSingleValidation(true);
        component.project.targetName = 'target name';
        component.project.commercialAction = undefined;
        checkSingleValidation(false);
        component.project.commercialAction = 1;
        component.project.startDate = undefined;
        checkSingleValidation(true);
        component.project.startDate = '2018-05-13';
        component.project.endDate = undefined;
        checkSingleValidation(true);
        component.project.endDate = '2018-05-12';
        checkSingleValidation(true);
        component.project.endDate = '2018-05-14';
        component.project.fees = undefined;
        checkSingleValidation(false);
        component.project.fees = 1;
        component.project.daContacts = [];
        checkSingleValidation(false);
        component.project.daContacts = [{ gpid: 'gpid1', fullName: 'full name 1', roleId: 1 }];
        fixture.detectChanges();
        component.validateAndSubmitForm();
        expect(component.isToastVisible).toBe(true);
        expect(component.closeEvent.emit).toHaveBeenCalled();
        expect(component.projectCreated.emit).toHaveBeenCalled();
    });
});

xdescribe('ProjectStartComponent with different custom properties', () => {
    it('only client name should be shown and validated', () => {
        let component: ProjectStartComponent;
        let fixture: ComponentFixture<ProjectStartComponent>;
        let projectService: ProjectService;

        TestBed.configureTestingModule({
            declarations: [ProjectStartComponent],
            imports: [DxModule],
            providers: [
                {
                    provide: ConfigurationService,
                    useValue: {
                        getProjectSetupConfiguration: function(): Observable<ProjectSetupConfiguration> {
                            return of({
                                commercialActions: [
                                    { id: 1, description: 'action 1' },
                                    { id: 2, description: 'action 2' }
                                ],
                                availableUsers: [
                                    { gpid: 'gpid1', fullName: 'full name 1', roleId: 1 },
                                    { gpid: 'gpid2', fullName: 'full name 2', roleId: 1 }
                                ],
                                fees: [{ id: 1, description: 'fees 1' }, { id: 2, description: 'fees 2' }],
                                customProjectProperties: [{ id: 1, isMandatory: true, name: 'ClientName', value: '' }]
                            });
                        }
                    }
                },
                {
                    provide: ProjectService,
                    useValue: {
                        startProject: function(model: ProjectStartModel): Observable<Object> {
                            return of(new Object());
                        }
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(ProjectStartComponent);
        projectService = TestBed.get(ProjectService);
        fixture.detectChanges();
        component = fixture.componentInstance;
        component.visible = true;
        fixture.detectChanges();
        const labelsText = Array.from(document.getElementsByTagName('label')).map(e => e.innerHTML);
        expect(labelsText.length).toBe(2);
        expect(labelsText[0]).toBe('Project Name');
        expect(labelsText[1]).toBe('Client Name');
        spyOn(component.closeEvent, 'emit');
        spyOn(component.projectCreated, 'emit');
        component.project.name = 'name of the project';
        fixture.detectChanges();
        component.validateAndSubmitForm();
        fixture.detectChanges();
        const standard: boolean = true;
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(standard ? 2 : 0);
        expect(document.getElementsByClassName('validation-message').length).toBe(standard ? 0 : 1);
        expect(component.isToastVisible).toBe(false);
        expect(component.closeEvent.emit).not.toHaveBeenCalled();
        expect(component.projectCreated.emit).not.toHaveBeenCalled();
        component.project.clientName = 'client name';
        fixture.detectChanges();
        component.validateAndSubmitForm();
        fixture.detectChanges();
        expect(component.isToastVisible).toBe(true);
        expect(component.closeEvent.emit).toHaveBeenCalled();
        expect(component.projectCreated.emit).toHaveBeenCalled();

        component.visible = false;
        fixture.detectChanges();
    });
});
