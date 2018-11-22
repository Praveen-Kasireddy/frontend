import { CustomProjectProperty } from '@core/models/configuration/custom-project-property';
import { NamedUser } from '@core/models/configuration/named-user';

export class ConfigurationDetails {
    configGuid: string;
    name: string;
    configDescription: string;
    defaultWatermarkText: string;
    availableUsers: NamedUser[];
    customProjectProperties: CustomProjectProperty[];
    constructor() {
        this.availableUsers = [];
        this.customProjectProperties = [];
    }
}
