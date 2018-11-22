import { storageService } from '../../services/StorageService';
import { dataExplorerAnalyses } from './DataExplorerAnalyses';
import { dataExplorerFormulas } from './DataExplorerFormulas';
import { dataExplorerStorage } from './DataExplorerStorage';
import { dataExplorerVirtualTable } from './DataExplorerVirtualTable';

export class DataExplorerCellFormulas {
    constructor() {
        this.selectedCellRow = null;
        this.selectedCellColumn = null;
        this.table = $('#pivot');
        this.editor = $('#output_table ._formula-cell-editor');

        this.editor.on('blur', e => {
            const input = $(e.target);

            // Skip?
            if (input.prop('data-skip-blur')) {
                input.prop('data-skip-blur', false);
                return;
            }

            this.saveFormula();
        });
        this.editor.on('keydown', e => {
            // Enter
            if (e.keyCode === 13) {
                this.saveFormula();

                // Prevent adding a newline.
                e.preventDefault();
            }
        });
        this.editor.on('click', 'i', e => {
            dataExplorerFormulas.onInputBuilderClick(e);
        });
        $('#output_table ._formula-cell-editor-query').on('click', e => {
            if (!this.editor.hasClass('_active')) {
                return;
            }

            dataExplorerFormulas.onBuilderClick(this.editor, e);
        });
    }

    saveFormula() {
        // Parse input once more.
        dataExplorerFormulas.parseFormulaInput(this.editor);

        // Get formula.
        let formula = this.editor.html();
        if (formula.slice(0, 1) === '=') {
            formula = '=' + this.editor.attr('data-formula');
        }

        // Check if this differs from old formula.
        const dataExplorerAnalysis = storageService.getCurrentProject().analyses[
            dataExplorerAnalyses.currentAnalysisId
        ];
        const cellData = dataExplorerAnalysis.getCellData(this.selectedCellRow, this.selectedCellColumn);
        if (cellData.customFormula === formula) {
            return;
        }

        // Set custom formula.
        cellData.customFormula = formula;
        dataExplorerAnalysis.setCellData(this.selectedCellRow, this.selectedCellColumn, cellData);

        // Save table.
        dataExplorerStorage.save(dataExplorerAnalyses.currentAnalysisId);

        // Refresh table.
        dataExplorerVirtualTable.updateTable();
    }

    // Event when clicking a cell.
    onSelectionChanged(s, e) {
        // Disable editor for ranges (multiple cells) or headers (first row/col).
        if (e.range.isSingleCell === false || e.row === 0 || e.col === 0) {
            this.editor.removeClass('_active');
            this.editor.html('');
            return;
        }
        const row = e.row - 1;
        const col = e.col - 1;

        // Show formula editor.
        this.editor.addClass('_active');
        const customFormula = storageService.currentProject.analyses[
            dataExplorerAnalyses.currentAnalysisId
        ].getCellData(row, col).customFormula;
        this.editor.html(customFormula);
        dataExplorerFormulas.parseFormulaInput(this.editor);

        // Select cell.
        this.selectedCellRow = row;
        this.selectedCellColumn = col;
    }
}
