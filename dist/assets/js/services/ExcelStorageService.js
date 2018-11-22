import { common } from '../Common';
import { Project } from '../entities/Project';

class ExcelStorageService {
    constructor() {
        this.CURRENT_PROJECT_KEY = 'current_project_key';
        this.CURRENT_TAB_KEY = 'current_tab';
        this.DATA_COCKPIT_COLUMNS_KEY = 'data_cockpit_columns';

        this.keyPrefix = 'project_';

        /** @type {Project} */
        this.currentProject = null;

        this.currentProjectKey = null;
    }

    getDefaultProjectKey() {
        return localStorage.getItem(this.CURRENT_PROJECT_KEY);
    }

    setDefaultProjectKey(key) {
        localStorage.setItem(this.CURRENT_PROJECT_KEY, key);
    }

    /** @type {Project} */
    getCurrentProject() {
        return this.currentProject;
    }

    getCurrentDataPoints() {
        return this.currentProject.dataPoints;
    }

    /**
     * Get projects as key-name pairs.
     * @returns {Object}
     */
    getAllProjects() {
        let keys = Object.keys(localStorage);
        let dbs = {};

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];

            // Check if prefix matches.
            if (typeof key !== 'string' || key.indexOf(this.keyPrefix) !== 0) {
                continue;
            }

            let db = this.getProject(key);

            dbs[key] = db.name;
        }

        return dbs;
    }

    getAllProjectsSorted() {
        let dbs = this.getAllProjects();
        let sorted = [];

        for (let i in dbs) {
            sorted.push({
                key: i,
                name: dbs[i]
            });
        }

        sorted.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });

        return sorted;
    }

    /**
     * Create a new project and return its key.
     */
    addProject(project) {
        let key = this.keyPrefix + common.getNextUuid();
        localStorage.setItem(key, JSON.stringify(project));

        return key;
    }

    getProject(key) {
        let data = localStorage.getItem(key);

        if (data) {
            data = JSON.parse(data);
        }

        return new Project(data);
    }

    setProject(key, project) {
        localStorage.setItem(key, JSON.stringify(project));
    }

    setCurrentProject(key) {
        let project = this.getProject(key);

        if (project) {
            this.currentProject = project;
            this.currentProjectKey = key;
            this.setDefaultProjectKey(key);
            this.syncViews();
        }
    }

    syncViews(onlyIfDirty) {
        console.log('syncViews ExcelStorageService');

        // dataExplorerStorage.load();
    }

    loadDefaultProjects() {
        let key = this.getDefaultProjectKey();

        if (!key) {
            // this.addProject(sampleProject.getNewProject());

            //key = this.addProject(maxGroupProject.getNewProject());
            this.setDefaultProjectKey(key);
        }

        this.setCurrentProject(key);
    }

    saveCurrentProject() {
        this.setProject(this.currentProjectKey, this.currentProject);
    }

    removeCurrentProject() {
        localStorage.removeItem(this.currentProjectKey);

        // Set another project as default.
        let dbs = this.getAllProjects();
        for (let key in dbs) {
            this.setCurrentProject(key);
            return;
        }

        // No other project? Load the default one.
        localStorage.removeItem(this.CURRENT_PROJECT_KEY);
        this.loadDefaultProjects();
    }

    setCurrentTab(tab) {
        localStorage.setItem(this.CURRENT_TAB_KEY, tab);
    }

    getCurrentTab() {
        return localStorage.getItem(this.CURRENT_TAB_KEY);
    }

    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {}

        return null;
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export const excelstorageService = new ExcelStorageService();
