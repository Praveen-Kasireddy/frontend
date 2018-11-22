import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockAssignmentService, MockData } from '@core/mocks/project/assigment.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { AssignmentService } from '@core/services/project/assignment.service';
import { AvatarComponent, SvgIconComponent } from '@shared/index';
import { SharedStorageService } from 'ngx-store';
import { TeamMemberAssignmentListComponent } from './team-member-assignment-list.component';

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

    it('displays teammember', () => {
        expect(MockData.length >= 2);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const userDivs = fixture.debugElement.queryAll(By.css('.assignable-user'));
            expect(userDivs.length == MockData.length);

            const userDiv1 = userDivs[0].nativeElement;
            expect(userDiv1.children[1].innerText == MockData[0].teamMember.fullName);

            const userDiv2 = userDivs[1].nativeElement;
            expect(userDiv2.children[1].innerText == MockData[1].teamMember.fullName);
        });
    });

    describe('selectedItem', () => {
        it('should be initially empty', () => {
            expect(component.selectedItem == null);
        });

        it('should be selected user when it was empty before', () => {
            expect(MockData.length >= 1);

            fixture.debugElement.queryAll(By.css('.assignable-user'))[0].nativeElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.selectedItem == MockData[0].teamMember);
            });
        });

        it('should be selected user when it was another user before', () => {
            expect(MockData.length >= 2);

            fixture.debugElement.queryAll(By.css('.assignable-user'))[0].nativeElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.selectedItem == MockData[0].teamMember);
            });

            fixture.debugElement.queryAll(By.css('.assignable-user'))[1].nativeElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.selectedItem == MockData[1].teamMember);
            });
        });

        it('should be empty when it was selected user before', () => {
            expect(MockData.length >= 2);

            fixture.debugElement.queryAll(By.css('.assignable-user'))[0].nativeElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.selectedItem == MockData[0].teamMember);
            });

            fixture.debugElement.queryAll(By.css('.assignable-user'))[0].nativeElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.selectedItem == null);
            });
        });

        it('should be visualized in UI', () => {
            expect(MockData.length >= 2);

            const user1Div = fixture.debugElement.queryAll(By.css('.assignable-user'))[0].nativeElement;
            const user2Div = fixture.debugElement.queryAll(By.css('.assignable-user'))[1].nativeElement;
            user1Div.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(user1Div.classList.find(element => element == 'selected-user'));
                expect(!user2Div.classList.find(element => element == 'selected-user'));
            });
        });
    });

    describe('TeamMember.Counter', () => {
        it('should be initially 0', () => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.teamMembersWithCounter.length == MockData.length);

                if (component.teamMembersWithCounter.length != MockData.length) {
                    expect(component.teamMembersWithCounter[0].counter == 0);
                    expect(component.teamMembersWithCounter[1].counter == 0);
                }
            });
        });

        it('should not be visualized in UI when 0', () => {
            expect(MockData.length >= 1);

            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.teamMembersWithCounter[0].counter == 0);
                const userDivs = fixture.debugElement.queryAll(By.css('.assignable-user'));
                expect(userDivs[0].nativeElement.children.length == 2);
            });
        });

        it('should be visualized in UI when larger than 0', () => {
            expect(MockData.length >= 2);

            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.teamMembersWithCounter[1].counter > 0);

                const userDivs = fixture.debugElement.queryAll(By.css('.assignable-user'));
                expect(userDivs[1].nativeElement.children.length == 3);
                expect(
                    userDivs[1].nativeElement.children[2].innerText ==
                        component.teamMembersWithCounter[1].counter.toString()
                );
            });
        });
    });
});
