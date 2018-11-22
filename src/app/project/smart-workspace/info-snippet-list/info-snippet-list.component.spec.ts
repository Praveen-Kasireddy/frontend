import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockAssignmentService } from '@core/mocks/project/assigment.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { AssignmentService } from '@core/services/project/assignment.service';
import { AvatarComponent, SvgIconComponent } from '@shared/index';
import { TeamMemberAssignmentListComponent } from 'app/project/scope/team-member-assignment-list/team-member-assignment-list.component';
import { SharedStorageService } from 'ngx-store';


describe('TeamMemberAssignmentListComponent', () => {
    let component: TeamMemberAssignmentListComponent;
    let fixture: ComponentFixture<TeamMemberAssignmentListComponent>;
    let find: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TeamMemberAssignmentListComponent, AvatarComponent, SvgIconComponent],
            providers: [
                { provide: SharedStorageService, useClass: MockSharedStorageService },
                { provide: AssignmentService, useClass: MockAssignmentService }
            ]
        });

        fixture = TestBed.createComponent(TeamMemberAssignmentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        find = selector => fixture.debugElement.query(By.css(selector));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


});
