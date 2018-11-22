import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from '@core/guards/unsaved-changes/unsaved-changes.guard';
import { ProjectResolver } from '@core/resolver/project/project-resolver';
import { TaskProgressStateResolver } from '@core/resolver/project/task-progress-state.resolver';
import { SmartWorkspaceComponent } from './smart-workspace.component';

const routes: Routes = [
    {
        path: ':productId/:chapterId/:taskId/page/:sequenceNumber/:guid',
        component: SmartWorkspaceComponent,
        resolve: {
            project: ProjectResolver,
            taskState: TaskProgressStateResolver
        },
        canDeactivate: [UnsavedChangesGuard]
    },
    {
        path: ':productId/:chapterId/:taskId/page/:sequenceNumber',
        component: SmartWorkspaceComponent,
        resolve: {
            project: ProjectResolver,
            taskState: TaskProgressStateResolver
        },
        canDeactivate: [UnsavedChangesGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProjectResolver, TaskProgressStateResolver]
})
export class SmartWorkspaceRoutingModule {}
