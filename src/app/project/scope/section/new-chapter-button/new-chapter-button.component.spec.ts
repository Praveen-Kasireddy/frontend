import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewChapterButtonComponent } from './new-chapter-button.component';

describe('NewChapterButtonComponent', () => {
    let component: NewChapterButtonComponent;
    let fixture: ComponentFixture<NewChapterButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewChapterButtonComponent]
        });
        fixture = TestBed.createComponent(NewChapterButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('click should call emit', () => {
        spyOn(component.componentClicked, 'emit');
        fixture.nativeElement.click();
        fixture.detectChanges();
        expect(component.componentClicked.emit).toHaveBeenCalled();
    });
});
