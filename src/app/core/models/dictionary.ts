export interface IDictionary<T> {
    add(key: string, value: T): void;
    remove(key: string): void;
    containsKey(key: string): boolean;
    keys(): string[];
    values(): T[];
}

export class Dictionary<T> implements IDictionary<T> {
    private _keys: string[] = new Array<string>();
    private _values: any[] = new Array<T>();

    constructor(init: { key: string; value: T }[]) {
        for (let x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }

    add(key: string, value: T) {
        if (!this.containsKey(key)) {
            this._keys.push(key);
            this._values.push(value);
        } else {
            const index = this._keys.indexOf(key, 0);
            this._values[index] = value;
        }

        this[key] = value;
    }

    remove(key: string) {
        const index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);

        delete this[key];
    }

    keys(): string[] {
        return this._keys;
    }

    values(): T[] {
        return this._values;
    }

    containsKey(key: string) {
        if (typeof this[key] == 'undefined') {
            return false;
        }

        return true;
    }

    toLookup(): IDictionary<T> {
        return this;
    }
}
