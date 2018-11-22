import get from 'lodash/get';
import { storageService } from './StorageService';

class SourceFilesService {
    constructor() {
        this.currentUuid = null;
    }

    /**
     * @returns {SourceFile}
     */
    getCurrentSourceFile() {
        return get(storageService, `currentProject.sourceFiles[${this.currentUuid}]`);
    }

    applyDimensionToRange(range, dimension, value, columnDefs) {
        if (!range || !dimension) {
            return;
        }
        const dimensionObject = columnDefs.filter(obj => {
            return obj.label === dimension;
        });

        const sourceFile = this.getCurrentSourceFile();
        const rangeObject = XLSX.utils.decode_range(range);

        // Apply new value to each cell in range.
        for (let row = rangeObject.s.r; row <= rangeObject.e.r; row++) {
            for (let col = rangeObject.s.c; col <= rangeObject.e.c; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);
                properties[dimensionObject[0].slug] = value;
            }
        }
    }

    applyDimensions(properties, columnDefs) {
        if (!(properties && properties.labelDimension)) {
            return;
        }

        properties.labelDimension.map((dimension, index) => {
            const overwrittenValue = get(properties, `overwriteValue[${index}]`, '');
            const value = overwrittenValue !== '' ? overwrittenValue : properties.value;

            sourceFilesService.applyDimensionToRange(properties.range, dimension, value, columnDefs);
        });
    }
}

export const sourceFilesService = new SourceFilesService();
