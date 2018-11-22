import { keyboardService } from '../../services/KeyboardService';
import { dataExplorerFormulas } from './DataExplorerFormulas';
import { dataExplorerHelper } from './DataExplorerHelper';

class DataExplorerSidebar {
    init() {
        this.container = $('#output_table_sidebar');
        this.itemGroups = this.container.find('.item-group');
        this.lastSelectedItem = null;
        this.clipboardItems = [];

        $(document).on('keydown', e => {
            // Copy
            if (keyboardService.ctrlDown && e.keyCode === keyboardService.cKey) {
                // Save a clone of each item.
                this.clipboardItems = this.itemGroups.find('> .item._active').toArray();
                this.clipboardItems = this.clipboardItems.map(item => {
                    return $(item).clone();
                });
            }

            // Paste
            if (keyboardService.ctrlDown && e.keyCode === keyboardService.vKey && this.clipboardItems.length > 0) {
                // Append a clone of each item.
                this.clipboardItems.forEach(item => {
                    const newItem = $(item).clone();
                    newItem.hide();
                    this.itemGroups.filter(':visible').append(newItem);
                    dataExplorerFormulas.initInput(newItem.find('._formula'));
                    newItem.fadeIn(333);
                });

                // Reset IDs.
                dataExplorerHelper.resetRowIds();
                dataExplorerHelper.resetColumnIds();

                // Deselect everything.
                this.deselectAll();

                // Save and update table, after fade-in animation has ended.
                setTimeout(() => {
                    dataExplorerHelper.saveAndUpdate();
                }, 333);
            }
        });

        this.container.on('click', e => {
            if (!keyboardService.ctrlDown && !keyboardService.shiftDown) {
                this.deselectAll();
            }
        });

        this.container.on('click', '.row-or-column-card', e => {
            const item = $(e.currentTarget);

            // Deselect other cards if shift/ctrl is not pressed.
            if (!keyboardService.ctrlDown && !keyboardService.shiftDown) {
                this.deselectAll();
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
                // Simply toggle the state.
                item.toggleClass('_active');
            }

            // Remember the last selected item.
            this.lastSelectedItem = item;

            e.stopPropagation();
        });
    }

    deselectAll() {
        this.itemGroups.find('.item').removeClass('_active');
    }
}

export const dataExplorerSidebar = new DataExplorerSidebar();
