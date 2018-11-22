export class VirtualTableCell {
    constructor() {
        // The cell value.
        this.value = null;

        // The total number of data-points.
        this.numberOfDataPoints = 0;

        // The IDs of the matching data-points.
        this.dataPointIds = [];

        // The IDs of the matching data-points, grouped per queries.
        this.dataPointIdsPerQuery = [];

        // A per-cell custom formula, optional.
        this.customFormula = null;
    }
}
