// tslint:disable:max-line-length
import { NgModule } from '@angular/core';

import { MainNavComponent } from './main-nav/main-nav.component';
import { VersionComponent } from './version/version.component';
import { SharedModule } from '@shared/shared.module';
// tslint:enable:max-line-length

const moduleDeclarations = [MainNavComponent, VersionComponent];

@NgModule({
    imports: [SharedModule],
    providers: [],
    declarations: [...moduleDeclarations],
    exports: [...moduleDeclarations, MainNavComponent]
})
export class DeclarationsModule {}
