import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';

import { DxPopupModule, DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { DxTemplateModule } from 'devextreme-angular';
import { DxSparklineModule } from 'devextreme-angular';
import { DxAutocompleteModule } from 'devextreme-angular';
import { DxValidatorModule } from 'devextreme-angular';

import { DxModule } from '@shared/dx.module';
import { AvatarComponent } from '@shared/avatar/avatar.component';
import { SvgIconComponent } from '@shared/svg-icon/svg-icon.component';

import { TeamMemberPopupComponent } from './team-member-popup.component';
import { NamedUser } from '@core/models/configuration/named-user';
import { DxiToolbarItemComponent } from 'devextreme-angular/ui/nested/toolbar-item-dxi';

describe('TeamMemberPopupComponent', () => {
    let component: TeamMemberPopupComponent;
    let fixture: ComponentFixture<TeamMemberPopupComponent>;
    let find: any;
    let findAll: any;

    beforeEach(async () => {
        // console.log('TeamMemberPopupComponent.beforeEach()');
        TestBed.configureTestingModule({
            declarations: [TeamMemberPopupComponent, AvatarComponent, SvgIconComponent],
            imports: [
                DxButtonModule,
                DxPopupModule,
                DxDataGridModule,
                DxAutocompleteModule,
                DxSparklineModule,
                DxTemplateModule,
                DxValidatorModule
            ]
        });
        // console.log('TeamMemberPopupComponent.beforeEach() --> configureTestingModule');

        fixture = TestBed.createComponent(TeamMemberPopupComponent);
        // console.log('TeamMemberPopupComponent.beforeEach() --> createComponent');

        fixture.whenStable().then(
            () => {
                fixture.detectChanges();
                // console.log('TeamMemberPopupComponent.beforeEach() --> detect changes');

                component = fixture.componentInstance;
                // console.log('TeamMemberPopupComponent.beforeEach() --> completes');
            },
            () => {
                console.log('TeamMemberPopupComponent.beforeEach() --> fails');
            }
        );
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
        findAll = (de => selector => de.queryAll(By.css(selector)))(fixture.debugElement);
    });

    it('creates self', () => {
        expect(component).toBeTruthy();
    });

    it('displays available users', () => {});

    xit('displays assigned users as selected', () => {});

    xit('returns selected user as assigned', () => {});

    xit('does not return unselected users as assigned', () => {});

    xit('does not make any changes to assignments when cancelled', () => {});
});
