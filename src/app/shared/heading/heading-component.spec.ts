// test bed
import { DebugElement, Component } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

// component
import { HeadingComponent } from './heading.component';
import { By } from '@angular/platform-browser';

@Component({
    template: '<kosmos-heading></kosmos-heading>'
})
class TestComponent { }

describe('kosmos-heading Component', () => {
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, HeadingComponent]
        });
    });

    describe('in default state', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            debugElement = fixture.debugElement.query(By.css('span'));
            fixture.detectChanges();
        });

        it('should render as H1 html element', () => {
            expect(debugElement.nativeElement.querySelector('h1')).toBeDefined(
                'Component not rendered expected h1 tag'
            );
        });
    }); // END: in default state

    describe('with defined level', () => {
        const level = 3;

        it(
            'should render as',
            async(() => {
                TestBed.overrideComponent(TestComponent, {
                    set: {
                        template: `<kosmos-heading level="${level}"></kosmos-heading>`
                    }
                });

                TestBed.compileComponents().then(() => {
                    fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    debugElement = fixture.debugElement.query(By.css('span'));

                    expect(
                        debugElement.nativeElement.querySelector(`h${level}`)
                    ).toBeDefined(
                        'Element with specified level not rendered with correct tag'
                    );
                });
            })
        );
    }); // END: with defined level

    describe('with defined label and count', () => {
        const label = 'Hello World';
        const count = '3';

        it('should render with label and count',
            async(() => {
                TestBed.overrideComponent(TestComponent, {
                    set: {
                        template: `<kosmos-heading label="${label}" count="${count}"></kosmos-heading>`
                    }
                });

                TestBed.compileComponents().then(() => {
                    fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    debugElement = fixture.debugElement.query(By.css('span'));

                    expect(
                        debugElement.nativeElement.querySelector('h1')
                            .innerText
                    ).toEqual(label + count);

                    expect(
                        debugElement.nativeElement.querySelector('em')
                            .textContent
                    ).toEqual(count);
                });
            })
        );
    }); // END: with defined inputs
});
