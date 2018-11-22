import { common } from '../../Common';
import { storageService } from '../../services/StorageService';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerVirtualTable } from './DataExplorerVirtualTable';

/**
 * Class to render a SVG chart based on the HighCharts library.
 */
class DataExplorerRenderChart {
    constructor() {
        this._chart = null;
        this.outputMode = 'both';
        this.chartMode = 'bar';
        this.chartStackingMode = '';
    }

    renderChart() {
        // Convert table data into chart data.
        let series = [];
        let categories = [];

        if (this.chartMode === 'pie') {
            let data = [];

            for (let i = 0; i < dataExplorerVirtualTable.tableData.length; i++) {
                let row = dataExplorerVirtualTable.tableData[i];

                if (!dataExplorerHelper.isChartEnabledForRow(i + 1)) {
                    continue;
                }

                for (let j = 1; j < row.length; j++) {
                    if (!dataExplorerHelper.isChartEnabledForColumn(j)) {
                        continue;
                    }

                    let value = row[j].value;
                    value = typeof value === 'undefined' ? 0 : value;
                    if (value >= 0) {
                        data.push({
                            name: $('#row_box > .item')
                                .eq(i)
                                .find('input')
                                .val(),
                            y: value
                        });
                    }

                    break;
                }
            }

            series = [
                {
                    data: data
                }
            ];
        } else {
            for (let i = 0; i < dataExplorerVirtualTable.tableData.length; i++) {
                let row = dataExplorerVirtualTable.tableData[i];
                let data = [];

                const analysis = storageService.getCurrentProject().analyses[dataExplorerAnalyses.currentAnalysisId];
                if (!dataExplorerHelper.isChartEnabledForRow(analysis.tableRowToCardNo[i + 1] + 1)) {
                    continue;
                }

                for (let j = 1; j < row.length; j++) {
                    if (!dataExplorerHelper.isChartEnabledForColumn(j)) {
                        continue;
                    }

                    let value = row[j].value;
                    value = typeof value === 'undefined' ? 0 : value;
                    data.push(value);
                }

                series.push({
                    name: row[0].value,
                    data: data
                });
            }

            let cols = $('#column_box > .item');
            for (let i = 0; i < cols.length; i++) {
                if (!dataExplorerHelper.isChartEnabledForItem(cols[i])) {
                    continue;
                }

                categories.push(
                    $(cols[i])
                        .find('input')
                        .val()
                );
            }
        }

        if (this._chart) {
            this._chart.destroy();
        }

        this._chart = Highcharts.chart('outputChart', {
            chart: {
                type: this.chartMode
            },
            plotOptions: {
                series: {
                    stacking: this.chartStackingMode
                },
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    showInLegend: true,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            series: series,
            tooltip: {
                formatter: function() {
                    let val = this.y;
                    val /= parseFloat($('#scale').val());
                    val = common.formatNumber(val);

                    return val;
                }
            }
        });
    }
}

export const dataExplorerRenderChart = new DataExplorerRenderChart();
