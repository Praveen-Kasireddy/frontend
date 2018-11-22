import { common } from '../../Common';
import { storageService } from '../../services/StorageService';
import { dataExplorerHelper } from './DataExplorerHelper';

export class DataExplorerAttributesTree {
    constructor(dimensionSlug) {
        this.dimensionSlug = dimensionSlug;
    }

    init() {
        this.slugToAttrs = {};
    }

    load(tree) {
        this.container = tree;

        const project = storageService.getCurrentProject();
        let dataset = storageService.getCurrentDataPoints();
        let attributes = common.getUniqueValues(dataset, this.dimensionSlug);

        // Get attributes.
        this.slugToAttrs = {};
        attributes.forEach(attr => {
            let slug = attr;

            this.slugToAttrs[slug] = {
                label: attr,
                slug: slug,
                parentSlug: null,
                open: false,
                hasChildren: false
            };
        });

        // Get parents.
        // TODO
        const dataStructures = project.getDataStructuresForDimension(this.dimensionSlug);
        for (const attribute in dataStructures) {
            const ds = dataStructures[attribute];
            const rightSlug = ds.attribute;
            const leftSlug = ds.parentAttribute;

            if (!(leftSlug in this.slugToAttrs) || !(rightSlug in this.slugToAttrs)) {
                continue;
            }

            // Was the other parent a better match?
            if (
                this.slugToAttrs[rightSlug].parentSlug !== null &&
                rightSlug.indexOf(this.slugToAttrs[rightSlug].parentSlug) !== -1
            ) {
                continue;
            }

            this.slugToAttrs[leftSlug].hasChildren = true;
            this.slugToAttrs[rightSlug].parentSlug = leftSlug;
        }

        this.render();
    }

    render(parentSlug, parentElement) {
        let attrs = [];

        if (typeof parentSlug === 'undefined') {
            parentSlug = null;
        }

        // Get attrs.
        for (let slug in this.slugToAttrs) {
            let attr = this.slugToAttrs[slug];

            if (attr.parentSlug !== parentSlug) {
                continue;
            }

            attrs.push(attr);
        }

        // Get container.
        let container;
        if (parentSlug) {
            container = parentElement;
        } else {
            container = this.container;
            container.html('');
        }

        // Compose HTML.
        attrs.forEach(attr => {
            let button = $('<div class="_button"></div>');
            let item = dataExplorerHelper.createItem(null, 'filter', attr.label, this.dimensionSlug);
            let ul = $('<ul></ul>').append(item);
            let row = $('<div class="_row"></div>').append(button, ul);
            container.append(row);

            // Button
            button.addClass(attr.open ? '_open' : '_closed');
            if (attr.hasChildren) {
                button.addClass('_has-children');
                button.html(
                    attr.open
                        ? '<i class="fa fa-minus-square-o" aria-hidden="true"></i>'
                        : '<i class="fa fa-plus-square-o" aria-hidden="true"></i>'
                );
                button.on('click', () => {
                    attr.open = !attr.open;
                    this.render();

                    return false;
                });
            } else {
                button.html('<i class="fa fa-square-o" aria-hidden="true"></i>');
            }

            // Sortable item
            Sortable.create(ul[0], dataExplorerHelper.sortableArgsForAttrs, {
                filter: '.remove-filter'
            });

            // Render children.
            if (attr.open) {
                let children = $('<div class="_children"></div>');
                this.render(attr.slug, children);
                row.append(children);
            }
        });
    }
}
