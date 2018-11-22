// test bed
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// component
import { StatusBadgeComponent } from './status-badge.component';
import { BadgeStatusType } from './status-badge.status-types.enum';

@Component({
    template: `
		<kosmos-status-badge
			[status]="status"
		></kosmos-status-badge>
	`
})
class TestComponent {
    status = BadgeStatusType.ACTIVE;
}

describe('kosmos-status-badge component', () => {
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;
    let find: (selector: string) => DebugElement | null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, StatusBadgeComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        debugElement = fixture.debugElement;
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
    });

    describe('without @inputs', () => {
        beforeEach(() => {
            fixture.componentInstance.status = null;
            fixture.detectChanges();
        });

        it('should not display status tag', () => {
            expect(find('span')).toBeNull('Component rendered empty span tag');
        });
    });

    describe('should display status', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should display span tag', () => {
            expect(find('span')).toBeDefined('Component not rendered expected span tag');
        });

        it('should display status text', () => {
            expect(find('span').nativeElement.textContent.trim()).toEqual('active');
        });

        xit('should render correct theme', () => {
            expect(find('kosmos-status-badge').nativeElement.classList.contains('-active')).toBeTruthy(
                'Element rendered incorrect theme.'
            );
        });
    }); // END: should display stakeholder info correctly
});
