import { Project } from '@core/models/project/project';
import { Observable, of } from 'rxjs';

const PROJECT_OBJECT: Project = new Project();

export class MockSharedStorageService {
    get$(): Observable<Project> {
        return of(PROJECT_OBJECT);
    }

    get(key: string) {
        if (key == 'selectedProject') {
            return of(PROJECT_OBJECT);
        }
    }
}
