import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MessageType } from '@core/enum/message-type.enum';
import { FileModel } from '@core/models/project/file-model';
import { Project } from '@core/models/project/project';
import { KosmosConfigurationService } from '@core/services';
import { MessageService } from '@core/services/messages/message.service';
import { FileManagerService } from '@core/services/project/filemanager.service';
import { SharedStorageService } from 'ngx-store';

@Component({
    selector: 'kosmos-preingestion-screen',
    templateUrl: './preingestion-screen.component.html',
    styleUrls: ['./preingestion-screen.component.scss']
})
export class PreingestionScreenComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input()
    file: FileModel;

    workbook: GC.Spread.Sheets.Workbook;
    worksheet: GC.Spread.Sheets.Worksheet;
    excel: any;
    selectedProject: Project;
    hostStyle = {
        width: '100%',
        height: '100%'
    };

    constructor(
        private _fileManagerService: FileManagerService,
        private _sharedStorageService: SharedStorageService,
        private _messageService: MessageService
    ) {
        GC.Spread.Sheets.LicenseKey = KosmosConfigurationService.appConfig.SPREADJS_LICENSE_KEY;
        this.excel = new GC.Spread.Excel.IO();
    }

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');
    }

    ngAfterViewInit() {
        if (this.selectedProject && this.file) {
            this._messageService.sendMessage(MessageType.LOADING_STARTED);
            this._fileManagerService.getContent(this.selectedProject.projectGuid, this.file.id).subscribe(result => {
                this.excel.open(
                    result,
                    json => {
                        this.workbook.fromJSON(json, {});
                        this.InitWorkSheet();
                        this._messageService.sendMessage(MessageType.LOADING_FINISHED);
                    },
                    errors => {
                        this._messageService.sendMessage(MessageType.LOADING_FINISHED);
                    }
                );
            });
        }
    }

    ngOnDestroy(): void {
        this.workbook.destroy();
    }

    onInitialize(spreadSheet: any): void {
        this.workbook = spreadSheet.spread;
        this.workbook.options.tabStripVisible = false;
        this.workbook.options.tabStripVisible = false;
        this.workbook.options.newTabVisible = false;
        this.workbook.options.tabEditable = false;
        this.workbook.focus();
    }

    private InitWorkSheet(): void {
        this.workbook.options.tabStripVisible = false;
        this.workbook.options.newTabVisible = false;
        this.workbook.options.tabEditable = false;

        if (this.workbook.getSheetCount() > 0) {
            this.workbook.setActiveSheetIndex(0); // always show the first sheet
        }
        this.workbook.getActiveSheet().clearSelection();
        this.workbook.getActiveSheet().setActiveCell(0, 0);
        this.workbook.getActiveSheet().options.isProtected = true;
        this.workbook.focus();
    }
}
