import { sourceFilesService } from '../../../services/SourceFilesService';
import { sourceDataFilesSidebar } from './SourceDataFilesSidebar';

export class FileWorkflowAutoDetectTable {
    constructor() {}

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    autoDetectTable(selection) {
        const sourceFile = sourceFilesService.getCurrentSourceFile();

        // Get range of data-points.
        let dataPointsFound = false;
        let dataFirstRow = sourceFile.getNumberOfRows();
        let dataLastRow = 0;
        let dataFirstColumn = sourceFile.getNumberOfCols();
        let dataLastColumn = 0;
        for (let i = selection.leftCol; i <= selection.rightCol; i++) {
            for (let j = selection.topRow; j <= selection.bottomRow; j++) {
                const cellProperties = sourceFile.getSingleCellProperties(j, i);

                if (cellProperties.cellType !== 'data') {
                    continue;
                }

                // Found at least one data point.
                dataPointsFound = true;

                // Adjust range.
                dataFirstRow = Math.min(dataFirstRow, j);
                dataLastRow = Math.max(dataLastRow, j);
                dataFirstColumn = Math.min(dataFirstColumn, i);
                dataLastColumn = Math.max(dataLastColumn, i);
            }
        }

        // No data-points?
        if (!dataPointsFound) {
            alert('You must assign the data-points first.');
            return;
        }

        // Everything else becomes a label.
        for (let i = selection.leftCol; i <= selection.rightCol; i++) {
            for (let j = selection.topRow; j <= selection.bottomRow; j++) {
                let cellProperties = sourceFile.getSingleCellProperties(j, i);
                const cellValue = sourceFile.getCellValue(j, i);

                if (cellProperties.cellType === 'data' || cellValue === '') {
                    continue;
                }

                cellProperties.cellType = 'label';

                let range = '';

                // Check for data-point on the same row.
                let dataOnRow = false;
                for (let ii = dataFirstColumn; ii <= dataLastColumn; ii++) {
                    const thisCellProperties = sourceFile.getSingleCellProperties(j, ii);

                    if (thisCellProperties.cellType === 'data') {
                        dataOnRow = true;
                    }
                }
                if (dataOnRow) {
                    range = XLSX.utils.encode_range({ r: j, c: dataFirstColumn }, { r: j, c: dataLastColumn });
                }

                let dataOnColumn = false;
                for (let jj = dataFirstRow; jj <= dataLastRow; jj++) {
                    const thisCellProperties = sourceFile.getSingleCellProperties(jj, i);

                    if (thisCellProperties.cellType === 'data') {
                        dataOnColumn = true;
                    }
                }
                if (dataOnColumn) {
                    range = XLSX.utils.encode_range({ r: dataFirstRow, c: i }, { r: dataLastRow, c: i });
                }

                // Apply to all data-points.
                if (
                    !dataOnRow &&
                    !dataOnColumn &&
                    (j < dataFirstRow || j > dataLastRow) &&
                    (i < dataFirstColumn || i > dataLastColumn)
                ) {
                    range = XLSX.utils.encode_range(
                        { r: dataFirstRow, c: dataFirstColumn },
                        { r: dataLastRow, c: dataLastColumn }
                    );
                }

                // We must get the cellProperties again, the object might have been overwrriten.
                cellProperties = sourceFile.getSingleCellProperties(j, i);

                // Apply new range.
                cellProperties.range = range;

                // Re-apply dimensions to data-points.
                sourceFilesService.applyDimensions(cellProperties, sourceDataFilesSidebar.columnDefs);
            }
        }
    }
}
