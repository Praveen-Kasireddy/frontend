import { IngestionType } from '@core/enum/ingestion-type.enum';
import { DimensionCharacteristic } from '@core/models/project/dimension-characteristic';

export class UpdateDataCell {
    public id: number;
    public ingestionType: IngestionType;
    public isInRange: boolean;
    public dimensionCharacteristics: DimensionCharacteristic[];
}
