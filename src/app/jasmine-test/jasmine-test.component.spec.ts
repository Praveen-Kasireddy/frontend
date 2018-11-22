import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { JasmineTestComponent } from './jasmine-test.component';

describe('JasmineTestComponent', () => {
    let component: JasmineTestComponent;
    let fixture: ComponentFixture<JasmineTestComponent>;
    let find: any;

    beforeEach(async () => {
        // console.log('JasmineTestComponent.beforeEach()');
        TestBed.configureTestingModule({
            declarations: [JasmineTestComponent]
        });
        // console.log('JasmineTestComponent.beforeEach() --> configureTestingModule');
        fixture = TestBed.createComponent(JasmineTestComponent);
        fixture.whenStable().then(
            () => {
                fixture.detectChanges();
                // console.log('JasmineTestComponent.beforeEach() --> createComponent');
                component = fixture.componentInstance;
                // console.log('JasmineTestComponent.beforeEach() --> completes');
            },
            () => {
                // console.log('JasmineTestComponent.beforeEach() --> fails');
            }
        );
        find = selector => fixture.debugElement.query(By.css(selector));
    });

    it('creates self', () => {
        // console.log('it creates self --> ', component);
        expect(component).toBeTruthy();
    });

    it('logs', () => {
        // console.log('it logs --> ', component);
        expect(component).toBeDefined();
    });
});
