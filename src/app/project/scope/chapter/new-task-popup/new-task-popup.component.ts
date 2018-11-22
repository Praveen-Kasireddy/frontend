import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CreateTaskModel } from '@core/models';
import { ScopeItemService } from '@core/services/project/scope-item.service';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-task-popup',
    templateUrl: 'new-task-popup.component.html',
    styleUrls: ['new-task-popup.component.scss']
})
export class NewTaskPopupComponent {
    @Input()
    visible: boolean = false;
    @Input()
    chapterId: number;
    @Input()
    projectGuid: string;
    @Output()
    closeEvent = new EventEmitter();
    @Output()
    taskCreated = new EventEmitter();
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;
    name: string = '';

    constructor(private scopeItemService: ScopeItemService) {}

    popupHidden() {
        this.name = '';
    }

    popupShowing() {
        if (this.validationGroup) {
            this.validationGroup.instance.reset();
        }
    }

    popupVisibleChanged() {
        if (!this.popup.visible) {
            this.closeEvent.emit();
        }
    }

    validateMe(e): boolean {
        const instance: any = Validator.getInstance(e.element);
        return instance.validate();
    }

    add = (): boolean => {
        if (this.validationGroup.instance.validate().isValid) {
            this.scopeItemService
                .create(this.projectGuid, new CreateTaskModel(this.chapterId, this.name))
                .subscribe(data => {
                    this.taskCreated.emit();
                });
            this.name = '';
            this.validationGroup.instance.reset();
            return true;
        }
        return false;
    };

    addAndClose = (): boolean => {
        if (this.add()) {
            this.closeEvent.emit();
            return true;
        }
    };
}
