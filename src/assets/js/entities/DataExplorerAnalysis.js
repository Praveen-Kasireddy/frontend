import { get, set } from 'lodash';
import { DataExplorerCard } from './DataExplorerCard';
import { DataExplorerCellData } from './DataExplorerCellData';

export class DataExplorerAnalysis {
    constructor(dataExplorerAnalysis) {
        this.id = '';
        this.name = '';
        this.dropboxFiles = [];

        // Global filter cards
        this.globalFilters = [];

        /**
         * Column cards
         * @type {DataExplorerCard[]}
         */
        this.columns = [];

        /**
         * Row cards
         * @type {DataExplorerCard[]}
         */
        this.rows = [];

        // Scale used in analysis
        this.scale = 1000;

        /**
         * Data for each individual cell.
         * @type {DataExplorerCellData[][]}
         */
        this.cellData = {};

        this.tableRowToCardNo = {};

        this.tableRowToPath = {};

        this.tableColumnToCardNo = {};

        this.tableRowLevel = {};

        this.tableColumnLevel = {};

        // Initialize from simple object.
        if (dataExplorerAnalysis) {
            Object.assign(this, dataExplorerAnalysis);

            this.columns = this.columns.map(column => {
                return new DataExplorerCard(column);
            });

            this.rows = this.rows.map(row => {
                return new DataExplorerCard(row);
            });
        }
    }

    /**
     * @param row {number}
     * @param column {number}
     * @return {DataExplorerCellData}
     * */
    getCellData(row, column) {
        let cellData = get(this.cellData, `[${row}][${column}`);

        if (!cellData) {
            cellData = new DataExplorerCellData();
        }

        return cellData;
    }

    /**
     * @param row {number}
     * @param column {number}
     * @param cellData {DataExplorerCellData}
     */
    setCellData(row, column, cellData) {
        const oldCellData = this.getCellData(row, column);

        // Be sure to make these objects, not arrays.
        if (!this.cellData[row]) {
            this.cellData[row] = {};
        }

        if (!this.cellData[column]) {
            this.cellData[column] = {};
        }

        if (cellData.customFormula === null && oldCellData.customFormula) {
            cellData.customFormula = oldCellData.customFormula;
        }

        set(this.cellData, `[${row}][${column}]`, cellData);
    }
}
