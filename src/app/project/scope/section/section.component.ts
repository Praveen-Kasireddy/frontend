import { ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '@core/models/project/product';
import { Project } from '@core/models/project/project';
import { ScopeItem } from '@core/models/project/scope-item';
import { User } from '@core/models/user';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ChapterService } from '@core/services/project/chapter.service';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { TasksFilterInfo } from '../../../shared/project-scope/tasks-filer-info';
import { ChapterComponent } from '../chapter/chapter.component';

@Component({
    selector: 'kosmos-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
    @ViewChildren(ChapterComponent)
    chapters: QueryList<ChapterComponent>;
    product: Product;
    scopeItems: ScopeItem[] = [];
    selectedProject: Project;
    errorMessage: string;
    isRenamePopupVisible: boolean = false;
    isNewChapterPopupVisible: boolean = false;
    isDeletePopupVisible: boolean = false;
    newName: string = '';
    itemToRename: ScopeItem;
    itemToDelete: ScopeItem;
    currentUser: User;
    @Input()
    isMyTasksView: boolean;
    @Input()
    filterInfo: TasksFilterInfo;

    // tslint:disable-next-line:max-line-length
    constructor(
        private _sharedStorageService: SharedStorageService,
        private _scopeItemService: ScopeItemService,
        private _chapterService: ChapterService,
        private localStorageService: LocalStorageService,
        private _assignmentService: AssignmentService,
        private _ref: ChangeDetectorRef
    ) {
        this.currentUser = this.localStorageService.get('currentUser');
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.showScopeItems(this.product);
    }

    closeRenamePopup() {
        this.isRenamePopupVisible = false;
    }

    closeNewChapterPopup() {
        this.isNewChapterPopupVisible = false;
    }

    closeDeletePopup(event: any) {
        this.isDeletePopupVisible = false;
        if (event) {
            this.delete();
        }
    }

    openNewChapterPopup() {
        this.isNewChapterPopupVisible = true;
    }

    showScopeItems(product: Product) {
        this.product = product;
        this.requeryChapters();
    }

    reSortItems(srcIdx: number, dstIdx: number) {
        if (this.scopeItems != undefined) {
            const sortedArray: ScopeItem[] = new Array(this.scopeItems.length);

            for (let i = 0; i < this.scopeItems.length; i++) {
                if (i != srcIdx && i != dstIdx) {
                    sortedArray[i] = this.scopeItems[i];
                }
            }
            sortedArray[dstIdx] = this.scopeItems[srcIdx];
            sortedArray[srcIdx] = this.scopeItems[dstIdx];
            this.scopeItems = sortedArray;
        }
    }

    hasAnyChaptersWithTasks(): boolean {
        for (let i = 0; i < this.scopeItems.length; i++) {
            if (this.scopeItems[i].children.length > 0) {
                return true;
            }
        }
        return false;
    }

    requeryChapters(): void {
        if (this.selectedProject != undefined && this.product != undefined) {
            this._scopeItemService
                .getChapter(this.selectedProject.projectGuid, this.product.guid, this.filterInfo)
                .subscribe(scopeItems => {
                    this.scopeItems = scopeItems;
                    this._ref.detectChanges();
                } , error => (this.errorMessage = <any>error));
        } else {
            this.scopeItems = [];
        }
    }

    onMoveUp(scopeItem: ScopeItem) {
        const srcIdx = this.scopeItems.indexOf(scopeItem);
        this.swapPositionAndSave(srcIdx, srcIdx - 1);
    }

    onMoveDown(scopeItem: ScopeItem) {
        const srcIdx = this.scopeItems.indexOf(scopeItem);
        this.swapPositionAndSave(srcIdx, srcIdx + 1);
    }

    swapPositionAndSave(srcIdx: number, dstIdx: number) {
        const id1 = this.scopeItems[dstIdx].id;
        const id2 = this.scopeItems[srcIdx].id;
        this._chapterService.swap(this.selectedProject.projectGuid, id1, id2).subscribe(result => {
            this.reSortItems(srcIdx, dstIdx);
        });
    }

    isItTopMost(scopeItem: ScopeItem) {
        const val = this.scopeItems[0].id == scopeItem.id;
        return val;
    }

    isItBottomMost(scopeItem: ScopeItem) {
        const val = this.scopeItems[this.scopeItems.length - 1].id == scopeItem.id;
        return val;
    }

    onRename(scopeItem: ScopeItem) {
        this.itemToRename = scopeItem;
        this.newName = scopeItem.name;
        this.isRenamePopupVisible = true;
    }

    onDelete(scopeItem: ScopeItem) {
        this.itemToDelete = scopeItem;
        this.newName = scopeItem.name;
        this.isDeletePopupVisible = true;
    }

    onTaskRemoveFromChapter(data: any) {
        const chapter = this.scopeItems.find(s => s.id == data.chapterId);
        if (chapter != undefined) {
            let j: number = 0;
            const children: ScopeItem[] = new Array(chapter.children.length - 1);
            for (let i = 0; i < chapter.children.length; i++) {
                if (chapter.children[i].id != data.taskId) {
                    children[j] = chapter.children[i];
                    j++;
                }
            }
            chapter.children = children;
        }
        this.onChapterTasksChanged(data.chapterId);
    }

    onChapterTasksChanged($event) {
        this._ref.detectChanges();
        const list = this.chapters.toArray();
        const chapter = list.find(s => s.chapter.id == $event);
        chapter.setIsLastTaskInList();
        chapter.setIsNewTaskButtonOnNewLine();
    }

    changeName(newName: string) {
        if (newName != undefined && newName != this.newName) {
            this.itemToRename.name = newName;
            if (this.itemToRename.isSection) {
                const model = this._scopeItemService.mapItemToUpdateModel(this.itemToRename);
                this._scopeItemService.putScopeItems(this.selectedProject.projectGuid, [model]).subscribe(result => {});
            } else {
                const model = this._chapterService.mapChapterToUpdateModel(this.itemToRename);
                this._chapterService.putChapter(this.selectedProject.projectGuid, model).subscribe(result => {});
            }
        }
    }

    delete() {
        if (!this.itemToDelete) {
            return;
        }
        if (this.itemToDelete.isSection) {
            this._scopeItemService
                .deleteScopeItem(this.selectedProject.projectGuid, this.itemToDelete.id)
                .subscribe(result => {
                    const chapter = this.getChapterComponentOfTask(this.itemToDelete);
                    this.itemToDelete = undefined;
                    this._assignmentService.requery();
                    if (chapter) {
                        chapter.requeryTasks();
                    }
                });
        } else {
            this._chapterService
                .deleteChapter(this.selectedProject.projectGuid, this.itemToDelete.id)
                .subscribe(result => {
                    this.itemToDelete = undefined;
                    this._assignmentService.requery();
                    this.requeryChapters();
                });
        }
    }

    private getChapterComponentOfTask(task: ScopeItem): ChapterComponent {
        const scopeItem = this.scopeItems.find(c => c.children.find(t => t.id == task.id) != undefined);
        return this.chapters.find(c => c.chapter.id == scopeItem.id);
    }
}
