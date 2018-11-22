import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';
import { DxPopupComponent } from 'devextreme-angular';

declare const window: any;
declare const $: any;

@Component({
    selector: 'kosmos-cropper-popup',
    templateUrl: 'cropper-popup.component.html',
    styleUrls: ['cropper-popup.component.scss']
})
export class CropperPopupComponent implements OnInit {
    @ViewChild(DxPopupComponent)
    popup: DxPopupComponent;

    @ViewChild('angularCropper')
    public angularCropper: CropperComponent;

    visible: boolean = false;

    @Input()
    set isVisible(value: boolean) {
        this.visible = value;
    }

    _imageFromCell: string;

    @Input()
    set imageFromCell(value: string) {
        this._imageFromCell = value;
    }

    croppedBase64Image: string;

    cropperOptions: any = {
        zoomable: true,
        autoCropArea: 1,
        viewMode: 2
    };

    cropperCroppedOptions: any = {
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high'
    };

    blobList = [];
    imageUrl: string = undefined;
    isIe: boolean = false;
    ieClipboardDiv;
    isCropped: boolean = false;
    isPasted: boolean = false;

    @Output()
    done = new EventEmitter<string>();
    @Output()
    close = new EventEmitter();

    ngOnInit(): void {
        this.isIe =
            navigator.userAgent.toLowerCase().indexOf('msie') != -1 ||
            navigator.userAgent.toLowerCase().indexOf('trident') != -1;
    }

    popupVisibleChanged(): void {
        if (!this.popup.visible) {
            this.close.emit();
            this.removeEvent();
        } else {
            this.registerEvent();
            this.imageUrl = undefined;
            setTimeout(() => {
                if (typeof this.angularCropper.cropper != 'undefined') {
                    this.angularCropper.cropper.destroy();
                    if (this._imageFromCell) {
                        this.imageUrl = this._imageFromCell;
                        this.angularCropper.imageUrl = this._imageFromCell;
                    } else {
                        this.imageUrl = undefined;
                        this.angularCropper.imageUrl = '';
                    }
                }
            }, 500);
        }
    }

    registerEvent() {
        window.addEventListener('paste', this.pasteHandler, false);

        if (this.isIe) {
            document.body.addEventListener('keydown', this.focusIeClipboardDiv, false);
        }
    }

    focusIeClipboardDiv() {
        this.ieClipboardDiv = $('#ie-clipboard-contenteditable');
        this.ieClipboardDiv.focus();
        const range = document.createRange();
        range.selectNodeContents(this.ieClipboardDiv.get(0));
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    removeEvent() {
        window.removeEventListener('paste', this.pasteHandler, false);
        if (this.isIe) {
            document.body.removeEventListener('keydown', this.focusIeClipboardDiv, false);
        }
        if (this.angularCropper.cropper) {
            this.angularCropper.image.nativeElement.removeEventListener('cropstart', this.cropHandler, false);
        }
    }

    cropHandler = (e: any) => {
        this.isCropped = true;
    };

    ieClipboardEvent(clipboardEvent) {
        this.isPasted = true;
        const clipboardData = window.clipboardData;
        const clipboardText = clipboardData.getData('Text');
        this.ieClipboardDiv = $('#ie-clipboard-contenteditable');
        this.ieClipboardDiv.empty();
        setTimeout(() => {
            this.ieClipboardDiv = $('#ie-clipboard-contenteditable');
            const wrapper = <HTMLDivElement>document.createElement('div');
            wrapper.innerHTML = this.ieClipboardDiv.html();
            const imageElement = <HTMLImageElement>wrapper.firstChild;
            if (this.angularCropper.cropper) {
                this.angularCropper.cropper.destroy();
            }
            this.isCropped = false;
            this.imageUrl = imageElement.src;
            this.angularCropper.imageUrl = imageElement.src;
            this.angularCropper.image.nativeElement.addEventListener('cropstart', this.cropHandler, false);
            this.ieClipboardDiv.empty();
        }, 0);
    }

    pasteHandler = (e: any) => {
        this.isPasted = true;
        if (this.isIe) {
            this.ieClipboardEvent(e);
        } else {
            const items = (e.clipboardData || e.originalEvent.clipboardData).items;
            let blob;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') === 0) {
                    blob = items[i].getAsFile();
                }
            }
            if (blob !== undefined) {
                const reader = new FileReader();
                // tslint:disable-next-line:no-shadowed-variable
                reader.onload = (e: any) => {
                    if (typeof this.angularCropper.cropper != 'undefined') {
                        this.angularCropper.cropper.destroy();
                    }
                    this.isCropped = false;
                    this.imageUrl = e.target.result;
                    this.angularCropper.imageUrl = e.target.result;
                    this.angularCropper.image.nativeElement.addEventListener('cropstart', this.cropHandler, false);
                };
                reader.readAsDataURL(blob);
            }
        }
    };

    readUrl(event: any) {
        this.isPasted = false;
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                if (typeof this.angularCropper.cropper != 'undefined') {
                    this.angularCropper.cropper.destroy();
                }
                this.isCropped = false;
                this.imageUrl = e.target.result;
                this.angularCropper.imageUrl = e.target.result;
                // tslint:disable-next-line:no-shadowed-variable
                this.angularCropper.image.nativeElement.addEventListener('cropstart', this.cropHandler, false);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    reset() {
        this.angularCropper.cropper.reset();
    }

    onDone = (): void => {
        if (this.isCropped || this.isPasted) {
            this.croppedBase64Image = this.angularCropper.cropper
                .getCroppedCanvas(this.cropperCroppedOptions)
                .toDataURL('image/jpeg', 0.9);
        } else {
            this.croppedBase64Image = this.imageUrl;
        }

        this.done.emit(this.croppedBase64Image);
        this.close.emit();
    };
}
