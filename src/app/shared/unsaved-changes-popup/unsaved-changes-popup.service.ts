import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnsavedChangesPopupService {
    navigateSelection$: Subject<boolean> = new Subject<boolean>();
    visibleEvent = new EventEmitter<boolean>();

    show(): void {
        this.visibleEvent.emit(true);
    }

    hide(): void {
        this.visibleEvent.emit(false);
    }
}
