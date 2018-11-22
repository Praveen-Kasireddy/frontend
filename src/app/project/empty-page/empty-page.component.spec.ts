import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from '@shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared';
import { EmptyPageComponent } from './empty-page.component';

xdescribe('EmptyPageComponent', () => {
    let component: EmptyPageComponent;
    let fixture: ComponentFixture<EmptyPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmptyPageComponent, HeaderComponent, SidebarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
