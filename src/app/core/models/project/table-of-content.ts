import { ReportPageType } from '@core/enum';

export class TableOfContent {
    id: number;
    productId: number;
    chapterId: number;
    title: string;
    libraryNumber: string;
    pageNumber: number;
    taskId: number;
    sequenceNumber: number;
    progressStateId: number;
    isCollapsed: boolean;
    children: TableOfContent[];
    includedTasks: number[];
    guid: string;
    type: ReportPageType;
}
