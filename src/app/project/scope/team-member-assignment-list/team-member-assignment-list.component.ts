import { Component, OnInit, Output } from '@angular/core';
import { NamedUser } from '@core/models/configuration/named-user';
import { TeamMemberWithCounter } from '@core/models/project/team-member-with-counter';
import { AssignmentService } from '@core/services/project/assignment.service';
import { SharedStorageService } from 'ngx-store';

@Component({
    selector: 'kosmos-team-member-assignment-list',
    templateUrl: './team-member-assignment-list.component.html',
    styleUrls: ['./team-member-assignment-list.component.scss']
})
export class TeamMemberAssignmentListComponent implements OnInit {
    teamMembersWithCounter: TeamMemberWithCounter[] = new Array<TeamMemberWithCounter>();
    @Output()
    selectedItem: NamedUser = null;

    constructor(private _sharedStorageService: SharedStorageService, private _assignmentService: AssignmentService) {
        _assignmentService.changed.subscribe(assignees => this.updateList(assignees));
    }

    setSelectedTeamMember = (teamMember: NamedUser): void => {
        this.toggleSelection(this.selectedItem);

        if (this.selectedItem && this.selectedItem.gpid == teamMember.gpid) {
            this.selectedItem = null;
        } else if (!this.selectedItem || (this.selectedItem && this.selectedItem.gpid != teamMember.gpid)) {
            this.selectedItem = teamMember;
            this.toggleSelection(this.selectedItem);
        }

        this._assignmentService.selectedUser = this.selectedItem;
    };

    isSelected = (teamMember: TeamMemberWithCounter): boolean => {
        return teamMember.isSelected;
    };

    ngOnInit() {
        this._assignmentService.setProject(this._sharedStorageService.get('selectedProject').projectGuid);
        this._assignmentService.selectedUser = undefined;
    }

    private toggleSelection = (teamMember: NamedUser): void => {
        if (teamMember) {
            const found = this.teamMembersWithCounter.find(element => element.teamMember.gpid == teamMember.gpid);
            found.isSelected = !found.isSelected;
        }
    };

    private updateList(newList: TeamMemberWithCounter[]): void {
        if (
            this.teamMembersWithCounter.map(m => m.teamMember.gpid).join() != newList.map(m => m.teamMember.gpid).join()
        ) {
            this.teamMembersWithCounter.slice();
            newList.forEach(i => this.teamMembersWithCounter.push(i));
        } else {
            for (let i = 0; i < newList.length; i++) {
                this.teamMembersWithCounter[i].counter = newList[i].counter;
            }
        }
    }
}
