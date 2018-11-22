import { ResultStatus } from '@core/enum';
import { DataCell } from '@core/models';

export class DataCellUpdateResultEntry {
    public Status: ResultStatus;
    public StatusCode: string;
    public Message: string;
    public UpdatedDataCell: DataCell;
    public CellStyle: string;
}
