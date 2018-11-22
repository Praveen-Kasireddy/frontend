export class ReportPageNavigation {
    productId: number;
    chapterId: number;
    taskId: number;
    sequenceNumber: number;
    guid: string;

    constructor(productId: number, chapterId: number, taskId: number, sequenceNumber: number, guid: string) {
        this.productId = productId;
        this.chapterId = chapterId;
        this.taskId = taskId;
        this.sequenceNumber = sequenceNumber;
        this.guid = guid;
    }
}
