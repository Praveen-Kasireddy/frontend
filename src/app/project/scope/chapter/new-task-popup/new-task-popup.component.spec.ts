import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTaskModel } from '@core/models/project/create-task-model';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { DxModule } from '@shared/dx.module';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { NewTaskPopupComponent } from './new-task-popup.component';

describe('NewTaskPopupComponent', () => {
    let component: NewTaskPopupComponent;
    let fixture: ComponentFixture<NewTaskPopupComponent>;
    let taskCreated: CreateTaskModel;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewTaskPopupComponent],
            imports: [DxModule],
            providers: [
                {
                    provide: SharedStorageService,
                    useValue: {
                        get(name: string): any {
                            return { projectGuid: 'project guid' };
                        }
                    }
                },
                {
                    provide: ScopeItemService,
                    useValue: {
                        create(projectGuid: string, task: CreateTaskModel): Observable<Object> {
                            taskCreated = task;
                            return of({});
                        }
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(NewTaskPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should manage correctly all edit cycles', () => {
        component.chapterId = 123;
        component.projectGuid = 'project guid';
        component.visible = true;
        fixture.detectChanges();
        button('Add another').click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBeGreaterThan(0);

        component.name = 'new task';
        spyOn(component.closeEvent, 'emit');
        spyOn(component.taskCreated, 'emit');
        fixture.detectChanges();
        button('Add another').click();
        fixture.detectChanges();
        expect(taskCreated.name).toBe('new task');
        expect(taskCreated.chapterId).toBe(123);
        expect(component.taskCreated.emit).toHaveBeenCalled();
        expect(component.closeEvent.emit).not.toHaveBeenCalled();
        expect(component.name).toBe('');
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(0);

        button('Done').click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBeGreaterThan(0);
        component.name = 'another new task';
        fixture.detectChanges();
        button('Done').click();
        fixture.detectChanges();
        expect(component.taskCreated.emit).toHaveBeenCalledTimes(2);
        expect(component.closeEvent.emit).toHaveBeenCalled();
        expect(component.name).toBe('');
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(0);
    });

    it('on close should call closeEvent emit', () => {
        component.visible = true;
        fixture.detectChanges();
        spyOn(component.closeEvent, 'emit');
        fixture.detectChanges();
        (document.getElementsByClassName('dx-closebutton')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(component.closeEvent.emit).toHaveBeenCalled();
    });

    function button(name: string): HTMLSpanElement {
        return Array.from(document.getElementsByClassName('dx-button-text')).find(
            e => e.innerHTML == name
        ) as HTMLSpanElement;
    }
});
