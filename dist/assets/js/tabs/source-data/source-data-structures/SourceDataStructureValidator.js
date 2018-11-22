import { common } from '../../../Common';
import { Project } from '../../../entities/Project';
import { MultiLevelHashMap } from '../../../MultiLevelHashMap';

export class SourceDataStructureValidator {
    constructor() {
        /** @type {Project} */
        this.project = null;
    }

    setProject(project) {
        this.project = project;
    }

    /**
     * Validate a value (e.g. Gross Profit). Optionally provide a group (e.g. the Countries group for Net Revenue).
     *
     * @param dimension
     * @param parent
     * @param group
     * @returns {*}
     */
    validateValue(dimension, parent, group) {
        const dataStructures = this.project.getDataStructuresForDimension(dimension);

        // Get children.
        const children = [];
        for (let value in dataStructures) {
            /** @type {DataStructure} */
            const thisDataStructure = dataStructures[value];
            if (thisDataStructure.parentAttribute !== parent) {
                continue;
            }

            // Add child.
            if (!group || thisDataStructure.group === group) {
                children.push(thisDataStructure.attribute);
            }

            // Abort if value has groups, but no group was specified.
            if (!group && thisDataStructure.group) {
                return null;
            }
        }

        if (children.length === 0) {
            return null;
        }

        return this.validateParentAndChildren(dimension, parent, children);
    }

    /**
     * Validate a given parent value and children values.
     *
     * @param dimension
     * @param parent
     * @param children
     * @returns {{groups: *, valid, invalid: number}}
     */
    validateParentAndChildren(dimension, parent, children) {
        let dimensions = this.project.getDimensionsForDataStructureValidation(dimension);

        // Group values by unique dimension-combinations.
        let map = new MultiLevelHashMap(dimensions.length + 1);
        this.project.dataPoints.forEach((dataPoint, index) => {
            // Is the dimension used?
            if (parent !== dataPoint[dimension] && children.indexOf(dataPoint[dimension]) === -1) {
                return;
            }

            const key = [];
            dimensions.forEach(dimension => {
                // Undefined or an empty string must count as the same thing.
                let value = dataPoint[dimension.slug];
                if (typeof value === 'undefined') {
                    value = '';
                }

                key.push(value);
            });

            // Add copy of data-point to map.
            map.set(key.concat([dataPoint.id]), Object.assign({}, dataPoint));
        });
        let groups = map.getUniqueGroups();

        // Validate each group.
        groups = groups.map(group => {
            let data = {
                dimensions: {},
                dataPoints: Object.values(group),
                delta: 0,
                valid: true
            };

            // Reorder data-points within group.
            let parents = 0;
            data.dataPoints = data.dataPoints.reduce((a, dataPoint) => {
                if (dataPoint[dimension] === parent) {
                    // The parent dimension goes first.
                    a.unshift(dataPoint);
                    parents++;
                } else {
                    a.push(dataPoint);
                }

                return a;
            }, []);
            if (parents) {
                data.dataPoints[parents - 1]._isLastParent = true;
            }
            data.dataPoints[data.dataPoints.length - 1]._isLast = true;

            // Extract the group's common dimensions.
            dimensions.forEach(dimension => {
                data.dimensions[dimension.slug] = data.dataPoints[0][dimension.slug];
            });

            // Calculate sum of children.
            let sumOfChildren = 0;
            children.forEach(child => {
                sumOfChildren += data.dataPoints.reduce((sum, dataPoint) => {
                    if (dataPoint[dimension] === child) {
                        sum +=
                            dataPoint.value *
                            common.parseScale(dataPoint.scale) *
                            common.parseInverse(dataPoint.inverse);
                    }
                    return sum;
                }, 0);
            });

            // Calculate sum of parent.
            let sumOfParent = data.dataPoints.reduce((sum, dataPoint) => {
                if (dataPoint[dimension] === parent) {
                    sum +=
                        dataPoint.value * common.parseScale(dataPoint.scale) * common.parseInverse(dataPoint.inverse);
                }
                return sum;
            }, 0);

            // Calculate delta.
            if (this.project.calculateDeltaByAddingChildren) {
                data.delta = sumOfParent + sumOfChildren;
            } else {
                data.delta = sumOfParent - sumOfChildren;
            }

            // Is it valid?
            data.valid = common.isDeltaZero(data.delta);

            return data;
        });

        // Count valid groups.
        const valid = groups.reduce((total, group) => {
            return total + (group.valid ? 1 : 0);
        }, 0);

        return {
            groups: groups,
            valid: valid,
            invalid: groups.length - valid
        };
    }
}
