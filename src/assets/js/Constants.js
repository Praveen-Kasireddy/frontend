class Constants {
    constructor() {
        // Colors
        this.COLOR_KPMG_BLUE = '#00338d';
        this.COLOR_MEDIUM_BLUE = '#005eb8';
        this.COLOR_LIGHT_BLUE = '#0091da';
        this.COLOR_VIOLET = '#483698';
        this.COLOR_PURPLE = '#470a68';
        this.COLOR_LIGHT_PURPLE = '#6d2077';
        this.COLOR_GREEN = '#00a3a1';
        this.COLOR_DARK_GREEN = '#009a44';
        this.COLOR_LIGHT_GREEN = '#43b02a';
        this.COLOR_YELLOW = '#eaaa00';
        this.COLOR_ORANGE = '#f68d2e';
        this.COLOR_RED = '#bc204b';
        this.COLOR_PINK = '#c6007e';
        this.COLOR_DARK_BROWN = '#753f19';
        this.COLOR_LIGHT_BROWN = '#9b642e';
        this.COLOR_OLIVE = '#9d9375';
        this.COLOR_BEIGE = '#e3bc9f';
        this.COLOR_LIGHT_PINK = '#e36877';

        // Misc
        this.CANNOT_EDIT_NORMALIZED_VALUE = 'You cannot edit the normalized value directly.';
        this.CANNOT_EDIT_VALUE = 'This data point was ingested from a file, therefore you cannot change its value.';
        this.CANNOT_SET_GROUP_IF_NO_PARENT = 'You need to set the parent before setting the group.';
        this.DIMENSION_SUFFIX_GROUP = '__group';
        this.DIMENSION_SUFFIX_PARENT = '__parent';
        this.FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN = '#ed2d2d';
        this.FILE_WORKFLOW_CELL_PROGRESS_COLOR_END = '#49CAAE';
    }

    getAllColors() {
        const colors = [];

        Object.getOwnPropertyNames(this).forEach((property) => {
            if (property.indexOf('COLOR_') === 0) {
                colors.push(this[property]);
            }
        });

        return colors;
    }

    getTextColorForBackground(backgroundColor) {
        // Use white text for dark backgrounds.
        // A minimum contrast of 4.5:1 is recommended to ensure that text is still readable against a background color.
        // http://www.w3.org/TR/WCAG20-TECHS/G18.html
        // http://gka.github.io/chroma.js/#chroma-contrast
        if (chroma.contrast('#111111', backgroundColor) < 4.5) {
            return '#eeeeee';
        }

        return '#111111';
    }
}

export const constants = new Constants();