import { common } from '../../Common';
import { storageService } from '../../services/StorageService';
import { dataExplorerHelper } from './DataExplorerHelper';

class DataExplorerQueryBuilder {
    constructor() {
        this.filters = {};
        this.formula = '';
        this.dimensionInputs = {};

        // DOM
        this.rootElement = $('#dataExplorerQueryBuilder');
        this.dimensionsElement = this.rootElement.find('._dimensions');
        this.dimensionsTemplate = this.dimensionsElement.find('._template').detach();
        this.formulaElement = this.rootElement.find('._formula ._text');
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this.rootElement.find('._preview')[0], {
                isReadOnly: true,
                selectionMode: 'Row',
                itemsSource: [],
                autoGenerateColumns: false,
                formatItem: (s, e) => {
                    if (e.panel === s.cells) {
                        const item = s.rows[e.row].dataItem;
                        const binding = s.columns[e.col].binding;

                        switch (binding) {
                            case 'value':
                            case '__normalized_value':
                                if (e.cell.childNodes[0]) {
                                    e.cell.childNodes[0].nodeValue = common.formatNumber(item[binding]);
                                }
                                break;
                        }
                    }
                }
            });

        // Events
        this.rootElement.on('hidden.bs.modal', () => {
            this.onHidden();
        });
        this.rootElement.on('shown.bs.modal', () => {
            this.onShown();
        });
        this.rootElement.find('._save-changes').on('click', () => {
            this.saveChanges();
        });
    }

    /**
     * Open the visual query builder.
     * @param filters Selected values for each dimension.
     * @param callback Function to call once the user hits "Save"
     */
    open(filters, callback) {
        // Save callback.
        this.callback = callback;

        // Add dimensions.
        const project = storageService.getCurrentProject();
        const dimensions = project.getDimensions();
        dimensions.forEach(dimension => {
            if (dimension.slug === 'value' || dimension.slug === 'scale') {
                return;
            }

            // Label
            const d = this.dimensionsTemplate.clone();
            d.find('._label').html(dimension.label);

            // Input
            const values = common.getUniqueValues(project.dataPoints, dimension.slug);
            const input = new wijmo.input.MultiSelect(d.find('._dropdown')[0], {
                placeholder: 'Inherit',
                // isEditable: true,
                itemsSource: values,
                onCheckedItemsChanged: () => {
                    this.updateFormula();
                    this.updateFlexGrid();
                }
            });
            input.checkedItems = filters.hasOwnProperty(dimension.slug) ? filters[dimension.slug] : [];
            this.dimensionInputs[dimension.slug] = input;

            // Append.
            this.dimensionsElement.append(d);
        });

        // Show modal.
        this.rootElement.modal('show');
    }

    saveChanges() {
        // Use callback.
        this.callback(this.formula);

        // Hide modal.
        this.rootElement.modal('hide');
    }

    updateFormula() {
        const formula = {};

        // Consider each dimension input.
        for (const dimension in this.dimensionInputs) {
            const input = this.dimensionInputs[dimension];

            // Ignore inputs without any checked items.
            if (input.checkedItems.length === 0) {
                continue;
            }

            // Save checked items.
            formula[dimension] = input.checkedItems;
        }

        // Save as final formula.
        this.filters = formula;
        this.formula = 'QUERY(' + JSON.stringify(formula) + ')';
        this.formulaElement.val(this.formula);
    }

    updateFlexGrid() {
        const project = storageService.getCurrentProject();

        // Set columns.
        {
            this.flexgrid.columns.length = 0;

            const gridCol = new wijmo.grid.Column();
            gridCol.binding = '__normalized_value';
            gridCol.header = 'Normalized Value';
            this.flexgrid.columns.push(gridCol);

            project.dimensions.forEach(dimension => {
                const gridCol = new wijmo.grid.Column();
                gridCol.binding = dimension.slug;
                gridCol.header = dimension.label;
                this.flexgrid.columns.push(gridCol);
            });
        }

        // Fetch items.
        const dataPoints = dataExplorerHelper.getMatchingDataPoints(project.dataPoints, this.filters);
        dataPoints.forEach(item => {
            // Normalize values.
            item['__normalized_value'] = item.value * common.parseScale(item.scale) * common.parseInverse(item.inverse);
        });
        this.flexgrid.itemsSource = dataPoints;
    }

    onHidden() {
        // Remove dimensions.
        for (const dimension in this.dimensionInputs) {
            const input = this.dimensionInputs[dimension];
            input.dispose();
        }
        this.dimensionInputs = {};
        this.dimensionsElement.html('');
    }

    onShown() {
        this.updateFormula();
        this.updateFlexGrid();
    }
}

export const dataExplorerQueryBuilder = new DataExplorerQueryBuilder();
