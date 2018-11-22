import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductListItem } from '@core/models/project/product-list-item';
import { ProductService } from '@core/services/project/product.service';
import { DxTreeViewComponent } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';

@Component({
    selector: 'kosmos-deliverable-list',
    templateUrl: './deliverable-list.component.html',
    styleUrls: ['./deliverable-list.component.scss']
})
export class DeliverableListComponent {
    errorMessage: string;
    isVisible: boolean = false;
    selectedProductsList: ProductListItem[];
    productTreeItems: ProductListItem[];
    isDirty: boolean;

    @ViewChild(DxTreeViewComponent)
    treeView: DxTreeViewComponent;
    @Output()
    selectionChanged: EventEmitter<ProductListItem[]> = new EventEmitter<ProductListItem[]>();

    constructor(private _productService: ProductService, private _sharedStorageService: SharedStorageService) {}

    openPopup = (): void => {
        this.isVisible = true;
        this.isDirty = false;
        if (this.treeView) {
            this.treeView.searchValue = '';
        }
        this.selectedProductsList = [];
        this.productTreeItems = [];
        this.getDeliverables();
    };

    closePopup = (): void => {
        if (this.isDirty) {
            this.saveSelectedDeliverables();
        }
        this.isVisible = false;
    };

    itemClick(event: any): void {
        if (event.itemData.isChapter) {
            event.itemData.isSelected = false;
            event.node.selected = false;
        } else {
            this.isDirty = true;
            event.itemData.isSelected = !event.itemData.isSelected;
        }
        this.updateSelectedProductGuids(event.itemData);
    }

    getDeliverables(): void {
        const selectedProject = this._sharedStorageService.get('selectedProject');
        this._productService
            .getNotActive(selectedProject.projectGuid)
            .subscribe(deliverables => this.setDefaults(deliverables));
    }

    saveSelectedDeliverables() {
        const selectedProject = this._sharedStorageService.get('selectedProject');
        this._productService
            .setActive(selectedProject.projectGuid, this.getSelectedProductGuids())
            .subscribe(result => {
                this.selectionChanged.emit(this.selectedProductsList);
            });
    }

    updateSelectedProductGuids(item: ProductListItem): void {
        const index = this.selectedProductsList.indexOf(item);
        if (item.isSelected && index < 0) {
            this.selectedProductsList.push(item);
        } else if (!item.isSelected && index >= 0) {
            this.selectedProductsList.splice(index, 1);
        }
    }

    getSelectedProductGuids(): string[] {
        const guids = [];
        this.selectedProductsList.forEach(element => {
            guids.push(element.guid);
        });

        return guids;
    }

    private setDefaults(deliverables: ProductListItem[]): void {
        deliverables.forEach(d => {
            d.isExpanded = true;
            this.updateSelectedProductGuids(d);
            if (d.isChapter) {
                this.setDefaults(d.children);
            }
        });
        this.productTreeItems = deliverables;
    }
}
