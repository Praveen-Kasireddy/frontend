import { element } from 'protractor';
// test bed
import { DebugElement, Component } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

// component
import { SvgIconComponent } from './svg-icon.component';
import { SvgIconTypes } from './svg-icon.enum';
import { By } from '@angular/platform-browser';

@Component({
    template: '<kosmos-svg-icon [icon]="icon"></kosmos-svg-icon>'
})
class TestComponent {
    icon = SvgIconTypes.MINUS;
}

describe('kosmos-svg-icon Component', () => {
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, SvgIconComponent]
        });
    });

    describe('with minus icon', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            // debugElement = fixture.debugElement.query(By.css('kpmg-icon'));
            debugElement = fixture.debugElement.query(By.directive(SvgIconComponent));
            fixture.detectChanges();
        });

        it('should render as svg tag element', () => {
            expect(
                debugElement.nativeElement.querySelector('svg')
            ).not.toBeUndefined('component did not render as svg tag');
        });

        // some properties are declared as private so have to check viewBox :(
        it('should render with dimensions', () => {
            expect(
                debugElement.nativeElement
                    .querySelector('svg')
                    .getAttribute('viewBox')
            ).toEqual('0 0 17 17');
        });
    }); // END: in default state

    describe('with defined fill color', () => {
        const fillColour = '#ff0000';

        it(
            'should render in specified colour',
            async(() => {
                TestBed.overrideComponent(TestComponent, {
                    set: {
                        template: `<kosmos-svg-icon [icon]="icon" fill="${fillColour}"></kosmos-svg-icon>`
                    }
                });

                TestBed.compileComponents().then(() => {
                    fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    // debugElement = fixture.debugElement.query(By.css('kpmg-svg-icon'));
                    debugElement = fixture.debugElement.query(By.directive(SvgIconComponent));
                    expect(
                        debugElement.nativeElement
                            .querySelector('path')
                            .getAttribute('fill')
                    ).toEqual(fillColour);
                });
            })
        );
    }); // END: with defined fill colour

    describe('with defined stroke', () => {
        const stroke = '#0000ff';

        it(
            'should render with stroke',
            async(() => {
                TestBed.overrideComponent(TestComponent, {
                    set: {
                        template: `<kosmos-svg-icon [icon]="icon" stroke="${stroke}"></kosmos-svg-icon>`
                    }
                });

                TestBed.compileComponents().then(() => {
                    fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    // debugElement = fixture.debugElement.query(By.css('kpmg-svg-icon'));
                    debugElement = fixture.debugElement.query(By.directive(SvgIconComponent));
                    expect(
                        debugElement.nativeElement
                            .querySelector('path')
                            .getAttribute('stroke')
                    ).toEqual(stroke);
                });
            })
        );
    }); // END: with defined stroke
});
