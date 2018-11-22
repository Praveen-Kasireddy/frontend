import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagementTab } from '@core/enum/management-tab.enum';

@Component({
    selector: 'kosmos-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
    tabs: { id: number; text: string; icon: string }[] = [
        { id: ManagementTab.USER_MANAGEMENT, text: 'User Management', icon: '' },
        { id: ManagementTab.MASTER_DATA_MANAGEMENT, text: 'Master Data Management', icon: '' }
    ];
    selectedTab: number = 0;

    constructor(private _route: ActivatedRoute, private _router: Router) {}

    ngOnInit(): void {
        if (this._route.snapshot.data['selectedTab'] != undefined && this._route.snapshot.data['selectedTab'] != null) {
            this.selectedTab = this._route.snapshot.data['selectedTab'];
        } else {
            this.selectTab({ itemIndex: ManagementTab.USER_MANAGEMENT });
        }
    }

    selectTab(e) {
        if (e.itemIndex == ManagementTab.USER_MANAGEMENT) {
            this._router.navigate(['/management/userlist']);
        } else if (e.itemIndex == ManagementTab.MASTER_DATA_MANAGEMENT) {
            this._router.navigate(['/management/masterdata']);
        }
    }
}
