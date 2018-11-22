import { sourceFilesService } from '../../../services/SourceFilesService';
import { sourceDataFiles } from '../SourceDataFiles';
import { FileWorkflowItemFormatter } from './FileWorkflowItemFormatter';
import { sourceDataEditTableCell } from './SourceDataEditTableCell';

export class FileWorkflow {
    constructor() {
        this.MODE_MODAL = 0;
        this.MODE_BRUSH = 1;
        this.MODE_STRUCTURE = 2;
        this.MODE_RANGE_PICKER = 3;
        this.MODE_CLICK_TO_COPY = 4;

        // Current operating mode.
        this.mode = this.MODE_MODAL;

        // Is the user making a selection using the mouse?
        this.isSelectingWithMouse = false;

        // Function to call after brush mode has ended.
        this.callback = null;

        // Disable any further selection events on the flex-grid.
        this.disableSelection = false;

        // List of cells selected while in Structure mode.
        this.selectedStructureCells = [];

        // Saves the previous cell selection when the modal mode is active.
        this.previousModalSelection = null;

        // Ignore selection-changing events, e.g. if we're programatically changing the selection.
        this.ignoreSelectionChangingEvents = false;

        // Catch mouse-up events even if they are outside the flexgrid.
        $(document).on('mouseup', () => {
            this.onMouseUp();
        });

        // Item formatter.
        this.itemFormatter = new FileWorkflowItemFormatter();
    }

    enableModal() {
        this.reset();
        this.mode = this.MODE_MODAL;
        sourceDataFiles.flexGrid.selectionMode = wijmo.grid.SelectionMode.CellRange;
        sourceDataFiles.flexGrid.refresh();
    }

    enableBrush(callback) {
        this.reset();
        this.mode = this.MODE_BRUSH;
        this.callback = callback;
        sourceDataFiles.flexGrid.selectionMode = wijmo.grid.SelectionMode.CellRange;
        sourceDataFiles.flexGrid.refresh();
    }

    enableStructure() {
        this.reset();
        this.mode = this.MODE_STRUCTURE;
        this.selectedStructureCells = [];
        sourceDataFiles.flexGrid.selectionMode = wijmo.grid.SelectionMode.Cell;
        sourceDataFiles.flexGrid.selection = new wijmo.grid.CellRange(-1, -1, -1, -1);
    }

    enableRangePickerMode(callback) {
        // If multiple cells are selected, label range cannot be edited.
        if (sourceDataFiles.flexGrid.selection.isSingleCell === false) {
            return;
        }

        // Reset.
        this.reset();

        // Save previous selection, will be used when we re-active modal mode.
        if (this.mode === this.MODE_MODAL) {
            this.previousModalSelection = sourceDataFiles.flexGrid.selection;
        }

        $(sourceDataFiles.flexGrid.hostElement).addClass('_copy-cursor');
        this.mode = this.MODE_RANGE_PICKER;
        this.callback = callback;
        sourceDataFiles.flexGrid.refresh();
    }

    enableClickToCopyMode(callback) {
        // Reset.
        this.reset();

        // Save previous selection, will be used when we re-active modal mode.
        if (this.mode === this.MODE_MODAL) {
            this.previousModalSelection = sourceDataFiles.flexGrid.selection;
        }

        $(sourceDataFiles.flexGrid.hostElement).addClass('_copy-cursor');
        this.mode = this.MODE_CLICK_TO_COPY;
        this.callback = callback;
        sourceDataFiles.flexGrid.refresh();
    }

    reset() {
        this.disableSelection = false;
        $(sourceDataFiles.flexGrid.hostElement).removeClass('_copy-cursor');
    }

    onTableSelectionChanging(s, e) {
        if (this.ignoreSelectionChangingEvents) {
            return;
        }

        // If user is still dragging the selection but we already cancelled it...
        if (this.disableSelection) {
            e.cancel = true;
            return;
        }

        switch (this.mode) {
            case this.MODE_MODAL:
                // If modal is open, try to close it.
                if ($('#tableCellModal').is(':visible')) {
                    $('#tableCellModal').modal('hide');

                    // Still visible? Then the user clicked "cancel", so we should cancel too.
                    if ($('#tableCellModal').is(':visible')) {
                        e.cancel = true;
                    }
                }

                break;

            case this.MODE_BRUSH:
                break;

            case this.MODE_RANGE_PICKER:
                if (s === undefined || e === undefined) {
                    break;
                }
                this.callback(this, e);
                break;

            case this.MODE_CLICK_TO_COPY:
                if (s === undefined || e === undefined) {
                    break;
                }
                this.callback(this, e);
                break;
        }
    }

    onTableSelectionChanged(s, e) {
        if (this.ignoreSelectionChangingEvents) {
            return;
        }

        if (e.cancel || !e.range.isValid) {
            return;
        }

        // Do not call this event when first opening the table. Flexgrid automatically calls this for the [0, 0] cell.
        if (!this.firstCellAutomaticSelectionFinished) {
            this.firstCellAutomaticSelectionFinished = true;

            return;
        }

        switch (this.mode) {
            case this.MODE_MODAL:
                sourceDataEditTableCell.onTableSelectionChanged(s, e);
                break;

            case this.MODE_BRUSH:
                break;

            case this.MODE_STRUCTURE:
                const cellProperties = sourceFilesService.getCurrentSourceFile().getSingleCellProperties(e.row, e.col);

                // Only consider data-cells.
                if (cellProperties.cellType !== 'data') {
                    break;
                }

                // Save new cell.
                this.selectedStructureCells.push({
                    row: e.row,
                    col: e.col
                });

                // Format table.
                sourceDataFiles.flexGrid.refresh();
                break;
            case this.MODE_RANGE_PICKER:
                break;
            case this.MODE_CLICK_TO_COPY:
                break;
        }
    }

    onMouseDown() {
        if (this.disableSelection) {
            return;
        }
        this.isSelectingWithMouse = true;
    }

    onMouseUp() {
        if (!this.isSelectingWithMouse || !sourceDataFiles.flexGrid.selection.isValid) {
            return;
        }

        this.isSelectingWithMouse = false;
        this.disableSelection = false;

        switch (this.mode) {
            case this.MODE_MODAL:
                break;

            case this.MODE_BRUSH:
                this.callback(sourceDataFiles.flexGrid.selection);
                sourceDataFiles.flexGrid.selection = new wijmo.grid.CellRange(-1, -1, -1, -1);
                break;

            case this.MODE_RANGE_PICKER:
                if (this.previousModalSelection !== null) {
                    this.ignoreSelectionChangingEvents = true;
                    sourceDataFiles.flexGrid.selection = this.previousModalSelection;
                    this.ignoreSelectionChangingEvents = false;
                    this.previousModalSelection = null;
                }

                this.disableSelection = true;
                this.enableModal();
                break;

            case this.MODE_CLICK_TO_COPY:
                if (this.previousModalSelection !== null) {
                    this.ignoreSelectionChangingEvents = true;
                    sourceDataFiles.flexGrid.selection = this.previousModalSelection;
                    this.ignoreSelectionChangingEvents = false;
                    this.previousModalSelection = null;
                }

                this.disableSelection = true;
                this.enableModal();
                break;
        }
    }

    formatTableCell(s, e) {
        if ($(e.cell).hasClass('wj-header')) {
            return;
        }

        $(e.cell).removeClass('_structure-mode-parent');
        $(e.cell).removeClass('_structure-mode-child');

        switch (this.mode) {
            case this.MODE_STRUCTURE:
                this.selectedStructureCells.forEach((position, index) => {
                    if (e.col === position.col && e.row === position.row) {
                        if (index === 0) {
                            $(e.cell).addClass('_structure-mode-parent');
                        } else {
                            $(e.cell).addClass('_structure-mode-child');
                        }
                    }
                });
                break;
        }
    }
}
