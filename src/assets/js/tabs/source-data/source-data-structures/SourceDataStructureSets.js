import { cloneDeep } from 'lodash';
import { common } from '../../../Common';
import { Dimension } from '../../../entities/Dimension';
import { SourceDataStructureValidator } from '../../../tabs/source-data/source-data-structures/SourceDataStructureValidator';

export class SourceDataStructureSets {
    constructor(container, saveHandler) {
        this.container = container;
        /** @type {Function} */
        this.saveHandler = saveHandler;
        /** @type {Project} */
        this.project = null;
        this.validFilterSelect = this.container.find('._filterByState select');
        this.autoReconcileButton = this.container.find('._auto-reconcile');
        this.setsTable = this.container.find('._setsTable');
        this.modal = this.container.find('.modal');
        this.sourceDataStructureValidator = new SourceDataStructureValidator();
        this.dataset = null;
        this.validFilter = 'invalid';
        /** @type {Dimension} */
        this.dimension = null;
        this.inUpdatedLayout = false;
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this.setsTable, {
                isReadOnly: true,
                allowSorting: false,
                selectionMode: 'None',
                itemsSource: [],
                autoGenerateColumns: false,
                childItemsPath: 'children',
                formatItem: (s, e) => {
                    // Row headers
                    if (e.panel.cellType === wijmo.grid.CellType.RowHeader) {
                        const item = s.rows[e.row].dataItem;
                        if (item.children && !item.valid) {
                            // Create checkbox.
                            e.cell.innerHTML = '<input type="checkbox">';
                            const checkbox = e.cell.firstChild;
                            checkbox.checked = item.selected ? true : false;

                            // On click, update selection for this row and all children as well.
                            checkbox.addEventListener('change', () => {
                                this.flexgrid.beginUpdate();
                                item.selected = checkbox.checked;
                                item.children.forEach(child => {
                                    child.selected = checkbox.checked;
                                });
                                this.flexgrid.endUpdate();
                                this.updateAutoReconcileButton();
                            });
                        } else {
                            e.cell.innerHTML = '';
                        }
                    }

                    // Top-left cell
                    if (e.panel.cellType === wijmo.grid.CellType.TopLeft) {
                        // Count selected items.
                        let selected = 0,
                            total = 0;
                        this.flexgrid.rows.forEach(row => {
                            const item = row.dataItem;
                            if (!item.children || item.valid) {
                                return;
                            }
                            if (item.selected) {
                                selected++;
                            }
                            total++;
                        });

                        // Create checkbox.
                        e.cell.innerHTML = '<input type="checkbox">';
                        const checkbox = e.cell.firstChild;
                        checkbox.checked = selected > 0 && selected === total;
                        checkbox.indeterminate = selected > 0 && selected !== total;

                        // On click, update selection for all rows.
                        checkbox.addEventListener('change', () => {
                            this.flexgrid.beginUpdate();
                            this.flexgrid.rows.forEach(row => {
                                const item = row.dataItem;
                                if (!item.children || item.valid) {
                                    return;
                                }
                                item.selected = checkbox.checked;
                                item.children.forEach(child => {
                                    child.selected = checkbox.checked;
                                });
                            });
                            this.flexgrid.endUpdate();
                            this.updateAutoReconcileButton();
                        });
                    }

                    // Regular cells
                    if (e.panel === s.cells) {
                        const sourceFiles = this.project.sourceFiles;
                        const item = s.rows[e.row].dataItem;
                        const binding = s.columns[e.col].binding;

                        // Update "source" column.
                        switch (binding) {
                            case 'source':
                                // Get name.
                                if (item.source === 'manual') {
                                    e.cell.innerHTML = 'Manual';
                                } else if (item.source in sourceFiles) {
                                    e.cell.innerHTML = sourceFiles[item.source].name;
                                }
                                break;

                            case 'value':
                                if (!item.children && !item.isDelta) {
                                    e.cell.innerHTML = common.formatNumber(item.value);
                                }
                                break;

                            case '__normalized_value':
                                if (!item.children) {
                                    e.cell.innerHTML = common.formatNumber(item['__normalized_value']);
                                }
                                break;

                            case 'scale':
                                if (item.scale) {
                                    e.cell.innerHTML = item.scale;
                                }
                                break;
                        }

                        // Make parents bold.
                        if (item.children) {
                            e.cell.style.fontWeight = 'bold';
                        } else {
                            e.cell.style.fontWeight = '';
                        }

                        if (item.isDelta) {
                            if (common.isDeltaZero(item['__normalized_value'])) {
                                e.cell.style.color = 'green';
                            } else {
                                e.cell.style.color = 'red';
                            }
                        } else {
                            // Apply selection.
                            e.cell.style.color = item.selected ? 'white' : '';
                        }

                        // Parent or last in set?
                        if (
                            (binding === '__normalized_value' || binding === this.dimension.slug) &&
                            (item._isLastParent || item._isLast)
                        ) {
                            e.cell.style.borderBottom = '2px solid #aaa';
                        } else {
                            e.cell.style.borderBottom = '';
                        }

                        // Apply selection.
                        e.cell.style.background = item.selected ? '#80adbf' : '';
                    }
                },
                updatedLayout: () => {
                    if (this.inUpdatedLayout) {
                        this.inUpdatedLayout = false;
                    } else {
                        this.inUpdatedLayout = true;
                        this.flexgrid.autoSizeRow(0, true);
                    }
                }
            });

        // Filter
        this.validFilterSelect.on('change', () => {
            this.validFilter = this.validFilterSelect.val();
            this.flexgrid.collectionView.refresh();
        });

        // Show auto-reconcile modal.
        this.autoReconcileButton.on('click', () => {
            // Populate values.
            const list = this.container.find('._list-of-inputs');
            list.html('');
            list.append(
                '<div><label><input type="radio" value="' +
                    this.dataset.value +
                    '" name="attribute"> ' +
                    this.dataset.value +
                    ' (parent)</label></div>'
            );
            this.dataset.childValues.forEach(child => {
                list.append(
                    '<div><label><input type="radio" value="' +
                        child +
                        '" name="attribute"> ' +
                        child +
                        '</label></div>'
                );
            });

            this.modal.modal('show');
        });

        // Apply auto-reconciliation.
        this.modal.find('._apply').on('click', () => {
            const dfar = this.project.getDimensionForAutoReconciliations();

            // Get selected options.
            let value = this.modal.find('input[name=attribute]:checked').attr('value');
            if (value === '_new') {
                value = this.modal.find('input[name=new_attribute]').val();

                if (value) {
                    this.project.addDataStructure(
                        this.dimension.slug,
                        value,
                        this.dataset.value,
                        this.dataset.group,
                        ''
                    );
                    this.dataset.childValues.push(value);
                }
            }
            if (!value) {
                return;
            }

            // Take each selected group.
            this.flexgrid.rows.forEach(row => {
                const group = row.dataItem;

                if (group.valid || !group.selected) {
                    return;
                }

                // Get delta.
                let delta = 0;
                if (value === this.dataset.value) {
                    delta = -group.delta;
                } else {
                    delta = group.delta;
                }

                // Get data-point that needs to be adjusted.
                let dataPoint = Object.assign({}, group.dimensions);
                dataPoint[dfar.dimension] = dfar.value;
                dataPoint.source = 'manual';
                dataPoint[this.dimension.slug] = value;
                let matchingDataPoint = this.project.getMatchingDataPoint(dataPoint);
                if (matchingDataPoint) {
                    dataPoint = Object.assign({}, matchingDataPoint);
                } else {
                    dataPoint.value = 0;
                    dataPoint.scale = 1;
                }
                dataPoint.value += delta / dataPoint.scale;

                // Persist changes.
                this.project.addDataPoint(dataPoint);
            });

            // Force update of sets.
            delete this.dataset.groups;
            this.saveHandler();

            // Close modal.
            this.modal.modal('hide');
        });
    }

    setProject(project) {
        this.project = project;
        this.sourceDataStructureValidator.setProject(project);
    }

    sync() {
        this.setData(this.dataset);
    }

    setData(dataset) {
        dataset = cloneDeep(dataset);
        this.dataset = dataset;
        if (!dataset) {
            return;
        }
        this.dimension = dataset.dimension;

        if (!dataset.groups) {
            const result = this.sourceDataStructureValidator.validateParentAndChildren(
                this.dimension.slug,
                dataset.value,
                dataset.childValues
            );
            Object.assign(dataset, result);
        }

        const items = [];
        dataset.groups.forEach(row => {
            const children = [];

            // Add child data-points.
            for (const i in row.dataPoints) {
                const dataPoint = row.dataPoints[i];
                dataPoint['__normalized_value'] =
                    dataPoint.value * common.parseScale(dataPoint.scale) * common.parseInverse(dataPoint.inverse);
                children.push(dataPoint);
            }

            // Add child for delta value.
            const child = {};
            child['__normalized_value'] = row.delta;
            child[this.dimension.slug] = 'Delta';
            child.isDelta = true;
            children.push(child);

            // Add parent.
            const item = Object.assign({}, row, {
                attribute: 'Set #' + (items.length + 1),
                valid: row.valid,
                children: children
            });

            items.push(item);
        });
        this.flexgrid.itemsSource = items;

        // Get columns.
        let dimensions = this.project.getDimensions();
        {
            dimensions.push(
                new Dimension({
                    slug: 'source',
                    label: 'Source'
                })
            );

            dimensions.unshift(
                new Dimension({
                    slug: '__normalized_value',
                    label: 'Normalized Value',
                    dataType: wijmo.DataType.Number
                })
            );

            // Always put the selected dimension on the 1st column.
            let selectedDimension;
            for (let i = 0; i < dimensions.length; i++) {
                if (dimensions[i].slug === this.dimension.slug) {
                    selectedDimension = dimensions[i];
                    dimensions.splice(i, 1);
                    break;
                }
            }
            dimensions.splice(0, 0, selectedDimension);
        }

        // Add columns in flexgrid.
        this.flexgrid.columns.length = 0;
        dimensions.forEach(dimension => {
            const col = new wijmo.grid.Column();
            col.binding = dimension.slug;
            col.header = dimension.label;
            if (dimension.dataType) {
                col.dataType = dimension.dataType;
            }
            this.flexgrid.columns.push(col);
        });

        // Filter
        this.flexgrid.collectionView.filter = item => {
            if (this.validFilter === 'valid') {
                return item.valid;
            }

            if (this.validFilter === 'invalid') {
                return !item.valid;
            }

            return true;
        };
        if (!dataset.invalid && this.validFilter === 'invalid') {
            this.validFilterSelect.val('all').trigger('change');
        }
        this.updateAutoReconcileButton();
    }

    updateAutoReconcileButton() {
        const selected = this.flexgrid.rows.reduce((selected, row) => {
            if (row.dataItem.selected) {
                selected++;
            }

            return selected;
        }, 0);

        this.autoReconcileButton.attr('disabled', selected === 0);
    }
}
