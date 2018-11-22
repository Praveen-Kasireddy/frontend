import { EventEmitter } from '@angular/core';
import { NamedUser } from '@core/models/configuration/named-user';
import { TeamMemberWithCounter } from '@core/models/project/team-member-with-counter';
import { Observable, of } from 'rxjs';

export const MockData: TeamMemberWithCounter[] = [
    {
        teamMember: { gpid: 'KPMG0000006', fullName: 'User 1', roleId: 1 },
        counter: 0,
        isSelected: true
    },
    {
        teamMember: { gpid: 'KPMG0000007', fullName: 'User 2', roleId: 2 },
        counter: 2,
        isSelected: false
    }
];

export class MockAssignmentService {
    private _projectGuid: string;
    private _productGuid: string;
    assignees: TeamMemberWithCounter[] = [];
    changed: EventEmitter<TeamMemberWithCounter[]> = new EventEmitter();
    selectedUser: NamedUser;

    constructor() {}

    getAssignees(): Observable<TeamMemberWithCounter[]> {
        return of(MockData);
    }

    requery(): void {
        this.getAssignees().subscribe(assignees => this.changed.emit(assignees));
    }

    setProduct(productGuid: string): void {
        this._productGuid = productGuid;
        this.requery();
    }

    setProject(projectGuid: string): void {
        this._projectGuid = projectGuid;
        this.requery();
    }
}
