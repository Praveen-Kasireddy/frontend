import { common } from '@Kosmos/Common';
import { storageService } from '@Kosmos/services/StorageService';
import { dataExplorerAnalyses } from '@Kosmos/tabs/data-explorer/DataExplorerAnalyses';
import { databaseView } from '@Kosmos/tabs/DatabaseView';
import { dropbox } from '@Kosmos/tabs/dropbox/Dropbox';
import { projectSetup } from '@Kosmos/tabs/project-setup/ProjectSetup';
import { sourceData } from '@Kosmos/tabs/source-data/SourceData';

$(document).ready(function() {
    // Get current tab.
    let currentTab = window.location.hash ? window.location.hash : storageService.getCurrentTab();
    if (!currentTab) {
        currentTab = '#database_view';
    }
    if (window.location.pathname.indexOf('datafiles') >= 0) {
        currentTab = '#dropbox';
    } else if (window.location.pathname.indexOf('datasources') >= 0) {
        currentTab = '#source_data';
        localStorage.removeItem('blobExcelData');
    }
    //storageService.setCurrentTab(currentTab);
    //$('ul.nav a[href="' + currentTab + '"]').trigger('click');
    //currentTab = '#dropbox';
    storageService.setCurrentTab(currentTab);
    $('ul.nav a[href="' + currentTab + '"]').trigger('click');
    $(window).trigger('resize');

    // Change tab event.
    $('#main_nav_tabs a').on('shown.bs.tab', function(e) {
        common.showFakeLoading();

        let href = $(this).attr('href');

        // Bug-fix for various UI glitches.
        $(window).trigger('resize');

        // Save current tab.
        storageService.setCurrentTab(href);

        // Sync view with database.
        storageService.syncViews(true);

        // Sync location hash.
        history.pushState(null, null, href);
    });

    // Init modules and storageService.
    databaseView.init();
    dataExplorerAnalyses.init();
    sourceData.init();
    projectSetup.init();
    dropbox.init();
    storageService.loadDefaultProjects();
});
