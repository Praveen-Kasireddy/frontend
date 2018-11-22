import { UserRoleType } from './user-role-type.enum';

export interface UserRole {
    uuid: string;
    name: UserRoleType;
}
