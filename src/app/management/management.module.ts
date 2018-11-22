import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigurationService, ProjectService } from '@core/services';
import { MasterDataImportService } from '@core/services/master-data/master-data-import.service';
import { SharedModule } from '@shared/shared.module';
import {
    DxAutocompleteModule,
    DxDataGridModule,
    DxPopupModule,
    DxSparklineModule,
    DxTabsModule,
    DxTemplateModule,
    DxValidationGroupModule
} from 'devextreme-angular';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './userlist/add-user/add-user.component';
import { EditUserComponent } from './userlist/edit-user/edit-user.component';

@NgModule({
    imports: [
        ManagementRoutingModule,
        CommonModule,
        SharedModule,
        DxDataGridModule,
        DxSparklineModule,
        DxTemplateModule,
        DxDataGridModule,
        DxAutocompleteModule,
        DxSparklineModule,
        DxValidationGroupModule,
        DxPopupModule,
        DxTabsModule
    ],
    declarations: [ManagementComponent, MasterDataComponent, UserlistComponent, AddUserComponent, EditUserComponent],
    providers: [ProjectService, ConfigurationService, MasterDataImportService]
})
export class ManagementModule {}
