import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcessStateEnum } from '@core/enum/process-state-enum';
import { MasterDataImportService } from '@core/services/master-data/master-data-import.service';
import { MessageBoxComponent } from '@shared/message-box/message-box.component';
import { OnDestroy } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';

@Component({
    selector: 'kosmos-master-data',
    templateUrl: './master-data.component.html',
    styleUrls: ['./master-data.component.scss']
})
export class MasterDataComponent implements OnInit, OnDestroy {
    @ViewChild(MessageBoxComponent)
    private _messageBox: MessageBoxComponent;
    private _intervalId: NodeJS.Timer;

    fileToUpload: File = null;
    isImporting: boolean;

    constructor(private _masterDataImportService: MasterDataImportService) {}

    ngOnInit() {
        this.isImporting = false;
    }

    ngOnDestroy() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
        }
    }

    private uploadScopeItems(): void {
        this.subscribeAndHandleResult(this._masterDataImportService.postFile(this.fileToUpload));
    }

    private checkImportResult(): void {
        this._masterDataImportService.checkResult().subscribe(result => {
            if (result == undefined || result == null || result.state == ProcessStateEnum.STARTED) {
                return;
            }

            this.isImporting = false;
            if (this._intervalId) {
                clearInterval(this._intervalId);
            }

            if (result.state == ProcessStateEnum.FINISHED) {
                this.showMessageBox('Success', 'The data was imported successfully.');
            } else if (result.state == ProcessStateEnum.FINISHED_WITH_ERRRORS) {
                this.showMessageBox('Error', 'The import file violates the following conventions: ' + result.message);
            }
        });
    }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        this.uploadScopeItems();
    }

    handleIndustries(files: FileList) {
        this.subscribeAndHandleResult(this._masterDataImportService.postIndustries(files.item(0)));
    }

    showMessageBox(title: string, message: string) {
        this._messageBox.title = title;
        this._messageBox.message = message;
        this._messageBox.show();
    }

    private subscribeAndHandleResult(observable: Observable<Object>): void {
        observable.subscribe(
            data => {
                this.isImporting = true;
                this._intervalId = setInterval(() => {
                    this.checkImportResult();
                }, 10000);
            },
            error => {
                this.showMessageBox('Error', 'The import function is currently not available.');
            }
        );
    }
}
