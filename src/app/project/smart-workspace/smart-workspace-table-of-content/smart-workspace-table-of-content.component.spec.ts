import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportService } from '@core/services';
import { SmartWorkspaceMessageService } from '@core/services/messages/smart-workspace-message.service';
import { TableOfContentSelectLineComponent } from '../table-of-content-select-line/table-of-content-select-line.component';
import { TaskProgressStateComponent } from '../task-progress-state/task-progress-state.component';
import { SmartWorkspaceTableOfContentComponent } from './smart-workspace-table-of-content.component';

describe('SmartWorkspaceTableOfContentComponent', () => {
    let component: SmartWorkspaceTableOfContentComponent;
    let fixture: ComponentFixture<SmartWorkspaceTableOfContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SmartWorkspaceTableOfContentComponent,
                TaskProgressStateComponent,
                TableOfContentSelectLineComponent
            ],
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [ReportService, SmartWorkspaceMessageService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SmartWorkspaceTableOfContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
