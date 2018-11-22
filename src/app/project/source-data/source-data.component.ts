import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageType } from '@core/enum/message-type.enum';
import { FileModel } from '@core/models/project/file-model';
import { Project } from '@core/models/project/project';
import { MessageService } from '@core/services/messages/message.service';
import { FileManagerService } from '@core/services/project/filemanager.service';
import { SharedStorageService } from 'ngx-store';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
import { combineLatest } from 'rxjs';

@TakeUntilDestroy()
@Component({
    templateUrl: './source-data.component.html',
    styleUrls: ['./source-data.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDataComponent implements OnInit, OnDestroy {
    doPreview: boolean = false;
    doApproval: boolean = false;
    isIngested: boolean;
    isWaiting: boolean = false;
    fileModel: FileModel;
    selectedProject: Project;
    errorMessage: string;
    previewCaption = 'Preview';
    approvalCaption = 'Approval';
    downloadLink: string;
    isIngestSuccessToastVisible: boolean = false;
    isIngestErrorToastVisible: boolean = false;
    isLoadingErrorToastVisible: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private _filManagerService: FileManagerService,
        private _sharedStorageService: SharedStorageService,
        private _messageService: MessageService,
        private _ref: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        const urlParams = combineLatest(this.activatedRoute.params, this.activatedRoute.queryParams);
        urlParams.pipe(untilDestroyed(this)).subscribe(routeParams => {
            this.showFile(routeParams);
        });

        this._messageService
            .getMessage()
            .pipe(untilDestroyed(this))
            .subscribe(message => {
                if (message.type == MessageType.LOADING_STARTED || message.type == MessageType.INGESTION_STARTED) {
                    this.isWaiting = true;
                    this._ref.detectChanges();
                }
                if (message.type == MessageType.LOADING_FINISHED || message.type == MessageType.INGESTION_FINISHED) {
                    this.isWaiting = false;
                    this._ref.detectChanges();
                }
                if (message.type == MessageType.INGESTION_FINISHED) {
                    this.ingestionDone(true);
                }
                if (message.type == MessageType.INGESTION_FINISHED_WITH_ERROR) {
                    this.ingestionDone(false);
                }
                if (message.type == MessageType.LOADING_FINISHED_WITH_ERROR) {
                    this.isLoadingErrorToastVisible = true;
                    this.isWaiting = false;
                    this._ref.detectChanges();
                }
            });
    }

    ngOnDestroy() {}

    showFile(routeParams: any) {
        const fileId = routeParams[0]['fileid'];
        this._filManagerService
            .getFile(this.selectedProject.projectGuid, fileId)
            .pipe(untilDestroyed(this))
            .subscribe(
                file => {
                    this.fileModel = file;
                    this.isIngested = file.ingestionDate
                        ? file.ingestionDate.toString() != '0001-01-01T00:00:00'
                        : false;
                    this.doPreview = !this.isIngested;
                    this.doApproval = !this.doPreview;

                    this.createDownloadLink();
                    this._ref.detectChanges();
                },
                error => (this.errorMessage = <any>error)
            );
    }

    onPreviewClicked() {
        this.doApproval = false;
        setTimeout(() => {
            this.doPreview = !this.doApproval;
            this._ref.detectChanges();
        }, 1);
    }

    onApprovalClicked() {
        if (this.isIngested) {
            this.doPreview = false;
            setTimeout(() => {
                this.doApproval = !this.doPreview;
                this._ref.detectChanges();
            }, 1);
        }
    }

    createDownloadLink() {
        if (this.fileModel == undefined) {
            this.downloadLink = '';
        } else {
            this.downloadLink = this._filManagerService.getDownloadLink(
                this.selectedProject.projectGuid,
                this.fileModel.id
            );
        }
    }

    ingestionDone(result: Boolean) {
        if (result) {
            this.isIngestSuccessToastVisible = true;
            this.isIngested = true;
            this.onApprovalClicked();
        } else {
            this.isIngestErrorToastVisible = true;
        }
        this._ref.detectChanges();
    }
}
