import { NamedUser } from '@core/models/configuration/named-user';
import { CommercialAction } from '@core/models/configuration/commercial-action';
import { Fees } from '@core/models/configuration/fees';
import { CustomProjectProperty } from '@core/models/configuration/custom-project-property';

export class ProjectSetupConfiguration {
    availableUsers: NamedUser[];
    commercialActions: CommercialAction[];
    fees: Fees[];
    customProjectProperties: CustomProjectProperty[];
}
