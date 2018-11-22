import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { UnsavedChanges } from '@core/guards/unsaved-changes/unsaved-changes';
import { UnsavedChangesPopupService } from '@shared/unsaved-changes-popup/unsaved-changes-popup.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<UnsavedChanges> {
    constructor(private _unsavedChangesPopupService: UnsavedChangesPopupService) {}

    canDeactivate(
        component: UnsavedChanges,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (component.hasChanges()) {
            this._unsavedChangesPopupService.show();

            return this._unsavedChangesPopupService.navigateSelection$;
        }
        return true;
    }
}
