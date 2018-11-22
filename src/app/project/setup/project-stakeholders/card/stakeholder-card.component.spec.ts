import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Stakeholder } from '@core/models/project/stakeholder';
import { DxPopupComponent, DxTextBoxComponent } from 'devextreme-angular';
import { AvatarComponent } from '../../../../shared/avatar/avatar.component';
import { SvgIconComponent } from '../../../../shared/svg-icon/svg-icon.component';
import { SetupDeleteButtonComponent } from '../../delete-button/setup-delete-button.component';
import { StakeholderCardComponent } from './stakeholder-card.component';

xdescribe('StakeholderCardComponent', () => {
    let component: StakeholderCardComponent;
    let fixture: ComponentFixture<StakeholderCardComponent>;
    let find: any;

    const STAKEHOLDER: Stakeholder = {
        id: 1,
        firstName: 'StakeholderFirstName',
        lastName: 'StakeholderLastName',
        jobTitle: 'StakeholderJob',
        companyName: 'StakeholderCompany',
        email: 'no@email.org',
        description: 'StakeHolderDescription',
        phoneNumber: '030-202020'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DxTextBoxComponent,
                StakeholderCardComponent,
                AvatarComponent,
                DxPopupComponent,
                SetupDeleteButtonComponent,
                SvgIconComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StakeholderCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });

    xit('displays stakeholder', () => {
        component.stakeholder = STAKEHOLDER;
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();

            const name = find('div.stakeholderName').nativeElement.textContent.trim();
            const jobTitle = find('div.stakeholderJobTitle').nativeElement.textContent.trim();
            const company = find('div.stakeholderCompany').nativeElement.textContent.trim();
            const email = find('div.stakeholderEmail').nativeElement.textContent.trim();
            const phone = find('div.stakeholderPhone').nativeElement.textContent.trim();
            expect(name).toEqual(STAKEHOLDER.firstName);
            expect(jobTitle).toEqual(STAKEHOLDER.jobTitle);
            expect(company).toEqual(STAKEHOLDER.companyName);
            expect(email).toEqual(STAKEHOLDER.email);
            expect(phone).toEqual(STAKEHOLDER.phoneNumber);
        });
    });
});
