import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Right } from '@core/models/right';
import { RightService } from '@core/services/user/right.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProjectRightsResolver implements Resolve<Right[]> {
    constructor(private _rightService: RightService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Right[]> {
        const projectGuid = route.paramMap.get('id');

        if (projectGuid != undefined) {
            this._rightService.getAndStoreRights(projectGuid);
        } else {
            const emptyRight: Right[] = [];
            return of(emptyRight);
        }
    }
}
