import _ from 'lodash';
import cloneDeep from 'lodash/cloneDeep';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';
import { SourceDataStructures } from '../source-data-structures/SourceDataStructures';
import { sourceData } from '../SourceData';
import { sourceDataFiles } from '../SourceDataFiles';
import { sourceDataPointsSidebar } from '../SourceDataPointsSidebar';
import { addFileSteps } from './AddFileSteps';
import { FileWorkflowLegend } from './FileWorkflowLegend';
import { sourceDataEditTableCell } from './SourceDataEditTableCell';
import { sourceDataFilesReviewTable } from './SourceDataFilesReviewTable';
import { sourceDataTableCellModal } from './SourceDataTableCellModal';

class SourceDataFilesSidebar {
    constructor() {
        this.selectedItem = null;
        this.container = $('#source_data_files_pre_ingestion');
        this.dataStructuresContainer = this.container.find('._data-structures');
        this.sourceDataStructures = new SourceDataStructures(
            this.dataStructuresContainer,
            () => {
                this.sourceDataStructures.sync();
            },
            true,
            true
        );
        this.columnDefs = [];
        this.fileWorkflowLegend = new FileWorkflowLegend($('#source_data_files_sidebar .legend-section ._colors'));
        this.hiddenCols = [];
        this.hiddenRows = [];
    }

    init() {
        addFileSteps.init();

        $('#source_data_files_sidebar ._dimensions-section ._column-selector').on('click', () => {
            this.updateDimensionsDropdown();
        });

        $('#source_data_files_sidebar ._ingestion-steps ._cancel').on('click', () => {
            addFileSteps.cancelWorkflow();
        });

        this.columnsSelect = new wijmo.input.MultiSelect(
            $('#source_data_files_sidebar ._dimensions-section ._column-selector')[0],
            {
                placeholder: 'Select Columns',
                itemsSource: [],
                headerFormat: '{count} columns selected',
                displayMemberPath: 'label',
                checkedMemberPath: 'selected',
                onCheckedItemsChanged: () => {
                    this.updateDimensions();
                }
            }
        );
        $('#source_data_files_sidebar ._dimensions-section ._add-custom-dimension').on('click', () => {
            sourceDataPointsSidebar.addCustomDimension();
        });

        $('._hide-cells').on('change', function() {
            if ($(this).is(':checked')) {
                sourceDataFilesSidebar.hideCells();
            } else {
                sourceDataFilesSidebar.showHiddenCells();
            }
        });

        $('._dimensions-cog, ._range-global-visibility').on('click', e => {
            let $this;
            if ($(e.target).hasClass('_dimensions-cog')) {
                $this = $('._dimensions-section');
                this.toggleClassAndShowHide(e.target);
            } else {
                $this = $('._brush-container');
                this.toggleClassAndShowHide(e.target);
            }

            const visible = !$this.hasClass('_visible');
            $this.toggleClass('_visible', visible);
        });

        $(document.body).on('click', '._label-brush-range', e => {
            const cell = $(e.currentTarget);

            if (cell.attr('data-active') == null || cell.attr('data-active') === 'false') {
                sourceDataEditTableCell.resetGridBorders();
                $('._label-brush-range').attr('data-active', false);
                $('._label-brush-range').removeClass('_active');

                cell.attr('data-active', true);
                cell.addClass('_active');
                let rangeText = cell.text();

                if (rangeText) {
                    let ranges = rangeText.split(',');
                    ranges.map(range => {
                        range = range.replace(/\s/g, '');
                        sourceDataTableCellModal.highlightRangeCells(range);
                    });
                }
            } else {
                $('._label-brush-range').removeClass('_active');
                cell.attr('data-active', false);
                sourceDataEditTableCell.resetGridBorders();
            }
        });

        sourceDataFilesReviewTable.init();
    }

    toggleClassAndShowHide(element) {
        const active = !$(element).hasClass('_active');
        $(element).toggleClass('_active', active);
    }

    showHiddenCells() {
        $('.hide-cells-container').css('background-color', '');

        const columnNumber = sourceFilesService.getCurrentSourceFile().itemsSource[0].length;

        this.hiddenRows.map(row => {
            let minHeight = true;

            for (let col = 0; col < columnNumber; col++) {
                if (sourceDataFiles.flexGrid.getCellData(row, col, true)) {
                    minHeight = false;
                    break;
                }
            }

            if (minHeight) {
                sourceDataFiles.flexGrid.autoSizeRow(row, false, 20);
            } else {
                sourceDataFiles.flexGrid.autoSizeRow(row);
            }
        });
        this.hiddenCols.map(col => sourceDataFiles.flexGrid.autoSizeColumn(col));
    }

    hideCells() {
        $('.hide-cells-container').css('background-color', '#6e707d');
        const file = sourceFilesService.getCurrentSourceFile();
        const fileCellProperties = file.cellProperties;
        const tableSource = _.concat([], file.itemsSource);
        let hiddenRows = [],
            hiddenCols = [];

        // Check what rows to hide.
        tableSource.map((row, rowNumber) => {
            let hideRow = true;

            row.map((cell, colNumber) => {
                if (fileCellProperties.hasOwnProperty(colNumber)) {
                    if (fileCellProperties[colNumber].hasOwnProperty(rowNumber)) {
                        if (
                            fileCellProperties[colNumber][rowNumber].cellType === 'data' ||
                            fileCellProperties[colNumber][rowNumber].cellType === 'label'
                        ) {
                            hideRow = false;
                        } else {
                            delete fileCellProperties[colNumber][rowNumber];
                        }
                    }
                }
            });

            if (hideRow) {
                hiddenRows = _.concat([], hiddenRows, rowNumber);
            }
        });

        // Check what cols to hide.
        tableSource[0].map((col, colNumber) => {
            let hideCol = true;

            if (fileCellProperties.hasOwnProperty(colNumber)) {
                const columnArray = fileCellProperties[colNumber];
                Object.keys(columnArray).forEach(key => {
                    if (columnArray[key].cellType === 'data' || columnArray[key].cellType === 'label') {
                        hideCol = false;
                    } else {
                        delete columnArray[key];
                    }
                });
            }

            if (hideCol) {
                hiddenCols = _.concat([], hiddenCols, colNumber);
            }
        });
        hiddenCols.sort(function(a, b) {
            return b - a;
        });
        this.hiddenCols = hiddenCols;
        this.hiddenRows = hiddenRows;

        hiddenRows.map(row => (sourceDataFiles.flexGrid.rows[row].height = 0));
        hiddenCols.map(col => (sourceDataFiles.flexGrid.columns[col].width = 0));
    }

    sync() {
        // Last step table.
        sourceDataFilesReviewTable.sync();

        this.syncDimensionsColumns();
        this.fileWorkflowLegend.sync(this.columnDefs);
    }

    syncDimensionsColumns() {
        const file = sourceFilesService.getCurrentSourceFile();

        this.columnDefs = this.getAvailableColumns();
        if (file) {
            if (file.formDimensions.length) {
                this.columnDefs.forEach(column => {
                    if (!_.includes(file.formDimensions, column.slug)) {
                        column.selected = false;
                    }
                });
            }
        }

        this.columnsSelect.itemsSource = this.columnDefs;
        this.fileWorkflowLegend.sync(this.columnDefs);
        this.updateDimensionsDropdown();
    }

    getAvailableColumns(manual = false, table = false) {
        const cols = [];
        const project = storageService.getCurrentProject();
        const dimensions = project.getDimensions();

        if (manual && table) {
            cols.push({
                slug: '__normalized_value',
                label: 'Normalized Value',
                selected: true,
                isReadOnly: true
            });
        }

        dimensions.forEach(dimension => {
            if (manual) {
                cols.push({
                    slug: dimension.slug,
                    label: dimension.label,
                    selected: true
                });
            } else if (dimension.slug !== 'value') {
                cols.push({
                    slug: dimension.slug,
                    label: dimension.label,
                    selected: true
                });
            }
        });

        return cols;
    }

    syncDimensionsContainer() {
        $('#source_data_files_sidebar ._dimensions-section ._add-custom-dimension').prop(
            'disabled',
            addFileSteps.ingestionStep > addFileSteps.DEFINE_DATA_STEP
        );
    }

    startWorkflow() {
        addFileSteps.setStep(addFileSteps.DEFINE_DATA_STEP);

        // Copy current project and add new data points into it.
        const project = storageService.getCurrentProject();
        addFileSteps.project = cloneDeep(project);

        addFileSteps.defineLabelsStep();

        sourceData.beginWorkflow();
    }

    displayLoadedFileSidebar() {
        const file = sourceFilesService.getCurrentSourceFile();

        this.dataStructuresContainer.css(
            'display',
            addFileSteps.ingestionStep === addFileSteps.STRUCTURE_DATA_STEP ? '' : 'none'
        );
        if ($('.tab-pane.active').find('._sidebar-dimension-selector').length > 0) {
            $('.tab-pane.active ._sidebar-dimension-selector').css(
                'display',
                addFileSteps.ingestionStep === addFileSteps.STRUCTURE_DATA_STEP ? '' : 'none'
            );
        }

        if (addFileSteps.ingestionStep !== addFileSteps.REVIEW_STEP) {
            $('#source_data_files_pre_ingestion ._review-table').hide();
            $('#source_data_files_pre_ingestion ._table').css('display', '');
        } else {
            $('#source_data_files_pre_ingestion ._review-table').css('display', '');
            $('#source_data_files_pre_ingestion ._table').hide();

            sourceDataFilesReviewTable.flexgrid.itemsSource = file.dataPoints;
            sourceDataFilesReviewTable.flexgrid.refresh();
        }

        // Hightlight selected step in ingestion header.
        $('#source_data_files_pre_ingestion ._ingestion-steps-display ._step').removeClass('highlight-step');
        $(
            '#source_data_files_pre_ingestion ._ingestion-steps-display ._step[data-step=' +
                addFileSteps.ingestionStep +
                ']'
        ).addClass('highlight-step');

        // Prev and next buttons
        $('#source_data_files_sidebar ._ingestion-steps ._next').text(
            addFileSteps.ingestionStep < 4 ? 'Next' : 'Finish'
        );
        switch (addFileSteps.ingestionStep) {
            case 1:
                if ($('.brush-section > h4.hide').length) {
                    $('.brush-section > h4').removeClass('hide');
                }
                break;
        }

        $('#source_data_files_sidebar').css('display', '');

        // Refresh FlexGrid.
        window.dispatchEvent(new Event('resize'));

        this.syncDimensionsContainer();
        this.syncDimensionsColumns();

        // Display the Brushes list of dimensions.
        $('._label-brush-range').html('');
        const tableSource = sourceDataFiles.flexGrid.itemsSource;
        const dimensions = sourceDataFilesSidebar.columnDefs;
        dimensions.map((dimension, index) => {
            if (dimension.selected) {
                const div = $($('._brush._label-brush')[index]);
                const rangeDiv = $($('._label-brush-range')[index]);

                // Define range for each dimension.
                addFileSteps.defineRangeForEachDimension(tableSource, rangeDiv, div, file, dimension);
            }
        });

        $('#source_data_files_sidebar ._zoom-slider-container').css(
            'display',
            addFileSteps.ingestionStep > 2 ? 'none' : 'block'
        );
    }

    updateDimensions() {
        const file = sourceFilesService.getCurrentSourceFile();
        file.formDimensions = [];
        this.columnDefs.forEach(column => {
            if (column.selected) {
                file.formDimensions = _.concat([], file.formDimensions, column.slug);
            }
        });
        this.fileWorkflowLegend.sync(this.columnDefs);
        // file.formDimensions = _.concat([], this.columnDefs);
        storageService.saveCurrentProject();
        storageService.syncViews();
        sourceDataFiles.flexGrid.refresh();
    }

    updateDimensionsDropdown() {
        $('.wj-listbox-item input').prop('disabled', addFileSteps.ingestionStep > addFileSteps.DEFINE_DATA_STEP);
        $('.wj-listbox-item label').each(function() {
            if (
                $(this)
                    .text()
                    .replace(/\s/g, '') === 'Scale'
            ) {
                $(this)
                    .find('input')
                    .prop('disabled', true);
            }
        });
    }
}

export const sourceDataFilesSidebar = new SourceDataFilesSidebar();
