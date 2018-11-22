import cloneDeep from 'lodash/cloneDeep';
import { common } from '../../Common';
import { SourceFile } from '../../entities/SourceFile';
import { MultiLevelHashMap } from '../../MultiLevelHashMap';
import { storageService } from '../../services/StorageService';
import { SourceDataStructureValidator } from './source-data-structures/SourceDataStructureValidator';
import { sourceData } from './SourceData';
import { sourceDataPoints } from './SourceDataPoints';

class SourceDataGraphView {
    constructor() {
        this.network = null;
        this.sourceDataStructureValidator = new SourceDataStructureValidator();
        this.filters = [];
        this.dataAvailability = null;
    }

    init() {
        this.container = $('#graph_view');
        this.filtersContainer = this.container.find('._row3');

        this.dimensionSelect = new wijmo.input.ComboBox(this.container.find('._dimension-selector')[0], {
            placeholder: 'Select Dimension',
            itemsSource: [],
            displayMemberPath: 'label',
            onSelectedIndexChanged: () => {
                if (!this.isSyncing) {
                    this.syncGraph();
                }
            }
        });

        this.coloringSelect = new wijmo.input.ComboBox(this.container.find('._coloring-selector')[0], {
            placeholder: 'Select Coloring',
            itemsSource: [
                {
                    label: 'File',
                    value: 'file'
                },
                {
                    label: 'Validation',
                    value: 'validation'
                },
                {
                    label: 'Data Availability',
                    value: 'data_availability'
                }
            ],
            displayMemberPath: 'label',
            onSelectedIndexChanged: () => {
                const coloring = this.coloringSelect.selectedItem.value;
                this.filtersContainer.css('display', coloring === 'data_availability' ? '' : 'none');

                if (!this.isSyncing) {
                    this.syncGraph();
                }
            }
        });

        this.sourceFileSelect = new wijmo.input.MultiSelect(this.container.find('._source-file-selector')[0], {
            placeholder: 'Select Source Files',
            itemsSource: [],
            headerFormat: '{count} files selected',
            displayMemberPath: 'name',
            checkedMemberPath: 'selected',
            onCheckedItemsChanged: () => {
                this.syncGraph();
            }
        });

        this.graphProgress = this.container.find('._graph-progress');
        this.graphContainer = this.container.find('._graph');

        this.hierarchicalCheckbox = this.container.find('._hierarchical-checkbox');
        this.hierarchicalCheckbox.on('change', () => this.syncGraph());

        this.useGlobalTermsCheckbox = this.container.find('._use-global-terms-checkbox');
        this.useGlobalTermsCheckbox.on('change', () => this.syncGraph());

        this.hideDisconnectedValuesCheckbox = this.container.find('._hide-disconnected-values');
        this.hideDisconnectedValuesCheckbox.on('change', () => this.syncGraph());
    }

    sync() {
        // Prevent multiple runs.
        if (this.isSyncing) {
            return;
        }
        this.isSyncing = true;

        const project = storageService.getCurrentProject();

        // Get dimensions that have data structures or global terms.
        let dimensions = project.getDimensions();
        dimensions = dimensions.filter(dimension => {
            return dimension.hasDataStructures;
        });
        this.dimensionSelect.itemsSource = dimensions;

        // Set source files.
        {
            // Get source files.
            let sourceFiles = Object.values(cloneDeep(project.sourceFiles));
            sourceFiles.unshift(
                new SourceFile({
                    uuid: 'manual',
                    name: 'Manual'
                })
            );

            let colors = ['#00338d', '#0091da', '#6d2077', '#005eb8', '#00a3a1', '#eaaa00'];
            let i = 0;
            sourceFiles = sourceFiles.map(sourceFile => {
                // All are selected by default.
                sourceFile.selected = true;

                // Set color.
                sourceFile.color = colors[i % colors.length];
                i++;

                return sourceFile;
            });

            this.sourceFileSelect.itemsSource = sourceFiles;
        }

        // Create filters.
        {
            this.filters = [];
            this.filtersContainer.html('');
            const dimensions = project.getDimensions();
            dimensions.forEach(dimension => {
                // Skip certain dimensions.
                if (
                    this.dimensionSelect.selectedItem &&
                    ['value', 'scale', this.dimensionSelect.selectedItem.slug].indexOf(dimension.slug) !== -1
                ) {
                    return;
                }

                // Create DOM elements.
                const div = $('<div>' + dimension.label + '</div>');
                const filterContainer = $('<div></div>').appendTo(div);
                this.filtersContainer.append(filterContainer);
                this.filtersContainer.append('&nbsp;&nbsp;&nbsp;');

                // Get items.
                const items = common.getUniqueValues(project.dataPoints, dimension.slug);
                items.unshift('');

                // Create filter.
                const comboBox = new wijmo.input.ComboBox(filterContainer[0], {
                    placeholder: 'Select ' + dimension.label,
                    itemsSource: items,
                    onSelectedIndexChanged: () => {
                        if (!this.isSyncing) {
                            this.syncGraph();
                        }
                    }
                });
                this.filters.push({
                    dimensionSlug: dimension.slug,
                    comboBox: comboBox
                });
            });
        }

        // Update graph.
        this.syncGraph();
        this.isSyncing = false;
    }

    syncGraph() {
        console.log('syncGraph');
        if (!this.dimensionSelect.selectedItem) {
            return;
        }

        this.syncDataAvailability();

        const coloring = this.coloringSelect.selectedItem.value;
        const dimensionSlug = this.dimensionSelect.selectedItem.slug;
        const files = this.sourceFileSelect.itemsSource.filter(sourceFile => {
            return sourceFile.selected;
        });

        // Get values, add nodes and index name-slugs to node-IDs.
        const project = storageService.getCurrentProject();
        this.sourceDataStructureValidator.setProject(project);
        const dataStructures = project.getDataStructuresForDimension(dimensionSlug);
        let nodes = [];
        const slugsToNodes = {};
        const groupNodesToAdd = {};
        let sequence = 0;
        files.forEach(file => {
            let dataset = project.getDataPointsForSource(file.uuid);
            let values = common.getUniqueValues(dataset, dimensionSlug);
            values.forEach(value => {
                /** @type {DataStructure} */
                const dataStructure = dataStructures[value] || {};

                // Don't add duplicate values.
                if (value in slugsToNodes) {
                    return;
                }

                // Get label.
                let label;
                {
                    label = value;

                    if (this.useGlobalTermsCheckbox.is(':checked') && dataStructure.globalTerm) {
                        // Use global term.
                        label = dataStructure.globalTerm;
                    } else {
                        label = value;
                    }

                    // Replace whitespaces with newlines.
                    label = label.replace(/ /g, '\n');

                    if (coloring === 'data_availability') {
                        let percentage = this.getDataAvailabilityForValue(value);
                        label += '\n ' + Math.round(percentage * 100) + '%';
                    }
                }

                // Get color.
                let color = this.getColor(file['color'], dimensionSlug, value);

                // Create node.
                let node = {
                    id: sequence++,
                    label: label,
                    color: color,
                    value: 1,
                    _parentSlug: null,
                    _dimensionValue: value
                };
                nodes.push(node);
                slugsToNodes[value] = node;

                // Save the group node for later.
                if (dataStructure.group) {
                    const slug = this.getGroupSlug(dataStructure);
                    groupNodesToAdd[slug] = dataStructure;
                }
            });
        });

        // Add group nodes.
        for (const slug in groupNodesToAdd) {
            /** @type {DataStructure} */
            const dataStructure = groupNodesToAdd[slug];

            // Get parent node.
            const parentNode = slugsToNodes[dataStructure.parentAttribute];
            if (!parentNode) {
                continue;
            }

            // Get color.
            let color = this.getColor(
                parentNode.color,
                dimensionSlug,
                dataStructure.parentAttribute,
                dataStructure.group
            );

            // Create node.
            let node = {
                id: sequence++,
                label: dataStructure.group,
                color: color,
                value: 1,
                _parentSlug: null,
                _groupValue: dataStructure.group
            };
            nodes.push(node);
            slugsToNodes[slug] = node;
        }

        // Add edges.
        const edges = [];
        const addedEdgeForGroup = {};
        for (const value in dataStructures) {
            /** @type {DataStructure} */
            const dataStructure = dataStructures[value];
            const childSlug = dataStructure.attribute;
            const parentSlug = dataStructure.parentAttribute;

            if (!(parentSlug in slugsToNodes) || !(childSlug in slugsToNodes)) {
                continue;
            }

            // Was the other parent a better match?
            if (
                slugsToNodes[childSlug]._parentSlug !== null &&
                childSlug.indexOf(slugsToNodes[childSlug]._parentSlug) !== -1
            ) {
                continue;
            }

            if (!dataStructure.group) {
                // Create parent-child edge.
                edges.push({
                    from: slugsToNodes[parentSlug].id,
                    to: slugsToNodes[childSlug].id
                });
            } else {
                const groupSlug = this.getGroupSlug(dataStructure);

                // Create parent-group edge. Prevent duplicates.
                if (!(groupSlug in addedEdgeForGroup)) {
                    addedEdgeForGroup[groupSlug] = true;
                    edges.push({
                        from: slugsToNodes[parentSlug].id,
                        to: slugsToNodes[groupSlug].id
                    });
                }

                // Create group-child edge.
                edges.push({
                    from: slugsToNodes[groupSlug].id,
                    to: slugsToNodes[childSlug].id
                });
            }

            // Increase parent node.
            slugsToNodes[childSlug]._parentSlug = parentSlug;
            slugsToNodes[parentSlug]['value']++;
        }

        // Index nodes by ID.
        const idsToNodes = nodes.reduce((a, node) => {
            a[node.id] = node;

            return a;
        }, {});

        // Hide disconnected nodes.
        if (this.hideDisconnectedValuesCheckbox.is(':checked')) {
            // Mark connected nodes.
            edges.forEach(edge => {
                idsToNodes[edge.from].connected = true;
                idsToNodes[edge.to].connected = true;
            });

            // Remove disconnected.
            nodes = nodes.filter(node => {
                return node.connected;
            });
        }

        // Adjust colors.
        if (coloring === 'file') {
            let maxValue = 0;
            nodes.forEach(node => {
                maxValue = Math.max(maxValue, node['value']);
            });
            nodes.forEach(node => {
                let percent = (maxValue - node['value']) / maxValue / 2.5;
                node['color'] = common.shadeColor2(node['color'], percent);
            });
        }

        // Compose network arguments.
        let data = {
            nodes: new vis.DataSet(nodes),
            edges: new vis.DataSet(edges)
        };
        let options = {
            nodes: {
                shape: 'box',
                font: {
                    size: 18,
                    color: '#ffffff'
                }
            },
            interaction: {
                dragNodes: false
            }
        };
        if (!this.hierarchicalCheckbox.is(':checked')) {
            options['physics'] = {
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 95,
                    springConstant: 0.04,
                    damping: 0.09,
                    avoidOverlap: 0
                },
                maxVelocity: 50,
                minVelocity: 0.1,
                stabilization: {
                    enabled: true,
                    iterations: 1000,
                    updateInterval: 10,
                    onlyDynamicEdges: false,
                    fit: true
                },
                timestep: 1,
                adaptiveTimestep: true
            };
            options['nodes']['scaling'] = {
                label: {
                    min: 15,
                    max: 20
                }
            };
        } else {
            options['physics'] = false;
            options['layout'] = {
                hierarchical: {
                    enabled: true,
                    sortMethod: 'directed',
                    nodeSpacing: 150,
                    blockShifting: false
                }
            };
            options['edges'] = {
                selectionWidth: 0
            };
        }

        // Create network.
        if (this.network) {
            this.network.destroy();
        }
        this.network = new vis.Network(this.graphContainer[0], data, options);
        this.network.on('stabilizationProgress', o => {
            this.graphProgress
                .css('display', '')
                .html('Loading ' + Math.round((o.iterations / o.total) * 100) + '%...');
        });
        this.network.on('stabilizationIterationsDone', o => {
            this.graphProgress.css('display', 'none').html('');
        });
        this.network.on('afterDrawing', o => {
            this.graphProgress.css('display', 'none').html('');
        });
        this.network.on('doubleClick', params => {
            if (params.nodes.length === 0) {
                return;
            }

            const id = params.nodes[0];
            const node = idsToNodes[id];
            const coloring = this.coloringSelect.selectedItem.value;

            if (coloring === 'data_availability') {
                // Open Data Cockpit tab.
                $('#source_data input[name="source_data_mode"]').trigger('blur');
                $('#source_data input[name="source_data_mode"][value="data_points"]').trigger('click');

                // Ensure required columns are enabled in data cockpit.
                this.filters.forEach(filter => {
                    sourceDataPoints.columnsSelect.itemsSource.forEach(column => {
                        if (column.slug === filter.dimensionSlug) {
                            column.selected = true;
                        }
                    });
                });
                sourceDataPoints.columnsSelect.refresh();
                sourceDataPoints.updateColumns();

                // Get filters.
                const flexFilters = [];
                this.filters.forEach(filter => {
                    // Check if selected.
                    const selectedValue = filter.comboBox.selectedItem;
                    if (selectedValue === '') {
                        return;
                    }

                    const showValues = {};
                    showValues[filter.comboBox.selectedItem] = true;

                    const flexFilter = {
                        binding: filter.dimensionSlug,
                        type: 'value',
                        filterText: '',
                        showValues: showValues
                    };

                    flexFilters.push(flexFilter);
                });

                // Set filter definition.
                const filterDefinition = {
                    defaultFilterType: 3,
                    filters: flexFilters
                };
                sourceDataPoints.flexGridFilter.filterDefinition = JSON.stringify(filterDefinition);
            } else {
                // Open Structures tab.
                $('#source_data input[name="source_data_mode"]').trigger('blur');
                $('#source_data input[name="source_data_mode"][value="data_structures"]').trigger('click');

                // Select dimension.
                sourceData.sourceDataStructures.dimensionSelect.selectedValue = this.dimensionSelect.selectedValue;

                setTimeout(() => {
                    // Select relevant row.
                    const flexgrid = sourceData.sourceDataStructures.flexgrid;
                    let row = 0;
                    for (let i = 0; i < flexgrid.rows.length; i++) {
                        const item = flexgrid.rows[i].dataItem;
                        row = i;

                        if (
                            (item.value && item.value === node._dimensionValue) ||
                            (item.group && item.group === node._groupValue)
                        ) {
                            break;
                        }
                    }
                    flexgrid.select(new wijmo.grid.CellRange(row, 0, row, 0), true);
                }, 50);
            }
        });
    }

    syncDataAvailability() {
        const coloring = this.coloringSelect.selectedItem.value;
        if (coloring !== 'data_availability') {
            return;
        }

        // Filter data points.
        const project = storageService.getCurrentProject();
        let dataPoints = project.dataPoints;
        dataPoints = dataPoints.filter(dataPoint => {
            let matches = true;

            this.filters.forEach(filter => {
                const value = filter.comboBox.selectedItem;
                if (value && dataPoint[filter.dimensionSlug] !== value) {
                    matches = false;
                }
            });

            return matches;
        });

        // Group values by unique dimension-combinations.
        const dimensionSlug = this.dimensionSelect.selectedItem.slug;
        let dimensions = project.getDimensionsForDataStructureValidation(dimensionSlug);
        let map = new MultiLevelHashMap(dimensions.length + 1);
        dataPoints.forEach((dataPoint, index) => {
            const key = [];
            dimensions.forEach(dimension => {
                // Undefined or an empty string must count as the same thing.
                let value = dataPoint[dimension.slug];
                if (typeof value === 'undefined') {
                    value = '';
                }

                key.push(value);
            });

            // Add copy of data-point to map.
            map.set(key.concat([dataPoint.id]), Object.assign({}, dataPoint));
        });
        let groups = map.getUniqueGroups();

        // Get availability for each value.
        this.dataAvailability = {};
        const values = common.getUniqueValues(dataPoints, dimensionSlug);
        values.forEach(value => {
            let groupsFound = 0;

            groups.forEach(group => {
                let dataPointFound = false;

                for (const id in group) {
                    const dataPoint = group[id];
                    if (dataPoint[dimensionSlug] === value) {
                        dataPointFound = true;
                    }
                }

                if (dataPointFound) {
                    groupsFound++;
                }
            });

            this.dataAvailability[value] = groupsFound / groups.length;
        });
    }

    getDataAvailabilityForValue(value) {
        const percentage = this.dataAvailability[value];

        if (!percentage) {
            return 0;
        }

        if (common.isDeltaZero(percentage - 1)) {
            return 1;
        }

        return percentage;
    }

    getColor(fileColor, dimensionSlug, parentAttribute, group) {
        const coloring = this.coloringSelect.selectedItem.value;
        let color;

        switch (coloring) {
            case 'validation':
                const result = this.sourceDataStructureValidator.validateValue(dimensionSlug, parentAttribute, group);
                if (result === null) {
                    color = '#888';
                } else if (result.invalid === 0) {
                    color = 'green';
                } else if (result.invalid > 0) {
                    color = 'red';
                }
                break;

            case 'file':
                color = fileColor;
                break;

            case 'data_availability':
                if (group) {
                    color = 'green';
                } else {
                    const value = this.getDataAvailabilityForValue(parentAttribute);

                    color = chroma.mix('red', 'green', value, 'lab').hex();
                }
                break;
        }

        return color;
    }

    /**
     * @param {DataStructure} dataStructure
     */
    getGroupSlug(dataStructure) {
        const slug = '__group__' + dataStructure.parentAttribute + '__' + dataStructure.group;

        return slug;
    }
}

export const sourceDataGraphView = new SourceDataGraphView();
