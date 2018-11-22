import { GridCell } from '@core/models/';

export class GridLayout {
    pageWidth: any;
    pageHeight: any;
    columns: any;
    rows: any;
    spacing: any;
    top: any;
    bottom: any;
    left: any;
    right: any;
    boxHeight: any;
    boxWidth: any;
    maxAvailableHeight: any;
    maxAvailablewidth: any;
    cellCount: any;
    contentRightBorder: any;
    contentBottomBorder: any;
    contentTopBorder: any;
    contentLeftBorder: any;
    cellsAvailable: GridCell[] = [];
    maxCellsAvailable: GridCell[] = [];
    cellsCoordinates: GridCell[] = [];
    cellsUsed: GridCell[] = [];
    cellsForIntroColumn: GridCell[] = [];
    container: any[] = [];
    introColumnCell: any;
}
