import { filterTemplate1 } from '../../datasets/filter-template-1';
import { filterTemplate2 } from '../../datasets/filter-template-2';
import { filterTemplate3 } from '../../datasets/filter-template-3';
import { filterTemplate4 } from '../../datasets/filter-template-4';
import { filterTemplate5 } from '../../datasets/filter-template-5';
import { storageService } from '../../services/StorageService';
import { dataExplorer } from './DataExplorer';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerSections } from './DataExplorerSections';
import { dataExplorerStorage } from './DataExplorerStorage';
import { dataExplorerVirtualTable } from './DataExplorerVirtualTable';

class DataExplorerTemplate {
    checkFormulaYearsGlobalTerms(item, termsToReplace, filteredTemplate) {
        const years = ['year1', 'year2'];
        let foundMatch;

        for (let i = 0; i < years.length; i++) {
            foundMatch = false;
            let year = years[i];
            let parameter = 'time';

            if (item.type === 'margin') {
                parameter = 'attribute';
            }

            for (let yearItem in termsToReplace[parameter]) {
                let intermediateTerm = termsToReplace[parameter];
                if (item[year] !== intermediateTerm[yearItem].globalTerm) {
                    continue;
                }

                foundMatch = true;
                item.localTerm = item.localTerm || {};
                item.localTerm[year] = intermediateTerm[yearItem].attribute;

                break;
            }
        }

        if (foundMatch) {
            filteredTemplate.push(item);
        }
    }

    addKpiFromTemplate(item) {
        $(
            `.main_sidebar .row-or-column-card[data-section-type="${item.type}"] ._year1 option[value="${
                item.localTerm.year1
            }"]`
        ).prop('selected', 'selected');
        $(
            `.main_sidebar .row-or-column-card[data-section-type="${item.type}"] ._year2 option[value="${
                item.localTerm.year2
            }"]`
        ).prop('selected', 'selected');

        dataExplorerSections.syncTitle($(`.main_sidebar .row-or-column-card[data-section-type=${item.type}]`));
    }

    addCardsFromTemplate(template, termsToReplace, set) {
        // Step 1: identify valid filters for rows/columns
        let filteredTemplate = [];
        const key = set + 's';

        // Iterate through each row/column
        for (let i = 0; i < template[key].length; i++) {
            let item = template[key][i];
            let temporaryRow = [];

            if (item.hasOwnProperty('type')) {
                switch (item.type) {
                    case 'yoy':
                    case 'delta':
                    case 'cagr':
                    case 'margin':
                        this.checkFormulaYearsGlobalTerms(item, termsToReplace, filteredTemplate);
                        break;

                    case 'formula':
                    case 'blank':
                        filteredTemplate.push(item);
                        break;
                }
            } else {
                // Iterate through each row/column's filters
                for (let j = 0; j < item.filters.length; j++) {
                    let type = item.filters[j].dimension;
                    let value = item.filters[j].value;

                    let matchesGlobalTerm = undefined;

                    // If dimension has Global Term
                    if (termsToReplace.hasOwnProperty(type)) {
                        for (let instance in termsToReplace[type]) {
                            // If Global Term matches supplied value, display user selected synonim (local value)
                            if (termsToReplace[type][instance].globalTerm === value) {
                                value = termsToReplace[type][instance].attribute;
                                matchesGlobalTerm = true;
                                break;
                            } else {
                                matchesGlobalTerm = false;
                            }
                        }
                    }
                    // If filter Local Term needs to match Global Term but does not, don't display it
                    if (matchesGlobalTerm === false) {
                        continue;
                    }

                    temporaryRow.push({ type: type, value: value });
                }

                if (item.hasOwnProperty('in_chart')) {
                    temporaryRow.in_chart = true;
                }

                filteredTemplate.push(temporaryRow);
            }
        }

        // Step 2: display valid filters in main sidebar
        for (let i = 0; i < filteredTemplate.length; i++) {
            let item = filteredTemplate[i];

            if (item.hasOwnProperty('type')) {
                switch (item.type) {
                    case 'yoy':
                    case 'delta':
                        let percentMode = item.type === 'yoy';
                        dataExplorerSections.addYoyColumn(item.year1, item.year2, percentMode);
                        this.addKpiFromTemplate(item);
                        break;

                    case 'cagr':
                        dataExplorerSections.addCagrColumn(item.year1, item.year2);
                        this.addKpiFromTemplate(item);
                        break;

                    case 'margin':
                        dataExplorerSections.addMarginRow(item.year1, item.year2);
                        this.addKpiFromTemplate(item);
                        break;

                    case 'formula':
                        dataExplorer.addFormula(item.formula, set);
                        break;

                    case 'blank':
                        const currentItem = dataExplorer.addFilter(item, set);

                        $(currentItem)
                            .attr('data-value', 'Blank')
                            .find('._title')
                            .attr('value', 'Blank');
                        break;
                }
            } else if (item.length > 0) {
                const section = dataExplorer.addFilter(null, set);

                for (let j = 0; j < item.length; j++) {
                    let filterItem = dataExplorerHelper.createItem(null, 'filter', item[j].value, item[j].type);
                    section.find('._filters').append(filterItem);
                }

                dataExplorerSections.syncTitle(section);
            }

            this.showInChart(item, set, i);
        }
    }

    // Load chart display options if present in template.
    loadChartOptions(template) {
        if (!template.hasOwnProperty('chart_options')) {
            return;
        }

        for (let key in template.chart_options[0]) {
            if (template.chart_options[0].hasOwnProperty(key)) {
                $(`.${key}`)
                    .find(`input[value="${template.chart_options[0][key]}"]`)
                    .trigger('click');
            }
        }
    }

    // Load template items
    showInChart(item, set, i) {
        i = i + 1;

        let itemChartOption = $(`#main_sidebar_${set}s`).find(`.row-or-column-card:nth-child(${i}) ._button._chart`);
        if (item.hasOwnProperty('in_chart')) {
            if (itemChartOption.attr('data-checked', false)) {
                itemChartOption.trigger('click');
            }
        } else {
            if (itemChartOption.attr('data-checked', true)) {
                itemChartOption.trigger('click');
            }
        }
    }

    // Template specifics.
    loadTemplate(templateSource) {
        const templateArray = [filterTemplate1, filterTemplate2, filterTemplate3, filterTemplate4, filterTemplate5];
        const template = templateArray[templateSource];

        // Get all filter-type properties
        const dimensions = storageService.getCurrentProject().getDimensions();

        let termsToReplace = {};
        for (let i = 0; i < dimensions.length; i++) {
            // Filter-types that have a global term
            if (dimensions[i].hasGlobalTerms) {
                // Filter type
                let dimensionType = dimensions[i].slug;

                // All data structures of that filter-type
                termsToReplace[dimensionType] = storageService
                    .getCurrentProject()
                    .getDataStructuresForDimension(dimensionType);
            }
        }

        // Empty columns and rows
        $('#row_box, #column_box').empty();

        // Reset rows and columns counter to 1
        dataExplorer.columnSequence = 1;
        dataExplorer.rowSequence = 1;

        // Add rows from template
        this.addCardsFromTemplate(template, termsToReplace, dataExplorer.SET_ROW);

        // Add columns from template
        this.addCardsFromTemplate(template, termsToReplace, dataExplorer.SET_COLUMN);

        // Add global filters from template
        $('#filter_box_headline, #filter_box_a1, #filter_box_hidden').html('');

        const globalsSections = ['globals_headline', 'globals_a1', 'globals_hidden'];

        for (let g = 0; g < globalsSections.length; g++) {
            if (template[globalsSections[g]].length > 0) {
                for (let i = 0; i < template[globalsSections[g]].length; i++) {
                    let filterData = template[globalsSections[g]][i].filters[0];

                    let value = filterData.value;
                    let type = filterData.dimension;

                    if (
                        termsToReplace.hasOwnProperty(type) &&
                        termsToReplace[type].hasOwnProperty(value) &&
                        termsToReplace[type][value].globalTerm
                    ) {
                        value = termsToReplace[type][value].globalTerm;
                    }

                    let filter = $(
                        '.secondary_sidebar .item[data-filter-type="' + type + '"][data-value="' + value + '"]'
                    );
                    $(`.global-filter-container:nth-of-type(${g + 1}) ul`).append(filter.clone());
                }
            }
        }

        this.loadChartOptions(template);

        dataExplorerHelper.addFilterRemoveButton();

        dataExplorerStorage.save(dataExplorerAnalyses.currentAnalysisId);

        dataExplorerVirtualTable.updateTable();
    }
}

export const dataExplorerTemplate = new DataExplorerTemplate();
