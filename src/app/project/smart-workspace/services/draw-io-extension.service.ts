import { EventEmitter, Injectable } from '@angular/core';
import { SmartWorkspaceContainerType } from '@core/enum/smart-workspace-container-type.enum';
import { ContainerDimension, GridCell, GridLayout, Layout, LayoutContainer } from '@core/models';
import notify from 'devextreme/ui/notify';
import { NGXLogger } from 'ngx-logger';
import { SmartWorkspaceComponent } from '../smart-workspace.component';

declare const mxGraph: any;
declare const mxClient: any;
declare const mxEvent: any;
declare const mxUtils: any;
declare const mxConstants: any;
declare const mxPoint: any;
declare const mxCellTracker: any;
declare const mxCell: any;
declare const mxGeometry: any;
declare const mxRectangle: any;
declare const mxEventObject: any;
declare const mxVertexHandler: any;
declare const mxGraphHandler: any;
declare const mxCellHighlight: any;
declare const mxSvgCanvas2D: any;
declare const Graph: any;
declare const App: any;
declare const EditorUi: any;
declare const drawIoUi: any;
declare const drawIoCallback: any;
declare const mxCellEditor: any;

@Injectable()
export class DrawIOExtensionService {
    private _baseurl: string = document.head.getElementsByTagName('base')[0].href;

    private _host: SmartWorkspaceComponent;

    private _drawIOChangeListener: any = undefined;
    private _drawIOOpenFroalaListener: any = undefined;
    private _drawIOCellsAddedListener: any = undefined;
    private _drawIOCellsRemovedListener: any = undefined;
    private _drawIOCellsResizedListener: any = undefined;
    private _drawIOCellsMovedListener: any = undefined;
    private _drawIOEditingStoppedListener: any = undefined;

    private _isLoaded: boolean;
    private _gridLayout = new GridLayout();

    private _currentCell: any;
    private _clickedCell: any;
    private _clickedCellGeometry: any;
    contentChanged = new EventEmitter<boolean>();
    chartCellChanged = new EventEmitter<any>();
    imageCellChanged = new EventEmitter<any>();

    get containerPlaceHolderText(): string {
        return '<p>Insert your content....</p>';
    }

    get hasFreeGridCell(): boolean {
        return this._gridLayout.cellsAvailable.length > 0;
    }

    get isLoaded(): boolean {
        return this._isLoaded;
    }

    get hasContainers(): boolean {
        return this._gridLayout.container.length != 0;
    }

    get hasIntroColumn(): boolean {
        return typeof this._gridLayout.introColumnCell != 'undefined';
    }

    get hasOnlyIntroColumn(): boolean {
        return this._gridLayout.container.length == 1 && this.hasIntroColumn;
    }

    get selectedValue(): any {
        return this._currentCell.value.attributes['label'].nodeValue;
    }

    get currentCell(): any {
        return this._currentCell;
    }

    get getCurrentCellStyle(): any {
        return drawIoUi.editor.graph.getCellStyle(this._currentCell);
    }

    get getIsContentEditing(): any {
        return drawIoUi.editor.graph.cellEditor.isContentEditing();
    }

    setCurrentCellStyle(style) {
        const cells: any[] = [];
        cells.push(this._currentCell);
        drawIoUi.editor.graph.setCellStyle(style, cells);
    }

    get isIntroColumnSelected(): boolean {
        return this._isCellGenericSmartWorkspaceContainerType(
            this._currentCell,
            SmartWorkspaceContainerType.IntroColumn
        );
    }

    get graphXml(): any {
        return mxUtils.getXml(drawIoUi.editor.getGraphXml());
    }

    get pageFormat(): any {
        return drawIoUi.editor.graph.pageFormat;
    }

    get layouts(): Layout[] {
        return [
            {
                id: 1,
                name: 'Layout 1',
                imageSrc: this._baseurl + 'assets/images/layouts/layout-1.svg',
                layoutColumn: false,
                layoutContainers: [
                    {
                        startCell: 1,
                        columnSpan: 5,
                        rowSpan: 2
                    }
                ]
            },
            {
                id: 2,
                name: 'Layout 2',
                imageSrc: this._baseurl + 'assets/images/layouts/layout-2.svg',
                layoutColumn: true,
                layoutContainers: [
                    {
                        startCell: 2,
                        columnSpan: 4,
                        rowSpan: 2
                    }
                ]
            },
            {
                id: 3,
                name: 'Layout 3',
                imageSrc: this._baseurl + 'assets/images/layouts/layout-3.svg',
                layoutColumn: true,
                layoutContainers: [
                    {
                        startCell: 2,
                        columnSpan: 2,
                        rowSpan: 2
                    },
                    {
                        startCell: 2,
                        columnSpan: 2,
                        rowSpan: 2
                    }
                ]
            },
            {
                id: 4,
                name: 'Layout 4',
                imageSrc: this._baseurl + 'assets/images/layouts/layout-4.svg',
                layoutColumn: true,
                layoutContainers: [
                    {
                        startCell: 2,
                        columnSpan: 4,
                        rowSpan: 1
                    },
                    {
                        startCell: 2,
                        columnSpan: 4,
                        rowSpan: 1
                    }
                ]
            },
            {
                id: 5,
                name: 'Layout 5',
                imageSrc: this._baseurl + 'assets/images/layouts/layout-5.svg',
                layoutColumn: true,
                layoutContainers: [
                    {
                        startCell: 2,
                        columnSpan: 2,
                        rowSpan: 1
                    },
                    {
                        startCell: 2,
                        columnSpan: 2,
                        rowSpan: 1
                    },
                    {
                        startCell: 2,
                        columnSpan: 2,
                        rowSpan: 1
                    },
                    {
                        startCell: 2,
                        columnSpan: 2,
                        rowSpan: 1
                    }
                ]
            }
        ];
    }

    constructor(private _logger: NGXLogger) {
        this._isLoaded = false;
    }

    dispose(): void {
        this._isLoaded = false;
        this._host = undefined;

        this._removeListener();
    }

    private _registerListener(pageContent: string): void {
        const parent = this;

        // create listener
        this._drawIOChangeListener = mxUtils.bind(drawIoUi, function(sender, evt) {
            parent.contentChanged.emit(true);
        });

        const drawIOLoadedListener = mxUtils.bind(this, function() {
            drawIoUi.editor.graph.getModel().addListener(mxEvent.CHANGE, this._drawIOChangeListener);
            this.setContent(pageContent);

            Graph.prototype.removeListener(drawIOLoadedListener);
        });

        this._drawIOOpenFroalaListener = mxUtils.bind(this, function() {
            if (
                this._isCellGenericSmartWorkspaceContainerType(this._currentCell, SmartWorkspaceContainerType.Froala) ||
                this._isCellGenericSmartWorkspaceContainerType(
                    this._currentCell,
                    SmartWorkspaceContainerType.TableContainer
                ) ||
                this._isCellGenericSmartWorkspaceContainerType(
                    this._currentCell,
                    SmartWorkspaceContainerType.IntroColumn
                )
            ) {
                this._host.setFroalaPopupSize(this._currentCell.geometry.width, this._currentCell.geometry.height);
                this._host.popupVisible = true;
            }
        });

        this._drawIOCellsAddedListener = mxUtils.bind(this, function(sender, evt) {
            const cells = evt.getProperty('cells');
            if (cells != null) {
                for (let i = 0; i < cells.length; i++) {
                    const geo = cells[i].getGeometry();
                    if (!cells[i].parent.edge) {
                        if (this._isOutOfDrawingPage(cells[i])) {
                            geo.x = drawIoUi.editor.graph.pageFormat.width / 2;
                            geo.y = drawIoUi.editor.graph.pageFormat.height / 2;
                            cells[i].setGeometry(geo);
                        }
                        if (
                            this._isCellGenericSmartWorkspaceContainerType(cells[i], SmartWorkspaceContainerType.Charts)
                        ) {
                            parent.chartCellChanged.emit(cells[i]);
                        }
                    }
                }
            }
        });

        this._drawIOCellsRemovedListener = mxUtils.bind(this, function(sender, evt) {
            const cells = evt.getProperty('cells');
            if (cells != null) {
                for (let i = 0; i < cells.length; i++) {
                    if (this._isCellGenericContainer(cells[i])) {
                        this._calculateContainer();
                        this._host.isAnalysisContainerSelected = false;
                        this._host.isSnippetsVisible = false;
                    }
                }
            }
        });

        this._drawIOCellsResizedListener = mxUtils.bind(this, function(sender, evt) {
            const cells = evt.getProperty('cells');
            if (cells != null) {
                for (let i = 0; i < cells.length; i++) {
                    const geo = cells[i].getGeometry();

                    if (this._isOutOfDrawingPage(cells[i])) {
                        if (this._clickedCellGeometry != undefined) {
                            cells[i].setGeometry(this._clickedCellGeometry);
                        }
                        continue;
                    }
                    if (!this._isOutOfContentPage(cells[i])) {
                        // check if cell is now over another...
                        if (this._isDrawIoCelloverAnotherDrawiCell(cells[i])) {
                            cells[i].setGeometry(this._clickedCellGeometry);
                            continue;
                        }
                    }
                    if (this._isCellGenericSmartWorkspaceContainerType(cells[i], SmartWorkspaceContainerType.Charts)) {
                        parent.chartCellChanged.emit(cells[i]);
                    }
                    if (this._isCellGenericSmartWorkspaceContainerType(cells[i], SmartWorkspaceContainerType.Image)) {
                        parent.imageCellChanged.emit(cells[i]);
                    }

                    this._calculateContainer();
                }
            }
        });

        this._drawIOEditingStoppedListener = mxUtils.bind(this, function(sender, evt) {
            if (
                this._isCellGenericContainer(this._currentCell) &&
                this.getAttributeFromCell(this._currentCell, 'initialValue') == 1 &&
                this.getAttributeFromCell(this._currentCell, 'label') != ''
            ) {
                const style = this.getCurrentCellStyle;
                style.dashed = '0';
                style.strokeColor = 'none';
                let newStyle: string = '';
                for (const [key, value] of Object.entries(style)) {
                    newStyle = newStyle + (key + '=' + value + ';');
                }
                this._currentCell.setAttribute('initialValue', '0');
                this.setCurrentCellStyle(newStyle);
            }
        });

        this._drawIOCellsMovedListener = mxUtils.bind(this, function(sender, evt) {
            const cells = evt.getProperty('cells');

            if (cells != null) {
                for (let i = 0; i < cells.length; i++) {
                    const geo = cells[i].getGeometry();
                    this._clickedCellGeometry = geo;
                    // tslint:disable-next-line:max-line-length
                    if (
                        this._isOutOfDrawingPage(cells[i]) ||
                        this._isDrawIoCelloverAnotherDrawiCell(cells[i]) ||
                        this._isCellMovementByCursorWithOnlyOnePixel(cells[i], evt)
                    ) {
                        if (evt.properties.dx != 0) {
                            // x moved
                            geo.x = geo.x - evt.properties.dx;
                        }
                        if (evt.properties.dy != 0) {
                            // y moved
                            geo.y = geo.y - evt.properties.dy;
                        }
                        cells[i].setGeometry(geo);
                        this._clickedCellGeometry = geo;
                    }
                    if (this._isOutOfContentPage(cells[i])) {
                        if (geo.x < this._gridLayout.left) {
                            // out of left
                            geo.x = this._gridLayout.left;
                        }
                        if (geo.y < this._gridLayout.top) {
                            // out of top
                            geo.y = this._gridLayout.top;
                        }
                        if (geo.x + geo.width > this._gridLayout.contentRightBorder) {
                            // out of right
                            geo.x = this._gridLayout.contentRightBorder - geo.width;
                        }
                        if (geo.y + geo.height > this._gridLayout.contentBottomBorder) {
                            // out of bottom
                            geo.y = this._gridLayout.contentBottomBorder - geo.height;
                        }
                    }
                    this._calculateContainer();
                }
            }
        });

        Graph.prototype.addListener('DrawIOLoaded', drawIOLoadedListener);
        Graph.prototype.addListener('openFroala', this._drawIOOpenFroalaListener);
        Graph.prototype.addListener(mxEvent.CELLS_ADDED, this._drawIOCellsAddedListener);
        Graph.prototype.addListener(mxEvent.CELLS_REMOVED, this._drawIOCellsRemovedListener);
        Graph.prototype.addListener(mxEvent.CELLS_RESIZED, this._drawIOCellsResizedListener);
        Graph.prototype.addListener(mxEvent.CELLS_MOVED, this._drawIOCellsMovedListener);
        Graph.prototype.addListener(mxEvent.EDITING_STOPPED, this._drawIOEditingStoppedListener);
    }

    private _removeListener(): void {
        if (this._drawIOChangeListener) {
            if (drawIoUi) {
                drawIoUi.editor.graph.getModel().removeListener(this._drawIOChangeListener);
            }
        }
        this._removeGraphListener(this._drawIOOpenFroalaListener);
        this._removeGraphListener(this._drawIOCellsAddedListener);
        this._removeGraphListener(this._drawIOCellsRemovedListener);
        this._removeGraphListener(this._drawIOCellsResizedListener);
        this._removeGraphListener(this._drawIOCellsMovedListener);
        this._removeGraphListener(this._drawIOEditingStoppedListener);

        this._drawIOChangeListener = undefined;
        this._drawIOOpenFroalaListener = undefined;
        this._drawIOCellsAddedListener = undefined;
        this._drawIOCellsRemovedListener = undefined;
        this._drawIOCellsResizedListener = undefined;
        this._drawIOCellsMovedListener = undefined;
        this._drawIOEditingStoppedListener = undefined;
    }

    private _removeGraphListener(func: any): void {
        if (func) {
            Graph.prototype.removeListener(func);
        }
    }

    init(host: SmartWorkspaceComponent, pageContent: string): void {
        this._host = host;
        this._isLoaded = true;

        const parent = this;

        App.prototype.updateDocumentTitle = EditorUi.prototype.updateDocumentTitle = function() {
            // we don't want a document title update
        };

        Graph.prototype.defaultThemes[Graph.prototype.defaultThemeName] = mxUtils.parseXml(
            // tslint:disable-next-line:max-line-length
            '<mxStylesheet><add as="defaultVertex"><add as="shape" value="label"/><add as="perimeter" value="rectanglePerimeter"/><add as="fontSize" value="12"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="fillColor" value="#ffffff"/><add as="strokeColor" value="#000000"/><add as="fontColor" value="#000000"/></add><add as="defaultEdge"><add as="shape" value="connector"/><add as="labelBackgroundColor" value="#ffffff"/><add as="endArrow" value="classic"/><add as="fontSize" value="11"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="rounded" value="1"/><add as="strokeColor" value="#000000"/><add as="fontColor" value="#000000"/></add><add as="fancy"><add as="shadow" value="1"/><add as="glass" value="1"/></add><add as="gray" extend="fancy"><add as="gradientColor" value="#B3B3B3"/><add as="fillColor" value="#F5F5F5"/><add as="strokeColor" value="#666666"/></add><add as="blue" extend="fancy"><add as="gradientColor" value="#7EA6E0"/><add as="fillColor" value="#DAE8FC"/><add as="strokeColor" value="#6C8EBF"/></add><add as="green" extend="fancy"><add as="gradientColor" value="#97D077"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#82B366"/></add><add as="turquoise" extend="fancy"><add as="gradientColor" value="#67AB9F"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#6A9153"/></add><add as="yellow" extend="fancy"><add as="gradientColor" value="#FFD966"/><add as="fillColor" value="#FFF2CC"/><add as="strokeColor" value="#D6B656"/></add><add as="orange" extend="fancy"><add as="gradientColor" value="#FFA500"/><add as="fillColor" value="#FFCD28"/><add as="strokeColor" value="#D79B00"/></add><add as="red" extend="fancy"><add as="gradientColor" value="#EA6B66"/><add as="fillColor" value="#F8CECC"/><add as="strokeColor" value="#B85450"/></add><add as="pink" extend="fancy"><add as="gradientColor" value="#B5739D"/><add as="fillColor" value="#E6D0DE"/><add as="strokeColor" value="#996185"/></add><add as="purple" extend="fancy"><add as="gradientColor" value="#8C6C9C"/><add as="fillColor" value="#E1D5E7"/><add as="strokeColor" value="#9673A6"/></add><add as="plain-gray"><add as="gradientColor" value="#B3B3B3"/><add as="fillColor" value="#F5F5F5"/><add as="strokeColor" value="#666666"/></add><add as="plain-blue"><add as="gradientColor" value="#7EA6E0"/><add as="fillColor" value="#DAE8FC"/><add as="strokeColor" value="#6C8EBF"/></add><add as="plain-green"><add as="gradientColor" value="#97D077"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#82B366"/></add><add as="plain-turquoise"><add as="gradientColor" value="#67AB9F"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#6A9153"/></add><add as="plain-yellow"><add as="gradientColor" value="#FFD966"/><add as="fillColor" value="#FFF2CC"/><add as="strokeColor" value="#D6B656"/></add><add as="plain-orange"><add as="gradientColor" value="#FFA500"/><add as="fillColor" value="#FFCD28"/><add as="strokeColor" value="#D79B00"/></add><add as="plain-red"><add as="gradientColor" value="#EA6B66"/><add as="fillColor" value="#F8CECC"/><add as="strokeColor" value="#B85450"/></add><add as="plain-pink"><add as="gradientColor" value="#B5739D"/><add as="fillColor" value="#E6D0DE"/><add as="strokeColor" value="#996185"/></add><add as="plain-purple"><add as="gradientColor" value="#8C6C9C"/><add as="fillColor" value="#E1D5E7"/><add as="strokeColor" value="#9673A6"/></add><add as="text"><add as="fillColor" value="none"/><add as="gradientColor" value="none"/><add as="strokeColor" value="none"/><add as="align" value="left"/><add as="verticalAlign" value="top"/></add><add as="label"><add as="fontStyle" value="1"/><add as="align" value="left"/><add as="verticalAlign" value="middle"/><add as="spacing" value="2"/><add as="spacingLeft" value="52"/><add as="imageWidth" value="42"/><add as="imageHeight" value="42"/><add as="rounded" value="1"/></add><add as="icon" extend="label"><add as="align" value="center"/><add as="imageAlign" value="center"/><add as="verticalLabelPosition" value="bottom"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="4"/><add as="labelBackgroundColor" value="#ffffff"/><add as="spacing" value="0"/><add as="spacingLeft" value="0"/><add as="spacingTop" value="6"/><add as="fontStyle" value="0"/><add as="imageWidth" value="48"/><add as="imageHeight" value="48"/></add><add as="swimlane"><add as="shape" value="swimlane"/><add as="fontSize" value="12"/><add as="fontStyle" value="1"/><add as="startSize" value="23"/></add><add as="group"><add as="verticalAlign" value="top"/><add as="fillColor" value="none"/><add as="strokeColor" value="none"/><add as="gradientColor" value="none"/><add as="pointerEvents" value="0"/></add><add as="ellipse"><add as="shape" value="ellipse"/><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombus"><add as="shape" value="rhombus"/><add as="perimeter" value="rhombusPerimeter"/></add><add as="triangle"><add as="shape" value="triangle"/><add as="perimeter" value="trianglePerimeter"/></add><add as="line"><add as="shape" value="line"/><add as="strokeWidth" value="4"/><add as="labelBackgroundColor" value="#ffffff"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="8"/></add><add as="image"><add as="shape" value="image"/><add as="labelBackgroundColor" value="white"/><add as="verticalAlign" value="top"/><add as="verticalLabelPosition" value="bottom"/></add><add as="roundImage" extend="image"><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombusImage" extend="image"><add as="perimeter" value="rhombusPerimeter"/></add><add as="arrow"><add as="shape" value="arrow"/><add as="edgeStyle" value="none"/><add as="fillColor" value="#ffffff"/></add></mxStylesheet>'
        ).documentElement;

        Graph.prototype.defaultThemes.darkTheme = mxUtils.parseXml(
            // tslint:disable-next-line:max-line-length
            '<mxStylesheet><add as="defaultVertex"><add as="shape" value="label"/><add as="perimeter" value="rectanglePerimeter"/><add as="fontSize" value="12"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="fillColor" value="#2a2a2a"/><add as="strokeColor" value="#f0f0f0"/><add as="fontColor" value="#f0f0f0"/></add><add as="defaultEdge"><add as="shape" value="connector"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="endArrow" value="classic"/><add as="fontSize" value="11"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="rounded" value="1"/><add as="strokeColor" value="#f0f0f0"/><add as="fontColor" value="#f0f0f0"/></add><add as="text"><add as="fillColor" value="none"/><add as="gradientColor" value="none"/><add as="strokeColor" value="none"/><add as="align" value="left"/><add as="verticalAlign" value="top"/></add><add as="label"><add as="fontStyle" value="1"/><add as="align" value="left"/><add as="verticalAlign" value="middle"/><add as="spacing" value="2"/><add as="spacingLeft" value="52"/><add as="imageWidth" value="42"/><add as="imageHeight" value="42"/><add as="rounded" value="1"/></add><add as="icon" extend="label"><add as="align" value="center"/><add as="imageAlign" value="center"/><add as="verticalLabelPosition" value="bottom"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="4"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="spacing" value="0"/><add as="spacingLeft" value="0"/><add as="spacingTop" value="6"/><add as="fontStyle" value="0"/><add as="imageWidth" value="48"/><add as="imageHeight" value="48"/></add><add as="swimlane"><add as="shape" value="swimlane"/><add as="fontSize" value="12"/><add as="fontStyle" value="1"/><add as="startSize" value="23"/></add><add as="group"><add as="verticalAlign" value="top"/><add as="fillColor" value="none"/><add as="strokeColor" value="none"/><add as="gradientColor" value="none"/><add as="pointerEvents" value="0"/></add><add as="ellipse"><add as="shape" value="ellipse"/><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombus"><add as="shape" value="rhombus"/><add as="perimeter" value="rhombusPerimeter"/></add><add as="triangle"><add as="shape" value="triangle"/><add as="perimeter" value="trianglePerimeter"/></add><add as="line"><add as="shape" value="line"/><add as="strokeWidth" value="4"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="8"/></add><add as="image"><add as="shape" value="image"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="verticalAlign" value="top"/><add as="verticalLabelPosition" value="bottom"/></add><add as="roundImage" extend="image"><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombusImage" extend="image"><add as="perimeter" value="rhombusPerimeter"/></add><add as="arrow"><add as="shape" value="arrow"/><add as="edgeStyle" value="none"/><add as="fillColor" value="#2a2a2a"/></add></mxStylesheet>'
        ).documentElement;

        App.prototype.updateActionStates = function() {
            // deactivated
        };

        App.main(drawIoCallback);

        this._registerListener(pageContent);

        /**
         * Returns the URL for a copy of this editor with no state.
         */
        EditorUi.prototype.redo = function() {
            try {
                const graph = this.editor.graph;

                if (graph.isEditing()) {
                    document.execCommand('redo', false, null);
                } else {
                    this.editor.undoManager.redo();
                    parent._calculateContainer();
                }
            } catch (e) {
                // ignore all errors
            }
        };

        /**
         * Returns the URL for a copy of this editor with no state.
         */
        EditorUi.prototype.undo = function() {
            try {
                const graph = this.editor.graph;

                if (graph.isEditing()) {
                    // Stops editing and executes undo on graph if native undo
                    // does not affect current editing value
                    const value = graph.cellEditor.textarea.innerHTML;
                    document.execCommand('undo', false, null);

                    if (value == graph.cellEditor.textarea.innerHTML) {
                        graph.stopEditing(true);
                        this.editor.undoManager.undo();
                        parent._calculateContainer();
                    }
                } else {
                    this.editor.undoManager.undo();
                    parent._calculateContainer();
                }
            } catch (e) {
                // ignore all errors
            }
        };

        /**
         * Overrides double click handling to add the tolerance and inserting text.
         */
        Graph.prototype.dblClick = mxUtils.bind(this, function(evt, cell) {
            this._dblClick.call(drawIoUi.editor.graph, this, evt, cell);
        });

        /**
         * Overrides click handling to avoid accidental inserts of new labels in dblClick below.
         */
        Graph.prototype.click = mxUtils.bind(this, function(me) {
            this._click.call(drawIoUi.editor.graph, this, me);
        });

        mxVertexHandler.prototype.union = function(
            bounds,
            dx,
            dy,
            index,
            gridEnabled,
            scale,
            tr,
            constrained,
            centered
        ) {
            if (this.singleSizer) {
                let x = bounds.x + bounds.width + dx;
                let y = bounds.y + bounds.height + dy;

                if (gridEnabled) {
                    x = this.graph.snap(x / scale) * scale;
                    y = this.graph.snap(y / scale) * scale;
                }

                const rect = new mxRectangle(bounds.x, bounds.y, 0, 0);
                rect.add(new mxRectangle(x, y, 0, 0));

                return rect;
            } else {
                const w0 = bounds.width;
                const h0 = bounds.height;
                let left = bounds.x - tr.x * scale;
                let right = left + w0;
                let top = bounds.y - tr.y * scale;
                let bottom = top + h0;

                const cx = left + w0 / 2;
                const cy = top + h0 / 2;

                if (index > 4 /* Bottom Row */) {
                    bottom = bottom + dy;

                    if (gridEnabled) {
                        bottom = this.graph.snap(bottom / scale) * scale;
                    }

                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (bottom > parent._gridLayout.contentBottomBorder) {
                            parent._logger.debug('out of bottom content', bottom);
                            bottom = parent._gridLayout.contentBottomBorder;
                        }

                        for (let counter = 2; counter <= parent._gridLayout.rows + 1; counter++) {
                            bottom = parent._calculatePositivResizeSnaping(
                                parent._gridLayout,
                                bottom,
                                counter,
                                parent._gridLayout.top,
                                parent._gridLayout.boxHeight
                            );
                        }
                    }
                } else if (index < 3 /* Top Row */) {
                    top = top + dy;

                    if (gridEnabled) {
                        top = this.graph.snap(top / scale) * scale;
                    }

                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (top < parent._gridLayout.top) {
                            parent._logger.debug('out of top content', top);
                            top = parent._gridLayout.top;
                        }

                        for (let counter = 2; counter <= parent._gridLayout.rows + 1; counter++) {
                            top = parent._calculateNegativResizeSnaping(
                                parent._gridLayout,
                                top,
                                counter,
                                parent._gridLayout.top,
                                parent._gridLayout.boxHeight
                            );
                        }
                    }
                }

                if (index == 0 || index == 3 || index == 5 /* Left */) {
                    left += dx;

                    if (gridEnabled) {
                        left = this.graph.snap(left / scale) * scale;
                    }

                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (left < parent._gridLayout.left) {
                            parent._logger.debug('out of left content', left);
                            left = parent._gridLayout.left;
                        }

                        for (let counter = 2; counter <= parent._gridLayout.columns + 1; counter++) {
                            left = parent._calculateNegativSnapingLeft(
                                parent._gridLayout,
                                left,
                                counter,
                                parent._gridLayout.contentRightBorder,
                                parent._gridLayout.boxWidth
                            );
                        }
                    }
                } else if (index == 2 || index == 4 || index == 7 /* Right */) {
                    right += dx;

                    if (gridEnabled) {
                        right = this.graph.snap(right / scale) * scale;
                    }

                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (right > parent._gridLayout.contentRightBorder) {
                            parent._logger.debug('out of right content', right);
                            right = parent._gridLayout.contentRightBorder;
                        }

                        for (let counter = 2; counter <= parent._gridLayout.columns + 1; counter++) {
                            right = parent._calculatePositivResizeSnapingRight(
                                parent._gridLayout,
                                right,
                                counter,
                                parent._gridLayout.contentLeftBorder,
                                parent._gridLayout.boxWidth
                            );
                        }
                    }
                }

                let width = right - left;
                let height = bottom - top;

                if (constrained) {
                    const geo = this.graph.getCellGeometry(this.state.cell);

                    if (geo != null) {
                        const aspect = geo.width / geo.height;

                        if (index == 1 || index == 2 || index == 7 || index == 6) {
                            width = height * aspect;
                        } else {
                            height = width / aspect;
                        }

                        if (index == 0) {
                            left = right - width;
                            top = bottom - height;
                        }
                    }
                }

                if (centered) {
                    width += width - w0;
                    height += height - h0;

                    const cdx = cx - (left + width / 2);
                    const cdy = cy - (top + height / 2);

                    left += cdx;
                    top += cdy;
                    right += cdx;
                    bottom += cdy;
                }

                parent._logger.debug('left', left, 'width', width);
                // Flips over left side
                if (width < 0) {
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        const geo = this.graph.getCellGeometry(this.state.cell);
                        parent._logger.debug('geo', geo);
                        parent._logger.debug('left', left, 'width', width);
                        left = geo.x;
                        width = geo.width;
                    } else {
                        left += width;
                        width = Math.abs(width);
                        width = 0;
                    }
                }

                // Flips over top side
                if (height < 0) {
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        const geo = this.graph.getCellGeometry(this.state.cell);
                        parent._logger.debug('geo', geo);
                        parent._logger.debug('top', top, 'height', height);
                        top = geo.y;
                        height = geo.height;
                    } else {
                        top += height;
                        height = Math.abs(height);
                    }
                }

                const result = new mxRectangle(left + tr.x * scale, top + tr.y * scale, width, height);

                if (this.minBounds != null) {
                    result.width = Math.max(
                        result.width,
                        this.minBounds.x * scale +
                            this.minBounds.width * scale +
                            Math.max(0, this.x0 * scale - result.x)
                    );
                    result.height = Math.max(
                        result.height,
                        this.minBounds.y * scale +
                            this.minBounds.height * scale +
                            Math.max(0, this.y0 * scale - result.y)
                    );
                }

                result.width = Math.max(result.width, mxUtils.getNumber(this.state.style, 'minWidth', 0));
                result.height = Math.max(result.height, mxUtils.getNumber(this.state.style, 'minHeight', 0));

                return result;
            }
        };

        mxGraphHandler.prototype.mouseMove = function(sender, me) {
            const graph = this.graph;

            if (
                !me.isConsumed() &&
                graph.isMouseDown &&
                this.cell != null &&
                this.first != null &&
                this.bounds != null
            ) {
                // Stops moving if a multi touch event is received
                if (mxEvent.isMultiTouchEvent(me.getEvent())) {
                    this.reset();
                    return;
                }

                let delta = this.getDelta(me);
                let dx = delta.x;
                let dy = delta.y;
                const tol = graph.tolerance;

                if (this.shape != null || Math.abs(dx) > tol || Math.abs(dy) > tol) {
                    // Highlight is used for highlighting drop targets
                    if (this.highlight == null) {
                        this.highlight = new mxCellHighlight(this.graph, mxConstants.DROP_TARGET_COLOR, 3);
                    }

                    if (this.shape == null) {
                        this.shape = this.createPreviewShape(this.bounds);
                    }

                    const gridEnabled = graph.isGridEnabledEvent(me.getEvent());
                    let hideGuide = true;

                    // check for our container
                    if (parent._isCellGenericContainer(this.cell)) {
                        // move up
                        if (dy < 0) {
                            for (let index = parent._gridLayout.rows; index >= 1; index--) {
                                dy = parent._calculateNegativMovementSnaping(
                                    parent._gridLayout,
                                    dy,
                                    index,
                                    parent._gridLayout.boxHeight
                                );
                            }
                        }
                        // move down
                        if (dy > 0) {
                            if (dy < parent._gridLayout.boxHeight * 0.5) {
                                // snapped move down container to second row
                                dy = 0;
                            }

                            for (let index = parent._gridLayout.rows; index >= 1; index--) {
                                dy = parent._calculatePositivMovementSnaping(
                                    parent._gridLayout,
                                    dy,
                                    index,
                                    parent._gridLayout.boxHeight
                                );
                            }
                        }

                        // move right
                        if (dx > 0) {
                            // for first column
                            if (dx < parent._gridLayout.boxWidth * 0.5) {
                                // snapped move right container to 1
                                dx = 0;
                            }

                            for (let index = parent._gridLayout.columns; index >= 1; index--) {
                                dx = parent._calculatePositivMovementSnaping(
                                    parent._gridLayout,
                                    dx,
                                    index,
                                    parent._gridLayout.boxWidth
                                );
                            }
                        }

                        // move left
                        if (dx < 0) {
                            if (dx > parent._gridLayout.boxWidth * -0.5) {
                                // snapped move left container to 1
                                dx = 0;
                            }

                            for (let index = parent._gridLayout.columns; index >= 1; index--) {
                                dx = parent._calculateNegativMovementSnaping(
                                    parent._gridLayout,
                                    dx,
                                    index,
                                    parent._gridLayout.boxWidth
                                );
                            }
                        }
                    } else {
                        // original code
                        if (this.guide != null && this.useGuidesForEvent(me)) {
                            delta = this.guide.move(this.bounds, new mxPoint(dx, dy), gridEnabled);
                            hideGuide = false;
                            dx = delta.x;
                            dy = delta.y;
                        } else if (gridEnabled) {
                            const trx = graph.getView().translate;
                            const scale = graph.getView().scale;

                            const tx = this.bounds.x - (graph.snap(this.bounds.x / scale - trx.x) + trx.x) * scale;
                            const ty = this.bounds.y - (graph.snap(this.bounds.y / scale - trx.y) + trx.y) * scale;
                            const v = this.snap(new mxPoint(dx, dy));

                            dx = v.x - tx;
                            dy = v.y - ty;
                        }
                    }

                    if (this.guide != null && hideGuide) {
                        this.guide.hide();
                    }

                    // Constrained movement if shift key is pressed
                    if (graph.isConstrainedEvent(me.getEvent())) {
                        if (Math.abs(dx) > Math.abs(dy)) {
                            dy = 0;
                        } else {
                            dx = 0;
                        }
                    }

                    this.currentDx = dx;
                    this.currentDy = dy;
                    this.updatePreviewShape();

                    let target = null;
                    const cell = me.getCell();

                    const clone =
                        graph.isCloneEvent(me.getEvent()) && graph.isCellsCloneable() && this.isCloneEnabled();

                    if (graph.isDropEnabled() && this.highlightEnabled) {
                        // Contains a call to getCellAt to find the cell under the mouse
                        target = graph.getDropTarget(this.cells, me.getEvent(), cell, clone);
                    }

                    let state = graph.getView().getState(target);
                    let highlight = false;

                    if (state != null && (graph.model.getParent(this.cell) != target || clone)) {
                        if (this.target != target) {
                            this.target = target;
                            this.setHighlightColor(mxConstants.DROP_TARGET_COLOR);
                        }

                        highlight = true;
                    } else {
                        this.target = null;

                        if (
                            this.connectOnDrop &&
                            cell != null &&
                            this.cells.length == 1 &&
                            graph.getModel().isVertex(cell) &&
                            graph.isCellConnectable(cell)
                        ) {
                            state = graph.getView().getState(cell);

                            if (state != null) {
                                const error = graph.getEdgeValidationError(null, this.cell, cell);
                                const color =
                                    error == null ? mxConstants.VALID_COLOR : mxConstants.INVALID_CONNECT_TARGET_COLOR;
                                this.setHighlightColor(color);
                                highlight = true;
                            }
                        }
                    }

                    if (state != null && highlight) {
                        this.highlight.highlight(state);
                    } else {
                        this.highlight.hide();
                    }
                }

                this.updateHint(me);
                this.consumeMouseEvent(mxEvent.MOUSE_MOVE, me);

                // Cancels the bubbling of events to the container so
                // that the droptarget is not reset due to an mouseMove
                // fired on the container with no associated state.
                mxEvent.consume(me.getEvent());
            } else if (
                (this.isMoveEnabled() || this.isCloneEnabled()) &&
                this.updateCursor &&
                !me.isConsumed() &&
                me.getState() != null &&
                !graph.isMouseDown
            ) {
                let cursor = graph.getCursorForMouseEvent(me);

                if (cursor == null && graph.isEnabled() && graph.isCellMovable(me.getCell())) {
                    if (graph.getModel().isEdge(me.getCell())) {
                        cursor = mxConstants.CURSOR_MOVABLE_EDGE;
                    } else {
                        cursor = mxConstants.CURSOR_MOVABLE_VERTEX;
                    }
                }

                // Sets the cursor on the original source state under the mouse
                // instead of the event source state which can be the parent
                if (me.sourceState != null) {
                    me.sourceState.setCursor(cursor);
                }
            }
        };
    }

    setContent(content: string): void {
        const doc = mxUtils.parseXml(content);
        drawIoUi.editor.setGraphXml(doc.documentElement);
        drawIoUi.editor.setModified(false);
        drawIoUi.editor.undoManager.clear();

        drawIoUi.editor.graph.zoomTo(1);
        drawIoUi.resetScrollbars();
        drawIoUi.editor.graph.setDefaultParent(
            drawIoUi.editor.graph.model.getChildAt(drawIoUi.editor.graph.model.root, 1)
        );
        this._host.isSnippetsVisible = false;
        this._calculateGrid();
        this._calculateContainer();

        const celltracker = new mxCellTracker(drawIoUi.editor.graph, '#0091DA');
        setTimeout(() => {
            drawIoUi.editor.graph.refresh();
            this._host.isPageContentLoaded = true;
        }, 100);
        this.contentChanged.emit(false);
    }

    updateAndEnableGraph(value: string): void {
        if (this.selectedValue != value) {
            this.contentChanged.emit(true);
        }
        drawIoUi.editor.graph.setEnabled(true);
        drawIoUi.editor.graph.getModel().beginUpdate();
        this._currentCell.setAttribute('label', value);
        drawIoUi.editor.graph.getModel().endUpdate();
        drawIoUi.editor.graph.refresh();
        drawIoUi.editor.graph.container.focus();
    }

    updateCellPropertyAndEnableGraph(cell: any, property: string, value: string): void {
        if (cell.value.attributes[property].nodeValue != value) {
            this.contentChanged.emit(true);
        }
        drawIoUi.editor.graph.setEnabled(true);
        drawIoUi.editor.graph.getModel().beginUpdate();
        cell.setAttribute(property, value);
        drawIoUi.editor.graph.getModel().endUpdate();
        drawIoUi.editor.graph.refresh();
        drawIoUi.editor.graph.container.focus();
    }

    enableGraph(): void {
        drawIoUi.editor.graph.setEnabled(true);
        drawIoUi.editor.graph.getModel().beginUpdate();
        drawIoUi.editor.graph.getModel().endUpdate();
    }

    disableGraph(): void {
        drawIoUi.editor.graph.setEnabled(false);
        drawIoUi.editor.graph.getModel().beginUpdate();
        drawIoUi.editor.graph.getModel().endUpdate();
    }

    addContainerWithSize(layoutContainer: LayoutContainer): void {
        const height =
            this._gridLayout.boxHeight * layoutContainer.rowSpan +
            this._gridLayout.spacing * (layoutContainer.rowSpan - 1);

        const width =
            this._gridLayout.boxWidth * layoutContainer.columnSpan +
            this._gridLayout.spacing * (layoutContainer.columnSpan - 1);

        this.addGenericContainer(width, height);
    }

    calcWidthByColumns(columns: number): number {
        const width = this._gridLayout.boxWidth * columns + this._gridLayout.spacing * (columns - 1);

        return width;
    }

    calcHeightByRows(rows: number): number {
        const height = this._gridLayout.boxHeight * rows + this._gridLayout.spacing * (rows - 1);

        return height;
    }

    toggleButtonsForSpecificContainerActions(cell) {
        this._host.isAnalysisContainerSelected =
            this._isCellGenericSmartWorkspaceContainerType(cell, SmartWorkspaceContainerType.Charts) ||
            this._isCellGenericSmartWorkspaceContainerType(cell, SmartWorkspaceContainerType.DataExplorerTable);

        this._host.isSnippetsVisible = this._isCellGenericSmartWorkspaceContainerType(
            cell,
            SmartWorkspaceContainerType.Froala
        );
    }

    addIntroColumn(): void {
        if (!this.hasIntroColumn) {
            // tslint:disable-next-line:max-line-length
            const IntroColumnHeight =
                this._gridLayout.boxHeight * this._gridLayout.rows +
                this._gridLayout.spacing * (this._gridLayout.rows - 1);
            const IntroColumnWidth = this._gridLayout.boxWidth;

            const genericContainer = this._insertIntroColumnVertex(
                '',
                IntroColumnWidth,
                IntroColumnHeight,
                // tslint:disable-next-line:max-line-length
                'rounded=0;locked=0;overflow=width;fillColor=#0091DA;strokeColor=#0091DA;fontColor=#FFFFFF;rotatable=0;align=left;whiteSpace=wrap;movable=0;resizable=0;deleteable=0;connectable=0;html=1;verticalAlign=top;minWidth=' +
                    IntroColumnWidth +
                    ';minHeight=' +
                    IntroColumnHeight +
                    ';'
            );

            if (genericContainer) {
                this._calculateContainer();
                drawIoUi.editor.graph.selectRegion(10000);
            }
        }
    }

    removeIntroColumn(): void {
        if (typeof this._gridLayout.introColumnCell != 'undefined') {
            const cells: any[] = [];
            cells.push(this._gridLayout.introColumnCell);
            drawIoUi.editor.graph.removeCells(cells, true);
        }
    }

    addGenericContainer(width: any = this._gridLayout.boxWidth, height: any = this._gridLayout.boxHeight): void {
        const genericContainer = this._insertVertex(
            '',
            width,
            height,
            // tslint:disable-next-line:max-line-length
            'rounded=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
                this._gridLayout.boxWidth +
                ';minHeight=' +
                this._gridLayout.boxHeight +
                ';' +
                'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;strokeColor=#B3B3B3;dashed=1;'
        );

        if (genericContainer) {
            this._currentCell = genericContainer;
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    }

    InsertTableContainer(width: any = this._gridLayout.boxWidth, height: any = this._gridLayout.boxHeight): void {
        const genericContainer = this._insertVertexForTableContainer(
            '',
            width,
            height,
            // tslint:disable-next-line:max-line-length
            'rounded=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
                this._gridLayout.boxWidth +
                ';minHeight=' +
                this._gridLayout.boxHeight +
                ';' +
                'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;'
        );

        if (genericContainer) {
            this._calculateContainer();
            this._currentCell = genericContainer;
            this._host.setFroalaPopupSize(width, height);
            this._host.popupVisible = true;

            drawIoUi.editor.graph.selectRegion(10000);
        }
    }

    addImageContainer(width: any = this._gridLayout.boxWidth, height: any = this._gridLayout.boxHeight): void {
        const genericContainer = this._insertVertexForImage(
            '',
            width,
            height,
            // tslint:disable-next-line:max-line-length
            'rounded=0;overflow=width;strokeColor=none;fillColor=#D9D9D9;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
                this._gridLayout.boxWidth +
                ';minHeight=' +
                this._gridLayout.boxHeight +
                ';' +
                'fontFamily=KPMG Web'
        );

        if (genericContainer) {
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    }

    /**
     * calculates the snapping point for down resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    private _calculateNegativResizeSnaping(
        gridLayout: GridLayout,
        movement: any,
        step: any,
        border: any,
        boxSize: any
    ): any {
        if (movement > border + boxSize * (step - 1.5) && movement < border + boxSize * (step - 0.5)) {
            return border + boxSize * (step - 1) + gridLayout.spacing * (step - 1);
        }
        if (movement < border + boxSize * 0.5) {
            return gridLayout.top;
        }
        return movement;
    }

    /**
     * calculates the snapping point for top resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    private _calculatePositivResizeSnaping(
        gridLayout: GridLayout,
        movement: any,
        step: any,
        border: any,
        boxSize: any
    ): any {
        if (movement < border + boxSize * (step - 0.5) && movement > border + boxSize * (step - 1.5)) {
            return border + boxSize * (step - 1) + gridLayout.spacing * (step - 2);
        }
        return movement;
    }

    /**
     * calculates the snapping point for left resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    private _calculateNegativSnapingLeft(
        gridLayout: GridLayout,
        movement: any,
        step: any,
        border: any,
        boxSize: any
    ): any {
        if (movement < border - boxSize * (step - 1.5) && movement > border - boxSize * (step - 0.5)) {
            if (step == 2) {
                return border - boxSize;
            } else {
                return border - boxSize * (step - 1) - gridLayout.spacing * (step - 2);
            }
        }
        return movement;
    }

    /**
     * calculates the snapping point for right resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    private _calculatePositivResizeSnapingRight(
        gridLayout: GridLayout,
        movement: any,
        step: any,
        border: any,
        boxSize: any
    ): any {
        if (movement < border + boxSize * (step - 0.5) && movement > border + boxSize * (step - 1.5)) {
            if (step == 2) {
                return border + boxSize;
            } else {
                return border + boxSize * (step - 1) + gridLayout.spacing * (step - 2);
            }
        }
        return movement;
    }

    /**
     * calculate the positive movement for KPMG Container and return our wanted movement
     *
     * @param {*} movement movement
     * @param {*} step step
     * @param {*} boxSize boxSize
     * @returns {*} movement
     * @memberof DrawIOExtensionService
     */
    private _calculatePositivMovementSnaping(gridLayout: GridLayout, movement: any, step: any, boxSize: any): any {
        if (movement > boxSize * (step - 1.5) && movement < boxSize * (step - 0.5)) {
            return boxSize * (step - 1) + (step - 1) * gridLayout.spacing;
        }
        return movement;
    }

    /**
     * calculate the left movement for KPMG Container and return our wanted movement
     *
     * @param {*} movement movement
     * @param {*} step column
     * @param {*} boxSize boxSize
     * @returns {*} movement
     * @memberof DrawIOExtensionService
     */
    private _calculateNegativMovementSnaping(gridLayout: GridLayout, movement: any, step: any, boxSize: any): any {
        if (movement < boxSize * -(step - 1.5) && movement > boxSize * -(step - 0.5)) {
            return (boxSize * (step - 1) + (step - 1) * gridLayout.spacing) * -1;
        }
        return movement;
    }

    /**
     * Get easier to read Dimensions from Draw IO Cell Container
     *
     * @param {*} drawIoCell
     * @memberof DrawIOExtensionService
     */
    private _getContainerDimensionFromDrawioContainerCellGeo(drawIoCell: any): ContainerDimension {
        const drawIoCellgeo = drawIoCell.getGeometry();
        const containerDimension: ContainerDimension = new ContainerDimension();

        containerDimension.left = drawIoCellgeo.x;
        containerDimension.top = drawIoCellgeo.y;
        containerDimension.right = drawIoCellgeo.x + drawIoCellgeo.width;
        containerDimension.bottom = drawIoCellgeo.y + drawIoCellgeo.height;
        containerDimension.width = drawIoCellgeo.width;
        containerDimension.height = drawIoCellgeo.height;

        return containerDimension;
    }

    /**
     * Get all KPMG Custom Container and update Container info with cells used etc.
     *
     * @memberof DrawIOExtensionService
     */
    private _calculateContainer(): any {
        const allCells = drawIoUi.editor.graph.getChildCells(drawIoUi.editor.graph.getDefaultParent());
        this._gridLayout.container = [];
        this._gridLayout.cellsUsed = [];
        this._gridLayout.cellsAvailable = [];
        this._gridLayout.introColumnCell = undefined;
        allCells.forEach(cell => {
            if (mxUtils.isNode(cell.value)) {
                if (cell.value.hasAttribute('GenericContainer')) {
                    this._gridLayout.container.push(cell);

                    const containerDimension: ContainerDimension = this._getContainerDimensionFromDrawioContainerCellGeo(
                        cell
                    );

                    const cellsPerContainer: any[] = this._getCellsPerContainer(containerDimension, true);
                    cell.setAttribute('Cells', cellsPerContainer.join(','));

                    this._gridLayout.cellsAvailable = this._gridLayout.cellsCoordinates.filter(
                        acell => !this._gridLayout.cellsUsed.includes(acell)
                    );
                }
                if (this._isCellGenericSmartWorkspaceContainerType(cell, SmartWorkspaceContainerType.IntroColumn)) {
                    this._gridLayout.introColumnCell = cell;
                }
            }
        });

        if (this._gridLayout.container.length == 0) {
            this._gridLayout.cellsAvailable = this._gridLayout.maxCellsAvailable;
        }

        if (this.hasIntroColumn && this._host.switchIntroColumn.instance.option('value') != true) {
            this._host.introColumnEnabled = true;
            this._host.switchIntroColumn.instance.option('value', true);
        }
        if (!this.hasIntroColumn && this._host.switchIntroColumn.instance.option('value') == true) {
            this._host.introColumnEnabled = false;
            this._host.switchIntroColumn.instance.option('value', false);
        }
    }

    /**
     * find all cells that are in a KPMG Container and update the KPMG Container with the used cells values.
     * also get all used / available cells for the Grid
     * @param {ContainerDimension} containerDimension
     * @returns array of cell id
     * @memberof DrawIOExtensionService
     */
    private _getCellsPerContainer(containerDimension: ContainerDimension, updateUsedCells: boolean): any {
        const cellsPerContainer: any[] = [];

        this._gridLayout.cellsCoordinates.forEach(gridcell => {
            if (
                gridcell.left >= containerDimension.left &&
                gridcell.right <= containerDimension.right &&
                gridcell.top == containerDimension.top
            ) {
                if (updateUsedCells) {
                    this._gridLayout.cellsUsed.push(gridcell);
                }
                cellsPerContainer.push(gridcell.id);
            }

            if (
                gridcell.left >= containerDimension.left &&
                gridcell.right <= containerDimension.right &&
                gridcell.bottom == containerDimension.bottom &&
                gridcell.height < containerDimension.height
            ) {
                if (updateUsedCells) {
                    this._gridLayout.cellsUsed.push(gridcell);
                }
                cellsPerContainer.push(gridcell.id);
            }
        });

        return cellsPerContainer;
    }

    /**
     * calculate Values for the Grid Layout
     *
     * @memberof DrawIOExtensionService
     */
    private _calculateGrid(): void {
        this._gridLayout = new GridLayout();

        this._gridLayout.pageWidth = drawIoUi.editor.graph.pageFormat.width;
        this._gridLayout.pageHeight = drawIoUi.editor.graph.pageFormat.height;

        this._gridLayout.columns = this._host.reportPage.grid.columns;
        this._gridLayout.rows = this._host.reportPage.grid.rows;
        this._gridLayout.spacing = this._host.reportPage.grid.spacing;
        this._gridLayout.left = this._host.reportPage.grid.left;
        this._gridLayout.right = this._host.reportPage.grid.right;
        this._gridLayout.top = this._host.reportPage.grid.top;
        this._gridLayout.bottom = this._host.reportPage.grid.bottom;

        this._gridLayout.maxAvailableHeight =
            this._gridLayout.pageHeight - (this._gridLayout.top + this._gridLayout.bottom);

        this._gridLayout.maxAvailablewidth =
            this._gridLayout.pageWidth - (this._gridLayout.left + this._gridLayout.right);

        this._gridLayout.boxHeight = Math.floor(
            (this._gridLayout.maxAvailableHeight - (this._gridLayout.rows - 1) * this._gridLayout.spacing) /
                this._gridLayout.rows
        );

        this._gridLayout.boxWidth = Math.floor(
            (this._gridLayout.maxAvailablewidth - (this._gridLayout.columns - 1) * this._gridLayout.spacing) /
                this._gridLayout.columns
        );

        this._gridLayout.cellCount = this._gridLayout.rows * this._gridLayout.columns;

        this._gridLayout.contentTopBorder = this._gridLayout.top;
        this._gridLayout.contentLeftBorder = this._gridLayout.left;

        let column = 1;
        let row = 1;
        for (let index = 1; index <= this._gridLayout.cellCount; index++) {
            const cellData: GridCell = new GridCell();

            cellData.id = index;
            if (index == 1) {
                this._gridLayout.cellsForIntroColumn.push(cellData);
            }

            if (column > this._gridLayout.columns) {
                column = 1;
                row++;
                this._gridLayout.cellsForIntroColumn.push(cellData);
            }

            if (row <= 1) {
                cellData.top = this._gridLayout.top;
            } else if (row > 1) {
                // next row
                cellData.top =
                    this._gridLayout.top +
                    this._gridLayout.boxHeight * (row - 1) +
                    this._gridLayout.spacing * (row - 1);
            }
            cellData.row = row;
            cellData.column = column;
            cellData.y = cellData.top;

            if (column <= 1) {
                cellData.left = this._gridLayout.left;
            } else if (column > 1) {
                // next column
                cellData.left =
                    this._gridLayout.left +
                    this._gridLayout.boxWidth * (column - 1) +
                    this._gridLayout.spacing * (column - 1);
            }
            cellData.x = cellData.left;
            column++;

            cellData.right = cellData.left + this._gridLayout.boxWidth;
            cellData.bottom = cellData.top + this._gridLayout.boxHeight;
            cellData.height = this._gridLayout.boxHeight;
            cellData.width = this._gridLayout.boxWidth;

            this._gridLayout.contentRightBorder = cellData.right;
            this._gridLayout.contentBottomBorder = cellData.bottom;

            this._gridLayout.cellsCoordinates.push(cellData);
            this._gridLayout.cellsAvailable.push(cellData);
            this._gridLayout.maxCellsAvailable.push(cellData);
        }
    }

    /**
     * insertVertexForTableContainer function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    private _insertVertexForTableContainer(value: any, w: any, h: any, style: any): any {
        const pt = this._getInsertPoint();
        if (pt == undefined) {
            return undefined;
        }
        const cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        const obj = this.createElementObj(SmartWorkspaceContainerType.TableContainer);

        return this.updateGraphAndFireEvent(cell, obj);
    }

    /**
     * insertVertex function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    private _insertVertex(value: any, w: any, h: any, style: any): any {
        const pt = this._getInsertPoint();
        if (pt == undefined) {
            return undefined;
        }
        const cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        const obj = this.createElementObj(SmartWorkspaceContainerType.Froala);
        obj.setAttribute('label', this.containerPlaceHolderText);
        obj.setAttribute('initialValue', '1');

        return this.updateGraphAndFireEvent(cell, obj);
    }

    private _insertVertexForImage(value: any, w: any, h: any, style: any): any {
        const pt = this._getInsertPoint();
        if (pt == undefined) {
            return undefined;
        }
        const cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        const obj = this.createElementObj(SmartWorkspaceContainerType.Image);

        return this.updateGraphAndFireEvent(cell, obj);
    }

    /**
     * Method returns true of Object was moved out of Graph page to avoid auto extending
     *
     * @param {any} cell -> current Graph Cell
     * @returns {boolean} -> return true or false
     * @memberof DrawIOExtensionService
     */
    private _isOutOfDrawingPage(cell: any): boolean {
        if (typeof drawIoUi == 'undefined') {
            return false;
        }
        const geo = cell.getGeometry();
        // all other objects
        if (
            geo.x < 0 ||
            geo.y < 0 ||
            geo.x + geo.width > drawIoUi.editor.graph.pageFormat.width ||
            geo.y + geo.height > drawIoUi.editor.graph.pageFormat.height
        ) {
            return true;
        }
        return false;
    }

    /**
     * Method returns true of Object was moved out of Graph page to avoid auto extending
     *
     * @param {any} cell -> current Graph Cell
     * @returns {boolean} -> return true or false
     * @memberof DrawIOExtensionService
     */
    private _isOutOfContentPage(cell: any): boolean {
        if (!this._isCellGenericContainer(cell)) {
            return false;
        }
        const geo = cell.getGeometry();
        if (mxUtils.isNode(cell.value)) {
            // it is a generic container...
            if (
                geo.x < this._gridLayout.left ||
                geo.y < this._gridLayout.top ||
                geo.x + geo.width > drawIoUi.editor.graph.pageFormat.width - this._gridLayout.right ||
                geo.y + geo.height > drawIoUi.editor.graph.pageFormat.height - this._gridLayout.bottom
            ) {
                return true;
            }
        }
        return false;
    }

    /**
     * Checks for Cell if its a container and if movement is small like 1 pixel -> so its must be moved by cursor
     *
     * @private
     * @param {*} cell
     * @param {*} evt
     * @returns {boolean}
     * @memberof DrawIOExtensionService
     */
    private _isCellMovementByCursorWithOnlyOnePixel(cell: any, evt: any): boolean {
        if (this._isCellGenericContainer(cell)) {
            if (
                evt.properties.dx >= -1 &&
                evt.properties.dx <= 1 &&
                evt.properties.dy >= -1 &&
                evt.properties.dy <= 1
            ) {
                return true;
            }
        }
        return false;
    }

    /**
     * Checks is there is already a cell for the given cell
     *
     * @param {*} cell
     * @returns {boolean}
     * @memberof DrawIOExtensionService
     */
    private _isDrawIoCelloverAnotherDrawiCell(cell: any): boolean {
        if (!this._isCellGenericContainer(cell)) {
            return false;
        }
        const cellToCheckDimension: ContainerDimension = this._getContainerDimensionFromDrawioContainerCellGeo(cell);
        let conflictCells: any[];
        for (const drawIoContainer of this._gridLayout.container) {
            if (drawIoContainer.id == cell.id) {
                continue;
            }

            const cellsPerContainer: any[] = this._getCellsPerContainer(cellToCheckDimension, false);
            const oldUsedCells: number[] = cell.value.attributes['Cells'].nodeValue
                .split(',')
                .map(Number)
                .filter(Boolean);

            const changedCells = cellsPerContainer.filter(acell => !oldUsedCells.includes(acell));
            conflictCells = this._gridLayout.cellsUsed.filter(acell => changedCells.includes(acell.id));
            if (conflictCells != undefined) {
                if (conflictCells.length > 0) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Method to overwrite Click method from Graph
     *
     * @param {any} this  -> Graph Context
     * @param {any} tsContext -> Kosmos TS Context
     * @param {any} me  -> Clicked Graph Object
     * @memberof DrawIOExtensionService
     */
    private _click(this: any, tsContext: DrawIOExtensionService, me: any): void {
        mxGraph.prototype.click.call(this, me);

        // Stores state and source for checking in dblClick
        this.firstClickState = me.getState();
        if (this.firstClickState != undefined) {
            // cell selected
            tsContext._clickedCell = this.firstClickState.cell;
            try {
                tsContext._clickedCellGeometry = this.firstClickState.cell.getGeometry();
                if (mxUtils.isNode(tsContext._clickedCell.value)) {
                    if (tsContext._clickedCell.hasAttribute('GenericContainer')) {
                        tsContext._currentCell = tsContext._clickedCell;

                        tsContext._host.isAnalysisContainerSelected =
                            tsContext._isCellGenericSmartWorkspaceContainerType(
                                tsContext._currentCell,
                                SmartWorkspaceContainerType.Charts
                            ) ||
                            tsContext._isCellGenericSmartWorkspaceContainerType(
                                tsContext._currentCell,
                                SmartWorkspaceContainerType.DataExplorerTable
                            );

                        tsContext._host.isSnippetsVisible =
                            tsContext._isCellGenericSmartWorkspaceContainerType(
                                tsContext._currentCell,
                                SmartWorkspaceContainerType.Froala
                            ) ||
                            tsContext._isCellGenericSmartWorkspaceContainerType(
                                tsContext._currentCell,
                                SmartWorkspaceContainerType.IntroColumn
                            );
                    } else {
                        tsContext.disableButtonsForSpecificContainerActions();
                    }
                } else {
                    tsContext.disableButtonsForSpecificContainerActions();
                }
            } catch (err) {
                tsContext._clickedCell = undefined;
                tsContext._clickedCellGeometry = undefined;
            }
        } else {
            tsContext.disableButtonsForSpecificContainerActions();
        }
        this.firstClickSource = me.getSource();
    }

    disableButtonsForSpecificContainerActions() {
        this._host.isAnalysisContainerSelected = false;
        this._host.isSnippetsVisible = false;
    }

    /**
     * Method to overwrite dbClick method from Graph
     *
     * @param {any} this -> Graph Context
     * @param {any} tsContext -> Kosmos TS Context
     * @param {any} evt  -> Graph Event
     * @param {any} cell -> Graph Cell
     * @memberof DrawIOExtensionService
     */
    private _dblClick(this: any, tsContext: DrawIOExtensionService, evt: any, cell: any): void {
        if (this.isEnabled()) {
            const pt = mxUtils.convertPoint(this.container, mxEvent.getClientX(evt), mxEvent.getClientY(evt));

            // Automatically adds new child cells to edges on double click
            if (evt != null && !this.model.isVertex(cell)) {
                const state = this.model.isEdge(cell) ? this.view.getState(cell) : null;
                const src = mxEvent.getSource(evt);

                if (this.firstClickState == state && this.firstClickSource == src) {
                    if (
                        state == null ||
                        (state.text == null ||
                            state.text.node == null ||
                            (!mxUtils.contains(state.text.boundingBox, pt.x, pt.y) &&
                                !mxUtils.isAncestorNode(state.text.node, mxEvent.getSource(evt))))
                    ) {
                        if (
                            (state == null && !this.isCellLocked(this.getDefaultParent())) ||
                            (state != null && !this.isCellLocked(state.cell))
                        ) {
                            // Avoids accidental inserts on background
                            if (
                                state != null ||
                                (mxClient.IS_VML && src == this.view.getCanvas()) ||
                                (mxClient.IS_SVG && src == this.view.getCanvas().ownerSVGElement)
                            ) {
                                cell = this.addText(pt.x, pt.y, state);
                            }
                        }
                    }
                }
            }

            let stopEvent: boolean = false;

            // add check if generic container then open popup etc...1
            if (mxUtils.isNode(cell.value)) {
                if (tsContext.containerPlaceHolderText == tsContext.getAttributeFromCell(cell, 'label')) {
                    drawIoUi.editor.graph.getModel().beginUpdate();
                    cell.setAttribute('label', '<p><br></p>');
                    drawIoUi.editor.graph.getModel().endUpdate();
                    drawIoUi.editor.graph.refresh();
                }
                if (tsContext._isCellGenericSmartWorkspaceContainerType(cell, SmartWorkspaceContainerType.Image)) {
                    tsContext._currentCell = cell;
                    tsContext._host.imagePopupVisible = true;

                    const content = tsContext.getAttributeFromCell(cell, 'label');
                    if (content.length > 0) {
                        const wrapper = <HTMLDivElement>document.createElement('div');
                        wrapper.innerHTML = content;
                        const imageElement = <HTMLImageElement>wrapper.firstChild;
                        tsContext._host.imageFromCell = imageElement.src;
                    } else {
                        tsContext._host.imageFromCell = undefined;
                    }
                    tsContext.disableGraph();
                    stopEvent = true;
                }
            }

            if (!stopEvent) {
                mxGraph.prototype.dblClick.call(this, evt, cell);
            }
        }
    }

    /**
     * check if the given Cell is a custom KPMG Container
     *
     * @param {*} cell
     * @returns
     * @memberof DrawIOExtensionService
     */
    private _isCellGenericContainer(cell: any): boolean {
        if (typeof cell == 'undefined') {
            return false;
        }
        if (mxUtils.isNode(cell.value)) {
            if (cell.value.hasAttribute('GenericContainer')) {
                return true;
            }
        }

        return false;
    }

    /**
     *check if the given Cell is a custom KPMG Container of Type
     *
     * @param {*} cell mxCell to check
     * @param {SmartWorkspaceContainerType} type Type of Container
     * @returns
     * @memberof DrawIOExtensionService
     */
    private _isCellGenericSmartWorkspaceContainerType(cell: any, type: SmartWorkspaceContainerType): boolean {
        if (mxUtils.isNode(cell.value)) {
            if (cell.value.hasAttribute('SmartWorkspaceContainerType')) {
                if (cell.value.attributes['SmartWorkspaceContainerType'].nodeValue == type) {
                    return true;
                }
            }
        }

        return false;
    }

    private _insertIntroColumnVertex(value: any, w: any, h: any, style: any): any {
        const pt = this._getMouseCurrentLocation();

        this._calculateContainer();
        pt.x = this._gridLayout.left;
        pt.y = this._gridLayout.top;

        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            const isIntroCellUsed = this._gridLayout.cellsForIntroColumn.filter(acell =>
                this._gridLayout.cellsUsed.includes(acell)
            );

            if (isIntroCellUsed.length > 0) {
                notify({
                    message: 'No Space for Into Column available',
                    type: 'error',
                    displayTime: 3000,
                    closeOnClick: true
                });
                this._host.switchIntroColumn.instance.option('value', false);
                return undefined;
            }
        } else {
            notify({
                message: 'No Space for Into Column available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            this._host.switchIntroColumn.instance.option('value', false);
            return undefined;
        }

        const cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        const obj = this.createElementObj(SmartWorkspaceContainerType.IntroColumn);
        obj.setAttribute('label', '<p class="intro-column"></p>');
        this._gridLayout.introColumnCell = cell;
        return this.updateGraphAndFireEvent(cell, obj);
    }

    createElementObj(containerType: SmartWorkspaceContainerType): any {
        const doc = mxUtils.createXmlDocument();
        const obj = doc.createElement('object');
        obj.setAttribute('label', '');
        obj.setAttribute('GenericContainer', '1');
        obj.setAttribute('SmartWorkspaceContainerType', containerType);
        obj.setAttribute('Cells', '1');
        return obj;
    }

    fireStopEditingEvent() {
        drawIoUi.editor.graph.fireEvent(new mxEventObject(mxEvent.EDITING_STOPPED));
    }

    updateGraphAndFireEvent(cell: any, obj: any): any {
        cell.vertex = true;
        cell.setConnectable(false);
        drawIoUi.editor.graph.getModel().setValue(cell, obj);

        drawIoUi.editor.graph.getModel().beginUpdate();
        try {
            cell = drawIoUi.editor.graph.addCell(cell);
            drawIoUi.editor.graph.fireEvent(new mxEventObject('cellsInserted', 'cells', [cell]));
        } finally {
            drawIoUi.editor.graph.getModel().endUpdate();
        }
        drawIoUi.editor.graph.container.focus();
        drawIoUi.editor.graph.setSelectionCell(cell);
        drawIoUi.editor.graph.scrollCellToVisible(cell);

        return cell;
    }

    // analysis

    /**
     * helper to get attribute from cell
     *
     * @param {*} cell mxCell to check
     * @returns
     * @memberof DrawIOExtensionService
     */
    getAttributeFromCell(cell: any, attribut: string): any {
        if (mxUtils.isNode(cell.value)) {
            if (cell.value.hasAttribute(attribut)) {
                return cell.value.attributes[attribut].nodeValue;
            }
        }
        return undefined;
    }

    /**
     * Adds new DataSheetContainer
     *
     * @param {number} analysisId
     * @param {string} tableData
     * @param {string} projectId
     * @param {number} columns
     * @param {number} rows
     * @memberof DrawIOExtensionService
     */
    addDataSheetContainer(
        analysisId: number,
        tableData: string,
        projectId: string,
        columns: number = 1,
        rows: number = 1
    ): void {
        const width = this.calcWidthByColumns(columns);
        const height = this.calcHeightByRows(rows);
        const genericContainer = this._insertVertexForAnalysisTable(
            '',
            width,
            height,
            // tslint:disable-next-line:max-line-length
            'rounded=0;editable=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
                this._gridLayout.boxWidth +
                ';minHeight=' +
                this._gridLayout.boxHeight +
                ';' +
                'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;',
            analysisId,
            tableData,
            projectId
        );

        if (genericContainer) {
            this._currentCell = genericContainer;
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    }

    /**
     * insertVertex function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    // tslint:disable-next-line:max-line-length
    private _insertVertexForAnalysisTable(
        value: any,
        w: any,
        h: any,
        style: any,
        analysisId: number,
        tableData: string,
        projectId: string
    ): any {
        let noSpace: boolean = true;
        const pt = this._getMouseCurrentLocation();

        this._calculateContainer();
        if (this._gridLayout.container.length == 0) {
            // no container there
            pt.x = this._gridLayout.left;
            pt.y = this._gridLayout.top;
            noSpace = false;
        }

        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            const freeCellsInSameRow: GridCell = this.checkForFreeCellsWithSpan();
            if (typeof freeCellsInSameRow != 'undefined') {
                pt.x = freeCellsInSameRow.x;
                pt.y = freeCellsInSameRow.y;
                noSpace = false;
            }
        }

        if (noSpace) {
            notify({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            return undefined;
        }

        const cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        const obj = this.createElementObj(SmartWorkspaceContainerType.DataExplorerTable);
        obj.setAttribute('label', tableData);
        obj.setAttribute('AnalysisId', analysisId);
        obj.setAttribute('ProjectId', projectId);
        return this.updateGraphAndFireEvent(cell, obj);
    }

    /**
     * Adds new Container for Charts
     *
     * @param {number} analysisId
     * @param {string} chartData
     * @param {string} analysisData
     * @param {string} projectId
     * @param {number} columns
     * @param {number} rows
     * @memberof DrawIOExtensionService
     */
    addAnalysisGenericContainer(
        analysisId: number,
        chartData: string,
        analysisData: string,
        analysisName: string,
        projectId: string,
        columns: number = 1,
        rows: number = 1
    ): void {
        const width = this.calcWidthByColumns(columns);
        const height = this.calcHeightByRows(rows);
        const genericContainer = this._insertVertexForAnalysisCharts(
            '',
            width,
            height,
            // tslint:disable-next-line:max-line-length
            'rounded=0;editable=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
                this._gridLayout.boxWidth +
                ';minHeight=' +
                this._gridLayout.boxHeight +
                ';' +
                'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;',
            analysisId,
            chartData,
            analysisData,
            analysisName,
            projectId
        );

        if (genericContainer) {
            this._currentCell = genericContainer;
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    }

    /**
     * insertVertex function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    // tslint:disable-next-line:max-line-length
    private _insertVertexForAnalysisCharts(
        value: any,
        w: any,
        h: any,
        style: any,
        analysisId: number,
        chartData: string,
        analysisData: string,
        analysisName: string,
        projectId: string
    ): any {
        let noSpace: boolean = true;
        const pt = this._getMouseCurrentLocation();

        this._calculateContainer();
        if (this._gridLayout.container.length == 0) {
            // no container there
            pt.x = this._gridLayout.left;
            pt.y = this._gridLayout.top;
            noSpace = false;
        }

        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            const freeCellsInSameRow: GridCell = this.checkForFreeCellsWithSpan();
            if (typeof freeCellsInSameRow != 'undefined') {
                pt.x = freeCellsInSameRow.x;
                pt.y = freeCellsInSameRow.y;
                noSpace = false;
            }
        }

        if (noSpace) {
            notify({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            return undefined;
        }

        const cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        const obj = this.createElementObj(SmartWorkspaceContainerType.Charts);
        obj.setAttribute('AnalysisId', analysisId);
        obj.setAttribute('ProjectId', projectId);
        obj.setAttribute('ChartData', chartData);
        obj.setAttribute('AnalysisData', analysisData);
        obj.setAttribute('AnalysisName', analysisName);

        return this.updateGraphAndFireEvent(cell, obj);
    }

    /**
     * inserts new extracted SVG from DX Charts into cell
     *
     * @param {*} content
     * @param {*} width
     * @param {*} height
     * @param {*} currentCell
     * @memberof DrawIOExtensionService
     */
    updateChartSVG(content: any, width: any, height: any, currentCell: any, taskName: string) {
        setTimeout(() => {
            drawIoUi.editor.graph.getModel().beginUpdate();

            const fullImg =
                `<img alt="" align="top" style="width: ` +
                width +
                `px; height: ` +
                height +
                `px" src="data:image/svg+xml;base64,` +
                content +
                `">`;

            const title = currentCell.value.attributes['AnalysisName'].nodeValue + ' - ' + taskName;

            // tslint:disable-next-line:max-line-length
            const tableData =
                `<table class="addAnalysis" style="width: 100%"> <thead><tr><th>` +
                title +
                `</th></tr></thead><tbody><tr><td style="width: 100%; padding: 0 !important;">` +
                fullImg +
                `</td></tr></tbody></table>`;

            currentCell.setAttribute('label', tableData);
            drawIoUi.editor.graph.getModel().endUpdate();
            drawIoUi.editor.graph.refresh();
            drawIoUi.editor.graph.container.focus();
            setTimeout(() => {
                drawIoUi.editor.graph.enabled = true;
                this.contentChanged.emit(true);
            }, 100);
        }, 10);
    }

    /**
     * For Chart and DataTable two columns should be available
     *
     * @returns {GridCell}
     * @memberof DrawIOExtensionService
     */
    checkForFreeCellsWithSpan(): GridCell {
        for (const freeCell of this._gridLayout.cellsAvailable) {
            const freeCellsInSameRow = this._gridLayout.cellsAvailable.filter(
                acell => acell.row == freeCell.row && acell.column == freeCell.column + 1
            );

            if (freeCellsInSameRow.length > 0) {
                return freeCell;
            }
        }

        return undefined;
    }

    /**
     * Get insertion point after check for free space
     */
    private _getInsertPoint(): any {
        let noSpace: boolean = true;

        this._calculateContainer();
        const pt = this._getMouseCurrentLocation();
        if (this._gridLayout.container.length == 0) {
            // no container there
            pt.x = this._gridLayout.left;
            pt.y = this._gridLayout.top;
            noSpace = false;
        }

        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            const freeCell: GridCell = this._gridLayout.cellsAvailable[0];
            pt.x = freeCell.x;
            pt.y = freeCell.y;
            noSpace = false;
        }

        if (noSpace) {
            notify({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            return undefined;
        }
        return pt;
    }

    /**
     * Get current location of mouse
     */
    private _getMouseCurrentLocation(): any {
        return drawIoUi.editor.graph.isMouseInsertPoint()
            ? drawIoUi.editor.graph.getInsertPoint()
            : drawIoUi.editor.graph.getFreeInsertPoint();
    }
}
