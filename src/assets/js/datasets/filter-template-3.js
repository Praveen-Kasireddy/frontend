export const filterTemplate3 =
    {
        title: 'Awesome Template 3',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Revenue'
                    }
                ]
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
                ]
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
                        value: '2016'
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
                _chartStackingMode: 'normal',
                _chartMode: 'pie'
            }
        ]
    };