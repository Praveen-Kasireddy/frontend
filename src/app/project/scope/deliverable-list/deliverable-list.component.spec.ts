import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular';

import { ProductListItem } from '@core/models/project/product-list-item';
import { Project } from '@core/models/project/project';
import { DxModule } from '@shared/dx.module';
import { DeliverableListComponent } from './deliverable-list.component';
import { ProductService } from '@core/services/project/product.service';
import { MockProductListService } from '@core/mocks/product-list/product-list-mock.service';
import { SharedStorageService } from 'ngx-store';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';

describe('DeliverableListComponent', () => {
    let fixture: ComponentFixture<DeliverableListComponent>;
    let component: DeliverableListComponent;
    let find: any;

    const MOCK_PRODUCT_LIST_ITEMS: ProductListItem[] = [
        {
            guid: '1',
            name: 'TS',
            visible: true,
            children: [
                {
                    guid: '2',
                    name: 'Product: Factbook',
                    visible: true
                },
                {
                    guid: '3',
                    name: 'Product: FDD',
                    visible: true
                }
            ]
        },
        {
            guid: '4',
            name: 'VAL',
            visible: true
        },
        {
            guid: '5',
            name: 'M & A',
            visible: true,
            children: [
                {
                    guid: '6',
                    name: 'Product: Teaser',
                    visible: true
                },
                {
                    guid: '7',
                    name: 'Product: Info Memo',
                    visible: true
                }
            ]
        },
        {
            guid: '8',
            name: 'RES',
            visible: true
        },
        {
            guid: '9',
            name: 'SG',
            visible: true
        }
    ];

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [DeliverableListComponent],
            providers: [
                { provide: ProductService, useClass: MockProductListService },
                { provide: SharedStorageService, useClass: MockSharedStorageService }
            ],
            imports: [DxModule]
        });

        fixture = TestBed.createComponent(DeliverableListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        find = selector => fixture.debugElement.query(By.css(selector));
    });

    it('creates self', () => {
        expect(component).toBeTruthy();
    });

    it('is initially empty', () => {
        spyOn(component, 'getDeliverables');

        component.openPopup();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.getDeliverables).toHaveBeenCalled();
            expect(component.productTreeItems).toBeTruthy();
            expect(component.productTreeItems.length).toEqual(0);
        });
    });

    it('displays product groups', () => {
        // act
        component.openPopup();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            component.productTreeItems = MOCK_PRODUCT_LIST_ITEMS;
            fixture.detectChanges();

            const dxTreeView: DxTreeViewComponent = find('dx-tree-view').componentInstance;
            expect(dxTreeView).toBeTruthy();

            const nodes = dxTreeView.instance.getNodes();
            expect(nodes.length).toEqual(5);
            for (const node of nodes) {
                switch (node.key) {
                    case 1: {
                        expect(node).toBeTruthy();
                        expect(node.text).toEqual('TS');
                        break;
                    }
                    case 4: {
                        expect(node).toBeTruthy();
                        expect(node.text).toEqual('VAL');
                        break;
                    }
                    case 5: {
                        expect(node).toBeTruthy();
                        expect(node.text).toEqual('M & A');
                        break;
                    }
                    case 8: {
                        expect(node).toBeTruthy();
                        expect(node.text).toEqual('RES');
                        break;
                    }
                    case 9: {
                        expect(node).toBeTruthy();
                        expect(node.text).toEqual('SG');
                        break;
                    }
                }
            }
        });
    });

    it('display products', () => {
        // act
        component.openPopup();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            component.productTreeItems = MOCK_PRODUCT_LIST_ITEMS;
            fixture.detectChanges();

            const dxTreeView: DxTreeViewComponent = find('dx-tree-view').componentInstance;
            expect(dxTreeView).toBeTruthy();

            const nodes = dxTreeView.instance.getNodes();
            expect(nodes.length).toEqual(5);
            let numberOfChildren: number = 0;
            for (const node of nodes) {
                for (const child of node.children) {
                    numberOfChildren++;
                    switch (node.key) {
                        case 2: {
                            expect(node).toBeTruthy();
                            expect(node.text).toEqual('Product: Factbook');
                            break;
                        }
                        case 3: {
                            expect(node).toBeTruthy();
                            expect(node.text).toEqual('Product: FDD');
                            break;
                        }
                        case 6: {
                            expect(node).toBeTruthy();
                            expect(node.text).toEqual('Product: Teaser');
                            break;
                        }
                        case 7: {
                            expect(node).toBeTruthy();
                            expect(node.text).toEqual('Product: Info Memo');
                            break;
                        }
                    }
                }
            }

            expect(numberOfChildren).toEqual(4);
        });
    });

    it('saves when dialog is dirty', () => {
        spyOn(component, 'saveSelectedDeliverables');

        component.openPopup();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            component.isDirty = true;
            component.closePopup();

            expect(component.saveSelectedDeliverables).toHaveBeenCalled();
        });
    });

    it('does not save when dialog is not dirty', () => {
        spyOn(component, 'saveSelectedDeliverables');

        component.openPopup();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            component.closePopup();

            expect(component.isDirty).toBeFalsy();
            expect(component.saveSelectedDeliverables).not.toHaveBeenCalled();
        });
    });

    it('updates seletion when chapter item clicked', () => {
        const itemData = new ProductListItem();
        itemData.isSelected = true;
        itemData.isChapter = true;
        const clickEventForChapter = {
            itemData: itemData,
            node: { selected: true }
        };

        component.openPopup();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            component.itemClick(clickEventForChapter);

            expect(component.isDirty).toBeFalsy();
            expect(clickEventForChapter.itemData.isSelected).toBeFalsy();
            expect(clickEventForChapter.node.selected).toBeFalsy();
            expect(component.selectedProductsList.indexOf(itemData)).toBeLessThan(0);
        });
    });

    it('updates seletion when product item clicked (to be selected)', () => {
        const itemData = new ProductListItem();
        itemData.isSelected = false;
        itemData.isChapter = false;
        const clickEventForNotSelectedProduct = {
            itemData: itemData,
            node: { selected: false }
        };

        component.openPopup();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            component.itemClick(clickEventForNotSelectedProduct);

            expect(component.isDirty).toBeTruthy();
            expect(clickEventForNotSelectedProduct.itemData.isSelected).toBeTruthy();
            expect(component.selectedProductsList.indexOf(itemData)).toBeGreaterThanOrEqual(0);
        });
    });

    it('updates seletion when product item clicked (to be unselected)', () => {
        const itemData = new ProductListItem();
        itemData.isSelected = true;
        itemData.isChapter = false;
        const clickEventForSelectedProduct = {
            itemData: itemData,
            node: { selected: true }
        };

        component.openPopup();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            component.itemClick(clickEventForSelectedProduct);

            expect(component.isDirty).toBeTruthy();
            expect(clickEventForSelectedProduct.itemData.isSelected).toBeFalsy();
            expect(component.selectedProductsList.indexOf(itemData)).toBeLessThan(0);
        });
    });
});
