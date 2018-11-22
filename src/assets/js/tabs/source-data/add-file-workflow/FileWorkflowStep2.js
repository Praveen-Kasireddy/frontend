import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';
import { sourceDataFiles } from '../SourceDataFiles';
import { addFileSteps } from './AddFileSteps';
import { sourceDataFilesSidebar } from './SourceDataFilesSidebar';

export class FileWorkflowStep2 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;

        // DOM
        this.dataStructureSection = this.rootElement.find('.data-structures-section');
        this.addRelationship = this.dataStructureSection.find('._add-relationship');
        this.addRelationshipContainer = this.dataStructureSection.find('._add-relationship-container');
        this.save = this.addRelationshipContainer.find('._save');
        this.cancel = this.addRelationshipContainer.find('._cancel');

        // Events
        this.addRelationship.on('click', () => {
            this.addRelationship.prop('disabled', true);
            this.addRelationshipContainer.show();
            this.fileWorkflow.enableStructure();
        });
        this.save.on('click', () => {
            const cells = this.fileWorkflow.selectedStructureCells;
            const file = sourceFilesService.getCurrentSourceFile();
            let parentValue = null;
            let parentProperties = null;

            cells.forEach((cell, index) => {
                const cellValue = file.getCellValue(cell.row, cell.col);
                const cellProperties = file.getSingleCellProperties(cell.row, cell.col);

                // First cell is always the parent.
                if (index === 0) {
                    parentValue = cellValue;
                    parentProperties = cellProperties;
                } else {
                    // Get the dimension that differs.
                    const dimensions = [];
                    file.formDimensions.forEach(dimension => {
                        let cellValue = cellProperties[dimension];
                        let parentValue = parentProperties[dimension];

                        // Consider undefined values as empty string.
                        cellValue = typeof cellValue === 'undefined' ? '' : cellValue;
                        parentValue = typeof parentValue === 'undefined' ? '' : parentValue;

                        if (cellValue !== parentValue) {
                            dimensions.push(dimension);
                        }
                    });

                    if (dimensions.length === 1) {
                        const dimension = dimensions[0];
                        const ds = addFileSteps.project.addDataStructure(
                            dimension,
                            cellProperties[dimension],
                            parentProperties[dimension]
                        );
                        ds.changed = true;
                    }
                }
            });

            sourceDataFilesSidebar.sourceDataStructures.sync();
            storageService.saveCurrentProject();
            storageService.syncViews();

            this.cancel.trigger('click');
        });
        this.cancel.on('click', () => {
            this.addRelationship.prop('disabled', false);
            this.addRelationshipContainer.hide();
            this.fileWorkflow.enableModal();
        });
    }

    sync() {}

    show() {
        this.dataStructureSection.show();
        $('#source_data_files_pre_ingestion ._table').css('display', '');
        sourceDataFiles.flexGrid.refresh();
    }

    hide() {
        this.cancel.trigger('click');
        this.dataStructureSection.hide();
        $('#source_data_files_pre_ingestion ._table').hide();
    }
}
