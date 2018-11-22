import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxModule } from '@shared/dx.module';
import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
    let component: EditUserComponent;
    let fixture: ComponentFixture<EditUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditUserComponent],
            imports: [DxModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
