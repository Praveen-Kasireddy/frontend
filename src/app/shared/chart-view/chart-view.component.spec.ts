import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { Analysis, Project, AnalysisDto } from '@core/models';
import { DataExplorerService } from '@core/services';
import { TabButtonComponent } from '@shared/tab-button/tab-button.component';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { ChartConfigurationBarComponent } from './chart-configuration-bar/chart-configuration-bar.component';
import { ChartViewComponent } from './chart-view.component';
import { AnalysisMapper } from '@shared/data-explorer/analysis-mapper';

describe('ChartViewComponent', () => {
    let component: ChartViewComponent;
    let fixture: ComponentFixture<ChartViewComponent>;

    const chartData: any[] = [
        {
            argumentField: '2017',
            nameField: 'Actual',
            valueField: 100,
            isPercentageValue: false
        },
        {
            argumentField: '2017',
            nameField: 'Budget',
            valueField: 200,
            isPercentageValue: false
        },
        {
            argumentField: '2017',
            nameField: 'Plan',
            valueField: 300,
            isPercentageValue: false
        },
        {
            argumentField: '2018',
            nameField: 'Actual',
            valueField: 400,
            isPercentageValue: false
        },
        {
            argumentField: '2018',
            nameField: 'Budget',
            valueField: 500,
            isPercentageValue: false
        },
        {
            argumentField: '2018',
            nameField: 'Plan',
            valueField: 600,
            isPercentageValue: false
        },
        {
            argumentField: '2019',
            nameField: 'Actual',
            valueField: 700,
            isPercentageValue: false
        },
        {
            argumentField: '2019',
            nameField: 'Budget',
            valueField: 800,
            isPercentageValue: false
        },
        {
            argumentField: '2019',
            nameField: 'Plan',
            valueField: 900,
            isPercentageValue: false
        }
    ];

    function getAnalysis(dataExplorerService: DataExplorerService) {
        const result = new AnalysisMapper().mapFromDto(dataExplorerService, {
            id: 1,
            name: 'Funny analysis name',
            userCreatedBy: undefined,
            isChartAnalysis: true,
            chartDisplayMode: ChartDisplayMode.NORMAL,
            chartType: ChartType.BAR,
            dimensions: [
                {
                    type: SheetDimensionType.Columns,
                    characteristics: [
                        {
                            id: 1,
                            type: SheetCharacteristicType.Characteristic,
                            caption: 'characteristic 1',
                            characteristics: [{ id: 1, name: 'characteristic 1' }],
                            removeFromChart: false
                        }
                    ]
                },
                {
                    type: SheetDimensionType.Rows,
                    characteristics: [
                        {
                            id: 2,
                            type: SheetCharacteristicType.Characteristic,
                            caption: 'characteristic 2',
                            characteristics: [{ id: 2, name: 'characteristic 2' }],
                            removeFromChart: false
                        }
                    ]
                }
            ],
            scale: 1
        });
        dataExplorerService.setAnalysis(result);
        return result;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChartViewComponent, ChartConfigurationBarComponent, TabButtonComponent],
            providers: [
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                },
                {
                    provide: SharedStorageService,
                    useValue: {
                        get(key: string) {
                            return new Project();
                        }
                    }
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        const dataExplorerService: DataExplorerService = TestBed.get(DataExplorerService);
        dataExplorerService.currentAnalysis = getAnalysis(dataExplorerService);
    });

    describe('On set chart type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            component.analysis = TestBed.get(DataExplorerService).currentAnalysis;
            fixture.detectChanges();
        });

        it('should set chart type - case bar', () => {
            component.onSetChartType(ChartType.BAR);
            fixture.detectChanges();
            expect(component.analysis.chartType).toEqual(ChartType.BAR);
            expect(component.chartType).toEqual(ChartType.BAR);
            expect(component.isBar).toBe(true);
            expect(component.enableMargin).toBe(true);
            expect(component.isPie).toBe(false);
        });

        it('should set chart type - case col', () => {
            component.onSetChartType(ChartType.COL);
            fixture.detectChanges();
            expect(component.analysis.chartType).toEqual(ChartType.COL);
            expect(component.chartType).toEqual(ChartType.COL);
            expect(component.isBar).toBe(false);
            expect(component.enableMargin).toBe(true);
            expect(component.isPie).toBe(false);
        });

        it('should set chart type - case line', () => {
            component.onSetChartType(ChartType.LINE);
            fixture.detectChanges();
            expect(component.analysis.chartType).toEqual(ChartType.LINE);
            expect(component.chartType).toEqual(ChartType.LINE);
            expect(component.isBar).toBe(false);
            expect(component.enableMargin).toBe(false);
            expect(component.isPie).toBe(false);
        });

        it('should set chart type - case area', () => {
            component.onSetChartType(ChartType.AREA);
            fixture.detectChanges();
            expect(component.analysis.chartType).toEqual(ChartType.AREA);
            expect(component.chartType).toEqual(ChartType.AREA);
            expect(component.isBar).toBe(false);
            expect(component.enableMargin).toBe(false);
            expect(component.isPie).toBe(false);
        });

        it('should set chart type to pie', () => {
            component.onSetChartType(ChartType.PIE);
            fixture.detectChanges();
            expect(component.analysis.chartType).toEqual(ChartType.PIE);
            expect(component.isPie).toBe(true);
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
        });
    });

    describe('On set chart display mode for bar', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            component.analysis = getAnalysis(TestBed.get(DataExplorerService));
            fixture.detectChanges();
            component.onSetChartType(ChartType.BAR);
            fixture.detectChanges();
        });

        it('should set display mode - case normal', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.NORMAL);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayModeString).toEqual('bar');
        });

        it('should set display mode - case stacked', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.STACKED);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayModeString).toEqual('stackedBar');
        });

        it('should set display mode - case percentage', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.PERCENTAGE);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayModeString).toEqual('fullStackedBar');
        });
    });

    describe('On set chart display mode for col', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            component.analysis = getAnalysis(TestBed.get(DataExplorerService));
            fixture.detectChanges();
            component.onSetChartType(ChartType.COL);
            fixture.detectChanges();
        });

        it('should set display mode - case normal', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.NORMAL);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayModeString).toEqual('bar');
        });

        it('should set display mode - case stacked', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.STACKED);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayModeString).toEqual('stackedBar');
        });

        it('should set display mode - case percentage', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.PERCENTAGE);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayModeString).toEqual('fullStackedBar');
        });
    });

    describe('On set chart display mode for line', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            const service: DataExplorerService = TestBed.get(DataExplorerService);
            component.analysis = getAnalysis(service);
            fixture.detectChanges();
            component.onSetChartType(ChartType.LINE);
            fixture.detectChanges();
        });

        it('should set display mode - case normal', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.NORMAL);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayModeString).toEqual('line');
        });

        it('should set display mode - case stacked', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.STACKED);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayModeString).toEqual('stackedline');
        });

        it('should set display mode - case percentage', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.PERCENTAGE);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayModeString).toEqual('fullstackedline');
        });
    });

    describe('On set chart display mode for area', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            component.analysis = getAnalysis(TestBed.get(DataExplorerService));
            fixture.detectChanges();
            component.onSetChartType(ChartType.AREA);
            fixture.detectChanges();
        });

        it('should set display mode - case normal', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.NORMAL);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayModeString).toEqual('area');
        });

        it('should set display mode - case stacked', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.STACKED);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.STACKED);
            expect(component.chartDisplayModeString).toEqual('stackedarea');
        });

        it('should set display mode - case percentage', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.PERCENTAGE);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayModeString).toEqual('fullstackedarea');
        });
    });

    describe('On set chart display mode for pie', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            component.analysis = getAnalysis(TestBed.get(DataExplorerService));
            fixture.detectChanges();
            component.onSetChartType(ChartType.PIE);
            fixture.detectChanges();
        });

        it('should set display mode - case normal', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.NORMAL);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.showNormalPie).toBe(true);
        });

        it('should set display mode - case stacked', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.STACKED);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.NORMAL);
            expect(component.showNormalPie).toBe(true);
        });

        it('should set display mode - case percentage', () => {
            component.onSetChartDisplayMode(ChartDisplayMode.PERCENTAGE);
            fixture.detectChanges();
            expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
            expect(component.showNormalPie).toBe(false);
        });
    });

    describe('On reload data with existing characteristics ', () => {
        let dataExplorerService;
        let newAnalysis: Analysis;

        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            component.analysis = getAnalysis(TestBed.get(DataExplorerService));
            fixture.detectChanges();
            dataExplorerService = TestBed.get(DataExplorerService);
            spyOn(dataExplorerService, 'getChartData').and.returnValue(of(chartData));
            newAnalysis = getAnalysis(TestBed.get(DataExplorerService));
            fixture.detectChanges();
            component.reloadData(newAnalysis);
        });

        it('should get data for analysis from service', () => {
            expect(dataExplorerService.getChartData).toHaveBeenCalled();
        });

        it('should assign the data object', () => {
            expect(component.data.length).toEqual(9);
        });

        it('pie chart data should be empty as 3 colums are in data', () => {
            expect(component.pieChartData.length).toEqual(0);
            expect(component.pieChartData.length).not.toBeTruthy();
        });
    });

    describe('On reload data without existing characteristics ', () => {
        let dataExplorerService;
        let newAnalysis: Analysis;

        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            component.analysis = getAnalysis(TestBed.get(DataExplorerService));
            fixture.detectChanges();
            dataExplorerService = TestBed.get(DataExplorerService);
            newAnalysis = getAnalysis(TestBed.get(DataExplorerService));
            newAnalysis.dimensions[0].characteristics = [];
            newAnalysis.dimensions[1].characteristics = [];
            fixture.detectChanges();
            spyOn(dataExplorerService, 'getChartData').and.returnValue({ subscribe: () => {} });
            component.reloadData(newAnalysis);
        });

        it('should not get data for analysis from service', () => {
            expect(dataExplorerService.getChartData).not.toHaveBeenCalled();
        });
    });
});

// Special test cases for pie chart
describe('ChartViewComponent - set pie chart type - analysis was percentage', () => {
    let component: ChartViewComponent;
    let fixture: ComponentFixture<ChartViewComponent>;

    const chartData: any[] = [
        {
            argumentField: '2017',
            nameField: 'Actual',
            valueField: 100,
            isPercentageValue: false
        },
        {
            argumentField: '2017',
            nameField: 'Budget',
            valueField: 200,
            isPercentageValue: false
        },
        {
            argumentField: '2017',
            nameField: 'Plan',
            valueField: 300,
            isPercentageValue: false
        }
    ];
    const analysis: AnalysisDto = {
        id: 1,
        name: 'Funny analysis name',
        userCreatedBy: undefined,
        isChartAnalysis: true,
        chartDisplayMode: ChartDisplayMode.PERCENTAGE,
        chartType: ChartType.PIE,
        dimensions: [
            {
                type: SheetDimensionType.Columns,
                characteristics: [
                    {
                        id: 1,
                        type: SheetCharacteristicType.Characteristic,
                        caption: 'characteristic 1',
                        characteristics: [{ id: 1, name: 'characteristic 1' }],
                        removeFromChart: false
                    }
                ]
            },
            {
                type: SheetDimensionType.Rows,
                characteristics: [
                    {
                        id: 2,
                        type: SheetCharacteristicType.Characteristic,
                        caption: 'characteristic 2',
                        characteristics: [{ id: 2, name: 'characteristic 2' }],
                        removeFromChart: false
                    }
                ]
            }
        ],
        scale: 1
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChartViewComponent, ChartConfigurationBarComponent, TabButtonComponent],
            providers: [
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                },
                {
                    provide: SharedStorageService,
                    useValue: {
                        get(key: string) {
                            return new Project();
                        }
                    }
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        const dataExplorerService = TestBed.get(DataExplorerService);
        dataExplorerService.currentAnalysis = analysis;
        fixture = TestBed.createComponent(ChartViewComponent);
        component = fixture.componentInstance;
        component.analysis = new AnalysisMapper().mapFromDto(dataExplorerService, analysis);
        fixture.detectChanges();

        component.onSetChartType(ChartType.PIE);
        fixture.detectChanges();
    });

    it('display type should stay percentage', () => {
        component.onSetChartDisplayMode(ChartDisplayMode.STACKED);
        fixture.detectChanges();
        expect(component.analysis.chartType).toEqual(ChartType.PIE);
        expect(component.isPie).toBe(true);
        expect(component.analysis.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
        expect(component.chartDisplayMode).toEqual(ChartDisplayMode.PERCENTAGE);
    });

    describe('On reload data with existing characteristics and one column', () => {
        let dataExplorerService;
        let newAnalysis: Analysis;

        beforeEach(() => {
            fixture = TestBed.createComponent(ChartViewComponent);
            component = fixture.componentInstance;
            dataExplorerService = TestBed.get(DataExplorerService);
            component.analysis = new AnalysisMapper().mapFromDto(dataExplorerService, analysis);
            fixture.detectChanges();
            spyOn(dataExplorerService, 'getChartData').and.returnValue(of(chartData));
            newAnalysis = new AnalysisMapper().mapFromDto(dataExplorerService, analysis);
            fixture.detectChanges();
            component.reloadData(newAnalysis);
        });

        it('pie chart data should contain the data', () => {
            expect(component.canDisplayPie).toBe(true);
            expect(component.pieChartData.length).toEqual(3);
            expect(component.pieChartData[0]['argumentField']).toEqual('Actual');
            expect(component.pieChartData[0]['valueField']).toEqual(100);
            expect(component.pieChartData[1]['argumentField']).toEqual('Budget');
            expect(component.pieChartData[1]['valueField']).toEqual(200);
            expect(component.pieChartData[2]['argumentField']).toEqual('Plan');
            expect(component.pieChartData[2]['valueField']).toEqual(300);
        });
    });
});
