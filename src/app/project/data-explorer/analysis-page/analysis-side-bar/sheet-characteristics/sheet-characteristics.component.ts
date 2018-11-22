import { Component, HostListener, OnInit } from '@angular/core';
import { DragItemSourceType } from '@core/enum/drag-item-source-type.enum';
import { DropItemDestinationType } from '@core/enum/drop-item-destination-type.enum';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { DataPaletteItem, Project } from '@core/models';
import { Characteristic } from '@core/models/project/characteristic';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { SheetDimension } from '@core/models/project/data-explorer/sheet-dimension';
import { DataExplorerService } from '@core/services';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DraggedCharacteristicInfo } from '@shared/data-explorer/dragged-characteristic-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { SharedStorageService } from 'ngx-store';
import { AnalysisMapper } from '../../../../../shared';
import { DataPaletteItemHelper } from '../../data-palette-item-helper';
import { SheetCharacteristicService } from './sheet-characteristic.service';

@Component({
    moduleId: module.id,
    selector: 'kosmos-sheet-characteristics',
    templateUrl: 'sheet-characteristics.component.html',
    styleUrls: ['sheet-characteristics.component.scss'],
    providers: [SheetCharacteristicService]
})
export class SheetCharacteristicsComponent implements OnInit {
    selectedProject: Project;
    selectedDimension: SheetDimension;

    palette: DataPaletteItem[];
    sheetDimensionType: SheetDimensionType;

    draggedItemInfo: DraggedCharacteristicInfo;
    droppedItemInfo: DroppedCharacteristicInfo;

    // event transfer data
    paletteItem: DataPaletteItem;
    movedItem: SheetCharacteristic;
    paletteItemHelper: DataPaletteItemHelper = new DataPaletteItemHelper();

    draggableOverPlaceholder: boolean;

    @HostListener('dragover', ['$event'])
    dragOver(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        return false;
    }

    @HostListener('drop', ['$event'])
    onDrop(event) {
        this.parseTransferDataFromEvent(event);
        this.handleCharacteristicDrop();

        this._dataExplorerService.notifyCurrentAnalysisChanged();

        this.paletteItem = undefined;
        this.movedItem = undefined;
        this.droppedItemInfo = undefined;
        this.draggedItemInfo = undefined;
    }

    constructor(
        private _dataExplorerService: DataExplorerService,
        private _sharedStorageService: SharedStorageService,
        private _sheetCharacteristicService: SheetCharacteristicService
    ) {
        _sheetCharacteristicService.characteristicChartEnableToggled$.subscribe(i => {
            this.toggleCharacteristicChartEnable(i);
        });
        _sheetCharacteristicService.characteristicRenamed$.subscribe(i => {
            this.renameCharacteristic(i);
        });
        _sheetCharacteristicService.groupCreated$.subscribe(c => {
            this.createGroupFor(c);
        });
        _sheetCharacteristicService.releasedFromGroup$.subscribe(i => {
            this.releaseFromGroup(i);
        });
        _sheetCharacteristicService.characteristicItemRemoved$.subscribe(i => {
            this.removeCharacteristicItem(i);
        });
        _sheetCharacteristicService.itemDropOn$.subscribe(i => {
            if (!this.droppedItemInfo) {
                this.droppedItemInfo = i;
            }
        });
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.selectedDimension = this._dataExplorerService.selectedDimension;

        // get the complete lists (for rows) of the palette
        this._dataExplorerService
            .palette(this.selectedProject.projectGuid, SheetDimensionType.Rows)
            .subscribe(palette => {
                this.palette = palette;
            });

        this._dataExplorerService.dimensionChanged.subscribe(dimension => {
            this.selectedDimension = dimension;
            this.sheetDimensionType = dimension.type;
        });
    }

    onDragEnterPlaceholder(event) {
        this.draggableOverPlaceholder = true;
        return false;
    }

    onDragLeavePlaceholder(event) {
        this.draggableOverPlaceholder = false;
        return false;
    }

    onDropOnMainLevel(event) {
        if (!this.droppedItemInfo) {
            this.droppedItemInfo = DroppedCharacteristicInfo.fromTopLevel();
        }
    }

    canBeChartItem(characteristic: SheetCharacteristic): boolean {
        if (characteristic.type == SheetCharacteristicType.CharacteristicGroup) {
            for (const sc of characteristic.sheetCharacteristics) {
                if (sc.type == SheetCharacteristicType.CustomFormula || sc.characteristics.length > 0) {
                    return true;
                }
            }
        } else {
            if (
                characteristic.type == SheetCharacteristicType.CustomFormula ||
                (characteristic.characteristics && characteristic.characteristics.length > 0)
            ) {
                return true;
            }
        }
        return false;
    }

    removeCharacteristicItem(info: CharacteristicItemInfo) {
        switch (info.itemType) {
            case DropItemDestinationType.Group:
                const ch = this.selectedDimension.characteristics[info.groupIndex];
                this.markAsRemoved(ch);
                ch.sheetCharacteristics.forEach(c => this.markAsRemoved(c));
                this.removeCharacteristicFrom(this.selectedDimension.characteristics, info.groupIndex);
                break;
            case DropItemDestinationType.Characteristic:
                if (info.groupIndex == -1) {
                    this.markAsRemoved(this.selectedDimension.characteristics[info.characteristicIndex]);
                    this.removeCharacteristicFrom(this.selectedDimension.characteristics, info.characteristicIndex);
                } else {
                    this.markAsRemoved(
                        this.selectedDimension.characteristics[info.groupIndex].sheetCharacteristics[
                            info.characteristicIndex
                        ]
                    );
                    this.removeCharacteristicFrom(
                        this.selectedDimension.characteristics[info.groupIndex].sheetCharacteristics,
                        info.characteristicIndex
                    );
                    this.removeEmptyGroups();
                }
                break;
            case DropItemDestinationType.Filter:
                const sheetCharacteristic: SheetCharacteristic =
                    info.groupIndex == -1
                        ? this.selectedDimension.characteristics[info.characteristicIndex]
                        : this.selectedDimension.characteristics[info.groupIndex].sheetCharacteristics[
                              info.characteristicIndex
                          ];
                const characteristics: Characteristic[] = sheetCharacteristic.characteristics;
                this.removeFilterFrom(characteristics, info.filterIndex);
                this.updateCaption(sheetCharacteristic);
                break;
            default:
                break;
        }
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }

    toggleCharacteristicChartEnable(info: CharacteristicItemInfo) {
        switch (info.itemType) {
            case DropItemDestinationType.Group:
                this.selectedDimension.characteristics[info.groupIndex].removeFromChart = !this.selectedDimension
                    .characteristics[info.groupIndex].removeFromChart;
                break;
            case DropItemDestinationType.Characteristic:
                const characteristic =
                    info.groupIndex == -1
                        ? this.selectedDimension.characteristics[info.characteristicIndex]
                        : this.selectedDimension.characteristics[info.groupIndex].sheetCharacteristics[
                              info.characteristicIndex
                          ];
                characteristic.removeFromChart = !characteristic.removeFromChart;
                break;
            default:
                break;
        }
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }

    renameCharacteristic(info: CharacteristicItemInfo) {
        let sheetCharacteristic: SheetCharacteristic;

        switch (info.itemType) {
            case DropItemDestinationType.Group:
                sheetCharacteristic = this.selectedDimension.characteristics[info.groupIndex];
                break;
            case DropItemDestinationType.Characteristic:
                sheetCharacteristic =
                    info.groupIndex == -1
                        ? this.selectedDimension.characteristics[info.characteristicIndex]
                        : this.selectedDimension.characteristics[info.groupIndex].sheetCharacteristics[
                              info.characteristicIndex
                          ];
                break;
            default:
                break;
        }
        sheetCharacteristic.caption = info.caption;
        this._dataExplorerService.currentSheetCharacteristicChanged.emit();
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }

    createGroupFor(characteristicIndex: number) {
        if (this.selectedDimension.characteristics[characteristicIndex]) {
            const characteristic = this.selectedDimension.characteristics[characteristicIndex];
            this.selectedDimension.characteristics.splice(characteristicIndex, 1);
            this.selectedDimension.characteristics.splice(characteristicIndex, 0, this.getNewGroup(characteristic));
        }
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }

    releaseFromGroup(info: CharacteristicItemInfo) {
        this.addCharacteristicTo(
            this.selectedDimension.characteristics,
            this.selectedDimension.characteristics.length,
            this.selectedDimension.characteristics[info.groupIndex].sheetCharacteristics[info.characteristicIndex]
        );
        this.removeCharacteristicFrom(
            this.selectedDimension.characteristics[info.groupIndex].sheetCharacteristics,
            info.characteristicIndex
        );
        this.removeEmptyGroups();
        this._dataExplorerService.notifyCurrentAnalysisChanged();
    }

    private markAsRemoved(characteristic: SheetCharacteristic): void {
        characteristic.id = undefined;
        characteristic.caption = 'removed column/row';
    }

    private parseTransferDataFromEvent(event) {
        this.draggedItemInfo = DraggedCharacteristicInfo.fromJson(event.dataTransfer.getData('Text'));

        switch (this.draggedItemInfo.sourceType) {
            case DragItemSourceType.Palette:
                this.setPaletteItem(
                    this.draggedItemInfo.sheetCharacteristicType,
                    this.draggedItemInfo.characteristicId
                );
                break;
            case DragItemSourceType.Group:
                this.setMovedItem(this.draggedItemInfo.mainLevelPosition, -1);
                break;
            case DragItemSourceType.Characteristic:
                this.setMovedItem(this.draggedItemInfo.mainLevelPosition, this.draggedItemInfo.subLevelPosition);
                break;
            default:
                break;
        }
    }

    private setMovedItem(mainIndex: number, subIndex: number) {
        if (subIndex > -1) {
            this.movedItem = this.selectedDimension.characteristics[mainIndex].sheetCharacteristics[subIndex];
        } else {
            this.movedItem = this.selectedDimension.characteristics[mainIndex];
        }
    }

    private setPaletteItem(type: SheetCharacteristicType, id: number) {
        const itemToSearch: DataPaletteItem = { type: type, characteristicId: id };
        this.paletteItem = this.palette
            .map(g => g.children)
            .reduce((r, c) => r.concat(c))
            .find(c => this.paletteItemHelper.equals(c, itemToSearch));
    }

    private handleCharacteristicDrop(): void {
        switch (this.draggedItemInfo.sourceType) {
            case DragItemSourceType.Palette:
                this.handleDropFromPalette();
                break;
            case DragItemSourceType.Group:
                this.handleDropFromGroup();
                break;
            case DragItemSourceType.Characteristic:
                this.handleDropFromCharacteristic();
                break;
            case DragItemSourceType.Filter:
                this.handleDropFromFilter();
                break;
            default:
                break;
        }
    }

    // Drop handler functions
    private handleDropFromPalette(): void {
        if (
            this.selectedDimension.type == SheetDimensionType.Global &&
            !this.isGlobalDimensionAndEmpty() &&
            this.droppedItemInfo.destinationType != DropItemDestinationType.Filter
        ) {
            return;
        }
        switch (this.droppedItemInfo.destinationType) {
            case undefined:
                this.addCharacteristicTo(
                    this.selectedDimension.characteristics,
                    this.selectedDimension.characteristics.length,
                    this.paletteItemHelper.sheetCharacteristic(
                        this.paletteItem,
                        this.selectedDimension.type,
                        this._dataExplorerService.currentAnalysis
                    )
                );
                break;
            case DropItemDestinationType.Group:
                this.addCharacteristicTo(
                    this.selectedDimension.characteristics,
                    this.droppedItemInfo.groupPosition,
                    this.paletteItemHelper.sheetCharacteristic(
                        this.paletteItem,
                        this.selectedDimension.type,
                        this._dataExplorerService.currentAnalysis
                    )
                );
                break;
            case DropItemDestinationType.Characteristic:
                let characteristics: SheetCharacteristic[];
                let position: number;
                if (this.droppedItemInfo.groupPosition == undefined) {
                    characteristics = this.selectedDimension.characteristics;
                    position = this.droppedItemInfo.characteristicPosition;
                } else {
                    characteristics = this.selectedDimension.characteristics[this.droppedItemInfo.groupPosition]
                        .sheetCharacteristics;
                    position =
                        this.droppedItemInfo.characteristicPosition >= 0
                            ? this.droppedItemInfo.characteristicPosition
                            : this.selectedDimension.characteristics[this.droppedItemInfo.groupPosition]
                                  .sheetCharacteristics.length;
                }
                this.addCharacteristicTo(
                    characteristics,
                    position,
                    this.paletteItemHelper.sheetCharacteristic(
                        this.paletteItem,
                        this.selectedDimension.type,
                        this._dataExplorerService.currentAnalysis
                    )
                );
                break;
            case DropItemDestinationType.Filter:
                if (this.paletteItem.type == SheetCharacteristicType.Characteristic) {
                    let sheetCharacteristic: SheetCharacteristic;
                    let filters: Characteristic[];
                    let filterPosition: number;
                    if (this.droppedItemInfo.groupPosition >= 0) {
                        sheetCharacteristic = this.selectedDimension.characteristics[this.droppedItemInfo.groupPosition]
                            .sheetCharacteristics[this.droppedItemInfo.characteristicPosition];
                        filters = sheetCharacteristic.characteristics;
                    } else {
                        sheetCharacteristic = this.selectedDimension.characteristics[
                            this.droppedItemInfo.characteristicPosition
                        ];
                        filters = sheetCharacteristic.characteristics;
                    }
                    if (
                        !this.isFilterDimensionInList(this.draggedItemInfo.dataDimensionName, filters) &&
                        sheetCharacteristic.type != SheetCharacteristicType.CustomFormula
                    ) {
                        filterPosition =
                            this.droppedItemInfo.filterPosition >= 0
                                ? this.droppedItemInfo.filterPosition
                                : filters.length;
                        this.addFilterTo(filters, filterPosition, {
                            id: this.paletteItem.characteristicId,
                            name: this.paletteItem.name
                        });
                        this.updateCaption(sheetCharacteristic);
                    }
                }
                break;
            default:
                break;
        }
    }

    private handleDropFromGroup(): void {
        switch (this.droppedItemInfo.destinationType) {
            case undefined:
                this.removeCharacteristicFrom(
                    this.selectedDimension.characteristics,
                    this.draggedItemInfo.mainLevelPosition
                );
                this.addCharacteristicTo(
                    this.selectedDimension.characteristics,
                    this.selectedDimension.characteristics.length,
                    this.movedItem
                );
                break;
            case DropItemDestinationType.Group:
                this.removeCharacteristicFrom(
                    this.selectedDimension.characteristics,
                    this.draggedItemInfo.mainLevelPosition
                );
                this.addCharacteristicTo(
                    this.selectedDimension.characteristics,
                    this.droppedItemInfo.groupPosition,
                    this.movedItem
                );
                break;
            case DropItemDestinationType.Filter:
            case DropItemDestinationType.Characteristic:
                if (this.droppedItemInfo.groupPosition == undefined) {
                    this.removeCharacteristicFrom(
                        this.selectedDimension.characteristics,
                        this.draggedItemInfo.mainLevelPosition
                    );
                    this.addCharacteristicTo(
                        this.selectedDimension.characteristics,
                        this.droppedItemInfo.characteristicPosition,
                        this.movedItem
                    );
                }
                break;
            default:
                break;
        }
    }

    private handleDropFromCharacteristic() {
        let sourceCharacteristics: SheetCharacteristic[];
        let positionToRemove: number;

        if (this.draggedItemInfo.subLevelPosition >= 0) {
            sourceCharacteristics = this.selectedDimension.characteristics[this.draggedItemInfo.mainLevelPosition]
                .sheetCharacteristics;
            positionToRemove = this.draggedItemInfo.subLevelPosition;
        } else {
            sourceCharacteristics = this.selectedDimension.characteristics;
            positionToRemove = this.draggedItemInfo.mainLevelPosition;
        }

        switch (this.droppedItemInfo.destinationType) {
            case undefined:
                this.removeCharacteristicFrom(sourceCharacteristics, positionToRemove);
                this.addCharacteristicTo(
                    this.selectedDimension.characteristics,
                    this.selectedDimension.characteristics.length,
                    this.movedItem
                );
                break;
            case DropItemDestinationType.Group:
                this.removeCharacteristicFrom(sourceCharacteristics, positionToRemove);
                this.addCharacteristicTo(
                    this.selectedDimension.characteristics,
                    this.droppedItemInfo.groupPosition,
                    this.movedItem
                );
                break;
            case DropItemDestinationType.Filter:
            case DropItemDestinationType.Characteristic:
                let destinationCharacteristics: SheetCharacteristic[];
                let destinationPosition: number;
                if (this.droppedItemInfo.groupPosition == undefined) {
                    destinationCharacteristics = this.selectedDimension.characteristics;
                    destinationPosition = this.droppedItemInfo.characteristicPosition;
                } else {
                    destinationCharacteristics = this.selectedDimension.characteristics[
                        this.droppedItemInfo.groupPosition
                    ].sheetCharacteristics;
                    destinationPosition =
                        this.droppedItemInfo.characteristicPosition >= 0
                            ? this.droppedItemInfo.characteristicPosition
                            : this.selectedDimension.characteristics[this.droppedItemInfo.groupPosition]
                                  .sheetCharacteristics.length;
                }
                this.removeCharacteristicFrom(sourceCharacteristics, positionToRemove);
                this.addCharacteristicTo(destinationCharacteristics, destinationPosition, this.movedItem);
                break;
            default:
                break;
        }
        this.removeEmptyGroups();
    }

    private handleDropFromFilter() {
        if (this.droppedItemInfo.destinationType == DropItemDestinationType.Filter) {
            let filters: Characteristic[];
            let sheetCharacteristic: SheetCharacteristic;
            let filterPosition: number;
            if (this.droppedItemInfo.groupPosition >= 0) {
                sheetCharacteristic = this.selectedDimension.characteristics[this.droppedItemInfo.groupPosition]
                    .sheetCharacteristics[this.droppedItemInfo.characteristicPosition];
                filters = sheetCharacteristic.characteristics;
            } else {
                sheetCharacteristic = this.selectedDimension.characteristics[
                    this.droppedItemInfo.characteristicPosition
                ];
                filters = sheetCharacteristic.characteristics;
            }
            if (this.isFilterSourceAndDestinationTheSame()) {
                filterPosition =
                    this.droppedItemInfo.filterPosition >= 0 ? this.droppedItemInfo.filterPosition : filters.length;

                const filter = filters[this.draggedItemInfo.filterPosition];

                this.removeFilterFrom(filters, this.draggedItemInfo.filterPosition);
                this.addFilterTo(filters, filterPosition, filter);

                this.updateCaption(sheetCharacteristic);
            }
        }
    }

    // helper methods
    private addCharacteristicTo(
        sheetCharacteristics: SheetCharacteristic[],
        position: number,
        item: SheetCharacteristic
    ) {
        sheetCharacteristics.splice(position, 0, item);
    }

    private removeCharacteristicFrom(sheetCharacteristics: SheetCharacteristic[], position: number) {
        const characteristic = sheetCharacteristics[position];
        sheetCharacteristics.splice(position, 1);
    }

    private addFilterTo(characteristics: Characteristic[], position: number, item: Characteristic) {
        characteristics.splice(position, 0, item);
    }

    private removeFilterFrom(characteristics: Characteristic[], position: number) {
        characteristics.splice(position, 1);
    }

    private removeEmptyGroups() {
        this.selectedDimension.characteristics = this.selectedDimension.characteristics.filter(
            c => !(c.type == SheetCharacteristicType.CharacteristicGroup && c.sheetCharacteristics.length == 0)
        );
    }

    private isFilterDimensionInList(dimensionName: string, filterList: Characteristic[]): boolean {
        let found = false;
        for (let i = 0; i < filterList.length; i++) {
            if (this.getDimensionNameOfCharacteristic(filterList[i].id) == dimensionName) {
                found = true;
                break;
            }
        }
        return found;
    }

    private isFilterSourceAndDestinationTheSame(): boolean {
        if (this.droppedItemInfo.groupPosition > -1) {
            if (this.droppedItemInfo.groupPosition == this.draggedItemInfo.mainLevelPosition) {
                if (this.droppedItemInfo.characteristicPosition == this.draggedItemInfo.subLevelPosition) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            if (this.draggedItemInfo.subLevelPosition >= 0) {
                return false;
            } else {
                if (this.droppedItemInfo.characteristicPosition == this.draggedItemInfo.mainLevelPosition) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    private getDimensionNameOfCharacteristic(id: number): string {
        let dimName = '';
        for (const d of this.palette) {
            dimName = d.name;
            const i = d.children.find(ii => ii.characteristicId == Number(id));
            if (i) {
                break;
            }
        }
        return dimName;
    }

    private updateCaption(sheetCharacteristic: SheetCharacteristic): void {
        let isFirst: boolean = true;
        let name: string = '';
        for (let i = 0; i < sheetCharacteristic.characteristics.length; i++) {
            if (isFirst) {
                name = sheetCharacteristic.characteristics[i].name;
                isFirst = false;
            } else {
                if (this.selectedDimension.type == SheetDimensionType.Columns) {
                    name = name + ' ' + sheetCharacteristic.characteristics[i].name;
                } else {
                    name = name + ' - ' + sheetCharacteristic.characteristics[i].name;
                }
            }
        }
        sheetCharacteristic.caption = name;
    }

    private getNewGroup(sheetCharacteristic: SheetCharacteristic): SheetCharacteristic {
        return new AnalysisMapper().mapSheetCharacteristicFromDto(
            {
                id: this._dataExplorerService.currentAnalysis.newSheetCharacteristicId,
                characteristics: [],
                type: SheetCharacteristicType.CharacteristicGroup,
                caption: 'New Group',
                sheetCharacteristics: [sheetCharacteristic]
            },
            this.selectedDimension.type
        );
    }

    private isGlobalDimensionAndEmpty(): boolean {
        if (
            this.selectedDimension.type == SheetDimensionType.Global &&
            this.selectedDimension.characteristics.length < 1
        ) {
            return true;
        }
        return false;
    }
}
