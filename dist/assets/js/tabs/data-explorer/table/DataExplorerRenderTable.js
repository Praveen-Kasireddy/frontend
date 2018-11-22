import { concat, get } from 'lodash';
import { storageService } from '../../../services/StorageService';
import { dataExplorer } from '../DataExplorer';
import { dataExplorerVirtualTable } from '../DataExplorerVirtualTable';
import { dataExplorerCellEditing } from '../table/DataExplorerCellEditing';
import { dataExplorerCellViewer } from '../table/DataExplorerCellViewer';
import { dataExplorerDrillDown } from '../table/DataExplorerDrillDown';

/**
 * Class to render a HTML table based on Wijmo's FlexGrid component.
 */
class DataExplorerRenderTable {
    constructor() {
        this._inUpdatedLayout = false;
        this._firstTimeRefreshTable = false;
        this._tableContainer = $('#data-explorer-table');
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this._tableContainer[0], {
                isReadOnly: true,
                itemsSource: [],
                allowSorting: false,
                allowDragging: 'None',
                updatedLayout: () => {
                    if (this._inUpdatedLayout) {
                        this._inUpdatedLayout = false;
                    } else {
                        this._inUpdatedLayout = true;
                        this.flexgrid.autoSizeColumns(0, this.flexgrid.columns.length);
                    }
                },
                formatItem: (s, e) => {
                    this._formatItem(s, e);
                    dataExplorerDrillDown._formatItem(s, e);
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

                    // Disable edits for cells matching multiple data-points.
                    let cellData = get(dataExplorerVirtualTable, `tableData[${row - 1}][${col}]`);
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

        console.log('this.flexgrid-->', this.flexgrid);
    }

    updateTable() {
        let cols = $('#column_box > .item');

        // Prepare new item source.
        let headerRow = [''];
        for (let i = 0; i < cols.length; i++) {
            headerRow.push(
                $(cols[i])
                    .find('input')
                    .val()
            );
        }
        let itemsSource = concat([], dataExplorerVirtualTable.formattedTableData);
        itemsSource.unshift(headerRow);

        // Change itemSource of Wijmo table, while keeping the same selection.
        const selection = this.flexgrid.selection;
        this.flexgrid.itemsSource = itemsSource;
        this.flexgrid.collectionView.refresh();
        this.flexgrid.selection = selection;

        if (!this._firstTimeRefreshTable) {
            this._firstTimeRefreshTable = true;

            setTimeout(() => {
                this.flexgrid.collectionView.refresh();
            }, 500);
        }
    }

    _formatItem(s, e) {
        if (!storageService.getCurrentProject()) {
            return;
        }

        // Ignore header cells.
        if (e.panel !== s.cells) {
            return;
        }

        const col = e._rng._col;
        const row = e._rng._row;
        const cellElement = $(e.cell);

        // Cells are reused, so we need to reset styling and attributes.
        {
            cellElement.removeClass('multiple-value-datapoint');
            cellElement.attr('data-toggle', null);
            cellElement.attr('data-placement', null);
            cellElement.attr('data-title', null);
            cellElement.css({
                'padding-left': null
            });

            // Remove tooltip, if any,
            const tooltip = cellElement.data('tooltipInstance');
            if (tooltip) {
                tooltip.dispose();
            }
        }

        if (row === 0) {
            cellElement.css('font-weight', 'bold');
        }

        if (col > 0) {
            cellElement.css('text-align', 'right');
        }

        if (col === 0 && row === 0) {
            const filtersToDisplay = $(`#filter_box_a1 .item`) ? $(`#filter_box_a1 .item`) : '';
            this._displayFiltersWithSeparator(
                filtersToDisplay,
                dataExplorerRenderTable.flexgrid.cells.getCellElement(0, 0)
            );

            const headlineFilter = $(`#filter_box_headline .item`) ? $(`#filter_box_headline .item`) : '';
            this._displayFiltersWithSeparator(
                headlineFilter,
                '._data-explorer-template-content .headline-filter-container'
            );
        }

        // Add tooltip for cells matching multiple data-points.
        // TODO: Keep a reference of these tooltips and properly dispose of them. Memory leak;
        let cellData = get(dataExplorerVirtualTable, `tableData[${row - 1}][${col}]`);
        if (cellData && cellData.numberOfDataPoints > 1) {
            const title = `This value is calculated from ${
                cellData.numberOfDataPoints
            } data points. Click for more info.`;
            cellElement.addClass('multiple-value-datapoint');

            const tooltip = new Tooltip(cellElement, {
                container: document.body,
                boundariesElement: document.body,
                placement: 'bottom',
                title: title
            });
            cellElement.data('tooltipInstance', tooltip);
        }
    }

    _displayFiltersWithSeparator(filters, target) {
        if (!filters) {
            return;
        }

        filters = filters.toArray();
        filters = filters.map(filter => {
            return $(filter).text();
        });

        const title = Object.values(filters).join(' - ');
        $(target).text(title);
        $(target).val(title);
    }
}

export const dataExplorerRenderTable = new DataExplorerRenderTable();
