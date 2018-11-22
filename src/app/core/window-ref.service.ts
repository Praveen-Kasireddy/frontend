import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
    get nativeElement(): Partial<Window> {
        return window as any;
    }
}
