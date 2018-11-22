import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CheckRightstDirective, DxModule } from '@shared/index';
import { NGXLogger } from 'ngx-logger';
import { NewTeamMemberComponent } from './team-member-new.component';

describe('NewTeamMemberComponent', () => {
    let thisComponent: NewTeamMemberComponent;
    let fixture: ComponentFixture<NewTeamMemberComponent>;
    let find: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewTeamMemberComponent, CheckRightstDirective],
            imports: [DxModule],
            providers: [NGXLogger]
        }).compileComponents();

        fixture = TestBed.createComponent(NewTeamMemberComponent);
        thisComponent = fixture.componentInstance;
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
        fixture.detectChanges();
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

    xdescribe('NewTeamMemberComponent', () => {
        it('creates self', () => {
            expect(thisComponent).toBeTruthy();
        });
    });
});
