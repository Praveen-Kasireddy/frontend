import { cloneDeep, get } from 'lodash';
import { common } from '../../Common';
import { constants } from '../../Constants';
import { dimensionTypesService } from '../../services/DimensionTypesService';
import { storageService } from '../../services/StorageService';
import { sourceDataPointsSidebar } from './SourceDataPointsSidebar';
import { sourceDataService } from './SourceDataService';

class SourceDataPoints {
    constructor() {
        this.flexgrid = null;
        this.inUpdatedLayout = false;
        this.idFilter = [];
        this.columnDefs = [];
        this.scale = 1;
    }

    init() {
        sourceDataPointsSidebar.init();

        this.container = $('#source_data_data_points');
        this.rowCounter = $('#_data-points-counter');

        this.columnsSelect = new wijmo.input.MultiSelect(this.container.find('._column-selector')[0], {
            placeholder: 'Select Columns',
            itemsSource: [],
            headerFormat: '{count} columns selected',
            displayMemberPath: 'label',
            checkedMemberPath: 'selected',
            onCheckedItemsChanged: () => {
                this.updateColumns();

                // Odd, but otherwise the filters aren't updated visually (i.e. the "wj-filter-on" classes aren't added).
                this.flexGridFilter.filterDefinition = this.flexGridFilter.filterDefinition;
            }
        });

        this.collectionView = new wijmo.collections.CollectionView([], {
            filter: item => {
                // Filter by ID.
                const matchesId = this.idFilter.length === 0 || this.idFilter.indexOf(item.id) !== -1;

                return matchesId;
            }
        });

        this.flexgrid = new wijmo.grid.FlexGrid('#source_data_all_data_table', {
            isReadOnly: false,
            selectionMode: 'Row',
            itemsSource: this.collectionView.items,
            autoGenerateColumns: false,
            formatItem: (s, e) => {
                if (e.panel === s.cells) {
                    let item = s.rows[e.row].dataItem;

                    switch (s.columns[e.col].binding) {
                        case 'value':
                            e.cell.childNodes[0].nodeValue = common.formatNumber(item.value);
                            break;

                        case '__normalized_value':
                            e.cell.innerHTML = common.formatNumber(item['__normalized_value'] / this.scale);
                            break;

                        case 'scale':
                            // e.cell.innerHTML = item.scale;
                            break;
                    }
                }
            },
            selectionChanged: (s, e) => {
                const selection = this.flexgrid.selection;
                let item;

                if (selection._row in s.rows) {
                    item = s.rows[selection._row].dataItem;
                } else {
                    item = null;
                }

                sourceDataPointsSidebar.setSelectedItem(item);
            },
            updatedLayout: () => {
                if (this.inUpdatedLayout) {
                    this.inUpdatedLayout = false;
                } else {
                    this.inUpdatedLayout = true;
                    this.flexgrid.autoSizeRow(0, true);
                }
            },
            beginningEdit: (s, e) => {
                const col = s.columns[e.col];

                // User is allowed to edit?
                const dataPoint = s.rows[e.row].dataItem;
                if (col.binding === '__normalized_value') {
                    alert(constants.CANNOT_EDIT_NORMALIZED_VALUE);
                    e.cancel = true;
                    return;
                }
                if (col.binding === 'value' && dataPoint.source !== 'manual') {
                    alert(constants.CANNOT_EDIT_VALUE);
                    e.cancel = true;
                    return;
                }
                if (col.binding.endsWith(constants.DIMENSION_SUFFIX_GROUP)) {
                    const dimensionSlug = col.binding.slice(0, -constants.DIMENSION_SUFFIX_GROUP.length);
                    const dimensionParent = dataPoint[dimensionSlug + constants.DIMENSION_SUFFIX_PARENT];
                    if (!dimensionParent) {
                        alert(constants.CANNOT_SET_GROUP_IF_NO_PARENT);
                        e.cancel = true;
                        return;
                    }
                }

                // Get column definition.
                const columnDef = this.columnDefs.find(column => {
                    return column.slug === col.binding;
                });

                // Update data map.
                if (col.dataMap) {
                    col.dataMap = sourceDataService.getDataMapForDimension(
                        columnDef.dimension,
                        storageService.getCurrentProject()
                    );
                }

                if (col.dataType !== wijmo.DataType.Date) {
                    // Always format as general cell, not as number.
                    col.format = 'g';
                }
            },
            cellEditEnding: (s, e) => {
                const oldVal = s.getCellData(e.row, e.col);
                const newVal = s.activeEditor.value;
                const dataType = s.columns[e.col].dataType;
                e.cancel = common.checkIfCellHasChanged(oldVal, newVal, dataType);

                // Validate.
                const col = s.columns[e.col];
                const dataPoint = Object.assign({}, s.rows[e.row].dataItem);
                dataPoint[col.binding] = s.activeEditor.value;
                const validation = storageService.getCurrentProject().validateDataPoint(dataPoint);
                if (validation.success === false) {
                    e.cancel = true;
                    alert(validation.error);
                }
            },
            cellEditEnded: (s, e) => {
                // Edit was cancelled?
                if (e.cancel) {
                    return;
                }

                // TODO: Show loading screen.
                const dataPoint = s.rows[e.row].dataItem;
                storageService.getCurrentProject().addDataPoint(dataPoint);

                // Save project.
                storageService.saveCurrentProject();
                storageService.syncViews();
            }
        });

        // http://jsfiddle.net/Wijmo5/h1njyaez/
        this.flexGridFilter = new wijmo.grid.filter.FlexGridFilter(this.flexgrid, {
            filterApplied: () => {
                this.rowCounter.text(
                    'Showing ' +
                        this.flexgrid.rows.length +
                        ' data-points out of ' +
                        this.collectionView.sourceCollection.length
                );
            }
        });

        // $('#source_data_all_data_filter_by_file')[0].addEventListener('input', (e) => {
        //     this.collectionView.refresh();
        //     this.flexgrid.itemsSource = this.collectionView.items;
        // });

        this.container.find('._scale-selector').on('change', e => {
            this.scale = e.target.value;
            this.flexgrid.collectionView.refresh();
        });

        this.container.find('._clear-filters').on('click', () => {
            this.flexGridFilter.filterDefinition = '';
        });

        // Export Excel.
        this.container.find('._export-excel').on('click', e => {
            wijmo.grid.xlsx.FlexGridXlsxConverter.save(
                this.flexgrid,
                {
                    includeColumnHeaders: true,
                    includeCellStyles: false
                },
                'FlexGrid.xlsx'
            );
        });
    }

    sync() {
        sourceDataPointsSidebar.sync();

        // Columns
        {
            // Get all columns.
            this.columnDefs = this.getAvailableColumns();

            // Get selected columns from local storageService.
            const selectedColumns = storageService.get(storageService.DATA_COCKPIT_COLUMNS_KEY);
            if (Array.isArray(selectedColumns)) {
                this.columnDefs.forEach(columnDef => {
                    columnDef.selected = selectedColumns.indexOf(columnDef.slug) !== -1;
                });
            }

            // Set items in combo-box.
            this.columnsSelect.itemsSource = this.columnDefs;
        }

        // Data points
        let dataPoints = storageService.currentProject.dataPoints;
        this.setData(dataPoints);
    }

    getAvailableColumns() {
        const cols = [];
        const project = storageService.getCurrentProject();
        const dimensions = project.getFieldsForDimensions();

        cols.push({
            slug: '__normalized_value',
            label: 'Normalized Value',
            selected: true
        });

        dimensions.forEach(dimension => {
            cols.push({
                dimension: dimension,
                slug: dimension.slug,
                label: dimension.label,
                selected: true,
                dataMap: sourceDataService.getDataMapForDimension(dimension, project),
                isReadOnly: false
            });
        });

        cols.push({
            slug: 'source__pretty',
            label: 'Source',
            selected: true,
            isReadOnly: true
        });

        return cols;
    }

    updateColumns() {
        // Save selected columns in local storageService.
        const selectedColumns = this.columnDefs.reduce((a, column) => {
            if (column.selected) {
                a.push(column.slug);
            }

            return a;
        }, []);
        storageService.set(storageService.DATA_COCKPIT_COLUMNS_KEY, selectedColumns);

        // Create columns.
        this.flexgrid.columns.length = 0;
        this.columnDefs.forEach(column => {
            if (!column.selected) {
                return;
            }

            const isTime = get(column, 'dimension.isTime');

            // Add column to grid.
            const gridCol = new wijmo.grid.Column();
            gridCol.binding = column.slug;
            gridCol.header = column.label;
            if (!isTime) {
                gridCol.dataMap = column.dataMap;

                const dataType = get(column, 'dimension.dataType');
                if (dataType === dimensionTypesService.NUMBER) {
                    gridCol.dataType = wijmo.DataType.Number;
                }
            } else {
                gridCol.dataType = wijmo.DataType.Date;
                gridCol.format = 'yyyy-MM-dd';
            }
            gridCol.isReadOnly = column.isReadOnly;
            this.flexgrid.columns.push(gridCol);

            if (isTime) {
                common.createDatePickerEditor(this.flexgrid.columns.getColumn(gridCol.binding));
            }
        });
    }

    setData(dataset) {
        dataset = cloneDeep(dataset);

        const project = storageService.getCurrentProject();

        const sourceFiles = project.sourceFiles;
        dataset = dataset.map(item => {
            // Process source files.
            if (item.source === 'manual') {
                item.source__pretty = 'Manual';
            } else if (item.source in sourceFiles) {
                item.source__pretty = sourceFiles[item.source].name;
            }

            // Normalize values.
            item['__normalized_value'] = item.value * common.parseScale(item.scale) * common.parseInverse(item.inverse);

            // Process dimensions.
            item = project.addDataStructuresToDataPoint(item);

            return item;
        });

        // Save view.
        const sortDescriptions = this.flexgrid.collectionView.sortDescriptions;
        const scrollPosition = this.flexgrid.scrollPosition;
        const selection = this.flexgrid.selection;
        const filterDefinition = this.flexGridFilter.filterDefinition;

        // Update data source.
        this.collectionView.sourceCollection = dataset;
        this.collectionView.refresh();
        this.flexgrid.itemsSource = this.collectionView.items;
        this.updateColumns();

        // Load view.
        if (sortDescriptions.length > 0) {
            this.flexgrid.collectionView.sortDescriptions.push(sortDescriptions[0]);
        }
        this.flexgrid.scrollPosition = scrollPosition;
        this.flexgrid.select(selection);
        this.flexGridFilter.filterDefinition = filterDefinition;
    }

    setIdFilter(array) {
        this.idFilter = array;
    }
}

export const sourceDataPoints = new SourceDataPoints();
