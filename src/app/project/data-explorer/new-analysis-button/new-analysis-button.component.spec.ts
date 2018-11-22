import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewAnalysisButtonComponent } from './new-analysis-button.component';

describe('NewAnalysisButtonComponent', () => {
    let component: NewAnalysisButtonComponent;
    let fixture: ComponentFixture<NewAnalysisButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewAnalysisButtonComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(NewAnalysisButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        let clicked = false;
        component.componentClicked.subscribe(e => (clicked = true));
        (document.getElementsByClassName('card-content')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(clicked).toBeTruthy();
    });
});
