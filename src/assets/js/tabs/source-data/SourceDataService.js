import { concat } from 'lodash';
import { common } from '../../Common';

class SourceDataService {
    constructor() {}

    /**
     * @param field
     * @param project Project
     * @returns {Array}
     */
    getAvailableValuesForField(field, project) {
        const dataset = project.dataPoints;
        let values = [];

        if (field.isParent) {
            values = common.getUniqueValues(dataset, field.attribute);
        } else if (field.isGroup) {
            const dataStructures = Object.values(project.getDataStructuresForDimension(field.attribute));
            values = common.getUniqueValues(dataStructures, 'group');
        }
        // TODO
        else if (field.isGlobalTerm) {
            values = common.getGlobalTerms();
        } else if (field.slug !== 'value' && field.slug !== 'inverse') {
            values = common.getUniqueValues(dataset, field.slug);
        } else if (field.slug === 'inverse') {
            values = ['No', 'Yes'];
        }

        return values;
    }

    /**
     *
     * @param dimension
     * @param project Project
     * @returns {wijmo.grid.DataMap}
     */
    getDataMapForDimension(dimension, project) {
        if (dimension.slug === 'value') {
            return null;
        }

        const dictionaries = dimension.dictionaries;
        let vals = [];
        if (dictionaries) {
            dictionaries.map(dictionary => {
                vals = concat(vals, common.getGlobalTermsByDictionary(dictionary));
            });
        }

        let values = vals.map(value => {
            return {
                value: value
            };
        });

        const dataMap = new wijmo.grid.DataMap(values, 'value', 'value');

        return dataMap;
    }
}

export const sourceDataService = new SourceDataService();
