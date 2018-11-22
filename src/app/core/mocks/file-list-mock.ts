export class FileListMock implements FileList {
    [index: number]: File;
    length: number = 1;
    item(index: number): File {
        return undefined;
    }
}
