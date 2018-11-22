import { DebugElement } from '@angular/core';
import { NgxLoggerLevel } from 'ngx-logger';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const rootUrl: string = 'http://localhost:20034/api/v2';

export const environment = {
    production: false,
    clientLogLevel: NgxLoggerLevel.DEBUG,
    serverLogUrl: rootUrl + '/core/log',
    serverLogLevel: NgxLoggerLevel.INFO,
    traceRouting: false,
    API_URL: rootUrl,
    API_URL_CORE: rootUrl + '/core',
    API_URL_INGEST: rootUrl + '/ingest',
    API_URL_RENDER: rootUrl + '/render'
};
