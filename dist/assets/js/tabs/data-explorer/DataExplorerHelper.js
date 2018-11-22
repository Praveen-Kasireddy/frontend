import { common } from '../../Common';
import { VirtualTableCell } from '../../entities/VirtualTableCell';
import { storageService } from '../../services/StorageService';
import { dataExplorer } from './DataExplorer';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerSections } from './DataExplorerSections';
import { dataExplorerStorage } from './DataExplorerStorage';
import { dataExplorerVirtualTable } from './DataExplorerVirtualTable';

class DataExplorerHelper {
    constructor() {
        const dataExplorerHelper = this;

        String.prototype.replaceBetween = function(start, end, what) {
            return this.substring(0, start) + what + this.substring(end);
        };

        this.onStart = function(evt) {
            let s = '.item-group:not(._filters)';

            $(s).each(function() {
                if (!dataExplorerHelper.doTypesMatch(evt.item, this)) {
                    $(this).addClass('_disabled');
                } else {
                    $(this).removeClass('_disabled');
                }
            });
        };

        this.onEnd = function(evt) {
            $('.item-group').removeClass('_disabled');
            dataExplorerHelper.saveAndUpdate();
        };

        this.onMove = function(evt, originalEvent) {
            // Check for matching box types.
            if (!dataExplorerHelper.doTypesMatch(evt.dragged, evt.to)) {
                return false;
            }

            // Check for duplicates in other filter sections.
            if (
                evt.to !== evt.from &&
                $(evt.to).hasClass('_filters') &&
                dataExplorerHelper.getMatchingFilters(evt.dragged, evt.to) > 0
            ) {
                return false;
            }
            return true;
        };

        this.onSort = function(evt) {
            let container = $(evt.to);

            if (container.attr('data-rows') === '') {
                dataExplorerHelper.resetRowIds();
            } else if (container.attr('data-columns') === '') {
                dataExplorerHelper.resetColumnIds();
            }

            dataExplorerSections.syncTitle($(evt.to).closest('.row-or-column-card'));
        };

        this.onAdd = function(evt) {
            dataExplorerSections.syncTitle($(evt.from).closest('.row-or-column-card'));
            dataExplorerSections.syncTitle($(evt.to).closest('.row-or-column-card'));
        };

        this.sortableArgs = {
            animation: 200,
            group: 'attributes',
            filter: '._filters, input, .modal, .remove-filter',
            preventOnFilter: false,
            onStart: this.onStart,
            onEnd: this.onEnd,
            onMove: this.onMove,
            onSort: this.onSort,
            onAdd: this.onAdd
        };

        this.sortableArgsForAttrs = $.extend({}, this.sortableArgs, {
            group: {
                name: 'attributes',
                pull: 'clone',
                put: true,
                revertClone: true
            },
            animation: 0,
            sort: false,
            onAdd: function(evt) {
                // Remove everything dropped here.
                $(evt.item).remove();
            },
            filter: '.remove-filter'
        });
    }

    isChartEnabledForItem(item) {
        return (
            $(item)
                .find('._chart')
                .attr('data-checked') === 'true'
        );
    }

    isChartEnabledForColumn(index) {
        return this.isChartEnabledForItem($('#column_box > .item:nth-child(' + index + ') '));
    }

    isChartEnabledForRow(index) {
        return this.isChartEnabledForItem($('#row_box > .item:nth-child(' + index + ') '));
    }

    getFiltersFromDom(domFilters) {
        let filtersByType = {};

        // Group filters by type.
        for (let i = 0; i < domFilters.length; i++) {
            let element = $(domFilters[i]);
            let value = element.attr('data-value');
            let type = element.attr('data-filter-type');

            if (!(type in filtersByType)) {
                filtersByType[type] = [];
            }

            filtersByType[type].push(value);
        }

        return filtersByType;
    }

    checkFilters(dataPoint, filters) {
        // Match filters.
        for (let dimension in filters) {
            let dimensionFilters = filters[dimension];
            let matches = false;

            if (typeof dimensionFilters === 'undefined') {
                continue;
            } else if (!Array.isArray(dimensionFilters)) {
                dimensionFilters = [dimensionFilters];
            }

            // Match at least one filter per type.
            for (let j = 0; j < dimensionFilters.length; j++) {
                let value = dimensionFilters[j];

                if (dataPoint[dimension] == value) {
                    matches = true;
                    break;
                }
            }

            if (!matches) {
                return false;
            }
        }

        return true;
    }

    getMatchingDataPoints(dataset, filters) {
        let dataPoints = [];

        dataset.forEach(dataPoint => {
            // Check if filters match.
            if (!this.checkFilters(dataPoint, filters)) {
                return;
            }

            dataPoints.push(dataPoint);
        });

        return dataPoints;
    }

    /**
     * Sum up values of all data points.
     *
     * @param {Array} dataPoints
     * @param {boolean} sumOfMultiple If true, return a VirtualTableCell object;
     * @returns {number|VirtualTableCell}
     */
    getSumOfDataPoints(dataPoints, sumOfMultiple = false) {
        if (dataPoints.length === 0) {
            return 0;
        }

        let total = 0;
        let dataPointIds = [];

        // Group all data-points by non-empty dimensions.
        const dimensions = storageService.getCurrentProject().getIdentityDimensions();
        let sets = {};
        dataPoints.forEach(dataPoint => {
            // Get the set "ID". We use "T" (true) for each non-empty dimension, and "F" (false) for each empty dimesnsion.
            let setId = '';
            dimensions.forEach(dimension => {
                if (dimension.slug in dataPoint && dataPoint[dimension.slug]) {
                    setId += 'T';
                } else {
                    setId += 'F';
                }
            });

            // Create set if it doesn't already exist.
            if (!(setId in sets)) {
                sets[setId] = [];
            }

            // Add data point to set.
            sets[setId].push(dataPoint);
        });

        // Use the set with the smallest number of non-empty dimensions.
        let setIds = Object.keys(sets);
        setIds = setIds.sort((a, b) => {
            return a.split('T').length - b.split('T').length;
        });
        dataPoints = sets[setIds[0]];

        // Sum up data-points.
        dataPoints.forEach(dataPoint => {
            // Get scale.
            let value = dataPoint['value'];
            if ('scale' in dataPoint) {
                value *= common.parseScale(dataPoint['scale']);
            }

            // Add value.
            total += value;
            dataPointIds.push(dataPoint.id);
        });

        // Save data about each particular data-point.
        if (sumOfMultiple === true) {
            const cellData = new VirtualTableCell();
            cellData.value = total;
            cellData.dataPointIds = dataPointIds;
            cellData.numberOfDataPoints = dataPointIds.length;

            return cellData;
        }

        return total;
    }

    getMatchingFilters(item, container) {
        let value = $(item).attr('data-value');
        let matches = $(container).find('[data-value="' + value + '"]');

        return matches.length;
    }

    resetColumnIds() {
        dataExplorer.columnSequence = dataExplorerHelper.resetBoxIds($('#column_box'), 'C');
    }

    resetRowIds() {
        dataExplorer.rowSequence = dataExplorerHelper.resetBoxIds($('#row_box'), 'R');
    }

    resetBoxIds(container, prefix) {
        let swapPrefix = '_tempswap';
        let idElements = container.find('._id');
        let originalIds = [];
        let swapIds = [];
        let newIds = [];
        let counter = 1;

        // Get IDs.
        idElements.each(function() {
            originalIds.push($(this).text());
            swapIds.push(swapPrefix + counter);
            newIds.push(prefix + counter);
            counter++;
        });

        // Replace formulas.
        this.replaceBoxFormulas(container, originalIds, swapIds);
        this.replaceBoxFormulas(container, swapIds, newIds);

        // Replace IDs.
        for (let i = 0; i < newIds.length; i++) {
            $(idElements[i]).text(newIds[i]);
        }

        return counter;
    }

    replaceBoxFormulas(container, needle, replacement) {
        container.find('._formula').each(function() {
            let $this = $(this);
            let formula = $this.val();

            for (let i = 0; i < needle.length; i++) {
                formula = dataExplorerHelper.replaceFullWord(formula, needle[i], replacement[i]);
            }

            $this.val(formula);
        });
    }

    // https://stackoverflow.com/a/27472191
    replaceFullWord(haystack, needle, replacement) {
        let regex = new RegExp('\\b' + needle + '\\b', 'g');

        return haystack.replace(regex, replacement);
    }

    createId(id) {
        let span = $('<span class="_button _id" name="id">' + id + '</span>');
        //
        // span.on('mousedown', function (e) {
        //     // Is there a formula in focus?
        //     let focused = $('._formula:focus');
        //
        //     if (focused.length > 0) {
        //         focused.val(focused.val() + $(this).text());
        //         dataExplorerHelper.saveAndUpdateDelayed();
        //     }
        //
        //     e.preventDefault();
        // });

        return span;
    }

    createItem(id, dataType, value, filterName) {
        let li = $('<li class="item" data-type="' + dataType + '" data-value="' + value + '">' + value + '</li>');

        if (id) {
            li.append(dataExplorerHelper.createId(id));
        }

        if (typeof filterName !== 'undefined') {
            li.attr('data-filter-type', filterName);
        }

        return li;
    }

    doTypesMatch(element, box) {
        let elementType = $(element).attr('data-type');
        let boxType = $(box).attr('data-type');

        if (!elementType && ($(box).attr('data-columns') === '' || $(box).attr('data-rows') === '')) {
            return true;
        }

        if (elementType === 'kpi' && boxType === 'filter') {
            return true;
        }

        if (!(boxType === 'all' || elementType === boxType)) {
            return false;
        }

        return true;
    }

    saveAndUpdate() {
        dataExplorerHelper.addFilterRemoveButton();
        dataExplorerStorage.save(dataExplorerAnalyses.currentAnalysisId);
        dataExplorerVirtualTable.updateTable();
    }

    saveAndUpdateDelayed() {
        dataExplorerVirtualTable.updateTableDelayed();
        dataExplorerStorage.saveDelayed();
    }

    addFilterRemoveButton() {
        $('.main_sidebar')
            .find('.item-with-filters .item-group .item, .global-filter-container .item[data-type="filter"]')
            .each(function() {
                if ($(this).children('.remove-filter').length === 0) {
                    $(this).append('<i class="fa fa-icon kpmg-icon-close remove-filter"></i>');
                }
            });
    }
}

export const dataExplorerHelper = new DataExplorerHelper();
