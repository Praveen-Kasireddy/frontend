import { TestBed } from '@angular/core/testing';
import {
    CONFIGURATION_DETAILS_OBJECT,
    MockConfigurationService
} from '@core/mocks/configuration/configuration.mock.service';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { ProjectService } from '@core/services/project/project.service';
import { LocalStorageService } from 'ngx-store';
import { CreateHandler } from './create-handler';

describe('CreateHandler', () => {
    let handler: CreateHandler;
    let project: ProjectSetupModel;
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
                { provide: ProjectService, useValue: { postProject: () => {} } }
            ]
        });
        projectService = TestBed.get(ProjectService);
        project = new ProjectSetupModel();
        handler = new CreateHandler(
            TestBed.get(ConfigurationService),
            projectService,
            TestBed.get(LocalStorageService),
            project,
            [],
            undefined
        );
    });

    it('acceptConfig should initialize project', () => {
        expect(project.team.length).toBe(1, 'wrong team length');
        expect(project.team[0].gpid).toBe(CONFIGURATION_DETAILS_OBJECT.availableUsers[0].gpid);
    });

    xit('save should call postProject', () => {
        spyOn(projectService, 'postProject');
        handler.save(project);
        expect(projectService.postProject).toHaveBeenCalled();
    });

    it('saveButtonText should be create project', () => {
        expect(handler.saveButtonText).toBe('Create project', 'wrong button text');
    });
});
