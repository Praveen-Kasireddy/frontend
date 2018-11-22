import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Milestone } from '@core/models/project/milestone';
import { DxModule } from '@shared/dx.module';
import { ProjectMilestonesComponent } from './project-milestones.component';

xdescribe('ProjectMilestonesComponent', () => {
    let component: ProjectMilestonesComponent;
    let fixture: ComponentFixture<ProjectMilestonesComponent>;
    let find: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectMilestonesComponent],
            imports: [DxModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectMilestonesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
    });

    it('creates self', () => {
        expect(component).toBeTruthy();
    });

    it('displays milestones', () => {
        const milestone1 = new Milestone();
        milestone1.id = 1;
        milestone1.date = new Date(2018, 3, 18);
        milestone1.description = 'The Reckoning';
        const milestone2 = new Milestone();
        milestone2.id = 2;
        milestone2.date = new Date(2018, 3, 22);
        milestone2.description = 'The Blaming';
        component.milestones = [milestone1, milestone2];
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const names = fixture.debugElement.queryAll(By.css('span.name'));
            const dates = fixture.debugElement.queryAll(By.css('span.date'));

            expect(names).toBeTruthy('names not found');
            expect(names.length).toEqual(2);
            expect(names[0].nativeElement.innerHTML).toEqual('The Reckoning');
            expect(names[1].nativeElement.innerHTML).toEqual('The Blaming');

            expect(dates).toBeTruthy('dates not found');
            expect(dates.length).toEqual(2);
            expect(dates[0].nativeElement.innerHTML).toEqual('18 Apr 2018');
            expect(dates[1].nativeElement.innerHTML).toEqual('22 Apr 2018');
        });
    });

    it('adds a milestone', () => {
        const dxMilestoneDate = find('dx-date-box#milestoneDate').componentInstance;
        expect(dxMilestoneDate).toBeDefined();
        dxMilestoneDate.value = new Date(2018, 3, 18); // this is April!

        const dxAbbreviation = find('dx-text-box#milestoneName').componentInstance;
        expect(dxAbbreviation).toBeDefined();
        dxAbbreviation.value = 'The Reckoning';
        fixture.detectChanges();

        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const dates = fixture.debugElement.queryAll(By.css('span.date'));
            const names = fixture.debugElement.queryAll(By.css('span.name'));

            expect(dates.length).toEqual(1);
            expect(dates[0].nativeElement.innerHTML).toEqual('18 Apr 2018');

            expect(names.length).toEqual(1);
            expect(names[0].nativeElement.innerHTML).toEqual('The Reckoning');
        });
    });

    it('adds a milestone automatically when form is submitted', () => {
        const dxMilestoneDate = find('dx-date-box#milestoneDate').componentInstance;
        expect(dxMilestoneDate).toBeDefined();
        dxMilestoneDate.value = new Date(2018, 3, 18); // this is April!

        const dxAbbreviation = find('dx-text-box#milestoneName').componentInstance;
        expect(dxAbbreviation).toBeDefined();
        dxAbbreviation.value = 'The Reckoning';
        fixture.detectChanges();

        component.submitIfNewNotEmpty();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const dates = fixture.debugElement.queryAll(By.css('span.date'));
            const names = fixture.debugElement.queryAll(By.css('span.name'));

            expect(dates.length).toEqual(1);
            expect(dates[0].nativeElement.innerHTML).toEqual('18 Apr 2018');

            expect(names.length).toEqual(1);
            expect(names[0].nativeElement.innerHTML).toEqual('The Reckoning');
        });
    });

    it('removes a milestone', () => {
        // arrange
        const milestone = new Milestone();
        milestone.date = new Date(2018, 4, 18);
        milestone.description = 'Reckoning';
        component.milestones = [milestone];
        fixture.detectChanges();

        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            // find delete button on milestone item in list
            const removeButtons = fixture.debugElement.queryAll(By.css('span.btn-remove-item'));
            expect(removeButtons).toBeDefined('remove buttons missing');
            expect(removeButtons.length).toEqual(1);
            expect(removeButtons[0]).toBeDefined('first remove button not found');

            // act
            removeButtons[0].triggerEventHandler('click', null);

            // assert
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                const dates = fixture.debugElement.queryAll(By.css('span.date'));
                const names = fixture.debugElement.queryAll(By.css('span.name'));
                expect(dates.length).toEqual(0);
                expect(names.length).toEqual(0);
            });
        });
    });

    it('requires a date', () => {
        const dxMilestoneDate = find('dx-date-box#milestoneDate').componentInstance;
        expect(dxMilestoneDate).toBeDefined();
        // dxMilestoneDate.value = new Date(2018, 3, 18); // this is April!

        const dxTextBox = find('dx-text-box#milestoneName').componentInstance;
        expect(dxTextBox).toBeDefined();
        dxTextBox.value = 'The Reckoning';
        fixture.detectChanges();

        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();

            const dates = fixture.debugElement.queryAll(By.css('span.date'));
            const names = fixture.debugElement.queryAll(By.css('span.name'));

            expect(dates.length).toEqual(0);
            expect(names.length).toEqual(0);
        });
    });

    it('requires a description', () => {
        const dxMilestoneDate = find('dx-date-box#milestoneDate').componentInstance;
        expect(dxMilestoneDate).toBeDefined();
        dxMilestoneDate.value = new Date(2018, 3, 18); // this is April!

        const dxTextBox = find('dx-text-box#milestoneName').componentInstance;
        expect(dxTextBox).toBeDefined();
        // dxAbbreviation.value = 'The Reckoning';
        fixture.detectChanges();

        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();

            const dates = fixture.debugElement.queryAll(By.css('span.date'));
            const names = fixture.debugElement.queryAll(By.css('span.name'));

            expect(dates.length).toEqual(0);
            expect(names.length).toEqual(0);
        });
    });
});
