import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ReportCreationSettings } from '@core/models';
import { DxPopupComponent, DxValidationGroupComponent } from 'devextreme-angular';
import Validator from 'devextreme/ui/validator';

const PAGE_TYPE_CURRENT_PAGE: string = 'current_page';
const PAGE_TYPE_ALL_PAGES: string = 'all_pages';
const PAGE_TYPE_SELECTION: string = 'selection';

@Component({
    selector: 'kosmos-generate-report-popup',
    templateUrl: 'generate-report-popup.component.html',
    styleUrls: ['generate-report-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateReportPopupComponent implements OnInit {
    @ViewChild(DxValidationGroupComponent)
    validationGroup: DxValidationGroupComponent;
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;

    @Input()
    visible: boolean = false;
    @Input()
    pageCount: number = 1;
    @Input()
    currentPage: number = 1;

    @Output()
    done = new EventEmitter<ReportCreationSettings>();
    @Output()
    close = new EventEmitter();

    pageTypes: any = [
        { text: 'Current page', value: PAGE_TYPE_CURRENT_PAGE },
        { text: 'All pages', value: PAGE_TYPE_ALL_PAGES },
        { text: 'Selection', value: PAGE_TYPE_SELECTION }
    ];
    pageTypeSelectedValue: string = PAGE_TYPE_ALL_PAGES;
    pagesEnabled: boolean = false;

    pageFrom: number = 1;
    pageTo: number = 1;

    watermark: string = undefined;
    watermarkChecked: boolean = false;

    ngOnInit(): void {}

    popupVisibleChanged(): void {
        if (!this.popup.visible) {
            this.close.emit();
        } else {
            this.watermark = undefined;
            this.pageTo = this.pageCount;
            this.pageFrom = 1;
            this.pageTypeSelectedValue = PAGE_TYPE_ALL_PAGES;
            this.pagesEnabled = false;
            this.watermarkChecked = false;
        }
    }

    pageTypeChanged = (e: any): void => {
        this.pagesEnabled = e.value == PAGE_TYPE_SELECTION;
        this.validationGroup.instance.validate();
    };

    validateMe(e): boolean {
        const instance: any = Validator.getInstance(e.element);
        return instance.validate();
    }

    onDone = (): boolean => {
        if (this.validationGroup.instance.validate().isValid) {
            const settings = new ReportCreationSettings();
            if (this.watermarkChecked) {
                settings.watermark = this.watermark;
            }

            if (this.pageTypeSelectedValue == PAGE_TYPE_SELECTION) {
                settings.pageFrom = this.pageFrom;
                settings.pageTo = this.pageTo;
            } else if (this.pageTypeSelectedValue == PAGE_TYPE_CURRENT_PAGE) {
                settings.pageFrom = this.currentPage;
                settings.pageTo = this.currentPage;
            }

            this.done.emit(settings);
            this.validationGroup.instance.reset();
            return true;
        }
        return false;
    };
}
