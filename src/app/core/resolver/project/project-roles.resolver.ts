import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Role } from '@core/models/role';
import { RoleService } from '@core/services/user/role.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectRolesResolver implements Resolve<Role[]> {
    constructor(private _roleService: RoleService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role[]> {
        return this._roleService.getProjectRoles();
    }
}
