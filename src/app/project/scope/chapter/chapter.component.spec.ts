import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockAssignmentService } from '@core/mocks/project/assigment.mock.service';
import { NamedUser } from '@core/models/configuration/named-user';
import { ChapterUpdateModel } from '@core/models/project/chapter-update-model';
import { CreateTaskModel } from '@core/models/project/create-task-model';
import { Project } from '@core/models/project/project';
import { ScopeItem } from '@core/models/project/scope-item';
import { ScopeItemUpdateModel } from '@core/models/project/scope-item-update-model';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ChapterService } from '@core/services/project/chapter.service';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { AvatarComponent, DxModule, SvgIconComponent } from '@shared/index';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { TaskComponent } from '../task/task.component';
import { ChapterComponent } from './chapter.component';
import { NewTaskButtonComponent } from './new-task-button/new-task-button.component';
import { NewTaskPopupComponent } from './new-task-popup/new-task-popup.component';

function chapterObject(first: boolean, second: boolean): ScopeItem {
    return {
        id: 1,
        scopeItemGuid: 'c4dc767f-24a3-4c62-b493-f9a5cbfdbaf5',
        name: 'Chapter 1',
        reportTitle: undefined,
        progressStateId: 1,
        responsibleUser: undefined,
        isSection: false,
        isSelected: true,
        children: [
            {
                id: 2,
                scopeItemGuid: '14a6c815-a3c5-4b0f-962d-7b26f5d3f204',
                name: 'Task 1.1',
                reportTitle: undefined,
                progressStateId: 1,
                responsibleUser: {
                    id: 1,
                    gpid: 'KPMG00000006',
                    salutation: 'Mr.',
                    firstName: 'Test',
                    lastName: 'User',
                    email: 'test.user@email.com',
                    isActive: true,
                    isAdmin: false
                },
                isSection: false,
                children: [],
                isSelected: first
            },
            {
                id: 3,
                scopeItemGuid: 'a0735986-b53b-47af-b794-da30a49fc45a',
                name: 'Task 1.2',
                reportTitle: undefined,
                progressStateId: 1,
                responsibleUser: undefined,
                isSection: false,
                children: [],
                isSelected: second
            }
        ]
    };
}

xdescribe('ChapterComponent', () => {
    let component: ChapterComponent;
    let fixture: ComponentFixture<ChapterComponent>;
    const project: Project = new Project();
    let lastUpdate: ScopeItemUpdateModel[];
    let assignmentService: AssignmentService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChapterComponent,
                NewTaskButtonComponent,
                NewTaskPopupComponent,
                TaskComponent,
                SvgIconComponent,
                AvatarComponent
            ],
            imports: [DxModule, RouterTestingModule],
            providers: [
                {
                    provide: SharedStorageService,
                    useValue: {
                        get: function(key: string): Project {
                            return project;
                        }
                    }
                },
                {
                    provide: ScopeItemService,
                    useValue: {
                        create(projectGuid: string, task: CreateTaskModel): Observable<Object> {
                            return of({});
                        },
                        mapItemToUpdateModel(item: ScopeItem): ScopeItemUpdateModel {
                            return { id: item.id, name: item.name, isSelected: item.isSelected };
                        },
                        putScopeItems(projectGuid: string, models: ScopeItemUpdateModel[]): Observable<Object> {
                            lastUpdate = models;
                            return of({});
                        }
                    }
                },
                {
                    provide: AssignmentService,
                    useClass: MockAssignmentService
                },
                {
                    provide: ChapterService,
                    useValue: {
                        putChapter(projectGuid: string, model: ChapterUpdateModel): Observable<Object> {
                            return of(new Object());
                        },
                        toogleAssignment(
                            projectGuid: string,
                            chapterId: number,
                            userGpid: string
                        ): Observable<ScopeItem[]> {
                            const result = chapterObject(true, true);
                            result.children[0].name = 'task returned by toogleAssignment';
                            return of(result.children);
                        }
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(ChapterComponent);
        component = fixture.componentInstance;
        assignmentService = TestBed.get(AssignmentService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disable delete menu item for not individually created chapters', () => {
        component.chapter = chapterObject(false, false);
        fixture.detectChanges();
        expect(component.deleteItem.disabled).toBeTruthy();
    });

    describe('on mixed tasks', () => {
        beforeEach(() => {
            component.chapter = chapterObject(false, true);
            fixture.detectChanges();
        });

        describe('chapter is assigned', () => {
            it('should show chapters name', () => {
                const label = fixture.debugElement.queryAll(By.css('label'))[1].nativeElement;
                expect(label.textContent.trim()).toEqual(component.chapter.name);
            });
        });

        describe('checks the number of tasks created', () => {
            it('should create two task item', () => {
                const elems = fixture.debugElement.queryAll(By.css('kosmos-task'));
                expect(elems).toBeDefined();
                expect(elems.length).toEqual(2, 'Wrong number of tasks');
            });
        });

        it('should deselect all tasks clicking on header', () => {
            clickOnHeader();
            expectAllTasksToBe(false);
        });

        it('should manage tasks', () => {
            expect(component.selectedProject).toBe(project);
            const anchor = document.getElementsByClassName('menuAnchor')[0] as HTMLLabelElement;
            expect(anchor.id).toBe('menuAnchor_chapter' + component.chapter.id);

            expect(document.getElementsByClassName('individually-added').length).toBe(0);

            anchor.click();
            fixture.detectChanges();
            expect(selectAllDisabled()).toBeFalsy();
            expect(deselectAllDisabled()).toBeFalsy();

            selectAllItem().click();
            fixture.detectChanges();
            expect(selectAllDisabled()).toBeTruthy();
            expect(deselectAllDisabled()).toBeFalsy();
            expectAllTasksToBe(true);

            spyOn(assignmentService, 'requery');
            anchor.click();
            fixture.detectChanges();
            deselectAllItem().click();
            fixture.detectChanges();
            expect(selectAllDisabled()).toBeFalsy();
            expect(deselectAllDisabled()).toBeTruthy();
            expectAllTasksToBe(false);
            expect(assignmentService.requery).toHaveBeenCalled();
        });

        it('should toogle assignment', () => {
            assignmentService.selectedUser = new NamedUser();
            spyOn(assignmentService, 'requery');
            component.toogleSelection();
            fixture.detectChanges();
            expect(document.getElementsByTagName('kosmos-task')[0].getElementsByClassName('name')[0].innerHTML).toBe(
                'task returned by toogleAssignment'
            );
            expect(assignmentService.requery).toHaveBeenCalled();
        });

        it('should manage new task', () => {
            (document.getElementsByTagName('kosmos-new-task-button')[0] as HTMLDivElement).click();
            fixture.detectChanges();
            const popup: NewTaskPopupComponent = fixture.debugElement.query(By.css('kosmos-new-task-popup'))
                .componentInstance;
            expect(popup.visible).toBeTruthy();
            expect(popup.chapterId).toBe(component.chapter.id);
            spyOn(component, 'requeryTasks');
            spyOn(component, 'closeNewTaskPopup');
            popup.name = 'new chapter name';
            fixture.detectChanges();
            popup.addAndClose();
            expect(component.requeryTasks).toHaveBeenCalled();
            expect(component.closeNewTaskPopup).toHaveBeenCalled();
        });

        it('should disable delete menu item for individually created chapters', () => {
            component.chapter.scopeItemGuid = undefined;
            expect(component.deleteItem.disabled).toBeTruthy();
        });
    });

    describe('on complete deselected tasks', () => {
        beforeEach(() => {
            component.chapter = chapterObject(false, false);
            fixture.detectChanges();
        });

        it('should select all tasks clicking on header', () => {
            clickOnHeader();
            expectAllTasksToBe(true);
        });

        it('should enable delete menu item for individually created chapters and only individually created tasks', () => {
            component.chapter.scopeItemGuid = undefined;
            component.chapter.children.forEach(t => (t.scopeItemGuid = undefined));
            component.ngOnInit();
            fixture.detectChanges();
            expect(component.deleteItem.disabled).toBeFalsy();
        });

        it('should disable delete menu item for individually created chapters and mixed tasks', () => {
            component.chapter.scopeItemGuid = undefined;
            component.chapter.children[0].scopeItemGuid = undefined;
            component.chapter.children[1].scopeItemGuid = '14a6c815-a3c5-4b0f-962d-7b26f5d3f205';
            fixture.detectChanges();
            expect(component.deleteItem.disabled).toBeTruthy();
        });
    });

    describe('on individually added', () => {
        beforeEach(() => {
            component.chapter = {
                id: 1,
                scopeItemGuid: undefined,
                name: 'Chapter 1',
                reportTitle: undefined,
                progressStateId: 1,
                responsibleUser: undefined,
                isSection: false,
                isSelected: true,
                children: []
            };
            fixture.detectChanges();
        });

        it('should be present the c label', () => {
            expect(document.getElementsByClassName('individually-added').length).toBe(1);
        });

        it('should enable delete menu item for individually created chapters', () => {
            expect(component.deleteItem.disabled).toBeFalsy();
        });

        it('should disable delete menu item for individually created chapters and selected tasks', () => {
            component.chapter.children = [
                {
                    id: 2,
                    scopeItemGuid: undefined,
                    name: 'Task 1.1',
                    reportTitle: undefined,
                    progressStateId: 1,
                    responsibleUser: {
                        id: 1,
                        gpid: 'KPMG00000006',
                        salutation: 'Mr.',
                        firstName: 'Test',
                        lastName: 'User',
                        email: 'test.user@email.com',
                        isActive: true,
                        isAdmin: false
                    },
                    isSection: false,
                    children: [],
                    isSelected: true
                }
            ];
            component.ngOnInit();
            fixture.detectChanges();
            expect(component.deleteItem.disabled).toBeTruthy();
        });

        it('fires event if delete menu item is clicked', () => {
            const menuButton = fixture.debugElement.query(By.css('.menuAnchor'));
            menuButton.nativeElement.click();

            spyOn(component.delete, 'emit');
            const menuItemElem = document.getElementsByClassName('dx-menu-item')[1] as HTMLLIElement;
            menuItemElem.click();

            expect(component.delete.emit).toHaveBeenCalledWith(component.chapter);
        });
    });

    function clickOnHeader() {
        (fixture.debugElement.queryAll(By.css('label'))[1].nativeElement as HTMLDivElement).click();
        fixture.detectChanges();
    }
    function deepCopy(obj) {
        let copy;
        if (null == obj || 'object' != typeof obj) {
            return obj;
        }
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        if (obj instanceof Array) {
            copy = [];
            for (let i = 0, len = obj.length; i < len; i++) {
                copy[i] = deepCopy(obj[i]);
            }
            return copy;
        }
        if (obj instanceof Object) {
            copy = {};
            for (const attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = deepCopy(obj[attr]);
                }
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    }

    function expectAllTasksToBe(selected: boolean) {
        const classToSearch = selected ? 'active' : 'deactive';
        const rightTasks = Array.from(document.getElementsByTagName('kosmos-task')).filter(
            t => t.getElementsByClassName(classToSearch).length > 0
        ).length;
        expect(rightTasks).toBe(2);
        expect(lastUpdate.every(i => i.isSelected == selected));
    }

    function deselectAllDisabled(): boolean {
        return menuItemDisabled('Deselect all');
    }

    function deselectAllItem(): HTMLDivElement {
        return menuItem('Deselect all');
    }

    function menuItem(text: string): HTMLDivElement {
        return Array.from(document.getElementsByClassName('dx-menu-item-text')).find(i => i.innerHTML == text)
            .parentElement.parentElement as HTMLDivElement;
    }

    function menuItemDisabled(text: string): boolean {
        return menuItem(text).className.indexOf('dx-state-disabled') >= 0;
    }

    function selectAllDisabled(): boolean {
        return menuItemDisabled('Select all');
    }

    function selectAllItem(): HTMLDivElement {
        return menuItem('Select all');
    }
});
