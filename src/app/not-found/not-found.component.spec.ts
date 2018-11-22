import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadingComponent } from '@shared/index';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
    let component: NotFoundComponent;
    let fixture: ComponentFixture<NotFoundComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [NotFoundComponent, HeadingComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
