import { cloneDeep } from 'lodash';
import { common } from '../../../Common';
import { storageService } from '../../../services/StorageService';
import { addFileSteps } from '../../../tabs/source-data/add-file-workflow/AddFileSteps';
import { sourceDataFilesSidebar } from '../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar';
import { addManualSidebar } from '../../../tabs/source-data/add-manual-workflow/AddManualSidebar';
import { sourceDataService } from '../../../tabs/source-data/SourceDataService';

class AddManualTable {
    constructor() {
        this.tableSource = [];
        this.columnDefs = [];
        this.scale = 1;
        this.inUpdatedLayout = false;
    }

    init() {
        addManualSidebar.init();

        this.flexgrid = new wijmo.grid.FlexGrid('#add_manual_workflow ._table', {
            isReadOnly: false,
            selectionMode: 'Row',
            itemsSource: this.tableSource,
            autoGenerateColumns: false,
            formatItem: (s, e) => {
                if (e.panel === s.cells) {
                    let item = s.rows[e.row].dataItem;

                    switch (s.columns[e.col].binding) {
                        case 'value':
                            e.cell.childNodes[0].nodeValue = common.formatNumber(item.value);
                            break;

                        case '__normalized_value':
                            e.cell.innerHTML = common.formatNumber(item['__normalized_value'] / this.scale);
                            break;

                        case 'scale':
                            // e.cell.innerHTML = item.scale;
                            break;
                    }
                }
            },
            selectionChanged: (s, e) => {
                const selection = this.flexgrid.selection;
                let item;

                if (selection._row in s.rows) {
                    item = s.rows[selection._row].dataItem;
                } else {
                    item = null;
                }

                addManualSidebar.setSelectedItem(item);
            },
            updatedLayout: () => {
                if (this.inUpdatedLayout) {
                    this.inUpdatedLayout = false;
                } else {
                    this.inUpdatedLayout = true;
                    this.flexgrid.autoSizeRow(0, true);
                }
            },
            beginningEdit: (s, e) => {
                const col = s.columns[e.col];

                // User is allowed to edit?
                if (addManualSidebar.ingestionStep !== 1) {
                    e.cancel = true;
                    return;
                }

                // if (col.binding === 'value') {
                //     e.cancel = true;
                //     return;
                // }

                // Get column definition.
                const columnDef = this.columnDefs.find(column => {
                    return column.slug === col.binding;
                });

                // Update data map.
                if (col.dataMap) {
                    col.dataMap = sourceDataService.getDataMapForDimension(
                        columnDef.dimension,
                        addManualSidebar.project
                    );
                }

                // Always format as general cell, not as number.
                col.format = 'g';
            },
            cellEditEnding: (s, e) => {
                // Check if value has been changed.
                const oldVal = s.getCellData(e.row, e.col);
                const newVal = s.activeEditor.value;
                if ((typeof oldVal === 'string' && oldVal === newVal) || common.isDeltaZero(oldVal - newVal)) {
                    e.cancel = true;
                }

                // Validate.
                const col = s.columns[e.col];
                const dataPoint = Object.assign({}, s.rows[e.row].dataItem);
                dataPoint[col.binding] = newVal;
                const validation = storageService.getCurrentProject().validateDataPoint(dataPoint);
                if (validation.success === false) {
                    e.cancel = true;
                    alert(validation.error);
                }
            },
            cellEditEnded: (s, e) => {
                // Edit was cancelled?
                if (e.cancel) {
                    return;
                }

                // TODO: Show loading screen.
                const dataPoint = s.rows[e.row].dataItem;
                const row = addManualTable.flexgrid.selection.row;
                this.tableSource[row] = dataPoint;

                addManualTable.sync();
                addManualSidebar.setSelectedItem(dataPoint);
            }
        });
    }

    sync() {
        this.manualWorkflowContent();

        // Columns
        if (addManualSidebar.tableColumns.length) {
            this.columnDefs = addManualSidebar.tableColumns;
        } else {
            this.columnDefs = sourceDataFilesSidebar.getAvailableColumns(true, true);
        }
        this.updateColumns();

        // Data points
        let dataPoints = this.tableSource;
        this.setData(dataPoints);
    }

    manualWorkflowContent() {
        // Hightlight selected step in ingestion header.
        $('#add_manual_workflow ._manual-ingestion-steps-display ._step').removeClass('highlight-step');
        $(
            '#add_manual_workflow ._manual-ingestion-steps-display ._step[data-step=' +
                addManualSidebar.ingestionStep +
                ']'
        ).addClass('highlight-step');

        // Prev and next buttons
        $('#add_manual_sidebar ._ingestion-steps ._next').text(addFileSteps.ingestionStep < 3 ? 'Next' : 'Finish');
        $('#add_manual_sidebar ._ingestion-steps ._back').css(
            'display',
            addManualSidebar.ingestionStep === 1 ? 'none' : ''
        );

        // Misc
        $('#add_manual_sidebar #add_manual_form').css('display', addManualSidebar.ingestionStep === 1 ? '' : 'none');
        $('#add_manual_workflow ._data-structures').css('display', addManualSidebar.ingestionStep === 2 ? '' : 'none');
    }

    updateColumns() {
        this.flexgrid.columns.length = 0;
        this.columnDefs.forEach(column => {
            if (!column.selected) {
                return;
            }

            // Add column to grid.
            const gridCol = new wijmo.grid.Column();
            gridCol.binding = column.slug;
            gridCol.header = column.label;
            gridCol.dataMap = column.dataMap;
            gridCol.isReadOnly = column.isReadOnly;
            this.flexgrid.columns.push(gridCol);
        });
    }

    setData(dataset) {
        dataset = cloneDeep(dataset);

        const project = storageService.getCurrentProject();
        // const sourceFiles = project.sourceFiles;

        dataset = dataset.map(item => {
            // Normalize values.
            item['__normalized_value'] = item.value * common.parseScale(item.scale) * common.parseInverse(item.inverse);

            // Process dimensions.
            item = project.addDataStructuresToDataPoint(item);

            return item;
        });

        // Save view.
        const sortDescriptions = this.flexgrid.collectionView.sortDescriptions;
        const scrollPosition = this.flexgrid.scrollPosition;
        const selection = this.flexgrid.selection;

        // Update data source.
        this.flexgrid.itemsSource = dataset;
        this.flexgrid.collectionView.refresh();
        this.updateColumns();

        // Load view.
        if (sortDescriptions.length > 0) {
            this.flexgrid.collectionView.sortDescriptions.push(sortDescriptions[0]);
        }
        this.flexgrid.scrollPosition = scrollPosition;
        this.flexgrid.select(selection);
    }
}

export const addManualTable = new AddManualTable();
