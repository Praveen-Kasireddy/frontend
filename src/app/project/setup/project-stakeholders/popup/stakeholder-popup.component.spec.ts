import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckRightstDirective } from '@shared/index';
import {
    DxButtonComponent,
    DxPopupModule,
    DxTemplateModule,
    DxTextBoxComponent,
    DxToolbarModule,
    DxValidationGroupModule,
    DxValidatorModule
} from 'devextreme-angular';
import { StakeholderPopupComponent } from './stakeholder-popup.component';

describe('StakeholderPopupComponent', () => {
    let component: StakeholderPopupComponent;
    let fixture: ComponentFixture<StakeholderPopupComponent>;
    let originalTimeout: number;

    beforeEach(async done => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
        TestBed.configureTestingModule({
            declarations: [StakeholderPopupComponent, DxTextBoxComponent, DxButtonComponent, CheckRightstDirective],
            imports: [DxValidatorModule, DxTemplateModule, DxToolbarModule, DxPopupModule, DxValidationGroupModule]
        });
        fixture = TestBed.createComponent(StakeholderPopupComponent);
        fixture.whenStable().then(
            () => {
                fixture.detectChanges();
                component = fixture.componentInstance;
                done();
            },
            () => {
                console.log('StakeholderPopupComponent.beforeEach(async) --> fails');
                done();
            }
        );
    });

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    xit('creates self', () => {
        expect(component).toBeTruthy();
    });

    xit('displays initially empty', () => {
        component.visible = true;
        fixture.detectChanges();

        assertValueAttributeIsNull('stakeholder-firstname');
        assertValueAttributeIsNull('stakeholder-lastname');
        assertValueAttributeIsNull('stakeholder-jobtitle');
        assertValueAttributeIsNull('stakeholder-company');
        assertValueAttributeIsNull('stakeholder-email');
        assertValueAttributeIsNull('stakeholder-phone');
    });

    xit('requires stakeholder name', () => {
        // open the popup
        component.visible = true;
        fixture.detectChanges();

        // fill all fields except the name
        component.stakeholder.jobTitle = 'Agent';
        component.stakeholder.companyName = 'Burger King';
        component.stakeholder.email = 'no@email.org';
        component.stakeholder.phoneNumber = '030-202020';
        fixture.detectChanges();

        // click the button
        component.addAndClosePopup();
        fixture.detectChanges();

        // check the validation message
        expect(component.visible).toEqual(true);
        assertInvalidMessageElementExists('stakeholder-firstname');
        assertInvalidMessageElementExists('stakeholder-lastname');
    });

    xit('adds a stakeholder on clicking done', () => {
        // open the popup
        component.visible = true;
        fixture.detectChanges();

        // fill all required fields (i.e. all fields)
        component.stakeholder.firstName = 'Detlev';
        component.stakeholder.lastName = 'Beer';
        component.stakeholder.jobTitle = 'Agent';
        component.stakeholder.companyName = 'Burger King';
        component.stakeholder.email = 'no@email.org';
        component.stakeholder.phoneNumber = '030-202020';
        fixture.detectChanges();

        // set up spy on emitter
        spyOn(component.addEvent, 'emit');
        spyOn(component.closeEvent, 'emit');

        // click done
        component.addAndClosePopup();
        fixture.detectChanges();

        // assert

        // check that add event has been triggered
        expect(component.addEvent.emit).toHaveBeenCalled();
        expect(component.closeEvent.emit).toHaveBeenCalled();

        // check no validation message present
        assertNoInvalidMessageElementExists('stakeholder-name');
        assertNoInvalidMessageElementExists('stakeholder-jobtitle');
        assertNoInvalidMessageElementExists('stakeholder-company');
        assertNoInvalidMessageElementExists('stakeholder-email');
        assertNoInvalidMessageElementExists('stakeholder-phone');
    });

    xit('adds a stakeholder and displays empty again on clicking add another', () => {
        // open the popup
        // open the popup
        component.visible = true;
        fixture.detectChanges();

        // fill all required fields (i.e. all fields)
        component.stakeholder.firstName = 'Detlev';
        component.stakeholder.lastName = 'Beer';
        component.stakeholder.jobTitle = 'Agent';
        component.stakeholder.companyName = 'Burger King';
        component.stakeholder.email = 'no@email.org';
        component.stakeholder.phoneNumber = '030-202020';
        fixture.detectChanges();

        // set up spy on emitter
        spyOn(component.addEvent, 'emit');

        // click add another
        const res = component.add();
        fixture.detectChanges();

        expect(res).toEqual(true);
        // check that add event has been triggered
        expect(component.addEvent.emit).toHaveBeenCalled();

        // check no validation message present
        assertNoInvalidMessageElementExists('stakeholder-name');
        assertNoInvalidMessageElementExists('stakeholder-jobtitle');
        assertNoInvalidMessageElementExists('stakeholder-company');
        assertNoInvalidMessageElementExists('stakeholder-email');
        assertNoInvalidMessageElementExists('stakeholder-phone');

        // check that all fields are empty once more
        assertValueAttributeIsNull('stakeholder-name');
        assertValueAttributeIsNull('stakeholder-jobtitle');
        assertValueAttributeIsNull('stakeholder-company');
        assertValueAttributeIsNull('stakeholder-email');
        assertValueAttributeIsNull('stakeholder-phone');
    });
});

function assertNoInvalidMessageElementExists(className: string) {
    const elements: NodeListOf<Element> = document.getElementsByClassName(className);
    expect(elements.length).toBe(1);
    expect(elements[0]).toBeTruthy();
    const invalidMessageElement = elements[0].getElementsByClassName('dx-invalid-message');
    expect(invalidMessageElement.length).toEqual(0, `for element with className ${className}`);
}

function assertInvalidMessageElementExists(className: string) {
    const elements: NodeListOf<Element> = document.getElementsByClassName(className);
    expect(elements.length).toBe(1);
    expect(elements[0]).toBeTruthy();
    const invalidMessageElement = elements[0].getElementsByClassName('dx-invalid-message');
    expect(invalidMessageElement).toBeDefined(`for element with className ${className}`);
}

function assertValueAttributeIsNull(className: string): void {
    const elements: NodeListOf<Element> = document.getElementsByClassName(className);
    expect(elements.length).toBe(1);
    expect(elements[0]).toBeTruthy();
    const valueAttribute = elements[0].getAttribute('ng-reflect-value');
    expect(valueAttribute == null || valueAttribute == '').toBe(true, `for element with className ${className}`);
}
