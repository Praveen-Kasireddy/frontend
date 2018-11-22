/**
 * One product with its scope items
 */
export class Product {
    id: number;
    guid: string;
    name: string;
    path: string;

    constructor(id?: number, guid?: string, name?: string, path?: string) {
        this.guid = guid;
        this.name = name;
        this.path = path;
    }
}
