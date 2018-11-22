import get from 'lodash/get';
import { common } from '../../Common';
import { constants } from '../../Constants';
import { importXlsxService } from '../../services/ImportXlsxService';
import { sourceFilesService } from '../../services/SourceFilesService';
import { storageService } from '../../services/StorageService';
import { Tab } from '../../Tab';
import { sourceDataFilesSidebar } from '../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar';
import { sourceDataFiles } from '../../tabs/source-data/SourceDataFiles';

class Dropbox extends Tab {
    constructor() {
        super();
        this.tabHref = '#dropbox';
    }

    init() {
        this.filesContainer = $('#dropbox_data_files');
        this.fileListContainer = this.filesContainer.find('.file-list');
        this.filesTemplate = this.filesContainer.find('._template').detach();
        this.fileListContainer.find('#source_data_import_table').hide();

        $(document).ready(() => {
            // Upload File

            console.log('click on source_data_import_table_button ');
            $('#source_data_import_table_button').on('click', function() {
                $('#source_data_import_table').trigger('click');
            });
            $('#source_data_import_table').on('change', e => {
                this.loadUploadedFile(e.target.files[0]);
            });

            // Show all data
            $('._submenu [value="data_points"]').on('click', function() {
                $('.extending-sub-menu a[href="#source_data"]').trigger('click');
                $('#source_data input[name="source_data_mode"][value="data_points"]').trigger('click');
            });

            // P/C & Mapping
            $('._submenu [value="data_structures"]').on('click', function() {
                $('.extending-sub-menu a[href="#source_data"]').trigger('click');
                $('#source_data input[name="source_data_mode"][value="data_structures"]').trigger('click');
            });

            dropbox.fileCounter();

            $('#dropbox_file_list').on('change', function() {
                dropbox.fileCounter();
            });
        });
    }

    sync() {
        this.displaySourceFiles();
    }

    fileCounter() {
        let fileNumber = $('#dropbox_file_list ._file').length;
        let pluralIndicator = '';
        if (fileNumber !== 1) {
            pluralIndicator = 's';
        }
        $('._file_counter').html('<strong>' + fileNumber + '</strong>' + ' document' + pluralIndicator);
    }

    displaySourceFiles() {
        let projectKey = localStorage.getItem('current_project_key');
        let thisproject = sourceFilesService.getCurrentSourceFile() || JSON.parse(localStorage.getItem(projectKey));

        let sourceFiles =
            thisproject == null ? storageService.currentProject.sourceFiles : get(thisproject, `sourceFiles`);

        if (!localStorage.getItem('blobExcelData')) this.filesContainer.find('._file:not(._button)').remove();
        for (const uuid in sourceFiles) {
            /** @type {SourceFile} */
            const file = sourceFiles[uuid];

            // Skip hidden files.
            if (file.hidden) {
                continue;
            }

            if (!localStorage.getItem('blobExcelData')) {
                // Create div.
                const div = this.filesTemplate.clone();
                div.removeClass('_template');
                div.find('._name').text(file.name);
                div.attr('data-uuid', uuid);

                // Show progress.
                {
                    const ratio = file.getTotalCompletionPercentage();
                    const color = chroma
                        .mix(
                            constants.FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN,
                            constants.FILE_WORKFLOW_CELL_PROGRESS_COLOR_END,
                            ratio,
                            'lab'
                        )
                        .hex();
                    div.find('._percentage')
                        .html(Math.round(ratio * 100) + '%')
                        .css('background-color', color);
                }
                //
                this.fileListContainer.append(div);
            }
        }

        // Load saved files.
        $('#dropbox_file_list')
            .find('._file:not(._button)')
            .on('click', e => {
                const uuid = $(e.currentTarget).data('uuid');
                this.loadFileByUuid(uuid);
            });
    }

    /**
     * Load a file already present in the project, by matching against its UUID. Jump to the File Workflow screen.
     * @param uuid
     */
    async loadFileByUuid(uuid) {
        await common.showLoading();

        sourceFilesService.currentUuid = uuid;
        const sourceFile = sourceFilesService.getCurrentSourceFile();
        sourceDataFiles.flexGrid.itemsSource = sourceFile.itemsSource;
        sourceDataFiles.flexGrid.collectionView.refresh();

        $('ul.nav a[href="#source_data"]').trigger('click');
        $('input[name=source_data_mode][value=files]').trigger('click');

        $('#source_data_files_pre_ingestion').data('active', true);

        // Show table title.
        $('#source_data_files_sidebar ._table-name').text(sourceFile.name);

        // Hide previous screen.
        $('#source_data_files_file_list').hide();
        $('#source_data_files_pre_ingestion').show();

        sourceDataFilesSidebar.startWorkflow();
        sourceDataFilesSidebar.displayLoadedFileSidebar();

        const columns = sourceDataFiles.flexGrid.itemsSource[0];
        columns.map((col, colNr) => {
            if (col === '') {
                sourceDataFiles.flexGrid.autoSizeColumn(colNr);
            }
        });

        common.hideLoading();
    }

    /**
     * Save and load an uploaded file.
     * @param file
     * @returns {Promise<void>}
     */
    async loadUploadedFile(file) {
        await common.showLoading();

        const uuid = await importXlsxService.importXlsx(file);
        await this.loadFileByUuid(uuid);
    }
}

export const dropbox = new Dropbox();
