import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { NamedUser } from '@core/models/configuration/named-user';
import { ConfigurationDetails } from '@core/models/configuration/configuration-details';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { Observable } from 'rxjs';

export abstract class EditHandler {
    constructor(protected configurationService: ConfigurationService, public availableUsers: NamedUser[]) {}

    protected acceptConfig(details: ConfigurationDetails) {
        for (const availableUser of details.availableUsers) {
            this.availableUsers.push(availableUser);
        }
    }

    protected acceptConfigId(guid: string) {
        this.configurationService
            .getConfigurationDetails(guid)
            .subscribe(configurationDetails => this.acceptConfig(configurationDetails), error => console.log(error));
    }

    public abstract save(project: ProjectSetupModel): Observable<Object>;

    public abstract get saveButtonText(): string;
}
