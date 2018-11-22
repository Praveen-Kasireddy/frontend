import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetCharacteristicType, SheetDimensionType } from '@core/enum';
import { SheetCharacteristic } from '@core/models';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { DxTooltipModule } from 'devextreme-angular';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';
import { CharacteristicGroupHeaderComponent } from './characteristic-group-header.component';
import { AnalysisMapper } from 'app/shared';

describe('CharacteristicGroupHeaderComponent', () => {
    let component: CharacteristicGroupHeaderComponent;
    let fixture: ComponentFixture<CharacteristicGroupHeaderComponent>;

    const characteristic: SheetCharacteristic = new AnalysisMapper().mapSheetCharacteristicFromDto({
        id: 1,
        type: SheetCharacteristicType.Characteristic,
        caption: 'FooBar',
        removeFromChart: false
    }, SheetDimensionType.Columns);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CharacteristicGroupHeaderComponent],
            imports: [DxTooltipModule],
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
            ]
        });

        fixture = TestBed.createComponent(CharacteristicGroupHeaderComponent);
        component = fixture.componentInstance;
        component.characteristic = characteristic;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
