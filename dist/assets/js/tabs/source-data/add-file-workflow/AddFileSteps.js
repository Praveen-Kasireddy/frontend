import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import includes from 'lodash/includes';
import setWith from 'lodash/setWith';
import { common } from '../../../Common';
import { constants } from '../../../Constants';
import { resizableDivider } from '../../../ResizableDivider';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';
import { FileWorkflow } from '../../../tabs/source-data/add-file-workflow/FileWorkflow';
import { FileWorkflowStep1 } from '../../../tabs/source-data/add-file-workflow/FileWorkflowStep1';
import { FileWorkflowStep2 } from '../../../tabs/source-data/add-file-workflow/FileWorkflowStep2';
import { FileWorkflowStep3 } from '../../../tabs/source-data/add-file-workflow/FileWorkflowStep3';
import { FileWorkflowStep4 } from '../../../tabs/source-data/add-file-workflow/FileWorkflowStep4';
import { sourceDataEditTableCell } from '../../../tabs/source-data/add-file-workflow/SourceDataEditTableCell';
import { sourceDataFilesReviewTable } from '../../../tabs/source-data/add-file-workflow/SourceDataFilesReviewTable';
import { sourceDataFilesSidebar } from '../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar';
import { addManualSidebar } from '../../../tabs/source-data/add-manual-workflow/AddManualSidebar';
import { sourceData } from '../../../tabs/source-data/SourceData';
import { sourceDataFiles } from '../../../tabs/source-data/SourceDataFiles';

class AddFileSteps {
    constructor() {
        this.ingestionStep = 1;
        this.container = $('#source_data');
        this.fileWorkflow = new FileWorkflow();
        this.DEFINE_DATA_STEP = 1;
        this.STRUCTURE_DATA_STEP = 2;
        this.GLOBAL_MAPPING_STEP = 3;
        this.REVIEW_STEP = 4;
        this.FINISH_STEP = 5;
        this.steps = [
            new FileWorkflowStep1(this.container, this.fileWorkflow),
            new FileWorkflowStep2(this.container, this.fileWorkflow),
            new FileWorkflowStep3(this.container, this.fileWorkflow),
            new FileWorkflowStep4(this.container, this.fileWorkflow)
        ];

        /** @type {Project} */
        this.project = null;

        this.labelBrushesColors = constants.getAllColors();
    }

    init() {
        // Back
        $('#source_data_files_sidebar ._ingestion-steps ._back').on('click', () => {
            this.ingestionPrevStepSwitch();
        });

        // Next
        $('#source_data_files_sidebar ._ingestion-steps ._next').on('click', () => {
            this.ingestionNextStepSwitch();
        });

        // Jump to a specific step.
        $('#source_data_files_pre_ingestion ._ingestion-steps-display ._step').on('click', e => {
            const step = parseInt($(e.currentTarget).attr('data-step'));
            this.headerStepNav(step);
        });

        const mySlider = $('#_zoom-slider')
            .bootstrapSlider({
                min: 25,
                max: 100,
                step: 1,
                value: 100,
                selection: 'before',
                tooltip: 'show',
                formatter: value => {
                    return value + '%';
                }
            })
            .on('slide', function(evt) {
                let zoomValue = mySlider.bootstrapSlider('getValue') / 100;

                $('#source_data_files ._table')
                    .first()
                    .css('zoom', zoomValue);
            });
    }

    sync() {}

    cancelWorkflow() {
        const confirmation = confirm('Are you sure you want to cancel?');
        if (!confirmation) {
            return;
        }

        this.steps[2].inputsValues = {};
        if (this.steps[2].dimensionSelect.selectedItem) {
            this.steps[2].changeDimension();
            this.steps[2].changeDictionary();
        }

        sourceData.endWorkflow();
        $('#source_data_files_pre_ingestion').hide();
        $('#source_data_files_sidebar').css('display', 'none');
        $('#source_data_import_table').val('');
        $('ul.nav a[href="#dropbox"]').trigger('click');
        sourceDataEditTableCell.firstCellAutomaticSelectionFinished = false;

        // Unfreeze columns and rows.
        sourceDataFiles.flexGrid.frozenColumns = 0;
        sourceDataFiles.flexGrid.frozenRows = 0;

        storageService.syncViews();
    }

    headerStepNav(step) {
        if (step < this.ingestionStep) {
            this.prevStep(step);
        } else {
            switch (step) {
                case 2:
                    this.updateDimensionsForDefDataPointsStep();
                    this.structureDataStep();
                    break;

                case 3:
                    this.globalMappingStep();
                    break;

                case 4:
                    this.updateDimensionsForDefDataPointsStep();
                    this.saveCurrentDataPoints();
                    this.reviewStep();
                    break;

                case 5:
                    this.finishStep();
                    break;
            }
        }
    }

    defineLabelsStep() {
        const file = sourceFilesService.getCurrentSourceFile();
        if (!file) {
            return;
        }

        const tableSource = sourceDataFiles.flexGrid.itemsSource;

        // Display the Brushes list of dimensions.
        const dimensions = sourceDataFilesSidebar.columnDefs;
        dimensions.map((dimension, index) => {
            if (dimension.selected) {
                const container = $('<div class="_brush-container"></div>');
                const div = $('<div class="_brush _label-brush"></div>');
                const rangeDiv = $('<div class="_label-brush-range"></div>');
                const globalDiv = $('<div class="_label-global"></div>');
                const backgroundColor = this.labelBrushesColors[index];
                const color = constants.getTextColorForBackground(backgroundColor);
                div.css('background-color', backgroundColor);
                div.css('color', color);
                div.attr('data-dimension', dimension.label);
                div.html(dimension.label);
                div.prepend('<i class="fa fa-paint-brush" aria-hidden="true"></i> ');
                rangeDiv.css('background-color', backgroundColor);
                rangeDiv.css('color', color);
                globalDiv.css('background-color', backgroundColor);
                globalDiv.css('color', color);
                container
                    .append(div)
                    .append(rangeDiv)
                    .append(globalDiv);
                $('.brush-section').append(container);

                // Define range for each dimension.
                this.defineRangeForEachDimension(tableSource, rangeDiv, div, file, dimension);
            }
        });
    }

    defineRangeForEachDimension(tableSource, rangeDiv, div, file, dimension) {
        const ranges = [];
        const rangeText = [];
        for (let i = 0; i < tableSource.length; i++) {
            ranges[i] = new Array(tableSource[0].length);
            for (let j = 0; j < tableSource[0].length; j++) {
                ranges[i][j] = false;
            }
        }
        tableSource.map((row, r) => {
            row.map((col, c) => {
                const labelDimension = get(file.cellProperties, `[${c}][${r}]['labelDimension']`, false);
                const isLabel = get(file.cellProperties, `[${c}][${r}]['cellType']`, false);
                if (includes(labelDimension, dimension.label) && isLabel === 'label') {
                    let range = get(file.cellProperties, `[${c}][${r}]['range']`, false);
                    range = range ? XLSX.utils.decode_range(range) : range;
                    if (range) {
                        for (let r = range.s.r; r <= range.e.r; r++) {
                            for (let c = range.s.c; c <= range.e.c; c++) {
                                ranges[r][c] = true;
                            }
                        }
                    }
                }
            });
        });

        const inRange = {};
        const rows = ranges.length;
        const cols = ranges[0].length;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let lastRow = rows - 1;
                let lastCol = cols - 1;
                if (ranges[r][c] && !get(inRange, `[${c}][${r}]`, false)) {
                    for (let i = r; i < rows; i++) {
                        if (!get(inRange, `[${c}][${i}]`, false) && ranges[i][c]) {
                            setWith(inRange, `${c}.${i}`, true, Object);
                        } else {
                            lastRow = i - 1;
                            break;
                        }
                    }

                    for (let i = c + 1; i < cols; i++) {
                        let isRange = true;
                        for (let j = r; j <= lastRow; j++) {
                            if (ranges[j][i] && !get(inRange, `[${i}][${j}]`, false)) {
                                setWith(inRange, `${i}.${j}`, true, Object);
                            } else {
                                isRange = false;
                                for (let k = j; k >= r; k--) {
                                    setWith(inRange, `${i}.${k}`, false, Object);
                                }
                                i--;

                                break;
                            }
                        }

                        if (!isRange) {
                            lastCol = i;
                            break;
                        }
                    }

                    rangeText.push(XLSX.utils.encode_range({ s: { r: r, c: c }, e: { r: lastRow, c: lastCol } }));
                }
            }
        }

        rangeDiv.html(rangeText.join(', '));
    }

    ingestionPrevStepSwitch() {
        const prevStep = this.ingestionStep - 1;
        sourceDataFilesSidebar.syncDimensionsContainer();

        this.prevStep(prevStep);
    }

    prevStep(step) {
        this.setStep(step);

        if (step === this.DEFINE_DATA_STEP) {
            sourceDataFilesSidebar.showHiddenCells();
            this.defineTablesStep();
            this.defineLabelsStep();
        }

        // Save new current ingestion step for file.
        sourceFilesService.getCurrentSourceFile().ingestionStep = this.ingestionStep;
        storageService.saveCurrentProject();

        // Display Sidebar for current step.
        sourceDataFilesSidebar.displayLoadedFileSidebar();
    }

    ingestionNextStepSwitch() {
        const nextStep = this.ingestionStep + 1;
        sourceDataFilesSidebar.syncDimensionsContainer();

        switch (nextStep) {
            case this.STRUCTURE_DATA_STEP:
                this.structureDataStep();
                break;
            case this.GLOBAL_MAPPING_STEP:
                this.globalMappingStep();
                break;
            case this.REVIEW_STEP:
                this.reviewStep();
                break;
            case this.FINISH_STEP:
                this.finishStep();
                break;
        }
    }

    async finishStep() {
        let success = true;
        let projectKey = localStorage.getItem('current_project_key');
        let thisproject = JSON.parse(localStorage.getItem(projectKey));
        localStorage.setItem('currentProject', JSON.stringify(thisproject));
        let currentFileId = localStorage.getItem('currentFileID');
        let file;
        if (!localStorage.getItem('blobExcelData')) file = sourceFilesService.getCurrentSourceFile();
        else file = get(thisproject, `sourceFiles[${currentFileId}]`);

        this.ingestionStep--;
        const project = storageService.getCurrentProject() || thisproject;

        let fileDataPointsCopyArray = [];
        let successCount = 0;
        let errors = '';

        // Add new Data Points.
        file.dataPoints.map((dataPoint, index) => {
            let dataPointCopy = _.assign({}, dataPoint);

            const col = dataPointCopy.col;
            const row = dataPointCopy.row;

            // delete dataPointCopy.source;
            delete dataPointCopy.col;
            delete dataPointCopy.row;

            const result = storageService.getCurrentProject().addDataPoint(dataPointCopy);
            if (result.success) {
                // Save the data point ID for cell.
                file.cellProperties[col][row]['dataPointId'] = result.id;
                file.cellProperties[col][row]['failedSaving'] = false;
                const dpCopy = Object.assign({}, dataPoint);
                dpCopy.id = result.id;
                fileDataPointsCopyArray.push(dpCopy);
                successCount++;
            } else {
                success = false;
                // Here add red warning that it did not get saved successfully.
                file.cellProperties[col][row]['failedSaving'] = true;
                errors += 'Error for data-point with the value = ' + dataPoint.value + ': ' + result.error + '\n';
            }
        });

        // Remove Data Points.
        file.dataPointsCopy.map(dataPoint => {
            let deleteDataPoint = true;

            file.dataPoints.map(dp => {
                if (dp.id === dataPoint.id) {
                    deleteDataPoint = false;
                }
            });

            if (deleteDataPoint) {
                project.dataPoints.splice(_.findIndex(project.dataPoints, dp => dp.id === dataPoint.id), 1);
                file.cellProperties[dataPoint.col][dataPoint.row]['dataPointId'] = 'initial';
            }
        });

        // Add data structures.
        addManualSidebar.sourceDataStructures.addDataStructuresFromProject(this.project);

        // Add global mapping structures.
        file.globalMappingStructures.map(el => {
            storageService.getCurrentProject().addDataStructure(el.dimension, el.value, null, null, el.globalTerm);
        });
        this.steps[2].inputsValues = {};

        try {
            this.steps[2].changeDimension();
            this.steps[2].changeDictionary();
        } catch (err) {
            console.log('will change later changeDimension', err);
        }

        if (success) {
            if (sourceFilesService.getCurrentSourceFile()) alert('Your changes have been saved successfully.');
        } else {
            alert(
                successCount +
                    '/' +
                    file.dataPoints.length +
                    ' data-points were saved. The following errors have occurred: ' +
                    '\n' +
                    errors
            );
        }

        // If not set to true, first time clicking on a cell will not open the modal.
        sourceDataEditTableCell.firstCellAutomaticSelectionFinished = true;

        // Unfreeze columns and rows.
        //sourceDataFiles.flexGrid.frozenColumns = 0;
        //sourceDataFiles.flexGrid.frozenRows = 0;

        file.dataPointsCopy = fileDataPointsCopyArray;
        file.ingestionStep = 1;
        //sourceDataFiles.flexGrid.refresh();
        storageService.saveCurrentProject();
        storageService.syncViews();
        sourceData.endWorkflow();
    }

    globalMappingStep() {
        this.nextStep(this.GLOBAL_MAPPING_STEP);
    }

    reviewStep() {
        this.nextStep(this.REVIEW_STEP);

        // Display new table.
        sourceDataFilesReviewTable.sync();

        // Change Next button to Finish.
        $('#source_data_files_sidebar ._ingestion-steps ._next').text('Finish');
    }

    saveCurrentDataPoints() {
        const file = sourceFilesService.getCurrentSourceFile();
        // file.dataPointsCopy = file.dataPoints;
        file.dataPoints = [];
        const columns = file.cellProperties;

        if (columns) {
            Object.keys(columns).forEach(function(i) {
                const rows = columns[i];
                Object.keys(rows).forEach(function(j) {
                    const cell = rows[j];
                    if (cell.cellType === 'data') {
                        let dataPoint = cloneDeep(cell);

                        delete dataPoint.cellType;
                        delete dataPoint.appliedLabelWarning;
                        if (dataPoint.dataPointId !== 'noID' && dataPoint.dataPointId !== 'initial') {
                            dataPoint.id = dataPoint.dataPointId;
                        }

                        delete dataPoint.dataPointId;

                        // TODO: temporary solution
                        delete dataPoint.parent_attribute;
                        delete dataPoint.global_term;

                        dataPoint.source = sourceFilesService.currentUuid;
                        dataPoint.col = i;
                        dataPoint.row = j;

                        file.dataPoints.push(dataPoint);
                    }
                });
            });
        }
    }

    structureDataStep() {
        this.nextStep(this.STRUCTURE_DATA_STEP);

        // Save current data points for file.
        this.saveCurrentDataPoints();

        // Load data structures.
        if (addFileSteps.ingestionStep === this.STRUCTURE_DATA_STEP) {
            // Get new data points.
            const file = sourceFilesService.getCurrentSourceFile();

            // Copy new data points into our project, and assign fake IDs to them as its required by the validator.
            addFileSteps.project.dataPoints = cloneDeep(file.dataPoints);
            addFileSteps.project.dataPoints = addFileSteps.project.dataPoints.reduce((dataPoints, dataPoint) => {
                dataPoint.id = common.getNextUuid();
                dataPoints.push(dataPoint);

                return dataPoints;
            }, []);

            // Use new project for data-structures screen.
            sourceDataFilesSidebar.sourceDataStructures.setProject(addFileSteps.project);
            sourceDataFilesSidebar.sourceDataStructures.sync();
        }

        storageService.saveCurrentProject();
    }

    updateDimensionsForDefDataPointsStep() {
        // Update dimensions for cell properties.
        const file = sourceFilesService.getCurrentSourceFile();
        const cellProperties = file.cellProperties;
        if (cellProperties) {
            Object.keys(cellProperties).forEach(col => {
                if (cellProperties[col]) {
                    Object.keys(cellProperties[col]).forEach(row => {
                        sourceDataFilesSidebar.columnDefs.map(dimension => {
                            if (!dimension.selected) {
                                if (cellProperties[col][row].hasOwnProperty(dimension.slug)) {
                                    cellProperties[col][row][dimension.slug] = '';
                                }
                            }
                        });
                    });
                }
            });
        }
    }

    defineTablesStep() {
        this.updateDimensionsForDefDataPointsStep();
    }

    nextStep(step) {
        this.setStep(step);

        // Save new current ingestion step for file.
        sourceFilesService.getCurrentSourceFile().ingestionStep = this.ingestionStep;
        storageService.saveCurrentProject();

        // Display Sidebar for current step and disable Data|Label Views switch.
        sourceDataFilesSidebar.displayLoadedFileSidebar();
    }

    setStep(step) {
        if (this.ingestionStep === 2) {
            resizableDivider.resetResizable('#source_data_files_pre_ingestion ._table', () => {});
        }

        $('._brush-container').remove();
        this.ingestionStep = step;

        // Reset table mode.
        this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;

        // Hide all.
        this.steps.forEach(step => {
            step.hide();
        });

        // Show current step.
        this.steps[this.ingestionStep - 1].show();

        if (this.ingestionStep === 2) {
            resizableDivider.enableResizable(
                '#source_data_files_pre_ingestion ._table',
                '.dataStructuresComponent',
                'height',
                { handles: 's' },
                { minHeight: 200, maxHeight: 800 },
                () => {}
            );
        }
    }
}

export const addFileSteps = new AddFileSteps();
