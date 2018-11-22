import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTaskButtonComponent } from './new-task-button.component';

describe('NewTaskButtonComponent', () => {
    let component: NewTaskButtonComponent;
    let fixture: ComponentFixture<NewTaskButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewTaskButtonComponent]
        });
        fixture = TestBed.createComponent(NewTaskButtonComponent);
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
