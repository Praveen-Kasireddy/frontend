import { ProjectState } from '@core/enum/project-state.enum';
import { NamedUser } from '@core/models/configuration/named-user';
import { LegalEntity } from '@core/models/project/legal-entity';
import { Milestone } from '@core/models/project/milestone';
import { Objective } from '@core/models/project/objective';
import { Stakeholder } from '@core/models/project/stakeholder';

export class Project {
    projectGuid: string;
    id: number;
    configGuid: string;
    name: string;
    startDate: Date;
    dueDate: Date;
    user: string;
    engagementNumber: number;
    projectSummary: string;
    financialYearEnd: string;
    masterCurrency: string;
    language: string;
    systemOfRecord: string;
    status: any;
    tags: string[];
    objectives: Objective[];
    milestones: Milestone[];
    legalEntities: LegalEntity[];
    manager: Object;
    team: NamedUser[];
    targetCompanyName: string;
    sections: any[];
    stakeholders: Stakeholder[];
    client: { name: string; clientId: string };
    scopeItemSummary: { total: number; completed: number };
    fees: number;
    commercialAction: number;
    state: ProjectState;
    industryId?: number;

    constructor() {
        this.client = {
            name: undefined,
            clientId: undefined
        };

        this.objectives = [];
        this.milestones = [];
        this.legalEntities = [];
        this.stakeholders = [];
        this.team = [];
    }
}
