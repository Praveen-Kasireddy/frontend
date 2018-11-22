import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProgressState } from '@core/models/project/progress-state';
import { ProgressStateService } from '@core/services/project/progress-state.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProgressStateResolver implements Resolve<ProgressState[]> {
    constructor(private _progressStateService: ProgressStateService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProgressState[]> {
        const id = route.paramMap.get('id');

        return this._progressStateService.getProgressStates(id);
    }
}
