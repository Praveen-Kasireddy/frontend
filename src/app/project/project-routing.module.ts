import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RIGHTS } from '@core/app.const';
import { AuthorizeGuard } from '@core/guards/authorize/authorize.guard';
import { UnsavedChangesGuard } from '@core/guards/unsaved-changes/unsaved-changes.guard';
import { ProgressStateResolver } from '@core/resolver/project/progress-state.resolver';
import { ProjectResolver } from '@core/resolver/project/project-resolver';
import { ProjectRightsResolver } from '@core/resolver/project/project-rights.resolver';
import { ProjectRolesResolver } from '@core/resolver/project/project-roles.resolver';
import { AnalysisPageComponent } from './data-explorer/analysis-page/analysis-page.component';
import { DataExplorerComponent } from './data-explorer/data-explorer.component';
import { DataOverviewComponent } from './data-overview/data-overview.component';
import { DatafilesComponent } from './datafiles/datafiles.component';
import { DatasourcesComponent } from './datasources/datasources.component';
import { ProjectScopeComponent } from './scope/project-scope.component';
import { ProjectSetupComponent } from './setup/project-setup.component';
import { FilemanagerComponent } from './source-data/filemanager/filemanager.component';
import { SourceDataComponent } from './source-data/source-data.component';

export const projectRoutes: Routes = [
    {
        path: ':id/tasks',
        component: ProjectScopeComponent,
        resolve: {
            project: ProjectResolver,
            states: ProgressStateResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: ':id/datasources',
        component: DatasourcesComponent,
        resolve: {
            project: ProjectResolver,
            states: ProgressStateResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: ':id/datafiles',
        component: DatafilesComponent,
        resolve: {
            project: ProjectResolver,
            states: ProgressStateResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: ':id/filemanager',
        component: FilemanagerComponent,
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: ':id/source-data/:fileid',
        component: SourceDataComponent,
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: ':id/smart-workspace',
        loadChildren: 'app/project/smart-workspace/smart-workspace.module#SmartWorkspaceModule',
        resolve: {
            project: ProjectResolver,
            states: ProgressStateResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: ':id/setup',
        component: ProjectSetupComponent,
        resolve: {
            project: ProjectResolver,
            projectRoles: ProjectRolesResolver,
            rights: ProjectRightsResolver
        },
        canDeactivate: [UnsavedChangesGuard]
    },
    {
        path: ':id/scope',
        component: ProjectScopeComponent,
        resolve: {
            project: ProjectResolver,
            states: ProgressStateResolver,
            rights: ProjectRightsResolver
        },
        canActivate: [AuthorizeGuard],
        data: {
            expectedRight: RIGHTS.ACCESS_PROJECT_SCOPE
        }
    },
    {
        path: 'new/:id',
        component: ProjectSetupComponent
    },
    {
        path: ':id/data-explorer',
        component: DataExplorerComponent,
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        }
    },
    {
        path: ':id/analysis',
        component: AnalysisPageComponent,
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        },
        canDeactivate: [UnsavedChangesGuard]
    },
    {
        path: ':id/analysis/:analysisId',
        component: AnalysisPageComponent,
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        },
        canDeactivate: [UnsavedChangesGuard]
    },
    {
        path: ':id/data-overview',
        component: DataOverviewComponent,
        resolve: {
            project: ProjectResolver,
            rights: ProjectRightsResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(projectRoutes)],
    exports: [RouterModule],
    providers: [ProjectResolver, ProgressStateResolver, ProjectRolesResolver, ProjectRightsResolver, AuthorizeGuard]
})
export class ProjectRoutingModule {}
