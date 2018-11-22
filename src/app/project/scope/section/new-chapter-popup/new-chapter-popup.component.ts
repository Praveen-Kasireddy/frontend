import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Project } from '@core/models/project/project';
import { ChapterService } from '@core/services/project/chapter.service';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';
import { SharedStorageService } from 'ngx-store';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-chapter-popup',
    templateUrl: 'new-chapter-popup.component.html',
    styleUrls: ['new-chapter-popup.component.scss']
})
export class NewChapterPopupComponent implements OnInit {
    @Input()
    visible: boolean = false;
    @Input()
    productGuid: string;
    @Output()
    closeEvent = new EventEmitter();
    @Output()
    chapterCreated = new EventEmitter();
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;
    name: string = '';
    selectedProject: Project;

    constructor(private sharedStorageService: SharedStorageService, private chapterService: ChapterService) {}

    ngOnInit() {
        this.selectedProject = this.sharedStorageService.get('selectedProject');
    }

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
            this.chapterService
                .create(this.selectedProject.projectGuid, {
                    productGuid: this.productGuid,
                    name: this.name
                })
                .subscribe(data => {
                    this.chapterCreated.emit();
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
