export class MultiLevelHashMap {
    constructor(levels) {
        this.levels = levels;
        this.map = {};
    }

    set(keys, value) {
        let currentObject = this.map;
        keys.forEach((key, index) => {
            if (index < keys.length - 1) {
                if (!currentObject.hasOwnProperty(key)) {
                    currentObject[key] = {};
                }

                currentObject = currentObject[key];
            }
            else {
                currentObject[key] = value;
            }
        });
    }

    log() {
        console.log(this.map);
    }

    getUniqueGroups() {
        return this.getUniqueGroupsHelper(this.map, 1);
    }

    getUniqueGroupsHelper(map, level) {
        if (level !== this.levels) {
            let groups = [];

            for (let i in map) {
                let subMap = map[i];

                groups = groups.concat(this.getUniqueGroupsHelper(subMap, level + 1));
            }

            return groups;
        }

        return [map];
    }
}