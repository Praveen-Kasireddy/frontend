import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementTab } from '@core/enum/management-tab.enum';
import { ProjectResolver } from '@core/resolver/project/project-resolver';
import { ProjectRightsResolver } from '@core/resolver/project/project-rights.resolver';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

const kosmosRoutes: Routes = [
    {
        path: 'projects',
        loadChildren: './project/project.module#ProjectModule',
        resolve: {
            rights: ProjectRightsResolver
        }
    },
    {
        path: 'management',
        loadChildren: './management/management.module#ManagementModule',
        data: { selectedTab: ManagementTab.USER_MANAGEMENT }
    },
    {
        path: 'user-logout',
        component: UserLogoutComponent
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(kosmosRoutes, {
            enableTracing: environment.traceRouting,
            initialNavigation: true
        })
    ],
    exports: [RouterModule],
    providers: [ProjectRightsResolver, ProjectResolver]
})
export class KosmosRoutingModule {}
