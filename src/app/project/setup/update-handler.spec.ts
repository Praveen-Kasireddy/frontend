import { UpdateHandler } from './update-handler';
import { TestBed } from '@angular/core/testing';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import {
    MockConfigurationService,
    CONFIGURATION_DETAILS_OBJECT
} from '@core/mocks/configuration/configuration.mock.service';
import { LocalStorageService } from 'ngx-store';
import { ProjectService } from '@core/services/project/project.service';
import { NamedUser } from '@core/models/configuration/named-user';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { MockProjectService, ProjectSetupObject } from '@core/mocks/project/project.mock.service';

describe('UpdateHandler', () => {
    let handler: UpdateHandler;
    let project: ProjectSetupModel;
    const availableUsers: NamedUser[] = [];
    let projectService: ProjectService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: ConfigurationService, useClass: MockConfigurationService },
                {
                    provide: LocalStorageService,
                    useValue: {
                        get: function(key: string) {
                            return { gpid: CONFIGURATION_DETAILS_OBJECT.availableUsers[0].gpid };
                        }
                    }
                },
                { provide: ProjectService, useClass: MockProjectService }
            ]
        });
        projectService = TestBed.get(ProjectService);
        handler = new UpdateHandler(
            projectService,
            TestBed.get(ConfigurationService),
            p => (project = p),
            availableUsers,
            'some guid'
        );
    });

    it('constructor should inizialize project and available users', () => {
        expect(project.projectGuid).toBe(ProjectSetupObject.projectGuid, 'wrong project guid');
        expect(availableUsers.length).toBeGreaterThan(0);
    });

    it('save should call putProject', () => {
        spyOn(projectService, 'putProject');
        handler.save(ProjectSetupObject);
        expect(projectService.putProject).toHaveBeenCalled();
    });

    it('save button text should be update project', () => {
        expect(handler.saveButtonText).toBe('Update project');
    });
});
