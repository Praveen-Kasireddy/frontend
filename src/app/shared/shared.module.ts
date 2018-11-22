import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SecurePipe } from '@core/pipes/secure.pipe';
import {
    AvatarComponent,
    ChartConfigurationBarComponent,
    ChartViewComponent,
    CheckRightstDirective,
    DxModule,
    HeaderComponent,
    HeadingComponent,
    LoadingBarComponent,
    LoadingCubeComponent,
    MainNavItemComponent,
    MainNavItemLanguageComponent,
    MenuComponent,
    MenuFooterComponent,
    MenuItemComponent,
    MessageBoxComponent,
    PingOnActionComponent,
    SegmentedButtonComponent,
    SessionTimerComponent,
    SidebarComponent,
    SpreadSheetComponent,
    StatusBadgeComponent,
    SvgIconComponent,
    TabButtonComponent,
    ToolbarGroupComponent,
    UnsavedChangesPopupComponent,
    UserComponent,
    WarningPopupComponent,
    WidgetDirective
} from '@shared/index';

export function sharedComponents() {
    return [
        SvgIconComponent,
        MainNavItemComponent,
        MainNavItemLanguageComponent,
        HeaderComponent,
        StatusBadgeComponent,
        HeadingComponent,
        AvatarComponent,
        SidebarComponent,
        UserComponent,
        MainNavItemLanguageComponent,
        SessionTimerComponent,
        WarningPopupComponent,
        PingOnActionComponent,
        WidgetDirective,
        ToolbarGroupComponent,
        SpreadSheetComponent,
        MenuComponent,
        MenuItemComponent,
        MenuFooterComponent,
        SecurePipe,
        TabButtonComponent,
        MessageBoxComponent,
        UnsavedChangesPopupComponent,
        SegmentedButtonComponent,
        CheckRightstDirective,
        LoadingBarComponent,
        LoadingCubeComponent,
        ChartViewComponent,
        ChartConfigurationBarComponent
    ];
}

@NgModule({
    declarations: sharedComponents(),
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, DxModule],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, DxModule, ...sharedComponents()]
})
export class SharedModule {}
