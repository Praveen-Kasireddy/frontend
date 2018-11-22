import { VirtualTableCell } from '../../entities/VirtualTableCell';
import { storageService } from '../../services/StorageService';
import { dataExplorer } from './DataExplorer';
import { dataExplorerHelper } from './DataExplorerHelper';

class DataExplorerEval {
    constructor() {
        this.filters = {};

        // The number of data-points that were matched in the last evaluated formula.
        this.numberOfDataPoints = 0;

        // The IDs of the data-points that were matched, per query, for the last evaluated formula.
        this.dataPointIdsPerQuery = [];
    }

    evalColumnFormula(render, formula, filters, row) {
        return this.evalFormula(render, formula, filters, row, null);
    }

    evalRowFormula(render, formula, filters, column) {
        return this.evalFormula(render, formula, filters, null, column);
    }

    evalFormula(render, formula, filters, row, column) {
        this.filters = filters;

        if ((row !== null || column !== null) && !render.previousTableData) {
            return null;
        }

        let start = null,
            prefix,
            tableIds;
        if (row !== null) {
            start = dataExplorer.columnSequence - 1;
            prefix = 'C';
            tableIds = render.tableIdsToColumns;
        } else if (column !== null) {
            start = dataExplorer.rowSequence - 1;
            prefix = 'R';
            tableIds = render.tableIdsToRows;
        }

        // Replace variables, if applicable.
        let processedFormula = formula;
        if (start !== null) {
            // Replace variables in reverse order, so we don't replace C11 with C1's value for example.
            for (let i = start; i >= 1; i--) {
                let variable = prefix + i;

                if (!(variable in tableIds)) {
                    continue;
                }

                let index = tableIds[variable];
                let value =
                    row !== null ? render.previousTableData[row][index] : render.previousTableData[index][column];
                let r = new RegExp(variable, 'g');

                processedFormula = processedFormula.replace(r, ' ' + value + ' ');
            }
        }

        // Evaluate formula.
        this.numberOfDataPoints = 0;
        this.dataPointIdsPerQuery = [];
        let value;
        try {
            value = eval(processedFormula);
        } catch (e) {
            value = null;
        }

        // Don't show arrays or objects, that means formula is most probably invalid.
        if (Array.isArray(value) || typeof value === 'object') {
            value = '';
        }

        // Compose result.
        const cellData = new VirtualTableCell();
        cellData.value = value;
        cellData.formula = formula;
        cellData.numberOfDataPoints = this.numberOfDataPoints;
        cellData.dataPointIdsPerQuery = this.dataPointIdsPerQuery;
        if (this.dataPointIdsPerQuery.length === 1) {
            cellData.dataPointIds = this.dataPointIdsPerQuery[0].ids;
        }

        return cellData;
    }

    parseArguments(args) {
        if (args.length > 0 && Array.isArray(args[0])) {
            if (args[0].length > 0) {
                return args[0].map(dataPoint => dataPoint.value);
            } else {
                return [0];
            }
        }

        return args;
    }
}

export const dataExplorerEval = new DataExplorerEval();

function MIN() {
    return Math.min.apply(null, dataExplorerEval.parseArguments(arguments));
}

function MAX() {
    return Math.max.apply(null, dataExplorerEval.parseArguments(arguments));
}

function SUM() {
    const args = dataExplorerEval.parseArguments(arguments);
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

function AVERAGE() {
    const args = dataExplorerEval.parseArguments(arguments);
    let sum = SUM.apply(null, args);

    return sum / args.length;
}

function QUERY(filters) {
    const allFilters = Object.assign({}, dataExplorerEval.filters, filters);
    const dataPoints = storageService.getCurrentDataPoints();
    const results = dataExplorerHelper.getMatchingDataPoints(dataPoints, allFilters);

    // Save stats about matched data-points.
    dataExplorerEval.numberOfDataPoints += results.length;
    dataExplorerEval.dataPointIdsPerQuery.push({
        filters: filters,
        ids: results.map(dataPoint => dataPoint.id)
    });

    return results;
}
