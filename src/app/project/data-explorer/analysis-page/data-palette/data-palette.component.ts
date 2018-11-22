import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DragItemSourceType } from '@core/enum/drag-item-source-type.enum';
import { Project, SheetDimension } from '@core/models';
import { DataPaletteItem } from '@core/models/project/data-palette-item';
import { DataExplorerService } from '@core/services';
import { DxTreeViewComponent } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';
import { OnDestroy } from 'ngx-take-until-destroy';
import { DataPaletteItemHelper } from '../data-palette-item-helper';
import { DraggedCharacteristicInfo } from '@shared/data-explorer/dragged-characteristic-info';

@Component({
    moduleId: module.id,
    selector: 'kosmos-data-palette',
    templateUrl: 'data-palette.component.html',
    styleUrls: ['data-palette.component.scss']
})
export class DataPaletteComponent implements OnDestroy, OnInit {
    @ViewChild(DxTreeViewComponent)
    treeView: DxTreeViewComponent;
    treeItems: DataPaletteItem[];
    selectedProject: Project;
    visible: boolean;
    itemHelper: DataPaletteItemHelper;
    dimensionChangedSubscription: any;

    constructor(
        private _dataExplorerService: DataExplorerService,
        private _sharedStorageService: SharedStorageService
    ) {
        this.itemHelper = new DataPaletteItemHelper();
    }

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        const item = this.itemHelper.fromClassList(event.srcElement.classList);
        const dimensionName = this.treeItems.find(
            p => p.children.length > 0 && p.children.findIndex(c => this.itemHelper.equals(c, item)) >= 0
        ).name;

        event.dataTransfer.setData('Text', JSON.stringify(
            DraggedCharacteristicInfo.fromPalette(
                item.type,
                item.characteristicId,
                dimensionName
            )
        ));
    }

    hide() {
        this.visible = false;
    }

    ngOnDestroy() {
        this.dimensionChangedSubscription.unsubscribe();
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.dimensionChangedSubscription = this._dataExplorerService.dimensionChanged.subscribe(dimension =>
            this.refreshItems(dimension)
        );
        this._dataExplorerService.openPaletteRequested.subscribe(() => (this.visible = true));
    }

    refreshItems(dimension: SheetDimension) {
        this._dataExplorerService.palette(this.selectedProject.projectGuid, dimension.type).subscribe(palette => {
            this.treeItems = palette;
        });
    }
}
