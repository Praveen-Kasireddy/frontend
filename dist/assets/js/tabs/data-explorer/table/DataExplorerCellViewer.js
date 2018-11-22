import { isEqual } from 'lodash';
import { sourceDataPoints } from '../../../tabs/source-data/SourceDataPoints';
import { dataExplorerFormulas } from '../DataExplorerFormulas';

class DataExplorerCellViewer {
    constructor() {
        /** @type {VirtualTableCell} */
        this.currentCellData = null;
        this.formulaCellViewer = $('#dataExplorerFormulaCellViewer');
        this.formulaElement = this.formulaCellViewer.find('._formula');
        this.formulaElement.on('click', 'i', e => {
            const icon = $(e.target);
            let filters;
            try {
                filters = JSON.parse(icon.attr('data-args'));
            } catch (e) {
                filters = {};
            }

            let dataPointIds = [];
            this.currentCellData.dataPointIdsPerQuery.forEach(data => {
                if (isEqual(filters, data.filters)) {
                    dataPointIds = data.ids;
                }
            });

            this.formulaCellViewer.modal('hide');
            this.showDataPointsViewer(dataPointIds);
        });
    }

    /**
     * @param {VirtualTableCell} cellData
     */
    showCellViewer(cellData) {
        if (cellData.dataPointIdsPerQuery.length < 2) {
            this.showDataPointsViewer(cellData.dataPointIds);
        } else {
            this.showFormulaCellViewer(cellData);
        }
    }

    showDataPointsViewer(dataPointIds) {
        $('#main_nav_tabs a[href="#source_data"]').trigger('click');
        $('._mode > label:nth-of-type(2)').trigger('click');
        $('body').addClass('showing-multiple-data-values');
        $('body').append('<div class="multiple-data-close-button"><i class="fa fa-chevron-left"></i> Back</div>');
        $('#source_data_data_points .input-group, ._mode').css('visibility', 'hidden');

        $('.multiple-data-close-button').on('click', () => {
            $('#main_nav_tabs a[href="#output_table"]').trigger('click');

            this.removeMultipleDataPointsFilter();
        });

        sourceDataPoints.setIdFilter(dataPointIds);

        $('#main_nav_tabs a').on('click', () => {
            this.removeMultipleDataPointsFilter();
        });

        sourceDataPoints.sync();
    }

    removeMultipleDataPointsFilter() {
        sourceDataPoints.setIdFilter([]);
        $('.multiple-data-close-button').remove();
        $('#source_data_data_points .input-group, ._mode').css('visibility', 'visible');

        sourceDataPoints.sync();
    }

    showFormulaCellViewer(cellData) {
        this.currentCellData = cellData;
        const result = dataExplorerFormulas.convertFormulaToHtml(cellData.formula);
        this.formulaElement.html(result);
        this.formulaCellViewer.modal('show');
    }
}

export const dataExplorerCellViewer = new DataExplorerCellViewer();
