import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductRemoveButtonComponent } from './product-remove-button.component';
import { MockMouseEvent } from '@shared/unit-test/mock-mouse-event';

describe('ProductRemoveButtonComponent', () => {
    let component: ProductRemoveButtonComponent;
    let fixture: ComponentFixture<ProductRemoveButtonComponent>;
    const mockMouseEvent: MockMouseEvent = new MockMouseEvent();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductRemoveButtonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductRemoveButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(
        'sends event when clicked',
        fakeAsync(() => {
            spyOn(component.removeEvent, 'emit');
            component.handleClick(mockMouseEvent.create('click'));
            tick(1);
            expect(component.removeEvent.emit).toHaveBeenCalled();
        })
    );
});
