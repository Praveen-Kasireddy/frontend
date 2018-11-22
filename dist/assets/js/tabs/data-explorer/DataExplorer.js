import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { DataExplorerCellFormulas } from './DataExplorerCellFormulas';
import { dataExplorerFormulas } from './DataExplorerFormulas';
import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerImport } from './DataExplorerImport';
import { dataExplorerRenderChart } from './DataExplorerRenderChart';
import { dataExplorerSecondarySidebar } from './DataExplorerSecondarySidebar';
import { dataExplorerSections } from './DataExplorerSections';
import { dataExplorerSidebar } from './DataExplorerSidebar';
import { dataExplorerStorage } from './DataExplorerStorage';
import { dataExplorerTemplate } from './DataExplorerTemplate';
import { dataExplorerVirtualTable } from './DataExplorerVirtualTable';

class DataExplorer {
    constructor() {
        this.table = null;
        this.columnSequence = 1;
        this.rowSequence = 1;
        this.dataExplorerCellFormulas = new DataExplorerCellFormulas();
        this.SET_ROW = 'row';
        this.SET_COLUMN = 'column';
    }

    getNextInSequence(set) {
        switch (set) {
            case this.SET_ROW:
                return 'R' + this.rowSequence++;

            case this.SET_COLUMN:
                return 'C' + this.columnSequence++;
        }
    }

    addFilter(item, set) {
        let section = dataExplorerSections.addFilterSection(
            $('.item-group[data-set="' + set + '"]'),
            item,
            this.getNextInSequence(set)
        );

        if (item instanceof jQuery) {
            // Add item inside the filter section.
            item = item.clone();
            item.find('._id').remove();
            section.find('._filters').append(item);
        }

        return section;
    }

    addFormula(formula, set) {
        return dataExplorerFormulas.addFormulaSection(
            $('.item-group[data-set="' + set + '"]'),
            this.getNextInSequence(set),
            formula
        );
    }

    init() {
        // Create this in order to drag-n-drop items back to the Available box.
        Sortable.create(
            available_box,
            $.extend({}, dataExplorerHelper.sortableArgs, {
                sort: false,
                onAdd: function(evt) {
                    $(evt.item).remove();
                },
                handle: '.non-existent-class',
                filter: '.remove-filter'
            })
        );

        // Global filters.
        Sortable.create(
            filter_box_a1,
            $.extend({}, dataExplorerHelper.sortableArgs, {
                sort: false,
                filter: '.remove-filter'
            })
        );
        Sortable.create(
            filter_box_headline,
            $.extend({}, dataExplorerHelper.sortableArgs, {
                sort: false,
                filter: '.remove-filter'
            })
        );
        Sortable.create(
            filter_box_hidden,
            $.extend({}, dataExplorerHelper.sortableArgs, {
                sort: false,
                filter: '.remove-filter'
            })
        );

        Sortable.create(
            row_box,
            $.extend({}, dataExplorerHelper.sortableArgs, {
                onAdd: evt => {
                    let item = $(evt.item);
                    let section3;

                    switch (evt.item.attributes[2].value) {
                        case 'Margin':
                            section3 = dataExplorerSections.addMarginRow();
                            break;

                        case 'Custom Formula':
                            section3 = dataExplorer.addFormula('', this.SET_ROW);
                            break;

                        case 'Blank':
                            section3 = dataExplorer.addFilter(item, this.SET_ROW);
                            section3.attr('data-value', 'Blank');
                            break;

                        default:
                            section3 = dataExplorer.addFilter(item, this.SET_ROW);
                            break;
                    }

                    section3.insertAfter(item);
                    item.remove();
                },
                filter: '.remove-filter, ._prevent-sort'
            })
        );
        Sortable.create(
            column_box,
            $.extend({}, dataExplorerHelper.sortableArgs, {
                onAdd: evt => {
                    let item = $(evt.item);
                    let section2;

                    switch (evt.item.attributes[2].value) {
                        case 'Delta':
                            section2 = dataExplorerSections.addYoyColumn();
                            break;
                        case 'YoY':
                            section2 = dataExplorerSections.addYoyColumn(null, null, true);
                            break;
                        case 'CAGR':
                            section2 = dataExplorerSections.addCagrColumn();
                            break;
                        case 'Custom Formula':
                            section2 = dataExplorer.addFormula('', this.SET_COLUMN);
                            break;
                        case 'Blank':
                            section2 = dataExplorer.addFilter(item, this.SET_COLUMN);
                            section2.attr('data-value', 'Blank');
                            break;
                        default:
                            section2 = dataExplorer.addFilter(item, this.SET_COLUMN);
                            break;
                    }
                    section2.insertAfter(item);
                    item.remove();
                },
                filter: '.remove-filter, ._prevent-sort'
            })
        );

        dataExplorerSecondarySidebar.init();

        // Events
        $('#scale').on('change', function() {
            dataExplorerStorage.save(dataExplorerAnalyses.currentAnalysisId);
            dataExplorerVirtualTable.updateTable();
        });

        $('._outputMode input').on('change', function() {
            if (!$(this).prop('checked')) {
                return;
            }

            dataExplorerRenderChart.outputMode = $(this).val();

            switch (dataExplorerRenderChart.outputMode) {
                case 'table':
                    $('#pivot_wrapper').show();
                    $('#outputChart').hide();
                    $('.chart-related-data').hide();
                    break;

                case 'chart':
                    $('#pivot_wrapper').hide();
                    $('#outputChart').show();
                    $('.chart-related-data').show();
                    break;
            }

            dataExplorerVirtualTable.renderOutputTableOrChart();
        });

        $('._chartMode input').on('change', function() {
            if (!$(this).prop('checked')) {
                return;
            }

            dataExplorerRenderChart.chartMode = $(this).val();

            dataExplorerVirtualTable.renderOutputTableOrChart();
        });

        $('._chartStackingMode input').on('change', function() {
            if (!$(this).prop('checked')) {
                return;
            }

            dataExplorerRenderChart.chartStackingMode = $(this).val();

            dataExplorerVirtualTable.renderOutputTableOrChart();
        });

        // Trigger template loading.
        $('#exampleFormControlSelect1').on('change', e => {
            dataExplorerTemplate.loadTemplate(
                parseInt(
                    $(e.target)
                        .find(':selected')
                        .attr('data-source-template')
                ) - 1
            );
        });

        $('.main_sidebar').on('click', e => {
            let target = $(e.target);
            let className = target.attr('class');

            if (className === undefined) {
                return;
            }

            let result = target.hasClass('remove-filter');

            if (result) {
                if (target.parent().hasClass('global-filter')) {
                    target.parent().remove();
                } else {
                    let card = target.closest('.item-with-filters');
                    target.closest('li.item').remove();
                    dataExplorerSections.syncTitle(card);
                }

                dataExplorerHelper.saveAndUpdate();
            }
        });

        dataExplorerSections.init();
        dataExplorerSidebar.init();
        dataExplorerImport.init();
    }
}

export const dataExplorer = new DataExplorer();
