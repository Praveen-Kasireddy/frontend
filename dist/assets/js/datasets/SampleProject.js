import { Project } from '../entities/Project';
import { invalidDataPoints } from './invalid-data-points';
import { mgmtPLDataset } from './mgmt-p-l';
import { mrDiyDataset } from './mr-diy';
import { salesByCategoryDataset } from './sales-by-category';
import { salesByCountryDataset } from './sales-by-country';

class SampleProject {
    getNewProject() {
        const project = new Project();

        project.name = 'Sample project';

        // Data points
        project.addDataPointsWithFile(invalidDataPoints, '');
        project.addDataPointsWithFile(mgmtPLDataset, 'Mgmt. P&L');
        project.addDataPointsWithFile(salesByCountryDataset, 'Sales by Country');
        project.addDataPointsWithFile(salesByCategoryDataset, 'Sales by Category');
        project.addDataPointsWithFile(mrDiyDataset, 'Mr. DIY');

        // Structures
        project.addDataStructure('attribute', 'Net revenue', 'Gross Profit', '', 'Revenue');
        project.addDataStructure('attribute', 'Material costs', 'Gross Profit', '', 'Cost of sales');
        project.addDataStructure('attribute', 'Gross Profit', 'EBITDA', '', '');
        project.addDataStructure('attribute', 'Germany', 'Net revenue', 'Countries', '');
        project.addDataStructure('attribute', 'USA', 'Net revenue', 'Countries', '');
        project.addDataStructure('attribute', 'Netherlands', 'Net revenue', 'Countries', '');
        project.addDataStructure('attribute', 'Australia', 'Net revenue', 'Countries', '');
        project.addDataStructure('attribute', 'Canada', 'Net revenue', 'Countries', '');
        project.addDataStructure('attribute', 'Monitors', 'Net revenue', 'Categories', '');
        project.addDataStructure('attribute', 'Laptops', 'Net revenue', 'Categories', '');
        project.addDataStructure('attribute', 'Video Cards', 'Net revenue', 'Categories', '');
        project.addDataStructure('time', '2016 Q1', '2016', '', '');
        project.addDataStructure('time', '2016 Q2', '2016', '', '');
        project.addDataStructure('time', '2003', '', '', '2003 GT');
        project.addDataStructure('time', '2015', '', '', '2015 GT');
        project.addDataStructure('time', '2016', '', '', '2016 GT');
        project.addDataStructure('time', '2017', '', '', '2017 GT');

        // Dimensions
        project.dimensions = project.dimensions.map(dimension => {
            if (dimension.slug === 'time') {
                dimension.hasDataStructures = true;
                dimension.hasGlobalTerms = true;
            }

            return dimension;
        });

        return project;
    }
}

export const sampleProject = new SampleProject();
