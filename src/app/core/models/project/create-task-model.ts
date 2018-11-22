export class CreateTaskModel {
    chapterId: number;
    name: string;

    constructor(chapterId: number, name: string) {
        this.chapterId = chapterId;
        this.name = name;
    }
}
