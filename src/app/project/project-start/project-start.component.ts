import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import { ProjectState } from '@core/enum';
import { NamedUser, Project, ProjectSetupConfiguration, ProjectStartModel } from '@core/models';
import { ConfigurationService, ProjectService } from '@core/services';
import { DxAutocompleteComponent, DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import Validator from 'devextreme/ui/validator';

@Component({
    moduleId: module.id,
    selector: 'kosmos-project-start',
    templateUrl: 'project-start.component.html',
    styleUrls: ['project-start.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectStartComponent {
    @Input()
    visible: boolean = false;
    @Output()
    closeEvent = new EventEmitter();
    @Output()
    projectCreated = new EventEmitter<Project>();
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;
    @ViewChild(DxAutocompleteComponent)
    daContactControl: DxAutocompleteComponent;
    project: ProjectStartModel = new ProjectStartModel();
    configuration: ProjectSetupConfiguration;
    daContactToAdd: NamedUser;
    showDaContactsValidationMessage: boolean = false;
    showCommercialActionsValidationMessage: boolean = false;
    showFeesValidationMessage: boolean = false;
    isToastVisible: boolean = false;

    constructor(
        private _ref: ChangeDetectorRef,
        private _configurationService: ConfigurationService,
        private _projectService: ProjectService
    ) {}

    addDAContact() {
        this.project.daContacts.push(this.daContactToAdd);
        this.configuration.availableUsers.splice(this.configuration.availableUsers.indexOf(this.daContactToAdd), 1);
        this.daContactControl.value = undefined;
        this.validateDaContacts();
    }

    deleteDAContact(contact: NamedUser) {
        this.configuration.availableUsers.push(contact);
        this.project.daContacts.splice(this.project.daContacts.indexOf(contact), 1);
        this.validateDaContacts();
    }

    hasToEdit(property: string): boolean {
        if (!this.configuration) {
            return false;
        }
        return this.configuration.customProjectProperties.some(p => p.name == property);
    }

    get hasToEditCommercialActions(): boolean {
        return this.hasToEdit('CommercialAction');
    }

    get hasToDAContact(): boolean {
        return this.hasToEdit('DAContact');
    }

    get hasToEditFees(): boolean {
        return this.hasToEdit('Fees');
    }

    popupHidden() {
        this.project = new ProjectStartModel();
    }

    popupShowing() {
        this._loadConfiguration();

        if (this.validationGroup) {
            this.validationGroup.instance.reset();
        }
        this.showDaContactsValidationMessage = false;
        this.showCommercialActionsValidationMessage = false;
        this.showFeesValidationMessage = false;
    }

    popupVisibleChanged() {
        if (!this.popup.visible) {
            this.closeEvent.emit();
        }
    }

    validateCommercialActions(): boolean {
        return !(this.showCommercialActionsValidationMessage =
            this.hasToEditCommercialActions && this.project.commercialAction == undefined);
    }

    validateFees(): boolean {
        return !(this.showFeesValidationMessage = this.hasToEditFees && this.project.fees == undefined);
    }

    validateDaContacts(): boolean {
        return !(this.showDaContactsValidationMessage = this.hasToDAContact && this.project.daContacts.length == 0);
    }

    validateMe(e): boolean {
        const instance: any = Validator.getInstance(e.element);
        return instance.validate();
    }

    validateAndSubmitForm = (): boolean => {
        let result: boolean = this.validateCommercialActions();
        result = this.validateFees() && result;
        result = this.validateDaContacts() && result;
        result = this.validationGroup.instance.validate().isValid && result;
        if (result) {
            const projectName = this.project.name;
            this._projectService.postProject(this.project).subscribe(project => {
                if (project.state == ProjectState.WAIT) {
                    notify(
                        'The project could not be created. Please try again later (approx. five minutes).',
                        'error',
                        10000
                    );
                } else {
                    this.isToastVisible = true;
                    project.name = projectName;
                    this.closeEvent.emit();
                    this.projectCreated.emit(project);
                }
            });

            return true;
        }
        this._ref.detectChanges();
        return false;
    };

    private _loadConfiguration() {
        this._configurationService.getProjectSetupConfiguration().subscribe(configuration => {
            this.configuration = configuration;
            this._ref.detectChanges();
        });
    }
}
