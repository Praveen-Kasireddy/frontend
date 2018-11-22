export class EqualityComparer {
    xStack: any[] = [];
    yStack: any[] = [];

    constructor(private x: any, private y: any) {}

    get equals(): boolean {
        return this.equalsInt(this.x, this.y);
    }

    private equalsInt(x: any, y: any): boolean {
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }
        if (x === y) {
            return true;
        }
        if (
            (typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)
        ) {
            return x.toString() === y.toString();
        }
        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }
        if (x.constructor !== y.constructor) {
            return false;
        }
        if (x.prototype !== y.prototype) {
            return false;
        }
        if (this.xStack.indexOf(x) > -1 || this.yStack.indexOf(y) > -1) {
            return false;
        }
        for (const p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }

        for (const p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            } else {
                switch (typeof x[p]) {
                    case 'object':
                    case 'function':
                        this.xStack.push(x);
                        this.yStack.push(y);
                        if (!this.equalsInt(x[p], y[p])) {
                            return false;
                        }
                        this.xStack.pop();
                        this.yStack.pop();
                        break;
                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }
        }
        return true;
    }
}
