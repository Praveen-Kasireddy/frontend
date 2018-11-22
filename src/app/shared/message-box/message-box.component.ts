import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DialogResult } from '@core/enum/dialog-result.enum';
import { DxPopupComponent } from 'devextreme-angular';

@Component({
    moduleId: module.id,
    selector: 'kosmos-message-box',
    templateUrl: 'message-box.component.html',
    styleUrls: ['message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
    @Input()
    showOkButton: boolean = false;
    @Input()
    showDoneButton: boolean = false;
    @Input()
    showCancelButton: boolean = false;
    @Input()
    showApplyButton: boolean = false;
    @Input()
    showYesButton: boolean = false;
    @Input()
    showNoButton: boolean = false;
    @Input()
    showCloseButton: boolean = false;
    @Input()
    title: string;
    @Input()
    message: string;

    @Output()
    closeEvent = new EventEmitter();
    @ViewChild(DxPopupComponent)
    dxPopup: DxPopupComponent;

    show(): void {
        this.dxPopup.visible = true;
    }

    ngOnInit() {}

    titleRendered(event: any): void {
        if (
            event &&
            event.titleElement &&
            event.titleElement.firstChild &&
            event.titleElement.firstChild.firstChild &&
            event.titleElement.firstChild.firstChild.firstChild
        ) {
            event.titleElement.firstChild.firstChild.firstChild.removeAttribute('style');
        }
    }

    cancel = (): void => {
        this.close(DialogResult.Cancel);
    };

    ok = (): void => {
        this.close(DialogResult.Ok);
    };

    yes = (): void => {
        this.close(DialogResult.Yes);
    };

    no = (): void => {
        this.close(DialogResult.No);
    };

    apply = (): void => {
        this.close(DialogResult.Apply);
    };

    done = (): void => {
        this.close(DialogResult.No);
    };

    close(dialogResult: DialogResult): void {
        this.closeEvent.emit(dialogResult);
        this.dxPopup.visible = false;
    }

    get messages(): string[] {
        return this.message.split('\n');
    }
}
