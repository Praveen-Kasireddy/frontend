/**
 * represents a user
 */
export class User {
    id: number;
    gpid: string;
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    rights?: any;
}
