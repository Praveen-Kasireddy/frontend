import { EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';

@TakeUntilDestroy()
export class ValidatedPopupComponent implements OnInit, OnDestroy {
    @Output()
    closeEvent = new EventEmitter();
    @ViewChild(DxPopupComponent)
    dxPopup: DxPopupComponent;
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;

    cleanup(): void {
        if (this.validationGroup) {
            this.validationGroup.instance.reset();
            this.resetSpecificValidation();
        }
    }

    hide(): void {
        this.dxPopup.visible = false;
    }

    ngOnInit(): void {
        this.dxPopup.onHidden.pipe(untilDestroyed(this)).subscribe(() => this.cleanup());

        this.dxPopup.visibleChange.pipe(untilDestroyed(this)).subscribe(() => {
            if (!this.dxPopup.visible) {
                this.closeEvent.emit();
            }
        });
    }

    resetSpecificValidation(): void {}

    show(): void {
        this.dxPopup.visible = true;
    }

    specificValidation(next?: () => void) {
        if (next) {
            next();
        }
    }

    submitForm(): void {}

    validateAndSubmitForm = (): void => {
        if (this.validationGroup.instance.validate().isValid) {
            this.specificValidation(() => {
                this.closeEvent.emit();
                this.submitForm();
            });
        }
    };

    validateMe(e): void {
        const instance: any = Validator.getInstance(e.element);
        if (instance.validate().isValid) {
            this.specificValidation();
        }
    }

    ngOnDestroy(): void {}
}
