import _ from 'lodash';
import cloneDeep from 'lodash/cloneDeep';
import { storageService } from '../../../services/StorageService';
import { sourceDataFilesSidebar } from '../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar';
import { addManualTable } from '../../../tabs/source-data/add-manual-workflow/AddManualTable';
import { SourceDataStructures } from '../../../tabs/source-data/source-data-structures/SourceDataStructures';
import { sourceData } from '../../../tabs/source-data/SourceData';
import { sourceDataPointsSidebar } from '../../../tabs/source-data/SourceDataPointsSidebar';
import { sourceDataService } from '../../../tabs/source-data/SourceDataService';

class AddManualSidebar {
    constructor() {
        this.ingestionStep = 1;
        this.inputs = [];
        this.container = $('#add_manual_workflow');
        this.dataStructuresContainer = this.container.find('._data-structures');

        this.sourceDataStructures = new SourceDataStructures(
            this.dataStructuresContainer,
            () => {
                this.sourceDataStructures.sync();
            },
            true
        );
        /** @type {Project} */
        this.project = null;

        this.columnDefs = [];
        this.tableColumns = [];
    }

    init() {
        addManualTable.manualWorkflowContent();

        $('#add_manual_sidebar ._ingestion-steps ._back').on('click', () => this.addManualPrevStep());
        $('#add_manual_sidebar ._ingestion-steps ._next').on('click', () => this.addManualNextStep());

        this.form = $('#add_manual_form');
        this.fieldsContainer = this.form.find('._fields');
        this.fieldTemplate = this.form
            .find('._template')
            .removeClass('_template')
            .detach();

        $('#add_manual_sidebar ._cancel').on('click', () => {
            this.cancelWorkflow();
        });
        this.form.find('._add-data-point').on('click', () => {
            this.addDataPoint();
        });
        this.form.find('._delete-data-point').on('click', () => {
            this.deleteDataPoint();
        });
        this.form.find('._save-data-point').on('click', () => {
            this.saveChanges(true);
        });
        this.form.find('._clear').on('click', () => {
            this.clearAllFields();
        });
        $('#add_manual_sidebar ._dimensions-section ._add-custom-dimension').on('click', () => {
            sourceDataPointsSidebar.addCustomDimension();
            this.sync();
            storageService.syncViews();
        });
        this.columnsSelect = new wijmo.input.MultiSelect(
            $('#add_manual_sidebar ._dimensions-section ._column-selector')[0],
            {
                placeholder: 'Select Columns',
                itemsSource: [],
                headerFormat: '{count} columns selected',
                displayMemberPath: 'label',
                checkedMemberPath: 'selected',
                onCheckedItemsChanged: () => {
                    this.updateDimensions();
                }
            }
        );
        $('#add_manual_sidebar ._dimensions-section ._column-selector').on('click', () => {
            $('.wj-listbox-item input').prop('disabled', this.ingestionStep !== 1);
            $('.wj-listbox-item label').each(function() {
                if (
                    $(this)
                        .text()
                        .replace(/\s/g, '') === 'Scale'
                ) {
                    $(this)
                        .find('input')
                        .prop('disabled', true);
                }
            });
        });

        this.form.on('click', '._lock-container', e => {
            const $this = $(e.currentTarget);
            const input = $this.find('input');
            const checked = !input.prop('checked');
            input.prop('checked', checked);
            $this.toggleClass('_checked', checked);
        });
    }

    sync() {
        this.columnDefs = sourceDataFilesSidebar.getAvailableColumns();
        this.columnsSelect.itemsSource = this.columnDefs;
        this.displayForm();
    }

    displayForm() {
        // Save settings for previous stuff.
        const lockedFields = this.getLockedFields();

        // Remove previous stuff.
        this.inputs = [];
        this.form.find('._field').remove();

        // Add fields.
        let fields = [
            {
                slug: 'value',
                label: 'Value',
                selected: true
            }
        ];
        fields = _.concat([], fields, this.columnDefs);

        fields.forEach(field => {
            if (field.selected || field.slug === 'value') {
                const e = this.fieldTemplate.clone();
                e.find('._name').text(field.label);
                this.fieldsContainer.append(e);

                if (!this.project) {
                    this.project = cloneDeep(storageService.getCurrentProject());
                }
                let values = sourceDataService.getAvailableValuesForField(field, this.project);

                // Create input.
                let input;
                if (field.slug === 'value') {
                    input = new wijmo.input.InputNumber(e.find('._input')[0], {
                        format: 'g10',
                        isRequired: false,
                        value: null
                    });
                } else {
                    input = new wijmo.input.AutoComplete(e.find('._input')[0], {
                        itemsSource: values
                    });
                }
                input._kosmosField = field.slug;
                this.inputs.push(input);

                // Default value and lock
                if (field.slug in lockedFields) {
                    input._setText(lockedFields[field.slug]);
                    this.getInputLock(input).prop('checked', true);
                } else {
                    input._setText('');
                }
            }
        });
    }

    getInputLock(input) {
        return $(input._e)
            .closest('._field')
            .find('._lock');
    }

    isInputLocked(input) {
        return this.getInputLock(input).is(':checked');
    }

    getLockedFields() {
        const lockedFields = {};

        this.inputs.forEach(input => {
            if (this.isInputLocked(input)) {
                lockedFields[input._kosmosField] = input.text;
            }
        });

        return lockedFields;
    }

    getDataPointFromForm() {
        // Get point.
        const dataPoint = {};
        this.inputs.forEach(input => {
            if (input._kosmosField === 'value') {
                dataPoint[input._kosmosField] = input.value;
            } else {
                dataPoint[input._kosmosField] = input.text;
            }
        });
        dataPoint.value = parseFloat(dataPoint.value);
        dataPoint.scale = parseInt(dataPoint.scale);

        return dataPoint;
    }

    addDataPoint() {
        const dataPoint = this.getDataPointFromForm();

        const validation = storageService.getCurrentProject().validateDataPoint(dataPoint);
        if (validation.success === false) {
            alert(validation.error);

            return;
        }

        addManualTable.tableSource.push(dataPoint);

        addManualTable.sync();
        this.setSelectedItem(null);
    }

    saveChanges() {
        const dataPoint = this.getDataPointFromForm();

        const validation = storageService.getCurrentProject().validateDataPoint(dataPoint);
        if (validation.success === false) {
            alert(validation.error);

            return;
        }

        const row = addManualTable.flexgrid.selection.row;
        addManualTable.tableSource[row] = dataPoint;
        this.setSelectedItem(null);
        addManualTable.sync();
    }

    deleteDataPoint() {
        const row = addManualTable.flexgrid.selection.row;
        addManualTable.tableSource.splice(row, 1);

        addManualTable.sync();
    }

    clearAllFields() {
        this.form.find('._lock').prop('checked', false);
        addManualTable.flexgrid.select(-1, -1);
        this.setSelectedItem(null);
    }

    setSelectedItem(item) {
        this.selectedItem = item;

        if (!item) {
            item = this.getLockedFields();
        }

        // Set fields.
        this.inputs.forEach(input => {
            const field = input._kosmosField;

            if (item && field in item) {
                if (field === 'value') {
                    input.value = parseFloat(item[field]);
                } else {
                    input._setText(item[field]);
                }
            } else {
                if (field === 'value') {
                    input.value = null;
                } else {
                    input._setText('');
                }
            }
        });
    }

    addManualPrevStep() {
        if (this.ingestionStep === 1) {
            return;
        }
        this.ingestionStep--;
        addManualTable.manualWorkflowContent();
        this.syncDimensionsContainer();
    }

    addManualNextStep() {
        if (this.ingestionStep === 3) {
            this.finishStep();

            return;
        }

        this.ingestionStep++;

        if (this.ingestionStep === 2) {
            this.secondStep();
        }

        addManualTable.manualWorkflowContent();
        this.syncDimensionsContainer();
    }

    secondStep() {
        // Remove unselected dimensions from table source.
        this.columnDefs.map(dimension => {
            if (!dimension.selected) {
                addManualTable.tableSource.map(dataPoint => {
                    dataPoint[dimension.slug] = '';
                });
            }
        });

        // Load data structures.
        const project = storageService.getCurrentProject();

        // Copy current project and add new data points into it.
        /** @type {Project} */
        this.project = cloneDeep(project);
        this.project.dataPoints = this.project.dataPoints.concat(addManualTable.tableSource);

        // Use new project for data-structures screen.
        this.sourceDataStructures.setProject(this.project);
        this.sourceDataStructures.sync();

        // Refresh FlexGrid.
        window.dispatchEvent(new Event('resize'));
    }

    finishStep() {
        // Add new Data Points.
        let dataPoints = _.concat([], addManualTable.tableSource);
        let success = true;
        let successCount = 0;
        let errors = '';
        let totalInitialDataPoints = dataPoints.length;

        for (let i = 0; i < dataPoints.length; i++) {
            let dataPoint = dataPoints[i];
            dataPoint.source = 'manual';
            const result = storageService.getCurrentProject().addDataPoint(dataPoint);

            if (!result.success) {
                success = false;
                errors += 'Error for data-point with the value = ' + dataPoint.value + ': ' + result.error + '\n';
            } else {
                successCount++;
                dataPoints.splice(i, 1);
                i--;
            }
        }
        addManualTable.tableSource = _.concat([], dataPoints);

        // Add data structures.
        addManualSidebar.sourceDataStructures.addDataStructuresFromProject(this.project);

        storageService.saveCurrentProject();
        storageService.syncViews();

        this.ingestionStep = 1;
        addManualTable.manualWorkflowContent();

        if (success) {
            alert('Your changes have been saved successfully.');

            addManualTable.flexgrid.itemsSource = addManualTable.tableSource;
            addManualTable.flexgrid.collectionView.refresh();

            $("input[name=source_data_mode][value='data_points']").prop('checked', true);
            $("input[name=source_data_mode][value='data_points']")
                .parent()
                .addClass('active');
            $("input[name=source_data_mode][value='manual_workflow']")
                .parent()
                .removeClass('active');
            $('.main-options-container input[name=source_data_mode]').change();
        } else {
            alert(
                successCount +
                    '/' +
                    totalInitialDataPoints +
                    ' data-points were saved. The following errors have occurred: ' +
                    '\n' +
                    errors
            );

            addManualTable.flexgrid.itemsSource = addManualTable.tableSource;
            addManualTable.flexgrid.collectionView.refresh();
        }
    }

    cancelWorkflow() {
        const confirmation = confirm('Are you sure you want to cancel? You will lose all your progress.');

        if (!confirmation) {
            return;
        }

        sourceData.endWorkflow();
        addManualTable.tableSource = [];
        this.ingestionStep = 1;
        this.setSelectedItem(null);
        addManualTable.sync();
    }

    updateDimensions() {
        this.displayForm();

        let itemsSource = [
            {
                slug: '__normalized_value',
                label: 'Normalized Value',
                selected: true,
                isReadOnly: true
            },
            {
                slug: 'value',
                label: 'Value',
                selected: true
            }
        ];
        itemsSource = _.concat([], itemsSource, this.columnDefs);
        this.tableColumns = itemsSource;
        addManualTable.sync();
    }

    syncDimensionsContainer() {
        $('#add_manual_sidebar ._dimensions-section ._add-custom-dimension').prop('disabled', this.ingestionStep !== 1);
    }
}

export const addManualSidebar = new AddManualSidebar();
