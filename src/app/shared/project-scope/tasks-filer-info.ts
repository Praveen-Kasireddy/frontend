import { TasksFilterType } from '@core/enum/tasks-filter-type.enum';

export class TasksFilterInfo {
    filterType: TasksFilterType;
    statusFilter: number[];
}
