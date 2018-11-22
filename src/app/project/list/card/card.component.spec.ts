// tslint:disable:max-line-length
import { Component, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StatusBadgeComponent } from '@shared/index';
import { IProject } from '../../project.interface';
import { ProjectCardComponent } from './card.component';
import { ProgressComponent } from './progress/progress.component';

// tslint:enable:max-line-length

// data pipe broken, we can use shim or mock it, see: https://goo.gl/ztKezW, https://goo.gl/784W3p
// tslint:disable:pipe-naming
@Pipe({
    name: 'date',
    pure: false
})
class MockedDatePipe implements Pipe, PipeTransform {
    name: string = 'date';

    transform(query: string): any {
        return query;
    }
}

xdescribe('ProjectsCardComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let comp: TestComponent;
    let find: any;
    let el: HTMLElement;

    @Component({
        template: `
			<kosmos-project-card
				[projectDueDate]="project?.dueDate"
				[projectName]="project?.name"
				[projectStatus]="project?.status"
				[clientName]="project?.client?.name"
				[allItemsCount]="0"
				[completedItemsCount]="0"
				(selected)="onSelected($event)"
			></kosmos-project-card>`
    })
    class TestComponent {
        project: IProject = {
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
            summary: 'Summary',
            systemOfRecord: 'The System',
            tags: ['foo', 'bar'],
            id: 1,
            manager: {},
            team: [],
            targetCompany: { name: 'Test company' },
            sections: [],
            scopeItemSummary: {
                total: 10,
                completed: 5
            },
            watermarkText: 'watermark'
        };

        onSelected() {
            /* spy */
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, ProjectCardComponent, StatusBadgeComponent, ProgressComponent, MockedDatePipe]
        });

        fixture = TestBed.createComponent(TestComponent);
        comp = fixture.componentInstance;
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
        el = find('kosmos-project-card').nativeElement;

        fixture.detectChanges();
    });

    describe('when no inputs passed', () => {
        beforeEach(() => {
            comp.project = undefined;
            fixture.detectChanges();
        });

        it('should display an empty card', () => {
            expect(find('kosmos-project-card')).toBeDefined();
        });
    });

    describe('when project data passed', () => {
        it('should display a company name element', () => {
            expect(find('.company-name').nativeElement).toBeDefined('Missing company name.');
        });

        it('should display a project name element', () => {
            expect(find('.project-name').nativeElement).toBeDefined('Missing project name.');
        });

        it('should display project name text', () => {
            expect(find('.project-name').nativeElement.textContent.trim()).toEqual(
                comp.project.name,
                'Incorrect project name displayed'
            );
        });

        // TODO: add tests once status badge has been implemented again (from the backend)
        /*it('should display project status badge', () => {
			expect(
				find('kosmos-status-badge').nativeElement,
			).toBeDefined('Missing project status badge in component.');
		});*/

        /*it('should display project status badge with active status', () => {
			expect(
				find('kosmos-status-badge').nativeElement.textContent.trim(),
			).toEqual('active', 'Invalid project status displayed.');
		});*/
        /*
        it('should display scope items and progress', () => {
            // no data available, waiting for API
            pending();
        }); */
    });

    describe('when project card clicked', () => {
        beforeEach(() => {
            spyOn(comp, 'onSelected');
            find('.inner').nativeElement.click();
            fixture.detectChanges();
        });

        it('should call parent controller onSelect method', () => {
            expect(comp.onSelected).toHaveBeenCalledTimes(1);
        });
    });
});
