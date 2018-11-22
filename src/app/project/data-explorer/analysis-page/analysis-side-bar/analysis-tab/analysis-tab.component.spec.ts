import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { DataExplorerService } from '@core/services';
import { AnalysisTabComponent } from './analysis-tab.component';

describe('AnalysisTabComponent', () => {
    let component: AnalysisTabComponent;
    let fixture: ComponentFixture<AnalysisTabComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AnalysisTabComponent],
            providers: [
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                }
            ]
        });
        fixture = TestBed.createComponent(AnalysisTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(document.getElementsByClassName('selected').length).toBe(0);
    });

    it('click should call selectDimensionType', () => {
        const service = TestBed.get(DataExplorerService);
        spyOn(service, 'selectDimensionType');
        (fixture.nativeElement as HTMLDivElement).click();
        fixture.detectChanges();
        expect(service.selectDimensionType).toHaveBeenCalled();
    });

    it('selected should specify selected class', () => {
        component.selected = true;
        fixture.detectChanges();
        expect(document.getElementsByClassName('selected').length).toBe(1);
    });
});
