import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PingMockService } from '@core/mocks/ping.mock.service';
import { PingService } from '@core/services';
import { WarningPopupComponent } from '@shared/session-timer/warning-popup/warning-popup.component';
import { DxModule } from 'app/shared';
import { SharedStorageService } from 'ngx-store';
import { SessionTimerComponent } from './session-timer.component';

describe('SessionTimerComponent', () => {
    let component: SessionTimerComponent;
    let fixture: ComponentFixture<SessionTimerComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [DxModule],
            declarations: [SessionTimerComponent, WarningPopupComponent],
            providers: [SharedStorageService, { provide: PingService, useClass: PingMockService }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionTimerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        debugElement = fixture.debugElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    xit('should initialize variables', () => {
        expect(component.timer).toEqual(900);
        expect(component.warning).toEqual(false);
    });
});
