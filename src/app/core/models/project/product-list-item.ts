/**
 * One item out of the tree list with its childs
 */
export class ProductListItem {
    guid: string;
    name: string;
    visible: boolean;
    isExpanded?: boolean;
    isSelected?: boolean;
    children?: ProductListItem[];
    isChapter?: boolean;

    constructor() {
        this.isExpanded = true;
    }
}
