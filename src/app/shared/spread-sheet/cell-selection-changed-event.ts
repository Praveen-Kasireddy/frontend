import { CellWithStyle } from '@shared/spread-sheet/cell';

export class CellSelectionChangedEvent {
    target: any;
    cells: CellWithStyle[];

    constructor() {
        this.cells = new Array<CellWithStyle>();
    }
}
