import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormulaItemType } from '@core/enum/formula-item-type.enum';
import { FormulaItem } from '@core/models/project/data-explorer/formula-item';
import { Project } from '@core/models/project/project';
import { DataExplorerService } from '@core/services';
import { AnalysisMapper } from '@shared/data-explorer/analysis-mapper';
import { ValidatedPopupComponent } from '@shared/validated-popup/validated-popup.component';
import { SharedStorageService } from 'ngx-store';
import { FormulaItemHelper } from '../formula-item-helper';

@Component({
    moduleId: module.id,
    selector: 'kosmos-formula-palette',
    templateUrl: 'formula-palette.component.html',
    styleUrls: ['formula-palette.component.scss']
})
export class FormulaPaletteComponent extends ValidatedPopupComponent implements OnDestroy, OnInit {
    items: FormulaItem[] = [];
    selectedProject: Project;
    constant: number;
    constantAllowed: boolean;
    subscriptionsToUnsubscribe: any[] = [];

    constructor(
        private _dataExplorerService: DataExplorerService,
        private _sharedStorageService: SharedStorageService
    ) {
        super();
    }

    addConstant() {
        this._dataExplorerService.addFormulaItem(FormulaItemHelper.newConstant(this.constant));
        this.constant = undefined;
    }

    ngOnDestroy() {
        this.subscriptionsToUnsubscribe.forEach(s => s.unsubscribe());
    }

    ngOnInit() {
        super.ngOnInit();
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.refreshItems();
        this.subscriptionsToUnsubscribe.push(
            this._dataExplorerService.currentFormulaItemChanged.subscribe(() => this.refreshItems())
        );
        this.subscriptionsToUnsubscribe.push(
            this._dataExplorerService.currentSheetCharacteristicChanged.subscribe(() => this.refreshItems())
        );
    }

    onItemSelected(event) {
        this._dataExplorerService.addFormulaItem(event.itemData);
    }

    refreshItems(): void {
        this._dataExplorerService
            .getAcceptableNewFormulaItems(
                this.selectedProject.projectGuid,
                new AnalysisMapper().mapToDto(
                    this._dataExplorerService.currentAnalysis.name,
                    this._dataExplorerService.currentAnalysis
                ),
                this._dataExplorerService.currentSheetCharacteristic.id,
                this._dataExplorerService.currentFormulaItemIndex
            )
            .subscribe(items => {
                this.items = items
                    .filter(i => i.type != FormulaItemType.Constant)
                    .map(i => FormulaItemHelper.mapFromDto(this._dataExplorerService.currentAnalysis, i));
                this.constantAllowed = items.some(i => i.type == FormulaItemType.Constant);
            });
    }
}
