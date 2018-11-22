import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CheckRightstDirective, SvgIconComponent } from '@shared/index';
import { NGXLogger } from 'ngx-logger';
import { NewStakeholderComponent } from './stakeholder-new.component';

describe('NewStakeholderComponent', () => {
    let component: NewStakeholderComponent;
    let fixture: ComponentFixture<NewStakeholderComponent>;
    let find: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewStakeholderComponent, SvgIconComponent, CheckRightstDirective], // EventEmitter, HostListener, MouseEvent
            imports: [],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [NGXLogger]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewStakeholderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
    });

    function createMouseEvent(typeArg: string): MouseEvent {
        const event = document.createEvent('MouseEvent');
        event.initMouseEvent(
            typeArg,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
        return event;
    }

    xit('creates self', () => {
        expect(component).toBeTruthy();
    });
});
