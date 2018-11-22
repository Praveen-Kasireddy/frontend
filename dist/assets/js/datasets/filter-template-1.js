export const filterTemplate1 =
    {
        title: 'Awesome Template 1',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Revenue'
                    }
                ],
                in_chart: true
            },
            {
                name: 'row 2',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    },
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'blank row',
                type: 'blank'
            },
            {
                name: 'row 3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015'
                    },
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    }
                ],
                in_chart: true
            },
            {
                name: 'row 4',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Gross Profit'
                    }
                ],
                in_chart: true
            },
            {
                name: 'New Margin example',
                type: 'margin',
                year1: 'Cost of sales',
                year2: 'Revenue',
                in_chart: true
            },
            {
                name: 'New Formula example',
                type: 'formula',
                formula: 'AVERAGE(25,36)',
                in_chart: true
            },
            {
                name: 'New Formula example 2',
                type: 'formula',
                formula: 'MAX(R1,R2)',
            }
        ],
        columns: [
            {
                name: 'col 1',
                filters: [
                    {
                        dimension: 'time',
                        value: '2003 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'col 2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    },
                    {
                        dimension: 'quality',
                        value: 'Reported'
                    }
                ],
                in_chart: true
            },
            {
                name: 'blank col',
                type: 'blank',
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2015 GT',
                year2: '2016 GT',
            },
            {
                name: 'CAGR example',
                type: 'cagr',
                year1: '2015 GT',
                year2: '2016 GT',
                in_chart: true
            },
            {
                name: 'Delta example',
                type: 'delta',
                year1: '2015 GT',
                year2: '2016 GT'
            },
            {
                name: 'Custom formula example',
                type: 'formula',
                formula: 'SUM(C2,C5)',
                in_chart: true
            }
        ],
        globals_headline: [
            {
                name: 'g1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    }
                ]
            },
            {
                name: 'g2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2016 GT'
                    }
                ]
            }
        ],
        globals_a1: [
            {
                name: 'g3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    }
                ]
            },
            {
                name: 'g4',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Budget'
                    }
                ]

            }
        ],
        globals_hidden: [
            {
                name: 'g5',
                filters: [
                    {
                        dimension: 'unit',
                        value: 'EUR'
                    }
                ]
            }
        ],
        chart_options: [
            {
                _chartStackingMode: 'percent',
                _chartMode: 'line'
            }
        ]
    }
;