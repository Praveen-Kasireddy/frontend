import { get } from 'lodash';
import { common } from '../Common';
import { Project } from '../entities/Project';
import { SourceFile } from '../entities/SourceFile';
import { backendFileWorkflowService } from './backend/BackendFileWorkflowService';
import { storageService } from './StorageService';
class ImportXlsxService {
    /**
     * Reads an XLSX file, ingests it via the backend, and saves it in the Project.
     *
     * @param file File uploaded by user.
     * @returns {Promise<String>} Return the UUID of the new file.
     */
    async importXlsx(file) {
        const sheet = await this.getSheet(file);

        const itemsSource = this.getItemsSource(sheet);

        const sourceFile = this.addSourceFile(file, itemsSource);

        await this.ingestViaBackend(file, sourceFile);

        storageService.saveCurrentProject();

        return sourceFile.uuid;
    }

    async getSheet(f) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = e => {
                let data = e.target.result;
                let workbook = XLSX.read(data, {
                    type: 'binary',
                    cellStyles: true
                });
                let number = 0;
                const numberOfSheets = workbook.SheetNames.length;
                if (numberOfSheets > 1) {
                    number = prompt(
                        'Please choose the number of the sheet that you want to upload (1 - ' + numberOfSheets + ')'
                    );
                    if (number === null) {
                        $('#source_data_files_sidebar ._cancel').click();
                    }

                    number--;
                }

                let sheet;
                sheet = workbook.Sheets[workbook.SheetNames[number]];

                resolve(sheet);
            };

            reader.readAsBinaryString(f);
        });
    }

    getItemsSource(sheet) {
        let itemsSource = [];
        let range = XLSX.utils.decode_range(sheet['!ref']);
        let startColumn = 0;
        let endColumn = range.e.c;
        let startRow = 0;
        let endRow = range.e.r;
        const dateFormats = [moment.ISO_8601, 'MMM-DD', 'MM/DD/YYYY', 'DD/MM/YYYY'];

        // Load cells one by one.
        for (let column = startColumn; column <= endColumn; column++) {
            let index = 0;

            for (let row = startRow; row <= endRow; row++) {
                if (itemsSource[index] == null) {
                    itemsSource[index] = [];
                }

                let key = XLSX.utils.encode_cell({
                    c: column,
                    r: row
                });

                if (sheet[key]) {
                    let cellValue = sheet[key].v;

                    // Check if valid date.
                    if (moment(sheet[key].w, dateFormats, true).isValid()) {
                        cellValue = sheet[key].w;
                    }

                    // Check if percentage.
                    if (sheet[key].w) {
                        let cellString = sheet[key].w.slice(0, sheet[key].w.length);
                        cellString = cellString.replace(/ /g, '');
                        if (cellString[cellString.length - 1] === '%') {
                            cellValue = cellString;
                        }
                    }

                    if (cellValue !== null && cellValue !== undefined) {
                        itemsSource[index].push(cellValue);
                    } else {
                        itemsSource[index].push('');
                    }
                } else {
                    itemsSource[index].push('');
                }

                index++;
            }
        }

        return itemsSource;
    }

    addSourceFile(file, itemsSource) {
        let thisProject = storageService.getCurrentProject();

        const project = thisProject == null ? new Project() : thisProject;

        const sourceFile = new SourceFile();
        sourceFile.name = file.name;
        sourceFile.itemsSource = itemsSource;
        sourceFile.formDimensions = project.getDimensions().reduce((a, dimension) => {
            if (dimension.slug !== 'value') {
                a.push(dimension.slug);
            }

            return a;
        }, []);
        const uuid = common.getNextUuid();
        sourceFile.uuid = uuid;
        project.sourceFiles[uuid] = sourceFile;
        let projectKey = localStorage.getItem('current_project_key');
        localStorage.setItem('currentFileID', uuid);
        if (thisProject == null) localStorage.setItem(projectKey, JSON.stringify(project));
        else storageService.saveCurrentProject();

        return sourceFile;
    }

    async ingestViaBackend(file, sourceFile) {
        const data = await backendFileWorkflowService.uploadExcelFile(file);
        if (!data) {
            return;
        }

        const project = storageService.getCurrentProject() == null ? new Project() : storageService.getCurrentProject();
        //const project = storageService.getCurrentProject();

        data['labels'].forEach(data => {
            const coord = XLSX.utils.decode_cell(data.coord);
            const cell = sourceFile.getSingleCellProperties(coord.r, coord.c);
            cell.cellType = 'label';
            cell.range = data.range;

            const dimensionSlug = get(data, 'dimensions[0].SLUG');
            if (dimensionSlug) {
                const dimensionLabel = project.getDimensionBySlug(dimensionSlug).label;
                cell.labelDimension = [dimensionLabel];
            }
        });

        data['Data'].forEach(data => {
            const coord = XLSX.utils.decode_cell(data.coord);
            const cell = sourceFile.getSingleCellProperties(coord.r, coord.c);
            cell.cellType = 'data';
            data.dimensions.forEach(dimension => {
                cell[dimension.SLUG] = dimension.VALUE;
            });
        });
    }
}

export const importXlsxService = new ImportXlsxService();
