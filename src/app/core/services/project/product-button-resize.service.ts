import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Dictionary } from '@core/models/dictionary';

@Injectable()
export class ProductButtonResizeService {
    maxWidthChanged: EventEmitter<number> = new EventEmitter();

    private _maxAnnouncedWidth: number = 0;
    private _announcedWidths: Dictionary<number> = new Dictionary<number>([]);

    // Set _maxWidth to -1 to deactivate width limitation
    private readonly _maxWidth: number = -1;

    announceWidth(element: ElementRef, id: string): number {
        this._announcedWidths.add(id, element.nativeElement.offsetWidth + 1);

        const calc = this.calculateMaxWidth();
        if (calc > this._maxAnnouncedWidth) {
            this._maxAnnouncedWidth = calc;
            this.maxWidthChanged.emit(this._maxAnnouncedWidth);
        }

        return this._maxAnnouncedWidth;
    }

    withdrawWidth(id: string) {
        this._announcedWidths.remove(id);

        const calc = this.calculateMaxWidth();
        if (calc < this._maxAnnouncedWidth) {
            this._maxAnnouncedWidth = calc;
            this.maxWidthChanged.emit(this._maxAnnouncedWidth);
        }
    }

    assembleWidthStyle(width: number): string {
        return width + 'px';
    }

    getMaxAnnouncedWidth(): number {
        return this._maxAnnouncedWidth;
    }

    private calculateMaxWidth(): number {
        const result = Math.max.apply(Math, this._announcedWidths.values());
        if (this._maxWidth != -1 && result > this._maxWidth) {
            return this._maxWidth;
        } else {
            return result;
        }
    }
}
