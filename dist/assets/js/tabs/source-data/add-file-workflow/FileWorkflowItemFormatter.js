import get from 'lodash/get';
import { constants } from '../../../Constants';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { addFileSteps } from './AddFileSteps';
import { sourceDataFilesSidebar } from './SourceDataFilesSidebar';

export class FileWorkflowItemFormatter {
    constructor() {
        // Used for cell warnings.
        this.cellWarnings = [];
        this.nextCellWarning = 0;

        // Used for cell triangles.
        this.style = null;
        this.previousFormDimensionsLength = null;
    }

    updatingView() {
        // Table is refreshing, so all of our cell-warning-elements have been detached.
        this.nextCellWarning = 0;

        // We need a source file.
        const sourceFile = sourceFilesService.getCurrentSourceFile();
        if (!sourceFile) {
            return;
        }

        // Create style element.
        if (!this.style) {
            this.style = $('<style>');
            $('html > head').append(this.style);
        }

        // Recreate CSS rules, if necessary.
        if (this.previousFormDimensionsLength !== sourceFile.formDimensions.length) {
            this.previousFormDimensionsLength = sourceFile.formDimensions.length;
            let styleHtml = '';

            for (let i = 0; i <= sourceFile.formDimensions.length; i++) {
                const ratio = i / sourceFile.formDimensions.length;
                const color = chroma
                    .mix(
                        constants.FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN,
                        constants.FILE_WORKFLOW_CELL_PROGRESS_COLOR_END,
                        ratio,
                        'lab'
                    )
                    .hex();
                const background =
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15'><polygon points='0,0 15,0 0,15' style='fill:" +
                    color +
                    '\'></polygon></svg>")';

                styleHtml +=
                    '.wj-cell[data-type="data"][data-ratio="' +
                    Math.round(ratio * 100) +
                    '"] { background-image: ' +
                    background +
                    ' !important; background-repeat: no-repeat !important; background-position: 0 0 !important; }\n';
            }

            // Save rules.
            this.style.html(styleHtml);
        }
    }

    formatItem(s, e) {
        const cellElement = $(e.cell);

        if (cellElement.hasClass('wj-header')) {
            return;
        }

        // Reset everything, because cells are reused.
        const css = {
            background: '',
            'background-color': '',
            color: ''
        };

        const col = e._rng._col;
        const row = e._rng._row;
        const sourceFile = sourceFilesService.getCurrentSourceFile();
        const cell = get(sourceFile, `cellProperties[${col}][${row}]`);

        // No cell properties? Just reset everything and return early.
        if (!cell) {
            cellElement.attr('data-type', '');
            cellElement.css(css);
            return;
        }

        if (cell.cellType === 'data') {
            // Add inverse operator
            if (cell.inverse === 'Yes') {
                // Check if cell value is percentage or other format which should be ignored.
                let cellValString = cell.value.toString();
                const isPercentage = this.isPercentage(cellValString);
                cellValString = this.removePercentage(cellValString, isPercentage);

                if (!isNaN(cellValString)) {
                    cellValString = cellValString * -1;
                }

                cellValString = this.applyPercentage(cellValString, isPercentage);

                cellElement.text(cellValString);
            }

            // Add 2 decimals to numbers.
            if (cell.value !== '' && cell.value !== null) {
                // Check if cell value is percentage or other format which should be ignored.
                let cellValue = cellElement.text();
                const isPercentage = this.isPercentage(cellValue);
                cellValue = this.removePercentage(cellValue, isPercentage);

                if (!isNaN(parseFloat(cellValue.replace(/,/g, '')))) {
                    cellValue = parseFloat(cellValue.replace(/,/g, ''));
                    cellValue = this.addZeroes(cellValue);
                }

                cellValue = this.applyPercentage(cellValue, isPercentage);
                cellElement.text(cellValue);
            }

            // Set ratio.
            const ratio = sourceFile.getCellCompletionPercentage(row, col);
            cellElement.attr('data-ratio', Math.round(ratio * 100));

            if (cell.appliedLabelWarning) {
                const cellWarning = this.getNextCellWarning();
                cellElement.append(cellWarning);
            }

            if (cell.failedSaving === true) {
                css['background-color'] = '#ff5c52';
            }
        } else if (cell.cellType === 'label') {
            const dimension = get(cell, `labelDimension[0]`);
            if (dimension) {
                // Get color for dimension.
                let colorIndex = 0;
                for (let i = 0; i < sourceDataFilesSidebar.columnDefs.length; i++) {
                    if (sourceDataFilesSidebar.columnDefs[i].label === dimension) {
                        colorIndex = i;
                        break;
                    }
                }

                // Apply color.
                const backgroundColor = addFileSteps.labelBrushesColors[colorIndex];
                css['background-color'] = backgroundColor;
                css['color'] = constants.getTextColorForBackground(backgroundColor);
            } else {
                css['background-color'] = '#a9e2ff';
            }
        }

        // Apply CSS in bulk.
        cellElement.css(css);

        // Save cell-type as attribute, used by CSS selectors.
        cellElement.attr('data-type', cell.cellType);
    }

    addZeroes(num) {
        num = num.toString();
        let value = Number(num);

        if (isNaN(value)) {
            return;
        }

        let res = num.split('.');
        if (res.length === 1 || res[1].length < 3) {
            value = value.toFixed(2);
        }
        return value;
    }

    isPercentage(cellValString) {
        let isPercentage = false;

        if (cellValString.indexOf('%') > -1) {
            isPercentage = true;
        }
        return isPercentage;
    }

    removePercentage(cellValString, isPercentage) {
        if (isPercentage) {
            cellValString = cellValString.replace('%', '');
        }
        return cellValString;
    }

    applyPercentage(cellValString, isPercentage) {
        if (isPercentage) {
            cellValString = cellValString + '%';
        }

        return cellValString;
    }

    getNextCellWarning() {
        if (this.cellWarnings.length > this.nextCellWarning) {
            // Reuse existing.
            return this.cellWarnings[this.nextCellWarning++];
        } else {
            // Create new element.
            const element = $(
                '<div class="_applied-label-warning"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>'
            );
            this.cellWarnings.push(element);
            this.nextCellWarning++;
            return element;
        }
    }
}
