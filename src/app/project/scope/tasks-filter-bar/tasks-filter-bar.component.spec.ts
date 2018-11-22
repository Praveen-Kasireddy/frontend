import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabButtonComponent } from '../../../shared';
import { StatusFilterButtonInfo } from '../../../shared/project-scope/status-filter-button-info';
import { TasksFilterBarComponent } from './tasks-filter-bar.component';

describe('TasksFilterBarComponent', () => {
    let component: TasksFilterBarComponent;
    let fixture: ComponentFixture<TasksFilterBarComponent>;

    function statusFilterButtons(): StatusFilterButtonInfo[] {
        return [
            { id: 1, caption: 'Not Started', isActive: true },
            { id: 2, caption: 'In Progress', isActive: true },
            { id: 3, caption: 'Submitted to review', isActive: true },
            { id: 4, caption: 'Done', isActive: true }
        ];
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TasksFilterBarComponent, TabButtonComponent]
        });
        fixture = TestBed.createComponent(TasksFilterBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.filterButtonInfos = statusFilterButtons();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle status filter not started', () => {
        component.toggleStateFilter(1);
        fixture.detectChanges();
        expect(component.filterButtonInfos[0].isActive).toBe(false);
    });

    it('should toggle status filter in progress', () => {
        component.toggleStateFilter(2);
        fixture.detectChanges();
        expect(component.filterButtonInfos[1].isActive).toBe(false);
    });

    it('should toggle status filter submitted', () => {
        component.toggleStateFilter(3);
        fixture.detectChanges();
        expect(component.filterButtonInfos[2].isActive).toBe(false);
    });

    it('should toggle status filter done', () => {
        component.toggleStateFilter(4);
        fixture.detectChanges();
        expect(component.filterButtonInfos[3].isActive).toBe(false);
    });

    it('should emit the event', () => {
        spyOn(component.filterChanged, 'emit');
        component.toggleStateFilter(4);
        fixture.detectChanges();
        expect(component.filterChanged.emit).toHaveBeenCalled();
    });
});
