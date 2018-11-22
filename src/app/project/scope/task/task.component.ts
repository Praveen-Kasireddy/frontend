import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DraggedTask } from '@core/models/project/dragged-task';
import { Project } from '@core/models/project/project';
import { ScopeItem } from '@core/models/project/scope-item';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { DxContextMenuComponent } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';

const menuAnchorTask: string = 'menuAnchor_task_';
const innerDivTask: string = 'outerDiv';
const dropZoneTask: string = 'dropZone';

@Component({
    selector: 'kosmos-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    @Input()
    productId: number;
    @Input()
    chapterId: number;
    @Input()
    chapterName: string;
    @Input()
    task: ScopeItem;
    @Output()
    taskChange = new EventEmitter();
    @Output()
    taskRename = new EventEmitter<ScopeItem>();
    @Output()
    taskDelete = new EventEmitter<ScopeItem>();
    @ViewChild(DxContextMenuComponent)
    menu: DxContextMenuComponent;
    selectedProject: Project;
    renameItem = { text: 'Rename', disabled: false };
    deleteItem = { text: 'Delete', disabled: false };
    menuItems = [this.renameItem, this.deleteItem];
    menuAnchorId: string;
    innerDivTaskId: string;
    dropZoneTaskId: string;
    waitingResponse: boolean = false;
    @Input()
    isMyTasksView: boolean;
    draggableOverMe: boolean;
    showLeftDropZone: boolean;
    showRightDropZone: boolean;
    @Output()
    taskInsert = new EventEmitter<{
        item: ScopeItem;
        insertAtId: number;
        insertBefore: boolean;
        sourceChapterId: number;
    }>();
    @Output()
    taskRemoveFromChapter = new EventEmitter<{ taskId: number; chapterId: number }>();
    @Input()
    isLastTaskInList: boolean;
    draggedTaskId: number;
    @ViewChild('contentDiv')
    contentDiv: any;
    isLastTaskInRow: boolean;

    constructor(
        private _sharedStorageService: SharedStorageService,
        private _scopeItemService: ScopeItemService,
        private _assignmentService: AssignmentService,
        private _router: Router
    ) {}

    dropZoneLeftPosition(): number {
        const elements = this.contentDiv.nativeElement;
        const element = elements.children[0];
        const rect = element.getBoundingClientRect();
        return rect.left;
    }

    leftPosition(): number {
        const element = this.contentDiv.nativeElement;
        const rect = element.getBoundingClientRect();
        return rect.left;
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.menuAnchorId = menuAnchorTask + this.task.id.toString();
        this.innerDivTaskId = innerDivTask + this.task.id.toString();
        this.dropZoneTaskId = dropZoneTask + this.task.id.toString();
        this.enableMenuItems();
    }

    changeStatus() {
        if (this.waitingResponse) {
            return;
        }
        if (this.isMyTasksView) {
            this._router.navigate([
                'projects',
                this.selectedProject.projectGuid,
                'smart-workspace',
                this.productId,
                this.chapterId,
                this.task.id,
                'page',
                1,
                new Date().getTime()
            ]);
            return;
        }
        this.waitingResponse = true;
        if (this._assignmentService.selectedUser) {
            this.task.isSelected = true;
            this._scopeItemService
                .toogleAssignment(this.selectedProject.projectGuid, {
                    scopeItemId: this.task.id,
                    gpid: this._assignmentService.selectedUser.gpid
                })
                .subscribe(task => {
                    this.task.responsibleUser = task.responsibleUser;
                    this._assignmentService.requery();
                    this.waitingResponse = false;
                });
        } else {
            this.task.isSelected = !this.task.isSelected;
            if (!this.task.isSelected) {
                this.task.responsibleUser = undefined;
            }
            const model = this._scopeItemService.mapItemToUpdateModel(this.task);
            this._scopeItemService.putScopeItems(this.selectedProject.projectGuid, [model]).subscribe(result => {
                this._assignmentService.requery();
                this.waitingResponse = false;
            });
            this.taskChange.emit();
        }
    }

    get fullName(): string {
        const user = this.task.responsibleUser;
        return user ? user.firstName + ' ' + user.lastName : '';
    }

    enableMenuItems() {
        this.deleteItem.disabled = this.task.scopeItemGuid != undefined;
    }

    menuItemClick(event: any) {
        switch (event.itemData.text) {
            case this.renameItem.text:
                this.taskRename.emit(this.task);
                break;
            case this.deleteItem.text:
                this.taskDelete.emit(this.task);
        }
        this.menu.visible = false;
    }

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        if (this.isMyTasksView) {
            return false;
        }

        const data = new DraggedTask();
        data.jsonTask = JSON.stringify(this.task);
        data.sourceChapterId = this.chapterId;
        event.dataTransfer.setData('Text', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
        this.draggedTaskId = this.task.id;
    }

    onDragOver(event) {
        if (this.isMyTasksView) {
            return false;
        }

        this.showLeftDropZone =
            event.target.id.toString().substring(0, dropZoneTask.length + 4) == 'Left' + dropZoneTask;
        this.showRightDropZone =
            event.target.id.toString().substring(0, dropZoneTask.length + 5) == 'Right' + dropZoneTask;

        if (event.preventDefault) {
            event.preventDefault();
        }

        this.draggableOverMe = true;
        return true;
    }

    onDragEnter(event) {
        if (this.isMyTasksView) {
            return false;
        }

        if (event.preventDefault) {
            event.preventDefault();
        }

        if (event.target.id.toString().substring(0, innerDivTask.length) == innerDivTask) {
            this.draggableOverMe = true;
        }

        return true;
    }

    onDragEnd(event) {
        if (this.isMyTasksView) {
            return;
        }
    }

    onDragLeave(event) {
        if (this.isMyTasksView) {
            return;
        }

        if (event.preventDefault) {
            event.preventDefault();
        }

        this.showLeftDropZone = false;
        this.showRightDropZone = false;

        if (event.target.id.toString().substring(0, innerDivTask.length) == innerDivTask) {
            this.draggableOverMe = false;
        }
        if (event.target.id.toString().substring(0, dropZoneTask.length) == dropZoneTask) {
            this.draggableOverMe = false;
        }
        return true;
    }

    onDrop(event) {
        if (this.isMyTasksView) {
            return false;
        }

        this.draggableOverMe = false;
        const serData = event.dataTransfer.getData('Text');
        if (serData == undefined) {
            return;
        }

        const data: DraggedTask = JSON.parse(serData);
        if (data == undefined) {
            return;
        }

        const draggedTask: ScopeItem = JSON.parse(data.jsonTask);

        if (draggedTask.id == this.task.id) {
            return;
        }

        const insertBefore: boolean =
            event.target.id.toString().substring(0, dropZoneTask.length + 4) == 'Left' + dropZoneTask;

        this.showLeftDropZone = false;
        this.showRightDropZone = false;
        this.taskInsert.emit({
            item: draggedTask,
            insertAtId: this.task.id,
            insertBefore: insertBefore,
            sourceChapterId: data.sourceChapterId
        });
    }
}
