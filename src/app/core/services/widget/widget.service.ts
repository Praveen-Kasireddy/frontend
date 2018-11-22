import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {
    private zone: string;

    startDrag(zone: string): void {
        // TODO implement widget service
        this.zone = zone;
    }

    accepts(zone: string): boolean {
        // TODO implement widget service
        return false;
    }
}
