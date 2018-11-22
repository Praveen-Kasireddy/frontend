import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProjectListComponent } from './project-list.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Project } from '@core/models/project/project';
import { Router } from '@angular/router';
import { ProjectService } from '@core/services/project/project.service';
import { MockProjectService } from '@core/mocks/project/project.mock.service';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { WidgetService } from '@core/services/widget/widget.service';

describe('ProjectsCardListComponent', () => {
    let fixture: ComponentFixture<ProjectListComponent>;
    const router = {
        navigate: jasmine.createSpy('navigate')
    };
    const widgetService = jasmine.createSpyObj(['startDrag', 'accept']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectListComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                LocalStorageService,
                SharedStorageService,
                { provide: Router, useValue: router },
                { provide: ProjectService, useValue: MockProjectService },
                { provide: WidgetService, useValue: widgetService }
            ]
        });

        fixture = TestBed.createComponent(ProjectListComponent);
    });

    it('should navigate to tasks', (): void => {
        const project = new Project();
        project.projectGuid = '0000';
        fixture.componentInstance.projectSelected(project);

        expect(router.navigate).toHaveBeenCalledWith(['/projects', project.projectGuid, 'tasks']);
    });
});
