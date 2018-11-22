import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RIGHTS } from '@core/app.const';
import { LegalEntity } from '@core/models/project/legal-entity';
import { DxValidationGroupComponent } from 'devextreme-angular';

@Component({
    selector: 'kosmos-project-legal-entities',
    templateUrl: './project-legal-entities.component.html',
    styleUrls: ['./project-legal-entities.component.scss']
})
export class ProjectLegalEntitiesComponent implements OnInit {
    @Input('items')
    legalEntities: LegalEntity[] = [];
    @Output()
    changed = new EventEmitter();
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;

    newLegalEntity: LegalEntity = new LegalEntity();
    RIGHTS = RIGHTS;

    constructor() {}

    ngOnInit() {}

    onSubmit(): void {
        const result = this.validationGroup.instance.validate();

        if (result.isValid) {
            this.legalEntities.push(this.newLegalEntity);
            this.newLegalEntity = new LegalEntity();

            this.validationGroup.instance.reset();

            this.changed.emit();
        }
    }

    remove(index: number): void {
        if (index > -1) {
            this.legalEntities.splice(index, 1);
            this.changed.emit();
        }
    }

    submitIfNewNotEmpty(): void {
        if (this.newLegalEntity.abbreviation || this.newLegalEntity.companyName) {
            this.onSubmit();
        }
    }
}
