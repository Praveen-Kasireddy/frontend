import { ReportPageType } from '@core/enum';

export class ReportPageData {
    productId: number;
    scopeItemId: number;
    sequenceNumber: number;
    isCustom: boolean;
    chapterId: number;
    chapterNumber: number;
    chapterName: string;
    taskName: string;
    globalPageNumber: number;
    pageNumber: number;
    totalNumberOfPages: number;
    content: string;
    canDelete: boolean;
    guid: string;
    type: ReportPageType;
}
