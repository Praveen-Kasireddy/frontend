import { common } from '../../Common';
import { keyboardService } from '../../services/KeyboardService';
import { storageService } from '../../services/StorageService';
import { dataExplorer } from './DataExplorer';
import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerVirtualTable } from './DataExplorerVirtualTable';

class DataExplorerSections {
    init() {
        this.container = $('#output_table_sidebar');

        // Close button
        this.container.on('click', '._button._close', e => {
            $(e.currentTarget)
                .closest('.item')
                .remove();
            dataExplorerHelper.resetColumnIds();
            dataExplorerHelper.saveAndUpdate();
        });

        // Chart button
        this.container.on('click', '._button._chart', e => {
            // Switch state.
            let checked = $(e.currentTarget).attr('data-checked') === 'false';
            $(e.currentTarget).attr('data-checked', checked ? 'true' : 'false');

            // Render.
            dataExplorerVirtualTable.renderOutputTableOrChart();

            e.preventDefault();
        });

        // Title
        this.container.on('change', '._title', e => {
            dataExplorerHelper.saveAndUpdate();
        });
        this.container.on('keydown', '._title', e => {
            if (e.keyCode !== keyboardService.ctrlKey && e.keyCode !== keyboardService.shiftKey) {
                e.stopPropagation();
            }
        });
        this.container.on('keyup', '._title', e => {
            dataExplorerHelper.saveAndUpdateDelayed();

            if (e.keyCode !== keyboardService.ctrlKey && e.keyCode !== keyboardService.shiftKey) {
                e.stopPropagation();
            }
        });
    }

    getSectionType(section) {
        return section.attr('data-section-type');
    }

    addSection(sectionType, container, title, id) {
        // Title
        let titleInput = $('<input class="_title" value="' + title + '">');
        let titleContainer = $('<span class="_title-container"></span>').append(titleInput);
        let idElement = dataExplorerHelper.createId(id);

        // Close button
        let closeButton = $(
            '<span class="_button _close"><i class="kpmg-icon kpmg-icon-close" aria-hidden="true"></i></span>'
        );

        // Chart button
        let chartElement = $(
            '<span class="_button _chart" data-checked="true"><i class="kpmg-icon kpmg-icon-graph" aria-hidden="true"></i></span>'
        );

        // Setion
        let section = $('<li class="item row-or-column-card"></li>')
            .attr('data-section-type', sectionType)
            .append(titleContainer, idElement, chartElement, closeButton)
            .appendTo(container);

        return section;
    }

    addFilterSection(container, item, id) {
        let value = item && $(item).length ? $(item).attr('data-value') : '';
        let section = this.addSection('filter', container, value, id);
        let filters = $('<span class="item-group item-group-horizontal _filters" data-type="filter">');

        section.addClass('item-with-filters').append(filters);

        Sortable.create(
            filters[0],
            $.extend({}, dataExplorerHelper.sortableArgs, {
                filter: 'input, .remove-filter',
                preventOnFilter: false
            })
        );

        return section;
    }

    addYearOrMarginOptions(select, option) {
        select.find('option').remove();
        let dataset = storageService.getCurrentDataPoints();
        let years = common.getUniqueValues(dataset, option);

        years.forEach(function(year) {
            select.append('<option value="' + year + '">' + year + '</option>');
        });
    }

    addYearPair(section, y1, y2, option) {
        let year1 = $('<select class="_year _year1"></select>');
        this.addYearOrMarginOptions(year1, option);
        year1.val(y1);
        year1.on('change', function() {
            dataExplorerSections.syncTitle($(this).closest('.row-or-column-card'));
            dataExplorerHelper.saveAndUpdate();
        });

        let year2 = $('<select class="_year _year2"></select>');
        this.addYearOrMarginOptions(year2, option);
        year2.val(y2);
        year2.on('change', function() {
            dataExplorerSections.syncTitle($(this).closest('.row-or-column-card'));
            dataExplorerHelper.saveAndUpdate();
        });

        section.append(year1, year2);
    }

    // Add YoY or Delta, depending on modeValue.
    addYoyColumn(y1, y2, modeValue) {
        let title = modeValue ? 'Yoy' : 'Delta';
        let section = this.addSection(
            title.toLowerCase(),
            $('#column_box'),
            title,
            'C' + dataExplorer.columnSequence++
        );

        let container = $('<div class="extra-yoy-container">');
        section.append(container);

        this.addYearPair(container, y1, y2, 'time');

        return section;
    }

    addCagrColumn(y1, y2) {
        let section = this.addSection('cagr', $('#column_box'), 'CAGR', 'C' + dataExplorer.columnSequence++);
        let container = $('<div class="extra-yoy-container">');

        section.append(container);

        this.addYearPair(container, y1, y2, 'time');
        return section;
    }

    addMarginRow(y1 = null, y2 = null) {
        let section = this.addSection('margin', $('#row_box'), 'Margin', 'R' + dataExplorer.rowSequence++);
        let container = $('<div class="extra-yoy-container">');
        section.append(container);

        this.addYearPair(container, y1, y2, 'attribute');
        return section;
    }

    syncTitle(section) {
        let type = this.getSectionType(section);
        let titleElement = section.find('._title');

        switch (type) {
            case 'filter':
            case 'blank':
                let filters = section.find('.item');

                if (filters.length === 1) {
                    titleElement.val(filters.data('value'));
                }
                if (filters.length > 1) {
                    let title = '';
                    filters.each(function() {
                        title += $(this).data('value') + ' - ';
                    });
                    titleElement.val(title.substring(0, title.length - 2));
                }
                break;

            case 'yoy':
                {
                    let y1 = section.find('._year1').val();
                    let y2 = section.find('._year2').val();
                    titleElement.val('YoY ' + y1 + '-' + y2);
                }
                break;

            case 'delta':
                {
                    let y1 = section.find('._year1').val();
                    let y2 = section.find('._year2').val();
                    titleElement.val('Delta ' + y1 + '-' + y2);
                }
                break;

            case 'cagr': {
                let y1 = section.find('._year1').val();
                let y2 = section.find('._year2').val();
                titleElement.val('CAGR ' + y1 + '-' + y2);
            }
        }
    }
}

export const dataExplorerSections = new DataExplorerSections();
