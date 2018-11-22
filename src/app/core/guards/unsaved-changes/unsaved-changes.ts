import { HostListener } from '@angular/core';

export abstract class UnsavedChanges {
    abstract hasChanges(): boolean;

    @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
        if (this.hasChanges()) {
            $event.returnValue = true;
        }
    }
}
