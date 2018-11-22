import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CheckRightstDirective, DxModule } from '@shared/index';
import { NGXLogger } from 'ngx-logger';
import { TeamMemberCardComponent } from './card/team-member-card.component';
import { TeamMembersComponent } from './team-members.component';

describe('TeamMembersComponent', () => {
    let _thisComponent: TeamMembersComponent;
    let _fixture: ComponentFixture<TeamMembersComponent>;
    let _find: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeamMembersComponent, TeamMemberCardComponent, CheckRightstDirective],
            imports: [DxModule],
            providers: [NGXLogger]
        }).compileComponents();
    }));

    beforeEach(() => {
        _fixture = TestBed.createComponent(TeamMembersComponent);
        _thisComponent = _fixture.componentInstance;
        _find = (de => selector => de.query(By.css(selector)))(_fixture.debugElement);
        _fixture.detectChanges();
    });

    xit('should create', () => {
        expect(_thisComponent).toBeTruthy();
    });

    xit('displays assigned team members', () => {});
    xit('assigns one team member', () => {});
    xit('removes a team member');
});
