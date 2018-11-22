import { cloneDeep, concat } from 'lodash';
import { common } from '../../Common';
import { DataExplorerDrillDownStatus } from '../../entities/DataExplorerDrillDownStatus';
import { VirtualTableCell } from '../../entities/VirtualTableCell';
import { storageService } from '../../services/StorageService';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerEval } from './DataExplorerEval';
import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerRenderChart } from './DataExplorerRenderChart';
import { dataExplorerSections } from './DataExplorerSections';
import { dataExplorerDrillDown } from './table/DataExplorerDrillDown';
import { dataExplorerRenderTable } from './table/DataExplorerRenderTable';

/**
 * Class responsible for generating the underlying virtual table of the analysis, based on the columns, rows, and all the other settings provided.
 */
class DataExplorerVirtualTable {
    constructor() {
        /** @type {VirtualTableCell[][]} */
        this.tableData = null;
        this.formattedTableData = null;
        this.tableIdsToColumns = null;
        this.tableIdsToRows = null;
        this.previousTableData = null;
        this.updateTableDelayed = _.debounce(this.updateTable, 500);

        this._currentTableRow = null;
    }

    updateTable() {
        this._updateMapping();

        // Update table until nothing changes anymore. Slow but working approach for formulas.
        // Limit to 100 updates so it doesn't freeze.
        this.previousTableData = null;
        for (let i = 0; i < 20; i++) {
            this._updateData();

            // Check if anything has changed.
            let changed = false;
            if (!this.previousTableData) {
                changed = true;
            } else {
                for (let j = 0; j < this.tableData.length; j++) {
                    const row = this.tableData[j];

                    for (let k = 0; k < row.length; k++) {
                        if (!_.isEqual(row[k].value, this.previousTableData[j][k].value)) {
                            changed = true;
                            break;
                        }
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
            let row = [this.tableData[i][0].value];
            let rowElement = $('#row_box > .item:nth-child(' + (i + 1) + ')');
            let rowSectionType = dataExplorerSections.getSectionType(rowElement);

            for (let j = 1; j < this.tableData[i].length; j++) {
                let value = this.tableData[i][j].value;
                let colElement = $('#column_box > .item:nth-child(' + j + ')');
                let columnSectionType = dataExplorerSections.getSectionType(colElement);

                if (value === null || typeof value === 'undefined' || Number.isNaN(value)) {
                    value = '-';
                } else {
                    value = this.tableData[i][j].value;

                    if (rowSectionType === 'margin' || columnSectionType === 'cagr' || columnSectionType === 'yoy') {
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

        if (dataExplorerRenderChart.outputMode === 'table') {
            dataExplorerRenderTable.updateTable();
        }
        if (dataExplorerRenderChart.outputMode === 'chart') {
        }

        dataExplorerVirtualTable.renderOutputTableOrChart();
    }

    // Render the output table or chart, depending on what the user chose.
    renderOutputTableOrChart() {
        if (dataExplorerRenderChart.outputMode === 'table') {
            $('._data-explorer-template-content').css('display', '');
            $('._data-explorer-chart').css('display', 'none');
            dataExplorerRenderTable.updateTable();
            dataExplorerRenderTable.flexgrid.collectionView.refresh();
        }
        if (dataExplorerRenderChart.outputMode === 'chart') {
            dataExplorerRenderChart.renderChart();
            $('._data-explorer-template-content').css('display', 'none');
            $('._data-explorer-chart').css('display', '');
        }
    }

    _updateMapping() {
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

    _updateData() {
        let rows = $('#row_box > .item');
        let cols = $('#column_box > .item');
        let globalFilters = dataExplorerHelper.getFiltersFromDom(
            $('#filter_box_a1 > .item, #filter_box_headline > .item, #filter_box_hidden > .item')
        );
        let dataset = storageService.getCurrentDataPoints();
        const analysis = storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId];
        analysis.tableRowLevel = {};
        analysis.tableRowToCardNo = {};
        this.tableData = [];
        this._currentTableRow = 1;

        // Take each row.
        for (let i = 0; i < rows.length; i++) {
            const rowCard = analysis.rows[i];
            let row = $(rows[i]);
            // TODO: Use analysis data instead of DOM.
            let rowFilters = dataExplorerHelper.getFiltersFromDom(row.find('._filters [data-value]'));
            let isRowFormula = row.hasClass('item-with-formula');

            // Add row cells.
            let rowData = this._getColumns(i, row, cols, rowFilters, isRowFormula, dataset, globalFilters);

            // Add row title.
            let rowTitle = row.find('._title').val();
            let rowVirtualTableCell = new VirtualTableCell();
            rowVirtualTableCell.value = rowTitle;
            rowData.unshift(rowVirtualTableCell);

            // Add row.
            this.tableData.push(rowData);

            // Save row data.
            analysis.tableRowLevel[this._currentTableRow] = 0;
            analysis.tableRowToCardNo[this._currentTableRow] = i;
            analysis.tableRowToPath[this._currentTableRow] = [];
            this._currentTableRow++;

            // Update drill-down status.
            rowCard.drillDownStatus.filters = rowCard.filters;
            rowCard.drillDownStatus.expandable = dataExplorerDrillDown.canBeExpanded(rowFilters);

            // Add child rows.
            if (rowCard.drillDownStatus.expanded) {
                this._addChildRows(
                    rowCard.drillDownStatus,
                    i,
                    row,
                    cols,
                    rowFilters,
                    analysis,
                    dataset,
                    globalFilters,
                    []
                );
            }
        }
    }

    /**
     *
     * @param drillDownStatus {DataExplorerDrillDownStatus}
     * @param i
     * @param row
     * @param cols
     * @param rowFilters
     * @param analysis
     * @param dataset
     * @param globalFilters
     * @param path {array}
     * @private
     */
    _addChildRows(drillDownStatus, i, row, cols, rowFilters, analysis, dataset, globalFilters, path) {
        const dimension = drillDownStatus.dimension;

        let children;
        if (dimension in rowFilters) {
            // Drill-down by data-structures.
            const value = rowFilters[dimension][0];
            children = storageService.currentProject.getChildren(dimension, value);
        } else {
            // Drill-down by another dimension.
            const matchingDataPoints = dataExplorerHelper.getMatchingDataPoints(
                storageService.currentProject.dataPoints,
                rowFilters
            );

            // Add children.
            children = matchingDataPoints.reduce((result, dataPoint) => {
                const value = dataPoint[dimension];

                if (value) {
                    result[dataPoint[dimension]] = true;
                }

                return result;
            }, {});
            children = Object.keys(children);
        }

        children.forEach(child => {
            const childPath = concat([], path, child);

            // Prepare row filters.
            const childRowFilters = cloneDeep(rowFilters);
            childRowFilters[dimension] = [child];

            // Add child row cells.
            const rowData = this._getColumns(i, row, cols, childRowFilters, false, dataset, globalFilters);

            // Add title.
            let rowVirtualTableCell = new VirtualTableCell();
            rowVirtualTableCell.value = child;
            rowData.unshift(rowVirtualTableCell);

            // Add row.
            this.tableData.push(rowData);

            // Save row data.
            analysis.tableRowLevel[this._currentTableRow] = childPath.length;
            analysis.tableRowToCardNo[this._currentTableRow] = i;
            analysis.tableRowToPath[this._currentTableRow] = childPath;
            this._currentTableRow++;

            // Update drill-down status.
            if (!(child in drillDownStatus.childStatuses)) {
                drillDownStatus.childStatuses[child] = new DataExplorerDrillDownStatus();
            }
            const childDrillDownStatus = drillDownStatus.childStatuses[child];
            childDrillDownStatus.filters = childRowFilters;
            childDrillDownStatus.expandable = dataExplorerDrillDown.canBeExpanded(childRowFilters);

            // Add child rows.
            if (childDrillDownStatus.expanded) {
                this._addChildRows(
                    childDrillDownStatus,
                    i,
                    row,
                    cols,
                    childRowFilters,
                    analysis,
                    dataset,
                    globalFilters,
                    childPath
                );
            }
        });
    }

    _getColumns(i, row, cols, rowFilters, isRowFormula, dataset, globalFilters) {
        const rowData = [];

        // Take each column.
        for (let j = 0; j < cols.length; j++) {
            let col = $(cols[j]);
            let cell = 0;
            let colFilters = dataExplorerHelper.getFiltersFromDom(col.find('[data-value]'));
            let isColFormula = col.hasClass('item-with-formula');
            let rowSectionType = dataExplorerSections.getSectionType(row);
            let columnSectionType = dataExplorerSections.getSectionType(col);
            let filters = Object.assign({}, globalFilters, rowFilters, colFilters);
            let cellData = storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId].getCellData(
                i,
                j
            );

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

            if (!(cell instanceof VirtualTableCell)) {
                const value = cell;
                cell = new VirtualTableCell();
                cell.value = value;
            }

            rowData.push(cell);
        }

        return rowData;
    }
}

export const dataExplorerVirtualTable = new DataExplorerVirtualTable();
