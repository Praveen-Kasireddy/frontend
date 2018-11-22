import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PingService } from '@core/services/ping-service/ping-service';
import { DateTime } from '@shared/date-time/date-time';
import { pingIsOldAfterMinutes, PingOnActionComponent } from '@shared/ping-on-action/ping-on-action.component';

xdescribe('PingOnActionComponent', () => {
    let component: PingOnActionComponent;
    let fixture: ComponentFixture<PingOnActionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PingOnActionComponent],
            providers: [{ provide: PingService, useValue: { ping: () => {} } }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PingOnActionComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
    });

    it('should creates self', () => {
        expect(component).toBeTruthy();
    });

    it('should call ping service', () => {
        const pingService: PingService = TestBed.get(PingService);
        spyOn(pingService, 'ping');
        fixture.debugElement.nativeElement.click();
        expect(pingService.ping).toHaveBeenCalledTimes(1);
        fixture.debugElement.nativeElement.click();
        expect(pingService.ping).toHaveBeenCalledTimes(1);
        component.lastPing = DateTime.now.subtract(DateTime.fromMinutes(pingIsOldAfterMinutes + 1));
        fixture.debugElement.nativeElement.click();
        expect(pingService.ping).toHaveBeenCalledTimes(2);
    });
});
