import get from 'lodash/get';
import { resizableDivider } from '../../ResizableDivider';
import { importXlsxService } from '../../services/ImportXlsxService';
import { storageService } from '../../services/StorageService';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerCellEditing } from './table/DataExplorerCellEditing';
import { dataExplorerRenderTable } from './table/DataExplorerRenderTable';

class DataExplorerImport {
    constructor() {
        this.rightTableFocus = false;
        this.rigthTableSelection = {};
        this.copiedFromTable = false;

        $(document).on('paste', '#data-explorer-table .wj-cell', event => {
            let clipboardData, pastedData;

            // Stop data actually being pasted into div
            event.stopPropagation();
            event.preventDefault();

            if (!dataExplorerRenderTable.flexgrid.selection.isSingleCell) {
                return;
            }

            // Get pasted data via clipboard API
            clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
            pastedData = clipboardData.getData('Text');

            const rows = pastedData.split('\n');
            let cells = [];
            rows.map(row => {
                if (row) {
                    cells.push(row.split('\t'));
                }
            });
            const col = dataExplorerRenderTable.flexgrid.selection._col;
            const row = dataExplorerRenderTable.flexgrid.selection._row;

            if (row + cells.length > dataExplorerRenderTable.flexgrid.rows.length) {
                alert("Attempted to paste selection that does not fit this table's content.");

                return;
            }

            if (col + cells[0].length > dataExplorerRenderTable.flexgrid.columns.length) {
                alert("Attempted to paste selection that does not fit this table's content.");

                return;
            }

            let rowCounter = -1;
            cells.map((rowCells, rowIndex) => {
                rowCounter++;

                let colCounter = -1;
                rowCells.map((cell, colIndex) => {
                    dataExplorerRenderTable.flexgrid.finishEditing(true);
                    const oldVal = dataExplorerRenderTable.flexgrid.getCellData(row + rowIndex, col + colIndex, false);
                    dataExplorerRenderTable.flexgrid.setCellData(row + rowIndex, col + colIndex, cell);
                    const dataType = dataExplorerRenderTable.flexgrid.columns[col + colIndex].dataType;
                    const cancel = dataExplorerCellEditing.cellEditValidation({
                        oldVal: oldVal,
                        newVal: cell,
                        dataType: dataType,
                        row: row + rowIndex,
                        col: col + colIndex
                    });
                    colCounter++;

                    if (!cancel) {
                        dataExplorerCellEditing.cellEditAddDataPoint({
                            row: row + rowIndex,
                            col: col + colIndex,
                            val: cell,
                            colCounter: colCounter,
                            rowCounter: rowCounter,
                            copiedFromRightTable: this.copiedFromTable
                        });
                    } else {
                        dataExplorerRenderTable.flexgrid.setCellData(row + rowIndex, col + colIndex, oldVal);
                    }
                });
            });
        });

        $(document).on('copy', event => {
            this.copiedFromTable = this.rightTableFocus;
        });
    }

    init() {
        $('#data_explorer_import_table').hide();

        $('#data_explorer_import_table_button').on('click', e => {
            $('#data_explorer_import_table').val('');
            $('#data_explorer_import_table').trigger('click');
        });

        $('#data_explorer_import_table').on('change', e => {
            $('.main-content #data_explorer_imported_table').remove();
            $('#single_analysis ._split-screen-mode-switch input').prop('checked', true);

            this.loadFile(e);
        });
    }

    cancelImport() {
        $('.main-content .tab-content').css('max-width', '100%');
        $('.main-content #data_explorer_imported_table').remove();
        $('#data_explorer_import_table').val('');
    }

    createRightTable(uuid) {
        const rightFlexgrid = new wijmo.grid.FlexGrid($('#data_explorer_imported_table')[0], {
            isReadOnly: true,
            itemsSource: [],
            onGotFocus: () => {
                this.rightTableFocus = true;
            },
            onLostFocus: () => {
                this.rightTableFocus = false;
            },
            onSelectionChanged: () => {
                const selection = rightFlexgrid.selection;
                this.rigthTableSelection = {
                    row1: Math.min(selection._row, selection._row2),
                    row2: Math.max(selection._row, selection._row2),
                    col1: Math.min(selection._col, selection._col2),
                    col2: Math.max(selection._col, selection._col2)
                };
            }
        });

        rightFlexgrid.itemsSource = storageService.getCurrentProject().sourceFiles[uuid].itemsSource;
        rightFlexgrid.collectionView.refresh();
        $('#data_explorer_imported_table > div')
            .not('._files-tabs')
            .css('height', '95%');
    }

    async loadFile(e) {
        this.splitScreen();

        resizableDivider.enableResizable(
            '.main-content > .tab-content',
            '#data_explorer_imported_table',
            'width',
            { handles: 'e' },
            { minWidth: 300, maxWidth: 1000 },
            () => {
                dataExplorerRenderTable.updateTable();
            }
        );

        // Load wijmo grid data.
        this.uuid = await importXlsxService.importXlsx(e.target.files[0]);
        storageService
            .getCurrentProject()
            .analyses[dataExplorerAnalyses.currentAnalysisId].dropboxFiles.push(this.uuid);

        $('.allow-divider').on('resize', () => {
            dataExplorerRenderTable.updateTable();
        });

        this.createRightTable(this.uuid);

        // Save project.
        storageService.saveCurrentProject();
        storageService.syncViews();

        this.refreshFilesTabs();
    }

    refreshFilesTabs() {
        $('._files-tabs').empty();
        const analysis = storageService.getCurrentProject().analyses[dataExplorerAnalyses.currentAnalysisId];
        analysis.dropboxFiles.map(uuid => {
            const file = get(storageService, `currentProject.sourceFiles[${uuid}]`);
            const active = this.uuid === uuid ? '_active-tab' : '';
            $('._files-tabs').prepend(
                '<div class="_file-tab ' + active + '" data-uuid="' + uuid + '">' + file.name + '</div>'
            );
        });
    }

    splitScreen() {
        $('.main-content').append('<div id="data_explorer_imported_table"><div class="_files-tabs"></div></div>');
    }
}

export const dataExplorerImport = new DataExplorerImport();
