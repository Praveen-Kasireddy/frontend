import { common } from '../Common';
import { constants } from '../Constants';
import { dimensionTypesService } from '../services/DimensionTypesService';
import { storageService } from '../services/StorageService';
import { DataExplorerAnalysis } from './DataExplorerAnalysis';
import { DataStructure } from './DataStructure';
import { Dimension } from './Dimension';
import { SourceFile } from './SourceFile';

export class Project {
    constructor(project) {
        this.name = '';

        this.dataPoints = [];

        /** @type {SourceFile[]} */
        this.sourceFiles = {};

        /** @type {DataStructure[][]} */
        this.dataStructuresPerDimension = {};

        /** @type {Dimension[]} */
        this.dimensions = [];

        /** @type {DataExplorerAnalysis[]} */
        this.analyses = [
            new DataExplorerAnalysis({
                id: 0,
                name: 'Example Analysis'
            })
        ];

        this.calculateDeltaByAddingChildren = false;

        // Initialize from simple object.
        if (project) {
            Object.assign(this, project);

            for (const uuid in this.sourceFiles) {
                this.sourceFiles[uuid] = new SourceFile(this.sourceFiles[uuid]);
            }

            this.dimensions = this.dimensions.map(dimension => {
                return new Dimension(dimension);
            });

            for (const dimension in this.dataStructuresPerDimension) {
                const dataStructures = this.dataStructuresPerDimension[dimension];
                for (const value in dataStructures) {
                    dataStructures[value] = new DataStructure(dataStructures[value]);
                }
            }

            this.analyses = this.analyses.map(analysis => {
                return new DataExplorerAnalysis(analysis);
            });
        }

        // Default dimensions
        if (this.dimensions.length === 0) {
            this.dimensions = [
                new Dimension({
                    slug: 'value',
                    label: 'Value',
                    dataType: dimensionTypesService.NUMBER,
                    special: true
                }),
                new Dimension({
                    slug: 'attribute',
                    label: 'Attribute',
                    hasDataStructures: true,
                    hasGlobalTerms: true,
                    usedAsIdentifier: true
                }),
                new Dimension({
                    slug: 'legal_entity',
                    label: 'Legal Entity',
                    usedAsIdentifier: true
                }),
                new Dimension({
                    slug: 'time',
                    label: 'Time',
                    usedAsIdentifier: true
                }),
                new Dimension({
                    slug: 'layer',
                    label: 'Layer',
                    usedAsIdentifier: true
                }),
                new Dimension({
                    slug: 'quality',
                    label: 'Quality',
                    usedAsIdentifier: true
                }),
                new Dimension({
                    slug: 'unit',
                    label: 'Unit',
                    usedAsIdentifier: true
                }),
                new Dimension({
                    slug: 'scale',
                    label: 'Scale',
                    dataType: dimensionTypesService.NUMBER,
                    special: true
                }),
                new Dimension({
                    slug: 'inverse',
                    label: 'Inverse',
                    special: true
                })
            ];
        }
    }

    addDataPointsWithFile(dataPoints, fileName) {
        // Create source file or set as manual.
        let uuid = '';
        if (fileName) {
            const sourceFile = new SourceFile();
            sourceFile.name = fileName;
            sourceFile.hidden = true;
            uuid = common.getNextUuid();
            sourceFile.uuid = uuid;
            this.sourceFiles[uuid] = sourceFile;
        } else {
            uuid = 'manual';
        }

        // Add data points.
        dataPoints = dataPoints.map(item => {
            item.id = common.getNextUuid();
            item.source = uuid;

            // Fix time.
            if (typeof item.time !== 'undefined') {
                item.time = String(item.time);
            }

            return item;
        });
        this.dataPoints = this.dataPoints.concat(dataPoints);
    }

    /**
     * Validate a data point before adding/saving it.
     */
    validateDataPoint(dataPoint, modifiedFromAnalysis = false) {
        // Validate fields.
        if ((!dataPoint.value && dataPoint.value !== 0) || !dataPoint.attribute || !dataPoint.scale) {
            return {
                success: false,
                error: 'Value, Attribute, and Scale are required.'
            };
        }

        const dimensions = this.getDimensions();

        for (let propertyName in dataPoint) {
            if (dataPoint.hasOwnProperty(propertyName)) {
                if (dataPoint[propertyName] !== '') {
                    for (let i = 0; i < dimensions.length; i++) {
                        let currentDimension = dimensions[i];
                        let currentDimensionSlug = dimensions[i].slug;

                        if (propertyName === currentDimensionSlug) {
                            switch (currentDimension.dataType) {
                                case dimensionTypesService.NUMBER:
                                    if (isNaN(dataPoint[propertyName])) {
                                        return {
                                            success: false,
                                            error: `"${dimensions[i].label}" field must be a number`
                                        };
                                    }
                                    continue;
                                case dimensionTypesService.CURRENCY:
                                    if (/\d/.test(dataPoint[propertyName])) {
                                        return {
                                            success: false,
                                            error: `"${dimensions[i].label}" field must contain only letters`
                                        };
                                    }
                            }
                        }
                    }
                }
            }
        }

        // Check for duplicates.
        let matchingDataPoint = this.getMatchingDataPoint(dataPoint);
        if (matchingDataPoint && dataPoint.id !== matchingDataPoint.id) {
            return {
                success: false,
                error:
                    'This data point already exists (same dimensions and with a value of ' +
                    matchingDataPoint.value +
                    ').'
            };
        }

        // Check for source files.
        if (matchingDataPoint && !modifiedFromAnalysis) {
            dataPoint.source = matchingDataPoint.source;
        }
        if (
            !modifiedFromAnalysis &&
            matchingDataPoint &&
            dataPoint.source !== 'manual' &&
            !common.isDeltaZero(dataPoint.value - matchingDataPoint.value)
        ) {
            return {
                success: false,
                error: constants.CANNOT_EDIT_VALUE
            };
        }

        return {
            success: true
        };
    }

    /**
     * If no ID is given, a new data-point will be created. Otherwise, the existing data-point will be updated.
     *
     * @param dataPoint
     * @param modifiedFromAnalysis
     * @returns {*} Returns an object with the following properties: success (bool), error (string), id (of data-point).
     */
    addDataPoint(dataPoint, modifiedFromAnalysis = false) {
        const validation = this.validateDataPoint(dataPoint, modifiedFromAnalysis);
        if (validation.success === false) {
            return validation;
        }

        // Parse scale.
        dataPoint.scale = common.parseScale(dataPoint.scale);

        // Save global stuff.
        const dimensions = this.getDimensions();
        dimensions.forEach(dimension => {
            const parentSlug = dimension.getParentSlug();
            const groupSlug = dimension.getGroupSlug();
            const globalTermSlug = dimension.getGlobalTermSlug();
            const timeIntervalBegin = dimension.getTimeIntervalBeginSlug();
            const timeIntervalEnd = dimension.getTimeIntervalEndSlug();

            // Auto-detect time intervals, if any.
            // TODO: Check project to ensure time intervals aren't already set.
            if (
                dimension.hasTimeIntervals &&
                dataPoint[dimension.slug] &&
                !dataPoint[timeIntervalBegin] &&
                !dataPoint[timeIntervalEnd]
            ) {
                // [4-digit-year]
                const justYear = /^[0-9]{4}$/i;
                // [3-character-month dash 2-digit-year]
                const monthYear = /^([a-zA-Z]{3})-([0-9]{2})$/i;
                // [3-character-month dash 4-digit-year]
                const monthFullYear = /^([a-zA-Z]{3})-([0-9]{4})$/i;

                const months = {
                    jan: '01',
                    feb: '02',
                    mar: '03',
                    apr: '04',
                    may: '05',
                    jun: '06',
                    jul: '07',
                    aug: '08',
                    sep: '09',
                    oct: '10',
                    nov: '11',
                    dec: '12'
                };

                if (justYear.test(dataPoint[dimension.slug])) {
                    dataPoint[timeIntervalBegin] = dataPoint[dimension.slug] + '-01-01';
                    dataPoint[timeIntervalEnd] = dataPoint[dimension.slug] + '-12-31';
                } else if (monthYear.test(dataPoint[dimension.slug])) {
                    const inputData = monthYear.exec(dataPoint[dimension.slug]);
                    inputData[1] = inputData[1].toLowerCase();
                    if (months.hasOwnProperty(inputData[1])) {
                        const month = months[inputData[1]];
                        const year = moment.parseTwoDigitYear(inputData[2]);

                        dataPoint[timeIntervalBegin] = year + '-' + month + '-01';
                        dataPoint[timeIntervalEnd] = moment(
                            new Date(year, parseInt(month.replace(/^0/, '')), 0)
                        ).format('YYYY-MM-DD');
                    }
                } else if (monthFullYear.test(dataPoint[dimension.slug])) {
                    const inputData = monthFullYear.exec(dataPoint[dimension.slug]);
                    inputData[1] = inputData[1].toLowerCase();

                    if (months.hasOwnProperty(inputData[1])) {
                        const month = months[inputData[1]];
                        const year = parseInt(inputData[2]);

                        dataPoint[timeIntervalBegin] = year + '-' + month + '-01';
                        dataPoint[timeIntervalEnd] = moment(
                            new Date(year, parseInt(month.replace(/^0/, '')), 0)
                        ).format('YYYY-MM-DD');
                    }
                }
            }

            this.addDataStructure(
                dimension.slug,
                dataPoint[dimension.slug],
                dataPoint[parentSlug],
                dataPoint[groupSlug],
                dataPoint[globalTermSlug],
                dataPoint[timeIntervalBegin],
                dataPoint[timeIntervalEnd]
            );

            delete dataPoint[parentSlug];
            delete dataPoint[groupSlug];
            delete dataPoint[globalTermSlug];
            delete dataPoint[timeIntervalBegin];
            delete dataPoint[timeIntervalEnd];
        });

        // Add data point.
        const dataPoints = this.dataPoints;
        if (dataPoint.id) {
            const key = this.getKeyForDataPointId(dataPoint.id);
            dataPoints[key] = dataPoint;
        } else {
            dataPoint.id = common.getNextUuid();
            dataPoints.unshift(dataPoint);
        }

        // Modify source file.
        {
            const uuid = dataPoint.source;
            const project = storageService.getCurrentProject();
            const file = project.sourceFiles[uuid];
            if (file) {
                file.dataPointsCopy.map(dp => {
                    if (dp.id === dataPoint.id) {
                        const cell = file.cellProperties[dp.col][dp.row];
                        Object.keys(dataPoint).forEach(function(key) {
                            cell[key] = dataPoint[key];
                        });

                        storageService.saveCurrentProject();
                    }
                });
            }
        }

        return {
            success: true,
            id: dataPoint.id
        };
    }

    /**
     * Get dimension by slug.
     *
     * @param slug
     *
     * @returns Dimension
     */
    getDimensionBySlug(slug) {
        for (let i = 0; i < this.dimensions.length; i++) {
            const dimension = this.dimensions[i];

            if (dimension.slug === slug) {
                return dimension;
            }
        }

        return null;
    }

    /**
     * @returns {Dimension[]}
     */
    getDimensions(showAll) {
        if (!showAll) {
            return this.dimensions.filter(dimension => dimension.isVisible === true).slice();
        }
        return this.dimensions.slice();
    }

    /**
     * @returns {Dimension}
     */
    addDimension(slug, label) {
        // Check if slug is already used.
        const sameSlug = this.dimensions.filter(dimension => {
            return dimension.slug === slug;
        });
        if (sameSlug.length > 0) {
            return null;
        }

        // Add new dimension.
        const dimension = new Dimension({
            slug: slug,
            label: label
        });
        this.dimensions.push(dimension);

        return dimension;
    }

    /**
     * @returns {Dimension|null}
     */
    addDimensionWithPrompt() {
        let label = prompt('Enter the name of your custom dimension:');
        if (!label) {
            return null;
        }

        let slug = common.getSlugFromName(label);

        return this.addDimension(slug, label);
    }

    /**
     * @returns {Dimension[]}
     */
    getFieldsForDimensions() {
        let dimensions = this.getDimensions();

        dimensions = dimensions.reduce((a, dimension) => {
            a.push(dimension);
            if (dimension.hasDataStructures) {
                a.push({
                    slug: dimension.getParentSlug(),
                    label: dimension.label + ' (Parent)',
                    shortLabel: 'Parent',
                    child: true,
                    isParent: true,
                    attribute: dimension.slug
                });
                a.push({
                    slug: dimension.getGroupSlug(),
                    label: dimension.label + ' (Group)',
                    shortLabel: 'Group',
                    child: true,
                    isGroup: true,
                    attribute: dimension.slug
                });
            }

            if (dimension.hasGlobalTerms) {
                a.push({
                    slug: dimension.getGlobalTermSlug(),
                    label: dimension.label + ' (Global Term)',
                    shortLabel: 'Global Term',
                    child: true,
                    isGlobalTerm: true
                });
            }

            if (dimension.hasTimeIntervals) {
                a.push({
                    slug: dimension.getTimeIntervalBeginSlug(),
                    label: dimension.label + ' (Begin)',
                    shortLabel: 'Begin',
                    child: true,
                    isTime: true
                });

                a.push({
                    slug: dimension.getTimeIntervalEndSlug(),
                    label: dimension.label + ' (End)',
                    shortLabel: 'End',
                    child: true,
                    isTime: true
                });
            }

            return a;
        }, []);

        return dimensions;
    }

    /**
     * @returns {Dimension[]}
     */
    getIdentityDimensions() {
        let dimensions = this.getDimensions();

        dimensions = dimensions.filter(dimension => {
            return dimension.usedAsIdentifier;
        });

        return dimensions;
    }

    getDimensionForAutoReconciliations() {
        return {
            dimension: 'quality',
            value: 'Adjusted'
        };
    }

    /**
     * @returns {Dimension[]}
     */
    getDimensionsForDataStructureValidation(dimensionSlugToValidate) {
        let dimensions = this.getIdentityDimensions();
        const dfar = this.getDimensionForAutoReconciliations();

        // Remove dimension-to-validate and dimension used for auto-reconciliation.
        dimensions = dimensions.filter(dimension => {
            return dimension.slug !== dimensionSlugToValidate && dimension.slug !== dfar.dimension;
        });

        return dimensions;
    }

    getMatchingDataPoint(point1) {
        const dimensions = this.getIdentityDimensions();

        for (let i = 0; i < this.dataPoints.length; i++) {
            const point2 = this.dataPoints[i];
            let matching = true;

            for (let j = 0; j < dimensions.length; j++) {
                const d = dimensions[j];
                const a = typeof point1[d.slug] !== 'undefined' ? point1[d.slug] : '';
                const b = typeof point2[d.slug] !== 'undefined' ? point2[d.slug] : '';

                if (a != b) {
                    matching = false;
                    break;
                }
            }

            if (matching) {
                return point2;
            }
        }

        return false;
    }

    getKeyForDataPointId(id) {
        for (let i = 0; i < this.dataPoints.length; i++) {
            const dataPoint = this.dataPoints[i];

            if (dataPoint.id === id) {
                return i;
            }
        }

        return null;
    }

    /**
     * Get data structure objects for a certain dimension.
     *
     * @param dimensionSlug
     *
     * @returns {DataStructure[]}
     */
    getDataStructuresForDimension(dimensionSlug) {
        if (!(dimensionSlug in this.dataStructuresPerDimension)) {
            this.dataStructuresPerDimension[dimensionSlug] = {};
        }

        return this.dataStructuresPerDimension[dimensionSlug];
    }

    /**
     * This will add data-structure fields to a data point. For example, if the data-point has attribute='Net Revenue',
     * it could add 'attribute__parent'='Gross Profit'.
     */
    addDataStructuresToDataPoint(dataPoint) {
        dataPoint = Object.assign({}, dataPoint);
        const dimensions = this.getDimensions();

        dimensions.forEach(dimension => {
            const ds = this.getDataStructuresForDimension(dimension.slug)[dataPoint[dimension.slug]];

            if (ds) {
                if (dimension.hasDataStructures) {
                    dataPoint[dimension.getParentSlug()] = ds.parentAttribute;
                    dataPoint[dimension.getGroupSlug()] = ds.group;
                }

                if (dimension.hasGlobalTerms) {
                    dataPoint[dimension.getGlobalTermSlug()] = ds.globalTerm;
                }

                if (dimension.hasTimeIntervals) {
                    dataPoint[dimension.getTimeIntervalBeginSlug()] = ds.timeIntervalBegin;
                    dataPoint[dimension.getTimeIntervalEndSlug()] = ds.timeIntervalEnd;
                }
            }
        });

        return dataPoint;
    }

    /**
     *
     * @param dimension             Required
     * @param value                 Required
     * @param parent                Optional, can be null
     * @param group                 Optional, can be null
     * @param globalTerm            Optional, can be null
     * @param timeIntervalBegin     Optional, can be null
     * @param timeIntervalEnd       Optional, can be null
     * @returns {DataStructure}
     */
    addDataStructure(dimension, value, parent, group, globalTerm, timeIntervalBegin, timeIntervalEnd) {
        // Check if structure already exists.
        const dataStructures = this.getDataStructuresForDimension(dimension);
        let ds;
        if (value in dataStructures) {
            ds = dataStructures[value];
        } else {
            ds = new DataStructure();
            ds.attribute = value;
            dataStructures[value] = ds;
        }

        // Apply parent attribute.
        if (typeof parent !== 'undefined' && !this.isDataStructureLoop(dataStructures, ds, parent)) {
            ds.parentAttribute = parent;
        }

        // Apply group.
        if (typeof group !== 'undefined') {
            ds.group = group;
        }

        // Apply global term.
        if (typeof globalTerm !== 'undefined') {
            ds.globalTerm = globalTerm;
        }

        // Apply time interval.
        if (typeof timeIntervalBegin !== 'undefined') {
            ds.timeIntervalBegin = common.dateToString(timeIntervalBegin);
        }
        if (typeof timeIntervalEnd !== 'undefined') {
            ds.timeIntervalEnd = common.dateToString(timeIntervalEnd);
        }

        // Remove group if parent empty.
        if (!ds.parentAttribute) {
            delete ds.group;
        }

        return ds;
    }

    getDataPointsForSource(uuid) {
        return this.dataPoints.filter(dataPoint => {
            return dataPoint.source === uuid;
        });
    }

    /**
     * Check if this new data structure would result in an endless loop.
     *
     * @param dataStructures {DataStructure[]}
     * @param dataStructure {DataStructure}
     * @param parent
     *
     * @return {boolean}
     */
    isDataStructureLoop(dataStructures, dataStructure, parent) {
        // Fetch parent data-structure.
        let parentStructure = dataStructures[parent];
        if (!parentStructure) {
            return false;
        }

        do {
            // Did we reach a loop?
            if (parentStructure.attribute === dataStructure.attribute) {
                return true;
            }

            // Fetch parent.
            parentStructure = dataStructures[parentStructure.parentAttribute];
        } while (parentStructure);

        // No loop.
        return false;
    }

    getChildren(dimensionSlug, value) {
        const children = [];
        const dimension = this.getDimensionBySlug(dimensionSlug);

        // Abort if dimension does not have data structures.
        if (!dimension || !dimension.hasDataStructures) {
            return children;
        }

        // Search for children.
        const dataStructures = this.getDataStructuresForDimension(dimensionSlug);
        for (const attribute in dataStructures) {
            const dataStructure = dataStructures[attribute];

            if (dataStructure.parentAttribute === value) {
                children.push(dataStructure.attribute);
            }
        }

        return children;
    }
}
