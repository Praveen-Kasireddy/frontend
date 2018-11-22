import { storageService } from '../../services/StorageService';
import { sourceDataPoints } from './SourceDataPoints';
import { sourceDataService } from './SourceDataService';

class SourceDataPointsSidebar {
    constructor() {
        this.selectedItem = null;
        this.inputs = [];
    }

    init() {
        this.form = $('#source_data_new_entry');
        this.fieldsContainer = this.form.find('._fields');
        this.fieldTemplate = this.form
            .find('._template')
            .removeClass('_template')
            .detach();

        this.form.find('._add-data-point').on('click', () => {
            this.addDataPoint();
        });
        this.form.find('._save-data-point').on('click', () => {
            this.addDataPoint(true);
        });
        this.form.find('._delete-data-point').on('click', () => {
            this.deleteDataPoint();
        });
        this.form.find('._clear').on('click', () => {
            this.clearAllFields();
        });
        this.form.find('._add-custom-dimension').on('click', () => {
            this.addCustomDimension();
        });

        this.form.on('click', '._lock-container', e => {
            const $this = $(e.currentTarget);
            const input = $this.find('input');
            const checked = !input.prop('checked');
            input.prop('checked', checked);
            $this.toggleClass('_checked', checked);
        });

        this.form.on('click', '._data-structures-container', e => {
            const $this = $(e.currentTarget);
            const checked = !$this.hasClass('_checked');
            $this.toggleClass('_checked', checked);
            this.updateVisibleFields();
        });
    }

    sync() {
        // Save settings for previous stuff.
        const lockedFields = this.getLockedFields();
        const openDataStructured = this.getOpenFields();

        // Remove previous stuff.
        this.inputs = [];
        this.form.find('._field').remove();

        // Add fields.
        const project = storageService.getCurrentProject();
        const fields = project.getFieldsForDimensions();
        fields.forEach(field => {
            const e = this.fieldTemplate.clone();
            e.find('._name').text(field.shortLabel || field.label);
            this.fieldsContainer.append(e);

            let values = sourceDataService.getAvailableValuesForField(field, project);

            // Create input.
            let input;
            if (field.slug === 'value') {
                input = new wijmo.input.InputNumber(e.find('._input')[0], {
                    format: 'g10',
                    isRequired: false,
                    value: null
                });
            } else if (field.isTime) {
                input = new wijmo.input.InputDate(e.find('._input')[0], {
                    format: 'yyyy-MM-dd'
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

            const isChild = typeof field.child !== 'undefined' && field.child;
            e.find('._lock-container').toggleClass('_child', isChild);
            e.find('._data-structures-container').toggleClass(
                '_hidden',
                !field.hasDataStructures && !field.hasGlobalTerms && !field.hasTimeIntervals
            );
            e.find('._data-structures-container').toggleClass('_child', isChild);
            e.find('._data-structures-container').toggleClass('_checked', field.slug in openDataStructured);
        });
        this.updateVisibleFields();
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

    getOpenFields() {
        const openFields = {};

        this.inputs.forEach(input => {
            if (
                $(input._e)
                    .closest('._field')
                    .find('._data-structures-container._checked').length > 0
            ) {
                openFields[input._kosmosField] = true;
            }
        });

        return openFields;
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
        dataPoint.source = 'manual';

        return dataPoint;
    }

    addDataPoint(saveInsteadOfAdding = false) {
        const dataPoint = this.getDataPointFromForm();

        if (saveInsteadOfAdding) {
            dataPoint.id = this.selectedItem.id;
            dataPoint.source = this.selectedItem.source;
        }

        const result = storageService.getCurrentProject().addDataPoint(dataPoint);

        // Abort.
        if (!result.success) {
            alert(result.error);
            return;
        }

        // Deselect.
        if (!saveInsteadOfAdding) {
            sourceDataPoints.flexgrid.select(-1, -1);
        }

        // Save project.
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    deleteDataPoint() {
        const dataPoints = storageService.getCurrentDataPoints();
        const key = storageService.getCurrentProject().getKeyForDataPointId(this.selectedItem.id);
        dataPoints.splice(key, 1);
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    clearAllFields() {
        this.form.find('._lock').prop('checked', false);
        sourceDataPoints.flexgrid.select(-1, -1);
        this.setSelectedItem(null);
    }

    addCustomDimension() {
        const project = storageService.getCurrentProject();
        const dimension = project.addDimensionWithPrompt();

        if (dimension) {
            storageService.saveCurrentProject();
            storageService.syncViews();
        }
    }

    getInputLock(input) {
        return $(input._e)
            .closest('._field')
            .find('._lock');
    }

    isInputLocked(input) {
        return this.getInputLock(input).is(':checked');
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

        // Show/hide buttons.
        this.form.find('._save-data-point').prop('disabled', !(item && item.id));
        this.form.find('._delete-data-point').prop('disabled', item && item.source !== 'manual');
    }

    updateVisibleFields() {
        let previousWasChecked = false;
        this.fieldsContainer.find('._field').each((i, field) => {
            const dataStructureContainer = $(field).find('._data-structures-container');
            const isChecked = dataStructureContainer.hasClass('_checked');
            const isChild = dataStructureContainer.hasClass('_child');

            if (isChild) {
                $(field).css('display', previousWasChecked ? '' : 'none');
            } else {
                previousWasChecked = isChecked;
            }
        });
    }
}

export const sourceDataPointsSidebar = new SourceDataPointsSidebar();
