import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetCharacteristicType, SheetDimensionType } from '@core/enum';
import { Characteristic, DataPaletteItem, SheetCharacteristic, SheetDimension } from '@core/models';
import { DataExplorerService } from '@core/services';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { DxTooltipModule } from 'devextreme-angular';
import { EventEmitter } from 'events';
import { Observable, of } from 'rxjs';
import { SheetCharacteristicService } from '../sheet-characteristic.service';
// tslint:disable-next-line:max-line-length
import { CharacteristicGroupHeaderComponent } from './sheet-characteristic-group/characteristic-group-header.component';
import { SheetCharacteristicGroupComponent } from './sheet-characteristic-group/sheet-characteristic-group.component';
import { SheetCharacteristicItemComponent } from './sheet-characteristic-item.component';
import { CharacteristicHeaderComponent } from './sheet-characteristic/characteristic-header.component';
import { FilterBadgeComponent } from './sheet-characteristic/filter-badge/filter-badge.component';
import { SheetCharacteristicComponent } from './sheet-characteristic/sheet-characteristic.component';
import { AnalysisMapper } from '../../../../../../shared';

describe('SheetCharacteristicItemComponent', () => {
    let component: SheetCharacteristicItemComponent;
    let fixture: ComponentFixture<SheetCharacteristicItemComponent>;

    const characteristic: SheetCharacteristic = new AnalysisMapper().mapSheetCharacteristicFromDto({
        id: 1,
        type: SheetCharacteristicType.Characteristic,
        caption: 'FooBar',
        removeFromChart: false
    }, SheetDimensionType.Columns);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SheetCharacteristicItemComponent,
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
                    useValue: {
                        currentAnalysis: {
                            dimensions: [
                                { characteristics: [] },
                                {
                                    characteristics: [{ type: SheetDimensionType.Rows, characteristics: undefined }]
                                },
                                { characteristics: [] }
                            ]
                        },
                        currentAnalysisChanged: new EventEmitter(),
                        currentSheetCharacteristicChanged: new EventEmitter(),
                        dimensionChanged: new EventEmitter(),
                        getCharacteristics(projectGuid: string): Observable<Characteristic[]> {
                            return of();
                        },
                        notifyCurrentAnalysisChanged() {},
                        selectDimension(dimension: SheetDimension) {},
                        palette(projectGuid: string, dimension: SheetDimensionType): Observable<DataPaletteItem[]> {
                            return of([] as DataPaletteItem[]);
                        },
                        selectedDimension: { characteristics: [], type: SheetDimensionType.Rows }
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(SheetCharacteristicItemComponent);
        component = fixture.componentInstance;
        component.characteristic = characteristic;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
