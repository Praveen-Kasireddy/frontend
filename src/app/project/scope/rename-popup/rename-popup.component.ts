import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';

@Component({
    selector: 'kosmos-rename-popup',
    templateUrl: './rename-popup.component.html',
    styleUrls: ['./rename-popup.component.scss']
})
export class RenamePopupComponent implements OnInit {
    @Input()
    visible: boolean = false;
    @Input()
    title: string;
    @Output()
    closeEvent = new EventEmitter();
    @Output()
    newNameEvent = new EventEmitter();
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;

    newTitle: string;

    constructor() {}

    ngOnInit() {}

    popupVisibleChanged() {
        if (!this.popup.visible) {
            this.closeEvent.emit();
        }
    }

    popupShowing() {
        this.newTitle = this.title;
        if (this.validationGroup) {
            this.validationGroup.instance.validate();
        }
    }

    validateMe(e): boolean {
        const instance: any = Validator.getInstance(e.element);
        return instance.validate();
    }

    changeName = (): void => {
        if (this.validationGroup.instance.validate().isValid) {
            this.newNameEvent.emit(this.newTitle);
            this.closeEvent.emit();
        }
    };
}
