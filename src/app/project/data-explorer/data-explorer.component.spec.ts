import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Analysis } from '@core/models/project/data-explorer/analysis';
import { DataExplorerService } from '@core/services/project/data-explorer.service';
import { DxModule, HeaderComponent, SidebarComponent } from 'app/shared';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { AnalysisCardComponent } from './analysis-card/analysis-card.component';
import { DataExplorerComponent } from './data-explorer.component';
import { NewAnalysisButtonComponent } from './new-analysis-button/new-analysis-button.component';
import { NewAnalysisPopupComponent } from './new-analysis-popup/new-analysis-popup.component';

describe('DataExplorerComponent', () => {
    let component: DataExplorerComponent;
    let fixture: ComponentFixture<DataExplorerComponent>;
    const router = { navigate: jasmine.createSpy('navigate') };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                DataExplorerComponent,
                SidebarComponent,
                HeaderComponent,
                NewAnalysisButtonComponent,
                AnalysisCardComponent,
                NewAnalysisPopupComponent
            ],
            imports: [DxModule],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({
                            get: function(key: string) {
                                return 'guid value';
                            }
                        })
                    }
                },
                {
                    provide: DataExplorerService,
                    useValue: {
                        html(projectGuid: string, explorerId: number): Observable<string> {
                            return of('<table></table>');
                        },
                        list(projectGuid: string): Observable<Analysis[]> {
                            return of([{ name: 'analysis 1', timestamp: '7 Jul 2018 | 10:46' } as Analysis]);
                        }
                    }
                },
                {
                    provide: SharedStorageService,
                    useValue: {
                        get() {
                            return { projectGuid: 'guid value' };
                        }
                    }
                },
                {
                    provide: Router,
                    useValue: router
                }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(DataExplorerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(document.getElementsByClassName('name')[0].innerHTML).toBe('analysis 1');
    });

    it('click on new should navigate to analysis page', () => {
        (document.getElementsByClassName('card-content')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-popup-title').length).toBeGreaterThan(0);
    });
});
