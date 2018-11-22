import { difference, remove, union } from 'lodash';
import { common } from '../../../Common';
import { keyboardService } from '../../../services/KeyboardService';
import { sourceFilesService } from '../../../services/SourceFilesService';
import { storageService } from '../../../services/StorageService';

export class FileWorkflowStep3 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;
        this.dataStructures = [];
        this.inputsValues = {};
        this.lastSelectedItem = null;

        const globalMappingContainer = this.rootElement.find('._add-file-global-mapping ._mapping-select-dimension');
        if (!localStorage.getItem('blobExcelData'))
            this.dimensionSelect = new wijmo.input.ComboBox(globalMappingContainer[0], {
                placeholder: 'Select Dimension',
                itemsSource: [],
                displayMemberPath: 'label',
                onSelectedIndexChanged: () => {
                    this.changeDimension();
                }
            });
        const selectDictionaryContainer = this.rootElement.find('._add-file-global-mapping ._select-dictionary');
        if (!localStorage.getItem('blobExcelData'))
            this.selectDictionary = new wijmo.input.ComboBox(selectDictionaryContainer[0], {
                placeholder: 'Select Dictionary',
                itemsSource: [],
                onSelectedIndexChanged: () => {
                    this.changeDictionary();
                }
            });
        // DOM

        // Events
        $('._add-file-global-mapping').on('click', e => {
            if (!keyboardService.ctrlDown && !keyboardService.shiftDown) {
                $('._values-left ._mapping-value').removeClass('_active');
            }
        });

        $('._add-file-global-mapping').on('click', '._values-left ._mapping-value', e => {
            const item = $(e.currentTarget);

            let multipleSelection = false;
            let addClass = true;
            if (item.hasClass('_active')) {
                addClass = false;
            }

            // Deselect other cards if shift/ctrl is not pressed.
            if (!keyboardService.ctrlDown && !keyboardService.shiftDown) {
                if ($('._values-left ._mapping-value._active').length > 1) {
                    multipleSelection = true;
                }

                $('._values-left ._mapping-value').removeClass('_active');
            }

            // If shift if pressed, select all items between the previous and the current one.
            if (keyboardService.shiftDown) {
                const index1 = this.lastSelectedItem.index();
                const index2 = item.index();
                const indexMin = Math.min(index1, index2);
                const indexMax = Math.max(index1, index2);
                const parent = item.parent();

                for (let i = indexMin; i <= indexMax; i++) {
                    parent
                        .children()
                        .eq(i)
                        .addClass('_active');
                }
            } else {
                if (addClass || multipleSelection) {
                    item.addClass('_active');
                } else {
                    item.removeClass('_active');
                }
            }

            // Remember the last selected item.
            this.lastSelectedItem = item;

            e.stopPropagation();
        });
    }

    sync() {}

    show() {
        $('._add-file-global-mapping').css('display', 'flex');
        setTimeout(() => {
            $('#source_data_files_pre_ingestion ._table').hide();
        }, 20);
        const project = storageService.getCurrentProject();
        let dimensions = project.getDimensions();
        dimensions = dimensions.filter(dimension => {
            return dimension.hasGlobalTerms;
        });

        if (!this.dimensionSelect.itemsSource.length) {
            this.dimensionSelect.itemsSource = dimensions;
        }

        this.changeDimension();
        $('._values-left ._mapping-value').removeClass('_active');
    }

    hide() {
        $('._add-file-global-mapping').css('display', 'none');

        const sourceFile = sourceFilesService.getCurrentSourceFile();
        if (sourceFile) {
            sourceFile.globalMappingStructures = this.dataStructures;
        }
        storageService.saveCurrentProject();

        $('._values-left ._mapping-value').removeClass('_active');
    }

    changeDimension() {
        // Clear values.
        $('._add-file-global-mapping ._values-left ._mapping-value').remove();

        const slug = this.dimensionSelect.selectedItem.slug;
        if (!this.inputsValues[slug]) {
            this.inputsValues[slug] = {};
        }
        const dataStructuresForDimension = storageService.getCurrentProject().getDataStructuresForDimension(slug);

        const file = sourceFilesService.getCurrentSourceFile();
        const cellProperties = file.cellProperties;
        let values = [];
        Object.keys(cellProperties).forEach(col => {
            Object.keys(cellProperties[col]).forEach(row => {
                const cell = cellProperties[col][row];
                if (cell.cellType === 'data') {
                    if (cell.hasOwnProperty(slug)) {
                        if (values.length) {
                            values = union([], values, [cell[slug]]);
                        } else {
                            values = union([], [cell[slug]]);
                        }
                    }
                }
            });
        });

        values.map(value => {
            if (!dataStructuresForDimension.hasOwnProperty(value) || !dataStructuresForDimension[value].globalTerm) {
                if (!this.inputsValues[slug].hasOwnProperty(value) || this.inputsValues[slug][value].length === 0) {
                    this.rootElement.find('._values-left').append('<div class="_mapping-value">' + value + '</div>');
                }
            } else {
                if (this.inputsValues[slug][value]) {
                    this.inputsValues[slug][value] = union([], this.inputsValues[slug][value], [
                        dataStructuresForDimension[value].globalTerm
                    ]);
                } else {
                    this.inputsValues[slug][value] = union([], [dataStructuresForDimension[value].globalTerm]);
                }
            }
        });

        Sortable.create(this.rootElement.find('._values-left')[0], {
            group: {
                name: 'dimension-value',
                put: ['map-global-terms']
            }
        });

        this.selectDictionary.itemsSource = this.dimensionSelect.selectedItem.getDictionaries();
        this.selectDictionary.refresh();
    }

    changeDictionary() {
        // Clear values.
        $('._add-file-global-mapping ._global-term-from-dictionary').remove();

        // Create Global terms containers.
        const dictionary = this.selectDictionary.selectedItem;
        const globalTerms = common.getGlobalTermsByDictionary(dictionary);
        globalTerms.map(term => {
            const divTitle = '<div class="_term-title">' + term + '</div>';
            const divSortable = '<div class="_global-term-from-dictionary-sortable"></div>';
            const div =
                '<div class="_global-term-from-dictionary" data-term="' +
                term +
                '">' +
                divTitle +
                divSortable +
                '</div>';
            this.rootElement.find('._global-terms-from-dictionary').append(div);
            const el = this.rootElement.find($('._global-term-from-dictionary[data-term="' + term + '"]'))[0];

            Sortable.create(el, {
                group: {
                    name: 'map-global-terms',
                    put: 'dimension-value'
                },
                filter: '._term-title',
                onAdd: e => {
                    $(e.item).removeClass('_active');
                    const slug = this.dimensionSelect.selectedItem.slug;
                    const value = $(e.item).text();
                    const dataStructure = {
                        dimension: slug,
                        value: value,
                        globalTerm: term
                    };
                    this.dataStructures.push(dataStructure);

                    if (this.inputsValues[slug][value]) {
                        this.inputsValues[slug][value] = union([], this.inputsValues[slug][value], [term]);
                    } else {
                        this.inputsValues[slug][value] = union([], [term]);
                    }

                    // Handle moving multiple mapping-values.
                    $('._values-left ._mapping-value').each((index, el) => {
                        if ($(el).hasClass('_active')) {
                            const value = $(el).text();
                            const dataStructure = {
                                dimension: slug,
                                value: value,
                                globalTerm: term
                            };
                            this.dataStructures.push(dataStructure);

                            if (this.inputsValues[slug][value]) {
                                this.inputsValues[slug][value] = union([], this.inputsValues[slug][value], [term]);
                            } else {
                                this.inputsValues[slug][value] = union([], [term]);
                            }

                            $(e.to).append('<div class="_mapping-value">' + value + '</div>');
                            $(el).remove();
                        }
                    });
                },
                onRemove: e => {
                    const slug = this.dimensionSelect.selectedItem.slug;
                    const value = $(e.item).text();
                    const dataStructure = {
                        dimension: slug,
                        value: $(e.item).text(),
                        globalTerm: term
                    };
                    remove(this.dataStructures, el => {
                        return (
                            dataStructure.dimension === el.dimension &&
                            dataStructure.value === el.value &&
                            dataStructure.globalTerm === el.globalTerm
                        );
                    });

                    this.inputsValues[slug][value] = difference(this.inputsValues[slug][value], [term]);
                }
            });
        });

        // Add specific dimension values to each Global term container.
        const slug = this.dimensionSelect.selectedItem.slug;
        const dimensionVals = this.inputsValues[slug];
        Object.keys(dimensionVals).forEach(attr => {
            const globalTerms = dimensionVals[attr];
            const termHtml = $('._global-term-from-dictionary ._term-title').filter(function() {
                return $.inArray($(this).text(), globalTerms) !== -1;
            });

            // Used to remove from the left when val is associated to a global term and add it to the right.
            const valExists = this.rootElement.find('._values-left ._mapping-value').filter(function() {
                return $(this).text() === attr;
            });

            if (termHtml.length) {
                termHtml.after('<div class="_mapping-value">' + attr + '</div>');
                valExists.remove();
            } else {
                if (!valExists.length) {
                    this.rootElement.find('._values-left').append('<div class="_mapping-value">' + attr + '</div>');
                }
            }
        });
    }
}
