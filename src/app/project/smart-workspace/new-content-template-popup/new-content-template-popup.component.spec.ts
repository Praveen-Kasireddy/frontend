import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxModule } from '@shared/dx.module';
import { NewContentTemplatePopupComponent } from './new-content-template-popup.component';

describe('NewContentTemplatePopupComponent', () => {
    let component: NewContentTemplatePopupComponent;
    let fixture: ComponentFixture<NewContentTemplatePopupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewContentTemplatePopupComponent],
            imports: [DxModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewContentTemplatePopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should manage correctly all edit cycles', () => {
        component.visible = true;
        fixture.detectChanges();
        button('Done').click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBeGreaterThan(0);

        component.name = 'new template';
        spyOn(component.close, 'emit');
        spyOn(component.done, 'emit');
        fixture.detectChanges();
        button('Done').click();
        fixture.detectChanges();
        expect(component.done.emit).toHaveBeenCalled();
        expect(component.close.emit).not.toHaveBeenCalled();
        expect(component.name).toBe('');
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(0);
    });

    it('on close should call close event emit', () => {
        component.visible = true;
        fixture.detectChanges();
        spyOn(component.close, 'emit');
        fixture.detectChanges();
        (document.getElementsByClassName('dx-closebutton')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(component.close.emit).toHaveBeenCalled();
    });

    function button(name: string): HTMLSpanElement {
        return Array.from(document.getElementsByClassName('dx-button-text')).find(
            e => e.innerHTML == name
        ) as HTMLSpanElement;
    }
});
