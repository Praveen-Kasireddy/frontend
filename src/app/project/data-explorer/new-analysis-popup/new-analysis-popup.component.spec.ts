import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DataExplorerService } from '@core/services';
import { DxModule } from '@shared/dx.module';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { NewAnalysisPopupComponent } from './new-analysis-popup.component';

describe('NewAnalysisPopupComponent', () => {
    let component: NewAnalysisPopupComponent;
    let fixture: ComponentFixture<NewAnalysisPopupComponent>;
    const router = { navigate: jasmine.createSpy('navigate') };
    let existsResult: boolean;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewAnalysisPopupComponent],
            imports: [DxModule],
            providers: [
                {
                    provide: SharedStorageService,
                    useValue: {
                        get() {
                            return { projectGuid: 'guid value' };
                        },
                        set() {}
                    }
                },
                {
                    provide: Router,
                    useValue: router
                },
                {
                    provide: DataExplorerService,
                    useValue: {
                        existsAnalysis(projectGuid: string, name: string): Observable<boolean> {
                            return of(existsResult);
                        }
                    }
                }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(NewAnalysisPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        existsResult = false;
        expect(component).toBeTruthy();
    });

    it('empty name should show invalid message', () => {
        existsResult = false;
        component.show();
        fixture.detectChanges();
        clickDone();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBeGreaterThan(0);
    });

    it('existing name should show invalid message', () => {
        existsResult = true;
        component.show();
        fixture.detectChanges();
        component.name = 'name';
        fixture.detectChanges();
        clickDone();
        fixture.detectChanges();
        expect(document.getElementsByClassName('validation-message')[0].innerHTML).toContain(
            'The title already exists'
        );
    });

    it('not existing name should submit the form', () => {
        existsResult = false;
        const sharedStorageService = TestBed.get(SharedStorageService);
        spyOn(sharedStorageService, 'set');
        component.show();
        fixture.detectChanges();
        component.name = 'name';
        fixture.detectChanges();
        clickDone();
        fixture.detectChanges();
        expect(sharedStorageService.set).toHaveBeenCalledWith('newAnalysisName', 'name');
        expect(router.navigate).toHaveBeenCalledWith(['/projects', 'guid value', 'analysis']);
    });

    function clickDone() {
        (Array.from(document.getElementsByClassName('dx-button-text')).find(e => e.innerHTML == 'Done')
            .parentElement as HTMLDivElement).click();
    }
});
