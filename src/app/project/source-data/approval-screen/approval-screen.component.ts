import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IngestionType, ResultStatus } from '@core/enum';
import { MessageType } from '@core/enum/message-type.enum';
import { DataCell, DataCellUpdateResultEntry, FileModel, Project, SourceData, UpdateDataCell } from '@core/models';
import { IngestionDataService } from '@core/services';
import { MessageService } from '@core/services/messages/message.service';
import {
    CellCoordinates,
    CellSelectionChangedEvent,
    CellWithStyle,
    MessageBoxComponent,
    SpreadSheetComponent
} from '@shared/index';
import { SharedStorageService } from 'ngx-store';
import { ApprovalPopupComponent } from './approval-popup/approval-popup.component';

declare const webix: any;

@Component({
    selector: 'kosmos-approval-screen',
    templateUrl: './approval-screen.component.html',
    styleUrls: ['./approval-screen.component.scss']
})
export class ApprovalScreenComponent implements OnInit, AfterViewInit {
    @ViewChild(SpreadSheetComponent)
    spreadSheet: SpreadSheetComponent;
    @ViewChild(ApprovalPopupComponent)
    approvalPopup: ApprovalPopupComponent;
    @ViewChild(MessageBoxComponent)
    messageBox: MessageBoxComponent;
    @Input()
    file: FileModel;
    selectedProject: Project;
    data: SourceData;
    selectedCells: CellWithStyle[];

    constructor(
        private _ingestionDataService: IngestionDataService,
        private _sharedStorageService: SharedStorageService,
        private _messageService: MessageService
    ) {}

    ngOnInit() {
        this.selectedProject = this._sharedStorageService.get('selectedProject');

        this._ingestionDataService.getDimensions(this.selectedProject.projectGuid).subscribe(result => {
            this.approvalPopup.dimensions = result;
        });
        this.approvalPopup.closeEvent.subscribe(() => {
            this.approvalPopup.hide();
        });

        this.approvalPopup.submitEvent.subscribe(() => {
            const cellsForUpdate = this.getCellsForUpdate(this.approvalPopup.dataCells);
            this._ingestionDataService
                .updateDataCells(this.selectedProject.projectGuid, cellsForUpdate)
                .subscribe(result => this.processUpdateResult(result));
        });
    }

    ngAfterViewInit(): void {
        if (this.selectedProject && this.file) {
            this._messageService.sendMessage(MessageType.LOADING_STARTED);
            this._ingestionDataService.getAllDataCells(this.selectedProject.projectGuid, this.file.storageId).subscribe(
                result => {
                    this.data = result;
                    this._messageService.sendMessage(MessageType.LOADING_FINISHED);
                },
                error => {
                    this._messageService.sendMessage(MessageType.LOADING_FINISHED_WITH_ERROR);
                }
            );
        }
    }

    onCellSelectionChanged(event: CellSelectionChangedEvent): void {
        this.showApprovalPopup(event.cells);
    }

    onClosePopup(event: any): void {}

    private showApprovalPopup(cells: CellWithStyle[]): void {
        const cellCoordinates: CellCoordinates[] = cells.map(c => new CellCoordinates(c));
        this._ingestionDataService
            .getDataCells(this.selectedProject.projectGuid, this.file.storageId, cellCoordinates)
            .subscribe(result => {
                this.approvalPopup.dataCells = result;
            });
        this.selectedCells = cells;
        this.approvalPopup.show();
    }

    private processUpdateResult(results: DataCellUpdateResultEntry[]): void {
        let warningText: string;
        for (let i = 0; i < results.entries.length; i++) {
            const result = results.entries[i];

            if (result.status != ResultStatus.SUCCESS) {
                if (result.statusCode == 'MissingDimensions') {
                    if (results.entries.length > 1) {
                        warningText =
                            'Not all Data Points could be put in range because there are some missing dimensions.';
                    } else {
                        warningText =
                            'The Data Point cannot be included in range because there are some missing dimensions.';
                    }
                }
            }

            const cell = result.updatedDataCell;

            this.spreadSheet.setCellStyle(cell.row, cell.column, result.cellStyle);
        }
        this.spreadSheet.refresh();

        if (warningText) {
            this.messageBox.message = warningText;
            this.messageBox.show();
        }

        this._ingestionDataService.getDimensions(this.selectedProject.projectGuid).subscribe(result => {
            this.approvalPopup.dimensions = result;
        });
    }

    private getCellsForUpdate(cells: DataCell[]): UpdateDataCell[] {
        const updateCells = new Array<UpdateDataCell>();
        cells.filter(cell => cell.ingestionType != IngestionType.UNSET).forEach(cell => {
            const updateCell = new UpdateDataCell();
            updateCell.id = cell.id;
            updateCell.ingestionType = cell.ingestionType;
            updateCell.isInRange = cell.isInRange;
            updateCell.dimensionCharacteristics = cell.dimensionCharacteristics;
            updateCells.push(updateCell);
        });

        return updateCells;
    }
}
