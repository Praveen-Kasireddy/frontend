import { assign, setWith } from 'lodash';
import { common } from '../../../Common';
import { storageService } from '../../../services/StorageService';
import { dataExplorerAnalyses } from '../DataExplorerAnalyses';
import { dataExplorerImport } from '../DataExplorerImport';
import { dataExplorerRenderTable } from '../table/DataExplorerRenderTable';

class DataExplorerCellEditing {
    createDataPoint(row, col, value) {
        let success = true;
        let alertMessage = '';

        const attribute = $($('#row_box .item.row-or-column-card')[row - 1]).attr('data-value');
        const scale = $('#scale').val();

        // Create data points object.
        let datapoint = {
            value: value,
            attribute: attribute,
            scale: scale,
            source: 'manual'
        };

        const rowCard = $($('#row_box .item.row-or-column-card')[row - 1]);
        const rowDimensions = rowCard.find('.item-group .item');
        rowDimensions.each((index, el) => {
            const dimension = $(el).attr('data-filter-type');
            const val = $(el).attr('data-value');

            datapoint[dimension] = val;
        });

        const colCard = $($('#column_box .item.row-or-column-card')[col - 1]);
        const cardDimensions = colCard.find('.item-group .item');
        cardDimensions.each((index, el) => {
            const dimension = $(el).attr('data-filter-type');
            const val = $(el).attr('data-value');

            if (datapoint.hasOwnProperty(dimension)) {
                success = false;
                alertMessage =
                    'There are multiple values for the "' +
                    dimension +
                    '" dimension: ' +
                    val +
                    ' and ' +
                    datapoint[dimension] +
                    '.';

                return false;
            } else {
                datapoint[dimension] = val;
            }
        });

        $('.global-filter-container .global-filter .item').each((index, el) => {
            const dimension = $(el).attr('data-filter-type');
            const val = $(el).attr('data-value');

            if (datapoint.hasOwnProperty(dimension)) {
                success = false;
                alertMessage =
                    'There are multiple values for the "' +
                    dimension +
                    '" dimension: ' +
                    val +
                    ' and ' +
                    datapoint[dimension] +
                    '.';

                return false;
            } else {
                datapoint[dimension] = val;
            }
        });

        return {
            success: success,
            alert: alertMessage,
            datapoint: datapoint
        };
    }

    cellEditValidation(attr) {
        if (common.checkIfCellHasChanged(attr.oldVal, attr.newVal, attr.dataType)) {
            return common.checkIfCellHasChanged(attr.oldVal, attr.newVal, attr.dataType);
        }

        const cellVal = attr.newVal;
        if (cellVal === '' || cellVal === 'null') {
            alert('Please enter a valid value for this cell.');

            return true;
        }

        // Validate.
        const createDataPoint = this.createDataPoint(attr.row, attr.col, cellVal);
        if (!createDataPoint.success) {
            alert(createDataPoint.alert);

            return true;
        }

        let dataPoint = createDataPoint.datapoint;
        const validation = storageService.getCurrentProject().validateDataPoint(dataPoint);
        const cellData = storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId].getCellData(
            attr.row - 1,
            attr.col - 1
        );

        if (cellData.numberOfDataPoints > 1) {
            alert('Cannot paste into a cell formed from multiple data points.');
            return;
        }

        if (validation.success === false && cellData.numberOfDataPoints !== 1) {
            alert(validation.error);

            return true;
        }

        return false;
    }

    cellEditAddDataPoint(attr) {
        const createDataPoint = this.createDataPoint(attr.row, attr.col, attr.val);
        const dataPoint = createDataPoint.datapoint;
        const cellData = storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId].getCellData(
            attr.row - 1,
            attr.col - 1
        );
        if (cellData.numberOfDataPoints === 1) {
            dataPoint.id = cellData.dataPointIds[0];
        }

        let modifiedFromAnalysis = false;
        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            modifiedFromAnalysis = true;
        }
        const result = storageService.getCurrentProject().addDataPoint(dataPoint, modifiedFromAnalysis);
        if (result.success === false) {
            alert(result.error);
            dataExplorerRenderTable.flexgrid.setCellData(attr.row, attr.col, attr.oldVal);
        }

        const tableCol = dataExplorerImport.rigthTableSelection.col1 + attr.colCounter;
        const tableRow = dataExplorerImport.rigthTableSelection.row1 + attr.rowCounter;
        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            const matchingDataPoint = storageService.getCurrentProject().getMatchingDataPoint(dataPoint);

            if (matchingDataPoint.source !== dataExplorerImport.uuid) {
                matchingDataPoint.source = dataExplorerImport.uuid;

                const prevTable = storageService.getCurrentProject().sourceFiles[matchingDataPoint.source];
                if (prevTable.hasOwnProperty('cellProperties')) {
                    Object.keys(prevTable.cellProperties).forEach(col => {
                        Object.keys(prevTable.cellProperties[col]).forEach(row => {
                            let cell = prevTable.cellProperties[col][row];

                            if (cell.id === dataPoint.id) {
                                setWith(prevTable.cellProperties, [col, row], {}, Object);
                            }
                        });
                    });
                }
            }
        }

        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            let dataPointCopy = assign({}, dataPoint);
            dataPointCopy.failedSaving = false;
            dataPointCopy.cellType = 'data';

            const importedTable = storageService.getCurrentProject().sourceFiles[dataExplorerImport.uuid];
            let cellProperties = importedTable.cellProperties;
            setWith(cellProperties, [tableCol, tableRow], dataPointCopy, Object);
        }

        // Save project.
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    cellEditEnding(s, e) {
        const oldVal = s.getCellData(e.row, e.col);
        const newVal = s.activeEditor.value;
        const dataType = s.columns[e.col].dataType;
        const col = e._rng._col;
        const row = e._rng._row;

        e.cancel = this.cellEditValidation({
            oldVal: oldVal,
            newVal: newVal,
            dataType: dataType,
            row: row,
            col: col
        });
    }

    cellEditEnded(s, e) {
        // Edit was cancelled?
        if (e.cancel) {
            return;
        }

        // TODO: Show loading screen.
        const val = $(s._activeCell).text();
        const col = e._rng._col;
        const row = e._rng._row;

        this.cellEditAddDataPoint({
            row: row,
            col: col,
            val: val,
            oldVal: s.getCellData(row, col)
        });
    }
}

export const dataExplorerCellEditing = new DataExplorerCellEditing();
