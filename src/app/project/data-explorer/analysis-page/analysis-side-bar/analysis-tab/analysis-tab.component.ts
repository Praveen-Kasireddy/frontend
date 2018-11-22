import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { DataExplorerService } from '@core/services';

@Component({
    moduleId: module.id,
    selector: 'kosmos-analysis-tab',
    templateUrl: 'analysis-tab.component.html',
    styleUrls: ['analysis-tab.component.scss']
})
export class AnalysisTabComponent implements OnInit {
    @Input() title: string;
    @Input() selected: boolean;
    @Input() dimensionType: SheetDimensionType;
    @Input() class: string = '';

    constructor(private _dataExlorerService: DataExplorerService) {}

    ngOnInit() {
        this._dataExlorerService.dimensionChanged.subscribe(
            dimension => (this.selected = dimension.type === this.dimensionType)
        );
    }

    @HostListener('click')
    handleClick(): void {
        this._dataExlorerService.selectDimensionType(this.dimensionType);
        this._dataExlorerService.openPaletteRequest();
    }
}
