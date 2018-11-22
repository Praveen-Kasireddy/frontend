import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRoutingModule } from '../project/project-routing.module';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes), ProjectRoutingModule],
    exports: [RouterModule],
    declarations: []
})
export class HomeRoutingModule {}
