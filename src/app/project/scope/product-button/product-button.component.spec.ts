import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockProductButtonResizeService } from '@core/mocks/project/product-button-resize.mock.service';
import { ProductButtonResizeService } from '@core/services/project/product-button-resize.service';
import { MockMouseEvent } from '@shared/unit-test/mock-mouse-event';
import { ProductButtonComponent } from './product-button.component';
import { ProductRemoveButtonComponent } from './product-remove-button/product-remove-button.component';

describe('ProductButtonComponent', () => {
    let component: ProductButtonComponent;
    let fixture: ComponentFixture<ProductButtonComponent>;
    const mockMouseEvent = new MockMouseEvent();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductButtonComponent, ProductRemoveButtonComponent],
            providers: [{ provide: ProductButtonResizeService, useClass: MockProductButtonResizeService }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductButtonComponent);
        component = fixture.componentInstance;
        component.canBeDeleted = true;
        component.product = { id: 1, guid: 'guid1', name: 'product1', path: 'path1' };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(
        'sends event when clicked',
        fakeAsync(() => {
            spyOn(component.selected, 'emit');
            component.onClicked(mockMouseEvent.create('click'));
            tick(1);
            expect(component.selected.emit).toHaveBeenCalled();
        })
    );

    it('forwards event when remove event received', async(() => {
        // arrange
        spyOn(component.remove, 'emit');

        const removeButton = fixture.debugElement.nativeElement.querySelector('div.xButton');
        expect(removeButton).toBeTruthy('remove button missing');

        // act
        removeButton.click();

        // assert
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.remove.emit).toHaveBeenCalled();
        });
    }));
});
