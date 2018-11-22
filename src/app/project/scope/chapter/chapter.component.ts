import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import { DraggedTask } from '@core/models/project/dragged-task';
import { Project } from '@core/models/project/project';
import { ScopeItem } from '@core/models/project/scope-item';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ChapterService } from '@core/services/project/chapter.service';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { DxContextMenuComponent } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';
import { NewTaskButtonComponent } from '../chapter/new-task-button/new-task-button.component';
import { NewTaskPopupComponent } from '../chapter/new-task-popup/new-task-popup.component';
import { TaskComponent } from '../task/task.component';

@Component({
    selector: 'kosmos-chapter',
    templateUrl: './chapter.component.html',
    styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit, AfterViewInit, AfterContentInit {
    @Input()
    productId: number;
    @Input()
    chapter: ScopeItem;
    @Output()
    chapterChange = new EventEmitter<ScopeItem>();
    @Output()
    chapterTasksChanged = new EventEmitter<number>();
    @Output()
    rename = new EventEmitter<ScopeItem>();
    @Output()
    delete = new EventEmitter<ScopeItem>();
    @ViewChild(DxContextMenuComponent)
    menu: DxContextMenuComponent;
    @ViewChildren(TaskComponent)
    tasks: QueryList<TaskComponent>;
    @ViewChild(NewTaskPopupComponent)
    newtask: NewTaskPopupComponent;
    selectedProject: Project;
    @ViewChild(NewTaskButtonComponent)
    newtaskButton: NewTaskButtonComponent;
    selectAllItem = { text: 'Select all', disabled: true };
    deselectAllItem = { text: 'Deselect all', disabled: true };
    renameItem = { text: 'Rename', disabled: false };
    deleteItem = { text: 'Delete', disabled: false };
    menuItems = [this.renameItem, this.deleteItem, this.selectAllItem, this.deselectAllItem];
    menuAnchorId: string;
    addTask: string;
    @Input()
    isMyTasksView: boolean;
    isNewTaskPopupVisible: boolean = false;
    waitingForResponse: boolean = false;
    @Input()
    isBottomMost: boolean;
    isNewTaskButtonOnNewLine: boolean = false;
    @Input()
    isTopMost: boolean;
    @Output()
    moveUpEvent = new EventEmitter<ScopeItem>();
    @Output()
    moveDownEvent = new EventEmitter<ScopeItem>();
    @Output()
    taskRemoveFromChapter = new EventEmitter<{ taskId: number; chapterId: number }>();
    chapterDropZoneId: string;
    showDropZone: boolean = false;
    chaperDropZoneId: string = 'chaperDropZoneId';

    constructor(
        private sharedStorageService: SharedStorageService,
        private scopeItemService: ScopeItemService,
        private assignmentService: AssignmentService,
        private chapterService: ChapterService,
        private ref: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.chapterDropZoneId = 'chaperDropZoneId';
        this.selectedProject = this.sharedStorageService.get('selectedProject');
        this.menuAnchorId = 'menuAnchor_chapter' + this.chapter.id;
        this.addTask = 'addTask_' + this.chapter.name.replace(/[^A-Za-z0-9]/g, '');
        this.enableMenuItems();
    }

    ngAfterViewInit() {
        this.setIsLastTaskInList();

        if (!this.isMyTasksView) {
            this.setIsNewTaskButtonOnNewLine();
        }
    }

    ngAfterContentInit() {}

    public haveTasks(): boolean {
        return this.chapter.children.length > 0;
    }
    public setIsLastTaskInList() {
        const list = this.tasks.toArray();
        for (let i = 0; i < list.length - 1; i++) {
            const left = list[i].dropZoneLeftPosition();
            const next = list[i + 1].dropZoneLeftPosition();
            list[i].isLastTaskInRow = next < left || next == left;
        }
    }

    public setIsNewTaskButtonOnNewLine() {
        if (this.tasks == undefined) {
            return true;
        }

        if (this.chapter != undefined && this.chapter.children.length > 0) {
            const leftFirstTask = this.tasks.first.dropZoneLeftPosition();
            const leftBut = this.newtaskButton.positionLeft();
            this.isNewTaskButtonOnNewLine = leftBut < leftFirstTask + 210;
        } else {
            this.isNewTaskButtonOnNewLine = true;
        }
    }

    onResize($event) {
        this.setIsLastTaskInList();
    }

    showEmptyChapters(): boolean {
        return !this.isMyTasksView || this.chapter.children.length > 0;
    }

    closeNewTaskPopup() {
        this.isNewTaskPopupVisible = false;
    }

    enableMenuItems() {
        this.selectAllItem.disabled = this.chapter.children.every(t => t.isSelected);
        this.deselectAllItem.disabled = this.chapter.children.every(t => !t.isSelected);
        this.deleteItem.disabled = !this.isChapterDeletable();
    }

    menuItemClick(e) {
        switch (e.itemData.text) {
            case this.renameItem.text:
                this.rename.emit(this.chapter);
                break;
            case this.deleteItem.text:
                this.delete.emit(this.chapter);
                break;
            default:
                this.select(e.itemData.text == 'Select all');
                break;
        }
        this.menu.visible = false;
    }

    openNewTaskPopup() {
        this.isNewTaskPopupVisible = true;
    }

    requeryTasks(): void {
        this.scopeItemService.getTasks(this.selectedProject.projectGuid, this.chapter.id).subscribe(data => {
            this.chapter.children = data;
            this.ref.detectChanges();
            this.setIsLastTaskInList();
            if (!this.isMyTasksView) {
                this.setIsNewTaskButtonOnNewLine();
            }
            this.enableMenuItems();
        });
    }

    select(select: boolean) {
        this.chapter.children.forEach(t => {
            t.isSelected = select;
            t.responsibleUser = undefined;
        });
        this.enableMenuItems();
        const updateModels = this.chapter.children.map(t => this.scopeItemService.mapItemToUpdateModel(t));
        this.scopeItemService.putScopeItems(this.selectedProject.projectGuid, updateModels).subscribe(data => {
            this.assignmentService.requery();
            this.waitingForResponse = false;
        });
    }

    toogleSelection(): void {
        if (this.waitingForResponse) {
            return;
        }
        if (this.isMyTasksView) {
            return;
        }
        this.waitingForResponse = true;
        if (this.assignmentService.selectedUser) {
            this.chapterService
                .toogleAssignment(
                    this.selectedProject.projectGuid,
                    this.chapter.id,
                    this.assignmentService.selectedUser.gpid
                )
                .subscribe(tasks => {
                    this.chapter.children = tasks;
                    this.assignmentService.requery();
                    this.waitingForResponse = false;
                });
        } else {
            const select = !this.chapter.children.some(t => t.isSelected);
            this.select(select);
        }
    }

    hasChapterAndTasks(): boolean {
        return this.chapter != undefined && this.chapter.children.length > 0;
    }

    taskRename(scopeItem: ScopeItem) {
        this.rename.emit(scopeItem);
    }

    taskDelete(scopeItem: ScopeItem) {
        this.delete.emit(scopeItem);
    }

    isChapterDeletable(): boolean {
        return !this.chapter.scopeItemGuid && this.chapter.children.every(c => !c.scopeItemGuid && !c.isSelected);
    }

    onMoveUp(event: any) {
        this.moveUpEvent.emit(this.chapter);
    }

    onMoveDown(event: any) {
        this.moveDownEvent.emit(this.chapter);
    }

    onDragOver(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.target.id == this.chaperDropZoneId) {
            this.showDropZone = true;
        }

        return true;
    }

    onDragEnter(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }

        return true;
    }

    onDragLeave(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.target.id == this.chaperDropZoneId) {
            this.showDropZone = false;
        }
        return true;
    }

    onDrop(event) {
        const serData = event.dataTransfer.getData('Text');
        if (serData == undefined) {
            return;
        }
        const data: DraggedTask = JSON.parse(serData);
        if (data == undefined) {
            return;
        }
        const draggedTask: ScopeItem = JSON.parse(data.jsonTask);
        this.onTaskInsert({
            item: draggedTask,
            insertAtId: -1,
            sourceChapterId: data.sourceChapterId
        });
    }

    onTaskInsert(data: any) {
        const moveWithinChapter = data.sourceChapterId == this.chapter.id;
        if (moveWithinChapter) {
            this.moveTaskWithinChapter(data.item, data.insertAtId, data.insertBefore);
        } else {
            this.moveTaskFromOtherChapter(data.item, data.insertAtId, data.sourceChapterId);
            this.chapterTasksChanged.emit(data.sourceChapterId);
        }

        this.ref.detectChanges();

        if (!this.isMyTasksView) {
            this.setIsNewTaskButtonOnNewLine();
        }
        this.setIsLastTaskInList();

        this.scopeItemService
            .moveScopeItem(
                this.selectedProject.projectGuid,
                data.item.id,
                this.chapter.id,
                data.insertAtId,
                data.insertBefore
            )
            .subscribe();
    }

    private moveTaskWithinChapter(task: ScopeItem, insertAtId: number, insertBefore: boolean) {
        const insertAtItem = this.chapter.children.find(s => s.id == insertAtId);
        const tmpList: ScopeItem[] = new Array(this.chapter.children.length);
        let i: number = 0;

        for (const item of this.chapter.children) {
            if (item.id == insertAtItem.id) {
                if (insertBefore) {
                    tmpList[i] = task;
                    i++;
                    tmpList[i] = item;
                    i++;
                } else {
                    tmpList[i] = item;
                    i++;
                    tmpList[i] = task;
                    i++;
                }
            } else {
                if (item.id != task.id) {
                    tmpList[i] = item;
                    i++;
                }
            }
        }
        this.chapter.children = tmpList;
    }

    private moveTaskFromOtherChapter(task: ScopeItem, insertAtId: number, sourceChapterId: number) {
        const tmpList: ScopeItem[] = new Array(this.chapter.children.length + 1);

        if (this.chapter.children.length == 0) {
            tmpList[0] = task;
        } else {
            let i: number = 0;
            for (const item of this.chapter.children) {
                if (item.id == insertAtId) {
                    tmpList[i] = task;
                    i++;
                }
                tmpList[i] = item;
                i++;
            }
        }

        this.chapter.children = tmpList;
        this.taskRemoveFromChapter.emit({ taskId: task.id, chapterId: sourceChapterId });
    }
}
