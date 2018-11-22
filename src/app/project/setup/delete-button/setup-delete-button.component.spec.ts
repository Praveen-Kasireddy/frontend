import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDeleteButtonComponent } from './setup-delete-button.component';

describe('SetupDeleteButtonComponent', () => {
    let component: SetupDeleteButtonComponent;
    let fixture: ComponentFixture<SetupDeleteButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SetupDeleteButtonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SetupDeleteButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
