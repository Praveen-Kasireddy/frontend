export class DataExplorerDrillDownStatus {
    constructor(drillDownStatus) {
        /**
         * Filters indexed by dimension. E.g. {attribute: ['Net Revenue'], time: ['2015', '2016']}.
         * @type {{}}
         */
        this.filters = {};

        // Is this drillable? I.e. Should we display a plus sign next to it?
        this.expandable = false;

        // Is this expanded/open or collapsed/closed?
        this.expanded = false;

        // Which dimension are we drilling down to? E.g. If we double-click "Net Revenue" to split it into countries, this.dimension would be equal to "country".
        this.dimension = '';

        /**
         * A list of child statuses, indexed by value. E.g. The "Net Revenue" child status will be indexed by "Net Revenue".
         *
         * @type {DataExplorerDrillDownStatus[]}
         **/
        this.childStatuses = {};

        if (drillDownStatus) {
            Object.assign(this, drillDownStatus);

            for (const dimension in this.childStatuses) {
                this.childStatuses[dimension] = new DataExplorerDrillDownStatus(this.childStatuses[dimension]);
            }
        }
    }
}
