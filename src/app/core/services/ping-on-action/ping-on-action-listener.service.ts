import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PingOnActionListenerService {
    removingListener = new BehaviorSubject<boolean>(false);

    removeListener(): void {
        this.removingListener.next(true);
    }

    get removeListener$(): Observable<boolean> {
        return this.removingListener.asObservable();
    }
}
