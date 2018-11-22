import { Component, OnInit } from '@angular/core';
import { VersionApiService } from '@core/services/version-api/version-api.service';
import { version } from './version';

@Component({
    selector: 'kosmos-version',
    templateUrl: './version.component.html',
    styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
    clientVersion: string = 'unknown';
    apiVersion: string = 'unknown';

    constructor(private _versionService: VersionApiService) {}

    ngOnInit() {
        this.clientVersion = this.getFrontendVersion();

        this._versionService.getApiVersion$().subscribe(
            resp => {
                this.apiVersion = resp.headers.get('X-Kosmos-Backend-Version');
            },
            error => console.log(error)
        );
    }

    private getFrontendVersion(): string {
        return version;
    }
}
