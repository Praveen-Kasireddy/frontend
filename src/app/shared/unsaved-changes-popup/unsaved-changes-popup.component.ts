import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnsavedChangesPopupService } from '@shared/unsaved-changes-popup/unsaved-changes-popup.service';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    moduleId: module.id,
    selector: 'kosmos-unsaved-changes-popup',
    templateUrl: 'unsaved-changes-popup.component.html',
    styleUrls: []
})
@TakeUntilDestroy()
export class UnsavedChangesPopupComponent implements OnInit, OnDestroy {
    popupVisible: boolean = false;

    constructor(private _unsavedChangesPopupService: UnsavedChangesPopupService) {}

    ngOnInit(): void {
        this._unsavedChangesPopupService.visibleEvent
            .pipe(untilDestroyed(this))
            .subscribe(visible => (this.popupVisible = visible));
    }

    ngOnDestroy(): void {}

    onConfirm = (): void => {
        this._choose(true);
    };

    onClose = (): void => {
        this._choose(false);
    };

    private _choose(choose: boolean) {
        this._unsavedChangesPopupService.navigateSelection$.next(choose);
        this.popupVisible = false;
    }
}
