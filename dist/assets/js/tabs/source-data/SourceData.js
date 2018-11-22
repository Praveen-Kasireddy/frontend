import { common } from '../../Common';
import { storageService } from '../../services/StorageService';
import { Tab } from '../../Tab';
import { dropbox } from '../../tabs/dropbox/Dropbox';
import { sourceDataFilesSidebar } from './add-file-workflow/SourceDataFilesSidebar';
import { addManualSidebar } from './add-manual-workflow/AddManualSidebar';
import { addManualTable } from './add-manual-workflow/AddManualTable';
import { SourceDataStructures } from './source-data-structures/SourceDataStructures';
import { sourceDataFiles } from './SourceDataFiles';
import { sourceDataGraphView } from './SourceDataGraphView';
import { sourceDataPoints } from './SourceDataPoints';

class SourceData extends Tab {
    constructor() {
        super();
        this.tabHref = '#source_data';
        this.sourceDataFiles = sourceDataFiles;
        this.sourceDataPoints = sourceDataPoints;
        this.sourceDataStructures = new SourceDataStructures($('#source_data_data_structures'), () => {
            storageService.saveCurrentProject();
            storageService.syncViews();
        });
        this.sourceDataGraphView = sourceDataGraphView;
        this.addManualTable = addManualTable;

        if (this.sourceDataFilesSidebar) this.sourceDataFilesSidebar = sourceDataFilesSidebar;
        if (this.dropbox) this.dropbox = dropbox;
    }

    init() {
        this.sourceDataFiles.init();
        this.sourceDataPoints.init();
        this.sourceDataGraphView.init();

        this.container = $('#source_data');

        $('input[name=source_data_mode][value=files]')
            .parent()
            .css('display', 'none');
        $('input[name=source_data_mode][value=manual_workflow]')
            .parent()
            .css('display', 'none');

        // Mode
        this.container
            .find('input[name=source_data_mode]')
            .on('change', e => {
                common.showFakeLoading();
                const element = $(e.target);

                if (!element.is(':checked')) {
                    return;
                }

                const value = element.val();
                const importedTableActive = $('#source_data_files_pre_ingestion').data('active');

                $('#source_data_files').css('display', value === 'files' ? '' : 'none');
                $('#source_data_data_points').css('display', value === 'data_points' ? '' : 'none');
                $('#source_data_new_entry').css('display', value === 'data_points' ? '' : 'none');
                $('#source_data_data_structures').css('display', value === 'data_structures' ? '' : 'none');
                $('#graph_view').css('display', value === 'graph_view' ? '' : 'none');
                $('#source_data_files_sidebar').css(
                    'display',
                    importedTableActive === true && value === 'files' ? '' : 'none'
                );
                $('#add_manual_workflow').css('display', value === 'manual_workflow' ? '' : 'none');
                $('#add_manual_sidebar').css('display', value === 'manual_workflow' ? '' : 'none');

                if (value === 'manual_workflow') {
                    addManualSidebar.sync();
                }

                if (value === 'graph_view') {
                    sourceDataGraphView.syncGraph();
                }

                const header = $('#source_data .container-with-sidebar ._content ._options');
                if (value === 'manual_workflow' || value === 'files') {
                    header.css('display', 'none');
                } else {
                    header.css('display', '');
                }

                // Refresh FlexGrid.
                window.dispatchEvent(new Event('resize'));
            })
            .trigger('change');

        // Add file.
        this.container.find('._add-data-buttons ._add-file').on('click', e => {
            // $('input[name=source_data_mode][value=files]').trigger('click');
            $('#dropbox_data_files ._upload-file').trigger('click');
        });

        // Manual workflow button trigger.
        this.container.find('._add-data-buttons ._add-data-points-manually').on('click', e => {
            $('input[name=source_data_mode][value=manual_workflow]').trigger('click');
        });
    }

    sync() {
        this.sourceDataFiles.sync();
        this.sourceDataPoints.sync();
        this.sourceDataStructures.setProject(storageService.getCurrentProject());
        this.sourceDataStructures.sync();
        this.sourceDataGraphView.sync();
        this.addManualTable.sync();
        if (this.sourceDataFilesSidebar) this.sourceDataFilesSidebar.sync();
    }

    beginWorkflow() {
        $('.body-container .side-menu').css({ 'pointer-events': 'none', cursor: 'not-allowed' });
    }

    endWorkflow() {
        $('.body-container .side-menu').css({ 'pointer-events': '', cursor: '' });
        $('input[name=source_data_mode][value=data_points]').trigger('click');
    }
}

export const sourceData = new SourceData();
