import { storageService } from '../../services/StorageService';
import { DataExplorerAttributesTree } from './DataExplorerAttributesTree';
import { dataExplorerHelper } from './DataExplorerHelper';

class DataExplorerSecondarySidebar {
    init() {
        this.container = $('#output_table_sidebar');
        this.attrContainer = $('#attr_dim_list');
        this.secondarySidebar = this.container.find('.secondary_sidebar');
        $('._contains-visible').removeClass('_contains-visible');
        $('._search-result-hidden').removeClass('_search-result-hidden');

        // Quick search for secondary sidebar
        $('.secondary_sidebar-menu input').on('change keydown keyup', e => {
            $('._contains-visible').removeClass('_contains-visible');
            $('._search-result-hidden').removeClass('_search-result-hidden');
            let val = $(e.target)
                .val()
                .toLowerCase();

            // Reset non-matching entries within target group.
            this.attrContainer.find('._row').removeClass('_search-result-hidden');

            this.attrContainer.find('li').each((index, item) => {
                let $item = $(item);

                if (
                    $item
                        .html()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    val === ''
                ) {
                    $item.removeClass('_hidden');
                } else {
                    $item.addClass('_hidden');
                }
            });

            this.attrContainer.find('._group').each((index, item) => {
                let visible = $(item).find('li:not(._hidden)');

                if (visible.length !== 0) {
                    $(item).show();

                    // Special bug fix
                    visible.each((index, visibleEntry) => {
                        $(visibleEntry)
                            .parentsUntil($('#available_box_names'), '._row')
                            .addClass('_contains-visible');
                    });

                    // Hide non-matching entries within target group.
                    $(item)
                        .find('li._hidden')
                        .each((index, newItem) => {
                            $(newItem)
                                .closest('._row:not(._contains-visible)')
                                .addClass('_search-result-hidden');
                        });
                } else {
                    $(item).hide();
                }
            });
        });

        // Open secondary sidebar when clicking on the main buttons "Columns", "Rows", or "Global".
        this.container.find('#main_sidebar_nav_tabs a').on('click', e => {
            const href = $(e.target).attr('href');

            // Open sidebar.
            this.secondarySidebar.addClass('_open');

            // Hide or show KPIs group.
            this.secondarySidebar
                .find('#attr_dim_list ._group:last-child')
                .css('display', href !== '#main_sidebar_global' ? '' : 'none');

            // Hide or show specific KPIs.
            this.secondarySidebar.find('#attr_dim_list ._group:last-child li.item[data-type="kpi"]').each(function() {
                const value = $(this).attr('data-value');

                switch (value) {
                    case 'CAGR':
                    case 'YoY':
                    case 'Delta':
                        $(this).css('display', href === '#main_sidebar_columns' ? '' : 'none');
                        break;

                    case 'Margin':
                        $(this).css('display', href === '#main_sidebar_rows' ? '' : 'none');
                        break;
                }
            });
        });

        // Close secondary sidebar.
        this.secondarySidebar.find('._close').on('click', () => {
            this.secondarySidebar.removeClass('_open');
        });
    }

    load() {
        // Filtered dimensions.
        let dimensions = storageService.currentProject.dimensions;
        let filteredDimensions = dimensions.filter(dimension => {
            return ['value', 'scale'].indexOf(dimension.slug) === -1;
        });

        // Attribute trees
        this.dataExplorerAttributesTree = [];
        for (let i = 0; i < filteredDimensions.length; i++) {
            this.dataExplorerAttributesTree.push(new DataExplorerAttributesTree(filteredDimensions[i].slug));
            this.dataExplorerAttributesTree[i].init();
        }

        // Attributes tree
        this.attrContainer.html('');
        for (let i = 0; i < this.dataExplorerAttributesTree.length; i++) {
            let tree = $('<div id="available_box_names" class="available_box-sub tree-view" data-type="all"></div>');

            this.addGroup(tree, this.dataExplorerAttributesTree[i].dimensionSlug);
            this.dataExplorerAttributesTree[i].load(tree);
        }

        // Other dimensions
        {
            let kpis = ['Custom Formula', 'CAGR', 'YoY', 'Delta', 'Margin', 'Blank'];
            this.addToList(kpis, 'kpi', 'KPIs');
        }
    }

    addToList(items, dataType, filterName) {
        // Create list.
        let ul = $('<ul class="_list"></ul>');
        for (let i in items) {
            let item = dataExplorerHelper.createItem(
                null,
                dataType,
                items[i],
                dataType === 'filter' ? filterName : undefined
            );
            ul.append(item);
        }

        // Add to group.
        this.addGroup(ul, filterName);

        // Enable drag-and-drop.
        Sortable.create(ul[0], dataExplorerHelper.sortableArgsForAttrs, {
            filter: '.remove-filter'
        });
    }

    addGroup(content, title) {
        let div = $('<div class="_group"><span class="_title">' + title + '</span></div>');
        content.appendTo(div);
        this.attrContainer.append(div);
    }
}

export const dataExplorerSecondarySidebar = new DataExplorerSecondarySidebar();
