import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksFilterType } from '@core/enum/tasks-filter-type.enum';
import { StatusFilterButtonInfo } from '../../../shared/project-scope/status-filter-button-info';
import { TasksFilterInfo } from '../../../shared/project-scope/tasks-filer-info';

@Component({
    selector: 'kosmos-tasks-filter-bar',
    templateUrl: './tasks-filter-bar.component.html',
    styleUrls: ['./tasks-filter-bar.component.scss']
})
export class TasksFilterBarComponent implements OnInit {
    @Input()
    activeTypeFilter: TasksFilterType;
    @Input()
    filterButtonInfos: StatusFilterButtonInfo[];
    @Output()
    filterChanged = new EventEmitter<TasksFilterInfo>();

    // enum variables used in the template
    tasksFilterType = TasksFilterType;

    constructor() {}

    ngOnInit() {}

    setFilterType(filterType: TasksFilterType) {
        if (this.activeTypeFilter != filterType) {
            this.activeTypeFilter = filterType;
            this.filterChanged.emit(this.getFilterInfo());
        }
    }

    toggleStateFilter(id: number) {
        const filter = this.filterButtonInfos.find(f => f.id == id);
        filter.isActive = !filter.isActive;

        this.filterChanged.emit(this.getFilterInfo());
    }

    private getFilterInfo(): TasksFilterInfo {
        return { filterType: this.activeTypeFilter, statusFilter: this.getStatusFilter() };
    }

    private getStatusFilter(): number[] {
        const filter: number[] = [];

        for (const f of this.filterButtonInfos) {
            if (f.isActive) {
                filter.push(f.id);
            }
        }

        return filter;
    }
}
