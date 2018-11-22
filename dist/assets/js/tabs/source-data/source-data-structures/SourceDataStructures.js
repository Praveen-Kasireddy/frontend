import { cloneDeep } from 'lodash';
import { common } from '../../../Common';
import { constants } from '../../../Constants';
import { storageService } from '../../../services/StorageService';
import { SourceDataStructureSets } from '../../../tabs/source-data/source-data-structures/SourceDataStructureSets';
import { SourceDataStructureValidator } from '../../../tabs/source-data/source-data-structures/SourceDataStructureValidator';
import { sourceDataService } from '../../../tabs/source-data/SourceDataService';

export class SourceDataStructures {
    constructor(container, saveHandler, highlightChanges = false, sidebarDimensionSelector = false) {
        this.container = container;
        /** @type {Function} */
        this.saveHandler = saveHandler;
        /** @type {Project} */
        this.project = null;
        this.structuresTable = this.container.find('._dataStructuresTable');
        this.setsTable = this.container.find('._setsTable');
        this.filterByState = this.container.find('._filterByState');
        this.sourceDataStructureValidator = new SourceDataStructureValidator();
        this.sourceDataStructureSets = new SourceDataStructureSets(this.container, this.saveHandler);
        this.isSyncing = false;
        this.inUpdatedLayout = false;
        let dimensionSelectorLocation = '';
        if (sidebarDimensionSelector) {
            dimensionSelectorLocation = this.container
                .closest('._content')
                .siblings('.main-sidebar')
                .find('#source_data_files_sidebar ._top')
                .append('<section class="_sidebar-dimension-selector"></section>');

            this.container.find('._submenu').appendTo(dimensionSelectorLocation.find('._sidebar-dimension-selector'));
            dimensionSelectorLocation = dimensionSelectorLocation.find('._sidebar-dimension-selector');
        } else {
            dimensionSelectorLocation = this.container.find('._dimension-selector')[0];
        }
        if (!localStorage.getItem('blobExcelData'))
            this.dimensionSelect = new wijmo.input.ComboBox(dimensionSelectorLocation, {
                placeholder: 'Select Dimension',
                itemsSource: [],
                displayMemberPath: 'label',
                onSelectedIndexChanged: () => {
                    if (!this.isSyncing) {
                        this.syncFlexGrid();
                    }
                }
            });
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this.structuresTable[0], {
                isReadOnly: false,
                selectionMode: 'Cell',
                itemsSource: [],
                autoGenerateColumns: false,
                childItemsPath: 'children',
                columns: [],
                formatItem: (s, e) => {
                    if (e.panel === s.cells) {
                        let color = '';
                        let backgroundColor = '';
                        const item = s.rows[e.row].dataItem;

                        if (highlightChanges && item.dataStructure) {
                            const dimension = this.getSelectedDimension();
                            const ds = this.project.getDataStructuresForDimension(dimension.slug)[
                                item.dataStructure.attribute
                            ];

                            if (ds && ds.changed) {
                                backgroundColor = '#49CAAE';
                                color = '#333';
                            }
                        }
                        // All rows must be editable, except for Groups.
                        // This is necessary to set for hierarchical flexgrids.
                        // See https://www.grapecity.com/en/forums/wijmo/flexgrid---hierarchical-vi
                        s.rows[e.row].isReadOnly = !!item.group;

                        switch (s.columns[e.col].binding) {
                            case 'title':
                                // Add invisible arrow to have all rows properly aligned.
                                if (e.cell.innerHTML.indexOf('wj-elem-collapse') === -1) {
                                    e.cell.innerHTML =
                                        '<span class="wj-elem-collapse wj-glyph-down-right _hidden"></span>' +
                                        e.cell.innerHTML;
                                }
                                break;

                            case 'validation':
                                // Button
                                if (item.validation) {
                                    e.cell.innerHTML +=
                                        '<button class="_view-sets btn btn-sm btn-default">More</button>';
                                }

                                // Color
                                if (item.invalid === 0) {
                                    color = 'green';
                                } else {
                                    color = 'red';
                                }
                                break;
                        }
                        e.cell.style.color = color;
                        e.cell.style.backgroundColor = backgroundColor;
                    }
                },
                updatedView: () => {
                    if (this.inUpdatedLayout) {
                        this.inUpdatedLayout = false;
                    } else {
                        this.inUpdatedLayout = true;
                        this.flexgrid.autoSizeRow(0, true);
                    }
                },
                beginningEdit: (s, e) => {
                    const col = s.columns[e.col];
                    const dataPoint = s.rows[e.row].dataItem;

                    // User is allowed to edit?
                    if (col.binding === 'dataStructure.group') {
                        const parent = dataPoint.dataStructure.parentAttribute;
                        if (!parent) {
                            alert(constants.CANNOT_SET_GROUP_IF_NO_PARENT);
                            e.cancel = true;
                            return;
                        }
                    }
                },
                cellEditEnding: (s, e) => {
                    const oldVal = s.getCellData(e.row, e.col);
                    const newVal = s.activeEditor.value;
                    const dataType = s.columns[e.col].dataType;
                    e.cancel = common.checkIfCellHasChanged(oldVal, newVal, dataType);
                },
                cellEditEnded: (s, e) => {
                    // Edit was cancelled?
                    if (e.cancel) {
                        return;
                    }

                    // TODO: Show loading screen.
                    const dataItem = s.rows[e.row].dataItem;
                    /** @type {DataStructure} */
                    const dataStructure = dataItem.dataStructure;
                    const ds = this.project.addDataStructure(
                        this.dimensionSelect.selectedItem.slug,
                        dataItem.value,
                        dataStructure.parentAttribute,
                        dataStructure.group,
                        dataStructure.globalTerm,
                        dataStructure.timeIntervalBegin,
                        dataStructure.timeIntervalEnd
                    );

                    if (highlightChanges) {
                        ds.changed = true;
                    }

                    this.saveHandler();
                }
            });

        this.container.on('click', '._view-sets', e => {
            const ht = this.flexgrid.hitTest(e);
            if (!ht) {
                return;
            }

            let dataItem = this.flexgrid.rows[ht._row].dataItem;
            if (!dataItem.groups) {
                return;
            }
            dataItem = Object.assign({}, dataItem);
            dataItem.dimension = this.getSelectedDimension();

            this.container.find('._back').show();
            this.container.find('._auto-reconcile').show();
            this.setsTable.show();
            this.filterByState.show();
            this.structuresTable.hide();
            this.container.find('._dimension-selector').hide();

            this.sourceDataStructureSets.setData(dataItem);
        });

        this.container.find('._back').on('click', () => {
            this.container.find('._back').hide();
            this.container.find('._auto-reconcile').hide();
            this.setsTable.hide();
            this.filterByState.hide();
            this.structuresTable.show();
            this.container.find('._dimension-selector').show();

            this.sync();

            // Force flexgrid to refresh.
            window.dispatchEvent(new Event('resize'));
        });

        this.container.find('._back-source-data-main').on('click', () => {
            this.container.find('._back-source-data-main').hide();
            this.structuresTable.show();

            // Force flexgrid to refresh.
            window.dispatchEvent(new Event('resize'));
        });
    }

    setProject(project) {
        this.project = project;
        this.sourceDataStructureSets.setProject(project);
        this.sourceDataStructureValidator.setProject(project);
    }

    sync() {
        // Prevent multiple runs.
        if (this.isSyncing) {
            return;
        }
        this.isSyncing = true;

        this.sourceDataStructureSets.sync();

        // Get dimensions that have data structures or global terms.
        let selectedDimension = this.getSelectedDimension() || null;
        let dimensions = this.project.getDimensions();
        dimensions = dimensions.filter(dimension => {
            return dimension.hasDataStructures || dimension.hasGlobalTerms || dimension.hasTimeIntervals;
        });
        this.dimensionSelect.itemsSource = dimensions;
        this.dimensionSelect.selectedItem = selectedDimension;

        this.syncFlexGrid();

        this.isSyncing = false;
    }

    syncFlexGrid() {
        let gridCol;
        this.flexgrid.columns.length = 0;
        const selectedItem = this.dimensionSelect.selectedItem || {};
        // Value
        gridCol = new wijmo.grid.Column();
        gridCol.header = 'Value';
        gridCol.binding = 'title';
        gridCol.width = '*';
        gridCol.isReadOnly = true;
        this.flexgrid.columns.push(gridCol);

        if (selectedItem.hasDataStructures) {
            // Parent
            {
                gridCol = new wijmo.grid.Column();
                gridCol.header = 'Parent';
                gridCol.binding = 'dataStructure.parentAttribute';
                gridCol.width = '*';

                // Get dataMap.
                const dimension = Object.assign({}, selectedItem);
                dimension.isParent = true;
                dimension.attribute = selectedItem.slug;
                gridCol.dataMap = sourceDataService.getDataMapForDimension(dimension, this.project);

                this.flexgrid.columns.push(gridCol);
            }

            // Group
            {
                gridCol = new wijmo.grid.Column();
                gridCol.header = 'Group';
                gridCol.binding = 'dataStructure.group';
                gridCol.width = '*';

                // Get dataMap.
                const dimension = Object.assign({}, selectedItem);
                dimension.isGroup = true;
                dimension.attribute = selectedItem.slug;
                gridCol.dataMap = sourceDataService.getDataMapForDimension(dimension, this.project);

                this.flexgrid.columns.push(gridCol);
            }
        }

        // Global term
        if (selectedItem.hasGlobalTerms) {
            gridCol = new wijmo.grid.Column();
            gridCol.header = 'Global Term';
            gridCol.binding = 'dataStructure.globalTerm';
            gridCol.width = '*';

            // Get dataMap.
            const dimension = Object.assign({}, selectedItem);
            dimension.isGlobalTerm = true;
            gridCol.dataMap = sourceDataService.getDataMapForDimension(dimension, this.project);

            this.flexgrid.columns.push(gridCol);
        }

        // Time interval
        if (selectedItem.hasTimeIntervals) {
            gridCol = new wijmo.grid.Column();
            gridCol.header = 'Begin';
            gridCol.binding = 'dataStructure.timeIntervalBegin';
            gridCol.width = '*';
            gridCol.dataType = wijmo.DataType.Date;
            gridCol.format = 'yyyy-MM-dd';
            this.flexgrid.columns.push(gridCol);
            common.createDatePickerEditor(this.flexgrid.columns.getColumn(gridCol.binding));

            gridCol = new wijmo.grid.Column();
            gridCol.header = 'End';
            gridCol.binding = 'dataStructure.timeIntervalEnd';
            gridCol.width = '*';
            gridCol.dataType = wijmo.DataType.Date;
            gridCol.format = 'yyyy-MM-dd';
            this.flexgrid.columns.push(gridCol);
            common.createDatePickerEditor(this.flexgrid.columns.getColumn(gridCol.binding));
        }

        // Validation
        if (selectedItem.hasDataStructures) {
            gridCol = new wijmo.grid.Column();
            gridCol.header = 'Validation';
            gridCol.binding = 'validation';
            gridCol.width = 210;
            gridCol.isReadOnly = true;
            this.flexgrid.columns.push(gridCol);
        }

        this.flexgrid.itemsSource = this.getDataStructuresTree('');
    }

    /** @type {Dimension} */
    getSelectedDimension() {
        return this.dimensionSelect.selectedItem;
    }

    getDataStructuresTree(parent, group) {
        const dimension = this.getSelectedDimension();
        if (!dimension) {
            return;
        }
        const dataStructures = cloneDeep(this.project.getDataStructuresForDimension(dimension.slug));
        let values = common.getUniqueValues(this.project.dataPoints, dimension.slug);
        const tree = [];

        // Filter.
        let hasGroups = false;
        values = values.filter(value => {
            const ds = dataStructures[value];
            const dsParentAttribute = !ds ? '' : ds.parentAttribute;
            const dsGroup = !ds ? '' : ds.group;

            // Check parent. Special case if parent doesn't exist - put it in the root.
            if (parent !== dsParentAttribute && !(parent === '' && values.indexOf(dsParentAttribute) === -1)) {
                return false;
            }

            // Check group. Special case if group is missing - put into "Others".
            if (group && group !== dsGroup && !(group === 'Others' && dsGroup === '')) {
                return false;
            }

            // Do we have groups?
            if (!group && dsGroup) {
                hasGroups = true;
            }

            return true;
        });

        // Do we have at least one group?
        if (hasGroups) {
            // Make groups.
            const groups = [];
            values.forEach(value => {
                const ds = dataStructures[value];
                let dsGroup = !ds ? '' : ds.group;
                dsGroup = dsGroup ? dsGroup : 'Others';
                groups[dsGroup] = true;
            });

            // Create nodes for groups.
            for (const groupTitle in groups) {
                const node = {
                    title: groupTitle,
                    value: parent, // Required for validation and auto-reconciliation.
                    group: groupTitle,
                    children: this.getDataStructuresTree(parent, groupTitle)
                };
                this.validateNode(node);
                tree.push(node);
            }
        } else {
            values.forEach(value => {
                const ds = dataStructures[value];
                const node = {
                    title: value,
                    value: value,
                    dataStructure: ds || {},
                    children: this.getDataStructuresTree(value)
                };
                this.validateNode(node);
                tree.push(node);
            });
        }

        return tree;
    }

    validateNode(node) {
        const dimension = this.getSelectedDimension();
        let hasGroups = false;
        node.childValues = node.children.map(child => {
            if (child.group) {
                hasGroups = true;
            }
            return child.value;
        });

        if (!hasGroups && node.children.length > 0) {
            const result = this.sourceDataStructureValidator.validateParentAndChildren(
                dimension.slug,
                node.value,
                node.childValues
            );
            Object.assign(node, result);
            if (result.invalid === 0) {
                node.validation = 'All ' + result.valid + ' sets valid';
            } else {
                node.validation = result.invalid + '/' + result.groups.length + ' sets invalid';
            }
        }
    }

    addDataStructuresFromProject(project) {
        if (!project) {
            return;
        }

        const currentProject = storageService.getCurrentProject();

        for (let dimension in project.dataStructuresPerDimension) {
            const dataStructures = project.dataStructuresPerDimension[dimension];
            for (let value in dataStructures) {
                /** @type {DataStructure} */
                const dataStructure = dataStructures[value];

                if (!dataStructure.changed) {
                    continue;
                }

                currentProject.addDataStructure(
                    dimension,
                    value,
                    dataStructure.parentAttribute,
                    dataStructure.group,
                    dataStructure.globalTerm,
                    dataStructure.timeIntervalBegin,
                    dataStructure.timeIntervalEnd
                );
            }
        }
    }
}
