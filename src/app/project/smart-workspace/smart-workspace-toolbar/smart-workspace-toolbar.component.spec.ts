import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWorkspaceToolbarComponent } from './smart-workspace-toolbar.component';

describe('SmartWorkspaceToolbarComponent', () => {
    let component: SmartWorkspaceToolbarComponent;
    let fixture: ComponentFixture<SmartWorkspaceToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SmartWorkspaceToolbarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SmartWorkspaceToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
