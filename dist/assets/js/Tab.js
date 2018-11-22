import { storageService } from './services/StorageService';
import { dataExplorerAnalyses } from './tabs/data-explorer/DataExplorerAnalyses';

export class Tab {
    constructor() {
        this.isDirty = false;
        this.tabHref = null;
    }

    syncIfVisible(onlyIfDirty) {
        if (onlyIfDirty && !this.isDirty) {
            return;
        }
        let currentTab = storageService.getCurrentTab();

        // If this tab is not visible, postpone syncing it.
        if (currentTab !== this.tabHref) {
            this.isDirty = true;
            if (storageService.getCurrentTab() !== '#output_table') {
                dataExplorerAnalyses.backToList();
            }
        }
        // Sync now.
        else {
            console.log('Sync Tab "' + this.tabHref + '"');
            this.isDirty = false;
            this.sync();
        }
    }

    sync() {}
}
