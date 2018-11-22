import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TasksFilterType } from '@core/enum/tasks-filter-type.enum';
import { MockAssignmentService } from '@core/mocks/project/assigment.mock.service';
import { MockChapterService } from '@core/mocks/project/chapter.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { Project } from '@core/models';
import { Product } from '@core/models/project/product';
import { ScopeItem } from '@core/models/project/scope-item';
import { User } from '@core/models/user';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ChapterService } from '@core/services/project/chapter.service';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { SvgIconComponent } from '@shared/svg-icon/svg-icon.component';
import { AvatarComponent, DxModule } from 'app/shared';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { Router } from '../../../../../node_modules/@angular/router';
import { ChapterComponent } from '../chapter/chapter.component';
import { NewTaskButtonComponent } from '../chapter/new-task-button/new-task-button.component';
import { NewTaskPopupComponent } from '../chapter/new-task-popup/new-task-popup.component';
import { UpDownButtonComponent } from '../chapter/up-down-button/up-down-button.component';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { RenamePopupComponent } from '../rename-popup/rename-popup.component';
import { TaskComponent } from '../task/task.component';
import { WorkflowStatusComponent } from '../task/workflow-status/workflow-status.component';
import { NewChapterButtonComponent } from './new-chapter-button/new-chapter-button.component';
import { NewChapterPopupComponent } from './new-chapter-popup/new-chapter-popup.component';
import { SectionComponent } from './section.component';

let scopeItems: ScopeItem[] = [];

/**
 * two chapters with out tasks
 */
const CHAPTERS: ScopeItem[] = [
    {
        id: 1,
        scopeItemGuid: 'c4dc767f-24a3-4c62-b493-f9a5cbfdbaf5',
        name: 'Chapter 1',
        reportTitle: undefined,
        progressStateId: 1,
        responsibleUser: undefined,
        isSection: false,
        children: [],
        isSelected: true
    },
    {
        id: 2,
        scopeItemGuid: '8adda0e7-66dd-4be3-ad27-701012438486',
        name: 'Chapter 2',
        reportTitle: undefined,
        progressStateId: 1,
        responsibleUser: undefined,
        isSection: false,
        children: [],
        isSelected: true
    }
];

/**
 * two chapters with tasks
 */
const CHAPTERS_WITH_TASKS: ScopeItem[] = [
    {
        id: 1,
        scopeItemGuid: 'c4dc767f-24a3-4c62-b493-f9a5cbfdbaf5',
        name: 'Chapter 1',
        reportTitle: undefined,
        progressStateId: 1,
        responsibleUser: undefined,
        isSection: false,
        children: [
            {
                id: 2,
                scopeItemGuid: undefined,
                name: 'Task 1.1',
                reportTitle: undefined,
                progressStateId: 1,
                responsibleUser: undefined,
                isSection: true,
                children: [],
                isSelected: false
            },
            {
                id: 3,
                scopeItemGuid: undefined,
                name: 'Task 1.2',
                reportTitle: undefined,
                progressStateId: 1,
                responsibleUser: undefined,
                isSection: true,
                children: [],
                isSelected: false
            }
        ],
        isSelected: true
    },
    {
        id: 2,
        scopeItemGuid: '8adda0e7-66dd-4be3-ad27-701012438486',
        name: 'Chapter 2',
        reportTitle: undefined,
        progressStateId: 1,
        responsibleUser: undefined,
        isSection: false,
        children: [
            {
                id: 4,
                scopeItemGuid: undefined,
                name: 'Task 2.1',
                reportTitle: undefined,
                progressStateId: 1,
                responsibleUser: undefined,
                isSection: true,
                children: [],
                isSelected: false
            },
            {
                id: 5,
                scopeItemGuid: undefined,
                name: 'Task 2.2',
                reportTitle: undefined,
                progressStateId: 1,
                responsibleUser: undefined,
                isSection: true,
                children: [],
                isSelected: false
            }
        ],
        isSelected: true
    }
];

const CHAPTER: ScopeItem = {
    id: 1,
    scopeItemGuid: undefined,
    name: 'Chapter 1',
    reportTitle: undefined,
    progressStateId: 1,
    responsibleUser: undefined,
    isSection: false,
    children: [
        {
            id: 2,
            scopeItemGuid: undefined,
            name: 'Task 1.1',
            reportTitle: undefined,
            progressStateId: 1,
            responsibleUser: undefined,
            isSection: true,
            children: [],
            isSelected: false
        }
    ],
    isSelected: true
};

function GetDeclarations(): any[] {
    return [
        SectionComponent,
        ChapterComponent,
        TaskComponent,
        SvgIconComponent,
        AvatarComponent,
        NewChapterButtonComponent,
        NewChapterPopupComponent,
        NewTaskButtonComponent,
        NewTaskPopupComponent,
        RenamePopupComponent,
        DeletePopupComponent,
        UpDownButtonComponent,
        WorkflowStatusComponent
    ];
}

function GetProvider(): any[] {
    const router = { navigate: jasmine.createSpy('navigate') };

    return [
        {
            provide: LocalStorageService,
            useValue: {
                get: function(key: string): any {
                    const usr = new User();
                    usr.email = 'none@kpmg.com';
                    return usr;
                }
            }
        },
        { provide: SharedStorageService, useClass: MockSharedStorageService },
        { provide: AssignmentService, useClass: MockAssignmentService },
        { provide: ChapterService, useClass: MockChapterService },
        {
            provide: ScopeItemService,
            useValue: {
                getChapter(projectGuid: string, productId: string, filter: TasksFilterType): Observable<ScopeItem[]> {
                    return of(scopeItems);
                },
                deleteScopeItem(projectGuid: string, productId: string): Observable<Object> {
                    return of({});
                }
            }
        },
        {
            provide: Router,
            useValue: router
        }
    ];
}

describe('SectionComponent-Scope', () => {
    let component: SectionComponent;
    let fixture: ComponentFixture<SectionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: GetDeclarations(),
            imports: [DxModule],
            providers: GetProvider()
        });

        fixture = TestBed.createComponent(SectionComponent);
        component = fixture.componentInstance;
        component.isMyTasksView = false;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show two chapters when expanded', () => {
        component.scopeItems = CHAPTERS;
        fixture.detectChanges();
        const chapters = fixture.debugElement.queryAll(By.css('kosmos-chapter'));
        expect(chapters).toBeDefined();
        expect(chapters.length).toEqual(2, 'Wrong number of chapters');
    });

    it('showScopeItems should refresh scope items', () => {
        expect(fixture.debugElement.queryAll(By.css('kosmos-chapter')).length).toBe(0);
        scopeItems = CHAPTERS;
        component.showScopeItems(new Product());
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('kosmos-chapter')).length).toBe(2);
    });

    it('without products should hide new chapter button', () => {
        component.showScopeItems(undefined);
        fixture.detectChanges();
        expect(document.getElementsByTagName('kosmos-new-chapter-button').length).toBe(0);
    });

    it('with products should show new chapter button', () => {
        component.showScopeItems({ guid: 'product guid' } as any);
        fixture.detectChanges();
        (document.getElementsByTagName('kosmos-new-chapter-button')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        const popup: NewChapterPopupComponent = fixture.debugElement.query(By.css('kosmos-new-chapter-popup'))
            .componentInstance;
        expect(popup.visible).toBeTruthy();
        expect(popup.productGuid).toBe('product guid');
        spyOn(component, 'requeryChapters');
        spyOn(component, 'closeNewChapterPopup');
        popup.name = 'new chapter name';
        fixture.detectChanges();
        popup.addAndClose();
        expect(component.requeryChapters).toHaveBeenCalled();
        expect(component.closeNewChapterPopup).toHaveBeenCalled();
    });

    it('should open popup on delete', () => {
        component.onDelete(CHAPTER);
        expect(component.itemToDelete).toBe(CHAPTER);
        expect(component.isDeletePopupVisible).toBeTruthy();
    });

    it('should not delete scope item if user clicks "No" in popup', () => {
        spyOn(component, 'delete');
        component.isDeletePopupVisible = true;
        fixture.detectChanges();
        const noButton = document.getElementsByClassName('dx-toolbar-button')[1] as HTMLDivElement;
        noButton.click();
        fixture.whenStable().then(() => {
            expect(component.delete).not.toHaveBeenCalled();
        });
    });

    it('should delete scope item if user clicks "Yes" in popup', () => {
        spyOn(component, 'delete');
        component.isDeletePopupVisible = true;
        fixture.detectChanges();
        const yesButton = document.getElementsByClassName('dx-toolbar-button')[2] as HTMLDivElement;
        yesButton.click();
        fixture.whenStable().then(() => {
            expect(component.delete).toHaveBeenCalled();
        });
    });

    it('should delete chapter', () => {
        spyOn(component['_assignmentService'], 'requery');
        spyOn(component, 'requeryChapters');
        component.itemToDelete = CHAPTER;
        component.delete();
        expect(component['_assignmentService'].requery).toHaveBeenCalled();
        expect(component.requeryChapters).toHaveBeenCalled();
    });

    it('should delete task', () => {
        spyOn(component['_assignmentService'], 'requery');
        component.itemToDelete = CHAPTER.children[0];
        component.delete();
        expect(component['_assignmentService'].requery).toHaveBeenCalled();
    });

    it('should disable up buttton for top item and down button on lst item', () => {
        scopeItems = CHAPTERS;
        component.showScopeItems(new Product());
        fixture.detectChanges();

        const enabledButtons = document.getElementsByClassName('chapterUpDownEnabled') as HTMLCollectionOf<
            HTMLDivElement
        >;
        const disabledButtons = document.getElementsByClassName('chapterUpDownDisabled') as HTMLCollectionOf<
            HTMLDivElement
        >;
        expect(enabledButtons[0].id == 'MoveDownButton');
        expect(enabledButtons[1].id == 'MoveUpButton');
        expect(disabledButtons[0].id == 'MoveUpButton');
        expect(disabledButtons[1].id == 'MoveDownButton');
    });

    it('should move second chapter to first position on click', () => {
        scopeItems = CHAPTERS;
        component.showScopeItems(new Product());
        fixture.detectChanges();

        const enabledButtons = document.getElementsByClassName('chapterUpDownEnabled') as HTMLCollectionOf<
            HTMLDivElement
        >;

        enabledButtons[1].click();
        expect((component.scopeItems[0].name = 'Chapter 2'));
    });

    it('should call chapter service when up or down button is clicked', () => {
        spyOn(component['_chapterService'], 'swap');
        scopeItems = CHAPTERS;
        component.showScopeItems(new Product());
        fixture.detectChanges();

        const enabledButtons = document.getElementsByClassName('chapterUpDownEnabled') as HTMLCollectionOf<
            HTMLDivElement
        >;
        enabledButtons[0].click();
        expect(component['_chapterService'].swap).toHaveBeenCalled();
    });
});

describe('SectionComponent-Tasks', () => {
    let component: SectionComponent;
    let fixture: ComponentFixture<SectionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: GetDeclarations(),
            imports: [DxModule],
            providers: GetProvider()
        });

        fixture = TestBed.createComponent(SectionComponent);
        component = fixture.componentInstance;
        component.isMyTasksView = true;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should hide new chapter button', () => {
        expect(document.getElementsByTagName('kosmos-new-chapter-button').length).toBe(0);
    });

    it('should show placeholder text when chapter has no tasks', () => {
        component.scopeItems = CHAPTERS;
        fixture.detectChanges();
        expect(document.getElementsByTagName('h3').length).toBeGreaterThanOrEqual(1);
    });

    it('should not show placeholder text when chapter has tasks', () => {
        component.scopeItems = CHAPTERS_WITH_TASKS;
        component.isMyTasksView = true;
        fixture.detectChanges();
        expect(document.getElementsByTagName('h3').length).toBe(0);
    });

    it('should get chapters form ScopeItemService on call requeryChapters', () => {
        let scopeItemService;
        const projectGuid: string = 'Foo';
        const productGuid: string = 'Bar';
        scopeItemService = TestBed.get(ScopeItemService);
        spyOn(scopeItemService, 'getChapter').and.returnValue({ subscribe: () => {} });
        component.selectedProject = new Project();
        component.selectedProject.projectGuid = projectGuid;
        component.product = new Product();
        component.product.guid = productGuid;
        component.filterInfo = { filterType: TasksFilterType.Assigned, statusFilter: [] };
        component.requeryChapters();
        fixture.detectChanges();
        expect(scopeItemService.getChapter).toHaveBeenCalledWith(projectGuid, productGuid, {
            filterType: TasksFilterType.Assigned,
            statusFilter: []
        });
    });
});
