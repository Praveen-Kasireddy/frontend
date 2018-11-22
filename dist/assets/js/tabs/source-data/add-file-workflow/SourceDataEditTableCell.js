import get from 'lodash/get';
import { common } from '../../../Common';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';
import { addFileSteps } from '../../../tabs/source-data/add-file-workflow/AddFileSteps';
import { sourceDataFilesSidebar } from '../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar';
import { sourceDataTableCellModal } from '../../../tabs/source-data/add-file-workflow/SourceDataTableCellModal';
import { sourceDataFiles } from '../../../tabs/source-data/SourceDataFiles';

class SourceDataEditTableCell {
    constructor() {
        this.newCellIsBeingEdited = false;
    }

    init() {
        sourceDataTableCellModal.init();
        this.firstCellAutomaticSelectionFinished = false;

        $('#tableCellModal .modal-footer ._close').on('click', e => {
            $('#tableCellModal').modal('hide');

            this.resetGridBorders();
        });

        $('#tableCellModal ._apply-and-next').on('click', e => this.applyAndNext(e));
    }

    sync() {
        sourceDataTableCellModal.sync();
    }

    resetGridBorders() {
        // Reset borders after highlighting a range.
        $('.wj-cell').css('border-right', '1px solid #d4d4d4');
        $('.wj-cell').css('border-bottom', '1px solid #d4d4d4');
        $('.wj-cell').css('border-top', 'initial');
        $('.wj-cell').css('border-left', 'initial');
    }

    applyAndNext(e) {
        const file = sourceFilesService.getCurrentSourceFile();
        const tableSource = _.concat([], file.itemsSource);
        const fileCellProperties = file.cellProperties;
        const sel = sourceDataFiles.flexGrid.selection;

        this.saveProperties(e);

        addFileSteps.fileWorkflow.enableModal();

        if (sel.isSingleCell) {
            let col = sel._col;
            let nextCol = col + 1;
            let row = sel._row;
            let newSelection = false;

            const columnsNumber = tableSource[0].length;
            const rowsNumber = tableSource.length;

            if (col < columnsNumber) {
                const cellProperties = get(fileCellProperties, `[${nextCol}][${row}]`);
                if (cellProperties && cellProperties.cellType === 'data') {
                    sourceDataFiles.flexGrid.select(new wijmo.grid.CellRange(row, nextCol, row, nextCol), true);
                } else {
                    while (nextCol < columnsNumber) {
                        nextCol++;
                        const cellProperties = get(fileCellProperties, `[${nextCol}][${row}]`);
                        if (cellProperties && cellProperties.cellType === 'data') {
                            sourceDataFiles.flexGrid.select(new wijmo.grid.CellRange(row, nextCol, row, nextCol), true);
                            newSelection = true;
                            break;
                        }
                    }

                    if (!newSelection) {
                        let nextRow = row + 1;
                        while (nextRow <= rowsNumber) {
                            nextCol = 0;
                            while (nextCol < columnsNumber) {
                                const cellProperties = get(fileCellProperties, `[${nextCol}][${nextRow}]`);
                                if (cellProperties && cellProperties.cellType === 'data') {
                                    sourceDataFiles.flexGrid.select(
                                        new wijmo.grid.CellRange(nextRow, nextCol, nextRow, nextCol),
                                        true
                                    );
                                    newSelection = true;
                                    break;
                                }
                                nextCol++;
                            }
                            if (newSelection) {
                                break;
                            }

                            nextRow++;
                        }
                    }
                }
            }
        } else {
            let newSelection = true;
            if (sel.leftCol < sel.rightCol && sel.topRow === sel.bottomRow) {
                const nextRow = sel.topRow + 1;

                for (let i = sel.leftCol; i <= sel.rightCol; i++) {
                    const cellProperties = get(fileCellProperties, `[${i}][${nextRow}]`);
                    if (!cellProperties || cellProperties.cellType !== 'data') {
                        newSelection = false;
                        break;
                    }
                }
                if (newSelection) {
                    sourceDataFiles.flexGrid.select(
                        new wijmo.grid.CellRange(nextRow, sel.rightCol, nextRow, sel.leftCol),
                        true
                    );
                }
            } else if (sel.topRow < sel.bottomRow && sel.leftCol === sel.rightCol) {
                const nextCol = sel.leftCol + 1;

                for (let i = sel.topRow; i <= sel.bottomRow; i++) {
                    const cellProperties = get(fileCellProperties, `[${nextCol}][${i}]`);
                    if (!cellProperties || cellProperties.cellType !== 'data') {
                        newSelection = false;
                        break;
                    }
                }
                if (newSelection) {
                    sourceDataFiles.flexGrid.select(
                        new wijmo.grid.CellRange(sel.bottomRow, nextCol, sel.topRow, nextCol),
                        true
                    );
                }
            }
        }
    }

    onTableSelectionChanged(s, e) {
        this.resetGridBorders();

        if (addFileSteps.ingestionStep === addFileSteps.STRUCTURE_DATA_STEP) {
            return;
        }

        this.newCellIsBeingEdited = true;

        if (!sourceDataFiles.flexGrid.itemsSource) {
            return;
        }

        const activeCell = $(e._p._activeCell);

        if (!$('#tableCellModal.modal.in').length) {
            $('#tableCellModal .modal-dialog').css({
                top: 0,
                left: 0
            });
        }
        $('#tableCellModal').modal({
            backdrop: false,
            show: true
        });

        $('#tableCellModal .modal-dialog').draggable({
            handle: '.modal-header'
        });
        $('#tableCellModal .modal-dialog').css('margin', 0);
        $('.modal-backdrop').css('background', 'transparent');

        $('#tableCellModal .modal-body').data('cell_type', 'notUsed');

        // Display modal content.
        if (sourceDataFiles.flexGrid.selection.isSingleCell) {
            $('#tableCellModal ._label-properties ._range-picker input').prop('readonly', false);
            sourceDataTableCellModal.displayContentForCellModal(activeCell);
        } else {
            $('#tableCellModal ._label-properties ._range-picker input').prop('readonly', true);
            sourceDataTableCellModal.displayContentForCellsModal();
        }

        // Position modal content.
        {
            const modalHeight = $('#tableCellModal .modal-content').height();
            const modalWidth = $('#tableCellModal .modal-content').width();
            const windowHeight = $(window).height();
            const windowWidth = $(window).width();
            const offset = activeCell.offset();
            const lineRangeOffset = $('#tableCellModal .modal-dialog').data('line_range') ? 30 : 0;
            $('#tableCellModal .modal-dialog').data('line_range', false);

            // When selecting a range larger than the screen, offset is not always available.
            if (offset) {
                if (windowHeight - offset.top > modalHeight) {
                    $('#tableCellModal .modal-dialog').css('top', offset.top + lineRangeOffset);
                } else {
                    if (offset.top - modalHeight > 150) {
                        $('#tableCellModal .modal-dialog').css('top', offset.top - modalHeight + lineRangeOffset);
                    } else {
                        $('#tableCellModal .modal-dialog').css(
                            'top',
                            windowHeight - modalHeight - 10 + lineRangeOffset
                        );
                    }
                }

                if (windowWidth - offset.left > 390 + modalWidth) {
                    $('#tableCellModal .modal-dialog').css('left', offset.left + activeCell.width() + 10);
                } else {
                    $('#tableCellModal .modal-dialog').css('left', offset.left - modalWidth - 10);
                }
            }
        }
    }

    saveProperties(e) {
        // We're saving the data, so no more unsaved changes!
        sourceDataTableCellModal.hasUnsavedChanges = false;

        e.preventDefault();
        $('#tableCellModal ._fields input').blur();

        const cellType = $('#tableCellModal input[name=data-label-switch]:checked').val();
        let commonProperties = {};
        commonProperties.labelDimension = [];
        commonProperties.overwriteValue = [];

        // Copy properties depending on cell-type.
        switch (cellType) {
            case 'label':
                $('#tableCellModal ._label-properties ._dimension-picker-container').each(function() {
                    const overwriteValue = $(this)
                        .find('._overwrite-value input')
                        .val();
                    const labelDimension = $(this)
                        .find('._dimension-picker input')
                        .val();
                    if (overwriteValue !== 'Multiple values') {
                        commonProperties.overwriteValue.push(overwriteValue);
                    }
                    if (labelDimension !== 'Multiple values') {
                        commonProperties.labelDimension.push(labelDimension);
                    }
                });

                let range = sourceDataTableCellModal.rangeInput.text;
                if (range && !this.isRangeValid(range)) {
                    alert('Invalid range entered!');
                    range = '';
                }

                sourceDataTableCellModal.setCommonProperty(commonProperties, 'range', range);
                break;

            case 'data':
                commonProperties.dataPointId = 'initial';
                commonProperties.failedSaving = false;

                sourceDataTableCellModal.modalInputs.map(input => {
                    sourceDataTableCellModal.setCommonProperty(
                        commonProperties,
                        input._kosmosField,
                        $(input._elRef).val()
                    );
                });
                break;
        }

        let sel = sourceDataFiles.flexGrid.selection;
        const file = sourceFilesService.getCurrentSourceFile();
        for (let col = sel.leftCol; col <= sel.rightCol; col++) {
            for (let row = sel.topRow; row <= sel.bottomRow; row++) {
                const properties = file.getSingleCellProperties(row, col);
                const val = sourceDataFiles.flexGrid.cells.getCellData(row, col, false);

                // Skip empty cells and cells of different types.
                if (val === '' || properties.cellType !== cellType) {
                    continue;
                }

                // Overwrite cell properties.
                Object.assign(properties, commonProperties);
                properties.value = val;

                // Set applied label warning.
                properties.appliedLabelWarning = this.setAppliedLabelWarning(col, row, properties);

                // Apply range.
                if (cellType === 'label') {
                    sourceFilesService.applyDimensions(properties, sourceDataFilesSidebar.columnDefs);
                }
            }
        }

        // Close modal and refresh.
        $('#tableCellModal').modal('hide');
        sourceDataFilesSidebar.displayLoadedFileSidebar();
        sourceDataFiles.flexGrid.refresh();
        sourceDataFiles.flexGrid.select(-1, -1);
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    setAppliedLabelWarning(c, r, props) {
        const file = sourceFilesService.getCurrentSourceFile();
        const table = sourceDataFiles.flexGrid.itemsSource;
        const dimensions = sourceDataFilesSidebar.columnDefs;
        let warning = false;

        table_loop: {
            for (let row = 0; row < table.length; row++) {
                for (let col = 0; col < table[row].length; col++) {
                    const cellType = get(file.cellProperties, `[${col}][${row}]['cellType']`, false);

                    if (cellType !== 'label') {
                        continue;
                    }

                    const range = get(file.cellProperties, `[${col}][${row}]['range']`, false);
                    const dimension = get(file.cellProperties, `[${col}][${row}]['labelDimension']`, false);

                    if (!(range && dimension[0])) {
                        continue;
                    }

                    const rangeObject = XLSX.utils.decode_range(range);

                    if (
                        !(c >= rangeObject.s.c && c <= rangeObject.e.c && r >= rangeObject.s.r && r <= rangeObject.e.r)
                    ) {
                        continue;
                    }

                    const cellProperties = file.getSingleCellProperties(row, col);
                    const selectedDimension = dimensions.find(column => {
                        return column.label === dimension[0];
                    });
                    const slug = selectedDimension.slug;

                    if (!common.areIdentical(props[slug], cellProperties.value)) {
                        warning = true;

                        break table_loop;
                    }
                }
            }
        }

        return warning;
    }

    /**
     * Checks if the given range is valid.
     *
     * @param range
     * @returns {boolean} True if the range is valid, false otherwise.
     */
    isRangeValid(range) {
        const rangeSeparatorIndex = range.indexOf(':');
        if (rangeSeparatorIndex === -1) {
            return false;
        }

        const newRange = XLSX.utils.decode_range(range);

        const sourceFile = sourceFilesService.getCurrentSourceFile();
        const fileRowsNumber = sourceFile.getNumberOfRows();
        const fileColsNumber = sourceFile.getNumberOfCols();

        if (newRange.e.r > fileRowsNumber || newRange.e.c > fileColsNumber) {
            return false;
        }

        return true;
    }
}

export const sourceDataEditTableCell = new SourceDataEditTableCell();
