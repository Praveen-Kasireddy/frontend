import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockAssignmentService } from '@core/mocks/project/assigment.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { ScopeItem } from '@core/models/project/scope-item';
import { ScopeItemUpdateModel } from '@core/models/project/scope-item-update-model';
import { TaskAssignmentModel } from '@core/models/project/task-assignment-model';
import { User } from '@core/models/user';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { AvatarComponent, SvgIconComponent } from '@shared/index';
import { DxContextMenuComponent } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { TaskComponent } from './task.component';
import { WorkflowStatusComponent } from './workflow-status/workflow-status.component';

const TASK_OBJECT: ScopeItem = {
    id: 1,
    scopeItemGuid: 'c4dc767f-24a3-4c62-b493-f9a5cbfdbaf5',
    name: 'Task 1.1',
    reportTitle: undefined,
    progressStateId: 1,
    responsibleUser: undefined,
    isSection: false,
    children: [],
    isSelected: false
};

const INDIVIDUAL_TASK_OBJECT: ScopeItem = {
    id: 2,
    scopeItemGuid: undefined,
    name: 'Task 1.1 (individual)',
    reportTitle: undefined,
    progressStateId: 1,
    responsibleUser: undefined,
    isSection: false,
    children: [],
    isSelected: false
};

xdescribe('TaskComponent', () => {
    let component: TaskComponent;
    let fixture: ComponentFixture<TaskComponent>;
    const taskFromToogleAssignment: ScopeItem = new ScopeItem();
    const oneUser: User = new User();
    oneUser.firstName = 'one';
    oneUser.lastName = 'user';
    const anotherUser: User = new User();
    anotherUser.firstName = 'another';
    anotherUser.lastName = 'user';
    let assignmentService: AssignmentService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, BrowserTransferStateModule],
            declarations: [
                TaskComponent,
                AvatarComponent,
                SvgIconComponent,
                DxContextMenuComponent,
                WorkflowStatusComponent
            ],
            providers: [
                {
                    provide: ScopeItemService,
                    useValue: {
                        getChapter(projectGuid: string, productId: string): Observable<ScopeItem[]> {
                            return of([]);
                        },
                        mapItemToUpdateModel(item: ScopeItem): ScopeItemUpdateModel {
                            return { id: item.id, name: item.name, isSelected: item.isSelected };
                        },
                        putScopeItems(projectGuid: string, models: ScopeItemUpdateModel[]): Observable<Object> {
                            return of({});
                        },
                        toogleAssignment(projectGuid: string, model: TaskAssignmentModel): Observable<ScopeItem> {
                            return of(taskFromToogleAssignment);
                        },
                        deleteScopeItem(projectGuid: string, productId: string): Observable<Object> {
                            return of({});
                        }
                    }
                },
                {
                    provide: SharedStorageService,
                    useClass: MockSharedStorageService
                },
                {
                    provide: AssignmentService,
                    useClass: MockAssignmentService
                }
            ]
        });
        fixture = TestBed.createComponent(TaskComponent);
        assignmentService = TestBed.get(AssignmentService);
        component = fixture.componentInstance;
        component.task = TASK_OBJECT;
        component.chapterName = 'test';
        component.task.isSelected = false;
        component.task.responsibleUser = undefined;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show task name', () => {
        const label = fixture.debugElement.queryAll(By.css('label'))[1].nativeElement;
        expect(label.textContent.trim()).toEqual(TASK_OBJECT.name);
    });

    it('should change isSelected', () => {
        component.chapterName = 'test';
        expect(component.task.isSelected).toBeFalsy();
        component.changeStatus();
        expect(component.task.isSelected).toBeTruthy();
    });

    it('should enable delete menu item for individually created tasks', () => {
        component.task = INDIVIDUAL_TASK_OBJECT;
        component.chapterName = 'test';
        fixture.detectChanges();
        component.enableMenuItems();
        expect(component.deleteItem.disabled).toBeFalsy();
    });

    it('should disable delete menu item for not individually created tasks', () => {
        component.task = TASK_OBJECT;
        component.chapterName = 'test';
        fixture.detectChanges();
        component.enableMenuItems();
        expect(component.deleteItem.disabled).toBeTruthy();
    });

    it('if waiting for response should not accept clicks', () => {
        component.waitingResponse = true;
        const scopeItemService = TestBed.get(ScopeItemService);
        spyOn(scopeItemService, 'toogleAssignment');
        spyOn(scopeItemService, 'putScopeItems');
        component.changeStatus();
        expect(scopeItemService.toogleAssignment).not.toHaveBeenCalled();
        expect(scopeItemService.putScopeItems).not.toHaveBeenCalled();
    });

    xit('fires event if delete menu item is clicked', () => {
        component.task = INDIVIDUAL_TASK_OBJECT;
        component.chapterName = 'test';
        component.ngOnInit();

        const menuButton = fixture.debugElement.query(By.css('.menuAnchor'));
        menuButton.nativeElement.click();

        spyOn(component.taskDelete, 'emit');
        const menuItem = document.getElementsByClassName('dx-menu-item')[1] as HTMLLIElement;
        menuItem.click();

        expect(component.taskDelete.emit).toHaveBeenCalledWith(component.task);
    });

    it('with selected user should activate and assign user to the task', () => {
        assignmentService.selectedUser = { gpid: 'oneUser', fullName: 'one user', roleId: 1 };
        taskFromToogleAssignment.responsibleUser = oneUser;
        spyOn(assignmentService, 'requery');
        clickTask();
        expectTaskToBe('active');
        expect(component.task.isSelected).toBeTruthy();
        expectAvatarToShowUser('OUS');
        expect(assignmentService.requery).toHaveBeenCalled();
    });

    it('with selected user should remove user from the task if it was already assigned to it', () => {
        component.task.responsibleUser = oneUser;
        fixture.detectChanges();
        assignmentService.selectedUser = { gpid: 'oneUser', fullName: 'one user', roleId: 1 };
        taskFromToogleAssignment.responsibleUser = undefined;
        spyOn(assignmentService, 'requery');
        clickTask();
        expectTaskToBe('active');
        expect(component.task.isSelected).toBeTruthy();
        expectAvatarToShowUser(undefined);
        expect(assignmentService.requery).toHaveBeenCalled();
    });

    xit('without selected user should activate a deactivated task', () => {
        clickTask();
        expectTaskToBe('active');
        expect(component.task.isSelected).toBeTruthy();
        expectAvatarToShowUser(undefined);
    });

    it('without selected user should deactivate an active task', () => {
        component.task.isSelected = true;
        fixture.detectChanges();
        clickTask();
        expectTaskToBe('deactive');
        expect(component.task.isSelected).toBeFalsy();
        expectAvatarToShowUser(undefined);
    });

    function clickTask() {
        (document.getElementsByClassName('body')[0] as HTMLDivElement).click();
        fixture.detectChanges();
    }

    function expectAvatarToShowUser(abbreviation: string) {
        if (abbreviation) {
            expect(document.getElementsByTagName('abbr')[0].innerHTML).toBe(abbreviation);
        } else {
            expect(document.getElementsByClassName('svg-icon').length).toBe(1);
        }
    }

    function expectTaskToBe(className: string) {
        const div = document.getElementsByClassName('inner')[0] as HTMLDivElement;
        if (!div.classList.contains(className)) {
            console.log(div.classList);
        }
        expect(div.classList).toContain(className);
    }
});
