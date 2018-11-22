import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import { SharedStorageService } from 'ngx-store';
import { MainPopup } from './core/models/popup/mainpopup';

@Component({
    selector: 'kosmos-app',
    templateUrl: './kosmos.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./kosmos.component.scss']
})
export class KosmosComponent implements OnInit {
    mainPopupVisible: boolean = false;
    mainPopupMessage: string = '';
    public generalPopup: MainPopup = new MainPopup();

    dxPopUp: DxPopupComponent;

    constructor(private _sharedStorageService: SharedStorageService) {}

    ngOnInit(): void {
        this._sharedStorageService.observe('mainPopup').subscribe(event => {
            this.generalPopup = event.newValue;
        });
    }

    hideMainPopup = (): void => {
        if (this.generalPopup.reloadPage) {
            window.location.reload();
        }

        this.generalPopup.visible = false;
        this._sharedStorageService.set('mainPopup', this.generalPopup);
    };
}
