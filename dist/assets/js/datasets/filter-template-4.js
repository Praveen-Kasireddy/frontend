export const filterTemplate4 =
    {
        title: 'Awesome Template 2',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Revenue'
                    },
                ]
            },
            {
                name: 'row 2',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Cost of Sales'
                    }
                ]
            },
            {
                name: 'row 3',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Gross Profit'
                    },
                ],
                in_chart: true
            },
            {
                name: 'row 4',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Other Income'
                    }
                ]
            },
            {
                name: 'row 5',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Selling and Distribution Expenses'
                    }
                ]
            },
            {
                name: 'row 6',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Administrative Expenses'
                    }
                ]
            },
            {
                name: 'row 7',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'R&D Expenses'
                    }
                ]
            },
            {
                name: 'row 8',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Other Expenses'
                    }
                ]
            },
            {
                name: 'row 9',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'EBITDA'
                    }
                ],
                in_chart: true
            },
            {
                name: 'row 10',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Margin'
                    }
                ],
                in_chart: true
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2016 GT',
                year2: '2017 GT',
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2017 GT',
                year2: '2018 GT',
            }
        ],
        columns: [
            {
                name: 'col 1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    },
                    {
                        dimension: 'time',
                        value: '2016 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'col 2',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    },
                    {
                        dimension: 'time',
                        value: '2017 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'col 3',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    },
                    {
                        dimension: 'time',
                        value: '2017 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2016 GT',
                year2: '2017 GT',
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2017 GT',
                year2: '2018 GT',
            }
        ],
        globals_headline: [
            {
                name: 'g1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Historical Profit'
                    }
                ]
            },
            {
                name: 'g2',
                filters: [
                    {
                        dimension: 'time',
                        value: 'Loss'
                    }
                ]
            }
        ],
        globals_a1: [
            {
                name: 'g3',
                filters: [
                    {
                        dimension: 'unit',
                        value: 'EUR'
                    }
                ]
            },
            {
                name: 'g4',
                filters: [
                    {
                        dimension: 'scale',
                        value: 'Million'
                    }
                ]

            }
        ],
        globals_hidden: [
        ],
        chart_options: [
            {
                _chartStackingMode: 'stacked',
                _chartMode: 'area'
            }
        ]
    };