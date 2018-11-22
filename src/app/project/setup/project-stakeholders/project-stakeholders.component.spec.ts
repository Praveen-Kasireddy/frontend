import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponent, CheckRightstDirective, DxModule, SvgIconComponent } from '@shared/index';
import { NGXLogger } from 'ngx-logger';
import { SetupDeleteButtonComponent } from '../delete-button/setup-delete-button.component';
import { StakeholderCardComponent } from './card/stakeholder-card.component';
import { StakeholderPopupComponent } from './popup/stakeholder-popup.component';
import { ProjectStakeholdersComponent } from './project-stakeholders.component';
import { NewStakeholderComponent } from './stakeholder-new/stakeholder-new.component';

describe('ProjectStakeholdersComponent', () => {
    let component: ProjectStakeholdersComponent;
    let fixture: ComponentFixture<ProjectStakeholdersComponent>;
    let find: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProjectStakeholdersComponent,
                AvatarComponent,
                NewStakeholderComponent,
                StakeholderPopupComponent,
                StakeholderCardComponent,
                SetupDeleteButtonComponent,
                SvgIconComponent,
                CheckRightstDirective
            ],
            imports: [BrowserAnimationsModule, DxModule],
            providers: [NGXLogger]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectStakeholdersComponent);
        component = fixture.componentInstance;
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
        fixture.detectChanges();
    });

    xit('should create', () => {});
    xit('displays stakeholders', () => {});
    xit('adds one stakeholder', () => {});
    xit('adds one stakeholder and another', () => {});
    xit('removes a stakeholder');
});
