import { common } from '../../Common';
import { dimensionTypesService } from '../../services/DimensionTypesService';
import { storageService } from '../../services/StorageService';
import { Tab } from '../../Tab';
import { sourceDataPointsSidebar } from '../../tabs/source-data/SourceDataPointsSidebar';

class ProjectSetup extends Tab {
    constructor() {
        super();
        this.tabHref = '#project_setup';
        this.table = null;
        this.columns = null;
    }

    init() {
        this.container = $('#project_setup');
        this.dimensionsTable = this.container.find('._dimensions');
        this.dimensionsTableTemplate = this.dimensionsTable.find('._template').detach();

        this.container.find('._add-custom-dimension').on('click', () => {
            sourceDataPointsSidebar.addCustomDimension();
        });
    }

    sync() {
        const project = storageService.getCurrentProject();
        const tbody = this.dimensionsTable.find('tbody').html('');
        const dimensions = project.getDimensions(true);

        dimensions.forEach(dimension => {
            const tr = this.dimensionsTableTemplate.clone();

            tr.find('._name').html(dimension.label);

            if (!tr.find('._dictionary-selector').contents().length) {
                let dictionarySelect = new wijmo.input.MultiSelect(tr.find('._dictionary-selector')[0], {
                    placeholder: 'Select Dictionaries',
                    itemsSource: [],
                    headerFormat: '{count} dictionaries selected',
                    onCheckedItemsChanged: () => {
                        dimension.dictionaries = dictionarySelect.checkedItems;
                        storageService.saveCurrentProject();
                    }
                });
                dictionarySelect.itemsSource = common.getGlobalTermsDictionaries();
                dictionarySelect.checkedItems = dimension.getDictionaries();
                tr.find('._dictionary-selector').css('display', dimension.hasGlobalTerms ? '' : 'none');
            }

            tr.find('._has-structures input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.hasDataStructures)
                .on('change', e => {
                    dimension.hasDataStructures = e.target.checked;
                    storageService.saveCurrentProject();
                    storageService.syncViews();
                });

            tr.find('._has-global-terms input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.hasGlobalTerms)
                .on('change', e => {
                    dimension.hasGlobalTerms = e.target.checked;
                    storageService.saveCurrentProject();
                    storageService.syncViews();
                });

            tr.find('._used-as-identifier input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.usedAsIdentifier)
                .on('change', e => {
                    dimension.usedAsIdentifier = e.target.checked;
                    storageService.saveCurrentProject();
                    storageService.syncViews();
                });

            tr.find('._has-time-intervals input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.hasTimeIntervals)
                .on('change', e => {
                    dimension.hasTimeIntervals = e.target.checked;
                    storageService.saveCurrentProject();
                    storageService.syncViews();
                });

            {
                let selectElement = tr.find('._data-type select');
                selectElement.css('display', dimension.special ? 'none' : '');

                let optionNumber = dimension.dataType + 1;
                selectElement.children('option:nth-child(' + optionNumber + ')').prop('selected', true);

                selectElement.on('change', e => {
                    if (parseInt($(e.target).prop('value')) === dimensionTypesService.STRING) {
                        dimension.dataType = dimensionTypesService.STRING;
                    } else if (parseInt($(e.target).prop('value')) === dimensionTypesService.CURRENCY) {
                        dimension.dataType = dimensionTypesService.CURRENCY;
                    } else {
                        dimension.dataType = dimensionTypesService.NUMBER;
                    }

                    storageService.saveCurrentProject();
                    storageService.syncViews();
                });
            }

            tr.find('._hide-dimension')
                .css('display', dimension.special ? 'none' : '')
                .addClass(dimension.isVisible ? '' : 'active');

            tr.find('._remove-dimension').css('display', dimension.special ? 'none' : '');

            tbody.append(tr);
        });

        $('._remove-dimension').on('click', function(e) {
            let result = projectSetup.removeDimension(e, dimensions);

            if (result !== false) {
                project.dimensions = result;
                storageService.saveCurrentProject();
                storageService.syncViews();
            }
        });

        $('._hide-dimension').on('click', function() {
            const $this = $(this);
            $this.toggleClass('active');

            const currentDimensionName = $this
                .parent()
                .siblings('._name')
                .text();
            project.dimensions.forEach(function(dimension) {
                if (dimension.label === currentDimensionName) {
                    $this.hasClass('active') ? (dimension.isVisible = false) : (dimension.isVisible = true);
                    storageService.saveCurrentProject();
                }
            });

            storageService.syncViews();
        });

        // Calculate Delta by adding children.
        this.container
            .find('._delta-add-children')
            .prop('checked', project.calculateDeltaByAddingChildren)
            .on('change', e => {
                project.calculateDeltaByAddingChildren = e.target.checked;
                storageService.saveCurrentProject();
                storageService.syncViews();
            });
    }

    removeDimension(e, dimensionsArray) {
        let change = confirm('Remove dimension?');

        if (change) {
            let newDimensions = [];
            let dimensionName = $(e.target)
                .parent()
                .siblings('._name')
                .text();
            dimensionsArray.forEach(dimension => {
                if (dimension.label !== dimensionName) {
                    newDimensions.push(dimension);
                }
            });
            return newDimensions;
        }

        return false;
    }
}

export const projectSetup = new ProjectSetup();
