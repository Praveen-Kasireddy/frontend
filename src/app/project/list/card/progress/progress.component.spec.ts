// test bed
// tslint:disable:max-line-length
import { Component, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProgressComponent } from './progress.component';
// tslint:enable:max-line-length

describe('ProgressComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let comp: TestComponent;
    let find: any;
    let el: HTMLElement;

    @Component({
        template: `
			<kosmos-progress
				[max]="max"
				[value]="value"
			></kosmos-progress>`
    })
    class TestComponent {
        max = 10;
        value = 1;

        @ViewChild(ProgressComponent) progress: ProgressComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, ProgressComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        comp = fixture.componentInstance;
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
        el = find('kosmos-progress').nativeElement;

        fixture.detectChanges();
    });

    describe('when no inputs passed', () => {
        beforeEach(() => {
            comp.max = undefined;
            comp.value = undefined;
            fixture.detectChanges();
        });

        it('progress should be 0', () => {
            expect(comp.progress.size).toBe('0%', 'Invalid progress calculation.');
        });
    });

    describe('when 0 max passed', () => {
        beforeEach(() => {
            comp.max = 0;
            fixture.detectChanges();
        });

        it('progress should be 100%', () => {
            expect(comp.progress.size).toBe('100%', 'Invalid progress calculation.');
        });
    });

    describe('when valid inputs passed', () => {
        beforeEach(() => {
            comp.max = 10;
            comp.value = 5;
            fixture.detectChanges();
        });

        it('should calculate correct progress', () => {
            expect(comp.progress.size).toBe('50%', 'Invalid progress calculation.');
        });
    });

    describe('when progress exceeds 100%', () => {
        beforeEach(() => {
            comp.max = 10;
            comp.value = 15;
            fixture.detectChanges();
        });

        it('should cap progress at 100%', () => {
            expect(comp.progress.size).toBe('0%', 'Progress not capped at 100%.');
        });
    });
});
