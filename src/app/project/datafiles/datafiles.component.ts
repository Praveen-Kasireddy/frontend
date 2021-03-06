import { formatDate } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_TEST_USER, X_CORRELATION_ID_HEADER_KEY, X_CORRELATION_ID_STORAGE_KEY } from '@core/app.const';
import { FileModel, Project } from '@core/models';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { FileManagerService } from '@core/services/project/filemanager.service';
import { MessageBoxComponent } from '@shared/message-box/message-box.component';
import { filemanager } from '@xbs/filemanager';
import { SharedStorageService } from 'ngx-store';

declare const webix: any;

declare var $: any;

@Component({
    selector: 'kosmos-datafiles',
    templateUrl: './datafiles.component.html',
    styleUrls: ['./datafiles.component.scss']
})
export class DatafilesComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('filesview')
    private _filesview: any;
    @ViewChild(MessageBoxComponent)
    messageBox: MessageBoxComponent;
    private _containerId: string;
    private _filemanager: filemanager;
    selectedProject: Project;
    private _selectedFile: FileModel;
    private _permittedFileTypes: any;
    isToastVisible: boolean = false;
    toastMessage: string = '';
    projectKey: string = 'current_project_key';
    public NGShow: boolean = false;

    constructor(
        private _filManagerService: FileManagerService,
        private _sharedStorageService: SharedStorageService,
        private _router: Router,
        private _kosmosprojectService: KosmosConfigurationService
    ) {
        this._filemanager = null;
        this._containerId = '' + webix.uid();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (this._filemanager) {
            this._filemanager.resize();
        }
    }
    //http://localhost:4200/#source_data
    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');

        let project = this.selectedProject.projectGuid;

        if (!localStorage.getItem(this.projectKey)) localStorage.setItem(this.projectKey, project);

        setTimeout(_ => {
            console.log('loading JS files');
            this.loadScript('js/entry.js');
        }, 2000);
    }

    ngAfterViewInit() {
        this._filManagerService.getAllowedFileTypes().subscribe(fileTypes => {
            this._permittedFileTypes = fileTypes;
        });

        const postUrl = this._filManagerService.getPostUrl(this.selectedProject.projectGuid);

        this._filesview.nativeElement.setAttribute('id', this._containerId);
        this._filemanager = webix.ui({
            id: 'filemanagerId',
            view: 'filemanager',
            disabledHistory: true,
            handlers: {
                upload: postUrl,
                remove: postUrl,
                create: postUrl,
                rename: postUrl,
                delete: postUrl,
                move: postUrl
            },
            container: this._filesview.nativeElement,
            on: {
                onViewInit: function(name, config) {
                    if (name == 'table') {
                        // an array with columns configuration
                        const columns = config.columns;

                        // configuration of a new column for ingestion date
                        const ingestedColumn = {
                            id: 'ingested',
                            header: 'Ingested',
                            fillspace: 1,
                            template: function(obj, common) {
                                if (!obj.ingestionDate || obj.ingestionDate.toString() == '0001-01-01T00:00:00') {
                                    return '';
                                } else {
                                    return formatDate(obj.ingestionDate, 'd-MMM-yyyy', 'en-EN');
                                }
                            }
                        };

                        // configuration of a new column for navigation
                        const navigationColumn = {
                            id: 'navigation',
                            header: '',
                            fillspace: 1,
                            template: function(obj, common) {
                                const ext = obj.value.split('.').pop();
                                if (obj.ingestible || ext.toLowerCase() == 'xlsx' || ext.toLowerCase() == 'xls') {
                                    return `<div style="cursor: pointer;">
                                                Ingest&nbsp;<span class="kpmg-icon-menu-data-structure"></span>
                                            </div>`;
                                } else {
                                    return '';
                                }
                            }
                        };

                        // insert a column
                        webix.toArray(columns).insertAt(ingestedColumn, 1);
                        webix.toArray(columns).insertAt(navigationColumn, 2);

                        // remove not needed columns
                        webix.toArray(columns).removeAt(3, 3);
                    }
                },
                onItemClick: id => {
                    if (id.column == 'navigation') {
                        this.onNavigate(id.row);
                    }
                },
                onBeforeFileUpload: fileConfig => {
                    const localfile = fileConfig.file;
                    localStorage.setItem('blobExcelData', JSON.stringify(''));
                    //api to pyton
                    this._filManagerService.getExcelDataFromPython(localfile.name).subscribe(
                        res => {
                            console.log('Excel data has been returned from Python AI', res);
                            localStorage.setItem('pythonData', JSON.stringify(res));
                        },
                        err => {
                            console.log('Error Excel data has been not returned from Python AI', err);
                        }
                    );
                    /*
                        let impObject = import('../../../assets/js/services/ExcelLocalService').then((module: any) => {
                        module.excelLocalService.importXlsx(localfile);
                    });


                        this._filManagerService.getExcelDataFromPython(localfile.name).subscribe(res => {
                            console.log('Excel data has been returned from Python AI', res);
                            localStorage.setItem('blobExcelData', JSON.stringify(res));

                        let impXlsModule = import('../../../assets/js/services/ImportXlsxService').then(
                            (module: any) => {
                                module.importXlsxService.importXlsx(localfile);
                            }
                        );*/

                    if (!this._permittedFileTypes.includes(fileConfig.type.toLowerCase())) {
                        this.messageBox.message =
                            'At least one file could not be uploaded due to its file type. ' +
                            'Please contact your system administrator for further help.';
                        this.messageBox.show();
                        return false;
                    }

                    if (fileConfig.size > 104857600) {
                        this.messageBox.message =
                            'At least one file could not be uploaded due to its file size. The maximum file size is 100MB. ' +
                            'Please contact your system administrator for further help.';
                        this.messageBox.show();
                        return false;
                    }

                    return true;
                },
                onErrorResponse: (requestData, response) => {
                    this.toastMessage = 'An error occured.';
                    this.isToastVisible = true;
                }
            }
        });

        webix.attachEvent('onBeforeAjax', function(mode, url, data, request, headers, files, promise) {
            headers['Cache-Control'] = 'no-cache';
            headers['Pragma'] = 'no-cache';
            headers['Expires'] = 'Sat, 01 Jan 2000 00:00:00 GMT';
            if (
                this._sharedStorageService != undefined &&
                this._sharedStorageService.get(X_CORRELATION_ID_STORAGE_KEY)
            ) {
                headers[X_CORRELATION_ID_HEADER_KEY] = this._sharedStorageService.get(X_CORRELATION_ID_STORAGE_KEY);
            }
            if (!KosmosConfigurationService.appConfig.production) {
                headers['x-username'] = LOCAL_TEST_USER;
            }
        });

        this._filemanager.load(this._filManagerService.getDataUrl(this.selectedProject.projectGuid));

        this._filemanager.waitData.then(() => {
            if (this._filemanager) {
                this._filemanager.resize();
            }
        });
    }

    ngOnDestroy(): void {
        if (this._filemanager) {
            this._filemanager.destructor();
        }
    }

    onNavigate(fileId: string) {
        if (this.selectedProject.projectGuid && fileId) {
            this._filManagerService.getFile(this.selectedProject.projectGuid, fileId).subscribe(file => {
                this._selectedFile = file;
                this.navigate();
            });
        }
    }

    navigate() {
        if (this._selectedFile && this._selectedFile.ingestible) {
            this._router.navigate([
                '/projects',
                this.selectedProject.projectGuid,
                'source-data',
                this._selectedFile.id
            ]);
        }
    }

    public loadScript(url: string) {
        const body = <HTMLDivElement>document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
}
