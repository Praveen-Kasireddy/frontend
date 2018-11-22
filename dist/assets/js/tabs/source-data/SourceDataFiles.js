import { addFileSteps } from './add-file-workflow/AddFileSteps';
import { sourceDataEditTableCell } from './add-file-workflow/SourceDataEditTableCell';
import { sourceDataFilesSidebar } from './add-file-workflow/SourceDataFilesSidebar';
import { addManualTable } from './add-manual-workflow/AddManualTable';

class SourceDataFiles {
    constructor() {
        this.flexgrid = null;
    }

    init() {
        sourceDataFilesSidebar.init();
        sourceDataEditTableCell.init();
        addManualTable.init();

        this.flexGrid = new wijmo.grid.FlexGrid($('#source_data_files_pre_ingestion ._table')[0], {
            allowDragging: 'None',
            allowSorting: false,
            isReadOnly: true,
            itemsSource: [],
            selectionChanged: (s, e) => addFileSteps.fileWorkflow.onTableSelectionChanged(s, e),
            formatItem: (s, e) => {
                addFileSteps.fileWorkflow.itemFormatter.formatItem(s, e);
                addFileSteps.fileWorkflow.formatTableCell(s, e);
            },
            selectionChanging: (s, e) => addFileSteps.fileWorkflow.onTableSelectionChanging(s, e),
            updatedView: () => {
                sourceDataFiles.flexGrid.columns.map((column, index) => {
                    sourceDataFiles.flexGrid.columns[index].header = XLSX.utils.encode_col(index);
                });
                $(sourceDataFiles.flexGrid.rowHeaders._e)
                    .find('.wj-row .wj-cell.wj-header')
                    .each(function(index) {
                        $(this).text(index + 1);
                    });
            },
            updatingView: () => {
                addFileSteps.fileWorkflow.itemFormatter.updatingView();
            }
        });
        this.flexGrid.hostElement.addEventListener('mousedown', () => {
            addFileSteps.fileWorkflow.onMouseDown();
        });
        $('#source_data_files_pre_ingestion').hide();

        // Initially hide add manual workflow.
        $('#add_manual_workflow').css('display', 'none');
        $('#add_manual_sidebar').css('display', 'none');
    }

    sync() {
        sourceDataFiles.flexGrid.refresh();

        sourceDataFilesSidebar.sync();

        // Edit table cell functionality.
        sourceDataEditTableCell.sync();
    }
}

export const sourceDataFiles = new SourceDataFiles();
