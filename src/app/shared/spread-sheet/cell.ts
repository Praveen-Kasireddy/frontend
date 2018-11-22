export class CellWithStyle {
    row: Number;
    column: Number;
    value: string;

    name: string;
    style: string;

    constructor(row: Number, column: Number, value: string, name: string, style: string) {
        this.row = row;
        this.column = column;
        this.value = value;
        this.name = name;
        this.style = style;
    }
}

export class CellCoordinates {
    row: Number;
    column: Number;

    constructor(cellWithStyle: CellWithStyle) {
        this.row = cellWithStyle.row;
        this.column = cellWithStyle.column;
    }
}
