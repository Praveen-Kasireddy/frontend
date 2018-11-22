import { NamedUser } from '@core/models/configuration/named-user';
import { LegalEntity } from '@core/models/project/legal-entity';
import { Milestone } from '@core/models/project/milestone';
import { Objective } from '@core/models/project/objective';
import { Stakeholder } from '@core/models/project/stakeholder';

export interface IProject {
    projectGuid: string;
    id: number;
    configGuid: string;
    name: string;
    startDate: Date;
    dueDate: Date;
    user: string;
    engagementNumber: number;
    summary: string;
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
    targetCompany: any;
    sections: any[];
    stakeholders: Stakeholder[];
    client: {
        name: string;
        clientId: string;
    };
    scopeItemSummary: {
        total: number;
        completed: number;
    };
    watermarkText: string;
}
