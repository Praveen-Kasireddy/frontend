import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksFilterType } from '@core/enum/tasks-filter-type.enum';
import { MockAssignmentService } from '@core/mocks/project/assigment.mock.service';
import { MockChapterService } from '@core/mocks/project/chapter.mock.service';
import { MockScopeItemService } from '@core/mocks/project/mock-scope-item-service.component';
import { MockProductButtonResizeService } from '@core/mocks/project/product-button-resize.mock.service';
import { MockProjectService } from '@core/mocks/project/project.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { Product } from '@core/models/project/product';
import { Project } from '@core/models/project/project';
import { User } from '@core/models/user';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ChapterService } from '@core/services/project/chapter.service';
import { ProductButtonResizeService } from '@core/services/project/product-button-resize.service';
import { ProductService } from '@core/services/project/product.service';
import { ProjectService } from '@core/services/project/project.service';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import {
    AvatarComponent,
    DxModule,
    HeaderComponent,
    SidebarComponent,
    SvgIconComponent,
    TabButtonComponent
} from '../../shared';
import { ChapterComponent } from './chapter/chapter.component';
import { NewTaskButtonComponent } from './chapter/new-task-button/new-task-button.component';
import { NewTaskPopupComponent } from './chapter/new-task-popup/new-task-popup.component';
import { UpDownButtonComponent } from './chapter/up-down-button/up-down-button.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { DeliverableListComponent } from './deliverable-list/deliverable-list.component';
import { NewProductButtonComponent } from './new-product-button/new-product-button.component';
import { ProductButtonComponent } from './product-button/product-button.component';
import { ProductRemoveButtonComponent } from './product-button/product-remove-button/product-remove-button.component';
import { ProjectScopeComponent } from './project-scope.component';
import { RenamePopupComponent } from './rename-popup/rename-popup.component';
import { NewChapterButtonComponent } from './section/new-chapter-button/new-chapter-button.component';
import { NewChapterPopupComponent } from './section/new-chapter-popup/new-chapter-popup.component';
import { SectionComponent } from './section/section.component';
import { TaskComponent } from './task/task.component';
import { WorkflowStatusComponent } from './task/workflow-status/workflow-status.component';
import { TasksFilterBarComponent } from './tasks-filter-bar/tasks-filter-bar.component';
import { TeamMemberAssignmentListComponent } from './team-member-assignment-list/team-member-assignment-list.component';

const products: Product[] = [
    { id: 1, guid: 'guid1', name: 'name 1', path: 'path 1' },
    { id: 2, guid: 'guid2', name: 'name 2', path: 'path 2' },
    { id: 3, guid: 'guid3', name: 'name 3', path: 'path 3' }
];
const project: Project = new Project();

describe('ProjectScopeComponent-Scope', () => {
    let component: ProjectScopeComponent;
    let fixture: ComponentFixture<ProjectScopeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: GetDeclarations(),
            imports: [DxModule],
            providers: GetProvider('/scope')
        });
        fixture = TestBed.createComponent(ProjectScopeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should load products', () => {
        expect(component.selectedProduct).toBe(products[0]);
        const buttons = document.getElementsByTagName('kosmos-product-button');
        expect(buttons.length).toBe(3);
        expect(buttons[0].getElementsByClassName('button-not-selected').length).toBe(0);
        expect(buttons[0].getElementsByClassName('button-was-selected').length).toBe(1);
        expect(buttons[1].getElementsByClassName('button-not-selected').length).toBe(1);
        expect(buttons[1].getElementsByClassName('button-was-selected').length).toBe(0);
    });

    it('initially the filter should be none', () => {
        expect(component.filterInfo.filterType).toEqual(TasksFilterType.None);
    });

    it('on filter set should call the requeryChapters of section', () => {
        spyOn(component.section, 'requeryChapters');
        component.onSetFilter({ filterType: TasksFilterType.UnassignedActive, statusFilter: [] });
        fixture.detectChanges();
        expect(component.section.requeryChapters).toHaveBeenCalled();
    });
});

describe('ProjectScopeComponent-Tasks', () => {
    let component: ProjectScopeComponent;
    let fixture: ComponentFixture<ProjectScopeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: GetDeclarations(),
            imports: [DxModule],
            providers: GetProvider('/tasks')
        });
        fixture = TestBed.createComponent(ProjectScopeComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
        component.isMyTasksView = true;
    });

    it('should manage products', () => {
        expect(component.selectedProduct).toBe(products[0]);
        const buttons = document.getElementsByTagName('kosmos-product-button');
        expect(buttons.length).toBe(3);
        expect(buttons[0].getElementsByClassName('button-not-selected').length).toBe(0);
        expect(buttons[0].getElementsByClassName('button-was-selected').length).toBe(1);
        expect(buttons[1].getElementsByClassName('button-not-selected').length).toBe(1);
        expect(buttons[1].getElementsByClassName('button-was-selected').length).toBe(0);
        (document.getElementsByTagName('kosmos-product-remove-button')[1] as HTMLElement).click();
        fixture.detectChanges();
    });

    it('should not have a remove product button', () => {
        component.isMyTasksView = true;
        fixture.detectChanges();
        expect(document.getElementsByTagName('kosmos-product-remove-button').length).toBe(0);
    });

    it('should not have an add product button', () => {
        component.isMyTasksView = true;
        fixture.detectChanges();
        expect(document.getElementsByTagName('kosmos-new-product-but').length).toBe(0);
    });
});

function GetProvider(url: string): any[] {
    return [
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
            useClass: MockScopeItemService
        },
        {
            provide: LocalStorageService,
            useValue: {
                get: function(key: string): any {
                    const usr = new User();
                    usr.email = 'tt@kpmg.com';
                    usr.gpid = 'KPMG00000006';
                    usr.firstName = 'Toni';
                    usr.lastName = 'Tester';
                    return usr;
                }
            }
        },
        {
            provide: Router,
            useValue: {
                url: function(): string {
                    return url;
                }
            }
        },
        {
            provide: ProductService,
            useValue: {
                getActive(projectGuid: string): Observable<Product[]> {
                    return of(products);
                },
                deactivate(projectGuid: string, product: Product): Observable<Object> {
                    products.splice(products.indexOf(product), 1);
                    return of([]);
                }
            }
        },
        { provide: ChapterService, useClass: MockChapterService },
        { provide: ProjectService, useClass: MockProjectService },
        { provide: AssignmentService, useClass: MockAssignmentService },
        { provide: ProductButtonResizeService, useClass: MockProductButtonResizeService },
        { provide: SharedStorageService, useClass: MockSharedStorageService },
        { provide: ActivatedRoute, useValue: { data: of([]) } }
    ];
}
function GetDeclarations(): any[] {
    return [
        AvatarComponent,
        ChapterComponent,
        DeletePopupComponent,
        HeaderComponent,
        NewProductButtonComponent,
        NewTaskButtonComponent,
        NewTaskPopupComponent,
        ProductButtonComponent,
        ProductRemoveButtonComponent,
        ProjectScopeComponent,
        SectionComponent,
        SvgIconComponent,
        TaskComponent,
        RenamePopupComponent,
        DeliverableListComponent,
        NewChapterPopupComponent,
        NewChapterButtonComponent,
        TeamMemberAssignmentListComponent,
        SidebarComponent,
        TasksFilterBarComponent,
        TabButtonComponent,
        UpDownButtonComponent,
        WorkflowStatusComponent
    ];
}
