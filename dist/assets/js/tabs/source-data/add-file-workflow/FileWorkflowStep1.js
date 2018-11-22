import get from 'lodash/get';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';
import { sourceDataEditTableCell } from '../../../tabs/source-data/add-file-workflow/SourceDataEditTableCell';
import { sourceDataFiles } from '../SourceDataFiles';
import { FileWorkflowAutoDetectTable } from './FileWorkflowAutoDetectTable';
import { sourceDataFilesSidebar } from './SourceDataFilesSidebar';

export class FileWorkflowStep1 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;

        // DOM
        this.brushSection = this.rootElement.find('.brush-section');
        this.dataPointBrush = this.brushSection.find('._data-point');
        this.freezeCol = this.brushSection.find('._freeze-col');
        this.unfreezeCol = this.brushSection.find('._unfreeze-col');
        this.freezeRow = this.brushSection.find('._freeze-row');
        this.unfreezeRow = this.brushSection.find('._unfreeze-row');
        this.notUsedBrush = this.brushSection.find('._not-used');
        this.tableBrush = this.brushSection.find('._table');
        this.table = this.rootElement.find('#source_data_files_pre_ingestion > ._table');

        // Events
        this.dataPointBrush.on('click', () => {
            const isActive = this.dataPointBrush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.dataPointBrush.addClass('_active');
                this.fileWorkflow.enableBrush(this.onDataPointBrushEnd);
            }
        });
        this.notUsedBrush.on('click', () => {
            const isActive = this.notUsedBrush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.notUsedBrush.addClass('_active');
                this.fileWorkflow.enableBrush(this.onNotUsedBrushEnd);
            }
        });
        this.tableBrush.on('click', () => {
            const isActive = this.tableBrush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.tableBrush.addClass('_active');
                this.fileWorkflow.enableBrush(this.onTableBrushEnd);
            }
        });
        $(document.body).on('click', '._label-brush', event => {
            const brush = $(event.target);
            const isActive = brush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor-for-labels');
                brush.addClass('_active');
                this.fileWorkflow.enableBrush(selection => {
                    $('._show-loading').css('display', 'block');

                    // Use setTimeout because otherwise loading animation does not appear.
                    setTimeout(() => {
                        this.onLabelBrushEnd(selection, brush.attr('data-dimension'));
                        $('._show-loading').css('display', 'none');
                    }, 50);
                });
            }
        });
        $(document.body).on('click', '._label-global', event => {
            const container = $(event.target).closest('._label-global');

            if (container.find('i').length === 0) {
                container.append('<i class="fa fa-check" aria-hidden="true"></i>');
                const globalRange = this.getGlobalRange();
                const dimension = container.siblings('._label-brush').data('dimension');
                this.setGlobalRangeToLabels(globalRange, dimension);
            } else {
                container.find('i').remove();
            }
        });
        this.freezeCol.on('click', () => {
            const isActive = this.freezeCol.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.freezeCol.addClass('_active');
                this.fileWorkflow.enableBrush(this.onFreezeCol);
            }
        });
        this.freezeRow.on('click', () => {
            const isActive = this.freezeRow.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.freezeRow.addClass('_active');
                this.fileWorkflow.enableBrush(this.onFreezeRow);
            }
        });
        this.unfreezeCol.on('click', () => {
            sourceDataFiles.flexGrid.frozenColumns = 0;
        });
        this.unfreezeRow.on('click', () => {
            sourceDataFiles.flexGrid.frozenRows = 0;
        });
    }

    sync() {}

    show() {
        this.brushSection.show();
        this.dataPointBrush.show();
        this.notUsedBrush.show();
        this.tableBrush.show();
        $('#source_data_files_sidebar ._ingestion-steps ._back').css('display', 'none');
        $('#source_data_files_pre_ingestion ._table').css('display', '');
        sourceDataFiles.flexGrid.refresh();
    }

    hide() {
        this.brushSection.hide();
        this.dataPointBrush.hide();
        this.notUsedBrush.hide();
        this.tableBrush.hide();
        this.tableBrush.removeClass('_active');
        this.dataPointBrush.removeClass('_active');
        $('._label-brush').removeClass('_active');
        $('._label-brush-range').remove();
        $('#source_data_files_sidebar ._ingestion-steps ._back').css('display', '');
        this.resetBrushes();
        // Reset label brush ranges buttons.
        $('._label-brush-range').removeClass('_active');
        $('._label-brush-range').attr('data-active', false);
        sourceDataEditTableCell.resetGridBorders();
        $('#source_data_files_pre_ingestion ._table').hide();
    }

    resetBrushes() {
        this.table.removeClass('_brush-cursor');
        this.table.removeClass('_brush-cursor-for-labels');
        $('.brush-section ._brush').removeClass('_active');
        $('.brush-section ._table').removeClass('_active');
    }

    onFreezeCol(selection) {
        if (selection.isSingleCell) {
            sourceDataFiles.flexGrid.frozenColumns = selection._col;
        }
    }

    onFreezeRow(selection) {
        if (selection.isSingleCell) {
            sourceDataFiles.flexGrid.frozenRows = selection._row;
        }
    }

    setGlobalRangeToLabels(globalRange, dimension) {
        const file = sourceFilesService.getCurrentSourceFile();
        const table = sourceDataFiles.flexGrid.itemsSource;

        for (let row = 0; row < table.length; row++) {
            for (let col = 0; col < table[row].length; col++) {
                const cellType = get(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                if (cellType === 'label') {
                    const dimensions = get(file.cellProperties, `[${col}][${row}]['labelDimension']`, false);
                    if (dimensions[0] === dimension) {
                        file.cellProperties[col][row]['range'] = globalRange;
                    }
                }
            }
        }
    }

    getGlobalRange() {
        let globalRange;
        const file = sourceFilesService.getCurrentSourceFile();
        const table = sourceDataFiles.flexGrid.itemsSource;
        let leftCol = table[0].length;
        let leftRow = table.length;
        let rightCol = 0;
        let rightRow = 0;

        for (let row = 0; row < table.length; row++) {
            for (let col = 0; col < table[row].length; col++) {
                const cellType = get(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                if (cellType === 'data') {
                    if (leftCol > col) {
                        leftCol = col;
                    }
                    if (leftRow > row) {
                        leftRow = row;
                    }

                    break;
                }
            }
        }

        for (let row = table.length - 1; row >= 0; row--) {
            for (let col = table[row].length - 1; col >= 0; col--) {
                const cellType = get(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                if (cellType === 'data') {
                    if (rightCol < col) {
                        rightCol = col;
                    }
                    if (rightRow < row) {
                        rightRow = row;
                    }

                    break;
                }
            }
        }

        globalRange = XLSX.utils.encode_range({ r: leftRow, c: leftCol }, { r: rightRow, c: rightCol });

        return globalRange;
    }

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    onDataPointBrushEnd(selection) {
        const sourceFile = sourceFilesService.getCurrentSourceFile();

        for (let row = selection.topRow; row <= selection.bottomRow; row++) {
            for (let col = selection.leftCol; col <= selection.rightCol; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);

                // Skip empty cells.
                const val = sourceFile.getCellValue(row, col);
                if (val === '') {
                    continue;
                }

                properties.cellType = 'data';
                properties.value = val;
            }
        }

        sourceDataFilesSidebar.displayLoadedFileSidebar();
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    onNotUsedBrushEnd(selection) {
        for (let row = selection.topRow; row <= selection.bottomRow; row++) {
            for (let col = selection.leftCol; col <= selection.rightCol; col++) {
                const properties = sourceFilesService.getCurrentSourceFile().getSingleCellProperties(row, col);

                properties.cellType = 'notUsed';
            }
        }

        sourceDataFilesSidebar.displayLoadedFileSidebar();
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    onTableBrushEnd(selection) {
        let detect = new FileWorkflowAutoDetectTable();
        detect.autoDetectTable(selection);

        sourceDataFilesSidebar.displayLoadedFileSidebar();
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    onLabelBrushEnd(selection, dimension) {
        const sourceFile = sourceFilesService.getCurrentSourceFile();

        for (let row = selection.topRow; row <= selection.bottomRow; row++) {
            for (let col = selection.leftCol; col <= selection.rightCol; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);

                // Skip cells that are not labels.
                if (properties.cellType !== 'label') {
                    continue;
                }

                // Skip empty cells.
                const val = sourceFile.getCellValue(row, col);
                if (!val) {
                    continue;
                }

                properties.labelDimension = [dimension];
                sourceFilesService.applyDimensions(properties, sourceDataFilesSidebar.columnDefs);
                const range = get(properties, `['range']`, false);
                if (range) {
                    this.updateAppliedLabelWarning(range, true);
                }
            }
        }

        sourceDataFilesSidebar.displayLoadedFileSidebar();
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    updateAppliedLabelWarning(range, onlyCheckCellsWithWarning = false) {
        const sourceFile = sourceFilesService.getCurrentSourceFile();
        const rangeObject = XLSX.utils.decode_range(range);

        // Apply new value to each cell in range.
        for (let row = rangeObject.s.r; row <= rangeObject.e.r; row++) {
            for (let col = rangeObject.s.c; col <= rangeObject.e.c; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);

                // Skip cells without a warning.
                if (onlyCheckCellsWithWarning && !properties.appliedLabelWarning) {
                    // continue;
                }

                properties.appliedLabelWarning = sourceDataEditTableCell.setAppliedLabelWarning(col, row, properties);
            }
        }
    }
}
