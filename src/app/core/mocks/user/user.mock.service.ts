import { User } from '@core/models/user';
import { Observable, of } from 'rxjs';

const USER_OBJECT: User = {
    id: 1,
    email: 'test.user@email.com',
    salutation: 'Mr.',
    firstName: 'Test',
    lastName: 'User',
    gpid: 'KPMG00000006',
    isActive: true,
    isAdmin: false,
    rights: ['projectCreation', true]
};
// #region User Management prototyping
const users: User[] = [
    {
        id: 1,
        gpid: 'KPMG00000042',
        salutation: 'Mrs.',
        firstName: 'Jane',
        lastName: 'Jungle',
        email: 'jane@jungle.wild',
        isActive: true,
        isAdmin: true,
        rights: ['projectCreation', true]
    },
    {
        id: 2,
        gpid: 'KPMG00000815',
        salutation: 'Mr.',
        firstName: 'Tarzan',
        lastName: 'Jungle',
        email: 'tarzan@jungle.wild',
        isActive: false,
        isAdmin: false,
        rights: ['projectCreation', false]
    },
    {
        id: 3,
        gpid: 'KPMG00000001',
        salutation: 'Mr.',
        firstName: 'Dominik Stephan',
        lastName: 'Ziems',
        email: 'dziems@kpmg.com',
        isActive: true,
        isAdmin: true,
        rights: ['projectCreation', true]
    },
    {
        id: 4,
        gpid: 'KPMG00000002',
        salutation: 'Mrs.',
        firstName: 'Viet-Hong',
        lastName: 'Tang',
        email: 'viethongtang@kpmg.com',
        isActive: false,
        isAdmin: true,
        rights: ['projectCreation', true]
    },
    {
        id: 5,
        gpid: 'KPMG00000003',
        salutation: 'Mr.',
        firstName: 'Icke',
        lastName: 'Eenar',
        email: 'icke@berlin.de',
        isActive: true,
        isAdmin: true,
        rights: ['projectCreation', true]
    },
    {
        id: 6,
        gpid: 'KPMG00000004',
        salutation: 'Mrs.',
        firstName: 'Dida',
        lastName: 'Eenar',
        email: 'dida@berlin.de',
        isActive: true,
        isAdmin: true,
        rights: ['projectCreation', true]
    },
    {
        id: 7,
        gpid: 'KPMG00000005',
        salutation: 'Mr.',
        firstName: 'Test',
        lastName: 'User',
        email: 'test.user@email.com',
        isActive: true,
        isAdmin: false,
        rights: ['projectCreation', true]
    },
    {
        id: 8,
        gpid: 'KPMG00000007',
        salutation: 'Mr.',
        firstName: 'Tester 2',
        lastName: 'User',
        email: 'test2.user@email.com',
        isActive: true,
        isAdmin: false,
        rights: ['projectCreation', true]
    },
    {
        id: 9,
        gpid: 'KPMG00000007',
        salutation: 'Mr.',
        firstName: 'Testerin 3',
        lastName: 'User',
        email: 'test3.user@email.com',
        isActive: true,
        isAdmin: false,
        rights: ['projectCreation', true]
    },
    {
        id: 10,
        gpid: 'KPMG00000008',
        salutation: 'Mr.',
        firstName: 'Testes 3',
        lastName: 'User',
        email: 'test3.user@email.com',
        isActive: true,
        isAdmin: false,
        rights: ['projectCreation', true]
    },
    {
        id: 11,
        gpid: 'KPMG00000009',
        salutation: 'Mr.',
        firstName: 'Testollo',
        lastName: 'User',
        email: 'test4.user@email.com',
        isActive: true,
        isAdmin: false,
        rights: ['projectCreation', true]
    },
    {
        id: 12,
        gpid: 'KPMG00000010',
        salutation: 'Mr.',
        firstName: 'Testke',
        lastName: 'User',
        email: 'test10.user@email.com',
        isActive: true,
        isAdmin: false,
        rights: ['projectCreation', true]
    },
    {
        id: 13,
        gpid: 'KPMG00000011',
        salutation: 'Mr.',
        firstName: 'Testerchen',
        lastName: 'User',
        email: 'test11.user@email.com',
        isActive: true,
        isAdmin: false,
        rights: ['projectCreation', true]
    }
];
// #endregion

export class MockUserService {
    constructor() {}

    public getUser$(): Observable<User> {
        return of(USER_OBJECT);
    }

    public getCurrentUser(): Promise<any> {
        return Promise.resolve(USER_OBJECT);
    }

    public getUsers(): Observable<User[]> {
        return of(users);
    }
}
