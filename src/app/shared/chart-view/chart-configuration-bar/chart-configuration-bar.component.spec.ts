import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartDisplayMode } from '@core/enum/chart-display-mode.enum';
import { ChartType } from '@core/enum/chart-type.enum';
import { TabButtonComponent } from '@shared/tab-button/tab-button.component';
import { ChartConfigurationBarComponent } from './chart-configuration-bar.component';

describe('ChartConfigurationBarComponent', () => {
    let component: ChartConfigurationBarComponent;
    let fixture: ComponentFixture<ChartConfigurationBarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChartConfigurationBarComponent, TabButtonComponent]
        }).compileComponents();
    });

    describe('On set bar type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartType(ChartType.BAR, true);
        });

        it('should set only the isBarType to true', () => {
            expect(component.isBarType).toBe(true);
            expect(component.isColType).toBe(false);
            expect(component.isLineType).toBe(false);
            expect(component.isAreaType).toBe(false);
            expect(component.isPieType).toBe(false);
        });

        it('should emit chart type EventEmitter with bar chart type', () => {
            component.chartTypeChanged.subscribe(e => {
                expect(e).toEqual(ChartType.BAR);
            });
        });
    });

    describe('On set column type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartType(ChartType.COL, true);
        });

        it('should set only the isColType to true', () => {
            expect(component.isBarType).toBe(false);
            expect(component.isColType).toBe(true);
            expect(component.isLineType).toBe(false);
            expect(component.isAreaType).toBe(false);
            expect(component.isPieType).toBe(false);
        });

        it('should emit chart type EventEmitter with column chart type', () => {
            component.chartTypeChanged.subscribe(e => {
                expect(e).toEqual(ChartType.COL);
            });
        });
    });

    describe('On set line type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartType(ChartType.LINE, true);
        });

        it('should set only the isLineType to true', () => {
            expect(component.isBarType).toBe(false);
            expect(component.isColType).toBe(false);
            expect(component.isLineType).toBe(true);
            expect(component.isAreaType).toBe(false);
            expect(component.isPieType).toBe(false);
        });

        it('should emit chart type EventEmitter with line chart type', () => {
            component.chartTypeChanged.subscribe(e => {
                expect(e).toEqual(ChartType.LINE);
            });
        });
    });

    describe('On set area type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartType(ChartType.AREA, true);
        });

        it('should set only the isAreaType to true', () => {
            expect(component.isBarType).toBe(false);
            expect(component.isColType).toBe(false);
            expect(component.isLineType).toBe(false);
            expect(component.isAreaType).toBe(true);
            expect(component.isPieType).toBe(false);
        });

        it('should emit chart type EventEmitter with area chart type', () => {
            component.chartTypeChanged.subscribe(e => {
                expect(e).toEqual(ChartType.AREA);
            });
        });
    });

    describe('On set pie type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartType(ChartType.PIE, true);
        });

        it('should set only the isPieType to true', () => {
            expect(component.isBarType).toBe(false);
            expect(component.isColType).toBe(false);
            expect(component.isLineType).toBe(false);
            expect(component.isAreaType).toBe(false);
            expect(component.isPieType).toBe(true);
        });

        it('should emit chart type EventEmitter with pie chart type', () => {
            component.chartTypeChanged.subscribe(e => {
                expect(e).toEqual(ChartType.PIE);
            });
        });
    });

    describe('On set normal display type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartDisplayMode(ChartDisplayMode.NORMAL, true);
        });

        it('should set only isNormal to true', () => {
            expect(component.isNormal).toBe(true);
            expect(component.isStacked).toBe(false);
            expect(component.isPercentage).toBe(false);
        });

        it('should emit display mode EventEmitter with chart display type normal', () => {
            component.chartDisplayModeChanged.subscribe(e => {
                expect(e).toEqual(ChartDisplayMode.NORMAL);
            });
        });
    });

    describe('On set stacked display type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartDisplayMode(ChartDisplayMode.STACKED, true);
        });

        it('should set only isStacked to true', () => {
            expect(component.isNormal).toBe(false);
            expect(component.isStacked).toBe(true);
            expect(component.isPercentage).toBe(false);
        });

        it('should emit display mode EventEmitter with chart display type stacked', () => {
            component.chartDisplayModeChanged.subscribe(e => {
                expect(e).toEqual(ChartDisplayMode.STACKED);
            });
        });
    });

    describe('On set percentage display type', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(ChartConfigurationBarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            component.setChartDisplayMode(ChartDisplayMode.PERCENTAGE, true);
        });

        it('should set only isPercentage to true', () => {
            expect(component.isNormal).toBe(false);
            expect(component.isStacked).toBe(false);
            expect(component.isPercentage).toBe(true);
        });

        it('should emit display mode EventEmitter with chart display type percentage', () => {
            component.chartDisplayModeChanged.subscribe(e => {
                expect(e).toEqual(ChartDisplayMode.PERCENTAGE);
            });
        });
    });
});
