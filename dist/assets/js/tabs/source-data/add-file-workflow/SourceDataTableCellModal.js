import { concat, get, union } from 'lodash';
import { common } from '../../../Common';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';
import { addFileSteps } from '../../../tabs/source-data/add-file-workflow/AddFileSteps';
import { sourceDataEditTableCell } from '../../../tabs/source-data/add-file-workflow/SourceDataEditTableCell';
import { sourceDataFilesSidebar } from '../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar';
import { sourceDataFiles } from '../../../tabs/source-data/SourceDataFiles';

class SourceDataTableCellModal {
    constructor() {
        this.modalInputs = [];
        this.multipleCellsInputFields = {};
        this.hasUnsavedChanges = false;
        this.labelMultipleDimensions = [];
        this.labelMultipleOverwriteValues = [];
        this.dropdownValue = '';
        this.appliedLabelChangeCounter = 0;
        this.applyButton = '';
        this.previousSelection = 'notUsed';
    }

    init() {
        const fieldTemplateHtml =
            '<div class="_fields _data-properties"><div class="_field">' +
            '<div class="_name">Value</div><div class="_input"></div></div></div>';
        this.form = $('#tableCellModal .modal-body');
        this.form.append(fieldTemplateHtml);
        this.fieldTemplate = this.form.find('._data-properties ._field');
        const rangeInputHtml = $('#tableCellModal ._label-properties ._range-picker');

        this.rangeInput = new wijmo.input.AutoComplete(rangeInputHtml[0], {
            isReadOnly: false,
            onGotFocus: e => {
                addFileSteps.fileWorkflow.enableRangePickerMode((fileWorkflow, e) => {
                    const value = XLSX.utils.encode_range({
                        s: { r: e.range.topRow, c: e.range.leftCol },
                        e: { r: e.range.bottomRow, c: e.range.rightCol }
                    });

                    this.rangeInput._setText(value);
                });
            },
            lostFocus: e => {
                $(sourceDataFiles.flexGrid.hostElement).removeClass('_copy-cursor');
            }
        });

        // Prevent modal close when clicking on modal dialog.
        $('#tableCellModal > .modal-dialog').on('mousedown', e => {
            e.stopPropagation();
        });

        // Prevent modal close when clicking on dropdown.
        $('#source_data_files ._table ._modal-container').on('mousedown', '.wj-dropdown-panel', e => {
            e.stopPropagation();
        });

        // Apply changes button functionality on cell modal.
        $('._save-cell-properties').on('click', e => sourceDataEditTableCell.saveProperties(e));

        // When showing the modal...
        $('#tableCellModal').on('show.bs.modal', e => {
            this.hasUnsavedChanges = false;
        });

        // Before hiding the modal...
        $('#tableCellModal').on('hide.bs.modal', e => {
            // Prevent user from losing their changes.
            if (this.hasUnsavedChanges) {
                const userConfirmation = confirm('Are you sure you do not want to save changes before leaving?');

                if (!userConfirmation) {
                    e.preventDefault();
                }
            }
        });

        $('._add-new-label-rule').on('click', () => this.addNewLabelRule());

        $(document).on('click', '._dimension-picker-container ._remove-rule', function() {
            $(this)
                .closest('._dimension-picker-container')
                .remove();
        });

        $('#source_data_files_pre_ingestion ._table').on('keydown', e => {
            if (!$('#tableCellModal').data('bs.modal').isShown || !$('#cellModalSwitchLabel').is(':checked')) {
                return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();

            const keycode = e.keyCode ? e.keyCode : e.which;
            if (keycode === 13) {
                sourceDataEditTableCell.saveProperties(e);
            }
        });
    }

    sync() {}

    getValuesForDimensionsDropdown() {
        let fields = sourceDataFilesSidebar.columnDefs;
        let dimensions = [];
        for (const key in fields) {
            const field = fields[key];
            if (field.slug === 'value' || !field.selected) {
                continue;
            }
            dimensions.push(field);
        }

        return dimensions;
    }

    addNewLabelRule() {
        $('#tableCellModal .modal-body ._label-properties ._add-new-label-rule').before(
            this.generateDimensionPickerContainer()
        );

        const dimensionsSelector = $('#tableCellModal ._label-properties ._dimension-picker').last();
        const overwriteValueSelector = $('#tableCellModal ._label-properties ._overwrite-value').last();
        new wijmo.input.ComboBox(dimensionsSelector[0], {
            displayMemberPath: 'label',
            selectedValuePath: 'slug',
            isEditable: true,
            itemsSource: this.getValuesForDimensionsDropdown()
        });
        new wijmo.input.InputMask(overwriteValueSelector[0], {
            isRequired: false
        });
    }

    generateDimensionPickerContainer() {
        let removeButton = '';
        if ($('._dimension-picker-container').length) {
            removeButton = '<div class="btn btn-danger _remove-rule">Remove dimension</div>';
        }

        return (
            '<div class="_dimension-picker-container">' +
            '<div class="_field"><div class="_name">Overwrite</div><div class="_overwrite-value"></div></div>' +
            '<div class="_field"><div class="_name">Dimension</div><div class="_dimension-picker"></div></div>' +
            removeButton +
            '</div>'
        );
    }

    generateDimensionsInputContainerForLabelView() {
        const fileCellProperties = sourceFilesService.getCurrentSourceFile().cellProperties;
        this.rangeInput._setText(this.getCommonValueForSelection('range'));
        $('._dimension-picker-container').remove();
        $('#tableCellModal ._label-properties ._add-new-label-rule').css('display', '');

        if (sourceDataFiles.flexGrid.selection.isSingleCell) {
            const col = sourceDataFiles.flexGrid.selection._col;
            const row = sourceDataFiles.flexGrid.selection._row;
            const dimensions = get(fileCellProperties, `[${col}][${row}]['labelDimension']`);
            if (dimensions && dimensions.length > 1) {
                dimensions.map((dimension, index) => {
                    $('#tableCellModal .modal-body ._label-properties ._add-new-label-rule').before(
                        this.generateDimensionPickerContainer()
                    );

                    const dimensionsSelector = $('#tableCellModal ._label-properties ._dimension-picker').last();
                    const labelDimensionsInput = new wijmo.input.ComboBox(dimensionsSelector[0], {
                        displayMemberPath: 'label',
                        selectedValuePath: 'slug',
                        isEditable: true,
                        itemsSource: this.getValuesForDimensionsDropdown()
                    });
                    labelDimensionsInput.text = dimension;

                    const overwriteValueSelector = $('#tableCellModal ._label-properties ._overwrite-value').last();
                    const overwriteValueInput = new wijmo.input.InputMask(overwriteValueSelector[0], {
                        isRequired: false
                    });
                    let overwriteVal = get(fileCellProperties, `[${col}][${row}]['overwriteValue'][${index}]`);
                    overwriteVal = overwriteVal ? overwriteVal : '';
                    overwriteValueInput.rawValue = overwriteVal;
                });
            } else {
                this.createLabelPropertiesContainer(
                    get(fileCellProperties, `[${col}][${row}]['labelDimension'][0]`),
                    get(fileCellProperties, `[${col}][${row}]['overwriteValue'][0]`)
                );
            }
        } else {
            let sel = sourceDataFiles.flexGrid.selection;
            for (let col = sel.leftCol; col <= sel.rightCol; col++) {
                for (let row = sel.topRow; row <= sel.bottomRow; row++) {
                    const dimensions = get(fileCellProperties, `[${col}][${row}]['labelDimension']`);
                    if (dimensions && dimensions.length > 1) {
                        $('#tableCellModal ._label-properties ._add-new-label-rule').css('display', 'none');

                        return;
                    }
                }
            }

            this.createLabelPropertiesContainer();
            const labelDimensionsInput = $('#tableCellModal ._label-properties ._dimension-picker input');
            const overwriteValueInput = $('#tableCellModal ._label-properties ._overwrite-value input');
            if (Array.isArray(this.labelMultipleDimensions)) {
                if (this.labelMultipleDimensions.length > 1) {
                    labelDimensionsInput.val('Multiple values');
                } else if (this.labelMultipleDimensions.length === 1) {
                    labelDimensionsInput.val(this.labelMultipleDimensions[0]);
                } else {
                    labelDimensionsInput.val('');
                }
            }

            if (Array.isArray(this.labelMultipleOverwriteValues)) {
                if (this.labelMultipleOverwriteValues.length > 1) {
                    overwriteValueInput.val('Multiple values');
                } else if (this.labelMultipleOverwriteValues.length === 1) {
                    overwriteValueInput.val(this.labelMultipleOverwriteValues[0]);
                } else {
                    overwriteValueInput.val('');
                }
            }
        }
    }

    createLabelPropertiesContainer(dimension = '', overwriteVal = '') {
        $('#tableCellModal .modal-body ._label-properties ._add-new-label-rule').before(
            this.generateDimensionPickerContainer()
        );
        const labelDimensionsInput = new wijmo.input.ComboBox(
            $('#tableCellModal ._label-properties ._dimension-picker')[0],
            {
                displayMemberPath: 'label',
                selectedValuePath: 'slug',
                isEditable: true,
                itemsSource: this.getValuesForDimensionsDropdown()
            }
        );
        labelDimensionsInput.text = dimension;

        overwriteVal = overwriteVal ? overwriteVal : '';
        const overwriteValueInput = new wijmo.input.InputMask(
            $('#tableCellModal ._label-properties ._overwrite-value')[0],
            {
                isRequired: false,
                rawValue: overwriteVal
            }
        );
    }

    highlightRangeCells(range) {
        const rangeArray = range.split(':');
        const rangeLeft = rangeArray[0].slice(0, rangeArray[0].length);
        const rangeRight = rangeArray[1].slice(0, rangeArray[1].length);
        let row = rangeLeft.replace(/^\D+/g, '');
        let col = XLSX.utils.decode_col(rangeArray[0].replace(row, ''));
        row = Number(row) - 1;
        let row1 = rangeRight.replace(/^\D+/g, '');
        let col1 = XLSX.utils.decode_col(rangeArray[1].replace(row1, ''));
        row1 = Number(row1) - 1;
        row = Math.min(row, row1);
        row1 = Math.max(row, row1);
        col = Math.min(col, col1);
        col1 = Math.max(col, col1);

        if (row === row1) {
            // First cell.
            $(sourceDataFiles.flexGrid.cells.getCellElement(row, col)).css('border-left', '1px solid #5797e9');

            // Last cell.
            $(sourceDataFiles.flexGrid.cells.getCellElement(row, col1)).css('border-right', '1px solid #5797e9');

            for (let i = col; i <= col1; i++) {
                const cell = $(sourceDataFiles.flexGrid.cells.getCellElement(row, i));
                cell.css('border-top', '1px solid #5797e9');
                cell.css('border-bottom', '1px solid #5797e9');
            }

            $('#tableCellModal .modal-dialog').data('line_range', true);

            return;
        }

        if (col === col1) {
            // First cell.
            $(sourceDataFiles.flexGrid.cells.getCellElement(row, col)).css('border-top', '1px solid #5797e9');

            // Last cell.
            $(sourceDataFiles.flexGrid.cells.getCellElement(row1, col)).css('border-bottom', '1px solid #5797e9');

            for (let i = row; i <= row1; i++) {
                const cell = $(sourceDataFiles.flexGrid.cells.getCellElement(i, col));
                cell.css('border-left', '1px solid #5797e9');
                cell.css('border-right', '1px solid #5797e9');
            }
        } else {
            for (let i = col; i <= col1; i++) {
                const cellTop = $(sourceDataFiles.flexGrid.cells.getCellElement(row, i));
                const cellBottom = $(sourceDataFiles.flexGrid.cells.getCellElement(row1, i));
                cellTop.css('border-top', '1px solid #5797e9');
                cellBottom.css('border-bottom', '1px solid #5797e9');
            }

            for (let i = row; i <= row1; i++) {
                const cellLeft = $(sourceDataFiles.flexGrid.cells.getCellElement(i, col));
                const cellRight = $(sourceDataFiles.flexGrid.cells.getCellElement(i, col1));
                cellLeft.css('border-left', '1px solid #5797e9');
                cellRight.css('border-right', '1px solid #5797e9');
            }
        }
    }

    detachSubmitFormButton(prevSelection, newSelection, button, prevBtn) {
        if (this.applyButton) {
            if (this.previousSelection === prevSelection) {
                $('.modal-footer').prepend(this.applyButton[0]);
                $(`.${prevBtn}`)
                    .attr('disabled', false)
                    .css('display', '');
                this.applyButton = $(`.${button}`).detach();
            }
        } else {
            this.applyButton = $(`.${button}`).detach();
        }
        this.previousSelection = newSelection;
    }

    displayContentForCellModalForLabelView() {
        this.detachSubmitFormButton('data', 'label', '_apply-and-next', '_save-cell-properties');

        this.generateDimensionsInputContainerForLabelView();

        // Hightlight range cells.
        if (sourceDataFiles.flexGrid.selection.isSingleCell) {
            const col = sourceDataFiles.flexGrid.selection._col;
            const row = sourceDataFiles.flexGrid.selection._row;

            const fileCellProperties = sourceFilesService.getCurrentSourceFile().cellProperties;
            const range = get(fileCellProperties, `[${col}][${row}][range]`);
            if (range) {
                this.highlightRangeCells(range);
            }
        }
    }

    generateLabelDimensionsForModalInputsInDataView() {
        const file = sourceFilesService.getCurrentSourceFile();
        const fileCellProperties = file.cellProperties;
        const formDimensions = file.formDimensions;
        let labelDimensions2 = [];
        let labelDimensions = [];

        Object.keys(fileCellProperties).forEach(col => {
            Object.keys(fileCellProperties[col]).forEach(row => {
                if (fileCellProperties[col][row].cellType === 'label') {
                    const dimension = fileCellProperties[col][row].labelDimension;
                    const value = fileCellProperties[col][row].overwriteValue
                        ? fileCellProperties[col][row].overwriteValue
                        : fileCellProperties[col][row].value;

                    if (Array.isArray(dimension)) {
                        dimension.map((dimensionValue, index) => {
                            const dimensionObject = sourceDataFilesSidebar.columnDefs.filter(obj => {
                                return obj.label === dimensionValue;
                            });

                            if (dimensionObject.length) {
                                const dimensionSlug = dimensionObject[0].slug;

                                labelDimensions2 = union(labelDimensions2, [dimensionSlug]);
                                labelDimensions[dimensionSlug] = union([], labelDimensions[dimensionSlug], [
                                    value[index]
                                ]);
                            }
                        });
                    } else {
                        labelDimensions2 = union(labelDimensions2, [dimension]);
                        labelDimensions[dimension] = union([], labelDimensions[dimension], [value]);
                    }
                }

                if (fileCellProperties[col][row].cellType === 'data') {
                    const cell = fileCellProperties[col][row];
                    Object.keys(cell).forEach(function(key) {
                        if (formDimensions.includes(key)) {
                            if (cell[key]) {
                                const value = cell[key];
                                labelDimensions2 = union(labelDimensions2, [key]);
                                labelDimensions[key] = union([], labelDimensions[key], [value]);
                            }
                        }
                    });
                }
            });
        });

        return labelDimensions;
    }

    setCellTypeForCellModal(type) {
        // $('#tableCellModal ._range-picker').parent().css('display', '');
        $('#tableCellModal .modal-body').data('cell_type', type);
        $('#tableCellModal ._range-picker')
            .parent()
            .css('display', type === 'label' ? '' : 'none');
        $('#tableCellModal ._label-properties').css('display', type === 'label' ? '' : 'none');
        $('#tableCellModal ._data-properties').css('display', type === 'data' ? '' : 'none');
        $('#tableCellModal ._apply-and-next')
            .css('display', type === 'data' ? '' : 'none')
            .prop('disabled', type === 'data' ? false : true);
        $('#tableCellModal ._save-cell-properties')
            .css('display', type !== 'data' ? '' : 'none')
            .prop('disabled', type !== 'data' ? false : true);

        switch (type) {
            case 'data':
                $('#cellModalSwitchData').prop('checked', true);
                this.displayContentForCellModalForDataView();
                break;

            case 'label':
                $('#cellModalSwitchLabel').prop('checked', true);
                this.displayContentForCellModalForLabelView();
                break;

            case 'notUsed':
            default:
                $('#cellModalSwitchNotUsed').prop('checked', true);
                break;
        }
    }

    displayContentForCellModalForDataView() {
        const labelDimensions = this.generateLabelDimensionsForModalInputsInDataView();
        const fileCellProperties = sourceFilesService.getCurrentSourceFile().cellProperties;
        this.detachSubmitFormButton('label', 'data', '_save-cell-properties', '_apply-and-next');

        // Load settings from cell data.
        let inputFields = {};
        if (sourceDataFiles.flexGrid.selection.isSingleCell) {
            let sel = sourceDataFiles.flexGrid.selection;
            const cellProperties = get(fileCellProperties, `[${sel.leftCol}][${sel.topRow}]`);
            if (cellProperties) {
                Object.keys(cellProperties).forEach(function(key) {
                    inputFields[key] = cellProperties[key];
                });
            }
        } else {
            inputFields = this.multipleCellsInputFields;
        }

        // Remove previous stuff.
        this.modalInputs.forEach(modalInput => {
            modalInput.dispose();
        });
        this.modalInputs.length = 0;
        this.form.find('._data-properties ._field').remove();

        // Add fields.
        const dataset = storageService.getCurrentDataPoints();
        let fields = sourceDataFilesSidebar.columnDefs;
        for (const key in fields) {
            const field = fields[key];
            if (field.slug === 'value' || !field.selected) {
                continue;
            }

            const e = this.fieldTemplate.clone();
            e.find('._name').text(field.label);
            this.form.find('._fields._data-properties').append(e);

            // Dropdown values
            let values;
            switch (field.slug) {
                case 'attribute__global_terms':
                    values = common.getGlobalTerms();
                    break;

                case 'parent_attribute':
                    values = common.getUniqueValues(dataset, 'attribute');
                    break;

                default:
                    values = common.getUniqueValues(dataset, field.slug);
                    break;
            }

            values = union(values, labelDimensions[field.slug]);
            // Create input.
            const input = new wijmo.input.AutoComplete(e.find('._input')[0], {
                itemsSource: values.reverse(),
                onGotFocus: () => {
                    this.dropdownValue = input.text;

                    addFileSteps.fileWorkflow.enableClickToCopyMode((fileWorkflow, e) => {
                        const activeCell = $(sourceDataFiles.flexGrid.cells.getCellElement(e._rng._row, e._rng._col));
                        const inputElement = $(input._elRef);

                        // Copy value from cell to focused input.
                        sourceDataTableCellModal.hasUnsavedChanges = true;
                        inputElement.val(activeCell.text());

                        fileWorkflow.disableSelection = true;
                        e.cancel = true;
                        inputElement.animate({ backgroundColor: '#449D44' }, 200);
                        inputElement.animate({ backgroundColor: 'rgba(0, 0, 0, 0)' }, 150).blur(function(e) {
                            setTimeout(function() {
                                input.focus();
                            }, 20);
                        });
                    });
                },
                textChanged: e => {
                    if (this.dropdownValue && sourceDataFiles.flexGrid.selection.isSingleCell) {
                        // Check if is applied label.
                        const file = sourceFilesService.getCurrentSourceFile();
                        const table = sourceDataFiles.flexGrid.itemsSource;
                        const selectedCol = sourceDataFiles.flexGrid.selection._col;
                        const selectedRow = sourceDataFiles.flexGrid.selection._row;

                        check_label: {
                            for (let row = 0; row < table.length; row++) {
                                for (let col = 0; col < table[row].length; col++) {
                                    const cellType = get(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                                    if (cellType === 'label') {
                                        let range = get(file.cellProperties, `[${col}][${row}]['range']`, false);
                                        range = XLSX.utils.decode_range(range);
                                        const cellVal = sourceDataFiles.flexGrid.getCellData(row, col, true);

                                        if (
                                            cellVal === this.dropdownValue &&
                                            selectedCol >= range.s.c &&
                                            selectedCol <= range.e.c &&
                                            selectedRow >= range.s.r &&
                                            selectedRow <= range.e.r
                                        ) {
                                            if (
                                                !confirm(
                                                    'This value was applied by a label. Are you sure you want to change it?'
                                                )
                                            ) {
                                                $(e._e)
                                                    .find('input')
                                                    .val(this.dropdownValue);
                                                this.dropdownValue = '';
                                                document.activeElement.blur();
                                                if (this.appliedLabelChangeCounter) {
                                                    this.appliedLabelChangeCounter--;
                                                }

                                                return false;
                                            } else {
                                                // file.cellProperties[selectedCol][selectedRow]['appliedLabelWarning'] = true;
                                                this.appliedLabelChangeCounter++;
                                                this.dropdownValue = input.text;
                                            }

                                            break check_label;
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                onLostFocus: () => {
                    this.dropdownValue = '';
                    addFileSteps.fileWorkflow.enableModal();
                }
            });
            input._kosmosField = field.slug;
            this.modalInputs.push(input);

            // Default value.
            if (field.slug in inputFields) {
                if (sourceDataFiles.flexGrid.selection.isSingleCell) {
                    input._setText(inputFields[field.slug]);
                } else {
                    if (Array.isArray(inputFields[field.slug])) {
                        if (inputFields[field.slug].length > 1) {
                            input._setText('Multiple values');
                        } else if (inputFields[field.slug].length === 1) {
                            input._setText(inputFields[field.slug][0]);
                        } else {
                            input._setText('');
                        }
                    }
                }
            } else {
                input._setText('');
            }

            // Add events.
            input.textChanged.addHandler(() => {
                this.hasUnsavedChanges = true;
            });
        }
    }

    displayContentForCellModal(activeCell) {
        // Set title of cell modal.
        $('#tableCellModal .modal-title').text(activeCell.text());

        // Add Data | Label switch.
        if (!$('#tableCellModal ._data-label-switch').length) {
            const labelInput =
                '<label class="_modal-switch-label-left"><input disabled type="radio" id="cellModalSwitchData" name="data-label-switch" value="data">Data</label>';
            const dataInput =
                '<label class="_modal-switch-label-middle"><input disabled type="radio" id="cellModalSwitchLabel" name="data-label-switch" value="label">Label</label>';
            const notUsedInput =
                '<label class="_modal-switch-label-right"><input disabled type="radio" id="cellModalSwitchNotUsed" name="data-label-switch" value="notUsed">Not used</label>';
            const divRadioContainer =
                '<div class="_data-label-switch">' + labelInput + dataInput + notUsedInput + '</div>';
            this.form.prepend(divRadioContainer);

            $('#tableCellModal ._data-label-switch input[type=radio][name=data-label-switch]').change(e => {
                const value = $(e.currentTarget).val();
                this.setCellTypeForCellModal(value);
            });
        }

        const file = sourceFilesService.getCurrentSourceFile();
        if (sourceDataEditTableCell.newCellIsBeingEdited) {
            sourceDataEditTableCell.newCellIsBeingEdited = false;

            let sel = sourceDataFiles.flexGrid.selection;
            const cellType = get(file, `cellProperties[${sel.leftCol}][${sel.topRow}].cellType`);
            this.setCellTypeForCellModal(cellType);
        }
    }

    displayContentForCellsModal() {
        const grid = sourceDataFiles.flexGrid;
        let sel = grid.selection;
        let cellType = '';
        const project = storageService.getCurrentProject();
        const sourceFile = sourceFilesService.getCurrentSourceFile();
        let inputFields = {};
        project.getDimensions().map(dimension => {
            inputFields[dimension.slug] = [];
        });
        inputFields['cellType'] = [];
        inputFields['dataPointId'] = [];

        // Set title of cell modal.
        const modalTitle = XLSX.utils.encode_range({
            s: { r: sel.topRow, c: sel.leftCol },
            e: { r: sel.bottomRow, c: sel.rightCol }
        });
        $('#tableCellModal .modal-title').text(modalTitle);

        this.labelMultipleDimensions = [];
        for (let row = sel.topRow; row <= sel.bottomRow; row++) {
            for (let col = sel.leftCol; col <= sel.rightCol; col++) {
                const cellProperties = sourceFile.getSingleCellProperties(row, col);

                if (cellProperties.cellType === 'label') {
                    if (cellType !== 'data') {
                        cellType = 'label';
                    }

                    if (addFileSteps.ingestionStep === addFileSteps.DEFINE_DATA_STEP) {
                        let dimension = get(cellProperties, `['labelDimension'][0]`);
                        dimension = dimension ? dimension : '';
                        this.labelMultipleDimensions = union(this.labelMultipleDimensions, [dimension]);

                        let overwriteValue = get(cellProperties, `['overwriteValue'][0]`);
                        overwriteValue = overwriteValue ? overwriteValue : '';
                        this.labelMultipleOverwriteValues = union(this.labelMultipleOverwriteValues, [overwriteValue]);
                    }
                }

                if (cellProperties.cellType === 'data') {
                    cellType = 'data';
                } else {
                    continue;
                }

                // Prepare inputFields.
                Object.keys(inputFields).forEach(function(key) {
                    if (cellProperties[key]) {
                        inputFields[key] = union(inputFields[key], [cellProperties[key]]);
                    } else {
                        if (key !== 'cellType' && key !== 'dataPointId') {
                            if (inputFields[key].length) {
                                inputFields[key] = union(inputFields[key], ['']);
                            } else {
                                inputFields[key] = concat(inputFields[key], ['']);
                            }
                        }
                    }
                });
            }
        }

        this.multipleCellsInputFields = inputFields;

        this.setCellTypeForCellModal(cellType);
    }

    // Get the common value for the currect selection of cells, or a string indicating multiple values.
    getCommonValueForSelection(property) {
        const sel = sourceDataFiles.flexGrid.selection;
        const fileCellProperties = sourceFilesService.getCurrentSourceFile().cellProperties;
        let values = {};

        // Get all values.
        for (let col = sel.leftCol; col <= sel.rightCol; col++) {
            for (let row = sel.topRow; row <= sel.bottomRow; row++) {
                let value = get(fileCellProperties, `[${col}][${row}][${property}]`);

                if (!value && value !== 0) {
                    value = '';
                }

                values[value] = true;
            }
        }
        values = Object.keys(values);

        if (values.length > 1) {
            return 'Multiple values';
        } else if (values.length === 1) {
            return values[0];
        }

        return '';
    }

    setCommonProperty(object, property, value) {
        if (value === 'Multiple values') {
            return;
        }

        object[property] = value;
    }
}

export const sourceDataTableCellModal = new SourceDataTableCellModal();
