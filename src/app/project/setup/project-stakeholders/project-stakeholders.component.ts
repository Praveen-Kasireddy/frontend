import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stakeholder } from '@core/models/project/stakeholder';
import { fadeInAnimation } from '@shared/animations/fade-in.animation';
import { RIGHTS } from '@core/app.const';

@Component({
    selector: 'kosmos-project-stakeholders',
    templateUrl: './project-stakeholders.component.html',
    styleUrls: ['./project-stakeholders.component.scss'],
    animations: [fadeInAnimation(200)]
})
export class ProjectStakeholdersComponent implements OnInit {
    @Input('items')
    stakeholders: Stakeholder[];
    @Output()
    changed = new EventEmitter();

    isAddPopupVisible: boolean = false;
    isEditPopupVisible: boolean = false;
    editableStakeholder: Stakeholder = new Stakeholder();
    RIGHTS = RIGHTS;

    addOrUpdate(stakeholder: Stakeholder) {
        if (this.isAddPopupVisible) {
            this.stakeholders.push(stakeholder);
        } else if (this.isEditPopupVisible) {
            const s = this.stakeholders.find(x => x.id == this.editableStakeholder.id);
            if (s != undefined) {
                const index = this.stakeholders.indexOf(s, 0);
                if (index > -1) {
                    this.stakeholders[index] = Object.assign({}, this.editableStakeholder);
                }
            }
        }
    }

    closePopup() {
        this.isAddPopupVisible = this.isEditPopupVisible = false;
    }

    delete(stakeholder: Stakeholder) {
        const index = this.stakeholders.indexOf(stakeholder, 0);
        if (index > -1) {
            this.stakeholders.splice(index, 1);
        }
    }

    openPopup() {
        this.isAddPopupVisible = true;
    }

    openStakeholder(stakeholder: Stakeholder): void {
        this.editableStakeholder = Object.assign({}, stakeholder);
        this.isEditPopupVisible = true;
    }

    ngOnInit() {}
}
