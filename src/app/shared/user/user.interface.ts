import { UserRole } from './user-role.interface';

export interface User {
    avatar: string;
    name: string;
    role: UserRole;
    id: string;
    email?: string;
    username: string;
    active?: boolean;
    company?: any;
    jobTitle?: string;
    password?: string;
    telephone?: string;
    assignedScopeItemsCount?: number;
}
