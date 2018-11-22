import { EventEmitter } from '@angular/core';
import { Right } from '@core/models';
import { Observable, of } from 'rxjs';

export class MockRightService {
    rights: Right[];

    getProjectRights(projectId: string): Observable<Right[]> {
        return of([]);
    }

    getAndStoreRights(projectId: string): void {}

    sendMessage(type: Right[]) {}

    clearMessage() {}

    getMessage(): Observable<Right[]> {
        return of([]);
    }
}
