import { get } from 'lodash';
import { common } from '../../Common';
import { DataExplorerAnalysis } from '../../entities/DataExplorerAnalysis';
import { resizableDivider } from '../../ResizableDivider';
import { storageService } from '../../services/StorageService';
import { Tab } from '../../Tab';
import { dataExplorer } from './DataExplorer';
import { dataExplorerImport } from './DataExplorerImport';
import { dataExplorerStorage } from './DataExplorerStorage';
import { dataExplorerRenderTable } from './table/DataExplorerRenderTable';

class DataExplorerAnalyses extends Tab {
    constructor() {
        super();
        this.tabHref = '#output_table';
        this.currentAnalysisId = 0;
    }

    init() {
        dataExplorer.init();

        // Hide single analysis div.
        $('#single_analysis').css('display', 'none');

        // Display all analyses.
        this.displayAnalyses();
        $(document).on('click', '#analyses_list ._analyses-list ._analysis', e => this.loadAnalysis(e));

        $('#single_analysis ._back-to-list').on('click', () => this.backToList());

        $('#analyses_list ._add-analysis').on('click', () => this.addNewAnalysis());

        $('#single_analysis ._edit-mode-switch input').on('change', () => this.toggleEditMode());
        $('#single_analysis ._split-screen-mode-switch input').on('change', () => this.toggleSplitScreenMode());

        $(document).on('click', '#data_explorer_imported_table ._file-tab ', e => this.switchTab(e));
    }

    sync() {
        this.displayAnalyses();
    }

    switchTab(e) {
        const uuid = $(e.target).data('uuid');
        if (uuid === dataExplorerImport.uuid) {
            return;
        }

        dataExplorerImport.uuid = uuid;
        $('.main-content #data_explorer_imported_table').remove();
        dataExplorerImport.splitScreen();
        dataExplorerImport.createRightTable(uuid);
        dataExplorerImport.refreshFilesTabs();
    }

    toggleSplitScreenMode() {
        const checked = $('#single_analysis ._split-screen-mode-switch input').is(':checked');
        if (checked) {
            dataExplorerImport.splitScreen();

            resizableDivider.enableResizable(
                '.main-content > .tab-content',
                '#data_explorer_imported_table',
                'width',
                { handles: 'e' },
                { minWidth: 700, maxWidth: 1200 },
                () => {
                    dataExplorerRenderTable.updateTable();
                }
            );

            const dataExplorerAnalysis = storageService.getCurrentProject().analyses[
                dataExplorerAnalyses.currentAnalysisId
            ];
            if (dataExplorerAnalysis.dropboxFiles.length) {
                const uuid = dataExplorerAnalysis.dropboxFiles[0];
                dataExplorerImport.uuid = uuid;
                dataExplorerImport.createRightTable(uuid);
            }

            dataExplorerImport.refreshFilesTabs();
        } else {
            resizableDivider.resetResizable('.main-content > .tab-content', () => {
                dataExplorerRenderTable.updateTable();
            });

            dataExplorerImport.cancelImport();
        }
    }

    toggleEditMode() {
        if (!localStorage.getItem('blobExcelData'))
            dataExplorerRenderTable.flexgrid.isReadOnly = !$('#single_analysis ._edit-mode-switch input').is(
                ':checked'
            );
    }

    loadAnalysis(e) {
        $('#analyses_list').css('display', 'none');
        $('#single_analysis').css('display', '');
        this.currentAnalysisId = $(e.currentTarget).data('id');
        $('#single_analysis ._analysis-title h3').text(
            storageService.getCurrentProject().analyses[this.currentAnalysisId].name
        );

        $('._outputMode input[value=table]')
            .prop('checked', true)
            .trigger('change');
        dataExplorerStorage.load();
    }

    addNewAnalysis() {
        const analysisName = prompt('Please enter the name of the analysis: ');
        if (analysisName === null) {
            return;
        }

        const analysisId = storageService.getCurrentProject().analyses.length;
        const newAnalysis = new DataExplorerAnalysis({
            id: analysisId,
            name: analysisName
        });
        storageService.getCurrentProject().analyses.push(newAnalysis);

        // Save project.
        storageService.saveCurrentProject();
        storageService.syncViews();
    }

    backToList() {
        $('#analyses_list').css('display', '');
        $('#single_analysis').css('display', 'none');

        $('#single_analysis ._edit-mode-switch input').prop('checked', false);
        $('#single_analysis ._split-screen-mode-switch input').prop('checked', false);
        if (!localStorage.getItem('blobExcelData')) dataExplorerRenderTable.flexgrid.isReadOnly = true;

        dataExplorerImport.cancelImport();
    }

    displayAnalyses() {
        common.showFakeLoading(() => {
            const project = storageService.getCurrentProject();
            const analyses = get(project, 'analyses', false);
            if (!analyses) {
                return;
            }

            $('#analyses_list ._analyses-list').empty();
            analyses.map(analysis => {
                $('#analyses_list ._analyses-list').append(
                    '<div class="_analysis" data-id="' + analysis.id + '">' + analysis.name + '</div>'
                );
            });
        });
    }
}

export const dataExplorerAnalyses = new DataExplorerAnalyses();
