import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { IngestionDataService } from '@core/services/project/ingestion-data-service';
import { DxModule, HeaderComponent } from 'app/shared';
import { DxDataGridModule } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { DataOverviewComponent } from './data-overview.component';

describe('DataOverviewComponent', () => {
    let component: DataOverviewComponent;
    let fixture: ComponentFixture<DataOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DataOverviewComponent, HeaderComponent],
            imports: [DxModule, DxDataGridModule],
            providers: [
                {
                    provide: SharedStorageService,
                    useClass: MockSharedStorageService
                },
                {
                    provide: IngestionDataService,
                    useValue: {
                        getDataOverview: function(projectGuid: string): Observable<any> {
                            return of([]);
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
