import { cloneDeep } from 'lodash';
import { common } from '../../../Common';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';
import { sourceDataFilesSidebar } from '../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar';

class SourceDataFilesReviewTable {
    constructor() {
        this.columnDefs = [];
        this.scale = 1;
        this.inUpdatedLayout = false;
    }

    init() {
        this.flexgrid = new wijmo.grid.FlexGrid($('#source_data_files_pre_ingestion ._review-table')[0], {
            isReadOnly: true,
            selectionMode: 'Row',
            itemsSource: [],
            autoGenerateColumns: false,
            formatItem: (s, e) => {
                if (e.panel === s.cells) {
                    let item = s.rows[e.row].dataItem;

                    switch (s.columns[e.col].binding) {
                        case 'value':
                            if (e.cell.childNodes[0]) {
                                e.cell.childNodes[0].nodeValue = common.formatNumber(item.value);
                            }
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
            updatedLayout: () => {
                if (this.inUpdatedLayout) {
                    this.inUpdatedLayout = false;
                } else {
                    this.inUpdatedLayout = true;
                    this.flexgrid.autoSizeRow(0, true);
                }
            }
        });
    }

    sync() {
        // Columns.
        this.columnDefs = this.getAvailableColumns();
        this.updateColumns();

        // Data points.
        let dataPoints = [];
        const file = sourceFilesService.getCurrentSourceFile();
        if (file && file.dataPoints) {
            dataPoints = file.dataPoints;
        }
        this.setData(dataPoints);
    }

    getAvailableColumns() {
        const cols = [];
        const allColumns = sourceDataFilesSidebar.columnDefs;

        cols.push({
            slug: '__normalized_value',
            label: 'Normalized Value',
            selected: true,
            isReadOnly: true
        });

        cols.push({
            slug: 'value',
            label: 'Value',
            selected: true,
            isReadOnly: true
        });

        allColumns.forEach(column => {
            if (column.selected) {
                cols.push({
                    slug: column.slug,
                    label: column.label,
                    selected: true,
                    isReadOnly: false
                });
            }
        });

        return cols;
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

        // Update data source.
        this.flexgrid.itemsSource = dataset;
        this.flexgrid.collectionView.refresh();
        this.updateColumns();
    }
}

export const sourceDataFilesReviewTable = new SourceDataFilesReviewTable();
