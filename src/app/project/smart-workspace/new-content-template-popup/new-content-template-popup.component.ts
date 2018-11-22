import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';

@Component({
    selector: 'kosmos-new-content-template-popup',
    templateUrl: './new-content-template-popup.component.html',
    styleUrls: ['./new-content-template-popup.component.scss']
})
export class NewContentTemplatePopupComponent {
    @Input() visible: boolean = false;
    @Output() done = new EventEmitter<string>();
    @Output() close = new EventEmitter();
    @ViewChild(DxPopupComponent) popup: DxPopupComponent;
    @ViewChild(DxValidationGroupComponent) validationGroup: DxValidationGroupComponent;
    name: string = '';

    constructor() {}

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
            this.close.emit();
        }
    }

    validateMe(e): boolean {
        const instance: any = Validator.getInstance(e.element);
        return instance.validate();
    }

    add = (): boolean => {
        if (this.validationGroup.instance.validate().isValid) {
            this.done.emit(this.name);
            this.name = '';
            this.validationGroup.instance.reset();
            return true;
        }
        return false;
    };
}
