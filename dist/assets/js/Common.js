import { random, union } from 'lodash';
import { globalTerms } from './datasets/global-terms';

class Common {
    constructor() {
        this.formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        });
    }

    formatNumber(value) {
        // If the number is zero, avoid showing "(0.0)" due to rounding errors.
        if (common.isDeltaZero(value)) {
            value = 0;
        }

        if (value < 0) {
            value = '(' + common.formatter.format(-value) + ')';
        } else {
            value = common.formatter.format(value);
        }

        return value;
    }

    formatPercent(value) {
        return this.formatNumber(value * 100) + ' %';
    }

    parseScale(scale) {
        if (!scale) {
            scale = 1;
        }

        if (typeof scale === 'string' && parseInt(scale) === 0) {
            scale = '1' + scale;
        }

        scale = parseInt(scale);

        return scale;
    }

    parseInverse(inverse) {
        if (inverse === 'No' || inverse === undefined || inverse === '') {
            inverse = 1;
        } else if (inverse === 'Yes') {
            inverse = -1;
        }

        return inverse;
    }

    getUniqueValues(data, property) {
        let names = {};
        let a = [];

        // Get all possible names.
        for (let i = 0; i < data.length; i++) {
            if (property in data[i] && data[i][property]) {
                names[data[i][property]] = true;
            }
        }

        // Convert to array.
        for (let j in names) {
            a.push(j);
        }

        return a;
    }

    getSlugFromName(name) {
        // Replace non-alphanumeric with underline.
        name = name.replace(/[^A-Za-z0-9]/g, '_');

        // Replace successive underlines with a single underline.
        name = name.replace(/[_]+/g, '_');

        // Lower case everything.
        name = name.toLowerCase();

        return name;
    }

    // https://stackoverflow.com/a/13542669
    shadeColor2(color, percent) {
        let f = parseInt(color.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = (f >> 8) & 0x00ff,
            B = f & 0x0000ff;
        return (
            '#' +
            (
                0x1000000 +
                (Math.round((t - R) * p) + R) * 0x10000 +
                (Math.round((t - G) * p) + G) * 0x100 +
                (Math.round((t - B) * p) + B)
            )
                .toString(16)
                .slice(1)
        );
    }

    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    getNextUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    getGlobalTerms() {
        let globalTermsValues = [];

        globalTerms.map(term => {
            globalTermsValues.push(term.name);
        });

        return globalTermsValues;
    }

    getGlobalTermsDictionaries() {
        let dictionaries = [];

        globalTerms.map(term => {
            dictionaries = union(dictionaries, term.dictionaries);
        });

        return dictionaries;
    }

    getGlobalTermsByDictionary(dictionary) {
        let globalTermsValues = [];

        globalTerms.map(term => {
            if ($.inArray(dictionary, term.dictionaries) !== -1) {
                globalTermsValues.push(term.name);
            }
        });

        return globalTermsValues;
    }

    async showFakeLoading(callback) {
        await this.showLoading();

        setTimeout(() => {
            if (callback) {
                callback();
            }
            this.hideLoading();
        }, random(250, 500));
    }

    async showLoading() {
        $('._show-loading').css('display', 'block');

        // Wait 50ms, otherwise the UI won't render and the user won't see any loading screen while other heavy code is running.
        await this.wait(50);
    }

    hideLoading() {
        $('._show-loading').css('display', 'none');
    }

    areIdentical(a, b) {
        if (a === b) {
            return true;
        }

        const fa = parseFloat(a);
        const fb = parseFloat(b);
        if (!Number.isNaN(fa) && !Number.isNaN(fb) && this.isDeltaZero(fa - fb)) {
            return true;
        }

        return false;
    }

    isDeltaZero(delta) {
        return Math.abs(delta) < 0.00000001;
    }

    // https://www.grapecity.com/en/forums/wijmo/want-to-add-wijmo-5-input-_1
    // http://jsfiddle.net/ezk43f9d/102/
    createDatePickerEditor(editColumn) {
        const grid = editColumn.grid;
        grid.formatItem.addHandler(function(s, e) {
            const editRange = grid.editRange,
                column = e.panel.columns[e.col];

            // check whether this is an editing cell of the wanted column
            if (
                !(
                    e.panel.cellType === wijmo.grid.CellType.Cell &&
                    column === editColumn &&
                    editRange &&
                    editRange.row === e.row &&
                    editRange.col === e.col
                )
            ) {
                return;
            }

            // hide standard editor (don't remove!)
            if (e.cell.firstChild) {
                e.cell.firstChild.style.display = 'none';
            }

            // add custom InputNumber editor
            const editorRoot = document.createElement('div'),
                inputDate = new wijmo.input.InputDate(editorRoot, {
                    format: 'yyyy-MM-dd'
                });

            // inputDate.format = editColumn.format;
            e.cell.appendChild(editorRoot);
            const value = grid.getCellData(e.row, e.col, false);
            if (typeof value === 'string' && value) {
                inputDate.value = value;
            }

            const editEnding1 = (s, e) => {
                if (!e.cancel) {
                    // Update editor value.
                    const value = common.dateToString(inputDate.value);
                    s.activeEditor.value = value;
                }
            };

            const editEnding2 = (s, e) => {
                if (!e.cancel) {
                    // We use "_.set" because the binding can be something like "dataStructures.timeIntervalBegin".
                    // const value = s.activeEditor.value;
                    // set(s.rows[e.row].dataItem, column.binding, value);
                }

                // Remove events. We use a second event that fires only after all other events, otherwise => bugs.
                grid.cellEditEnding.removeHandler(editEnding1);
                grid.cellEditEnding.removeHandler(editEnding2);

                inputDate.dispose();
            };

            // Add handlers as first and last events. Order is important.
            const handlers = grid.cellEditEnding._handlers.slice(0);
            grid.cellEditEnding.removeAllHandlers();
            grid.cellEditEnding.addHandler(editEnding1);
            handlers.forEach(handler => {
                grid.cellEditEnding.addHandler(handler.handler);
            });
            grid.cellEditEnding.addHandler(editEnding2);
        });
    }

    checkIfCellHasChanged(oldVal, newVal, dataType) {
        // Check if value has been changed.
        if (dataType === wijmo.DataType.Date) {
            const oldValString = common.dateToString(oldVal);
            if (oldValString === newVal) {
                return true;
            }
        } else if ((typeof oldVal === 'string' && oldVal === newVal) || common.isDeltaZero(oldVal - newVal)) {
            return true;
        }

        return false;
    }

    removeTimeZoneFromDate(s) {
        return common.stringToDate(common.dateToString(s));
    }

    stringToDate(s) {
        if (typeof s === 'string') {
            // Create moment object without timezone.
            s = s.split('-');
            const m = moment.utc({
                year: s[0],
                month: s[1] - 1,
                day: s[2]
            });

            // Convert to date object.
            return m.toDate();
        }

        return s;
    }

    dateToString(s) {
        if (typeof s === 'object') {
            // Get date with timezone.
            const m1 = moment(s);

            // Recreate date without timezone.
            const m2 = moment.utc({
                year: m1.year(),
                month: m1.month(),
                day: m1.date()
            });

            return m2.format('YYYY-MM-DD');
        }

        return s;
    }

    // This is something that Wijmo should have out-of-the-box.
    setSelectedValue(wijmoComponent, selectedValue) {
        for (let i = 0; i < wijmoComponent.itemsSource.length; i++) {
            const item = wijmoComponent.itemsSource[i];

            if (item[wijmoComponent.selectedValuePath] === selectedValue) {
                wijmoComponent.selectedItem = item;
                return;
            }
        }

        wijmoComponent.selectedItem = null;
    }

    // https://stackoverflow.com/a/39027151/148388
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export const common = new Common();
