import { ScopeItem } from '@core/models/project/scope-item';
import { ScopeItemUpdateModel } from '@core/models/project/scope-item-update-model';
import { Observable, of } from 'rxjs';

export class MockScopeItemService {
    getScopeItems(projectGuid: string): Observable<ScopeItem[]> {
        return of(<ScopeItem[]>[]);
    }

    getChapter(projectGuid: string, productId: string): Observable<ScopeItem[]> {
        return of(<ScopeItem[]>[]);
    }

    putScopeItem(projectGuid: string, model: ScopeItemUpdateModel): Observable<Object> {
        return of(new Object());
    }

    deleteScopeItem(projectGuid: string, productId: string): Observable<Object> {
        return of({});
    }

    swap(projectGuid: string, item1: number, item2: number): Observable<Object> {
        return of(true);
    }
}
