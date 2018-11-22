/**
 * Defines value that property should have whenever it is made empty. Values that are considered
 * "empty" are `null` | `undefined` | `[]` | `''`.
 *
 * @example
 * @Input() @WhenEmpty('foo') bar: string;
 */
export function WhenEmpty(defaults: any): any {
    return (_, key, descriptor) => {
        const accessor = `_${key}`;

        return Object.assign({}, descriptor, {
            get: function() {
                // tslint:disable-next-line no-invalid-this
                const value = this[accessor];
                const isEmpty = value == undefined || value.length == 0;

                if (!isEmpty) {
                    return value;
                }

                if (Array.isArray(defaults)) {
                    return [...defaults];
                }

                return defaults;
            },
            set: function(value: any) {
                // tslint:disable-next-line no-invalid-this
                this[accessor] = value;
            }
        });
    };
}
