import { Component, OnInit, Input } from '@angular/core';
import { WhenEmpty } from '@core/decorators/when-empty';

@Component({
    selector: 'kosmos-table-of-content-select-line',
    templateUrl: './table-of-content-select-line.component.html',
    styleUrls: ['./table-of-content-select-line.component.scss']
})
export class TableOfContentSelectLineComponent {
    @Input()
    @WhenEmpty(false)
    selected: boolean;
}
