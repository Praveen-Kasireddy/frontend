import { TemplateType } from '@core/enum';

export class ReportPageUpdate {
    content: string;
    name: string;
    templateType?: TemplateType;
    backgroundColor?: string;
    id?: number;

    constructor(content: string, name?: string | undefined, templateType?: TemplateType | undefined) {
        this.content = content;
        this.name = name;
        this.templateType = templateType;
    }
}
