import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaItemType } from '@core/enum/formula-item-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { DataPaletteItem } from '@core/models';
import { Characteristic } from '@core/models/project/characteristic';
import { SheetDimension } from '@core/models/project/data-explorer/sheet-dimension';
import { DataExplorerService } from '@core/services';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DraggedCharacteristicInfo } from '@shared/data-explorer/dragged-characteristic-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { DxTooltipModule } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { AnalysisMapper } from '../../../../../shared';
// tslint:disable-next-line:max-line-length
import { CharacteristicGroupHeaderComponent } from './sheet-characteristic-item/sheet-characteristic-group/characteristic-group-header.component';
// tslint:disable-next-line:max-line-length
import { SheetCharacteristicGroupComponent } from './sheet-characteristic-item/sheet-characteristic-group/sheet-characteristic-group.component';
import { SheetCharacteristicItemComponent } from './sheet-characteristic-item/sheet-characteristic-item.component';
// tslint:disable-next-line:max-line-length
import { CharacteristicHeaderComponent } from './sheet-characteristic-item/sheet-characteristic/characteristic-header.component';
import { FilterBadgeComponent } from './sheet-characteristic-item/sheet-characteristic/filter-badge/filter-badge.component';
import { SheetCharacteristicComponent } from './sheet-characteristic-item/sheet-characteristic/sheet-characteristic.component';
import { SheetCharacteristicService } from './sheet-characteristic.service';
import { SheetCharacteristicsComponent } from './sheet-characteristics.component';

describe('SheetCharacteristicsComponent', () => {
    describe('on drop', () => {
        let component: SheetCharacteristicsComponent;
        let fixture: ComponentFixture<SheetCharacteristicsComponent>;
        const characteristics = [
            { id: 1, name: 'characteristic 1', isNew: false, counter: 1 },
            { id: 2, name: 'characteristic 2', isNew: false, counter: 1 }
        ];
        const event: CustomEvent & { dataTransfer?: DataTransfer } = new CustomEvent('drop', {
            bubbles: true,
            cancelable: true
        });

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    SheetCharacteristicsComponent,
                    SheetCharacteristicComponent,
                    FilterBadgeComponent,
                    CharacteristicHeaderComponent,
                    SheetCharacteristicItemComponent,
                    SheetCharacteristicGroupComponent,
                    CharacteristicGroupHeaderComponent
                ],
                providers: [
                    {
                        provide: DataExplorerService,
                        useValue: {
                            currentAnalysis: {
                                dimensions: [
                                    { characteristics: [] },
                                    {
                                        characteristics: [
                                            { type: SheetDimensionType.Rows, characteristics: characteristics }
                                        ]
                                    },
                                    { characteristics: [] }
                                ]
                            },
                            currentAnalysisChanged: new EventEmitter(),
                            currentSheetCharacteristicChanged: new EventEmitter(),
                            dimensionChanged: new EventEmitter(),
                            getCharacteristics(projectGuid: string): Observable<Characteristic[]> {
                                return of(characteristics);
                            },
                            notifyCurrentAnalysisChanged() {
                                this.currentAnalysisChanged.emit(this.currentAnalysis);
                            },
                            selectDimension(dimension: SheetDimension) {
                                this.dimensionChanged.emit(dimension);
                            },
                            palette(projectGuid: string, dimension: SheetDimensionType): Observable<DataPaletteItem[]> {
                                return of([
                                    {
                                        name: 'TIME',
                                        isExpanded: true,
                                        cssClass: 'group',
                                        children: [
                                            {
                                                type: SheetCharacteristicType.Characteristic,
                                                name: 'characteristic 1',
                                                characteristicId: 1,
                                                cssClass: 'item'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'TIME',
                                        isExpanded: true,
                                        cssClass: 'group',
                                        children: [
                                            {
                                                type: SheetCharacteristicType.Characteristic,
                                                name: 'characteristic 2',
                                                characteristicId: 2,
                                                cssClass: 'item'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'FooBar',
                                        isExpanded: true,
                                        cssClass: 'group',
                                        children: [
                                            {
                                                type: SheetCharacteristicType.Characteristic,
                                                name: 'characteristic 3',
                                                characteristicId: 3,
                                                cssClass: 'item'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'MISC',
                                        isExpanded: true,
                                        cssClass: 'group',
                                        children: [
                                            {
                                                type: SheetCharacteristicType.Characteristic,
                                                name: 'Blank',
                                                characteristicId: 0,
                                                cssClass: 'item'
                                            }
                                        ]
                                    }
                                ] as DataPaletteItem[]);
                            },
                            selectedDimension: { characteristics: [], type: SheetDimensionType.Rows }
                        }
                    },
                    { provide: SharedStorageService, useClass: MockSharedStorageService },
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
            fixture = TestBed.createComponent(SheetCharacteristicsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();

            // prepare the first drop
            const dataExplorerService = TestBed.get(DataExplorerService);
            dataExplorerService.selectDimension(dataExplorerService.selectedDimension);
            fixture.detectChanges();
            event.dataTransfer = { types: ['Text'] } as DataTransfer;
            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 1, 'TIME')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromCharacteristic(undefined, 0);
            component.onDrop(event);
            fixture.detectChanges();
        });

        it('on drop on top level should push characteristic to the end', () => {
            expect(characteristicName(0)).toContain('characteristic 1');

            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 2, 'TIME')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromTopLevel();
            component.onDrop(event);

            fixture.detectChanges();
            expect(characteristicName(1)).toContain('characteristic 2');
        });

        it('on drop over the group should push characteristic to group', () => {
            expect(characteristicName(0)).toContain('characteristic 1');

            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 2, 'TIME')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromTopLevel();
            component.onDrop(event);

            fixture.detectChanges();
            component.createGroupFor(0);
            fixture.detectChanges();

            event.dataTransfer.getData = () => JSON.stringify(DraggedCharacteristicInfo.fromCharacteristic(1, -1));
            component.droppedItemInfo = DroppedCharacteristicInfo.fromCharacteristic(0, -1);
            component.onDrop(event);
            fixture.detectChanges();
            expect(characteristicName(1)).toContain('characteristic 2');
            expect(component.selectedDimension.characteristics.length).toEqual(1);
            expect(component.selectedDimension.characteristics[0].sheetCharacteristics.length).toEqual(2);
        });

        it('on drop on filter should add filter in the characteristic list', () => {
            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 3, 'FooBar')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromFilter(-1, 0, -1);
            component.onDrop(event);
            fixture.detectChanges();

            expect(component.selectedDimension.characteristics[0].characteristics.length).toEqual(2);
            expect(component.selectedDimension.characteristics[0].characteristics[0].id).toEqual(1);
            expect(component.selectedDimension.characteristics[0].characteristics[1].id).toEqual(3);
            expect(component.selectedDimension.characteristics[0].caption).toEqual(
                'characteristic 1 - characteristic 3'
            );
        });

        it('on drop on filter should add filter in the characteristic and update caption without minus because it is column', () => {
            component.selectedDimension.type = SheetDimensionType.Columns;
            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 3, 'FooBar')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromFilter(-1, 0, -1);
            component.onDrop(event);
            fixture.detectChanges();

            expect(component.selectedDimension.characteristics[0].characteristics.length).toEqual(2);
            expect(component.selectedDimension.characteristics[0].characteristics[0].id).toEqual(1);
            expect(component.selectedDimension.characteristics[0].characteristics[1].id).toEqual(3);
            expect(component.selectedDimension.characteristics[0].caption).toEqual('characteristic 1 characteristic 3');
        });

        it('on drop on filter of the same dimension should not add any filter', () => {
            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 2, 'TIME')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromFilter(-1, 0, -1);
            component.onDrop(event);
            fixture.detectChanges();
            expect(component.selectedDimension.characteristics[0].characteristics.length).toEqual(1);
            expect(component.selectedDimension.characteristics[0].characteristics[0].id).toEqual(1);
            expect(characteristicName(0)).not.toContain('characteristic 2');
        });

        it('on move a filter should change the position of the filter item', () => {
            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 3, 'FooBar')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromFilter(-1, 0, -1);
            component.onDrop(event);
            fixture.detectChanges();

            event.dataTransfer.getData = () => JSON.stringify(DraggedCharacteristicInfo.fromFilter(0, -1, 1));
            component.droppedItemInfo = DroppedCharacteristicInfo.fromFilter(-1, 0, 0);
            component.onDrop(event);
            fixture.detectChanges();

            expect(component.selectedDimension.characteristics[0].characteristics.length).toEqual(2);
            expect(component.selectedDimension.characteristics[0].characteristics[0].id).toEqual(3);
            expect(component.selectedDimension.characteristics[0].characteristics[1].id).toEqual(1);
            expect(component.selectedDimension.characteristics[0].caption).toEqual(
                'characteristic 3 - characteristic 1'
            );
        });

        it('on move a filter should change the position of the filter and update caption without minus because it is column', () => {
            component.selectedDimension.type = SheetDimensionType.Columns;
            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 3, 'FooBar')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromFilter(-1, 0, -1);
            component.onDrop(event);
            fixture.detectChanges();

            event.dataTransfer.getData = () => JSON.stringify(DraggedCharacteristicInfo.fromFilter(0, -1, 1));
            component.droppedItemInfo = DroppedCharacteristicInfo.fromFilter(-1, 0, 0);
            component.onDrop(event);
            fixture.detectChanges();

            expect(component.selectedDimension.characteristics[0].characteristics.length).toEqual(2);
            expect(component.selectedDimension.characteristics[0].characteristics[0].id).toEqual(3);
            expect(component.selectedDimension.characteristics[0].characteristics[1].id).toEqual(1);
            expect(component.selectedDimension.characteristics[0].caption).toEqual('characteristic 3 characteristic 1');
        });

        it('should remove characteristic and notify service characteristic on remove', () => {
            let dataExplorerService;
            dataExplorerService = TestBed.get(DataExplorerService);
            spyOn(dataExplorerService, 'notifyCurrentAnalysisChanged');
            component.removeCharacteristicItem(CharacteristicItemInfo.fromCharacteristics(-1, 0));
            fixture.detectChanges();
            expect(component.selectedDimension.characteristics.length).toEqual(0);
            expect(dataExplorerService.notifyCurrentAnalysisChanged).toHaveBeenCalled();
        });

        it('should remove filter and notify service on remove', () => {
            let dataExplorerService;
            dataExplorerService = TestBed.get(DataExplorerService);
            spyOn(dataExplorerService, 'notifyCurrentAnalysisChanged');

            component.removeCharacteristicItem(CharacteristicItemInfo.fromFilter(-1, 0, 0));
            fixture.detectChanges();

            expect(component.selectedDimension.characteristics.length).toEqual(1);
            expect(component.selectedDimension.characteristics[0].caption).toEqual('');
            expect(component.selectedDimension.characteristics[0].characteristics.length).toEqual(0);
            expect(dataExplorerService.notifyCurrentAnalysisChanged).toHaveBeenCalled();
        });

        it('should change characteristic name and notify service on rename', () => {
            let dataExplorerService;
            dataExplorerService = TestBed.get(DataExplorerService);
            spyOn(dataExplorerService, 'notifyCurrentAnalysisChanged');

            component.renameCharacteristic(CharacteristicItemInfo.fromCharacteristics(-1, 0, 'FooBar123'));
            fixture.detectChanges();

            expect(component.selectedDimension.characteristics[0].caption).toEqual('FooBar123');
            expect(dataExplorerService.notifyCurrentAnalysisChanged).toHaveBeenCalled();
        });

        it('should exchange position on moving of a characteristic', () => {
            expect(characteristicName(0)).toContain('characteristic 1');

            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 2, 'TIME')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromTopLevel();
            component.onDrop(event);
            fixture.detectChanges();

            expect(characteristicName(1)).toContain('characteristic 2');

            event.dataTransfer.getData = () => JSON.stringify(DraggedCharacteristicInfo.fromCharacteristic(1, -1));
            component.droppedItemInfo = DroppedCharacteristicInfo.fromCharacteristic(undefined, 0);
            component.onDrop(event);
            fixture.detectChanges();
            expect(characteristicName(0)).toContain('characteristic 2');
            expect(characteristicName(1)).toContain('characteristic 1');
        });

        it('should add a blank characteristic if a blanc characteristic is dropped from palette', () => {
            event.dataTransfer.getData = () =>
                JSON.stringify(
                    DraggedCharacteristicInfo.fromPalette(SheetCharacteristicType.Characteristic, 0, 'Blank')
                );
            component.droppedItemInfo = DroppedCharacteristicInfo.fromTopLevel();
            component.onDrop(event);
            fixture.detectChanges();
            expect(component.selectedDimension.characteristics[1].characteristics.length).toEqual(0);
            expect(component.selectedDimension.characteristics[1].caption).toEqual('Blank');
        });

        function characteristicName(pos: number) {
            return (document
                .getElementsByTagName('kosmos-sheet-characteristic')
                [pos].getElementsByTagName('kosmos-characteristic-header')[0]
                .getElementsByClassName('caption')[0] as HTMLInputElement).value;
        }
    });

    describe('on rename', () => {
        let component: SheetCharacteristicsComponent;
        let fixture: ComponentFixture<SheetCharacteristicsComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    SheetCharacteristicsComponent,
                    SheetCharacteristicComponent,
                    FilterBadgeComponent,
                    CharacteristicHeaderComponent,
                    SheetCharacteristicItemComponent,
                    SheetCharacteristicGroupComponent,
                    CharacteristicGroupHeaderComponent
                ],
                providers: [
                    {
                        provide: DataExplorerService,
                        useClass: DataExplorerMockService
                    },
                    { provide: SharedStorageService, useClass: MockSharedStorageService }
                ],
                imports: [DxTooltipModule]
            });
            fixture = TestBed.createComponent(SheetCharacteristicsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            const service = TestBed.get(DataExplorerService);
            service.currentAnalysis = new AnalysisMapper().mapFromDto(service, {
                name: 'test',
                dimensions: [
                    {
                        type: SheetDimensionType.Columns,
                        characteristics: [
                            {
                                id: 1,
                                type: SheetCharacteristicType.Characteristic,
                                caption: '2018'
                            },
                            {
                                id: 2,
                                type: SheetCharacteristicType.CustomFormula,
                                caption: 'custom formula',
                                formulaItems: [
                                    {
                                        type: FormulaItemType.SheetCharacteristic,
                                        sheetCharacteristicId: 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
            service.selectDimension(service.currentAnalysis.dimensions[0]);
            spyOn(service.currentSheetCharacteristicChanged, 'emit');
            component.renameCharacteristic(CharacteristicItemInfo.fromCharacteristics(-1, 0, '2018 Apr'));
            fixture.detectChanges();
            expect(service.currentAnalysis.dimensions[0].characteristics[1].formulaItems[0].caption).toBe('B 2018 Apr');
            expect(service.currentSheetCharacteristicChanged.emit).toHaveBeenCalled();
        });

        it('should toggle percentage format', () => {
            const service = TestBed.get(DataExplorerService);
            spyOn(service, 'notifyCurrentAnalysisChanged');
            const elements = document.getElementsByClassName('percent-disabled');
            expect(elements.length).toBe(1);
            (elements[0] as HTMLDivElement).click();
            fixture.detectChanges();
            expect(document.getElementsByClassName('percent-disabled').length).toBe(0);
            expect(document.getElementsByClassName('percent-enabled').length).toBe(1);
            expect(service.currentAnalysis.dimensions[0].characteristics[1].formatPercent).toBe(true);
            expect(service.notifyCurrentAnalysisChanged).toHaveBeenCalled();
        });
    });
});
