"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiHashMap = function () {
    function MultiHashMap(levels) {
        _classCallCheck(this, MultiHashMap);

        this.levels = levels;
        this.map = {};
    }

    _createClass(MultiHashMap, [{
        key: "set",
        value: function set(keys, value) {
            var currentObject = this.map;
            keys.forEach(function (key, index) {
                if (index < keys.length - 1) {
                    if (!currentObject.hasOwnProperty(key)) {
                        currentObject[key] = {};
                    }

                    currentObject = currentObject[key];
                } else {
                    currentObject[key] = value;
                }
            });
        }
    }, {
        key: "log",
        value: function log() {
            console.log(this.map);
        }
    }, {
        key: "getUniqueGroups",
        value: function getUniqueGroups() {
            return this.getUniqueGroupsHelper(this.map, 1);
        }
    }, {
        key: "getUniqueGroupsHelper",
        value: function getUniqueGroupsHelper(map, level) {
            if (level !== this.levels) {
                var groups = [];

                for (var i in map) {
                    var subMap = map[i];

                    groups = groups.concat(this.getUniqueGroupsHelper(subMap, level + 1));
                }

                return groups;
            }

            return [map];
        }
    }]);

    return MultiHashMap;
}();
//# sourceMappingURL=multi-hash-map.js.map
