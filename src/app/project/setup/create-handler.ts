import { ConfigurationDetails } from '@core/models/configuration/configuration-details';
import { NamedUser } from '@core/models/configuration/named-user';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { User } from '@core/models/user';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { ProjectService } from '@core/services/project/project.service';
import { LocalStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { EditHandler } from './edit-handler';

export class CreateHandler extends EditHandler {
    constructor(
        configurationService: ConfigurationService,
        private projectService: ProjectService,
        private localStorageService: LocalStorageService,
        private project: ProjectSetupModel,
        availableUsers: NamedUser[],
        configGuid: string
    ) {
        super(configurationService, availableUsers);
        this.acceptConfigId(configGuid);
    }

    protected acceptConfig(details: ConfigurationDetails) {
        super.acceptConfig(details);

        const currentUser: User = this.localStorageService.get('currentUser');
        this.project.team.push(this.availableUsers.find(u => u.gpid == currentUser.gpid));
    }

    public save(project: ProjectSetupModel): Observable<Object> {
        return of();
    }

    public get saveButtonText(): string {
        return 'Create project';
    }
}
