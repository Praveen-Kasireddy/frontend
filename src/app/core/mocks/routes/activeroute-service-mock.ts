import { Observable, of, Subject, from } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
export class MockActivatedRoute extends ActivatedRoute {
    constructor() {
        super();
        this.params = of({ storageid: '/den/gibts/nicht' });
    }
}
