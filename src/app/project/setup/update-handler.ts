import { NamedUser } from '@core/models/configuration/named-user';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { ProjectService } from '@core/services/project/project.service';
import { Observable } from 'rxjs';
import { EditHandler } from './edit-handler';

export class UpdateHandler extends EditHandler {
    assignProject: (project: ProjectSetupModel) => void;
    constructor(
        private projectService: ProjectService,
        configurationService: ConfigurationService,
        assignProject: (project: ProjectSetupModel) => void,
        availableUsers: NamedUser[],
        private projectGuid: string
    ) {
        super(configurationService, availableUsers);
        this.assignProject = assignProject;
        this.projectService
            .getProjectSetup(projectGuid)
            .subscribe(project => this.acceptProject(project), error => console.log(error));
    }

    acceptProject(project: ProjectSetupModel) {
        if (!project.stakeholders) {
            project.stakeholders = [];
        }
        this.assignProject(project);
        this.acceptConfigId(project.configGuid);
    }

    public save(project: ProjectSetupModel): Observable<Object> {
        return this.projectService.putProject(project.projectGuid, project);
    }

    public get saveButtonText(): string {
        return 'Update project';
    }
}
