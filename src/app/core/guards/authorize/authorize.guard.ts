import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Right } from '@core/models/right';
import { RightService } from '@core/services';

@Injectable()
export class AuthorizeGuard implements CanActivate {
    rights: Right[];

    constructor(private _rightService: RightService, private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let hasRight;
        this.rights = this._rightService.rights;
        const expectedRight = route.data.expectedRight;

        if (typeof this.rights != 'undefined') {
            hasRight = this.rights.filter(right => right.name == expectedRight);
        }
        if (!hasRight || hasRight.length == 0) {
            this._router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}
