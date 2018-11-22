import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RIGHTS } from '@core/app.const';
import { UnsavedChanges } from '@core/guards/unsaved-changes/unsaved-changes';
import { NamedUser, Project, ProjectSetupConfiguration, ProjectSetupModel } from '@core/models';
import { Industry } from '@core/models/project/industry-model';
import { ConfigurationService, ProjectService } from '@core/services';
import { DxDropDownBoxComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';
import { cloneDeep, isEqual } from 'lodash';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { CreateHandler } from './create-handler';
import { EditHandler } from './edit-handler';
import { ProjectLegalEntitiesComponent } from './project-legal-entities/project-legal-entities.component';
import { ProjectMilestonesComponent } from './project-milestones/project-milestones.component';
import { ProjectObjectivesComponent } from './project-objectives/project-objectives.component';
import { UpdateHandler } from './update-handler';

@Component({
    templateUrl: './project-setup.component.html',
    styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent extends UnsavedChanges implements OnInit, DoCheck {
    private isValid: boolean = false;
    private isProjectSetup: boolean = false;
    private isDirty: boolean = false;
    isToastVisible: boolean = false;
    validationMessages = { teamMembers: { visible: false } };
    valdationRules = {};
    RIGHTS = RIGHTS;

    project: ProjectSetupModel;
    projectOrigin: ProjectSetupModel;
    availableUsers: NamedUser[];
    editHandler: EditHandler;
    selectedProject: Project;
    industries: Industry[] = [];
    allIndustries: Industry[] = [];
    searchText: string = '';

    @ViewChild('dxValidGroupAll')
    dxValidGroupAll: DxValidationGroupComponent;
    @ViewChild(ProjectObjectivesComponent)
    objectivesComponent: ProjectObjectivesComponent;
    @ViewChild(ProjectMilestonesComponent)
    milestonesComponent: ProjectMilestonesComponent;
    @ViewChild(ProjectLegalEntitiesComponent)
    legalEntitiesComponent: ProjectLegalEntitiesComponent;
    @ViewChild(DxDropDownBoxComponent)
    industryDropDown: DxDropDownBoxComponent;

    configuration: ProjectSetupConfiguration;

    hasChanges(): boolean {
        return this._checkForChanges();
    }

    constructor(
        private _sharedStorageService: SharedStorageService,
        private projectService: ProjectService,
        private configurationService: ConfigurationService,
        private localStorageService: LocalStorageService,
        private route: ActivatedRoute
    ) {
        super();
        this.availableUsers = [];
        this.configuration = new ProjectSetupConfiguration();
        this.project = new ProjectSetupModel();
    }

    ngOnInit() {
        this.configurationService
            .getProjectSetupConfiguration()
            .subscribe(configuration => (this.configuration = configuration));
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.projectService.getIndustries(this.selectedProject.projectGuid).subscribe(industries => {
            this.industries = industries;
            this.allIndustries = this.expandIndustries(industries);
        });
        this._reload();
    }

    expandIndustries(industries: Industry[]) {
        return industries.length == 0
            ? []
            : industries.concat(
                  industries
                      .map(i => (i.children.length == 0 ? [] : this.expandIndustries(i.children)))
                      .reduce((a, c) => a.concat(c))
              );
    }

    industryOpened = () => {
        this.searchText = '';
    };

    ngDoCheck(): void {
        if (this.isProjectSetup && !this.isDirty && !isEqual(this.project, this.projectOrigin)) {
            this.isDirty = true;
        }
    }

    onIndustrySelectionChanged = event => {
        const item = event.selectedRowsData[0];
        if (this.allIndustries.find(i => i.id == item.id).children.length == 0) {
            this.project.industryId = item.id;
            this.industryDropDown.instance.close();
        }
    };

    updateTeam(assignedUsers: NamedUser[]) {
        this.project.team = assignedUsers;
    }

    validateMe(e) {
        const instance: any = Validator.getInstance(e.element);
        if (instance) {
            instance.validate();
        }
    }

    validateAndSubmitForm() {
        this.objectivesComponent.submitIfNewNotEmpty();
        this.milestonesComponent.submitIfNewNotEmpty();
        this.legalEntitiesComponent.submitIfNewNotEmpty();
        this.isValid = false;

        const dxValidate = this.dxValidGroupAll.instance.validate();
        const isValidTeamMembers = this.validateTeamMembers();

        this.isValid = dxValidate.isValid && isValidTeamMembers;
        if (this.isValid) {
            this.editHandler.save(this.project).subscribe(data => {
                this._reload();
                this.isToastVisible = true;
            });
            this.projectOrigin = cloneDeep(this.project);
            this.isDirty = false;
        }
    }

    validateTeamMembers(): boolean {
        this.validationMessages.teamMembers.visible = false;
        if (this.project.team.length == 0) {
            this.validationMessages.teamMembers.visible = true;
            return false;
        }
        return true;
    }

    private _reload(): void {
        const guid = this.route.snapshot.paramMap.get('id');
        this.availableUsers = [];
        if (this.route.snapshot.url.length >= 2 && this.route.snapshot.url[1].path == 'setup') {
            this.editHandler = new UpdateHandler(
                this.projectService,
                this.configurationService,
                project => {
                    this.project = project;
                    this.projectOrigin = cloneDeep(this.project);
                    this.isProjectSetup = true;
                },
                this.availableUsers,
                guid
            );
        } else {
            this.editHandler = new CreateHandler(
                this.configurationService,
                this.projectService,
                this.localStorageService,
                this.project,
                this.availableUsers,
                guid
            );
        }
    }

    private _checkForChanges(): boolean {
        const hasChanged =
            this.isDirty ||
            this._checkElementNotEmpty(this.objectivesComponent.newValue.description) ||
            this.milestonesComponent.newMilestone.date != undefined ||
            this._checkElementNotEmpty(this.milestonesComponent.newMilestone.description) ||
            this._checkElementNotEmpty(this.legalEntitiesComponent.newLegalEntity.companyName) ||
            this._checkElementNotEmpty(this.legalEntitiesComponent.newLegalEntity.abbreviation);
        return hasChanged;
    }

    private _checkElementNotEmpty(content: string): boolean {
        return content != undefined && content.trim() != '';
    }
}
