import { User } from '@core/models/user';

/**
 * represents a user to transfer to db
 * until now the flag "isAllowCreateProject" is not available at the backend (UserCreateVm)
 * later on this class could be deleted and you use user.ts instead
 */
export class UserModel {
    id: number;
    Email: string;
    Gpid: string;
    FirstName: string;
    IsActive: boolean;
    IsAdmin: boolean;
    LastName: string;
    Salutation: string;

    constructor(user: User) {
        this.id = user.id;
        // ToDo adjust gpid in pbi add user and edit user!
        this.Gpid = user.gpid != undefined ? user.gpid : 'KPMG00000066';
        this.Salutation = user.salutation;
        this.FirstName = user.firstName;
        this.LastName = user.lastName;
        this.Email = user.email;
        this.IsActive = user.isActive;
        this.IsAdmin = user.isAdmin;
    }
}
