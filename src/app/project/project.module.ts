import { NgModule } from '@angular/core';
import { ProjectMockComponent } from '@core/mocks/project/project-mock.component';
import {
    AssignmentService,
    ChapterService,
    ConfigurationService,
    DataExplorerService,
    FileManagerService,
    IngestionDataService,
    IngestionService,
    ProductButtonResizeService,
    ProductService,
    ProgressStateService,
    ReportService,
    ScopeItemService,
    StakeHolderService,
    WidgetService
} from '@core/services';
import { MessageService } from '@core/services/messages/message.service';
import { SharedModule } from '@shared/shared.module';
import {
    DxAutocompleteModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxListModule,
    DxNumberBoxModule,
    DxPopupModule,
    DxSparklineModule,
    DxTemplateModule,
    DxToastModule,
    DxTooltipModule,
    DxValidationGroupModule
} from 'devextreme-angular';
import { SpreadSheetsModule } from '../../assets/spreadjs/gc.spread.sheets.angular.11.0.6';
import { AnalysisCardComponent } from './data-explorer/analysis-card/analysis-card.component';
import { AnalysisPageComponent } from './data-explorer/analysis-page/analysis-page.component';
import { AnalysisTabComponent } from './data-explorer/analysis-page/analysis-side-bar/analysis-tab/analysis-tab.component';
// tslint:disable-next-line:max-line-length
import { CharacteristicGroupHeaderComponent } from './data-explorer/analysis-page/analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic-group/characteristic-group-header.component';
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicGroupComponent } from './data-explorer/analysis-page/analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic-group/sheet-characteristic-group.component';
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicItemComponent } from './data-explorer/analysis-page/analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic-item.component';
// tslint:disable-next-line:max-line-length
import { CharacteristicHeaderComponent } from './data-explorer/analysis-page/analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic/characteristic-header.component';
// tslint:disable-next-line:max-line-length
import { FilterBadgeComponent } from './data-explorer/analysis-page/analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic/filter-badge/filter-badge.component';
//  tslint:disable-next-line:max-line-length
import { SheetCharacteristicComponent } from './data-explorer/analysis-page/analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic/sheet-characteristic.component';
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicsComponent } from './data-explorer/analysis-page/analysis-side-bar/sheet-characteristics/sheet-characteristics.component';
import { AnalysisToolbarComponent } from './data-explorer/analysis-page/analysis-toolbar/analysis-toolbar.component';
// tslint:disable-next-line:max-line-length
import { DataPaletteComponent } from './data-explorer/analysis-page/data-palette/data-palette.component';
import { FormulaEditorComponent } from './data-explorer/analysis-page/formula-editor/formula-editor.component';
import { FormulaPaletteComponent } from './data-explorer/analysis-page/formula-editor/formula-palette/formula-palette.component';
import { TableViewComponent } from './data-explorer/analysis-page/table-view/table-view.component';
import { DataExplorerComponent } from './data-explorer/data-explorer.component';
import { NewAnalysisButtonComponent } from './data-explorer/new-analysis-button/new-analysis-button.component';
import { NewAnalysisPopupComponent } from './data-explorer/new-analysis-popup/new-analysis-popup.component';
import { NewAnalysisComponent } from './data-explorer/new-analysis/new-analysis.component';
import { DataOverviewComponent } from './data-overview/data-overview.component';
import { ProjectDetailComponent } from './detail/project-detail.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { NewDeactivatedProjectCardComponent } from './list/card-new-deactivated/card-new-deactivated.component';
import { NewProjectCardComponent } from './list/card-new/card-new.component';
import { ProjectCardComponent } from './list/card/card.component';
import { ProgressComponent } from './list/card/progress/progress.component';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectStartComponent } from './project-start/project-start.component';
import { ChapterComponent } from './scope/chapter/chapter.component';
import { NewTaskButtonComponent } from './scope/chapter/new-task-button/new-task-button.component';
import { NewTaskPopupComponent } from './scope/chapter/new-task-popup/new-task-popup.component';
import { UpDownButtonComponent } from './scope/chapter/up-down-button/up-down-button.component';
import { DeletePopupComponent } from './scope/delete-popup/delete-popup.component';
import { DeliverableListComponent } from './scope/deliverable-list/deliverable-list.component';
import { NewProductButtonComponent } from './scope/new-product-button/new-product-button.component';
import { ProductButtonComponent } from './scope/product-button/product-button.component';
import { ProductRemoveButtonComponent } from './scope/product-button/product-remove-button/product-remove-button.component';
import { ProjectScopeComponent } from './scope/project-scope.component';
import { RenamePopupComponent } from './scope/rename-popup/rename-popup.component';
import { NewChapterButtonComponent } from './scope/section/new-chapter-button/new-chapter-button.component';
import { NewChapterPopupComponent } from './scope/section/new-chapter-popup/new-chapter-popup.component';
import { SectionComponent } from './scope/section/section.component';
import { TaskComponent } from './scope/task/task.component';
import { WorkflowStatusComponent } from './scope/task/workflow-status/workflow-status.component';
import { TasksFilterBarComponent } from './scope/tasks-filter-bar/tasks-filter-bar.component';
import { TeamMemberAssignmentListComponent } from './scope/team-member-assignment-list/team-member-assignment-list.component';
import { SetupDeleteButtonComponent } from './setup/delete-button/setup-delete-button.component';
import { ProjectLegalEntitiesComponent } from './setup/project-legal-entities/project-legal-entities.component';
import { ProjectMilestonesComponent } from './setup/project-milestones/project-milestones.component';
import { ProjectObjectivesComponent } from './setup/project-objectives/project-objectives.component';
import { ProjectSetupComponent } from './setup/project-setup.component';
import { StakeholderCardComponent } from './setup/project-stakeholders/card/stakeholder-card.component';
import { StakeholderPopupComponent } from './setup/project-stakeholders/popup/stakeholder-popup.component';
import { ProjectStakeholdersComponent } from './setup/project-stakeholders/project-stakeholders.component';
import { NewStakeholderComponent } from './setup/project-stakeholders/stakeholder-new/stakeholder-new.component';
import { TeamMemberCardComponent } from './setup/team-members/card/team-member-card.component';
import { TeamMemberPopupComponent } from './setup/team-members/popup/team-member-popup.component';
import { NewTeamMemberComponent } from './setup/team-members/team-member-new/team-member-new.component';
import { TeamMembersComponent } from './setup/team-members/team-members.component';
import { SmartWorkspaceModule } from './smart-workspace/smart-workspace.module';
import { ApprovalPopupComponent } from './source-data/approval-screen/approval-popup/approval-popup.component';
import { DimensionComponent } from './source-data/approval-screen/approval-popup/dimension/dimension.component';
import { ApprovalScreenComponent } from './source-data/approval-screen/approval-screen.component';
import { FilemanagerComponent } from './source-data/filemanager/filemanager.component';
import { PreingestionScreenComponent } from './source-data/preingestion-screen/preingestion-screen.component';
import { SourceDataSidebarComponent } from './source-data/source-data-sidebar/source-data-sidebar.component';
import { SourceDataComponent } from './source-data/source-data.component';
import { DatafilesComponent } from './datafiles/datafiles.component';
import { DatasourcesComponent } from './datasources/datasources.component';

declare const GC: any;

@NgModule({
    imports: [
        ProjectRoutingModule,
        SharedModule,
        DxDataGridModule,
        DxSparklineModule,
        DxTemplateModule,
        DxDataGridModule,
        DxAutocompleteModule,
        DxSparklineModule,
        DxToastModule,
        DxValidationGroupModule,
        DxPopupModule,
        DxToastModule,
        DxCheckBoxModule,
        SmartWorkspaceModule,
        DxDropDownBoxModule,
        DxListModule,
        DxNumberBoxModule,
        DxTooltipModule,
        SpreadSheetsModule
    ],
    exports: [
        ProjectListComponent,
        ProjectCardComponent,
        NewProjectCardComponent,
        NewDeactivatedProjectCardComponent,
        ProgressComponent,
        StakeholderCardComponent,
        StakeholderPopupComponent
    ],
    declarations: [
        ProjectListComponent,
        ProjectScopeComponent,
        ProjectDetailComponent,
        NewProjectCardComponent,
        NewDeactivatedProjectCardComponent,
        ProjectCardComponent,
        ProgressComponent,
        ProjectSetupComponent,
        NewStakeholderComponent,
        ProjectObjectivesComponent,
        ProjectMilestonesComponent,
        ProjectLegalEntitiesComponent,
        TeamMembersComponent,
        NewTeamMemberComponent,
        TeamMemberCardComponent,
        TeamMemberPopupComponent,
        ProjectStakeholdersComponent,
        StakeholderPopupComponent,
        StakeholderCardComponent,
        SetupDeleteButtonComponent,
        SectionComponent,
        ChapterComponent,
        TaskComponent,
        ProductButtonComponent,
        DeliverableListComponent,
        EmptyPageComponent,
        ProductRemoveButtonComponent,
        DeletePopupComponent,
        ProjectStartComponent,
        NewProductButtonComponent,
        UpDownButtonComponent,
        NewChapterButtonComponent,
        NewChapterPopupComponent,
        RenamePopupComponent,
        NewTaskButtonComponent,
        NewTaskPopupComponent,
        TeamMemberAssignmentListComponent,
        SourceDataComponent,
        SourceDataSidebarComponent,
        FilemanagerComponent,
        DataExplorerComponent,
        ApprovalScreenComponent,
        NewAnalysisButtonComponent,
        AnalysisCardComponent,
        AnalysisPageComponent,
        NewAnalysisPopupComponent,
        DataOverviewComponent,
        ApprovalPopupComponent,
        DataPaletteComponent,
        AnalysisTabComponent,
        NewAnalysisComponent,
        ProjectMockComponent,
        SheetCharacteristicsComponent,
        SheetCharacteristicComponent,
        AnalysisToolbarComponent,
        TableViewComponent,
        DimensionComponent,
        FilterBadgeComponent,
        CharacteristicHeaderComponent,
        WorkflowStatusComponent,
        FormulaEditorComponent,
        FormulaPaletteComponent,
        SheetCharacteristicItemComponent,
        SheetCharacteristicGroupComponent,
        CharacteristicGroupHeaderComponent,
        PreingestionScreenComponent,
        TasksFilterBarComponent,
        DatafilesComponent,
        DatasourcesComponent
    ],
    providers: [
        AssignmentService,
        ConfigurationService,
        ScopeItemService,
        ProductService,
        WidgetService,
        StakeHolderService,
        ChapterService,
        ProductButtonResizeService,
        FileManagerService,
        ReportService,
        ProductButtonResizeService,
        DataExplorerService,
        IngestionService,
        IngestionDataService,
        ProgressStateService,
        MessageService
    ]
})
export class ProjectModule {}
