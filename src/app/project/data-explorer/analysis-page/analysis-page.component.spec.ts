import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDisplayMode, ChartType, SheetDimensionType } from '@core/enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { MockRightService } from '@core/mocks/user/right.mock.service';
import { Analysis, AnalysisDto, Project } from '@core/models';
import { DataExplorerService, RightService } from '@core/services';
import { EqualityComparer } from '@shared/equality-comparer/equality-comparer';
// tslint:disable-next-line:max-line-length
import {
    AnalysisMapper,
    ChartConfigurationBarComponent,
    ChartViewComponent,
    CheckRightstDirective,
    DxModule,
    HeaderComponent,
    SidebarComponent,
    TabButtonComponent,
    ToolbarGroupComponent
} from '@shared/index';
import {
    DxButtonModule,
    DxDropDownBoxModule,
    DxListModule,
    DxPieChartModule,
    DxTooltipModule
} from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';
import { of } from 'rxjs';
import { AnalysisPageComponent } from './analysis-page.component';
import { AnalysisTabComponent } from './analysis-side-bar/analysis-tab/analysis-tab.component';
// tslint:disable-next-line:max-line-length
import { CharacteristicGroupHeaderComponent } from './analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic-group/characteristic-group-header.component';
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicGroupComponent } from './analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic-group/sheet-characteristic-group.component';
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicItemComponent } from './analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic-item.component';
// tslint:disable-next-line:max-line-length
import { CharacteristicHeaderComponent } from './analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic/characteristic-header.component';
// tslint:disable-next-line:max-line-length
import { FilterBadgeComponent } from './analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic/filter-badge/filter-badge.component';
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicComponent } from './analysis-side-bar/sheet-characteristics/sheet-characteristic-item/sheet-characteristic/sheet-characteristic.component';
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicsComponent } from './analysis-side-bar/sheet-characteristics/sheet-characteristics.component';
import { AnalysisToolbarComponent } from './analysis-toolbar/analysis-toolbar.component';
import { DataPaletteComponent } from './data-palette/data-palette.component';
import { FormulaEditorComponent } from './formula-editor/formula-editor.component';
import { FormulaPaletteComponent } from './formula-editor/formula-palette/formula-palette.component';
import { TableViewComponent } from './table-view/table-view.component';

describe('AnalysisPageComponent', () => {
    let component: AnalysisPageComponent;
    let fixture: ComponentFixture<AnalysisPageComponent>;
    let analysisId: string;
    let newAnalysisName: string;
    let analysisDto: AnalysisDto;
    let analysis: Analysis;

    beforeEach(() => {
        const characteristics = [
            { id: 1, name: 'characteristic 1', isNew: false, counter: 1 },
            { id: 2, name: 'characteristic 2', isNew: false, counter: 1 },
            { id: 3, name: 'characteristic 3', isNew: false, counter: 1 }
        ];
        TestBed.configureTestingModule({
            declarations: [
                AnalysisPageComponent,
                DataPaletteComponent,
                HeaderComponent,
                AnalysisTabComponent,
                SheetCharacteristicsComponent,
                SheetCharacteristicComponent,
                ToolbarGroupComponent,
                AnalysisToolbarComponent,
                TableViewComponent,
                ChartViewComponent,
                ChartConfigurationBarComponent,
                TabButtonComponent,
                SidebarComponent,
                FilterBadgeComponent,
                CharacteristicHeaderComponent,
                CharacteristicGroupHeaderComponent,
                SheetCharacteristicGroupComponent,
                SheetCharacteristicItemComponent,
                CheckRightstDirective,
                FormulaEditorComponent,
                FormulaPaletteComponent
            ],
            imports: [
                DxModule,
                DxDropDownBoxModule,
                DxListModule,
                DxPieChartModule,
                DxTooltipModule,
                DxButtonModule,
                HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                },
                {
                    provide: SharedStorageService,
                    useValue: {
                        get(key: string) {
                            return key == 'selectedProject' ? new Project() : newAnalysisName;
                        }
                    }
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({
                            get() {
                                return analysisId;
                            }
                        })
                    }
                },
                {
                    provide: Router,
                    useValue: { navigate() {} }
                },
                {
                    provide: RightService,
                    useClass: MockRightService
                }
            ]
        }).compileComponents();
        analysisDto = {
            id: 1,
            name: undefined,
            userCreatedBy: undefined,
            isChartAnalysis: false,
            chartDisplayMode: ChartDisplayMode.NORMAL,
            chartType: ChartType.BAR,
            scale: 1,
            dimensions: [
                {
                    type: SheetDimensionType.Columns,
                    characteristics: [
                        {
                            id: 1,
                            caption: 'caption 1',
                            characteristics: [{ id: 1, name: 'characteristic 1' }],
                            removeFromChart: false,
                            type: SheetCharacteristicType.Characteristic,
                            sheetCharacteristics: undefined
                        }
                    ]
                },
                {
                    type: SheetDimensionType.Rows,
                    characteristics: [
                        {
                            id: 2,
                            caption: 'caption 2',
                            characteristics: [{ id: 2, name: 'characteristic 2' }],
                            removeFromChart: false,
                            type: SheetCharacteristicType.Characteristic,
                            sheetCharacteristics: undefined
                        }
                    ]
                },
                {
                    type: SheetDimensionType.Global,
                    characteristics: [
                        {
                            id: 3,
                            caption: 'caption 3',
                            characteristics: [{ id: 3, name: 'characteristic 3' }],
                            removeFromChart: false,
                            type: SheetCharacteristicType.Characteristic,
                            sheetCharacteristics: undefined
                        }
                    ]
                }
            ]
        };
        const dataExplorerService: DataExplorerService = TestBed.get(DataExplorerService);
        analysis = new AnalysisMapper().mapFromDto(dataExplorerService, analysisDto);
        spyOn(dataExplorerService, 'getAnalysis').and.returnValue(of(analysisDto));
        // spyOn(dataExplorerService, 'getCharacteristics').and.returnValue(of(characteristics));
    });

    describe('on new analysis', () => {
        beforeEach(() => {
            analysisId = undefined;
            newAnalysisName = 'new analysis name';
            fixture = TestBed.createComponent(AnalysisPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create and save', () => {
            expect(component).toBeTruthy();
            // expect(document.getElementsByClassName('header-subtitle')[0].innerHTML).toContain('new analysis name');
            const service = TestBed.get(DataExplorerService);
            const model = new AnalysisMapper().mapFromDto(service, analysis);
            model.id = undefined;
            model.name = 'new analysis name';
            service.setAnalysis(model);
            const expectedUpdate = new AnalysisMapper().mapToDto('new analysis name', model);
            expectedUpdate.chartDisplayMode = undefined;
            expectedUpdate.chartType = undefined;
            let actualUpdate;
            spyOn(service, 'createAnalysis').and.callFake((projectGuid, analysisArg) => {
                actualUpdate = analysisArg;
                return of(1);
            });
            const router = TestBed.get(Router);
            spyOn(router, 'navigate');
            component.showChart = false;
            fixture.detectChanges();
            component.save();
            fixture.detectChanges();
            expect(component.analysis.id).toBe(1);
            expect(new EqualityComparer(expectedUpdate, actualUpdate).equals).toBeTruthy();
            expect(router.navigate).toHaveBeenCalledWith(['/projects', undefined, 'analysis', 1]);
        });

        it('destroy should call subscriptionToUnsubscribe unsubscribe', () => {
            component.subscriptionsToUnsubscribe.forEach(s => spyOn(s, 'unsubscribe'));
            fixture.destroy();
            component.subscriptionsToUnsubscribe.forEach(s => expect(s.unsubscribe).toHaveBeenCalled());
        });
    });

    describe('on existing analysis', () => {
        beforeEach(() => {
            analysisId = '1';
            fixture = TestBed.createComponent(AnalysisPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create and save', () => {
            expect(component).toBeTruthy();
            expect(analysis.name).toBeUndefined();
            expect(document.getElementsByClassName('header-subtitle')[0].innerHTML).toBe(' ');
            const service = TestBed.get(DataExplorerService);
            const model = analysis;
            const expectedUpdate = new AnalysisMapper().mapToDto('updated analysis name', analysis);
            expectedUpdate.chartDisplayMode = undefined;
            expectedUpdate.chartType = undefined;
            let actualUpdate;
            service.setAnalysis(model);
            component.analysis.name = 'updated analysis name';
            spyOn(service, 'updateAnalysis').and.callFake((projectGuid, id, analysisArg) => {
                actualUpdate = analysisArg;
                return of({});
            });
            component.save();
            expect(new EqualityComparer(expectedUpdate, actualUpdate).equals).toBeTruthy();
        });
    });

    describe('onTableViewClicked', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(AnalysisPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.showTable = false;
            component.showChart = true;
            spyOn(TestBed.get(DataExplorerService), 'notifyCurrentAnalysisChanged').and.callFake(() => {});
        });

        it('should set showTable to true and showChart to false', () => {
            component.onTableViewClicked();
            expect(component.showTable).toBe(true);
            expect(component.showChart).toBe(false);
        });
    });

    describe('onChartViewClicked', () => {
        beforeEach(() => {
            analysisId = '1';
            fixture = TestBed.createComponent(AnalysisPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            spyOn(TestBed.get(DataExplorerService), 'notifyCurrentAnalysisChanged').and.callFake(() => {});
        });

        it('should set showTable to false and showChart to true', () => {
            component.onChartViewClicked();
            fixture.detectChanges();
            expect(component.showChart).toBe(true);
            expect(component.showTable).toBe(false);
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.analysis.chartType).toEqual(ChartType.BAR);
        });
    });
});
