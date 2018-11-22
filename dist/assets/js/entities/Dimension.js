import { constants } from '../Constants';
import { dimensionTypesService } from '../services/DimensionTypesService';

export class Dimension {
    constructor(object) {
        this.slug = '';
        this.label = '';
        this.hasDataStructures = false;
        this.hasGlobalTerms = false;
        this.usedAsIdentifier = true;
        this.hasTimeIntervals = false;
        this.special = false;
        this.dataType = dimensionTypesService.STRING;
        this.isVisible = true;
        this.dictionaries = [];

        if (object) {
            Object.assign(this, object);
        }
    }

    getParentSlug() {
        return this.slug + constants.DIMENSION_SUFFIX_PARENT;
    }

    getGroupSlug() {
        return this.slug + constants.DIMENSION_SUFFIX_GROUP;
    }

    getGlobalTermSlug() {
        return this.slug + '__global_term';
    }

    getTimeIntervalBeginSlug() {
        return this.slug + '__time_interval_begin';
    }

    getTimeIntervalEndSlug() {
        return this.slug + '__time_interval_end';
    }

    getDictionaries() {
        return this.dictionaries;
    }
}
