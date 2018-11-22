import { storageService } from '../../../services/StorageService';
import { dataExplorerAnalyses } from '../DataExplorerAnalyses';
import { dataExplorerVirtualTable } from '../DataExplorerVirtualTable';

class DataExplorerDrillDown {
    constructor() {
        $(document).on('click', '#data-explorer-table .wj-cell ._drilldown-button', event => {
            this._onClick(event);
        });

        $.contextMenu({
            selector:
                '#data-explorer-table .wj-cells .wj-row:not(:first-child):not(:nth-child(2)) .wj-cell:first-child',
            build: ($trigger, e) => {
                const dimensions = storageService.getCurrentProject().getDimensions();
                const items = {};

                dimensions.forEach(dimension => {
                    if (dimension.special) {
                        return;
                    }

                    items[dimension.slug] = {
                        name: 'Expand by ' + dimension.label,
                        callback: (key, opt) => {
                            const $this = $($trigger.target);
                            const row = $this.attr('data-row');
                            const analysis =
                                storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId];
                            const cardNumber = analysis.tableRowToCardNo[row];
                            const card = analysis.rows[cardNumber];
                            const path = analysis.tableRowToPath[row];
                            const drillDownStatus = card.getDrillDownStatusByPath(path);
                            this._toggleDrillDownStatus(drillDownStatus, opt, true);
                        }
                    };
                });

                return {
                    items: items
                };
            }
        });
    }

    canBeExpanded(filters) {
        return this.getExpandableDimensions(filters).length > 0;
    }

    getExpandableDimensions(filters) {
        const drillable = [];

        // Check if at least one dimension
        for (const dimensionSlug in filters) {
            const values = filters[dimensionSlug];

            // Cannot filter if there is more than one value. E.g. both "2015" and "2016".
            if (values.length !== 1) {
                continue;
            }

            // Check if there is at least one children.
            const value = values[0];
            const children = storageService.getCurrentProject().getChildren(dimensionSlug, value);
            if (children.length > 0) {
                drillable.push(dimensionSlug);
            }
        }

        return drillable;
    }

    _formatItem(s, e) {
        if (
            !storageService.getCurrentProject() ||
            e.panel !== s.cells || // Skip grey cells like A, B, C, 1, 2, 3, etc.
            (e.row === 0 && e.col === 0) || // Skip A1 cell.
            (e.row !== 0 && e.col !== 0) // Only consider header cells.
        ) {
            return;
        }

        const analysis = storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId];

        // Add indent.
        if (e.col === 0) {
            $(e.cell).css('padding-left', 3 + analysis.tableRowLevel[e.row] * 20 + 'px');
        }

        // TODO: Also consider other columns.
        if (e.col !== 0) {
            return;
        }

        // Remember which row this cell represents.
        $(e.cell).attr('data-row', e.row);

        // Add drill-down button.
        if (!this._addDrillDownButton(analysis, e)) {
            $(e.cell).prepend('<i class="_empty-margin"></i>');
        }
    }

    _addDrillDownButton(analysis, e) {
        const cardNumber = analysis.tableRowToCardNo[e.row];
        const card = analysis.rows[cardNumber];

        if (!card) {
            return false;
        }

        const path = analysis.tableRowToPath[e.row];
        const drillDownStatus = card.getDrillDownStatusByPath(path);

        if (!drillDownStatus.expandable && !drillDownStatus.expanded) {
            return false;
        }

        const buttonClass = drillDownStatus.expanded ? 'fa-minus' : 'fa-plus';
        const button = $(`<i class="_drilldown-button fa ${buttonClass}" data-row="${e.row}"></i>`);
        $(e.cell).prepend(button);

        return true;
    }

    _onClick(event) {
        const $this = $(event.target);
        const row = $this.attr('data-row');
        const analysis = storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId];
        const cardNumber = analysis.tableRowToCardNo[row];
        const card = analysis.rows[cardNumber];
        const path = analysis.tableRowToPath[row];
        const drillDownStatus = card.getDrillDownStatusByPath(path);

        this._toggleDrillDownStatus(drillDownStatus);
    }

    /**
     *
     * @param drillDownStatus {DataExplorerDrillDownStatus}
     * @param dimension {string}
     * @param expanded
     * @private
     */
    _toggleDrillDownStatus(drillDownStatus, dimension = null, expanded = null) {
        // Set expanded status.
        drillDownStatus.expanded = expanded === null ? !drillDownStatus.expanded : expanded;

        if (dimension) {
            // Use provided dimension.
            drillDownStatus.dimension = dimension;
        } else if (!drillDownStatus.dimension) {
            // Automatically get dimension.
            const drillableDimensions = this.getExpandableDimensions(drillDownStatus.filters);
            drillDownStatus.dimension = drillableDimensions[0];
        }

        dataExplorerVirtualTable.updateTable();
    }
}

export const dataExplorerDrillDown = new DataExplorerDrillDown();
