import { NgModule } from '@angular/core';
import { SmartWorkspaceMessageService } from '@core/services/messages/smart-workspace-message.service';
import { SharedModule } from '@shared/shared.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { GenerateReportPopupComponent } from './generate-report-popup/generate-report-popup.component';
import { InfoSnippetListComponent } from './info-snippet-list/info-snippet-list.component';
import { NewContentTemplatePopupComponent } from './new-content-template-popup/new-content-template-popup.component';
import { DrawIOExtensionService } from './services/draw-io-extension.service';
import { DrawIOScriptService } from './services/draw-io-scripts.service';
import { FroalaExtensionService } from './services/froala-extension.service';
import { HtmlTableThemeService } from './services/html-table-theme.service';
import { SmartWorkspaceRoutingModule } from './smart-workspace-routing.module';
import { SmartWorkspaceTableOfContentComponent } from './smart-workspace-table-of-content/smart-workspace-table-of-content.component';
import { SmartWorkspaceToolbarComponent } from './smart-workspace-toolbar/smart-workspace-toolbar.component';
import { SmartWorkspaceComponent } from './smart-workspace.component';
import { TableOfContentSelectLineComponent } from './table-of-content-select-line/table-of-content-select-line.component';
import { TaskProgressStateComponent } from './task-progress-state/task-progress-state.component';
import { CropperPopupComponent } from './cropper-popup/cropper-popup.component';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
    imports: [
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        SmartWorkspaceRoutingModule,
        SharedModule,
        AngularCropperjsModule
    ],
    exports: [],
    declarations: [
        SmartWorkspaceComponent,
        SmartWorkspaceToolbarComponent,
        SmartWorkspaceTableOfContentComponent,
        TaskProgressStateComponent,
        TableOfContentSelectLineComponent,
        InfoSnippetListComponent,
        NewContentTemplatePopupComponent,
        GenerateReportPopupComponent,
        CropperPopupComponent
    ],
    providers: [
        DrawIOScriptService,
        SmartWorkspaceMessageService,
        HtmlTableThemeService,
        FroalaExtensionService,
        DrawIOExtensionService
    ]
})
export class SmartWorkspaceModule {}
