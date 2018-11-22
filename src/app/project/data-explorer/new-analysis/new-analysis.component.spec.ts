import { NewAnalysisComponent } from './new-analysis.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('NewAnalysisComponent', () => {
    let component: NewAnalysisComponent;
    let fixture: ComponentFixture<NewAnalysisComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewAnalysisComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(NewAnalysisComponent);
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
