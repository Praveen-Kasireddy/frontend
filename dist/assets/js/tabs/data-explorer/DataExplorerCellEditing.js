import { assign, setWith } from 'lodash';
import { common } from '../../Common';
import { storageService } from '../../services/StorageService';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';

class DataExplorerCellEditing {
    createDataPoint(row, col, value) {
        console.log('create data point, cica');
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
        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            dataPoint.source = this.uuid;
        }

        storageService.getCurrentProject().addDataPoint(dataPoint);

        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            let dataPointCopy = assign({}, dataPoint);
            dataPointCopy.failedSaving = false;
            dataPointCopy.cellType = 'data';

            const importedTable = storageService.getCurrentProject().sourceFiles[this.uuid];
            let cellProperties = importedTable.cellProperties;
            setWith(
                cellProperties,
                [this.rigthTableSelection.col1 + attr.colCounter, this.rigthTableSelection.row1 + attr.rowCounter],
                dataPointCopy,
                Object
            );
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
            val: val
        });
    }
}

export const dataExplorerCellEditing = new DataExplorerCellEditing();
