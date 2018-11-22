import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { ProjectSharedModule } from 'app/project/project-shared.module';
import { SharedModule } from '@shared/shared.module';
import { ProjectModule } from '../project/project.module';
import { SmartWorkspaceModule } from '../project/smart-workspace/smart-workspace.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, SharedModule, ProjectModule, SmartWorkspaceModule],
    declarations: [HomeComponent]
})
export class HomeModule {}
