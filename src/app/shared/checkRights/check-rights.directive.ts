import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Right } from '@core/models/right';
import { RightService } from '@core/services/user/right.service';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';

@TakeUntilDestroy()
@Directive({
    selector: '[kosmosCheckRights]'
})
export class CheckRightstDirective implements AfterViewInit, OnInit, OnDestroy {
    constructor(private el: ElementRef, private _rightService: RightService) {}

    rights: Right[];

    @Input('kosmosCheckRights')
    kosmosCheckRights: string;

    @Input()
    hide: boolean;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.setRightsForElement();
    }

    ngAfterViewInit() {
        this._setFromService();

        const intervalId = setInterval(() => {
            if (this._rightService.rightsLoaded) {
                clearInterval(intervalId);
                this._setFromService();
            }
        }, 100);
    }

    ngOnInit() {
        this._setFromService();
        this._rightService
            .getMessage()
            .pipe(untilDestroyed(this))
            .subscribe(rights => {
                this.rights = rights;
                this.setRightsForElement();
            });
    }

    setRightsForElement() {
        if (!this._rightService.rightsLoaded) {
            return;
        }

        let hasRight;

        if (typeof this.rights != 'undefined') {
            hasRight = this.rights.filter(right => right.name == this.kosmosCheckRights);
        }

        if (!hasRight || hasRight.length == 0) {
            if (this.el.nativeElement.nodeName.startsWith('DX-')) {
                this.disableDXControls(this.el.nativeElement);
            } else {
                this.disableControls(this.el.nativeElement);
            }
        }
    }

    disableDXControls(el) {
        const myIntervall = setInterval(function() {
            if (!el.classList.contains('dx-state-disabled')) {
                el.classList.add('dx-state-disabled');
            } else {
                clearInterval(myIntervall);
            }
        }, 750);
    }

    disableControls(el) {
        const hidden = this.hide;
        const myIntervall = setInterval(function() {
            if (!el.classList.contains('disabled')) {
                el.removeAllListeners();
                el.disabled = true;
                el.classList.add('disabled');
                if (hidden) {
                    el.classList.add('hide');
                }
            } else {
                clearInterval(myIntervall);
            }
        }, 750);
    }

    ngOnDestroy() {}

    private _setFromService(): void {
        this.rights = this._rightService.rights;
        this.setRightsForElement();
    }
}
