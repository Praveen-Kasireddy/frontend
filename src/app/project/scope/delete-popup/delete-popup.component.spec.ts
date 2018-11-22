import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxPopupComponent, DxTemplateModule, DxToolbarModule } from 'devextreme-angular';

import { DxModule } from 'app/shared';
import { DeletePopupComponent } from './delete-popup.component';
import { DxiToolbarItemModule } from 'devextreme-angular/ui/nested/toolbar-item-dxi';

describe('DeletePopupComponent', () => {
    let component: DeletePopupComponent;
    let fixture: ComponentFixture<DeletePopupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeletePopupComponent, DxPopupComponent],
            imports: [DxTemplateModule, DxToolbarModule, DxiToolbarItemModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeletePopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    xit('emits closed(true) when button yes is clicked', () => {});

    xit('emits closed(false) when button no is clicked', () => {});
});
