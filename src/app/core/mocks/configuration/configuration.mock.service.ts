import { Configuration } from '@core/models/configuration/configuration';
import { ConfigurationDetails } from '@core/models/configuration/configuration-details';
import { ProjectSetupConfiguration } from '@core/models/configuration/project-setup-configuration';
import { Observable, of } from 'rxjs';

const CONFIGURATION_OBJECT: Configuration[] = [
    {
        configGuid: '52e56745-e2bd-46dd-9c46-0baff0acdb33',
        name: 'Lean Config Aquisitions',
        configDescription: '/assets/pdf/1.pdf'
    }
];

// reused in other unit tests - please search before changing
export const CONFIGURATION_DETAILS_OBJECT: ConfigurationDetails = {
    configGuid: '52e56745-e2bd-46dd-9c46-0baff0acdb33',
    name: 'Lean Config Aquisitions',
    configDescription: '/assets/pdf/1.pdf',
    defaultWatermarkText: 'default watermark text',
    availableUsers: [
        { gpid: 'KPMG0000006', fullName: 'fullName user 1', roleId: 1 },
        { gpid: 'gpidUser2', fullName: 'fullName user 2', roleId: 2 }
    ],
    customProjectProperties: [
        {
            id: 1,
            isMandatory: true,
            name: 'NWB',
            value: null
        },
        {
            id: 2,
            isMandatory: true,
            name: 'Stand AGB',
            value: null
        },
        {
            id: 3,
            isMandatory: false,
            name: 'optionale Project-Kategorie',
            value: null
        }
    ]
};

export const PROJECT_SETUP_CONFIGURATION_OBJECT: ProjectSetupConfiguration = {
    availableUsers: [],
    commercialActions: [
        {
            id: 1,
            description: 'Action One'
        },
        {
            id: 2,
            description: 'Action Two'
        }
    ],
    fees: [
        {
            id: 1,
            description: 'First Fees'
        },
        {
            id: 2,
            description: 'Second Fees'
        }
    ],
    customProjectProperties: []
};

export class MockConfigurationService {
    getConfigurations$(): Observable<Configuration[]> {
        return of(CONFIGURATION_OBJECT);
    }

    getConfiguration(id: string) {
        return CONFIGURATION_OBJECT;
    }

    getConfigurationDetails(guid: string): Observable<ConfigurationDetails> {
        return of(CONFIGURATION_DETAILS_OBJECT);
    }

    getProjectSetupConfiguration(): Observable<ProjectSetupConfiguration> {
        return of(PROJECT_SETUP_CONFIGURATION_OBJECT);
    }
}
