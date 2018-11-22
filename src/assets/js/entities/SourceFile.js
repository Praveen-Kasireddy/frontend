import get from 'lodash/get';
import { Project } from './Project';

export class SourceFile {
    constructor(object) {
        this.uuid = '';
        this.name = '';
        this.itemsSource = [];
        this.cellProperties = {};
        this.ingestionStep = 1;
        this.dataPoints = [];
        this.dataPointsCopy = [];
        this.formDimensions = [];
        this.hidden = false;
        this.globalMappingStructures = [];

        if (object) {
            Object.assign(this, object);

            if (object.project) {
                this.project = new Project(object.project);
            }
        }
    }

    getNumberOfRows() {
        return this.itemsSource.length;
    }

    getNumberOfCols() {
        return this.itemsSource[0] ? this.itemsSource[0].length : 0;
    }

    getCellValue(row, col) {
        return this.itemsSource[row][col];
    }

    getSingleCellProperties(row, col) {
        if (!this.cellProperties.hasOwnProperty(col)) {
            this.cellProperties[col] = {};
        }

        if (!this.cellProperties[col].hasOwnProperty(row)) {
            this.cellProperties[col][row] = {};
        }

        // Assign defaults.
        // TODO: Performance issue: this is always creating new objects.
        const defaults = {
            cellType: 'none'
        };
        this.cellProperties[col][row] = Object.assign({}, defaults, this.cellProperties[col][row]);
        this.cellProperties[col][row]['value'] = this.getCellValue(row, col);

        return this.cellProperties[col][row];
    }

    getCellCompletionPercentage(row, col) {
        const cellFields = get(this, `cellProperties[${col}][${row}]`);
        const totalFields = this.formDimensions.length;
        const filledFields = this.formDimensions.reduce((count, field) => {
            if (field in cellFields && cellFields[field] !== '') {
                count++;
            }

            return count;
        }, 0);

        return totalFields > 0 ? filledFields / totalFields : 1;
    }

    getTotalCompletionPercentage() {
        let dataCells = 0;
        let progress = 0;

        for (let col in this.cellProperties) {
            for (let row in this.cellProperties[col]) {
                const dataType = get(this, `cellProperties[${col}][${row}].cellType`);

                if (dataType === 'data') {
                    dataCells++;
                    progress += this.getCellCompletionPercentage(row, col);
                }
            }
        }

        return dataCells === 0 ? 0 : progress / dataCells;
    }
}
