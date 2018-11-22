import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxModule } from '@shared/dx.module';
import { RenamePopupComponent } from './rename-popup.component';

describe('RenamePopupComponent', () => {
    let component: RenamePopupComponent;
    let fixture: ComponentFixture<RenamePopupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RenamePopupComponent],
            imports: [DxModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RenamePopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be invalid', () => {
        component.title = '';
        component.visible = true;
        fixture.detectChanges();
        button('Done').click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBeGreaterThan(0);
        expect(component.visible).toEqual(true);
    });

    it('should be valid', () => {
        component.title = 'New Title';
        component.visible = true;
        fixture.detectChanges();
        spyOn(component.newNameEvent, 'emit');
        button('Done').click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(0);
        expect(component.newNameEvent.emit).toHaveBeenCalled();
    });

    it('on close should call closeEvent emit', () => {
        component.visible = true;
        fixture.detectChanges();
        spyOn(component.closeEvent, 'emit');
        fixture.detectChanges();
        (document.getElementsByClassName('dx-closebutton')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(component.closeEvent.emit).toHaveBeenCalled();
    });

    function button(name: string): HTMLSpanElement {
        return Array.from(document.getElementsByClassName('dx-button-text')).find(
            e => e.innerHTML == name
        ) as HTMLSpanElement;
    }
});
