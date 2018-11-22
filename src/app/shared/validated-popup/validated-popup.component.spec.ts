import { EventEmitter } from '@angular/core';
import { ValidatedPopupComponent } from '@shared/validated-popup/validated-popup.component';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';

describe('DataExplorerComponent', () => {
    let component: ValidatedPopupComponent;

    beforeEach(() => {
        component = new ValidatedPopupComponent();
        component.dxPopup = {
            onHidden: new EventEmitter(),
            onShowing: new EventEmitter(),
            visibleChange: new EventEmitter()
        } as DxPopupComponent;
        component.validationGroup = {
            instance: {
                reset: () => {},
                validate() {
                    return { isValid: true };
                }
            }
        } as DxValidationGroupComponent;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should hide popup', () => {
        component.hide();
        expect(component.dxPopup.visible).toBeFalsy();
    });

    it('onHidden should cleanup', () => {
        spyOn(component, 'cleanup');
        component.ngOnInit();
        component.dxPopup.onHidden.emit();
        expect(component.cleanup).toHaveBeenCalled();
    });

    it('onShowing should reset validation', () => {
        spyOn(component.validationGroup.instance, 'reset');
        spyOn(component, 'resetSpecificValidation');
        component.cleanup();
        component.ngOnInit();
        component.dxPopup.onShowing.emit();
        expect(component.validationGroup.instance.reset).toHaveBeenCalled();
        expect(component.resetSpecificValidation).toHaveBeenCalled();
    });

    it('visibleChange should emit close event', () => {
        spyOn(component.closeEvent, 'emit');
        component.ngOnInit();
        component.dxPopup.visible = false;
        component.dxPopup.visibleChange.emit();
        expect(component.closeEvent.emit).toHaveBeenCalled();
    });

    it('should show popup', () => {
        component.show();
        expect(component.dxPopup.visible).toBeTruthy();
    });

    it('should validate and submit form', () => {
        spyOn(component.closeEvent, 'emit');
        spyOn(component, 'submitForm');
        component.ngOnInit();
        component.validateAndSubmitForm();
        expect(component.closeEvent.emit).toHaveBeenCalled();
        expect(component.submitForm).toHaveBeenCalled();
    });
});
