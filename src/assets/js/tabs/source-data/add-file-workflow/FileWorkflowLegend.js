import { constants } from '../../../Constants';

export class FileWorkflowLegend {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    sync(columnDefs) {
        this.rootElement.html('');
        const projectFields = columnDefs.filter(field => {
            return field.selected;
        });
        const totalFields = projectFields.length;

        this.rootElement.append('<span>0%</span>');

        for (let i = 0; i <= totalFields; i++) {
            const ratio = totalFields > 0 ? i / totalFields : 1;
            const color = chroma
                .mix(
                    constants.FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN,
                    constants.FILE_WORKFLOW_CELL_PROGRESS_COLOR_END,
                    ratio,
                    'lab'
                )
                .hex();
            const percentage = Math.round(ratio * 100);
            const div = $(`<div style='background-color: ${color}'></div>`);

            this.rootElement.append(div);
        }

        this.rootElement.append('<span>100%</span>');
    }
}
