export class DataStructure {
    constructor(object) {
        this.attribute = '';
        this.parentAttribute = '';
        this.group = '';
        this.globalTerm = '';
        this.timeIntervalBegin = '';
        this.timeIntervalEnd = '';
        this.changed = false;

        if (object) {
            Object.assign(this, object);
        }
    }
}