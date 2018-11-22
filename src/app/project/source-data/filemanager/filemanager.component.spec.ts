import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FilemanagerComponent } from './filemanager.component';
import { SharedStorageService } from 'ngx-store';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { FileManagerService } from '@core/services';
import { FileModel } from '@core/models';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Project } from '@core/models/project/project';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';

declare const webix: any;

describe('FilemanagerComponent', () => {
    let component: FilemanagerComponent;
    let fixture: ComponentFixture<FilemanagerComponent>;

    const projectGuid = 'ANewProjectGUID';
    const fileGuid = 'AnewFileGUID';
    const fileId = '4711';

    const router = { navigate: jasmine.createSpy('navigate') };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FilemanagerComponent, HeaderComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: SharedStorageService,
                    useValue: {
                        get(selectedProject: string) {
                            const project = new Project();
                            project.projectGuid = projectGuid;
                            project.name = 'A Fake Project';
                            return project;
                        }
                    }
                },
                {
                    provide: FileManagerService,
                    useValue: {
                        getFile(projectId: string, id: string): Observable<FileModel> {
                            const fileData = new FileModel();
                            fileData.value = 'filename.png';
                            fileData.storageId = fileGuid;
                            fileData.ingestible = true;
                            fileData.ingestionDate = undefined;
                            fileData.id = fileId;

                            return of(fileData);
                        },
                        getDataUrl(): string {
                            return 'link';
                        },
                        getPostUrl(): string {
                            return 'link';
                        },
                        getAllowedFileTypes(): Observable<string[]>  {
                            return of(['xls', 'doc']);
                        }
                    }
                },
                {
                    provide: Router,
                    useValue: router
                }
            ]
        });

        fixture = TestBed.createComponent(FilemanagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should navigate to source data on navigate', (): void => {
        component.onNavigate('aNewFileId');
        expect(router.navigate).toHaveBeenCalledWith(['/projects', projectGuid, 'source-data', fileId]);
    });
});
