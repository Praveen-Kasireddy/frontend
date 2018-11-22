import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { SourceData } from '@core/models/project/source-data';
import { CellWithStyle } from '@shared/spread-sheet/cell';
import { CellSelectionChangedEvent } from '@shared/spread-sheet/cell-selection-changed-event';
import { spreadsheet } from '@xbs/spreadsheet';

declare const webix: any;

@Component({
    selector: 'kosmos-spread-sheet',
    templateUrl: './spread-sheet.component.html',
    styleUrls: ['./spread-sheet.component.scss']
})
export class SpreadSheetComponent implements OnInit, OnDestroy, OnChanges {
    @ViewChild('sheet')
    _sheet: ElementRef;
    @Input()
    readOnly: boolean;
    @Input()
    menu: boolean;
    @Input()
    data: SourceData;

    @Output()
    cellSelectionChanged = new EventEmitter<CellSelectionChangedEvent>();

    private _grid: spreadsheet;
    private _containerId: string;
    private _onCellChangeEventHandlerHandle: any;
    private _resizeTimer: any;

    constructor(private _element: ElementRef) {
        this._grid = null;
        this._containerId = '' + webix.uid();
        this._element.nativeElement.setAttribute('id', this._containerId);

        this.menu = true;
        this.readOnly = false;
    }

    ngOnInit(): void {
        this._grid = webix.ui(this.getConfig());
        this._grid.resize();

        this._onCellChangeEventHandlerHandle = this._grid.attachEvent('onAfterSelect', id => {
            const event = new CellSelectionChangedEvent();
            for (const currentId of id) {
                const column = currentId.column;
                const row = currentId.row;
                const value = this._grid.getCellValue(row, column);
                const style = this._grid.getStyle(row, column);
                const columnConfig = this._grid.getColumn(column);
                const name = '' + columnConfig.header[0].text + '' + row;
                event.cells.push(new CellWithStyle(row, column, value, name, style));
            }
            this.cellSelectionChanged.emit(event);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this._grid) {
            return;
        }

        for (const propertyName in changes) {
            if (changes.hasOwnProperty(propertyName)) {
                const change = changes[propertyName];
                switch (propertyName) {
                    case 'data':
                        this._grid.parse(change.currentValue, 'json');
                        this._grid.resize();
                        break;
                }
            }
        }
    }

    ngOnDestroy(): void {
        if (this._grid) {
            if (this._onCellChangeEventHandlerHandle) {
                this._grid.detachEvent(this._onCellChangeEventHandlerHandle);
            }
            this._grid.destructor();
        }
    }

    @HostListener('window:resize')
    onResize(): void {
        clearTimeout(this._resizeTimer);
        this._resizeTimer = setTimeout(() => {
            this._grid.config.width = this.getWidth();
            this._grid.config.height = this.getHeight();
            this._grid.resize();
        }, 500);
    }

    onRightClick(event: MouseEvent): void {
        event.cancelBubble = true;
        event.preventDefault();
    }

    setCellStyle(row: number, column: number, style: string): void {
        const styleObj = { id: style, props: {} };
        this._grid.setStyle(row, column, styleObj);
    }

    setCellValue(row: number, column: number, value: string): void {
        this._grid.setCellValue(row, column, value);
    }

    refresh(): void {
        this._grid.refresh();
    }

    private getConfig(): any {
        const config = {
            view: 'spreadsheet',
            container: this._sheet.nativeElement,
            width: this.getWidth(),
            height: this.getHeight(),
            menu: this.menu,
            readonly: this.readOnly,
            toolbar: false
        };

        return config;
    }

    private getWidth(): string {
        return this._sheet.nativeElement.offsetWidth.toString().replace('px', '');
    }

    private getHeight(): string {
        return this._sheet.nativeElement.offsetHeight.toString().replace('px', '');
    }
}
