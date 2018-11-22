import { ChapterUpdateModel } from '@core/models/project/chapter-update-model';
import { CreateChapterModel } from '@core/models/project/create-chapter-model';
import { Observable, of } from 'rxjs';

export class MockChapterService {
    putChapter(projectGuid: string, model: ChapterUpdateModel): Observable<Object> {
        return of(new Object());
    }

    create(projectGuid: string, chapter: CreateChapterModel): Observable<Object> {
        return of({});
    }

    deleteChapter(projectGuid: string, chapterId: number): Observable<Object> {
        return of(new Object());
    }

    swap(projectGuid: string, item1: number, item2: number): Observable<Object> {
        return of({});
    }
}
