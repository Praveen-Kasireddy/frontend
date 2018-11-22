import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementTab } from '@core/enum/management-tab.enum';
import { ManagementComponent } from './management.component';

export const managementRoutes: Routes = [
    {
        path: 'userlist',
        component: ManagementComponent,
        data: { selectedTab: ManagementTab.USER_MANAGEMENT }
    },
    {
        path: 'masterdata',
        component: ManagementComponent,
        data: { selectedTab: ManagementTab.MASTER_DATA_MANAGEMENT }
    },
    {
        path: '',
        redirectTo: 'userlist'
    }
];

@NgModule({
    imports: [RouterModule.forChild(managementRoutes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule {}
