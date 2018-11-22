import { Component, EventEmitter, ViewChild, Output, Input } from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';

@Component({
    selector: 'kosmos-delete-popup',
    templateUrl: './delete-popup.component.html',
    styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent {
    @ViewChild(DxPopupComponent) popup: DxPopupComponent;
    @Output() closeEvent = new EventEmitter<boolean>();
    @Input() visible: boolean = false;
    @Input() deleteChapter: boolean;
    @Input() deleteTask: boolean;

    constructor() {}

    cancel = (): void => {
        this.deleteChapter = this.deleteTask = false;
        this.closeEvent.emit(false);
    };

    confirmed = (): void => {
        this.deleteChapter = this.deleteTask = false;
        this.closeEvent.emit(true);
    };

    popupVisibleChanged() {
        if (!this.popup.visible) {
            this.deleteChapter = this.deleteTask = false;
            this.closeEvent.emit(false);
        }
    }
}
