import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetCharacteristicType } from '@core/enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { SheetCharacteristic } from '@core/models';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { AnalysisMapper } from 'app/shared';
import { DxTooltipModule } from 'devextreme-angular';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';
import { CharacteristicHeaderComponent } from './characteristic-header.component';

describe('CharacteristicHeaderComponent', () => {
    let component: CharacteristicHeaderComponent;
    let fixture: ComponentFixture<CharacteristicHeaderComponent>;

    function getCharacteristic(): SheetCharacteristic {
        return new AnalysisMapper().mapSheetCharacteristicFromDto(
            {
                id: 1,
                type: SheetCharacteristicType.Characteristic,
                caption: 'FooBar',
                removeFromChart: false
            },
            SheetDimensionType.Columns
        );
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CharacteristicHeaderComponent],
            providers: [
                {
                    provide: SheetCharacteristicService,
                    useValue: {
                        toggleCharacteristicChartEnabled(i: CharacteristicItemInfo) {},
                        renameCharacteristic(i: CharacteristicItemInfo) {},
                        createGroup(i: number) {},
                        releaseFromGroup(info: CharacteristicItemInfo) {},
                        removeCharacteristicItem(info: CharacteristicItemInfo) {},
                        dropItem(info: DroppedCharacteristicInfo) {},
                        getColumnIndexLetter(i: number) {
                            return 'AB';
                        }
                    }
                }
            ],
            imports: [DxTooltipModule]
        });
    });

    describe('non-column dimension', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
            component.characteristic = getCharacteristic();
            component.sheetDimensionType = SheetDimensionType.Rows;
            component.characteristicIndex = 45;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('the tooltip should be hide from chart', () => {
            expect(component.chartTooltip).toEqual('Hide from chart');
        });

        it('the show in chart button should be enabled', () => {
            expect(component.showInChartEnabled).toBe(true);
        });
    });

    describe('column dimension', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
            component.characteristic = getCharacteristic();
        });

        it('the show in chart button should be enabled', () => {
            expect(component.showInChartEnabled).toBe(true);
        });
    });

    describe('if chart is disabled', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
            component.sheetDimensionType = SheetDimensionType.Rows;
            const characteristic = getCharacteristic();
            characteristic.removeFromChart = true;
            component.characteristic = characteristic;
            fixture.detectChanges();
        });

        it('the tooltip should be show in chart', () => {
            expect(component.chartTooltip).toEqual('Show in chart');
        });
    });

    describe('if global sheet dimension', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(CharacteristicHeaderComponent);
            component = fixture.componentInstance;
            component.sheetDimensionType = SheetDimensionType.Global;
            component.characteristic = getCharacteristic();
            fixture.detectChanges();
        });

        it('the show in chart button should be disabled', () => {
            expect(component.showInChartEnabled).toBe(false);
        });
    });
});
