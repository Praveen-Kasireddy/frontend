import { concat } from 'lodash';
import { common } from '../../Common';
import { DataExplorerCellData } from '../../entities/DataExplorerCellData';
import { storageService } from '../../services/StorageService';
import { dataExplorer } from './DataExplorer';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerCellEditing } from './DataExplorerCellEditing';
import { dataExplorerCellViewer } from './DataExplorerCellViewer';
import { dataExplorerEval } from './DataExplorerEval';
import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerImport } from './DataExplorerImport';
import { dataExplorerSections } from './DataExplorerSections';
import { dataExplorerTemplate } from './DataExplorerTemplate';

class DataExplorerRenderTable {
    constructor() {
        this.tableData = null;
        this.formattedTableData = null;
        this.tableIdsToColumns = null;
        this.tableIdsToRows = null;
        this.previousTableData = null;
        this.table = null;
        this.columns = null;
        this.updateTableDelayed = _.debounce(this.updateTable, 500);
        this.inUpdatedLayout = false;
        this.firstTimeRefreshTable = false;
        this.tableContainer = $('#data-explorer-table');
        this.uuid = '';

        this.flexgrid = new wijmo.grid.FlexGrid(this.tableContainer[0], {
            isReadOnly: false,
            itemsSource: [],
            allowSorting: false,
            allowDragging: 'None',
            updatedLayout: () => {
                if (this.inUpdatedLayout) {
                    this.inUpdatedLayout = false;
                } else {
                    this.inUpdatedLayout = true;
                    this.flexgrid.autoSizeColumns(0, this.flexgrid.columns.length);
                }
            },
            formatItem: (s, e) => {
                dataExplorerImport.formatItem(s, e);
            },
            updatedView: () => {
                this.flexgrid.columns.map((column, index) => {
                    this.flexgrid.columns[index].header = XLSX.utils.encode_col(index);
                });
                $(this.flexgrid.rowHeaders._e)
                    .find('.wj-row .wj-cell.wj-header')
                    .each(function(index) {
                        $(this).text(index + 1);
                    });
            },
            beginningEdit: (s, e) => {
                const col = e._rng._col;
                const row = e._rng._row;

                // Disable edits for header cells.
                if (row === 0 || col === 0) {
                    e.cancel = true;
                    return;
                }

                // Disable edits for cells matching multiple data-points.
                let cellData = storageService.currentProject.analyses[
                    dataExplorerAnalyses.currentAnalysisId
                ].getCellData(row - 1, col - 1);
                if (cellData.numberOfDataPoints > 1) {
                    // Open cell-viewer instead.
                    dataExplorerCellViewer.showCellViewer(cellData);

                    e.cancel = true;
                    return;
                }

                // Disable edits if cell has custom formula.
                if (cellData.customFormula) {
                    e.cancel = true;
                    return;
                }
            },
            cellEditEnding: (s, e) => {
                dataExplorerCellEditing.cellEditEnding(s, e);
            },
            cellEditEnded: (s, e) => {
                dataExplorerCellEditing.cellEditEnded(s, e);
            },
            selectionChanged: (s, e) => {
                dataExplorer.dataExplorerCellFormulas.onSelectionChanged(s, e);
            },
            onPastingCell: () => {
                console.log('Do not do anything here.');
            }
        });
    }

    updateTableMapping() {
        let rows = $('#row_box > .item');
        let cols = $('#column_box > .item');

        // Take each row.
        this.tableIdsToRows = {};
        for (let i = 0; i < rows.length; i++) {
            this.tableIdsToRows[
                $(rows[i])
                    .find('._id')
                    .text()
            ] = i;
        }

        // Take each column.
        this.tableIdsToColumns = {};
        for (let j = 0; j < cols.length; j++) {
            this.tableIdsToColumns[
                $(cols[j])
                    .find('._id')
                    .text()
            ] = j + 1;
        }
    }

    updateTableData() {
        let rows = $('#row_box > .item');
        let cols = $('#column_box > .item');
        let globalFilters = dataExplorerHelper.getFiltersFromDom(
            $('#filter_box_a1 > .item, #filter_box_headline > .item, #filter_box_hidden > .item')
        );
        let dataset = storageService.getCurrentDataPoints();
        this.tableData = [];

        // Take each row.
        for (let i = 0; i < rows.length; i++) {
            let row = $(rows[i]);
            let rowTitle = row.find('._title').val();
            let rowData = [rowTitle];
            let rowFilters = dataExplorerHelper.getFiltersFromDom(row.find('._filters [data-value]'));
            rowFilters['attribute'] = row.attr('data-value');
            let isRowFormula = row.hasClass('item-with-formula');

            // Take each column.
            for (let j = 0; j < cols.length; j++) {
                let col = $(cols[j]);
                let cell = 0;
                let colFilters = dataExplorerHelper.getFiltersFromDom(col.find('[data-value]'));
                let isColFormula = col.hasClass('item-with-formula');
                let rowSectionType = dataExplorerSections.getSectionType(row);
                let columnSectionType = dataExplorerSections.getSectionType(col);
                let filters = Object.assign({}, globalFilters, rowFilters, colFilters);
                let cellData = storageService.currentProject.analyses[
                    dataExplorerAnalyses.currentAnalysisId
                ].getCellData(i, j);
                let newCellData = new DataExplorerCellData();

                // Use custom formula, if any.
                if (cellData.customFormula) {
                    if (cellData.customFormula.slice(0, 1) === '=') {
                        const customFormula = cellData.customFormula.slice(1);
                        cell = dataExplorerEval.evalFormula(this, customFormula, filters, null, null);
                    } else {
                        cell = cellData.customFormula;
                    }
                } else {
                    switch (rowSectionType) {
                        case 'margin':
                            if (columnSectionType === 'yoy' || columnSectionType === 'cagr' || isColFormula) {
                                cell = null;
                            } else {
                                const filters1 = Object.assign({}, filters, {
                                    attribute: row.find('._year1 option:selected').text()
                                });
                                const filters2 = Object.assign({}, filters, {
                                    attribute: row.find('._year2 option:selected').text()
                                });
                                let gp = dataExplorerHelper.getSumOfDataPoints(
                                    dataExplorerHelper.getMatchingDataPoints(dataset, filters1)
                                );
                                let rev = dataExplorerHelper.getSumOfDataPoints(
                                    dataExplorerHelper.getMatchingDataPoints(dataset, filters2)
                                );
                                cell = gp / rev;
                            }
                            break;

                        default:
                            if (row.attr('data-value') === 'Blank') {
                                cell = null;
                                break;
                            }

                            switch (columnSectionType) {
                                case 'yoy':
                                case 'delta':
                                case 'cagr':
                                    {
                                        let y1 = col.find('._year1').val();
                                        let y2 = col.find('._year2').val();
                                        let y1item = $(
                                            '#attr_dim_list .item[data-filter-type=time][data-value="' + y1 + '"]'
                                        );
                                        let y2item = $(
                                            '#attr_dim_list .item[data-filter-type=time][data-value="' + y2 + '"]'
                                        );
                                        const filters1 = Object.assign({}, filters, { time: y1item.text() });
                                        const filters2 = Object.assign({}, filters, { time: y2item.text() });
                                        let y1value = dataExplorerHelper.getSumOfDataPoints(
                                            dataExplorerHelper.getMatchingDataPoints(dataset, filters1)
                                        );
                                        let y2value = dataExplorerHelper.getSumOfDataPoints(
                                            dataExplorerHelper.getMatchingDataPoints(dataset, filters2)
                                        );

                                        switch (columnSectionType) {
                                            case 'yoy':
                                                cell = y2value / y1value - 1;
                                                break;

                                            case 'delta':
                                                cell = y2value - y1value;
                                                break;

                                            case 'cagr':
                                                cell = Math.pow(y2value / y1value, 1 / (y2 - y1)) - 1;
                                                break;
                                        }
                                    }
                                    break;

                                default: {
                                    if (col.attr('data-value') === 'Blank') {
                                        cell = null;
                                        break;
                                    }

                                    if (!isRowFormula && !isColFormula) {
                                        // Process multiple datapoint values if appropriate.
                                        cell = dataExplorerHelper.getSumOfDataPoints(
                                            dataExplorerHelper.getMatchingDataPoints(dataset, filters),
                                            true
                                        );
                                    } else if (isRowFormula) {
                                        cell = dataExplorerEval.evalRowFormula(
                                            this,
                                            row.find('._formula').attr('data-formula'),
                                            filters,
                                            j + 1
                                        );
                                    } else if (isColFormula) {
                                        cell = dataExplorerEval.evalColumnFormula(
                                            this,
                                            col.find('._formula').attr('data-formula'),
                                            filters,
                                            i
                                        );
                                    }
                                }
                            }
                            break;
                    }
                }

                if (cell instanceof DataExplorerCellData) {
                    // Save cell data.
                    newCellData = cell;

                    // Save total.
                    cell = cell.value;
                }

                // Save cell data.
                storageService
                    .getCurrentProject()
                    .analyses[dataExplorerAnalyses.currentAnalysisId].setCellData(i, j, newCellData);

                rowData.push(cell);
            }

            this.tableData.push(rowData);
        }
    }

    updateTable() {
        let cols = $('#column_box > .item');

        this.updateTableMapping();

        // Update table until nothing changes anymore. Slow but working approach for formulas.
        // Limit to 100 updates so it doesn't freeze.
        this.previousTableData = null;
        for (let i = 0; i < 100; i++) {
            this.updateTableData();

            // Check if anything has changed.
            let changed = false;
            if (!this.previousTableData) {
                changed = true;
            } else {
                for (let j = 0; j < this.tableData.length; j++) {
                    if (!_.isEqual(this.tableData[j], this.previousTableData[j])) {
                        changed = true;
                        break;
                    }
                }
            }
            if (!changed) {
                break;
            }

            this.previousTableData = this.tableData;
        }

        // Format values.
        let scale = $('#scale').val();
        this.formattedTableData = [];
        for (let i = 0; i < this.tableData.length; i++) {
            let row = [this.tableData[i][0]];
            let rowElement = $('#row_box > .item:nth-child(' + (i + 1) + ')');
            let rowSectionType = dataExplorerSections.getSectionType(rowElement);

            for (let j = 1; j < this.tableData[i].length; j++) {
                let value = this.tableData[i][j];
                let colElement = $('#column_box > .item:nth-child(' + j + ')');
                let columnSectionType = dataExplorerSections.getSectionType(colElement);

                if (value === null || typeof value === 'undefined' || Number.isNaN(value)) {
                    value = '-';
                } else {
                    value = this.tableData[i][j];

                    if (
                        rowSectionType === 'margin' ||
                        columnSectionType === 'cagr' ||
                        (columnSectionType === 'yoy' && dataExplorerSections.isYoyInPercentMode(colElement))
                    ) {
                        value = common.formatPercent(value);
                    } else if ($.isNumeric(value)) {
                        value /= scale;
                        value = common.formatNumber(value);
                    }
                }

                row.push(value);
            }

            this.formattedTableData.push(row);
        }

        // Get table columns.
        this.columns = [{ title: '' }];
        for (let i = 0; i < cols.length; i++) {
            this.columns.push({
                title: $(cols[i])
                    .find('input')
                    .val()
            });
        }

        dataExplorerTemplate.renderOutputTableOrChart();

        // Change itemSource of wijmo table, while keeping the same selection.
        const selection = this.flexgrid.selection;
        let columns = [];
        this.columns.map(col => {
            columns = concat([], columns, col.title);
        });
        let itemsSource = concat([], this.formattedTableData);
        itemsSource.unshift(columns);
        this.flexgrid.itemsSource = itemsSource;
        this.flexgrid.collectionView.refresh();
        this.flexgrid.selection = selection;

        if (!this.firstTimeRefreshTable) {
            this.firstTimeRefreshTable = true;

            setTimeout(() => {
                this.flexgrid.collectionView.refresh();
            }, 500);
        }
    }
}

export const dataExplorerRenderTable = new DataExplorerRenderTable();
