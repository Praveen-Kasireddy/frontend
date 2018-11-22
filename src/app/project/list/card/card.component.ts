import { HttpErrorResponse } from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { ProjectState } from '@core/enum/project-state.enum';
import { Project } from '@core/models';
import { ProjectService } from '@core/services';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
    selector: 'kosmos-project-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent implements OnInit {
    private _intervalId: NodeJS.Timer;
    private _isLoading: boolean = true;
    private _loadProjectInProgress: boolean = false;

    @Input()
    project: Project;

    @Input()
    @HostBinding('class.-is-selected')
    isSelected: boolean;

    @Output()
    selected = new EventEmitter();

    @Output()
    loaded = new EventEmitter<Project>();

    @Output()
    error = new EventEmitter<Project>();

    @HostBinding('class.-is-loading')
    get isLoading() {
        return this._isLoading;
    }

    @HostBinding('class.-has-progress')
    get hasProgress() {
        if (!this.project || !this.project.scopeItemSummary) {
            return false;
        }

        return this.project.scopeItemSummary.completed > 0;
    }

    @HostBinding('class.-is-completed')
    get isCompleted() {
        if (!this.project || !this.project.scopeItemSummary) {
            return false;
        }

        const completed = this.project.scopeItemSummary.completed;
        const total = this.project.scopeItemSummary.total;

        return total > 0 && completed >= total;
    }

    isCreating: boolean = false;

    constructor(private _ref: ChangeDetectorRef, private _projectService: ProjectService) {}

    ngOnInit(): void {
        this._isLoading = true;
        this.isCreating = this.project.state != ProjectState.DONE;

        this._loadProject();
        this._intervalId = setInterval(() => {
            this._loadProject();
        }, 10000);
    }

    cardClicked(event: MouseEvent): void {
        event.preventDefault();

        if (!this.isLoading) {
            this.selected.emit();
        }
    }

    private _loadProject(): void {
        if (this._loadProjectInProgress) {
            return;
        }

        this._loadProjectInProgress = true;

        const projectName = this.project.name;
        this._projectService
            .getProject(this.project.projectGuid)
            .pipe(
                catchError((error: any) => {
                    this._loadProjectInProgress = false;

                    if (error instanceof HttpErrorResponse) {
                        if (error.status == 404) {
                            clearInterval(this._intervalId);
                            this.error.emit(this.project);
                        }
                    }
                    return throwError(error);
                })
            )
            .subscribe(project => {
                this._loadProjectInProgress = false;

                if (!project.name) {
                    project.name = projectName;
                }
                this.project = project;

                if (project.state == ProjectState.DONE) {
                    clearInterval(this._intervalId);
                    this._isLoading = false;
                    this.loaded.emit(this.project);
                } else {
                    this._isLoading = true;
                    this.isCreating = this.project.state != ProjectState.DONE;
                }

                this._ref.detectChanges();
            });
    }
}
