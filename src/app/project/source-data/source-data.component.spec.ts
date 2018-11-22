import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { FileModel } from '@core/models/project/file-model';
import { SourceData } from '@core/models/project/source-data';
import { FileManagerService } from '@core/services/project/filemanager.service';
import { IngestionDataService } from '@core/services/project/ingestion-data-service';
import { IngestionService } from '@core/services/project/ingestion-service';
import { HeaderComponent } from '@shared/header/header.component';
import { SpreadSheetComponent } from '@shared/spread-sheet/spread-sheet.component';
import { DxModule, SidebarComponent } from 'app/shared';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { ApprovalPopupComponent } from './approval-screen/approval-popup/approval-popup.component';
import { ApprovalScreenComponent } from './approval-screen/approval-screen.component';
import { SourceDataSidebarComponent } from './source-data-sidebar/source-data-sidebar.component';
import { SourceDataComponent } from './source-data.component';

declare const webix: any;

const fileName: string = 'myExcelShell.xlsx';

describe('SourceDataComponent', () => {
    let component: SourceDataComponent;
    let fixture: ComponentFixture<SourceDataComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SourceDataComponent,
                SourceDataSidebarComponent,
                HeaderComponent,
                ApprovalScreenComponent,
                ApprovalPopupComponent,
                SpreadSheetComponent,
                SidebarComponent
            ],
            imports: [DxModule],
            providers: [
                {
                    provide: IngestionService,
                    useValue: {
                        ingest(projectGuid: string, storageId: string): Observable<string> {
                            return of('bla');
                        }
                    }
                },
                {
                    provide: FileManagerService,
                    useValue: {
                        getFile(projectGuid: string, storageId: string): Observable<FileModel> {
                            const fileData = new FileModel();
                            fileData.value = fileName;
                            fileData.storageId = 'c4dc767f-24a3-4c62-b493-f9a5cbfdbaf5';
                            fileData.ingestionDate = undefined;
                            fileData.id = '4711';

                            return of(fileData);
                        },
                        getDownloadLink(): string {
                            return 'link';
                        }
                    }
                },
                {
                    provide: SharedStorageService,
                    useClass: MockSharedStorageService
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of([
                            {
                                storageid: 'dieGibtsNicht'
                            }
                        ]),
                        queryParams: of([
                            {
                                storageid: 'dieGibtsAuchNicht'
                            }
                        ])
                    }
                },
                {
                    provide: IngestionDataService,
                    useValue: {
                        getDataCells: function(projectGuid: string, storageId: string): Observable<SourceData> {
                            const sourceData = new SourceData();
                            sourceData.data = new Array();
                            sourceData.data.push([1, 1, 'left upper cell']);
                            sourceData.data.push([5, 5, 'cell in the middle']);
                            sourceData.data.push([10, 10, 'right lower cell']);
                            return of(sourceData);
                        }
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(SourceDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should be created', () => {
        expect(component).toBeTruthy();
    });

    xit('should show filename', () => {
        const elements = document.getElementsByClassName('header-subtitle');
        expect(elements).toBeTruthy();
        expect(elements[0].innerHTML).toContain(fileName);
    });

    xit('should disable approval button, since its not ingested', () => {
        const elements = document.getElementsByClassName('button-text-disabled');
        expect(elements).toBeTruthy();
        expect(elements[0].innerHTML).toContain(component.approvalCaption);
    });

    xit('should ignore Click on approval, since its not ingested', () => {
        const element = fixture.debugElement.query(By.css('.menu-button-disabled'));
        element.nativeElement.click();
        fixture.detectChanges();
        const elements = document.getElementsByClassName('button-text-disabled');
        expect(elements[0].innerHTML).toContain(component.approvalCaption);
    });

    xit('ingestion should enable approval button', () => {
        component.ingestionDone(true);
        fixture.detectChanges();
        const elements = document.getElementsByClassName('button-text');
        expect(elements).toBeTruthy();
        expect(elements[1].innerHTML).toContain(component.approvalCaption);
    });
});
