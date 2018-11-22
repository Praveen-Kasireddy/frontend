import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RIGHTS } from '@core/app.const';
import { Stakeholder } from '@core/models/project/stakeholder';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';

@Component({
    selector: 'kosmos-stakeholder-popup',
    templateUrl: './stakeholder-popup.component.html',
    styleUrls: ['./stakeholder-popup.component.scss']
})
export class StakeholderPopupComponent implements OnInit {
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;
    @Input()
    visible: boolean = false;
    @Output()
    addEvent = new EventEmitter<Stakeholder>();
    @Output()
    closeEvent = new EventEmitter();
    @Input()
    stakeholder: Stakeholder = new Stakeholder();
    @Input()
    isEditMode: boolean = false;
    @Input()
    title: string;

    RIGHTS = RIGHTS;


    add = (): boolean => {
        if (this.validationGroup.instance.validate().isValid) {
            this.addEvent.emit(this.stakeholder);
            this.stakeholder = new Stakeholder();
            this.validationGroup.instance.reset();
            return true;
        }
        return false;
    };

    addAndClosePopup = (): void => {
        if (this.add()) {
            this.closeEvent.emit();
        }
    };

    popupVisibleChanged() {
        if (!this.popup.visible) {
            this.validationGroup.instance.reset();
            this.closeEvent.emit();
        }
    }

    onHidden = () => {
        if (this.validationGroup) {
            this.validationGroup.instance.reset();
        }
    };

    ngOnInit() {}

    validateMe(e): boolean {
        const instance: any = Validator.getInstance(e.element);
        return instance.validate();
    }
}
