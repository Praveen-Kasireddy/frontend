import { Project } from '../entities/Project';
import { storageService } from '../services/StorageService';

class DatabaseView {
    constructor() {
        this.table = null;
        this.columns = null;
    }

    init() {
        $('#current_database').on('change', function() {
            storageService.setCurrentProject($(this).val());
        });

        $('#add_new_database').on('click', function() {
            let title = prompt('Enter a name for the new database');
            if (!title) {
                return;
            }

            let project = new Project();
            project.name = title;

            const key = storageService.addProject(project);
            storageService.setCurrentProject(key);
        });

        $('#remove_current_database').on('click', function() {
            if (!confirm('Are you sure you want to remove the current database?')) {
                return;
            }

            storageService.removeCurrentProject();
        });

        $('#reset_everything').on('click', function() {
            if (
                !confirm(
                    'Are you sure you want to reset everything to its initial state? This includes all datasets and data structures.'
                )
            ) {
                return;
            }

            Object.keys(storageService.getAllProjects()).forEach(() => {
                storageService.removeCurrentProject();
            });
        });
    }

    syncWithDatabase() {
        if (storageService.getCurrentTab() !== '#database_view') {
            return;
        }

        // Database control
        {
            let currentProject = $('#current_database');
            let dbs = storageService.getAllProjects();

            // Remove existing options.
            currentProject.find('option').remove();

            // Add new options.
            for (let i in dbs) {
                let option = $('<option value="' + i + '">' + dbs[i] + '</option>');

                if (i === storageService.getDefaultProjectKey()) {
                    option.attr('selected', '');
                }

                currentProject.append(option);
            }
        }
    }
}

export const databaseView = new DatabaseView();
