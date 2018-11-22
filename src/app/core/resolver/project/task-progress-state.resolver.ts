import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProgressState } from '@core/models/project/progress-state';
import { ScopeItemService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable()
export class TaskProgressStateResolver implements Resolve<ProgressState> {
    constructor(private _taskService: ScopeItemService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProgressState> {
        const id = route.paramMap.get('id');
        const taskId = +route.paramMap.get('taskId');

        return this._taskService.getState(id, taskId);
    }
}
