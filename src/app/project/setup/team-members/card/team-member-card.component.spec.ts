import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NamedUser } from '@core/models/configuration/named-user';
import { AvatarComponent, CheckRightstDirective, SvgIconComponent } from '@shared/index';
import { SetupDeleteButtonComponent } from '../../delete-button/setup-delete-button.component';
import { TeamMemberCardComponent } from './team-member-card.component';

xdescribe('TeamMemberCardComponent', () => {
    let component: TeamMemberCardComponent;
    let fixture: ComponentFixture<TeamMemberCardComponent>;
    let find: any;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule],
            declarations: [
                TeamMemberCardComponent,
                SvgIconComponent,
                AvatarComponent,
                SetupDeleteButtonComponent,
                CheckRightstDirective
            ]
        });
        fixture = TestBed.createComponent(TeamMemberCardComponent);
        fixture.whenStable().then(
            () => {
                fixture.detectChanges();
                component = fixture.componentInstance;
                component.assignedUser = { gpid: 'gpid1', fullName: 'Test User', roleId: 1 };
            },
            () => {}
        );
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
    });

    it('creates self', () => {
        expect(component).toBeTruthy();
    });

    it('displays named user', () => {
        // arrange
        const namedUser = new NamedUser();
        namedUser.gpid = 'KPMG156587';
        namedUser.fullName = 'Wolfgang Riester';
        (namedUser.roleId = 2), (component.assignedUser = namedUser);
        fixture.detectChanges();

        // act
        fixture.detectChanges();

        // assert
        const fullname = find('p').nativeElement.textContent;
        expect(fullname).toBeDefined();
        expect(fullname).toEqual('Wolfgang Riester');
    });
});
