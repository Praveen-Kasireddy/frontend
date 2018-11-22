export class FileWorkflowStep4 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;

        // DOM

        // Events
    }

    sync() {
    }

    show() {
        $('#source_data_files_pre_ingestion ._review-table').css('display', '');
        $('#source_data_files_pre_ingestion ._table').hide();
    }

    hide() {
        $('#source_data_files_pre_ingestion ._review-table').hide();
    }
}