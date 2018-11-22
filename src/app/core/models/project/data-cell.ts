import { IngestionType } from '@core/enum/ingestion-type.enum';
import { DimensionCharacteristic } from '@core/models/project/dimension-characteristic';

export class DataCell {
    public column: number;
    public id: number;
    public ingestionType: IngestionType;
    public isInRange: boolean;
    public row: number;
    public value: number;
    public originalValue: number;
    public originalDisplayString: string;
    public valueType: string;
    public dimensionCharacteristics: DimensionCharacteristic[];
}
