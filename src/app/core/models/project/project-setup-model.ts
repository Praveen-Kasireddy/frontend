import { NamedUser } from '@core/models/configuration/named-user';
import { LegalEntity } from '@core/models/project/legal-entity';
import { MilestonePostModel } from '@core/models/project/milestone-post-model';
import { Objective } from '@core/models/project/objective';
import { Stakeholder } from '@core/models/project/stakeholder';

export class ProjectSetupModel {
    projectGuid: string;
    name: string;
    configGuid: AAGUID;
    gpid: string;
    clientName: string;
    clientId: string;
    engagementNumber: number;
    startDate: string;
    dueDate: string;
    summary: string;
    objectives: Objective[];
    milestones: MilestonePostModel[];
    legalEntities: LegalEntity[];
    stakeholders: Stakeholder[];
    team: NamedUser[];
    targetCompanyName: string;
    fees: number;
    commercialAction: number;
    industryId?: number;

    constructor() {
        this.objectives = [];
        this.milestones = [];
        this.legalEntities = [];
        this.stakeholders = [];
        this.team = [];
    }
}
