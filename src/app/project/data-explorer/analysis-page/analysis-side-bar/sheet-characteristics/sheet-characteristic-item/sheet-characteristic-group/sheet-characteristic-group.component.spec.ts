import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetCharacteristicType, SheetDimensionType } from '@core/enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { SheetCharacteristic } from '@core/models';
import { DataExplorerService } from '@core/services';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { DxTooltipModule } from 'devextreme-angular';
import { AnalysisMapper } from '../../../../../../../shared';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';
import { CharacteristicHeaderComponent } from '../sheet-characteristic/characteristic-header.component';
import { FilterBadgeComponent } from '../sheet-characteristic/filter-badge/filter-badge.component';
import { SheetCharacteristicComponent } from '../sheet-characteristic/sheet-characteristic.component';
import { CharacteristicGroupHeaderComponent } from './characteristic-group-header.component';
import { SheetCharacteristicGroupComponent } from './sheet-characteristic-group.component';

describe('SheetCharacteristicGroupComponent', () => {
    let component: SheetCharacteristicGroupComponent;
    let fixture: ComponentFixture<SheetCharacteristicGroupComponent>;

    const characteristic: SheetCharacteristic = new AnalysisMapper().mapSheetCharacteristicFromDto(
        {
            id: 1,
            type: SheetCharacteristicType.Characteristic,
            caption: 'FooBar',
            removeFromChart: false
        },
        SheetDimensionType.Columns
    );

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SheetCharacteristicGroupComponent,
                CharacteristicGroupHeaderComponent,
                SheetCharacteristicComponent,
                CharacteristicHeaderComponent,
                FilterBadgeComponent
            ],
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
                },
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                }
            ]
        });
        fixture = TestBed.createComponent(SheetCharacteristicGroupComponent);
        component = fixture.componentInstance;
        component.characteristic = characteristic;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
