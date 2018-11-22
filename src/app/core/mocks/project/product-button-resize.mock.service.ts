import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Dictionary } from '@core/models/dictionary';

@Injectable()
export class MockProductButtonResizeService {
    maxWidthChanged: EventEmitter<number> = new EventEmitter();

    private _maxWidth: number = 200;

    announceWidth(element: ElementRef, id: string): number {
        return this._maxWidth;
    }

    withdrawWidth(id: string) {}

    assembleWidthStyle(width: number): string {
        return width + 'px';
    }

    getMaxAnnouncedWidth(): number {
        return this._maxWidth;
    }
}
