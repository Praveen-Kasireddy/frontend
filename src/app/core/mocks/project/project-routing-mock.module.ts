import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectResolver } from '@core/resolver/project/project-resolver';
import { ProjectMockComponent } from './project-mock.component';

export const ProjectRoutesMock: Routes = [
    {
        path: ':id/scope',
        component: ProjectMockComponent,
        resolve: {
            project: ProjectResolver
        }
    },
    {
        path: '',
        component: ProjectMockComponent,
        resolve: {
            project: ProjectResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(ProjectRoutesMock)],
    exports: [RouterModule],
    providers: [ProjectResolver]
})
export class ProjectRoutingModule {}
