import { Component, Input, OnInit } from '@angular/core';
import { MessageType } from '@core/enum/message-type.enum';
import { ProcessStateEnum } from '@core/enum/process-state-enum';
import { Project } from '@core/models/project/project';
import { MessageService } from '@core/services/messages/message.service';
import { IngestionService } from '@core/services/project/ingestion-service';
import { SharedStorageService } from 'ngx-store';
import { OnDestroy } from 'ngx-take-until-destroy';

@Component({
    moduleId: module.id,
    selector: 'kosmos-source-data-sidebar',
    templateUrl: 'source-data-sidebar.component.html'
})
export class SourceDataSidebarComponent implements OnInit, OnDestroy {
    @Input()
    storageGuid: string;
    @Input()
    isIngested: boolean;
    @Input()
    isIngesting: boolean;
    showHelp: boolean = true;
    selectedProject: Project;
    errorMessage: string;

    private _intervalId: NodeJS.Timer;

    constructor(
        private _ingestionService: IngestionService,
        private _sharedStorageService: SharedStorageService,
        private _messageService: MessageService
    ) {}

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
    }

    ngOnDestroy() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
        }
    }

    toggleHelp() {
        this.showHelp = !this.showHelp;
    }

    onIngestNowClicked(event: MouseEvent) {
        this._ingestionService.ingest(this.selectedProject.projectGuid, this.storageGuid).subscribe(
            i => {
                this.isIngesting = true;
                this._messageService.sendMessage(MessageType.INGESTION_STARTED);
                this._intervalId = setInterval(() => {
                    this.checkIngestionStatus();
                }, 10000);
                // because, the first test is fired in 10 seconds, start a test at once
                setTimeout(() => {
                    this.checkIngestionStatus();
                }, 2000);
            },
            error => (this.errorMessage = <any>error)
        );
    }

    private checkIngestionStatus(): void {
        this._ingestionService.checkStatus(this.selectedProject.projectGuid, this.storageGuid).subscribe(
            result => {
                if (result == undefined || result == null || result.state == ProcessStateEnum.STARTED) {
                    return;
                }

                this.isIngesting = false;
                if (this._intervalId) {
                    clearInterval(this._intervalId);
                }

                if (result.state == ProcessStateEnum.FINISHED) {
                    this.isIngested = true;
                    this._messageService.sendMessage(MessageType.INGESTION_FINISHED);
                } else if (result.state == ProcessStateEnum.FINISHED_WITH_ERRRORS) {
                    this.isIngested = false;
                    this._messageService.sendMessage(MessageType.INGESTION_FINISHED_WITH_ERROR);
                }
            },
            error => (this.errorMessage = <any>error)
        );
    }
}
