import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductListItem } from '@core/models/project/product-list-item';

const PRODUCT_LIST_ITEM_OBJECT: ProductListItem[] = [
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

export class MockProductListService {
    getNotActive(projectGuid: string): Observable<ProductListItem[]> {
        return of(PRODUCT_LIST_ITEM_OBJECT);
    }
    getActive(projectGuid: string): Observable<ProductListItem[]> {
        return of(PRODUCT_LIST_ITEM_OBJECT);
    }
}
