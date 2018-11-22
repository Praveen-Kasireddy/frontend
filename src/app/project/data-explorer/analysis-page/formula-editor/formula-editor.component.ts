import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Project } from '@core/models';
import { FormulaItem } from '@core/models/project/data-explorer/formula-item';
import { DataExplorerService } from '@core/services';
import { AnalysisMapper } from 'app/shared';
import { SharedStorageService } from 'ngx-store';
import { FormulaPaletteComponent } from './formula-palette/formula-palette.component';

@Component({
    moduleId: module.id,
    selector: 'kosmos-formula-editor',
    templateUrl: 'formula-editor.component.html',
    styleUrls: ['formula-editor.component.scss']
})
export class FormulaEditorComponent implements OnInit {
    @ViewChild(FormulaPaletteComponent)
    formulaPalette: FormulaPaletteComponent;
    items: FormulaItem[] = [];
    firstPlaceHolder: string;
    otherPlaceHolders: string[] = [];
    @Output()
    closeRequested: EventEmitter<void> = new EventEmitter();
    selectedProject: Project;
    currentItemIndex?: number;

    constructor(
        private _dataExplorerService: DataExplorerService,
        private _sharedStorageService: SharedStorageService
    ) {}

    close() {
        this.setCurrentItemIndex(undefined);
        this.formulaPalette.hide();
        this.closeRequested.emit();
    }

    itemClick(index: number) {
        this.setCurrentItemIndexAndRefreshPalette(index);
    }

    ngOnInit() {
        this.setCurrentItemIndex(undefined);
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        if (this._dataExplorerService.currentSheetCharacteristic) {
            this.refreshItems();
        }
        this._dataExplorerService.currentFormulaItemChanged.subscribe(() => {
            this.formulaPalette.hide();
            this.firstPlaceHolder = '';
            this.refreshItems();
        });
        this._dataExplorerService.currentSheetCharacteristicChanged.subscribe(() => this.refreshItems());
    }

    placeHolderClick() {
        this.setCurrentItemIndexAndRefreshPalette(undefined);
    }

    refreshItems() {
        this.items = this._dataExplorerService.currentSheetCharacteristic.formulaItems;
        this._dataExplorerService
            .getFormulaPlaceHolders(
                this.selectedProject.projectGuid,
                new AnalysisMapper().mapToDto(
                    this._dataExplorerService.currentAnalysis.name,
                    this._dataExplorerService.currentAnalysis
                ),
                this._dataExplorerService.currentSheetCharacteristic.id
            )
            .subscribe(placeHolders => {
                this.firstPlaceHolder = placeHolders[0];
                this.otherPlaceHolders = placeHolders.slice(1);
                this.formulaPalette.show();
            });
    }

    removeAll() {
        this._dataExplorerService.removeWholeFormula();
    }

    removeItem(index: number) {
        this._dataExplorerService.removeFormulaItem(index);
    }

    setCurrentItemIndex(index: number) {
        this.currentItemIndex = index;
        this._dataExplorerService.setCurrentFormulaItem(index);
    }

    setCurrentItemIndexAndRefreshPalette(index: number) {
        this.formulaPalette.hide();
        this.setCurrentItemIndex(index);
        this._dataExplorerService.currentFormulaItemChanged.emit();
    }
}
