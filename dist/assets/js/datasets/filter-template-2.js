export const filterTemplate2 =
    {
        title: 'Awesome Template 2',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'ebitda GT'
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
                        value: '2016 GT'
                    }
                ]
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
                ]
            },

            {
                name: 'row 4',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Gross Profit'
                    }
                ]
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
                ]
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
                        value: '2015'
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
                _chartStackingMode: 'stacked',
                _chartMode: 'area'
            }
        ]
    };