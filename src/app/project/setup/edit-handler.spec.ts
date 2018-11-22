import { TestBed } from '@angular/core/testing';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import {
    MockConfigurationService,
    CONFIGURATION_DETAILS_OBJECT
} from '@core/mocks/configuration/configuration.mock.service';
import { EditHandler } from './edit-handler';
import { NamedUser } from '@core/models/configuration/named-user';
import { ProjectSetupModel } from '@core/models/project/project-setup-model';
import { LocalStorageService } from 'ngx-store';
import { CreateHandler } from './create-handler';

describe('EditHandler', () => {
    let handler: EditHandler;
    const project: ProjectSetupModel = new ProjectSetupModel();

    const availableUsers: NamedUser[] = [];

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
                }
            ]
        });
        handler = new CreateHandler(
            TestBed.get(ConfigurationService),
            undefined,
            TestBed.get(LocalStorageService),
            project,
            [],
            undefined
        );
    });

    it('acceptConfig should initialize available users', () => {
        expect(handler.availableUsers[1].fullName).toBe(
            CONFIGURATION_DETAILS_OBJECT.availableUsers[1].fullName,
            'wrong available user name'
        );
    });
});
