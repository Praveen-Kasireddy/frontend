import { DataExplorerDrillDownStatus } from './DataExplorerDrillDownStatus';

export class DataExplorerCard {
    constructor(card) {
        this.sectionType = null;

        this.title = '';

        /**
         * Filters indexed by dimension. E.g. {attribute: ['Net Revenue'], time: ['2015', '2016']}.
         * @type {{}}
         */
        this.filters = {};

        this.dataValue = '';

        this.year1 = '';

        this.year2 = '';

        /** @type {DataExplorerDrillDownStatus} */
        this.drillDownStatus = new DataExplorerDrillDownStatus();

        if (card) {
            Object.assign(this, card);

            if (this.drillDownStatus) {
                this.drillDownStatus = new DataExplorerDrillDownStatus(this.drillDownStatus);
            }
        }
    }

    /**
     * Get the DrillDownStatus object corresponding to the given path. An empty path (i.e. []) will return this.drillDownStatus.
     * @param {array} path
     * @returns {DataExplorerDrillDownStatus}
     */
    getDrillDownStatusByPath(path) {
        let status = this.drillDownStatus;

        path.forEach(part => {
            status = status.childStatuses[part];
        });

        return status;
    }
}
