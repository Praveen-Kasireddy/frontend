import { ImportStateEnum } from '@core/enum/import-state-enum';

export class ImportResult {
    public state: ImportStateEnum;
    public message: string;
}
