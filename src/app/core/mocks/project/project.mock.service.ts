import { ProjectState } from '@core/enum/project-state.enum';
import { Industry } from '@core/models/project/industry-model';
import { Project } from '@core/models/project/project';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { Observable, of } from 'rxjs';

export const PROJECT_OBJECT: Project[] = [
    {
        projectGuid: '10f2a02b-a8a7-48dc-acb0-86997bae8338',
        configGuid: 'E52DCCDE-B049-40D9-B15E-B09A4F325678',
        stakeholders: [
            {
                id: 1,
                companyName: 'Company 1',
                description: 'Description 1',
                firstName: 'Max 1',
                lastName: 'Mustermann 1',
                jobTitle: 'Job title 1',
                email: 'email1@email.com',
                phoneNumber: 'Phone 1-1'
            },
            {
                id: 2,
                companyName: 'Company 2',
                description: 'Description 2',
                firstName: 'John 2',
                lastName: 'Smith 2',
                jobTitle: 'Job title 2',
                email: 'email2@email.com',
                phoneNumber: 'Phone 2-1'
            }
        ],
        dueDate: new Date(),
        language: 'de',
        user: 'xxx',
        engagementNumber: 1234,
        financialYearEnd: '2017-12-31T12:59:59',
        masterCurrency: 'USD',
        name: 'Project 1',
        client: {
            name: 'client name',
            clientId: '1234567890'
        },
        milestones: [
            { id: 1, date: new Date(2018, 4, 23), description: 'Milestone 1' },
            { id: 2, date: new Date(2018, 4, 24), description: 'Milestone 2' }
        ],
        objectives: [{ id: 1, description: 'Objective 1' }, { id: 2, description: 'Objective 2' }],
        legalEntities: [
            { id: 1, companyName: 'Company Name 1', abbreviation: 'Abbreviation 1' },
            { id: 2, companyName: 'Company Name 2', abbreviation: 'Abbreviation 2' }
        ],
        startDate: new Date(),
        status: 'active',
        projectSummary: 'Summary',
        systemOfRecord: 'The System',
        tags: ['foo', 'bar'],
        id: 1,
        manager: {},
        team: [
            { gpid: 'KPMG0000006', fullName: 'User 1', roleId: 1 },
            { gpid: 'KPMG0000007', fullName: 'User 2', roleId: 2 }
        ],
        targetCompanyName: 'Test company',
        sections: [],
        scopeItemSummary: {
            total: 10,
            completed: 5
        },
        fees: 1,
        commercialAction: 1,
        state: ProjectState.DONE
    }
];

export const ProjectSetupObject = {
    projectGuid: '10f2a02b-a8a7-48dc-acb0-86997bae8338',
    name: 'Project 1',
    configGuid: 'E52DCCDE-B049-40D9-B15E-B09A4F325678',
    gpid: 'xxx',
    clientName: 'client name',
    clientId: '1234567890',
    targetCompanyName: 'Project Target',
    fees: 2,
    commercialAction: 2,
    engagementNumber: 1234,
    startDate: '2018/05/02',
    dueDate: '2018/05/03',
    summary: 'Summary',
    objectives: [{ id: 1, description: 'Objective 1' }, { id: 2, description: 'Objective 2' }],
    milestones: [
        { id: 1, date: '2018/05/04', description: 'Milestone 1' },
        { id: 2, date: '2018/05/05', description: 'Milestone 2' }
    ],
    legalEntities: [
        { id: 1, companyName: 'Company Name 1', abbreviation: 'Abbreviation 1' },
        { id: 2, companyName: 'Company Name 2', abbreviation: 'Abbreviation 2' }
    ],
    stakeholders: [
        {
            id: 1,
            category: 1,
            companyName: 'Company 1',
            description: 'Description 1',
            firstName: 'Max 1',
            lastName: 'Mustermann 1',
            jobTitle: 'Job title 1',
            email: 'email1@email.com',
            phoneNumber: 'Phone 1'
        },
        {
            id: 2,
            category: 1,
            companyName: 'Company 2',
            description: 'Description 2',
            firstName: 'John 2',
            lastName: 'Smith 2',
            jobTitle: 'Job title 2',
            email: 'email2@email.com',
            phoneNumber: 'Phone 2'
        }
    ],
    team: [
        { fullName: 'User 1', gpid: 'KPMG0000006', roleId: 1 },
        { fullName: 'User 2', gpid: 'KPMG0000007', roleId: 2 }
    ],
    state: ProjectState.DONE
};

export class MockProjectService {
    getIndustries(): Observable<Industry[]> {
        return of([]);
    }
    getProjects(): Observable<Project[]> {
        return of(PROJECT_OBJECT);
    }

    getProject(id: number | string): Observable<Project> {
        return of(PROJECT_OBJECT[0]);
    }
    getProjectSetup(id: number | string): Observable<ProjectSetupModel> {
        return of(ProjectSetupObject);
    }

    postProject(model: ProjectSetupModel): Observable<Object> {
        return of(Object);
    }

    putProject(model: ProjectSetupModel): Observable<Object> {
        return of(Object);
    }
}
