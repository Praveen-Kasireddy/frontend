import { DataExplorerCard } from '../../entities/DataExplorerCard';
import { storageService } from '../../services/StorageService';
import { dataExplorer } from './DataExplorer';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerSecondarySidebar } from './DataExplorerSecondarySidebar';
import { dataExplorerSections } from './DataExplorerSections';
import { dataExplorerVirtualTable } from './DataExplorerVirtualTable';

class DataExplorerStorage {
    constructor() {
        this.saveDelayed = _.debounce(this.save, 500);
    }

    save(i) {
        console.log('dataExplorerStorage.save');

        let globalFilters = [];
        let columns = dataExplorerStorage.saveRowsOrColumns($('#column_box'));
        let rows = dataExplorerStorage.saveRowsOrColumns($('#row_box'));

        let filterCategories = ['a1', 'headline', 'hidden'];
        for (let i = 0; i < filterCategories.length; i++) {
            let category = filterCategories[i];

            $(`#filter_box_${category} > .item`).each(function() {
                let $this = $(this);

                globalFilters.push({
                    dataFilterType: $this.attr('data-filter-type'),
                    dataValue: $this.attr('data-value'),
                    dataDestination: $this.parent().attr('id')
                });
            });
        }

        storageService.currentProject.analyses[i].globalFilters = globalFilters;
        storageService.currentProject.analyses[i].columns = columns;
        storageService.currentProject.analyses[i].rows = rows;
        storageService.currentProject.analyses[i].scale = $('#scale').val();

        storageService.saveCurrentProject();
    }

    saveRowsOrColumns(container) {
        let data = [];

        container.find('> .item').each(function() {
            const $this = $(this);
            const sectionType = $this.attr('data-section-type');

            // Create card.
            const card = new DataExplorerCard();
            card.sectionType = sectionType;
            card.title = $this.find('input._title').val();
            card.dataValue = $this.attr('data-value');

            switch (sectionType) {
                case 'filter':
                    card.filters = {};

                    if (card.dataValue === 'Blank') {
                        break;
                    }

                    $this.find('.item').each(function() {
                        const dimension = $(this).attr('data-filter-type');
                        const value = $(this).attr('data-value');

                        if (!(dimension in card.filters)) {
                            card.filters[dimension] = [];
                        }
                        card.filters[dimension].push(value);
                    });
                    break;

                case 'formula':
                    card.formula = $this.find('._formula').attr('data-formula');
                    break;

                case 'yoy':
                case 'delta':
                    card.year1 = $this.find('._year1').val();
                    card.year2 = $this.find('._year2').val();
                    break;

                case 'cagr':
                    card.year1 = $this.find('._year1').val();
                    card.year2 = $this.find('._year2').val();
                    break;

                case 'margin':
                    card.attribute1 = $this.find('._year1').val();
                    card.attribute2 = $this.find('._year2').val();
                    break;
            }

            data.push(card);
        });

        return data;
    }

    load() {
        if (storageService.getCurrentTab() !== '#output_table') {
            return;
        }

        console.log('dataExplorerStorage.load');

        dataExplorerSecondarySidebar.load();

        // Available fields
        {
            $('#available_box ul.available_box-sub').html('');

            // Filter
            let filterTypes = ['time', 'entity', 'layer', 'quality', 'unit'];
            for (let i = 0; i < filterTypes.length; i++) {
                dataExplorerStorage.addItemsForFilterType(filterTypes[i]);
            }
        }

        const data = storageService.currentProject.analyses[dataExplorerAnalyses.currentAnalysisId];

        // Scale
        $('#scale').val(data.scale);

        // Global filters
        $('#filter_box_headline, #filter_box_a1, #filter_box_hidden').html('');
        for (let i = 0; i < data.globalFilters.length; i++) {
            let filterData = data.globalFilters[i];
            let filter = $(
                '.secondary_sidebar .item[data-filter-type="' +
                    filterData.dataFilterType +
                    '"][data-value="' +
                    filterData.dataValue +
                    '"]'
            );
            $('#' + filterData.dataDestination).append(filter.clone());
        }

        // Columns
        dataExplorerStorage.loadRowsOrColumns($('#column_box'), data.columns);

        // Rows
        dataExplorerStorage.loadRowsOrColumns($('#row_box'), data.rows);

        dataExplorerVirtualTable.updateTable();

        dataExplorerHelper.addFilterRemoveButton();
    }

    loadRowsOrColumns(container, data) {
        const set = container.attr('data-set');
        let isColumns = container.attr('id') === 'column_box';

        if (isColumns) {
            dataExplorer.columnSequence = 1;
        } else {
            dataExplorer.rowSequence = 1;
        }

        container.find('> .item').remove();
        for (let i = 0; i < data.length; i++) {
            let itemData = data[i];
            let item = null;

            switch (itemData.sectionType) {
                case 'filter':
                    if (itemData.dataValue === 'Blank') {
                        let id = isColumns ? 'C' + dataExplorer.columnSequence : 'R' + dataExplorer.rowSequence;
                        item = dataExplorerSections.addFilterSection(container, itemData, id);
                        item.attr('data-value', 'Blank');
                        break;
                    }

                    item = dataExplorer.addFilter('', set);

                    const filters = item.find('._filters');

                    // Add filters one by one, per dimension.
                    for (const dimension in itemData.filters) {
                        itemData.filters[dimension].forEach(value => {
                            const filter = dataExplorerHelper.createItem(null, 'filter', value, dimension);
                            filters.append(filter.clone());
                        });
                    }
                    break;

                case 'formula':
                    if (isColumns) {
                        item = dataExplorer.addFormula(itemData.formula, dataExplorer.SET_COLUMN);
                    } else {
                        item = dataExplorer.addFormula(itemData.formula, dataExplorer.SET_ROW);
                    }
                    break;

                case 'yoy':
                    item = dataExplorerSections.addYoyColumn(itemData.year1, itemData.year2, itemData.mode);
                    break;

                case 'delta':
                    item = dataExplorerSections.addYoyColumn(itemData.year1, itemData.year2, itemData.mode);
                    break;

                case 'cagr':
                    item = dataExplorerSections.addCagrColumn(itemData.year1, itemData.year2);
                    break;

                case 'margin':
                    item = dataExplorerSections.addMarginRow();
                    break;
            }

            if (item) {
                item.find('._title').val(itemData.title);
            }
        }
    }

    addItemsForFilterType(filterName) {
        let filter = {};
        let dataset = storageService.getCurrentDataPoints();

        for (let i = 0; i < dataset.length; i++) {
            let key = dataset[i][filterName];

            if (!key) {
                return;
            }

            filter[key] = true;
        }

        let container = $('#available_box_' + filterName);
        container.html('');
        for (let i in filter) {
            container.append(dataExplorerHelper.createItem(null, 'filter', i, filterName));
        }

        dataExplorerHelper.addFilterRemoveButton();
    }
}

export const dataExplorerStorage = new DataExplorerStorage();
