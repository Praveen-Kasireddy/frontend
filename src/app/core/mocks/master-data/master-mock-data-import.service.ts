import { Injectable } from '@angular/core';
import { ProcessResult } from '@core/models/process-result';
import { Observable, of } from 'rxjs';

@Injectable()
export class MasterMockDataImportService {
    postFile(fileToUpload: File): Observable<Object> {
        return of(new Object());
    }

    checkResult(): Observable<ProcessResult> {
        return of(new ProcessResult());
    }

    postIndustries(fileToUpload: File): Observable<Object> {
        return of(new Object());
    }

    postUsers(fileToUpload: File): Observable<Object> {
        return of(new Object());
    }
}
