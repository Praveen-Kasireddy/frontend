import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Analysis } from '@core/models';
import { SharedStorageService } from 'ngx-store';
import { AnalysisCardComponent } from './analysis-card.component';

describe('AnalysisCardComponent', () => {
    let component: AnalysisCardComponent;
    let fixture: ComponentFixture<AnalysisCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AnalysisCardComponent],
            providers: [
                {
                    provide: Router,
                    useValue: { navigate() {} }
                },
                {
                    provide: SharedStorageService,
                    useValue: {
                        get() {
                            return { projectGuid: 'project guid' };
                        }
                    }
                }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AnalysisCardComponent);
        component = fixture.componentInstance;
        component.analysis = { id: 1, name: 'name', timestamp: 'timestamp' } as Analysis;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(document.getElementsByClassName('name')[0].innerHTML).toBe('name');
        expect(document.getElementsByClassName('timestamp')[0].innerHTML).toBe('timestamp');
    });

    it('click should navigate to basic page', () => {
        const router = TestBed.get(Router);
        spyOn(router, 'navigate');
        fixture.nativeElement.click();
        fixture.detectChanges();
        expect(router.navigate).toHaveBeenCalledWith(['/projects', 'project guid', 'analysis', 1]);
    });
});
