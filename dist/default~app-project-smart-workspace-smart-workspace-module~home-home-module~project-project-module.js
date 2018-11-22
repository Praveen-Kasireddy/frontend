(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-project-smart-workspace-smart-workspace-module~home-home-module~project-project-module"],{

/***/ "./node_modules/angular-cropperjs/fesm5/angular-cropperjs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-cropperjs/fesm5/angular-cropperjs.js ***!
  \*******************************************************************/
/*! exports provided: AngularCropperjsService, CropperComponent, AngularCropperjsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularCropperjsService", function() { return AngularCropperjsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperComponent", function() { return CropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularCropperjsModule", function() { return AngularCropperjsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.esm.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularCropperjsService = /** @class */ (function () {
    function AngularCropperjsService() {
    }
    AngularCropperjsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularCropperjsService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularCropperjsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularCropperjsService_Factory() { return new AngularCropperjsService(); }, token: AngularCropperjsService, providedIn: "root" });
    return AngularCropperjsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CropperComponent = /** @class */ (function () {
    function CropperComponent() {
        this.cropperOptions = {};
        this.export = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = true;
    }
    /**
     * @return {?}
     */
    CropperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * Image loaded
     * @param ev
     */
    /**
     * Image loaded
     * @param {?} ev
     * @return {?}
     */
    CropperComponent.prototype.imageLoaded = /**
     * Image loaded
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        var _this = this;
        //
        // Unset load error state
        this.loadError = false;
        /** @type {?} */
        var image = /** @type {?} */ (ev.target);
        this.imageElement = image;
        //
        // Add crossOrigin?
        console.log('this.cropperOptions', this.cropperOptions);
        if (this.cropperOptions.checkCrossOrigin)
            image.crossOrigin = 'anonymous';
        //
        // Image on ready event
        image.addEventListener('ready', function () {
            //
            // Emit ready
            //
            // Emit ready
            _this.ready.emit(true);
            //
            // Unset loading state
            //
            // Unset loading state
            _this.isLoading = false;
            //
            // Validate cropbox existance
            if (_this.cropbox) {
                //
                // Set cropbox data
                //
                // Set cropbox data
                _this.cropper.setCropBoxData(_this.cropbox);
            }
        });
        /** @type {?} */
        var aspectRatio = NaN;
        if (this.settings) {
            var _a = this.settings, width = _a.width, height = _a.height;
            aspectRatio = width / height;
        }
        //
        // Set crop options
        // extend default with custom config
        this.cropperOptions = Object.assign({
            aspectRatio: aspectRatio,
            movable: false,
            scalable: false,
            zoomable: false,
            viewMode: 1,
            checkCrossOrigin: true
        }, this.cropperOptions);
        //
        // Set cropperjs
        this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_1__["default"](image, this.cropperOptions);
    };
    /**
     * Image load error
     * @param event
     */
    /**
     * Image load error
     * @param {?} event
     * @return {?}
     */
    CropperComponent.prototype.imageLoadError = /**
     * Image load error
     * @param {?} event
     * @return {?}
     */
    function (event) {
        //
        // Set load error state
        this.loadError = true;
        //
        // Unset loading state
        this.isLoading = false;
    };
    /**
     * Export canvas
     * @param base64
     */
    /**
     * Export canvas
     * @param {?=} base64
     * @return {?}
     */
    CropperComponent.prototype.exportCanvas = /**
     * Export canvas
     * @param {?=} base64
     * @return {?}
     */
    function (base64) {
        var _this = this;
        /** @type {?} */
        var imageData = this.cropper.getImageData();
        /** @type {?} */
        var cropData = this.cropper.getCropBoxData();
        /** @type {?} */
        var canvas = this.cropper.getCroppedCanvas();
        /** @type {?} */
        var data = { imageData: imageData, cropData: cropData };
        /** @type {?} */
        var promise = new Promise(function (resolve) {
            //
            // Validate base64
            if (base64) {
                //
                // Resolve promise with dataUrl
                return resolve({
                    dataUrl: canvas.toDataURL('image/png')
                });
            }
            canvas.toBlob(function (blob) { return resolve({ blob: blob }); });
        });
        //
        // Emit export data when promise is ready
        promise.then(function (res) {
            _this.export.emit(Object.assign(data, res));
        });
    };
    CropperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular-cropper',
                    template: "<!-- CROPPER WRAPPER -->\n<div class=\"cropper-wrapper\">\n\n    <!-- LOADING -->\n    <div class=\"loading-block\" *ngIf=\"isLoading\">\n        <div class=\"spinner\"></div>\n    </div>\n\n    <!-- LOAD ERROR -->\n    <div class=\"alert alert-warning\" *ngIf=\"loadError\">{{ loadImageErrorText }}</div>\n\n    <!-- CROPPER -->\n    <div class=\"cropper\">\n        <img #image alt=\"image\" [src]=\"imageUrl\" (load)=\"imageLoaded($event)\" (error)=\"imageLoadError($event)\" />\n    </div>\n</div>\n",
                    styles: [":host{display:block}.cropper img{max-width:100%;max-height:100%;height:auto}.cropper-wrapper{position:relative;min-height:80px}.cropper-wrapper .loading-block{position:absolute;top:0;left:0;width:100%;height:100%}.cropper-wrapper .loading-block .spinner{width:31px;height:31px;margin:0 auto;border:2px solid rgba(97,100,193,.98);border-radius:50%;border-left-color:transparent;border-right-color:transparent;-webkit-animation:425ms linear infinite cssload-spin;position:absolute;top:calc(50% - 15px);left:calc(50% - 15px);animation:425ms linear infinite cssload-spin}@-webkit-keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}/*!\n * Cropper.js v1.4.1\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2018-07-15T09:54:43.167Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:#39f solid 1px;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:' ';display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:' ';display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    CropperComponent.ctorParameters = function () { return []; };
    CropperComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['image',] }],
        imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loadImageErrorText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropperOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        export: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CropperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularCropperjsModule = /** @class */ (function () {
    function AngularCropperjsModule() {
    }
    AngularCropperjsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [CropperComponent],
                    exports: [CropperComponent]
                },] },
    ];
    return AngularCropperjsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jcm9wcGVyanMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItY3JvcHBlcmpzL2xpYi9hbmd1bGFyLWNyb3BwZXJqcy5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLWNyb3BwZXJqcy9saWIvY3JvcHBlci9jcm9wcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jcm9wcGVyanMvbGliL2FuZ3VsYXItY3JvcHBlcmpzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDcm9wcGVyanNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IENyb3BwZXIgZnJvbSAnY3JvcHBlcmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUNyb3BwZXJTZXR0aW5nIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlQ3JvcHBlclJlc3VsdCB7XG4gICAgaW1hZ2VEYXRhOiBDcm9wcGVyLkltYWdlRGF0YTtcbiAgICBjcm9wRGF0YTogQ3JvcHBlci5Dcm9wQm94RGF0YTtcbiAgICBibG9iPzogQmxvYjtcbiAgICBkYXRhVXJsPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FuZ3VsYXItY3JvcHBlcicsXG4gICAgdGVtcGxhdGU6IGA8IS0tIENST1BQRVIgV1JBUFBFUiAtLT5cbjxkaXYgY2xhc3M9XCJjcm9wcGVyLXdyYXBwZXJcIj5cblxuICAgIDwhLS0gTE9BRElORyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ibG9ja1wiICpuZ0lmPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIExPQUQgRVJST1IgLS0+XG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiAqbmdJZj1cImxvYWRFcnJvclwiPnt7IGxvYWRJbWFnZUVycm9yVGV4dCB9fTwvZGl2PlxuXG4gICAgPCEtLSBDUk9QUEVSIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjcm9wcGVyXCI+XG4gICAgICAgIDxpbWcgI2ltYWdlIGFsdD1cImltYWdlXCIgW3NyY109XCJpbWFnZVVybFwiIChsb2FkKT1cImltYWdlTG9hZGVkKCRldmVudClcIiAoZXJyb3IpPVwiaW1hZ2VMb2FkRXJyb3IoJGV2ZW50KVwiIC8+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9LmNyb3BwZXIgaW1ne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtoZWlnaHQ6YXV0b30uY3JvcHBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6ODBweH0uY3JvcHBlci13cmFwcGVyIC5sb2FkaW5nLWJsb2Nre3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5jcm9wcGVyLXdyYXBwZXIgLmxvYWRpbmctYmxvY2sgLnNwaW5uZXJ7d2lkdGg6MzFweDtoZWlnaHQ6MzFweDttYXJnaW46MCBhdXRvO2JvcmRlcjoycHggc29saWQgcmdiYSg5NywxMDAsMTkzLC45OCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYW5pbWF0aW9uOjQyNW1zIGxpbmVhciBpbmZpbml0ZSBjc3Nsb2FkLXNwaW47cG9zaXRpb246YWJzb2x1dGU7dG9wOmNhbGMoNTAlIC0gMTVweCk7bGVmdDpjYWxjKDUwJSAtIDE1cHgpO2FuaW1hdGlvbjo0MjVtcyBsaW5lYXIgaW5maW5pdGUgY3NzbG9hZC1zcGlufUAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXNwaW57dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGNzc2xvYWQtc3Bpbnt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS8qIVxuICogQ3JvcHBlci5qcyB2MS40LjFcbiAqIGh0dHBzOi8vZmVuZ3l1YW5jaGVuLmdpdGh1Yi5pby9jcm9wcGVyanNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNS1wcmVzZW50IENoZW4gRmVuZ3l1YW5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTgtMDctMTVUMDk6NTQ6NDMuMTY3WlxuICovLmNyb3BwZXItY29udGFpbmVye2RpcmVjdGlvbjpsdHI7Zm9udC1zaXplOjA7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmNyb3BwZXItY29udGFpbmVyIGltZ3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO2ltYWdlLW9yaWVudGF0aW9uOjBkZWc7bWF4LWhlaWdodDpub25lIWltcG9ydGFudDttYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7bWluLWhlaWdodDowIWltcG9ydGFudDttaW4td2lkdGg6MCFpbXBvcnRhbnQ7d2lkdGg6MTAwJX0uY3JvcHBlci1jYW52YXMsLmNyb3BwZXItY3JvcC1ib3gsLmNyb3BwZXItZHJhZy1ib3gsLmNyb3BwZXItbW9kYWwsLmNyb3BwZXItd3JhcC1ib3h7Ym90dG9tOjA7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmNyb3BwZXItY2FudmFzLC5jcm9wcGVyLXdyYXAtYm94e292ZXJmbG93OmhpZGRlbn0uY3JvcHBlci1kcmFnLWJveHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3BhY2l0eTowfS5jcm9wcGVyLW1vZGFse2JhY2tncm91bmQtY29sb3I6IzAwMDtvcGFjaXR5Oi41fS5jcm9wcGVyLXZpZXctYm94e2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7b3V0bGluZTojMzlmIHNvbGlkIDFweDtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTAwJX0uY3JvcHBlci1kYXNoZWR7Ym9yZGVyOjAgZGFzaGVkICNlZWU7ZGlzcGxheTpibG9jaztvcGFjaXR5Oi41O3Bvc2l0aW9uOmFic29sdXRlfS5jcm9wcGVyLWRhc2hlZC5kYXNoZWQtaHtib3JkZXItYm90dG9tLXdpZHRoOjFweDtib3JkZXItdG9wLXdpZHRoOjFweDtoZWlnaHQ6Y2FsYygxMDAlIC8gMyk7bGVmdDowO3RvcDpjYWxjKDEwMCUgLyAzKTt3aWR0aDoxMDAlfS5jcm9wcGVyLWRhc2hlZC5kYXNoZWQtdntib3JkZXItbGVmdC13aWR0aDoxcHg7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweDtoZWlnaHQ6MTAwJTtsZWZ0OmNhbGMoMTAwJSAvIDMpO3RvcDowO3dpZHRoOmNhbGMoMTAwJSAvIDMpfS5jcm9wcGVyLWNlbnRlcntkaXNwbGF5OmJsb2NrO2hlaWdodDowO2xlZnQ6NTAlO29wYWNpdHk6Ljc1O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7d2lkdGg6MH0uY3JvcHBlci1jZW50ZXI6YWZ0ZXIsLmNyb3BwZXItY2VudGVyOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Y29udGVudDonICc7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZX0uY3JvcHBlci1jZW50ZXI6YmVmb3Jle2hlaWdodDoxcHg7bGVmdDotM3B4O3RvcDowO3dpZHRoOjdweH0uY3JvcHBlci1jZW50ZXI6YWZ0ZXJ7aGVpZ2h0OjdweDtsZWZ0OjA7dG9wOi0zcHg7d2lkdGg6MXB4fS5jcm9wcGVyLWZhY2UsLmNyb3BwZXItbGluZSwuY3JvcHBlci1wb2ludHtkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO29wYWNpdHk6LjE7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJX0uY3JvcHBlci1mYWNle2JhY2tncm91bmQtY29sb3I6I2ZmZjtsZWZ0OjA7dG9wOjB9LmNyb3BwZXItbGluZXtiYWNrZ3JvdW5kLWNvbG9yOiMzOWZ9LmNyb3BwZXItbGluZS5saW5lLWV7Y3Vyc29yOmV3LXJlc2l6ZTtyaWdodDotM3B4O3RvcDowO3dpZHRoOjVweH0uY3JvcHBlci1saW5lLmxpbmUtbntjdXJzb3I6bnMtcmVzaXplO2hlaWdodDo1cHg7bGVmdDowO3RvcDotM3B4fS5jcm9wcGVyLWxpbmUubGluZS13e2N1cnNvcjpldy1yZXNpemU7bGVmdDotM3B4O3RvcDowO3dpZHRoOjVweH0uY3JvcHBlci1saW5lLmxpbmUtc3tib3R0b206LTNweDtjdXJzb3I6bnMtcmVzaXplO2hlaWdodDo1cHg7bGVmdDowfS5jcm9wcGVyLXBvaW50e2JhY2tncm91bmQtY29sb3I6IzM5ZjtoZWlnaHQ6NXB4O29wYWNpdHk6Ljc1O3dpZHRoOjVweH0uY3JvcHBlci1wb2ludC5wb2ludC1le2N1cnNvcjpldy1yZXNpemU7bWFyZ2luLXRvcDotM3B4O3JpZ2h0Oi0zcHg7dG9wOjUwJX0uY3JvcHBlci1wb2ludC5wb2ludC1ue2N1cnNvcjpucy1yZXNpemU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTNweDt0b3A6LTNweH0uY3JvcHBlci1wb2ludC5wb2ludC13e2N1cnNvcjpldy1yZXNpemU7bGVmdDotM3B4O21hcmdpbi10b3A6LTNweDt0b3A6NTAlfS5jcm9wcGVyLXBvaW50LnBvaW50LXN7Ym90dG9tOi0zcHg7Y3Vyc29yOnMtcmVzaXplO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0zcHh9LmNyb3BwZXItcG9pbnQucG9pbnQtbmV7Y3Vyc29yOm5lc3ctcmVzaXplO3JpZ2h0Oi0zcHg7dG9wOi0zcHh9LmNyb3BwZXItcG9pbnQucG9pbnQtbnd7Y3Vyc29yOm53c2UtcmVzaXplO2xlZnQ6LTNweDt0b3A6LTNweH0uY3JvcHBlci1wb2ludC5wb2ludC1zd3tib3R0b206LTNweDtjdXJzb3I6bmVzdy1yZXNpemU7bGVmdDotM3B4fS5jcm9wcGVyLXBvaW50LnBvaW50LXNle2JvdHRvbTotM3B4O2N1cnNvcjpud3NlLXJlc2l6ZTtoZWlnaHQ6MjBweDtvcGFjaXR5OjE7cmlnaHQ6LTNweDt3aWR0aDoyMHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuY3JvcHBlci1wb2ludC5wb2ludC1zZXtoZWlnaHQ6MTVweDt3aWR0aDoxNXB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmNyb3BwZXItcG9pbnQucG9pbnQtc2V7aGVpZ2h0OjEwcHg7d2lkdGg6MTBweH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuY3JvcHBlci1wb2ludC5wb2ludC1zZXtoZWlnaHQ6NXB4O29wYWNpdHk6Ljc1O3dpZHRoOjVweH19LmNyb3BwZXItcG9pbnQucG9pbnQtc2U6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IzM5Zjtib3R0b206LTUwJTtjb250ZW50OicgJztkaXNwbGF5OmJsb2NrO2hlaWdodDoyMDAlO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotNTAlO3dpZHRoOjIwMCV9LmNyb3BwZXItaW52aXNpYmxle29wYWNpdHk6MH0uY3JvcHBlci1iZ3tiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFBUU1BQUFBbFBXMGlBQUFBQTNOQ1NWUUlDQWpiNFUvZ0FBQUFCbEJNVkVYTXpNei8vLy9UalJWMkFBQUFDWEJJV1hNQUFBcnJBQUFLNndHQ2l3MWFBQUFBSEhSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCR2FYSmxkMjl5YTNNZ1ExTTI2THl5akFBQUFCRkpSRUZVQ0psaitNL0FnQlZoRi8wUEFINi9EL0hrRHhPR0FBQUFBRWxGVGtTdVFtQ0MpfS5jcm9wcGVyLWhpZGV7ZGlzcGxheTpibG9jaztoZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowfS5jcm9wcGVyLWhpZGRlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5jcm9wcGVyLW1vdmV7Y3Vyc29yOm1vdmV9LmNyb3BwZXItY3JvcHtjdXJzb3I6Y3Jvc3NoYWlyfS5jcm9wcGVyLWRpc2FibGVkIC5jcm9wcGVyLWRyYWctYm94LC5jcm9wcGVyLWRpc2FibGVkIC5jcm9wcGVyLWZhY2UsLmNyb3BwZXItZGlzYWJsZWQgLmNyb3BwZXItbGluZSwuY3JvcHBlci1kaXNhYmxlZCAuY3JvcHBlci1wb2ludHtjdXJzb3I6bm90LWFsbG93ZWR9YF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDcm9wcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2ltYWdlJykgaW1hZ2U6IEVsZW1lbnRSZWY7XG5cbiAgICBASW5wdXQoKSBpbWFnZVVybDogYW55O1xuICAgIEBJbnB1dCgpIHNldHRpbmdzOiBJbWFnZUNyb3BwZXJTZXR0aW5nO1xuICAgIEBJbnB1dCgpIGNyb3Bib3g6IENyb3BwZXIuQ3JvcEJveERhdGE7XG4gICAgQElucHV0KCkgbG9hZEltYWdlRXJyb3JUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3JvcHBlck9wdGlvbnM6IGFueSA9IHt9O1xuXG4gICAgQE91dHB1dCgpIGV4cG9ydCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VDcm9wcGVyUmVzdWx0PigpO1xuICAgIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjcm9wcGVyOiBDcm9wcGVyO1xuICAgIHB1YmxpYyBpbWFnZUVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgcHVibGljIGxvYWRFcnJvcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltYWdlIGxvYWRlZFxuICAgICAqIEBwYXJhbSBldlxuICAgICAqL1xuICAgIGltYWdlTG9hZGVkKGV2OiBFdmVudCkge1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFVuc2V0IGxvYWQgZXJyb3Igc3RhdGVcbiAgICAgICAgdGhpcy5sb2FkRXJyb3IgPSBmYWxzZTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBTZXR1cCBpbWFnZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGltYWdlID0gZXYudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gaW1hZ2U7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQWRkIGNyb3NzT3JpZ2luP1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jcm9wcGVyT3B0aW9ucycsIHRoaXMuY3JvcHBlck9wdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5jcm9wcGVyT3B0aW9ucy5jaGVja0Nyb3NzT3JpZ2luKSBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEltYWdlIG9uIHJlYWR5IGV2ZW50XG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEVtaXQgcmVhZHlcbiAgICAgICAgICAgIHRoaXMucmVhZHkuZW1pdCh0cnVlKTtcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFVuc2V0IGxvYWRpbmcgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBjcm9wYm94IGV4aXN0YW5jZVxuICAgICAgICAgICAgaWYgKHRoaXMuY3JvcGJveCkge1xuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBTZXQgY3JvcGJveCBkYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnNldENyb3BCb3hEYXRhKHRoaXMuY3JvcGJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNldHVwIGFzcGVjdCByYXRpbyBhY2NvcmRpbmcgdG8gc2V0dGluZ3NcbiAgICAgICAgbGV0IGFzcGVjdFJhdGlvID0gTmFOO1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnNldHRpbmdzO1xuICAgICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNldCBjcm9wIG9wdGlvbnNcbiAgICAgICAgLy8gZXh0ZW5kIGRlZmF1bHQgd2l0aCBjdXN0b20gY29uZmlnXG4gICAgICAgIHRoaXMuY3JvcHBlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgbW92YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzY2FsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB6b29tYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2aWV3TW9kZTogMSxcbiAgICAgICAgICAgIGNoZWNrQ3Jvc3NPcmlnaW46IHRydWVcbiAgICAgICAgfSwgdGhpcy5jcm9wcGVyT3B0aW9ucyk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2V0IGNyb3BwZXJqc1xuICAgICAgICB0aGlzLmNyb3BwZXIgPSBuZXcgQ3JvcHBlcihpbWFnZSwgdGhpcy5jcm9wcGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1hZ2UgbG9hZCBlcnJvclxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIGltYWdlTG9hZEVycm9yKGV2ZW50OiBhbnkpIHtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBTZXQgbG9hZCBlcnJvciBzdGF0ZVxuICAgICAgICB0aGlzLmxvYWRFcnJvciA9IHRydWU7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVW5zZXQgbG9hZGluZyBzdGF0ZVxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cG9ydCBjYW52YXNcbiAgICAgKiBAcGFyYW0gYmFzZTY0XG4gICAgICovXG4gICAgZXhwb3J0Q2FudmFzKGJhc2U2ND86IGFueSkge1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEdldCBhbmQgc2V0IGltYWdlLCBjcm9wIGFuZCBjYW52YXMgZGF0YVxuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLmNyb3BwZXIuZ2V0SW1hZ2VEYXRhKCk7XG4gICAgICAgIGNvbnN0IGNyb3BEYXRhID0gdGhpcy5jcm9wcGVyLmdldENyb3BCb3hEYXRhKCk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGltYWdlRGF0YSwgY3JvcERhdGEgfTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBDcmVhdGUgcHJvbWlzZSB0byByZXNvbHZlIGNhbnZhcyBkYXRhXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGJhc2U2NFxuICAgICAgICAgICAgaWYgKGJhc2U2NCkge1xuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIHByb21pc2Ugd2l0aCBkYXRhVXJsXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhVXJsOiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHJlc29sdmUoeyBibG9iIH0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRW1pdCBleHBvcnQgZGF0YSB3aGVuIHByb21pc2UgaXMgcmVhZHlcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4cG9ydC5lbWl0KE9iamVjdC5hc3NpZ24oZGF0YSwgcmVzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcm9wcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0Nyb3BwZXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtDcm9wcGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ3JvcHBlcmpzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O2tDQUpEOzs7Ozs7O0FDQUE7SUErREk7OEJBVitCLEVBQUU7c0JBRWQsSUFBSSxZQUFZLEVBQXNCO3FCQUN2QyxJQUFJLFlBQVksRUFBRTt5QkFFUixJQUFJO0tBS2Y7Ozs7SUFFakIsbUNBQVE7OztJQUFSO0tBQ0M7Ozs7Ozs7Ozs7SUFNRCxzQ0FBVzs7Ozs7SUFBWCxVQUFZLEVBQVM7UUFBckIsaUJBNERDOzs7UUF4REcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7O1FBSXZCLElBQU0sS0FBSyxxQkFBRyxFQUFFLENBQUMsTUFBMEIsRUFBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzs7O1FBSTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0I7WUFBRSxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7O1FBSTFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Ozs7O1lBRzVCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztZQUl0QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7O1lBSXZCLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTs7Ozs7Z0JBSWQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdDO1NBQ0osQ0FBQyxDQUFDOztRQUlILElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZix3QkFBUSxnQkFBSyxFQUFFLGtCQUFNLENBQW1CO1lBQ3hDLFdBQVcsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ2hDOzs7O1FBS0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFdBQVcsYUFBQTtZQUNYLE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxDQUFDO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7O1FBSXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUMxRDs7Ozs7Ozs7OztJQU1ELHlDQUFjOzs7OztJQUFkLFVBQWUsS0FBVTs7O1FBSXJCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzs7UUFJdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDMUI7Ozs7Ozs7Ozs7SUFNRCx1Q0FBWTs7Ozs7SUFBWixVQUFhLE1BQVk7UUFBekIsaUJBK0JDOztRQTNCRyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQUM5QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDOztRQUMvQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7O1FBQy9DLElBQU0sSUFBSSxHQUFHLEVBQUUsU0FBUyxXQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzs7UUFJckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPOzs7WUFJL0IsSUFBSSxNQUFNLEVBQUU7OztnQkFJUixPQUFPLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7aUJBQ3pDLENBQUMsQ0FBQzthQUNOO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDOzs7UUFJSCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0tBQ047O2dCQXpLSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLHlmQWdCYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQywyMklBUW03RyxDQUFDO29CQUM3N0csYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3hDOzs7Ozt3QkFHSSxTQUFTLFNBQUMsT0FBTzsyQkFFakIsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUNBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUVMLE1BQU07d0JBQ04sTUFBTTs7MkJBeERYOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7O2lDQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/angular-froala-wysiwyg/editor/editor.directive.js":
/*!************************************************************************!*\
  !*** ./node_modules/angular-froala-wysiwyg/editor/editor.directive.js ***!
  \************************************************************************/
/*! exports provided: FroalaEditorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FroalaEditorDirective", function() { return FroalaEditorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FroalaEditorDirective = /** @class */ (function () {
    function FroalaEditorDirective(el, zone) {
        this.zone = zone;
        // editor options
        this._opts = {
            immediateAngularModelUpdate: false,
            angularIgnoreAttrs: null
        };
        this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
        this.INNER_HTML_ATTR = 'innerHTML';
        this._hasSpecialTag = false;
        this._listeningEvents = [];
        this._editorInitialized = false;
        this._oldModel = null;
        // Begin ControlValueAccesor methods.
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // froalaModel directive as output: update model if editor contentChanged
        this.froalaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // froalaInit directive as output: send manual editor initialization
        this.froalaInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        var element = el.nativeElement;
        // check if the element is a special tag
        if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) != -1) {
            this._hasSpecialTag = true;
        }
        // jquery wrap and store element
        this._$element = $(element);
        this.zone = zone;
    }
    // Form model content changed.
    FroalaEditorDirective.prototype.writeValue = function (content) {
        this.updateEditor(content);
    };
    FroalaEditorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FroalaEditorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaEditor", {
        // End ControlValueAccesor methods.
        // froalaEditor directive as input: store the editor options
        set: function (opts) {
            this._opts = opts || this._opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaModel", {
        // froalaModel directive as input: store initial editor content
        set: function (content) {
            this.updateEditor(content);
        },
        enumerable: true,
        configurable: true
    });
    // Update editor with model contents.
    FroalaEditorDirective.prototype.updateEditor = function (content) {
        if (JSON.stringify(this._oldModel) == JSON.stringify(content)) {
            return;
        }
        if (!this._hasSpecialTag) {
            this._oldModel = content;
        }
        else {
            this._model = content;
        }
        if (this._editorInitialized) {
            if (!this._hasSpecialTag) {
                this._$element.froalaEditor('html.set', content);
            }
            else {
                this.setContent();
            }
        }
        else {
            if (!this._hasSpecialTag) {
                this._$element.html(content);
            }
            else {
                this.setContent();
            }
        }
    };
    // update model if editor contentChanged
    FroalaEditorDirective.prototype.updateModel = function () {
        var _this = this;
        this.zone.run(function () {
            var modelContent = null;
            if (_this._hasSpecialTag) {
                var attributeNodes = _this._$element[0].attributes;
                var attrs = {};
                for (var i = 0; i < attributeNodes.length; i++) {
                    var attrName = attributeNodes[i].name;
                    if (_this._opts.angularIgnoreAttrs && _this._opts.angularIgnoreAttrs.indexOf(attrName) != -1) {
                        continue;
                    }
                    attrs[attrName] = attributeNodes[i].value;
                }
                if (_this._$element[0].innerHTML) {
                    attrs[_this.INNER_HTML_ATTR] = _this._$element[0].innerHTML;
                }
                modelContent = attrs;
            }
            else {
                var returnedHtml = _this._$element.froalaEditor('html.get');
                if (typeof returnedHtml === 'string') {
                    modelContent = returnedHtml;
                }
            }
            _this._oldModel = modelContent;
            // Update froalaModel.
            _this.froalaModelChange.emit(modelContent);
            // Update form model.
            _this.onChange(modelContent);
        });
    };
    // register event on jquery element
    FroalaEditorDirective.prototype.registerEvent = function (element, eventName, callback) {
        if (!element || !eventName || !callback) {
            return;
        }
        this._listeningEvents.push(eventName);
        element.on(eventName, callback);
    };
    FroalaEditorDirective.prototype.initListeners = function () {
        var self = this;
        // bind contentChange and keyup event to froalaModel
        this.registerEvent(this._$element, 'froalaEditor.contentChanged', function () {
            setTimeout(function () {
                self.updateModel();
            }, 0);
        });
        if (this._opts.immediateAngularModelUpdate) {
            this.registerEvent(this._editor, 'keyup', function () {
                setTimeout(function () {
                    self.updateModel();
                }, 0);
            });
        }
    };
    // register events from editor options
    FroalaEditorDirective.prototype.registerFroalaEvents = function () {
        if (!this._opts.events) {
            return;
        }
        for (var eventName in this._opts.events) {
            if (this._opts.events.hasOwnProperty(eventName)) {
                this.registerEvent(this._$element, eventName, this._opts.events[eventName]);
            }
        }
    };
    FroalaEditorDirective.prototype.createEditor = function () {
        var _this = this;
        if (this._editorInitialized) {
            return;
        }
        this.setContent(true);
        // Registering events before initializing the editor will bind the initialized event correctly.
        this.registerFroalaEvents();
        this.initListeners();
        // init editor
        this.zone.runOutsideAngular(function () {
            _this._$element.on('froalaEditor.initialized', function () {
                _this._editorInitialized = true;
            });
            _this._editor = _this._$element.froalaEditor(_this._opts).data('froala.editor').$el;
        });
    };
    FroalaEditorDirective.prototype.setHtml = function () {
        this._$element.froalaEditor('html.set', this._model || '', true);
        // This will reset the undo stack everytime the model changes externally. Can we fix this?
        this._$element.froalaEditor('undo.reset');
        this._$element.froalaEditor('undo.saveStep');
    };
    FroalaEditorDirective.prototype.setContent = function (firstTime) {
        if (firstTime === void 0) { firstTime = false; }
        var self = this;
        // Set initial content
        if (this._model || this._model == '') {
            this._oldModel = this._model;
            if (this._hasSpecialTag) {
                var tags = this._model;
                // add tags on element
                if (tags) {
                    for (var attr in tags) {
                        if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
                            this._$element.attr(attr, tags[attr]);
                        }
                    }
                    if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
                        this._$element[0].innerHTML = tags[this.INNER_HTML_ATTR];
                    }
                }
            }
            else {
                if (firstTime) {
                    this.registerEvent(this._$element, 'froalaEditor.initialized', function () {
                        self.setHtml();
                    });
                }
                else {
                    self.setHtml();
                }
            }
        }
    };
    FroalaEditorDirective.prototype.destroyEditor = function () {
        if (this._editorInitialized) {
            this._$element.off(this._listeningEvents.join(" "));
            this._editor.off('keyup');
            this._$element.froalaEditor('destroy');
            this._listeningEvents.length = 0;
            this._editorInitialized = false;
        }
    };
    FroalaEditorDirective.prototype.getEditor = function () {
        if (this._$element) {
            return this._$element.froalaEditor.bind(this._$element);
        }
        return null;
    };
    // send manual editor initialization
    FroalaEditorDirective.prototype.generateManualController = function () {
        var self = this;
        var controls = {
            initialize: this.createEditor.bind(this),
            destroy: this.destroyEditor.bind(this),
            getEditor: this.getEditor.bind(this),
        };
        this.froalaInit.emit(controls);
    };
    // TODO not sure if ngOnInit is executed after @inputs
    FroalaEditorDirective.prototype.ngOnInit = function () {
        // check if output froalaInit is present. Maybe observers is private and should not be used?? TODO how to better test that an output directive is present.
        if (!this.froalaInit.observers.length) {
            this.createEditor();
        }
        else {
            this.generateManualController();
        }
    };
    FroalaEditorDirective.prototype.ngOnDestroy = function () {
        this.destroyEditor();
    };
    FroalaEditorDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[froalaEditor]',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FroalaEditorDirective; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    FroalaEditorDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    FroalaEditorDirective.propDecorators = {
        froalaEditor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        froalaModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        froalaModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        froalaInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return FroalaEditorDirective;
}());

//# sourceMappingURL=editor.directive.js.map

/***/ }),

/***/ "./node_modules/angular-froala-wysiwyg/editor/editor.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-froala-wysiwyg/editor/editor.module.js ***!
  \*********************************************************************/
/*! exports provided: FroalaEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FroalaEditorModule", function() { return FroalaEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.directive */ "./node_modules/angular-froala-wysiwyg/editor/editor.directive.js");


var FroalaEditorModule = /** @class */ (function () {
    function FroalaEditorModule() {
    }
    FroalaEditorModule.forRoot = function () {
        return { ngModule: FroalaEditorModule, providers: [] };
    };
    FroalaEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_editor_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorDirective"]],
                    exports: [_editor_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorDirective"]]
                },] },
    ];
    return FroalaEditorModule;
}());

//# sourceMappingURL=editor.module.js.map

/***/ }),

/***/ "./node_modules/angular-froala-wysiwyg/editor/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular-froala-wysiwyg/editor/index.js ***!
  \*************************************************************/
/*! exports provided: FroalaEditorDirective, FroalaEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.directive */ "./node_modules/angular-froala-wysiwyg/editor/editor.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaEditorDirective", function() { return _editor_directive__WEBPACK_IMPORTED_MODULE_0__["FroalaEditorDirective"]; });

/* harmony import */ var _editor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.module */ "./node_modules/angular-froala-wysiwyg/editor/editor.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaEditorModule", function() { return _editor_module__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-froala-wysiwyg/index.js":
/*!******************************************************!*\
  !*** ./node_modules/angular-froala-wysiwyg/index.js ***!
  \******************************************************/
/*! exports provided: FroalaEditorDirective, FroalaEditorModule, FroalaViewDirective, FroalaViewModule, FERootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FERootModule", function() { return FERootModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./node_modules/angular-froala-wysiwyg/editor/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./node_modules/angular-froala-wysiwyg/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaEditorDirective", function() { return _editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaEditorModule", function() { return _editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaViewDirective", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaViewModule", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewModule"]; });






var MODULES = [
    _editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"],
    _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewModule"]
];
var FERootModule = /** @class */ (function () {
    function FERootModule() {
    }
    FERootModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"].forRoot(),
                        _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewModule"].forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    return FERootModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-froala-wysiwyg/view/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular-froala-wysiwyg/view/index.js ***!
  \***********************************************************/
/*! exports provided: FroalaViewDirective, FroalaViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.directive */ "./node_modules/angular-froala-wysiwyg/view/view.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaViewDirective", function() { return _view_directive__WEBPACK_IMPORTED_MODULE_0__["FroalaViewDirective"]; });

/* harmony import */ var _view_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.module */ "./node_modules/angular-froala-wysiwyg/view/view.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FroalaViewModule", function() { return _view_module__WEBPACK_IMPORTED_MODULE_1__["FroalaViewModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-froala-wysiwyg/view/view.directive.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-froala-wysiwyg/view/view.directive.js ***!
  \********************************************************************/
/*! exports provided: FroalaViewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FroalaViewDirective", function() { return FroalaViewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FroalaViewDirective = /** @class */ (function () {
    function FroalaViewDirective(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    Object.defineProperty(FroalaViewDirective.prototype, "froalaView", {
        // update content model as it comes
        set: function (content) {
            this._element.innerHTML = content;
        },
        enumerable: true,
        configurable: true
    });
    FroalaViewDirective.prototype.ngAfterViewInit = function () {
        this.renderer.setElementClass(this._element, "fr-view", true);
    };
    FroalaViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[froalaView]'
                },] },
    ];
    /** @nocollapse */
    FroalaViewDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FroalaViewDirective.propDecorators = {
        froalaView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FroalaViewDirective;
}());

//# sourceMappingURL=view.directive.js.map

/***/ }),

/***/ "./node_modules/angular-froala-wysiwyg/view/view.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-froala-wysiwyg/view/view.module.js ***!
  \*****************************************************************/
/*! exports provided: FroalaViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FroalaViewModule", function() { return FroalaViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.directive */ "./node_modules/angular-froala-wysiwyg/view/view.directive.js");


var FroalaViewModule = /** @class */ (function () {
    function FroalaViewModule() {
    }
    FroalaViewModule.forRoot = function () {
        return { ngModule: FroalaViewModule, providers: [] };
    };
    FroalaViewModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_view_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaViewDirective"]],
                    exports: [_view_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaViewDirective"]]
                },] },
    ];
    return FroalaViewModule;
}());

//# sourceMappingURL=view.module.js.map

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Cropper.js v1.4.3
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-10-24T13:07:15.032Z
 */

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var IN_BROWSER = typeof window !== 'undefined';
var WINDOW = IN_BROWSER ? window : {};
var NAMESPACE = 'cropper'; // Actions

var ACTION_ALL = 'all';
var ACTION_CROP = 'crop';
var ACTION_MOVE = 'move';
var ACTION_ZOOM = 'zoom';
var ACTION_EAST = 'e';
var ACTION_WEST = 'w';
var ACTION_SOUTH = 's';
var ACTION_NORTH = 'n';
var ACTION_NORTH_EAST = 'ne';
var ACTION_NORTH_WEST = 'nw';
var ACTION_SOUTH_EAST = 'se';
var ACTION_SOUTH_WEST = 'sw'; // Classes

var CLASS_CROP = "".concat(NAMESPACE, "-crop");
var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

var DATA_ACTION = "".concat(NAMESPACE, "Action");
var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

var DRAG_MODE_CROP = 'crop';
var DRAG_MODE_MOVE = 'move';
var DRAG_MODE_NONE = 'none'; // Events

var EVENT_CROP = 'crop';
var EVENT_CROP_END = 'cropend';
var EVENT_CROP_MOVE = 'cropmove';
var EVENT_CROP_START = 'cropstart';
var EVENT_DBLCLICK = 'dblclick';
var EVENT_POINTER_DOWN = WINDOW.PointerEvent ? 'pointerdown' : 'touchstart mousedown';
var EVENT_POINTER_MOVE = WINDOW.PointerEvent ? 'pointermove' : 'touchmove mousemove';
var EVENT_POINTER_UP = WINDOW.PointerEvent ? 'pointerup pointercancel' : 'touchend touchcancel mouseup';
var EVENT_READY = 'ready';
var EVENT_RESIZE = 'resize';
var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
var EVENT_ZOOM = 'zoom'; // Mime types

var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

var REGEXP_ACTIONS = /^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
var REGEXP_TAG_NAME = /^(?:img|canvas)$/i;

var DEFAULTS = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: DRAG_MODE_CROP,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: '',
  // Re-render the cropper when resize the window
  responsive: true,
  // Restore the cropped area after resize the window
  restore: true,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,
  // Check the current image's Exif Orientation information
  checkOrientation: true,
  // Show the black modal
  modal: true,
  // Show the dashed lines for guiding
  guides: true,
  // Show the center indicator for guiding
  center: true,
  // Show the white modal to highlight the crop box
  highlight: true,
  // Show the grid background
  background: true,
  // Enable to crop the image automatically when initialize
  autoCrop: true,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: true,
  // Enable to rotate the image
  rotatable: true,
  // Enable to scale the image
  scalable: true,
  // Enable to zoom the image
  zoomable: true,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: true,
  // Enable to resize the crop box
  cropBoxResizable: true,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: 200,
  minContainerHeight: 100,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
};

var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

/**
 * Check if the given value is not a number.
 */

var isNaN = Number.isNaN || WINDOW.isNaN;
/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */

function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */

function isObject(value) {
  return _typeof(value) === 'object' && value !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */

function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (e) {
    return false;
  }
}
/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @returns {*} The original data.
 */

function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length)
    /* array-like */
    ) {
        var length = data.length;
        var i;

        for (i = 0; i < length; i += 1) {
          if (callback.call(data, data[i], i, data) === false) {
            break;
          }
        }
      } else if (isObject(data)) {
      Object.keys(data).forEach(function (key) {
        callback.call(data, data[key], key, data);
      });
    }
  }

  return data;
}
/**
 * Extend the given object.
 * @param {*} obj - The object to be extended.
 * @param {*} args - The rest objects which will be merged to the first object.
 * @returns {Object} The extended object.
 */

var assign = Object.assign || function assign(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (isObject(obj) && args.length > 0) {
    args.forEach(function (arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function (key) {
          obj[key] = arg[key];
        });
      }
    });
  }

  return obj;
};
var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
/**
 * Normalize decimal number.
 * Check out {@link http://0.30000000000000004.com/}
 * @param {number} value - The value to normalize.
 * @param {number} [times=100000000000] - The times for normalizing.
 * @returns {number} Returns the normalized number.
 */

function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}
var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
/**
 * Apply styles to the given element.
 * @param {Element} element - The target element.
 * @param {Object} styles - The styles for applying.
 */

function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function (value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += 'px';
    }

    style[property] = value;
  });
}
/**
 * Check if the given element has a special class.
 * @param {Element} element - The element to check.
 * @param {string} value - The class to search.
 * @returns {boolean} Returns `true` if the special class was found.
 */

function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
/**
 * Add classes to the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be added.
 */

function addClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      addClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.add(value);
    return;
  }

  var className = element.className.trim();

  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}
/**
 * Remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be removed.
 */

function removeClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      removeClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.remove(value);
    return;
  }

  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, '');
  }
}
/**
 * Add or remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be toggled.
 * @param {boolean} added - Add only.
 */

function toggleClass(element, value, added) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      toggleClass(elem, value, added);
    });
    return;
  } // IE10-11 doesn't support the second parameter of `classList.toggle`


  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
/**
 * Transform the given string from camelCase to kebab-case
 * @param {string} value - The value to transform.
 * @returns {string} The transformed value.
 */

function hyphenate(value) {
  return value.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
}
/**
 * Get data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to get.
 * @returns {string} The data value.
 */

function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }

  if (element.dataset) {
    return element.dataset[name];
  }

  return element.getAttribute("data-".concat(hyphenate(name)));
}
/**
 * Set data to the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to set.
 * @param {string} data - The data value.
 */

function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(hyphenate(name)), data);
  }
}
/**
 * Remove data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to remove.
 */

function removeData(element, name) {
  if (isObject(element[name])) {
    try {
      delete element[name];
    } catch (e) {
      element[name] = undefined;
    }
  } else if (element.dataset) {
    // #128 Safari not allows to delete dataset property
    try {
      delete element.dataset[name];
    } catch (e) {
      element.dataset[name] = undefined;
    }
  } else {
    element.removeAttribute("data-".concat(hyphenate(name)));
  }
}
var REGEXP_SPACES = /\s\s*/;

var onceSupported = function () {
  var supported = false;

  if (IN_BROWSER) {
    var once = false;

    var listener = function listener() {};

    var options = Object.defineProperty({}, 'once', {
      get: function get() {
        supported = true;
        return once;
      },

      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener('test', listener, options);
    WINDOW.removeEventListener('test', listener, options);
  }

  return supported;
}();
/**
 * Remove event listener from the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */


function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (!onceSupported) {
      var listeners = element.listeners;

      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];

        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }

        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }

    element.removeEventListener(event, handler, options);
  });
}
/**
 * Add event listener to the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */

function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners,
          listeners = _element$listeners === void 0 ? {} : _element$listeners;

      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        listener.apply(element, args);
      };

      if (!listeners[event]) {
        listeners[event] = {};
      }

      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }

      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }

    element.addEventListener(event, _handler, options);
  });
}
/**
 * Dispatch event on the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Object} data - The additional event data.
 * @returns {boolean} Indicate if the event is default prevented or not.
 */

function dispatchEvent(element, type, data) {
  var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, true, true, data);
  }

  return element.dispatchEvent(event);
}
/**
 * Get the offset base on the document.
 * @param {Element} element - The target element.
 * @returns {Object} The offset data.
 */

function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var location = WINDOW.location;
var REGEXP_ORIGINS = /^(https?:)\/\/([^:/?#]+):?(\d*)/i;
/**
 * Check if the given URL is a cross origin URL.
 * @param {string} url - The target URL.
 * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
 */

function isCrossOriginURL(url) {
  var parts = url.match(REGEXP_ORIGINS);
  return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}
/**
 * Add timestamp to the given URL.
 * @param {string} url - The target URL.
 * @returns {string} The result URL.
 */

function addTimestamp(url) {
  var timestamp = "timestamp=".concat(new Date().getTime());
  return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
}
/**
 * Get transforms base on the given object.
 * @param {Object} obj - The target object.
 * @returns {string} A string contains transform values.
 */

function getTransforms(_ref) {
  var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;
  var values = [];

  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }

  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  } // Rotate should come first before scale to match orientation transform


  if (isNumber(rotate) && rotate !== 0) {
    values.push("rotate(".concat(rotate, "deg)"));
  }

  if (isNumber(scaleX) && scaleX !== 1) {
    values.push("scaleX(".concat(scaleX, ")"));
  }

  if (isNumber(scaleY) && scaleY !== 1) {
    values.push("scaleY(".concat(scaleY, ")"));
  }

  var transform = values.length ? values.join(' ') : 'none';
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform: transform
  };
}
/**
 * Get the max ratio of a group of pointers.
 * @param {string} pointers - The target pointers.
 * @returns {number} The result ratio.
 */

function getMaxZoomRatio(pointers) {
  var pointers2 = assign({}, pointers);
  var ratios = [];
  forEach(pointers, function (pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function (pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      ratios.push(ratio);
    });
  });
  ratios.sort(function (a, b) {
    return Math.abs(a) < Math.abs(b);
  });
  return ratios[0];
}
/**
 * Get a pointer from an event object.
 * @param {Object} event - The target event object.
 * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
 * @returns {Object} The result pointer contains start and/or end point coordinates.
 */

function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : assign({
    startX: pageX,
    startY: pageY
  }, end);
}
/**
 * Get the center point coordinate of a group of pointers.
 * @param {Object} pointers - The target pointers.
 * @returns {Object} The center point coordinate.
 */

function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function (_ref3) {
    var startX = _ref3.startX,
        startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX: pageX,
    pageY: pageY
  };
}
/**
 * Check if the given value is a finite number.
 */

var isFinite = Number.isFinite || WINDOW.isFinite;
/**
 * Get the max sizes in a rectangle under the given aspect ratio.
 * @param {Object} data - The original sizes.
 * @param {string} [type='contain'] - The adjust type.
 * @returns {Object} The result sizes.
 */

function getAdjustedSizes(_ref4) // or 'cover'
{
  var aspectRatio = _ref4.aspectRatio,
      height = _ref4.height,
      width = _ref4.width;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';

  var isValidNumber = function isValidNumber(value) {
    return isFinite(value) && value > 0;
  };

  if (isValidNumber(width) && isValidNumber(height)) {
    var adjustedWidth = height * aspectRatio;

    if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }
  } else if (isValidNumber(width)) {
    height = width / aspectRatio;
  } else if (isValidNumber(height)) {
    width = height * aspectRatio;
  }

  return {
    width: width,
    height: height
  };
}
/**
 * Get the new sizes of a rectangle after rotated.
 * @param {Object} data - The original sizes.
 * @returns {Object} The result sizes.
 */

function getRotatedSizes(_ref5) {
  var width = _ref5.width,
      height = _ref5.height,
      degree = _ref5.degree;
  degree = Math.abs(degree) % 180;

  if (degree === 90) {
    return {
      width: height,
      height: width
    };
  }

  var arc = degree % 90 * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var newWidth = width * cosArc + height * sinArc;
  var newHeight = width * sinArc + height * cosArc;
  return degree > 90 ? {
    width: newHeight,
    height: newWidth
  } : {
    width: newWidth,
    height: newHeight
  };
}
/**
 * Get a canvas which drew the given image.
 * @param {HTMLImageElement} image - The image for drawing.
 * @param {Object} imageData - The image data.
 * @param {Object} canvasData - The canvas data.
 * @param {Object} options - The options.
 * @returns {HTMLCanvasElement} The result canvas.
 */

function getSourceCanvas(image, _ref6, _ref7, _ref8) {
  var imageAspectRatio = _ref6.aspectRatio,
      imageNaturalWidth = _ref6.naturalWidth,
      imageNaturalHeight = _ref6.naturalHeight,
      _ref6$rotate = _ref6.rotate,
      rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
      _ref6$scaleX = _ref6.scaleX,
      scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
      _ref6$scaleY = _ref6.scaleY,
      scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
  var aspectRatio = _ref7.aspectRatio,
      naturalWidth = _ref7.naturalWidth,
      naturalHeight = _ref7.naturalHeight;
  var _ref8$fillColor = _ref8.fillColor,
      fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
      _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
      imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
      _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
      imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
      _ref8$maxHeight = _ref8.maxHeight,
      maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
      _ref8$minWidth = _ref8.minWidth,
      minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
      _ref8$minHeight = _ref8.minHeight,
      minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var maxSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var minSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
  var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
  // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

  var destMaxSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var destMinSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
  var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
  var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
  canvas.width = normalizeDecimalNumber(width);
  canvas.height = normalizeDecimalNumber(height);
  context.fillStyle = fillColor;
  context.fillRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(rotate * Math.PI / 180);
  context.scale(scaleX, scaleY);
  context.imageSmoothingEnabled = imageSmoothingEnabled;
  context.imageSmoothingQuality = imageSmoothingQuality;
  context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
    return Math.floor(normalizeDecimalNumber(param));
  }))));
  context.restore();
  return canvas;
}
var fromCharCode = String.fromCharCode;
/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */

function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i;
  length += start;

  for (i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}
var REGEXP_DATA_URL_HEAD = /^data:.*,/;
/**
 * Transform Data URL to array buffer.
 * @param {string} dataURL - The Data URL to transform.
 * @returns {ArrayBuffer} The result array buffer.
 */

function dataURLToArrayBuffer(dataURL) {
  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
  var binary = atob(base64);
  var arrayBuffer = new ArrayBuffer(binary.length);
  var uint8 = new Uint8Array(arrayBuffer);
  forEach(uint8, function (value, i) {
    uint8[i] = binary.charCodeAt(i);
  });
  return arrayBuffer;
}
/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */

function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var chunks = [];
  var chunkSize = 8192;
  var uint8 = new Uint8Array(arrayBuffer);

  while (uint8.length > 0) {
    chunks.push(fromCharCode.apply(void 0, _toConsumableArray(uint8.subarray(0, chunkSize))));
    uint8 = uint8.subarray(chunkSize);
  }

  return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
}
/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */

function resetAndGetOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation; // Ignores range error when the image does not have correct Exif information

  try {
    var littleEndian;
    var app1Start;
    var ifdStart; // Only handle JPEG image (start by 0xFFD8)

    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
      var length = dataView.byteLength;
      var offset = 2;

      while (offset + 1 < length) {
        if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
          app1Start = offset;
          break;
        }

        offset += 1;
      }
    }

    if (app1Start) {
      var exifIDCode = app1Start + 4;
      var tiffOffset = app1Start + 10;

      if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
        var endianness = dataView.getUint16(tiffOffset);
        littleEndian = endianness === 0x4949;

        if (littleEndian || endianness === 0x4D4D
        /* bigEndian */
        ) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
      }
    }

    if (ifdStart) {
      var _length = dataView.getUint16(ifdStart, littleEndian);

      var _offset;

      var i;

      for (i = 0; i < _length; i += 1) {
        _offset = ifdStart + i * 12 + 2;

        if (dataView.getUint16(_offset, littleEndian) === 0x0112
        /* Orientation */
        ) {
            // 8 is the offset of the current tag's value
            _offset += 8; // Get the original orientation value

            orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
      }
    }
  } catch (e) {
    orientation = 1;
  }

  return orientation;
}
/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */

function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;

  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;
    // Rotate left 180°

    case 3:
      rotate = -180;
      break;
    // Flip vertical

    case 4:
      scaleY = -1;
      break;
    // Flip vertical and rotate right 90°

    case 5:
      rotate = 90;
      scaleY = -1;
      break;
    // Rotate right 90°

    case 6:
      rotate = 90;
      break;
    // Flip horizontal and rotate right 90°

    case 7:
      rotate = 90;
      scaleX = -1;
      break;
    // Rotate left 90°

    case 8:
      rotate = -90;
      break;

    default:
  }

  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var render = {
  render: function render() {
    this.initContainer();
    this.initCanvas();
    this.initCropBox();
    this.renderCanvas();

    if (this.cropped) {
      this.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var element = this.element,
        options = this.options,
        container = this.container,
        cropper = this.cropper;
    addClass(cropper, CLASS_HIDDEN);
    removeClass(element, CLASS_HIDDEN);
    var containerData = {
      width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
      height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
    };
    this.containerData = containerData;
    setStyle(cropper, {
      width: containerData.width,
      height: containerData.height
    });
    addClass(element, CLASS_HIDDEN);
    removeClass(cropper, CLASS_HIDDEN);
  },
  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var containerData = this.containerData,
        imageData = this.imageData;
    var viewMode = this.options.viewMode;
    var rotated = Math.abs(imageData.rotate) % 180 === 90;
    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerData.width;
    var canvasHeight = containerData.height;

    if (containerData.height * aspectRatio > containerData.width) {
      if (viewMode === 3) {
        canvasWidth = containerData.height * aspectRatio;
      } else {
        canvasHeight = containerData.width / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerData.width / aspectRatio;
    } else {
      canvasWidth = containerData.height * aspectRatio;
    }

    var canvasData = {
      aspectRatio: aspectRatio,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      width: canvasWidth,
      height: canvasHeight
    };
    canvasData.left = (containerData.width - canvasWidth) / 2;
    canvasData.top = (containerData.height - canvasHeight) / 2;
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    this.canvasData = canvasData;
    this.limited = viewMode === 1 || viewMode === 2;
    this.limitCanvas(true, true);
    this.initialImageData = assign({}, imageData);
    this.initialCanvasData = assign({}, canvasData);
  },
  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var viewMode = options.viewMode;
    var aspectRatio = canvasData.aspectRatio;
    var cropped = this.cropped && cropBoxData;

    if (sizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;

      if (viewMode > 1) {
        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

        if (viewMode === 3) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      } else if (viewMode > 0) {
        if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBoxData.width;
          minCanvasHeight = cropBoxData.height;

          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: minCanvasWidth,
        height: minCanvasHeight
      });

      minCanvasWidth = _getAdjustedSizes.width;
      minCanvasHeight = _getAdjustedSizes.height;
      canvasData.minWidth = minCanvasWidth;
      canvasData.minHeight = minCanvasHeight;
      canvasData.maxWidth = Infinity;
      canvasData.maxHeight = Infinity;
    }

    if (positionLimited) {
      if (viewMode > (cropped ? 0 : 1)) {
        var newCanvasLeft = containerData.width - canvasData.width;
        var newCanvasTop = containerData.height - canvasData.height;
        canvasData.minLeft = Math.min(0, newCanvasLeft);
        canvasData.minTop = Math.min(0, newCanvasTop);
        canvasData.maxLeft = Math.max(0, newCanvasLeft);
        canvasData.maxTop = Math.max(0, newCanvasTop);

        if (cropped && this.limited) {
          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
          canvasData.maxLeft = cropBoxData.left;
          canvasData.maxTop = cropBoxData.top;

          if (viewMode === 2) {
            if (canvasData.width >= containerData.width) {
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
            }

            if (canvasData.height >= containerData.height) {
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvasData.minLeft = -canvasData.width;
        canvasData.minTop = -canvasData.height;
        canvasData.maxLeft = containerData.width;
        canvasData.maxTop = containerData.height;
      }
    }
  },
  renderCanvas: function renderCanvas(changed, transformed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;

    if (transformed) {
      var _getRotatedSizes = getRotatedSizes({
        width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
        height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
        degree: imageData.rotate || 0
      }),
          naturalWidth = _getRotatedSizes.width,
          naturalHeight = _getRotatedSizes.height;

      var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
      var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
      canvasData.left -= (width - canvasData.width) / 2;
      canvasData.top -= (height - canvasData.height) / 2;
      canvasData.width = width;
      canvasData.height = height;
      canvasData.aspectRatio = naturalWidth / naturalHeight;
      canvasData.naturalWidth = naturalWidth;
      canvasData.naturalHeight = naturalHeight;
      this.limitCanvas(true, false);
    }

    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
      canvasData.left = canvasData.oldLeft;
    }

    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
      canvasData.top = canvasData.oldTop;
    }

    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    this.limitCanvas(false, true);
    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    setStyle(this.canvas, assign({
      width: canvasData.width,
      height: canvasData.height
    }, getTransforms({
      translateX: canvasData.left,
      translateY: canvasData.top
    })));
    this.renderImage(changed);

    if (this.cropped && this.limited) {
      this.limitCropBox(true, true);
    }
  },
  renderImage: function renderImage(changed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;
    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
    assign(imageData, {
      width: width,
      height: height,
      left: (canvasData.width - width) / 2,
      top: (canvasData.height - height) / 2
    });
    setStyle(this.image, assign({
      width: imageData.width,
      height: imageData.height
    }, getTransforms(assign({
      translateX: imageData.left,
      translateY: imageData.top
    }, imageData))));

    if (changed) {
      this.output();
    }
  },
  initCropBox: function initCropBox() {
    var options = this.options,
        canvasData = this.canvasData;
    var aspectRatio = options.aspectRatio || options.initialAspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBoxData = {
      width: canvasData.width,
      height: canvasData.height
    };

    if (aspectRatio) {
      if (canvasData.height * aspectRatio > canvasData.width) {
        cropBoxData.height = cropBoxData.width / aspectRatio;
      } else {
        cropBoxData.width = cropBoxData.height * aspectRatio;
      }
    }

    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true); // Initialize auto crop area

    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    this.initialCropBoxData = assign({}, cropBoxData);
  },
  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData,
        limited = this.limited;
    var aspectRatio = options.aspectRatio;

    if (sizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
      var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }

        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      } // The minWidth/Height must be less than maxWidth/Height


      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }

    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, canvasData.left);
        cropBoxData.minTop = Math.max(0, canvasData.top);
        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var options = this.options,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData;

    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }

    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }

    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    this.limitCropBox(false, true);
    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;

    if (options.movable && options.cropBoxMovable) {
      // Turn to move the canvas when the crop box is equal to the container
      setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
    }

    setStyle(this.cropBox, assign({
      width: cropBoxData.width,
      height: cropBoxData.height
    }, getTransforms({
      translateX: cropBoxData.left,
      translateY: cropBoxData.top
    })));

    if (this.cropped && this.limited) {
      this.limitCanvas(true, true);
    }

    if (!this.disabled) {
      this.output();
    }
  },
  output: function output() {
    this.preview();
    dispatchEvent(this.element, EVENT_CROP, this.getData());
  }
};

var preview = {
  initPreview: function initPreview() {
    var crossOrigin = this.crossOrigin;
    var preview = this.options.preview;
    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var image = document.createElement('img');

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    image.src = url;
    this.viewBox.appendChild(image);
    this.viewBoxImage = image;

    if (!preview) {
      return;
    }

    var previews = preview;

    if (typeof preview === 'string') {
      previews = this.element.ownerDocument.querySelectorAll(preview);
    } else if (preview.querySelector) {
      previews = [preview];
    }

    this.previews = previews;
    forEach(previews, function (el) {
      var img = document.createElement('img'); // Save the original size for recover

      setData(el, DATA_PREVIEW, {
        width: el.offsetWidth,
        height: el.offsetHeight,
        html: el.innerHTML
      });

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;
      /**
       * Override img element styles
       * Add `display:block` to avoid margin top issue
       * Add `height:auto` to override `height` attribute on IE8
       * (Occur only when margin-top <= -height)
       */

      img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
      el.innerHTML = '';
      el.appendChild(img);
    });
  },
  resetPreview: function resetPreview() {
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      setStyle(element, {
        width: data.width,
        height: data.height
      });
      element.innerHTML = data.html;
      removeData(element, DATA_PREVIEW);
    });
  },
  preview: function preview() {
    var imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var cropBoxWidth = cropBoxData.width,
        cropBoxHeight = cropBoxData.height;
    var width = imageData.width,
        height = imageData.height;
    var left = cropBoxData.left - canvasData.left - imageData.left;
    var top = cropBoxData.top - canvasData.top - imageData.top;

    if (!this.cropped || this.disabled) {
      return;
    }

    setStyle(this.viewBoxImage, assign({
      width: width,
      height: height
    }, getTransforms(assign({
      translateX: -left,
      translateY: -top
    }, imageData))));
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;

      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }

      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }

      setStyle(element, {
        width: newWidth,
        height: newHeight
      });
      setStyle(element.getElementsByTagName('img')[0], assign({
        width: width * ratio,
        height: height * ratio
      }, getTransforms(assign({
        translateX: -left * ratio,
        translateY: -top * ratio
      }, imageData))));
    });
  }
};

var events = {
  bind: function bind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;

    if (isFunction(options.cropstart)) {
      addListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      addListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      addListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      addListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      addListener(element, EVENT_ZOOM, options.zoom);
    }

    addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

    if (options.zoomable && options.zoomOnWheel) {
      addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this));
    }

    if (options.toggleDragModeOnDblclick) {
      addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }

    addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
    addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

    if (options.responsive) {
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    }
  },
  unbind: function unbind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;

    if (isFunction(options.cropstart)) {
      removeListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      removeListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      removeListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      removeListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      removeListener(element, EVENT_ZOOM, options.zoom);
    }

    removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

    if (options.zoomable && options.zoomOnWheel) {
      removeListener(cropper, EVENT_WHEEL, this.onWheel);
    }

    if (options.toggleDragModeOnDblclick) {
      removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
    }

    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

    if (options.responsive) {
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  }
};

var handlers = {
  resize: function resize() {
    var options = this.options,
        container = this.container,
        containerData = this.containerData;
    var minContainerWidth = Number(options.minContainerWidth) || 200;
    var minContainerHeight = Number(options.minContainerHeight) || 100;

    if (this.disabled || containerData.width <= minContainerWidth || containerData.height <= minContainerHeight) {
      return;
    }

    var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

    if (ratio !== 1 || container.offsetHeight !== containerData.height) {
      var canvasData;
      var cropBoxData;

      if (options.restore) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
      }

      this.render();

      if (options.restore) {
        this.setCanvasData(forEach(canvasData, function (n, i) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData(forEach(cropBoxData, function (n, i) {
          cropBoxData[i] = n * ratio;
        }));
      }
    }
  },
  dblclick: function dblclick() {
    if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
      return;
    }

    this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
  },
  wheel: function wheel(e) {
    var _this = this;

    var ratio = Number(this.options.wheelZoomRatio) || 0.1;
    var delta = 1;

    if (this.disabled) {
      return;
    }

    e.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

    if (this.wheeling) {
      return;
    }

    this.wheeling = true;
    setTimeout(function () {
      _this.wheeling = false;
    }, 50);

    if (e.deltaY) {
      delta = e.deltaY > 0 ? 1 : -1;
    } else if (e.wheelDelta) {
      delta = -e.wheelDelta / 120;
    } else if (e.detail) {
      delta = e.detail > 0 ? 1 : -1;
    }

    this.zoom(-delta * ratio, e);
  },
  cropStart: function cropStart(e) {
    if (this.disabled) {
      return;
    }

    var options = this.options,
        pointers = this.pointers;
    var action;

    if (e.changedTouches) {
      // Handle touch event
      forEach(e.changedTouches, function (touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      // Handle mouse event and pointer event
      pointers[e.pointerId || 0] = getPointer(e);
    }

    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = ACTION_ZOOM;
    } else {
      action = getData(e.target, DATA_ACTION);
    }

    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }

    if (dispatchEvent(this.element, EVENT_CROP_START, {
      originalEvent: e,
      action: action
    }) === false) {
      return;
    } // This line is required for preventing page zooming in iOS browsers


    e.preventDefault();
    this.action = action;
    this.cropping = false;

    if (action === ACTION_CROP) {
      this.cropping = true;
      addClass(this.dragBox, CLASS_MODAL);
    }
  },
  cropMove: function cropMove(e) {
    var action = this.action;

    if (this.disabled || !action) {
      return;
    }

    var pointers = this.pointers;
    e.preventDefault();

    if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
      originalEvent: e,
      action: action
    }) === false) {
      return;
    }

    if (e.changedTouches) {
      forEach(e.changedTouches, function (touch) {
        // The first parameter should not be undefined (#432)
        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign(pointers[e.pointerId || 0] || {}, getPointer(e, true));
    }

    this.change(e);
  },
  cropEnd: function cropEnd(e) {
    if (this.disabled) {
      return;
    }

    var action = this.action,
        pointers = this.pointers;

    if (e.changedTouches) {
      forEach(e.changedTouches, function (touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[e.pointerId || 0];
    }

    if (!action) {
      return;
    }

    e.preventDefault();

    if (!Object.keys(pointers).length) {
      this.action = '';
    }

    if (this.cropping) {
      this.cropping = false;
      toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
    }

    dispatchEvent(this.element, EVENT_CROP_END, {
      originalEvent: e,
      action: action
    });
  }
};

var change = {
  change: function change(e) {
    var options = this.options,
        canvasData = this.canvasData,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData,
        pointers = this.pointers;
    var action = this.action;
    var aspectRatio = options.aspectRatio;
    var left = cropBoxData.left,
        top = cropBoxData.top,
        width = cropBoxData.width,
        height = cropBoxData.height;
    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = containerData.width;
    var maxHeight = containerData.height;
    var renderable = true;
    var offset; // Locking aspect ratio in "free mode" by holding shift key

    if (!aspectRatio && e.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }

    if (this.limited) {
      minLeft = cropBoxData.minLeft;
      minTop = cropBoxData.minTop;
      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    }

    var pointer = pointers[Object.keys(pointers)[0]];
    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };

    var check = function check(side) {
      switch (side) {
        case ACTION_EAST:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }

          break;

        case ACTION_WEST:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }

          break;

        case ACTION_NORTH:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }

          break;

        case ACTION_SOUTH:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }

          break;

        default:
      }
    };

    switch (action) {
      // Move crop box
      case ACTION_ALL:
        left += range.x;
        top += range.y;
        break;
      // Resize crop box

      case ACTION_EAST:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(ACTION_EAST);
        width += range.x;

        if (width < 0) {
          action = ACTION_WEST;
          width = -width;
          left -= width;
        }

        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }

        break;

      case ACTION_NORTH:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(ACTION_NORTH);
        height -= range.y;
        top += range.y;

        if (height < 0) {
          action = ACTION_SOUTH;
          height = -height;
          top -= height;
        }

        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }

        break;

      case ACTION_WEST:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(ACTION_WEST);
        width -= range.x;
        left += range.x;

        if (width < 0) {
          action = ACTION_EAST;
          width = -width;
          left -= width;
        }

        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }

        break;

      case ACTION_SOUTH:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(ACTION_SOUTH);
        height += range.y;

        if (height < 0) {
          action = ACTION_NORTH;
          height = -height;
          top -= height;
        }

        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }

        break;

      case ACTION_NORTH_EAST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          check(ACTION_NORTH);
          check(ACTION_EAST);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_NORTH_WEST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += cropBoxData.width - width;
        } else {
          check(ACTION_NORTH);
          check(ACTION_WEST);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_SOUTH_WEST:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_WEST);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_SOUTH_EAST:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_EAST);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          top -= height;
        }

        break;
      // Move canvas

      case ACTION_MOVE:
        this.move(range.x, range.y);
        renderable = false;
        break;
      // Zoom canvas

      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), e);
        renderable = false;
        break;
      // Create crop box

      case ACTION_CROP:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }

        offset = getOffset(this.cropper);
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;

        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }

        if (range.y < 0) {
          top -= height;
        } // Show the crop box if is hidden


        if (!this.cropped) {
          removeClass(this.cropBox, CLASS_HIDDEN);
          this.cropped = true;

          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }

        break;

      default:
    }

    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.renderCropBox();
    } // Override


    forEach(pointers, function (p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
};

var methods = {
  // Show the crop box manually
  crop: function crop() {
    if (this.ready && !this.cropped && !this.disabled) {
      this.cropped = true;
      this.limitCropBox(true, true);

      if (this.options.modal) {
        addClass(this.dragBox, CLASS_MODAL);
      }

      removeClass(this.cropBox, CLASS_HIDDEN);
      this.setCropBoxData(this.initialCropBoxData);
    }

    return this;
  },
  // Reset the image and crop box to their initial states
  reset: function reset() {
    if (this.ready && !this.disabled) {
      this.imageData = assign({}, this.initialImageData);
      this.canvasData = assign({}, this.initialCanvasData);
      this.cropBoxData = assign({}, this.initialCropBoxData);
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    }

    return this;
  },
  // Clear the crop box
  clear: function clear() {
    if (this.cropped && !this.disabled) {
      assign(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas(true, true); // Render canvas after crop box rendered

      this.renderCanvas();
      removeClass(this.dragBox, CLASS_MODAL);
      addClass(this.cropBox, CLASS_HIDDEN);
    }

    return this;
  },

  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function replace(url) {
    var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!this.disabled && url) {
      if (this.isImg) {
        this.element.src = url;
      }

      if (hasSameSize) {
        this.url = url;
        this.image.src = url;

        if (this.ready) {
          this.viewBoxImage.src = url;
          forEach(this.previews, function (element) {
            element.getElementsByTagName('img')[0].src = url;
          });
        }
      } else {
        if (this.isImg) {
          this.replaced = true;
        }

        this.options.data = null;
        this.uncreate();
        this.load(url);
      }
    }

    return this;
  },
  // Enable (unfreeze) the cropper
  enable: function enable() {
    if (this.ready && this.disabled) {
      this.disabled = false;
      removeClass(this.cropper, CLASS_DISABLED);
    }

    return this;
  },
  // Disable (freeze) the cropper
  disable: function disable() {
    if (this.ready && !this.disabled) {
      this.disabled = true;
      addClass(this.cropper, CLASS_DISABLED);
    }

    return this;
  },

  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function destroy() {
    var element = this.element;

    if (!element[NAMESPACE]) {
      return this;
    }

    element[NAMESPACE] = undefined;

    if (this.isImg && this.replaced) {
      element.src = this.originalUrl;
    }

    this.uncreate();
    return this;
  },

  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function move(offsetX) {
    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
    var _this$canvasData = this.canvasData,
        left = _this$canvasData.left,
        top = _this$canvasData.top;
    return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
  },

  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function moveTo(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var canvasData = this.canvasData;
    var changed = false;
    x = Number(x);
    y = Number(y);

    if (this.ready && !this.disabled && this.options.movable) {
      if (isNumber(x)) {
        canvasData.left = x;
        changed = true;
      }

      if (isNumber(y)) {
        canvasData.top = y;
        changed = true;
      }

      if (changed) {
        this.renderCanvas(true);
      }
    }

    return this;
  },

  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function zoom(ratio, _originalEvent) {
    var canvasData = this.canvasData;
    ratio = Number(ratio);

    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }

    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
  },

  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
    var options = this.options,
        canvasData = this.canvasData;
    var width = canvasData.width,
        height = canvasData.height,
        naturalWidth = canvasData.naturalWidth,
        naturalHeight = canvasData.naturalHeight;
    ratio = Number(ratio);

    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;

      if (dispatchEvent(this.element, EVENT_ZOOM, {
        ratio: ratio,
        oldRatio: width / naturalWidth,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }

      if (_originalEvent) {
        var pointers = this.pointers;
        var offset = getOffset(this.cropper);
        var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        }; // Zoom from the triggering point of the event

        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
      } else {
        // Zoom from the center of the canvas
        canvasData.left -= (newWidth - width) / 2;
        canvasData.top -= (newHeight - height) / 2;
      }

      canvasData.width = newWidth;
      canvasData.height = newHeight;
      this.renderCanvas(true);
    }

    return this;
  },

  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function rotate(degree) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
  },

  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function rotateTo(degree) {
    degree = Number(degree);

    if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
      this.imageData.rotate = degree % 360;
      this.renderCanvas(true, true);
    }

    return this;
  },

  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function scaleX(_scaleX) {
    var scaleY = this.imageData.scaleY;
    return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
  },

  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function scaleY(_scaleY) {
    var scaleX = this.imageData.scaleX;
    return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
  },

  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function scale(scaleX) {
    var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
    var imageData = this.imageData;
    var transformed = false;
    scaleX = Number(scaleX);
    scaleY = Number(scaleY);

    if (this.ready && !this.disabled && this.options.scalable) {
      if (isNumber(scaleX)) {
        imageData.scaleX = scaleX;
        transformed = true;
      }

      if (isNumber(scaleY)) {
        imageData.scaleY = scaleY;
        transformed = true;
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }
    }

    return this;
  },

  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function getData$$1() {
    var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var data;

    if (this.ready && this.cropped) {
      data = {
        x: cropBoxData.left - canvasData.left,
        y: cropBoxData.top - canvasData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
      var ratio = imageData.width / imageData.naturalWidth;
      forEach(data, function (n, i) {
        data[i] = n / ratio;
      });

      if (rounded) {
        // In case rounding off leads to extra 1px in right or bottom border
        // we should round the top-left corner and the dimension (#343).
        var bottom = Math.round(data.y + data.height);
        var right = Math.round(data.x + data.width);
        data.x = Math.round(data.x);
        data.y = Math.round(data.y);
        data.width = right - data.x;
        data.height = bottom - data.y;
      }
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }

    if (options.rotatable) {
      data.rotate = imageData.rotate || 0;
    }

    if (options.scalable) {
      data.scaleX = imageData.scaleX || 1;
      data.scaleY = imageData.scaleY || 1;
    }

    return data;
  },

  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function setData$$1(data) {
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData;
    var cropBoxData = {};

    if (this.ready && !this.disabled && isPlainObject(data)) {
      var transformed = false;

      if (options.rotatable) {
        if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
          imageData.rotate = data.rotate;
          transformed = true;
        }
      }

      if (options.scalable) {
        if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
          imageData.scaleX = data.scaleX;
          transformed = true;
        }

        if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
          imageData.scaleY = data.scaleY;
          transformed = true;
        }
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }

      var ratio = imageData.width / imageData.naturalWidth;

      if (isNumber(data.x)) {
        cropBoxData.left = data.x * ratio + canvasData.left;
      }

      if (isNumber(data.y)) {
        cropBoxData.top = data.y * ratio + canvasData.top;
      }

      if (isNumber(data.width)) {
        cropBoxData.width = data.width * ratio;
      }

      if (isNumber(data.height)) {
        cropBoxData.height = data.height * ratio;
      }

      this.setCropBoxData(cropBoxData);
    }

    return this;
  },

  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function getContainerData() {
    return this.ready ? assign({}, this.containerData) : {};
  },

  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function getImageData() {
    return this.sized ? assign({}, this.imageData) : {};
  },

  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function getCanvasData() {
    var canvasData = this.canvasData;
    var data = {};

    if (this.ready) {
      forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
        data[n] = canvasData[n];
      });
    }

    return data;
  },

  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function setCanvasData(data) {
    var canvasData = this.canvasData;
    var aspectRatio = canvasData.aspectRatio;

    if (this.ready && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        canvasData.left = data.left;
      }

      if (isNumber(data.top)) {
        canvasData.top = data.top;
      }

      if (isNumber(data.width)) {
        canvasData.width = data.width;
        canvasData.height = data.width / aspectRatio;
      } else if (isNumber(data.height)) {
        canvasData.height = data.height;
        canvasData.width = data.height * aspectRatio;
      }

      this.renderCanvas(true);
    }

    return this;
  },

  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function getCropBoxData() {
    var cropBoxData = this.cropBoxData;
    var data;

    if (this.ready && this.cropped) {
      data = {
        left: cropBoxData.left,
        top: cropBoxData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
    }

    return data || {};
  },

  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function setCropBoxData(data) {
    var cropBoxData = this.cropBoxData;
    var aspectRatio = this.options.aspectRatio;
    var widthChanged;
    var heightChanged;

    if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        cropBoxData.left = data.left;
      }

      if (isNumber(data.top)) {
        cropBoxData.top = data.top;
      }

      if (isNumber(data.width) && data.width !== cropBoxData.width) {
        widthChanged = true;
        cropBoxData.width = data.width;
      }

      if (isNumber(data.height) && data.height !== cropBoxData.height) {
        heightChanged = true;
        cropBoxData.height = data.height;
      }

      if (aspectRatio) {
        if (widthChanged) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else if (heightChanged) {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.renderCropBox();
    }

    return this;
  },

  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function getCroppedCanvas() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.ready || !window.HTMLCanvasElement) {
      return null;
    }

    var canvasData = this.canvasData;
    var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

    if (!this.cropped) {
      return source;
    }

    var _this$getData = this.getData(),
        initialX = _this$getData.x,
        initialY = _this$getData.y,
        initialWidth = _this$getData.width,
        initialHeight = _this$getData.height;

    var ratio = source.width / Math.floor(canvasData.naturalWidth);

    if (ratio !== 1) {
      initialX *= ratio;
      initialY *= ratio;
      initialWidth *= ratio;
      initialHeight *= ratio;
    }

    var aspectRatio = initialWidth / initialHeight;
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.maxWidth || Infinity,
      height: options.maxHeight || Infinity
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.minWidth || 0,
      height: options.minHeight || 0
    }, 'cover');

    var _getAdjustedSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.width || (ratio !== 1 ? source.width : initialWidth),
      height: options.height || (ratio !== 1 ? source.height : initialHeight)
    }),
        width = _getAdjustedSizes.width,
        height = _getAdjustedSizes.height;

    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = options.fillColor || 'transparent';
    context.fillRect(0, 0, width, height);
    var _options$imageSmoothi = options.imageSmoothingEnabled,
        imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
        imageSmoothingQuality = options.imageSmoothingQuality;
    context.imageSmoothingEnabled = imageSmoothingEnabled;

    if (imageSmoothingQuality) {
      context.imageSmoothingQuality = imageSmoothingQuality;
    } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


    var sourceWidth = source.width;
    var sourceHeight = source.height; // Source canvas parameters

    var srcX = initialX;
    var srcY = initialY;
    var srcWidth;
    var srcHeight; // Destination canvas parameters

    var dstX;
    var dstY;
    var dstWidth;
    var dstHeight;

    if (srcX <= -initialWidth || srcX > sourceWidth) {
      srcX = 0;
      srcWidth = 0;
      dstX = 0;
      dstWidth = 0;
    } else if (srcX <= 0) {
      dstX = -srcX;
      srcX = 0;
      srcWidth = Math.min(sourceWidth, initialWidth + srcX);
      dstWidth = srcWidth;
    } else if (srcX <= sourceWidth) {
      dstX = 0;
      srcWidth = Math.min(initialWidth, sourceWidth - srcX);
      dstWidth = srcWidth;
    }

    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
      srcY = 0;
      srcHeight = 0;
      dstY = 0;
      dstHeight = 0;
    } else if (srcY <= 0) {
      dstY = -srcY;
      srcY = 0;
      srcHeight = Math.min(sourceHeight, initialHeight + srcY);
      dstHeight = srcHeight;
    } else if (srcY <= sourceHeight) {
      dstY = 0;
      srcHeight = Math.min(initialHeight, sourceHeight - srcY);
      dstHeight = srcHeight;
    }

    var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

    if (dstWidth > 0 && dstHeight > 0) {
      var scale = width / initialWidth;
      params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
    } // All the numerical parameters should be integer for `drawImage`
    // https://github.com/fengyuanchen/cropper/issues/476


    context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    return canvas;
  },

  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var options = this.options;

    if (!this.disabled && !isUndefined(aspectRatio)) {
      // 0 -> NaN
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;

      if (this.ready) {
        this.initCropBox();

        if (this.cropped) {
          this.renderCropBox();
        }
      }
    }

    return this;
  },

  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function setDragMode(mode) {
    var options = this.options,
        dragBox = this.dragBox,
        face = this.face;

    if (this.ready && !this.disabled) {
      var croppable = mode === DRAG_MODE_CROP;
      var movable = options.movable && mode === DRAG_MODE_MOVE;
      mode = croppable || movable ? mode : DRAG_MODE_NONE;
      options.dragMode = mode;
      setData(dragBox, DATA_ACTION, mode);
      toggleClass(dragBox, CLASS_CROP, croppable);
      toggleClass(dragBox, CLASS_MOVE, movable);

      if (!options.cropBoxMovable) {
        // Sync drag mode to crop box when it is not movable
        setData(face, DATA_ACTION, mode);
        toggleClass(face, CLASS_CROP, croppable);
        toggleClass(face, CLASS_MOVE, movable);
      }
    }

    return this;
  }
};

var AnotherCropper = WINDOW.Cropper;

var Cropper =
/*#__PURE__*/
function () {
  /**
   * Create a new Cropper.
   * @param {Element} element - The target element for cropping.
   * @param {Object} [options={}] - The configuration options.
   */
  function Cropper(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cropper);

    if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
      throw new Error('The first argument is required and must be an <img> or <canvas> element.');
    }

    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.cropped = false;
    this.disabled = false;
    this.pointers = {};
    this.ready = false;
    this.reloading = false;
    this.replaced = false;
    this.sized = false;
    this.sizing = false;
    this.init();
  }

  _createClass(Cropper, [{
    key: "init",
    value: function init() {
      var element = this.element;
      var tagName = element.tagName.toLowerCase();
      var url;

      if (element[NAMESPACE]) {
        return;
      }

      element[NAMESPACE] = this;

      if (tagName === 'img') {
        this.isImg = true; // e.g.: "img/picture.jpg"

        url = element.getAttribute('src') || '';
        this.originalUrl = url; // Stop when it's a blank image

        if (!url) {
          return;
        } // e.g.: "http://example.com/img/picture.jpg"


        url = element.src;
      } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
        url = element.toDataURL();
      }

      this.load(url);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this = this;

      if (!url) {
        return;
      }

      this.url = url;
      this.imageData = {};
      var element = this.element,
          options = this.options;

      if (!options.rotatable && !options.scalable) {
        options.checkOrientation = false;
      } // Only IE10+ supports Typed Arrays


      if (!options.checkOrientation || !window.ArrayBuffer) {
        this.clone();
        return;
      } // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari


      if (REGEXP_DATA_URL.test(url)) {
        if (REGEXP_DATA_URL_JPEG.test(url)) {
          this.read(dataURLToArrayBuffer(url));
        } else {
          this.clone();
        }

        return;
      }

      var xhr = new XMLHttpRequest();
      var clone = this.clone.bind(this);
      this.reloading = true;
      this.xhr = xhr;
      xhr.ontimeout = clone;
      xhr.onabort = clone;
      xhr.onerror = clone;

      xhr.onprogress = function () {
        if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
          xhr.abort();
        }
      };

      xhr.onload = function () {
        _this.read(xhr.response);
      };

      xhr.onloadend = function () {
        _this.reloading = false;
        _this.xhr = null;
      }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


      if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
        url = addTimestamp(url);
      }

      xhr.open('GET', url);
      xhr.responseType = 'arraybuffer';
      xhr.withCredentials = element.crossOrigin === 'use-credentials';
      xhr.send();
    }
  }, {
    key: "read",
    value: function read(arrayBuffer) {
      var options = this.options,
          imageData = this.imageData;
      var orientation = resetAndGetOrientation(arrayBuffer);
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      if (orientation > 1) {
        // Generate a new Data URL with the orientation value set to 1
        // as some iOS browsers will render image with its orientation
        this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

        var _parseOrientation = parseOrientation(orientation);

        rotate = _parseOrientation.rotate;
        scaleX = _parseOrientation.scaleX;
        scaleY = _parseOrientation.scaleY;
      }

      if (options.rotatable) {
        imageData.rotate = rotate;
      }

      if (options.scalable) {
        imageData.scaleX = scaleX;
        imageData.scaleY = scaleY;
      }

      this.clone();
    }
  }, {
    key: "clone",
    value: function clone() {
      var element = this.element,
          url = this.url;
      var crossOrigin;
      var crossOriginUrl;

      if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
        crossOrigin = element.crossOrigin;

        if (crossOrigin) {
          crossOriginUrl = url;
        } else {
          crossOrigin = 'anonymous'; // Bust cache when there is not a "crossOrigin" property

          crossOriginUrl = addTimestamp(url);
        }
      }

      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = crossOriginUrl || url;
      this.image = image;
      image.onload = this.start.bind(this);
      image.onerror = this.stop.bind(this);
      addClass(image, CLASS_HIDE);
      element.parentNode.insertBefore(image, element.nextSibling);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var image = this.isImg ? this.element : this.image;
      image.onload = null;
      image.onerror = null;
      this.sizing = true;
      var IS_SAFARI = WINDOW.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(WINDOW.navigator.userAgent);

      var done = function done(naturalWidth, naturalHeight) {
        assign(_this2.imageData, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });
        _this2.sizing = false;
        _this2.sized = true;

        _this2.build();
      }; // Modern browsers (except Safari)


      if (image.naturalWidth && !IS_SAFARI) {
        done(image.naturalWidth, image.naturalHeight);
        return;
      }

      var sizingImage = document.createElement('img');
      var body = document.body || document.documentElement;
      this.sizingImage = sizingImage;

      sizingImage.onload = function () {
        done(sizingImage.width, sizingImage.height);

        if (!IS_SAFARI) {
          body.removeChild(sizingImage);
        }
      };

      sizingImage.src = image.src; // iOS Safari will convert the image automatically
      // with its orientation once append it into DOM (#279)

      if (!IS_SAFARI) {
        sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
        body.appendChild(sizingImage);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var image = this.image;
      image.onload = null;
      image.onerror = null;
      image.parentNode.removeChild(image);
      this.image = null;
    }
  }, {
    key: "build",
    value: function build() {
      if (!this.sized || this.ready) {
        return;
      }

      var element = this.element,
          options = this.options,
          image = this.image; // Create cropper elements

      var container = element.parentNode;
      var template = document.createElement('div');
      template.innerHTML = TEMPLATE;
      var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
      var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
      var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
      var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
      var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
      this.container = container;
      this.cropper = cropper;
      this.canvas = canvas;
      this.dragBox = dragBox;
      this.cropBox = cropBox;
      this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
      this.face = face;
      canvas.appendChild(image); // Hide the original image

      addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

      container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

      if (!this.isImg) {
        removeClass(image, CLASS_HIDE);
      }

      this.initPreview();
      this.bind();
      options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
      addClass(cropBox, CLASS_HIDDEN);

      if (!options.guides) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
      }

      if (!options.center) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
      }

      if (options.background) {
        addClass(cropper, "".concat(NAMESPACE, "-bg"));
      }

      if (!options.highlight) {
        addClass(face, CLASS_INVISIBLE);
      }

      if (options.cropBoxMovable) {
        addClass(face, CLASS_MOVE);
        setData(face, DATA_ACTION, ACTION_ALL);
      }

      if (!options.cropBoxResizable) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
      }

      this.render();
      this.ready = true;
      this.setDragMode(options.dragMode);

      if (options.autoCrop) {
        this.crop();
      }

      this.setData(options.data);

      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }

      dispatchEvent(element, EVENT_READY);
    }
  }, {
    key: "unbuild",
    value: function unbuild() {
      if (!this.ready) {
        return;
      }

      this.ready = false;
      this.unbind();
      this.resetPreview();
      this.cropper.parentNode.removeChild(this.cropper);
      removeClass(this.element, CLASS_HIDDEN);
    }
  }, {
    key: "uncreate",
    value: function uncreate() {
      if (this.ready) {
        this.unbuild();
        this.ready = false;
        this.cropped = false;
      } else if (this.sizing) {
        this.sizingImage.onload = null;
        this.sizing = false;
        this.sized = false;
      } else if (this.reloading) {
        this.xhr.onabort = null;
        this.xhr.abort();
      } else if (this.image) {
        this.stop();
      }
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */

  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Cropper = AnotherCropper;
      return Cropper;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */

  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);

  return Cropper;
}();

assign(Cropper.prototype, render, preview, events, handlers, change, methods);

/* harmony default export */ __webpack_exports__["default"] = (Cropper);


/***/ }),

/***/ "./node_modules/devextreme/ui/notify.js":
/*!**********************************************!*\
  !*** ./node_modules/devextreme/ui/notify.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/notify.js)
 * Version: 18.1.7
 * Build date: Fri Oct 26 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/core/renderer.js"),
    Action = __webpack_require__(/*! ../core/action */ "./node_modules/devextreme/core/action.js"),
    viewPortUtils = __webpack_require__(/*! ../core/utils/view_port */ "./node_modules/devextreme/core/utils/view_port.js"),
    extend = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/core/utils/extend.js").extend,
    isPlainObject = __webpack_require__(/*! ../core/utils/type */ "./node_modules/devextreme/core/utils/type.js").isPlainObject,
    Toast = __webpack_require__(/*! ./toast */ "./node_modules/devextreme/ui/toast.js");
var $notify = null;
var notify = function(message, type, displayTime) {
    var options = isPlainObject(message) ? message : {
        message: message
    };
    var userHiddenAction = options.onHidden;
    extend(options, {
        type: type,
        displayTime: displayTime,
        onHidden: function(args) {
            $(args.element).remove();
            new Action(userHiddenAction, {
                context: args.model
            }).execute(arguments)
        }
    });
    $notify = $("<div>").appendTo(viewPortUtils.value());
    new Toast($notify, options).show()
};
module.exports = notify;
module.exports.default = module.exports;


/***/ }),

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/app/core/guards/unsaved-changes/unsaved-changes.guard.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/guards/unsaved-changes/unsaved-changes.guard.ts ***!
  \**********************************************************************/
/*! exports provided: UnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsavedChangesGuard", function() { return UnsavedChangesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_unsaved_changes_popup_unsaved_changes_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/unsaved-changes-popup/unsaved-changes-popup.service */ "./src/app/shared/unsaved-changes-popup/unsaved-changes-popup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnsavedChangesGuard = /** @class */ (function () {
    function UnsavedChangesGuard(_unsavedChangesPopupService) {
        this._unsavedChangesPopupService = _unsavedChangesPopupService;
    }
    UnsavedChangesGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        if (component.hasChanges()) {
            this._unsavedChangesPopupService.show();
            return this._unsavedChangesPopupService.navigateSelection$;
        }
        return true;
    };
    UnsavedChangesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_unsaved_changes_popup_unsaved_changes_popup_service__WEBPACK_IMPORTED_MODULE_1__["UnsavedChangesPopupService"]])
    ], UnsavedChangesGuard);
    return UnsavedChangesGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/unsaved-changes/unsaved-changes.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/guards/unsaved-changes/unsaved-changes.ts ***!
  \****************************************************************/
/*! exports provided: UnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsavedChanges", function() { return UnsavedChanges; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnsavedChanges = /** @class */ (function () {
    function UnsavedChanges() {
    }
    UnsavedChanges.prototype.unloadNotification = function ($event) {
        if (this.hasChanges()) {
            $event.returnValue = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UnsavedChanges.prototype, "unloadNotification", null);
    return UnsavedChanges;
}());



/***/ }),

/***/ "./src/app/core/resolver/project/task-progress-state.resolver.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/resolver/project/task-progress-state.resolver.ts ***!
  \***********************************************************************/
/*! exports provided: TaskProgressStateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskProgressStateResolver", function() { return TaskProgressStateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskProgressStateResolver = /** @class */ (function () {
    function TaskProgressStateResolver(_taskService) {
        this._taskService = _taskService;
    }
    TaskProgressStateResolver.prototype.resolve = function (route, state) {
        var id = route.paramMap.get('id');
        var taskId = +route.paramMap.get('taskId');
        return this._taskService.getState(id, taskId);
    };
    TaskProgressStateResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["ScopeItemService"]])
    ], TaskProgressStateResolver);
    return TaskProgressStateResolver;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-popup title=\"IMAGE\" (visibleChange)=\"popupVisibleChanged()\" [(visible)]=\"visible\" i18n-title=\"Image|Image@@cropper:popup\"\r\n    height=\"800px\" width=\"1000px\" resizeEnabled=\"false\">\r\n\r\n    <div *dxTemplate=\"let data of 'content'\" class=\"popup\">\r\n\r\n        <kosmos-smart-workspace-toolbar class=\"smart-workspace-toolbar\">\r\n            <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n                <button class=\"toolbar-button\" (click)=\"fileUpload.value=null; fileUpload.click();\" title=\"Upload Image\">Upload</button>\r\n            </kosmos-toolbar-group>\r\n            <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n                <button class=\"toolbar-button toolbar-icon-button btn-toolbar-page-add\" title=\"reset\" (click)=\"reset()\">\r\n                    <span class=\"kpmg-icon kpmg-icon-refresh\"></span>\r\n                </button>\r\n            </kosmos-toolbar-group>\r\n        </kosmos-smart-workspace-toolbar>\r\n\r\n        <div [style.display]=\"imageUrl?'inherit':'none'\">\r\n            <angular-cropper #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"imageUrl\"></angular-cropper>\r\n        </div>\r\n\r\n        <input #fileUpload style=\"display:none;\" crossorigin type='file' (change)=\"readUrl($event)\">\r\n    </div>\r\n\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" [options]=\"{ text: 'Done',  onClick: onDone }\">\r\n    </dxi-toolbar-item>\r\n</dx-popup>\r\n\r\n\r\n<div id=\"ie-clipboard-contenteditable\" class=\"hiddenForIeCropping\" contenteditable=\"true\"></div>"

/***/ }),

/***/ "./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .cropper {\n  height: 550px;\n  width: 950px;\n  min-height: 550px;\n  min-width: 950px; }\n\n.hiddenForIeCropping {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 10px;\n  height: 10px;\n  display: block;\n  font-size: 1;\n  z-index: -1;\n  color: transparent;\n  background: transparent;\n  overflow: hidden;\n  border: none;\n  padding: 0;\n  resize: none;\n  outline: none;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n   -ms-user-select: text;\n       user-select: text;\n  /* Because for user-select:none, Safari won't allow input */ }\n\n.popup:focus {\n  outline: none;\n  outline-color: none;\n  outline-style: none;\n  outline-width: none; }\n\nkosmos-smart-workspace-toolbar {\n  box-shadow: none;\n  margin-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CropperPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperPopupComponent", function() { return CropperPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/fesm5/angular-cropperjs.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CropperPopupComponent = /** @class */ (function () {
    function CropperPopupComponent() {
        var _this = this;
        this.visible = false;
        this.cropperOptions = {
            zoomable: true,
            autoCropArea: 1,
            viewMode: 2
        };
        this.cropperCroppedOptions = {
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high'
        };
        this.blobList = [];
        this.imageUrl = undefined;
        this.isIe = false;
        this.isCropped = false;
        this.isPasted = false;
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cropHandler = function (e) {
            _this.isCropped = true;
        };
        this.pasteHandler = function (e) {
            _this.isPasted = true;
            if (_this.isIe) {
                _this.ieClipboardEvent(e);
            }
            else {
                var items = (e.clipboardData || e.originalEvent.clipboardData).items;
                var blob = void 0;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].type.indexOf('image') === 0) {
                        blob = items[i].getAsFile();
                    }
                }
                if (blob !== undefined) {
                    var reader = new FileReader();
                    // tslint:disable-next-line:no-shadowed-variable
                    reader.onload = function (e) {
                        if (typeof _this.angularCropper.cropper != 'undefined') {
                            _this.angularCropper.cropper.destroy();
                        }
                        _this.isCropped = false;
                        _this.imageUrl = e.target.result;
                        _this.angularCropper.imageUrl = e.target.result;
                        _this.angularCropper.image.nativeElement.addEventListener('cropstart', _this.cropHandler, false);
                    };
                    reader.readAsDataURL(blob);
                }
            }
        };
        this.onDone = function () {
            if (_this.isCropped || _this.isPasted) {
                _this.croppedBase64Image = _this.angularCropper.cropper
                    .getCroppedCanvas(_this.cropperCroppedOptions)
                    .toDataURL('image/jpeg', 0.9);
            }
            else {
                _this.croppedBase64Image = _this.imageUrl;
            }
            _this.done.emit(_this.croppedBase64Image);
            _this.close.emit();
        };
    }
    Object.defineProperty(CropperPopupComponent.prototype, "isVisible", {
        set: function (value) {
            this.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CropperPopupComponent.prototype, "imageFromCell", {
        set: function (value) {
            this._imageFromCell = value;
        },
        enumerable: true,
        configurable: true
    });
    CropperPopupComponent.prototype.ngOnInit = function () {
        this.isIe =
            navigator.userAgent.toLowerCase().indexOf('msie') != -1 ||
                navigator.userAgent.toLowerCase().indexOf('trident') != -1;
    };
    CropperPopupComponent.prototype.popupVisibleChanged = function () {
        var _this = this;
        if (!this.popup.visible) {
            this.close.emit();
            this.removeEvent();
        }
        else {
            this.registerEvent();
            this.imageUrl = undefined;
            setTimeout(function () {
                if (typeof _this.angularCropper.cropper != 'undefined') {
                    _this.angularCropper.cropper.destroy();
                    if (_this._imageFromCell) {
                        _this.imageUrl = _this._imageFromCell;
                        _this.angularCropper.imageUrl = _this._imageFromCell;
                    }
                    else {
                        _this.imageUrl = undefined;
                        _this.angularCropper.imageUrl = '';
                    }
                }
            }, 500);
        }
    };
    CropperPopupComponent.prototype.registerEvent = function () {
        window.addEventListener('paste', this.pasteHandler, false);
        if (this.isIe) {
            document.body.addEventListener('keydown', this.focusIeClipboardDiv, false);
        }
    };
    CropperPopupComponent.prototype.focusIeClipboardDiv = function () {
        this.ieClipboardDiv = $('#ie-clipboard-contenteditable');
        this.ieClipboardDiv.focus();
        var range = document.createRange();
        range.selectNodeContents(this.ieClipboardDiv.get(0));
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    };
    CropperPopupComponent.prototype.removeEvent = function () {
        window.removeEventListener('paste', this.pasteHandler, false);
        if (this.isIe) {
            document.body.removeEventListener('keydown', this.focusIeClipboardDiv, false);
        }
        if (this.angularCropper.cropper) {
            this.angularCropper.image.nativeElement.removeEventListener('cropstart', this.cropHandler, false);
        }
    };
    CropperPopupComponent.prototype.ieClipboardEvent = function (clipboardEvent) {
        var _this = this;
        this.isPasted = true;
        var clipboardData = window.clipboardData;
        var clipboardText = clipboardData.getData('Text');
        this.ieClipboardDiv = $('#ie-clipboard-contenteditable');
        this.ieClipboardDiv.empty();
        setTimeout(function () {
            _this.ieClipboardDiv = $('#ie-clipboard-contenteditable');
            var wrapper = document.createElement('div');
            wrapper.innerHTML = _this.ieClipboardDiv.html();
            var imageElement = wrapper.firstChild;
            if (_this.angularCropper.cropper) {
                _this.angularCropper.cropper.destroy();
            }
            _this.isCropped = false;
            _this.imageUrl = imageElement.src;
            _this.angularCropper.imageUrl = imageElement.src;
            _this.angularCropper.image.nativeElement.addEventListener('cropstart', _this.cropHandler, false);
            _this.ieClipboardDiv.empty();
        }, 0);
    };
    CropperPopupComponent.prototype.readUrl = function (event) {
        var _this = this;
        this.isPasted = false;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (typeof _this.angularCropper.cropper != 'undefined') {
                    _this.angularCropper.cropper.destroy();
                }
                _this.isCropped = false;
                _this.imageUrl = e.target.result;
                _this.angularCropper.imageUrl = e.target.result;
                // tslint:disable-next-line:no-shadowed-variable
                _this.angularCropper.image.nativeElement.addEventListener('cropstart', _this.cropHandler, false);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CropperPopupComponent.prototype.reset = function () {
        this.angularCropper.cropper.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"])
    ], CropperPopupComponent.prototype, "popup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('angularCropper'),
        __metadata("design:type", angular_cropperjs__WEBPACK_IMPORTED_MODULE_1__["CropperComponent"])
    ], CropperPopupComponent.prototype, "angularCropper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CropperPopupComponent.prototype, "isVisible", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CropperPopupComponent.prototype, "imageFromCell", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperPopupComponent.prototype, "done", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperPopupComponent.prototype, "close", void 0);
    CropperPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-cropper-popup',
            template: __webpack_require__(/*! ./cropper-popup.component.html */ "./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.html"),
            styles: [__webpack_require__(/*! ./cropper-popup.component.scss */ "./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.scss")]
        })
    ], CropperPopupComponent);
    return CropperPopupComponent;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-popup title=\"DOWNLOAD PDF\" (visibleChange)=\"popupVisibleChanged()\" [(visible)]=\"visible\" i18n-title=\"DOWNLOADPDF|DOWNLOADPDF@@generate-report:popup\"\r\n    height=\"auto\" width=\"300px\" resizeEnabled=\"true\">\r\n    <div *dxTemplate=\"let data of 'content'\" class=\"popup\">\r\n        <dx-validation-group>\r\n            <div class=\"form-group row\">\r\n                <div class=\"form-item\">\r\n                    <dx-radio-group [dataSource]=\"pageTypes\" displayExpr=\"text\" valueExpr=\"value\" [(value)]=\"pageTypeSelectedValue\" (onValueChanged)=\"pageTypeChanged($event)\">\r\n                    </dx-radio-group>\r\n                </div>\r\n                <div class=\"form-item\">\r\n                    <div class=\"paging\">\r\n                        <dx-number-box [(value)]=\"pageFrom\" i18n-placeholder=\"page-from|page-from@@generate-report:popup\" placeholder=\"Page from\"\r\n                            [min]=\"1\" [max]=\"pageTo\" [disabled]=\"!pagesEnabled\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-number-box>\r\n                        <span>-</span>\r\n                        <dx-number-box [(value)]=\"pageTo\" i18n-placeholder=\"page-to|page-to@@generate-report:popup\" placeholder=\"Page tp\" [min]=\"pageFrom\"\r\n                            [max]=\"pageCount\" [disabled]=\"!pagesEnabled\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-number-box>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-item\">\r\n                    <div class=\"label\">\r\n                        <dx-check-box i18n-text=\"Watermark|Watermark@@generate-report:popup\" text=\"Watermark\" [(value)]=\"watermarkChecked\">\r\n                        </dx-check-box>\r\n                    </div>\r\n                    <dx-text-box [(value)]=\"watermark\" i18n-placeholder=\"enter-watermark|enter-watermark@@generate-report:popup\" placeholder=\"Enter watermark\"\r\n                        (onFocusOut)=\"validateMe($event)\" [disabled]=\"!watermarkChecked\">\r\n                        <dx-validator>\r\n                            <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                        </dx-validator>\r\n                    </dx-text-box>\r\n                </div>\r\n            </div>\r\n        </dx-validation-group>\r\n    </div>\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" [options]=\"{ text: 'Done',  onClick: onDone }\">\r\n    </dxi-toolbar-item>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  display: block;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  margin-left: 0;\n  width: 100%; }\n  .form-group.row {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end; }\n  .form-group.row .form-item {\n      flex: 0 1 50%; }\n  .form-group .form-item {\n    flex: 0 1 auto;\n    max-width: none;\n    padding: 0; }\n  .form-group .paging {\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n  .form-group .paging > span {\n      margin: 0 6px; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: GenerateReportPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateReportPopupComponent", function() { return GenerateReportPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/ui/validator */ "./node_modules/devextreme/ui/validator.js");
/* harmony import */ var devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PAGE_TYPE_CURRENT_PAGE = 'current_page';
var PAGE_TYPE_ALL_PAGES = 'all_pages';
var PAGE_TYPE_SELECTION = 'selection';
var GenerateReportPopupComponent = /** @class */ (function () {
    function GenerateReportPopupComponent() {
        var _this = this;
        this.visible = false;
        this.pageCount = 1;
        this.currentPage = 1;
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageTypes = [
            { text: 'Current page', value: PAGE_TYPE_CURRENT_PAGE },
            { text: 'All pages', value: PAGE_TYPE_ALL_PAGES },
            { text: 'Selection', value: PAGE_TYPE_SELECTION }
        ];
        this.pageTypeSelectedValue = PAGE_TYPE_ALL_PAGES;
        this.pagesEnabled = false;
        this.pageFrom = 1;
        this.pageTo = 1;
        this.watermark = undefined;
        this.watermarkChecked = false;
        this.pageTypeChanged = function (e) {
            _this.pagesEnabled = e.value == PAGE_TYPE_SELECTION;
            _this.validationGroup.instance.validate();
        };
        this.onDone = function () {
            if (_this.validationGroup.instance.validate().isValid) {
                var settings = new _core_models__WEBPACK_IMPORTED_MODULE_1__["ReportCreationSettings"]();
                if (_this.watermarkChecked) {
                    settings.watermark = _this.watermark;
                }
                if (_this.pageTypeSelectedValue == PAGE_TYPE_SELECTION) {
                    settings.pageFrom = _this.pageFrom;
                    settings.pageTo = _this.pageTo;
                }
                else if (_this.pageTypeSelectedValue == PAGE_TYPE_CURRENT_PAGE) {
                    settings.pageFrom = _this.currentPage;
                    settings.pageTo = _this.currentPage;
                }
                _this.done.emit(settings);
                _this.validationGroup.instance.reset();
                return true;
            }
            return false;
        };
    }
    GenerateReportPopupComponent.prototype.ngOnInit = function () { };
    GenerateReportPopupComponent.prototype.popupVisibleChanged = function () {
        if (!this.popup.visible) {
            this.close.emit();
        }
        else {
            this.watermark = undefined;
            this.pageTo = this.pageCount;
            this.pageFrom = 1;
            this.pageTypeSelectedValue = PAGE_TYPE_ALL_PAGES;
            this.pagesEnabled = false;
            this.watermarkChecked = false;
        }
    };
    GenerateReportPopupComponent.prototype.validateMe = function (e) {
        var instance = devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_3___default.a.getInstance(e.element);
        return instance.validate();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxValidationGroupComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxValidationGroupComponent"])
    ], GenerateReportPopupComponent.prototype, "validationGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"])
    ], GenerateReportPopupComponent.prototype, "popup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GenerateReportPopupComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GenerateReportPopupComponent.prototype, "pageCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GenerateReportPopupComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GenerateReportPopupComponent.prototype, "done", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GenerateReportPopupComponent.prototype, "close", void 0);
    GenerateReportPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-generate-report-popup',
            template: __webpack_require__(/*! ./generate-report-popup.component.html */ "./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.html"),
            styles: [__webpack_require__(/*! ./generate-report-popup.component.scss */ "./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], GenerateReportPopupComponent);
    return GenerateReportPopupComponent;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-sippet-list\">\r\n    <div *ngFor=\"let snippet of infoSnippets$ | async\" class=\"info-sippet\">\r\n        <button (click)=\"setSelectedSnippet(snippet)\" class=\"info-text\">{{ snippet.contentHtml }}</button>\r\n    </div>\r\n    <div *ngIf=\"(infoSnippets$ | async)?.length == 0\">\r\n        <div class=\"info-sippet\">\r\n            <button disabled=\"disabled\" class=\"info-text\" i18n=\"Info Snippet List|No Snippets found@@smartworkspace:snippet:list:no-snippets\">No suggested snippets available</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n.info-sippet-list {\n  padding-right: 10px; }\n.selected-snippet {\n  background: #f5f7fa;\n  color: black; }\n.info-text {\n  margin-top: 1px;\n  margin-bottom: 1px;\n  padding: 10px;\n  background: none;\n  border: thin solid rgba(160, 168, 189, 0.5);\n  border-radius: 5px;\n  text-align: left;\n  font-size: 0.9em;\n  display: block;\n  width: 100%;\n  cursor: pointer; }\n.info-text:active {\n    background: #f5f7fa;\n    color: black; }\n.info-text:hover {\n    background: #f5f7fa;\n    color: black; }\n.nosnippets {\n  font-family: 'UniversLTStd-45Light';\n  font-size: 12px;\n  cursor: not-allowed; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InfoSnippetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSnippetListComponent", function() { return InfoSnippetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_project_snippets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/project/snippets-service */ "./src/app/core/services/project/snippets-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoSnippetListComponent = /** @class */ (function () {
    function InfoSnippetListComponent(_snippetsService, _route) {
        this._snippetsService = _snippetsService;
        this._route = _route;
        this.hasSnippets = false;
        this.clickHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(InfoSnippetListComponent.prototype, "taskId", {
        set: function (value) {
            this._taskId = value;
            if (this._taskId != undefined) {
                this.infoSnippets$ = this._snippetsService.getTextSnippetsByTask(this._selectedProjectId, this._taskId);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfoSnippetListComponent.prototype, "_selectedProjectId", {
        get: function () {
            return this._route.snapshot.paramMap.get('id');
        },
        enumerable: true,
        configurable: true
    });
    InfoSnippetListComponent.prototype.setSelectedSnippet = function (snippet) {
        this.clickHandler.emit(snippet);
    };
    InfoSnippetListComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], InfoSnippetListComponent.prototype, "taskId", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfoSnippetListComponent.prototype, "clickHandler", void 0);
    InfoSnippetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-info-snippet-list',
            template: __webpack_require__(/*! ./info-snippet-list.component.html */ "./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.html"),
            styles: [__webpack_require__(/*! ./info-snippet-list.component.scss */ "./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_project_snippets_service__WEBPACK_IMPORTED_MODULE_2__["SnippetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], InfoSnippetListComponent);
    return InfoSnippetListComponent;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-popup title=\"TEMPLATE NAME\" (onHidden)=\"popupHidden()\" (onShowing)=\"popupShowing()\" (visibleChange)=\"popupVisibleChanged()\"\r\n    [(visible)]=\"visible\" i18n-title=\"Name|Name@@new-content-template:popup\" height=\"auto\" width=\"450px\" resizeEnabled=\"true\">\r\n    <div *dxTemplate=\"let data of 'content'\" class=\"popup\">\r\n        <dx-validation-group>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-item\">\r\n                    <label i18n-placeholder=\"Name|Name@@new-content-template:popup\">Name</label>\r\n                    <dx-text-box class=\"name\" [(value)]=\"name\" i18n-placeholder=\"enter-name|enter-name@@new-content-template:popup\" placeholder=\"Enter Name\"\r\n                        (onFocusOut)=\"validateMe($event)\">\r\n                        <dx-validator>\r\n                            <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                        </dx-validator>\r\n                    </dx-text-box>\r\n                </div>\r\n            </div>\r\n        </dx-validation-group>\r\n    </div>\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" [options]=\"{ text: 'Done',  onClick: add }\">\r\n    </dxi-toolbar-item>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  display: block;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  margin-left: 0;\n  width: 100%; }\n  .form-group .form-item {\n    flex: 0 1 auto;\n    max-width: none;\n    padding: 0; }\n  .name {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: NewContentTemplatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContentTemplatePopupComponent", function() { return NewContentTemplatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/validator */ "./node_modules/devextreme/ui/validator.js");
/* harmony import */ var devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewContentTemplatePopupComponent = /** @class */ (function () {
    function NewContentTemplatePopupComponent() {
        var _this = this;
        this.visible = false;
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.name = '';
        this.add = function () {
            if (_this.validationGroup.instance.validate().isValid) {
                _this.done.emit(_this.name);
                _this.name = '';
                _this.validationGroup.instance.reset();
                return true;
            }
            return false;
        };
    }
    NewContentTemplatePopupComponent.prototype.popupHidden = function () {
        this.name = '';
    };
    NewContentTemplatePopupComponent.prototype.popupShowing = function () {
        if (this.validationGroup) {
            this.validationGroup.instance.reset();
        }
    };
    NewContentTemplatePopupComponent.prototype.popupVisibleChanged = function () {
        if (!this.popup.visible) {
            this.close.emit();
        }
    };
    NewContentTemplatePopupComponent.prototype.validateMe = function (e) {
        var instance = devextreme_ui_validator__WEBPACK_IMPORTED_MODULE_2___default.a.getInstance(e.element);
        return instance.validate();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewContentTemplatePopupComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewContentTemplatePopupComponent.prototype, "done", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewContentTemplatePopupComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxPopupComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxPopupComponent"])
    ], NewContentTemplatePopupComponent.prototype, "popup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxValidationGroupComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxValidationGroupComponent"])
    ], NewContentTemplatePopupComponent.prototype, "validationGroup", void 0);
    NewContentTemplatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-new-content-template-popup',
            template: __webpack_require__(/*! ./new-content-template-popup.component.html */ "./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.html"),
            styles: [__webpack_require__(/*! ./new-content-template-popup.component.scss */ "./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewContentTemplatePopupComponent);
    return NewContentTemplatePopupComponent;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/services/draw-io-extension.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/project/smart-workspace/services/draw-io-extension.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DrawIOExtensionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawIOExtensionService", function() { return DrawIOExtensionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enum/smart-workspace-container-type.enum */ "./src/app/core/enum/smart-workspace-container-type.enum.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/ui/notify */ "./node_modules/devextreme/ui/notify.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrawIOExtensionService = /** @class */ (function () {
    function DrawIOExtensionService(_logger) {
        this._logger = _logger;
        this._baseurl = document.head.getElementsByTagName('base')[0].href;
        this._drawIOChangeListener = undefined;
        this._drawIOOpenFroalaListener = undefined;
        this._drawIOCellsAddedListener = undefined;
        this._drawIOCellsRemovedListener = undefined;
        this._drawIOCellsResizedListener = undefined;
        this._drawIOCellsMovedListener = undefined;
        this._drawIOEditingStoppedListener = undefined;
        this._gridLayout = new _core_models__WEBPACK_IMPORTED_MODULE_2__["GridLayout"]();
        this.contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartCellChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageCellChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isLoaded = false;
    }
    Object.defineProperty(DrawIOExtensionService.prototype, "containerPlaceHolderText", {
        get: function () {
            return '<p>Insert your content....</p>';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "hasFreeGridCell", {
        get: function () {
            return this._gridLayout.cellsAvailable.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "isLoaded", {
        get: function () {
            return this._isLoaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "hasContainers", {
        get: function () {
            return this._gridLayout.container.length != 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "hasIntroColumn", {
        get: function () {
            return typeof this._gridLayout.introColumnCell != 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "hasOnlyIntroColumn", {
        get: function () {
            return this._gridLayout.container.length == 1 && this.hasIntroColumn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "selectedValue", {
        get: function () {
            return this._currentCell.value.attributes['label'].nodeValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "currentCell", {
        get: function () {
            return this._currentCell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "getCurrentCellStyle", {
        get: function () {
            return drawIoUi.editor.graph.getCellStyle(this._currentCell);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "getIsContentEditing", {
        get: function () {
            return drawIoUi.editor.graph.cellEditor.isContentEditing();
        },
        enumerable: true,
        configurable: true
    });
    DrawIOExtensionService.prototype.setCurrentCellStyle = function (style) {
        var cells = [];
        cells.push(this._currentCell);
        drawIoUi.editor.graph.setCellStyle(style, cells);
    };
    Object.defineProperty(DrawIOExtensionService.prototype, "isIntroColumnSelected", {
        get: function () {
            return this._isCellGenericSmartWorkspaceContainerType(this._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].IntroColumn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "graphXml", {
        get: function () {
            return mxUtils.getXml(drawIoUi.editor.getGraphXml());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "pageFormat", {
        get: function () {
            return drawIoUi.editor.graph.pageFormat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawIOExtensionService.prototype, "layouts", {
        get: function () {
            return [
                {
                    id: 1,
                    name: 'Layout 1',
                    imageSrc: this._baseurl + 'assets/images/layouts/layout-1.svg',
                    layoutColumn: false,
                    layoutContainers: [
                        {
                            startCell: 1,
                            columnSpan: 5,
                            rowSpan: 2
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Layout 2',
                    imageSrc: this._baseurl + 'assets/images/layouts/layout-2.svg',
                    layoutColumn: true,
                    layoutContainers: [
                        {
                            startCell: 2,
                            columnSpan: 4,
                            rowSpan: 2
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Layout 3',
                    imageSrc: this._baseurl + 'assets/images/layouts/layout-3.svg',
                    layoutColumn: true,
                    layoutContainers: [
                        {
                            startCell: 2,
                            columnSpan: 2,
                            rowSpan: 2
                        },
                        {
                            startCell: 2,
                            columnSpan: 2,
                            rowSpan: 2
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Layout 4',
                    imageSrc: this._baseurl + 'assets/images/layouts/layout-4.svg',
                    layoutColumn: true,
                    layoutContainers: [
                        {
                            startCell: 2,
                            columnSpan: 4,
                            rowSpan: 1
                        },
                        {
                            startCell: 2,
                            columnSpan: 4,
                            rowSpan: 1
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Layout 5',
                    imageSrc: this._baseurl + 'assets/images/layouts/layout-5.svg',
                    layoutColumn: true,
                    layoutContainers: [
                        {
                            startCell: 2,
                            columnSpan: 2,
                            rowSpan: 1
                        },
                        {
                            startCell: 2,
                            columnSpan: 2,
                            rowSpan: 1
                        },
                        {
                            startCell: 2,
                            columnSpan: 2,
                            rowSpan: 1
                        },
                        {
                            startCell: 2,
                            columnSpan: 2,
                            rowSpan: 1
                        }
                    ]
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    DrawIOExtensionService.prototype.dispose = function () {
        this._isLoaded = false;
        this._host = undefined;
        this._removeListener();
    };
    DrawIOExtensionService.prototype._registerListener = function (pageContent) {
        var parent = this;
        // create listener
        this._drawIOChangeListener = mxUtils.bind(drawIoUi, function (sender, evt) {
            parent.contentChanged.emit(true);
        });
        var drawIOLoadedListener = mxUtils.bind(this, function () {
            drawIoUi.editor.graph.getModel().addListener(mxEvent.CHANGE, this._drawIOChangeListener);
            this.setContent(pageContent);
            Graph.prototype.removeListener(drawIOLoadedListener);
        });
        this._drawIOOpenFroalaListener = mxUtils.bind(this, function () {
            if (this._isCellGenericSmartWorkspaceContainerType(this._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Froala) ||
                this._isCellGenericSmartWorkspaceContainerType(this._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].TableContainer) ||
                this._isCellGenericSmartWorkspaceContainerType(this._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].IntroColumn)) {
                this._host.setFroalaPopupSize(this._currentCell.geometry.width, this._currentCell.geometry.height);
                this._host.popupVisible = true;
            }
        });
        this._drawIOCellsAddedListener = mxUtils.bind(this, function (sender, evt) {
            var cells = evt.getProperty('cells');
            if (cells != null) {
                for (var i = 0; i < cells.length; i++) {
                    var geo = cells[i].getGeometry();
                    if (!cells[i].parent.edge) {
                        if (this._isOutOfDrawingPage(cells[i])) {
                            geo.x = drawIoUi.editor.graph.pageFormat.width / 2;
                            geo.y = drawIoUi.editor.graph.pageFormat.height / 2;
                            cells[i].setGeometry(geo);
                        }
                        if (this._isCellGenericSmartWorkspaceContainerType(cells[i], _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Charts)) {
                            parent.chartCellChanged.emit(cells[i]);
                        }
                    }
                }
            }
        });
        this._drawIOCellsRemovedListener = mxUtils.bind(this, function (sender, evt) {
            var cells = evt.getProperty('cells');
            if (cells != null) {
                for (var i = 0; i < cells.length; i++) {
                    if (this._isCellGenericContainer(cells[i])) {
                        this._calculateContainer();
                        this._host.isAnalysisContainerSelected = false;
                        this._host.isSnippetsVisible = false;
                    }
                }
            }
        });
        this._drawIOCellsResizedListener = mxUtils.bind(this, function (sender, evt) {
            var cells = evt.getProperty('cells');
            if (cells != null) {
                for (var i = 0; i < cells.length; i++) {
                    var geo = cells[i].getGeometry();
                    if (this._isOutOfDrawingPage(cells[i])) {
                        if (this._clickedCellGeometry != undefined) {
                            cells[i].setGeometry(this._clickedCellGeometry);
                        }
                        continue;
                    }
                    if (!this._isOutOfContentPage(cells[i])) {
                        // check if cell is now over another...
                        if (this._isDrawIoCelloverAnotherDrawiCell(cells[i])) {
                            cells[i].setGeometry(this._clickedCellGeometry);
                            continue;
                        }
                    }
                    if (this._isCellGenericSmartWorkspaceContainerType(cells[i], _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Charts)) {
                        parent.chartCellChanged.emit(cells[i]);
                    }
                    if (this._isCellGenericSmartWorkspaceContainerType(cells[i], _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Image)) {
                        parent.imageCellChanged.emit(cells[i]);
                    }
                    this._calculateContainer();
                }
            }
        });
        this._drawIOEditingStoppedListener = mxUtils.bind(this, function (sender, evt) {
            if (this._isCellGenericContainer(this._currentCell) &&
                this.getAttributeFromCell(this._currentCell, 'initialValue') == 1 &&
                this.getAttributeFromCell(this._currentCell, 'label') != '') {
                var style = this.getCurrentCellStyle;
                style.dashed = '0';
                style.strokeColor = 'none';
                var newStyle = '';
                for (var _i = 0, _a = Object.entries(style); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    newStyle = newStyle + (key + '=' + value + ';');
                }
                this._currentCell.setAttribute('initialValue', '0');
                this.setCurrentCellStyle(newStyle);
            }
        });
        this._drawIOCellsMovedListener = mxUtils.bind(this, function (sender, evt) {
            var cells = evt.getProperty('cells');
            if (cells != null) {
                for (var i = 0; i < cells.length; i++) {
                    var geo = cells[i].getGeometry();
                    this._clickedCellGeometry = geo;
                    // tslint:disable-next-line:max-line-length
                    if (this._isOutOfDrawingPage(cells[i]) ||
                        this._isDrawIoCelloverAnotherDrawiCell(cells[i]) ||
                        this._isCellMovementByCursorWithOnlyOnePixel(cells[i], evt)) {
                        if (evt.properties.dx != 0) {
                            // x moved
                            geo.x = geo.x - evt.properties.dx;
                        }
                        if (evt.properties.dy != 0) {
                            // y moved
                            geo.y = geo.y - evt.properties.dy;
                        }
                        cells[i].setGeometry(geo);
                        this._clickedCellGeometry = geo;
                    }
                    if (this._isOutOfContentPage(cells[i])) {
                        if (geo.x < this._gridLayout.left) {
                            // out of left
                            geo.x = this._gridLayout.left;
                        }
                        if (geo.y < this._gridLayout.top) {
                            // out of top
                            geo.y = this._gridLayout.top;
                        }
                        if (geo.x + geo.width > this._gridLayout.contentRightBorder) {
                            // out of right
                            geo.x = this._gridLayout.contentRightBorder - geo.width;
                        }
                        if (geo.y + geo.height > this._gridLayout.contentBottomBorder) {
                            // out of bottom
                            geo.y = this._gridLayout.contentBottomBorder - geo.height;
                        }
                    }
                    this._calculateContainer();
                }
            }
        });
        Graph.prototype.addListener('DrawIOLoaded', drawIOLoadedListener);
        Graph.prototype.addListener('openFroala', this._drawIOOpenFroalaListener);
        Graph.prototype.addListener(mxEvent.CELLS_ADDED, this._drawIOCellsAddedListener);
        Graph.prototype.addListener(mxEvent.CELLS_REMOVED, this._drawIOCellsRemovedListener);
        Graph.prototype.addListener(mxEvent.CELLS_RESIZED, this._drawIOCellsResizedListener);
        Graph.prototype.addListener(mxEvent.CELLS_MOVED, this._drawIOCellsMovedListener);
        Graph.prototype.addListener(mxEvent.EDITING_STOPPED, this._drawIOEditingStoppedListener);
    };
    DrawIOExtensionService.prototype._removeListener = function () {
        if (this._drawIOChangeListener) {
            if (drawIoUi) {
                drawIoUi.editor.graph.getModel().removeListener(this._drawIOChangeListener);
            }
        }
        this._removeGraphListener(this._drawIOOpenFroalaListener);
        this._removeGraphListener(this._drawIOCellsAddedListener);
        this._removeGraphListener(this._drawIOCellsRemovedListener);
        this._removeGraphListener(this._drawIOCellsResizedListener);
        this._removeGraphListener(this._drawIOCellsMovedListener);
        this._removeGraphListener(this._drawIOEditingStoppedListener);
        this._drawIOChangeListener = undefined;
        this._drawIOOpenFroalaListener = undefined;
        this._drawIOCellsAddedListener = undefined;
        this._drawIOCellsRemovedListener = undefined;
        this._drawIOCellsResizedListener = undefined;
        this._drawIOCellsMovedListener = undefined;
        this._drawIOEditingStoppedListener = undefined;
    };
    DrawIOExtensionService.prototype._removeGraphListener = function (func) {
        if (func) {
            Graph.prototype.removeListener(func);
        }
    };
    DrawIOExtensionService.prototype.init = function (host, pageContent) {
        this._host = host;
        this._isLoaded = true;
        var parent = this;
        App.prototype.updateDocumentTitle = EditorUi.prototype.updateDocumentTitle = function () {
            // we don't want a document title update
        };
        Graph.prototype.defaultThemes[Graph.prototype.defaultThemeName] = mxUtils.parseXml(
        // tslint:disable-next-line:max-line-length
        '<mxStylesheet><add as="defaultVertex"><add as="shape" value="label"/><add as="perimeter" value="rectanglePerimeter"/><add as="fontSize" value="12"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="fillColor" value="#ffffff"/><add as="strokeColor" value="#000000"/><add as="fontColor" value="#000000"/></add><add as="defaultEdge"><add as="shape" value="connector"/><add as="labelBackgroundColor" value="#ffffff"/><add as="endArrow" value="classic"/><add as="fontSize" value="11"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="rounded" value="1"/><add as="strokeColor" value="#000000"/><add as="fontColor" value="#000000"/></add><add as="fancy"><add as="shadow" value="1"/><add as="glass" value="1"/></add><add as="gray" extend="fancy"><add as="gradientColor" value="#B3B3B3"/><add as="fillColor" value="#F5F5F5"/><add as="strokeColor" value="#666666"/></add><add as="blue" extend="fancy"><add as="gradientColor" value="#7EA6E0"/><add as="fillColor" value="#DAE8FC"/><add as="strokeColor" value="#6C8EBF"/></add><add as="green" extend="fancy"><add as="gradientColor" value="#97D077"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#82B366"/></add><add as="turquoise" extend="fancy"><add as="gradientColor" value="#67AB9F"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#6A9153"/></add><add as="yellow" extend="fancy"><add as="gradientColor" value="#FFD966"/><add as="fillColor" value="#FFF2CC"/><add as="strokeColor" value="#D6B656"/></add><add as="orange" extend="fancy"><add as="gradientColor" value="#FFA500"/><add as="fillColor" value="#FFCD28"/><add as="strokeColor" value="#D79B00"/></add><add as="red" extend="fancy"><add as="gradientColor" value="#EA6B66"/><add as="fillColor" value="#F8CECC"/><add as="strokeColor" value="#B85450"/></add><add as="pink" extend="fancy"><add as="gradientColor" value="#B5739D"/><add as="fillColor" value="#E6D0DE"/><add as="strokeColor" value="#996185"/></add><add as="purple" extend="fancy"><add as="gradientColor" value="#8C6C9C"/><add as="fillColor" value="#E1D5E7"/><add as="strokeColor" value="#9673A6"/></add><add as="plain-gray"><add as="gradientColor" value="#B3B3B3"/><add as="fillColor" value="#F5F5F5"/><add as="strokeColor" value="#666666"/></add><add as="plain-blue"><add as="gradientColor" value="#7EA6E0"/><add as="fillColor" value="#DAE8FC"/><add as="strokeColor" value="#6C8EBF"/></add><add as="plain-green"><add as="gradientColor" value="#97D077"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#82B366"/></add><add as="plain-turquoise"><add as="gradientColor" value="#67AB9F"/><add as="fillColor" value="#D5E8D4"/><add as="strokeColor" value="#6A9153"/></add><add as="plain-yellow"><add as="gradientColor" value="#FFD966"/><add as="fillColor" value="#FFF2CC"/><add as="strokeColor" value="#D6B656"/></add><add as="plain-orange"><add as="gradientColor" value="#FFA500"/><add as="fillColor" value="#FFCD28"/><add as="strokeColor" value="#D79B00"/></add><add as="plain-red"><add as="gradientColor" value="#EA6B66"/><add as="fillColor" value="#F8CECC"/><add as="strokeColor" value="#B85450"/></add><add as="plain-pink"><add as="gradientColor" value="#B5739D"/><add as="fillColor" value="#E6D0DE"/><add as="strokeColor" value="#996185"/></add><add as="plain-purple"><add as="gradientColor" value="#8C6C9C"/><add as="fillColor" value="#E1D5E7"/><add as="strokeColor" value="#9673A6"/></add><add as="text"><add as="fillColor" value="none"/><add as="gradientColor" value="none"/><add as="strokeColor" value="none"/><add as="align" value="left"/><add as="verticalAlign" value="top"/></add><add as="label"><add as="fontStyle" value="1"/><add as="align" value="left"/><add as="verticalAlign" value="middle"/><add as="spacing" value="2"/><add as="spacingLeft" value="52"/><add as="imageWidth" value="42"/><add as="imageHeight" value="42"/><add as="rounded" value="1"/></add><add as="icon" extend="label"><add as="align" value="center"/><add as="imageAlign" value="center"/><add as="verticalLabelPosition" value="bottom"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="4"/><add as="labelBackgroundColor" value="#ffffff"/><add as="spacing" value="0"/><add as="spacingLeft" value="0"/><add as="spacingTop" value="6"/><add as="fontStyle" value="0"/><add as="imageWidth" value="48"/><add as="imageHeight" value="48"/></add><add as="swimlane"><add as="shape" value="swimlane"/><add as="fontSize" value="12"/><add as="fontStyle" value="1"/><add as="startSize" value="23"/></add><add as="group"><add as="verticalAlign" value="top"/><add as="fillColor" value="none"/><add as="strokeColor" value="none"/><add as="gradientColor" value="none"/><add as="pointerEvents" value="0"/></add><add as="ellipse"><add as="shape" value="ellipse"/><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombus"><add as="shape" value="rhombus"/><add as="perimeter" value="rhombusPerimeter"/></add><add as="triangle"><add as="shape" value="triangle"/><add as="perimeter" value="trianglePerimeter"/></add><add as="line"><add as="shape" value="line"/><add as="strokeWidth" value="4"/><add as="labelBackgroundColor" value="#ffffff"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="8"/></add><add as="image"><add as="shape" value="image"/><add as="labelBackgroundColor" value="white"/><add as="verticalAlign" value="top"/><add as="verticalLabelPosition" value="bottom"/></add><add as="roundImage" extend="image"><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombusImage" extend="image"><add as="perimeter" value="rhombusPerimeter"/></add><add as="arrow"><add as="shape" value="arrow"/><add as="edgeStyle" value="none"/><add as="fillColor" value="#ffffff"/></add></mxStylesheet>').documentElement;
        Graph.prototype.defaultThemes.darkTheme = mxUtils.parseXml(
        // tslint:disable-next-line:max-line-length
        '<mxStylesheet><add as="defaultVertex"><add as="shape" value="label"/><add as="perimeter" value="rectanglePerimeter"/><add as="fontSize" value="12"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="fillColor" value="#2a2a2a"/><add as="strokeColor" value="#f0f0f0"/><add as="fontColor" value="#f0f0f0"/></add><add as="defaultEdge"><add as="shape" value="connector"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="endArrow" value="classic"/><add as="fontSize" value="11"/><add as="fontFamily" value="Helvetica"/><add as="align" value="center"/><add as="verticalAlign" value="middle"/><add as="rounded" value="1"/><add as="strokeColor" value="#f0f0f0"/><add as="fontColor" value="#f0f0f0"/></add><add as="text"><add as="fillColor" value="none"/><add as="gradientColor" value="none"/><add as="strokeColor" value="none"/><add as="align" value="left"/><add as="verticalAlign" value="top"/></add><add as="label"><add as="fontStyle" value="1"/><add as="align" value="left"/><add as="verticalAlign" value="middle"/><add as="spacing" value="2"/><add as="spacingLeft" value="52"/><add as="imageWidth" value="42"/><add as="imageHeight" value="42"/><add as="rounded" value="1"/></add><add as="icon" extend="label"><add as="align" value="center"/><add as="imageAlign" value="center"/><add as="verticalLabelPosition" value="bottom"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="4"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="spacing" value="0"/><add as="spacingLeft" value="0"/><add as="spacingTop" value="6"/><add as="fontStyle" value="0"/><add as="imageWidth" value="48"/><add as="imageHeight" value="48"/></add><add as="swimlane"><add as="shape" value="swimlane"/><add as="fontSize" value="12"/><add as="fontStyle" value="1"/><add as="startSize" value="23"/></add><add as="group"><add as="verticalAlign" value="top"/><add as="fillColor" value="none"/><add as="strokeColor" value="none"/><add as="gradientColor" value="none"/><add as="pointerEvents" value="0"/></add><add as="ellipse"><add as="shape" value="ellipse"/><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombus"><add as="shape" value="rhombus"/><add as="perimeter" value="rhombusPerimeter"/></add><add as="triangle"><add as="shape" value="triangle"/><add as="perimeter" value="trianglePerimeter"/></add><add as="line"><add as="shape" value="line"/><add as="strokeWidth" value="4"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="verticalAlign" value="top"/><add as="spacingTop" value="8"/></add><add as="image"><add as="shape" value="image"/><add as="labelBackgroundColor" value="#2a2a2a"/><add as="verticalAlign" value="top"/><add as="verticalLabelPosition" value="bottom"/></add><add as="roundImage" extend="image"><add as="perimeter" value="ellipsePerimeter"/></add><add as="rhombusImage" extend="image"><add as="perimeter" value="rhombusPerimeter"/></add><add as="arrow"><add as="shape" value="arrow"/><add as="edgeStyle" value="none"/><add as="fillColor" value="#2a2a2a"/></add></mxStylesheet>').documentElement;
        App.prototype.updateActionStates = function () {
            // deactivated
        };
        App.main(drawIoCallback);
        this._registerListener(pageContent);
        /**
         * Returns the URL for a copy of this editor with no state.
         */
        EditorUi.prototype.redo = function () {
            try {
                var graph = this.editor.graph;
                if (graph.isEditing()) {
                    document.execCommand('redo', false, null);
                }
                else {
                    this.editor.undoManager.redo();
                    parent._calculateContainer();
                }
            }
            catch (e) {
                // ignore all errors
            }
        };
        /**
         * Returns the URL for a copy of this editor with no state.
         */
        EditorUi.prototype.undo = function () {
            try {
                var graph = this.editor.graph;
                if (graph.isEditing()) {
                    // Stops editing and executes undo on graph if native undo
                    // does not affect current editing value
                    var value = graph.cellEditor.textarea.innerHTML;
                    document.execCommand('undo', false, null);
                    if (value == graph.cellEditor.textarea.innerHTML) {
                        graph.stopEditing(true);
                        this.editor.undoManager.undo();
                        parent._calculateContainer();
                    }
                }
                else {
                    this.editor.undoManager.undo();
                    parent._calculateContainer();
                }
            }
            catch (e) {
                // ignore all errors
            }
        };
        /**
         * Overrides double click handling to add the tolerance and inserting text.
         */
        Graph.prototype.dblClick = mxUtils.bind(this, function (evt, cell) {
            this._dblClick.call(drawIoUi.editor.graph, this, evt, cell);
        });
        /**
         * Overrides click handling to avoid accidental inserts of new labels in dblClick below.
         */
        Graph.prototype.click = mxUtils.bind(this, function (me) {
            this._click.call(drawIoUi.editor.graph, this, me);
        });
        mxVertexHandler.prototype.union = function (bounds, dx, dy, index, gridEnabled, scale, tr, constrained, centered) {
            if (this.singleSizer) {
                var x = bounds.x + bounds.width + dx;
                var y = bounds.y + bounds.height + dy;
                if (gridEnabled) {
                    x = this.graph.snap(x / scale) * scale;
                    y = this.graph.snap(y / scale) * scale;
                }
                var rect = new mxRectangle(bounds.x, bounds.y, 0, 0);
                rect.add(new mxRectangle(x, y, 0, 0));
                return rect;
            }
            else {
                var w0 = bounds.width;
                var h0 = bounds.height;
                var left = bounds.x - tr.x * scale;
                var right = left + w0;
                var top_1 = bounds.y - tr.y * scale;
                var bottom = top_1 + h0;
                var cx = left + w0 / 2;
                var cy = top_1 + h0 / 2;
                if (index > 4 /* Bottom Row */) {
                    bottom = bottom + dy;
                    if (gridEnabled) {
                        bottom = this.graph.snap(bottom / scale) * scale;
                    }
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (bottom > parent._gridLayout.contentBottomBorder) {
                            parent._logger.debug('out of bottom content', bottom);
                            bottom = parent._gridLayout.contentBottomBorder;
                        }
                        for (var counter = 2; counter <= parent._gridLayout.rows + 1; counter++) {
                            bottom = parent._calculatePositivResizeSnaping(parent._gridLayout, bottom, counter, parent._gridLayout.top, parent._gridLayout.boxHeight);
                        }
                    }
                }
                else if (index < 3 /* Top Row */) {
                    top_1 = top_1 + dy;
                    if (gridEnabled) {
                        top_1 = this.graph.snap(top_1 / scale) * scale;
                    }
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (top_1 < parent._gridLayout.top) {
                            parent._logger.debug('out of top content', top_1);
                            top_1 = parent._gridLayout.top;
                        }
                        for (var counter = 2; counter <= parent._gridLayout.rows + 1; counter++) {
                            top_1 = parent._calculateNegativResizeSnaping(parent._gridLayout, top_1, counter, parent._gridLayout.top, parent._gridLayout.boxHeight);
                        }
                    }
                }
                if (index == 0 || index == 3 || index == 5 /* Left */) {
                    left += dx;
                    if (gridEnabled) {
                        left = this.graph.snap(left / scale) * scale;
                    }
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (left < parent._gridLayout.left) {
                            parent._logger.debug('out of left content', left);
                            left = parent._gridLayout.left;
                        }
                        for (var counter = 2; counter <= parent._gridLayout.columns + 1; counter++) {
                            left = parent._calculateNegativSnapingLeft(parent._gridLayout, left, counter, parent._gridLayout.contentRightBorder, parent._gridLayout.boxWidth);
                        }
                    }
                }
                else if (index == 2 || index == 4 || index == 7 /* Right */) {
                    right += dx;
                    if (gridEnabled) {
                        right = this.graph.snap(right / scale) * scale;
                    }
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        if (right > parent._gridLayout.contentRightBorder) {
                            parent._logger.debug('out of right content', right);
                            right = parent._gridLayout.contentRightBorder;
                        }
                        for (var counter = 2; counter <= parent._gridLayout.columns + 1; counter++) {
                            right = parent._calculatePositivResizeSnapingRight(parent._gridLayout, right, counter, parent._gridLayout.contentLeftBorder, parent._gridLayout.boxWidth);
                        }
                    }
                }
                var width = right - left;
                var height = bottom - top_1;
                if (constrained) {
                    var geo = this.graph.getCellGeometry(this.state.cell);
                    if (geo != null) {
                        var aspect = geo.width / geo.height;
                        if (index == 1 || index == 2 || index == 7 || index == 6) {
                            width = height * aspect;
                        }
                        else {
                            height = width / aspect;
                        }
                        if (index == 0) {
                            left = right - width;
                            top_1 = bottom - height;
                        }
                    }
                }
                if (centered) {
                    width += width - w0;
                    height += height - h0;
                    var cdx = cx - (left + width / 2);
                    var cdy = cy - (top_1 + height / 2);
                    left += cdx;
                    top_1 += cdy;
                    right += cdx;
                    bottom += cdy;
                }
                parent._logger.debug('left', left, 'width', width);
                // Flips over left side
                if (width < 0) {
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        var geo = this.graph.getCellGeometry(this.state.cell);
                        parent._logger.debug('geo', geo);
                        parent._logger.debug('left', left, 'width', width);
                        left = geo.x;
                        width = geo.width;
                    }
                    else {
                        left += width;
                        width = Math.abs(width);
                        width = 0;
                    }
                }
                // Flips over top side
                if (height < 0) {
                    if (parent._isCellGenericContainer(this.state.cell)) {
                        var geo = this.graph.getCellGeometry(this.state.cell);
                        parent._logger.debug('geo', geo);
                        parent._logger.debug('top', top_1, 'height', height);
                        top_1 = geo.y;
                        height = geo.height;
                    }
                    else {
                        top_1 += height;
                        height = Math.abs(height);
                    }
                }
                var result = new mxRectangle(left + tr.x * scale, top_1 + tr.y * scale, width, height);
                if (this.minBounds != null) {
                    result.width = Math.max(result.width, this.minBounds.x * scale +
                        this.minBounds.width * scale +
                        Math.max(0, this.x0 * scale - result.x));
                    result.height = Math.max(result.height, this.minBounds.y * scale +
                        this.minBounds.height * scale +
                        Math.max(0, this.y0 * scale - result.y));
                }
                result.width = Math.max(result.width, mxUtils.getNumber(this.state.style, 'minWidth', 0));
                result.height = Math.max(result.height, mxUtils.getNumber(this.state.style, 'minHeight', 0));
                return result;
            }
        };
        mxGraphHandler.prototype.mouseMove = function (sender, me) {
            var graph = this.graph;
            if (!me.isConsumed() &&
                graph.isMouseDown &&
                this.cell != null &&
                this.first != null &&
                this.bounds != null) {
                // Stops moving if a multi touch event is received
                if (mxEvent.isMultiTouchEvent(me.getEvent())) {
                    this.reset();
                    return;
                }
                var delta = this.getDelta(me);
                var dx = delta.x;
                var dy = delta.y;
                var tol = graph.tolerance;
                if (this.shape != null || Math.abs(dx) > tol || Math.abs(dy) > tol) {
                    // Highlight is used for highlighting drop targets
                    if (this.highlight == null) {
                        this.highlight = new mxCellHighlight(this.graph, mxConstants.DROP_TARGET_COLOR, 3);
                    }
                    if (this.shape == null) {
                        this.shape = this.createPreviewShape(this.bounds);
                    }
                    var gridEnabled = graph.isGridEnabledEvent(me.getEvent());
                    var hideGuide = true;
                    // check for our container
                    if (parent._isCellGenericContainer(this.cell)) {
                        // move up
                        if (dy < 0) {
                            for (var index = parent._gridLayout.rows; index >= 1; index--) {
                                dy = parent._calculateNegativMovementSnaping(parent._gridLayout, dy, index, parent._gridLayout.boxHeight);
                            }
                        }
                        // move down
                        if (dy > 0) {
                            if (dy < parent._gridLayout.boxHeight * 0.5) {
                                // snapped move down container to second row
                                dy = 0;
                            }
                            for (var index = parent._gridLayout.rows; index >= 1; index--) {
                                dy = parent._calculatePositivMovementSnaping(parent._gridLayout, dy, index, parent._gridLayout.boxHeight);
                            }
                        }
                        // move right
                        if (dx > 0) {
                            // for first column
                            if (dx < parent._gridLayout.boxWidth * 0.5) {
                                // snapped move right container to 1
                                dx = 0;
                            }
                            for (var index = parent._gridLayout.columns; index >= 1; index--) {
                                dx = parent._calculatePositivMovementSnaping(parent._gridLayout, dx, index, parent._gridLayout.boxWidth);
                            }
                        }
                        // move left
                        if (dx < 0) {
                            if (dx > parent._gridLayout.boxWidth * -0.5) {
                                // snapped move left container to 1
                                dx = 0;
                            }
                            for (var index = parent._gridLayout.columns; index >= 1; index--) {
                                dx = parent._calculateNegativMovementSnaping(parent._gridLayout, dx, index, parent._gridLayout.boxWidth);
                            }
                        }
                    }
                    else {
                        // original code
                        if (this.guide != null && this.useGuidesForEvent(me)) {
                            delta = this.guide.move(this.bounds, new mxPoint(dx, dy), gridEnabled);
                            hideGuide = false;
                            dx = delta.x;
                            dy = delta.y;
                        }
                        else if (gridEnabled) {
                            var trx = graph.getView().translate;
                            var scale = graph.getView().scale;
                            var tx = this.bounds.x - (graph.snap(this.bounds.x / scale - trx.x) + trx.x) * scale;
                            var ty = this.bounds.y - (graph.snap(this.bounds.y / scale - trx.y) + trx.y) * scale;
                            var v = this.snap(new mxPoint(dx, dy));
                            dx = v.x - tx;
                            dy = v.y - ty;
                        }
                    }
                    if (this.guide != null && hideGuide) {
                        this.guide.hide();
                    }
                    // Constrained movement if shift key is pressed
                    if (graph.isConstrainedEvent(me.getEvent())) {
                        if (Math.abs(dx) > Math.abs(dy)) {
                            dy = 0;
                        }
                        else {
                            dx = 0;
                        }
                    }
                    this.currentDx = dx;
                    this.currentDy = dy;
                    this.updatePreviewShape();
                    var target = null;
                    var cell = me.getCell();
                    var clone = graph.isCloneEvent(me.getEvent()) && graph.isCellsCloneable() && this.isCloneEnabled();
                    if (graph.isDropEnabled() && this.highlightEnabled) {
                        // Contains a call to getCellAt to find the cell under the mouse
                        target = graph.getDropTarget(this.cells, me.getEvent(), cell, clone);
                    }
                    var state = graph.getView().getState(target);
                    var highlight = false;
                    if (state != null && (graph.model.getParent(this.cell) != target || clone)) {
                        if (this.target != target) {
                            this.target = target;
                            this.setHighlightColor(mxConstants.DROP_TARGET_COLOR);
                        }
                        highlight = true;
                    }
                    else {
                        this.target = null;
                        if (this.connectOnDrop &&
                            cell != null &&
                            this.cells.length == 1 &&
                            graph.getModel().isVertex(cell) &&
                            graph.isCellConnectable(cell)) {
                            state = graph.getView().getState(cell);
                            if (state != null) {
                                var error = graph.getEdgeValidationError(null, this.cell, cell);
                                var color = error == null ? mxConstants.VALID_COLOR : mxConstants.INVALID_CONNECT_TARGET_COLOR;
                                this.setHighlightColor(color);
                                highlight = true;
                            }
                        }
                    }
                    if (state != null && highlight) {
                        this.highlight.highlight(state);
                    }
                    else {
                        this.highlight.hide();
                    }
                }
                this.updateHint(me);
                this.consumeMouseEvent(mxEvent.MOUSE_MOVE, me);
                // Cancels the bubbling of events to the container so
                // that the droptarget is not reset due to an mouseMove
                // fired on the container with no associated state.
                mxEvent.consume(me.getEvent());
            }
            else if ((this.isMoveEnabled() || this.isCloneEnabled()) &&
                this.updateCursor &&
                !me.isConsumed() &&
                me.getState() != null &&
                !graph.isMouseDown) {
                var cursor = graph.getCursorForMouseEvent(me);
                if (cursor == null && graph.isEnabled() && graph.isCellMovable(me.getCell())) {
                    if (graph.getModel().isEdge(me.getCell())) {
                        cursor = mxConstants.CURSOR_MOVABLE_EDGE;
                    }
                    else {
                        cursor = mxConstants.CURSOR_MOVABLE_VERTEX;
                    }
                }
                // Sets the cursor on the original source state under the mouse
                // instead of the event source state which can be the parent
                if (me.sourceState != null) {
                    me.sourceState.setCursor(cursor);
                }
            }
        };
    };
    DrawIOExtensionService.prototype.setContent = function (content) {
        var _this = this;
        var doc = mxUtils.parseXml(content);
        drawIoUi.editor.setGraphXml(doc.documentElement);
        drawIoUi.editor.setModified(false);
        drawIoUi.editor.undoManager.clear();
        drawIoUi.editor.graph.zoomTo(1);
        drawIoUi.resetScrollbars();
        drawIoUi.editor.graph.setDefaultParent(drawIoUi.editor.graph.model.getChildAt(drawIoUi.editor.graph.model.root, 1));
        this._host.isSnippetsVisible = false;
        this._calculateGrid();
        this._calculateContainer();
        var celltracker = new mxCellTracker(drawIoUi.editor.graph, '#0091DA');
        setTimeout(function () {
            drawIoUi.editor.graph.refresh();
            _this._host.isPageContentLoaded = true;
        }, 100);
        this.contentChanged.emit(false);
    };
    DrawIOExtensionService.prototype.updateAndEnableGraph = function (value) {
        if (this.selectedValue != value) {
            this.contentChanged.emit(true);
        }
        drawIoUi.editor.graph.setEnabled(true);
        drawIoUi.editor.graph.getModel().beginUpdate();
        this._currentCell.setAttribute('label', value);
        drawIoUi.editor.graph.getModel().endUpdate();
        drawIoUi.editor.graph.refresh();
        drawIoUi.editor.graph.container.focus();
    };
    DrawIOExtensionService.prototype.updateCellPropertyAndEnableGraph = function (cell, property, value) {
        if (cell.value.attributes[property].nodeValue != value) {
            this.contentChanged.emit(true);
        }
        drawIoUi.editor.graph.setEnabled(true);
        drawIoUi.editor.graph.getModel().beginUpdate();
        cell.setAttribute(property, value);
        drawIoUi.editor.graph.getModel().endUpdate();
        drawIoUi.editor.graph.refresh();
        drawIoUi.editor.graph.container.focus();
    };
    DrawIOExtensionService.prototype.enableGraph = function () {
        drawIoUi.editor.graph.setEnabled(true);
        drawIoUi.editor.graph.getModel().beginUpdate();
        drawIoUi.editor.graph.getModel().endUpdate();
    };
    DrawIOExtensionService.prototype.disableGraph = function () {
        drawIoUi.editor.graph.setEnabled(false);
        drawIoUi.editor.graph.getModel().beginUpdate();
        drawIoUi.editor.graph.getModel().endUpdate();
    };
    DrawIOExtensionService.prototype.addContainerWithSize = function (layoutContainer) {
        var height = this._gridLayout.boxHeight * layoutContainer.rowSpan +
            this._gridLayout.spacing * (layoutContainer.rowSpan - 1);
        var width = this._gridLayout.boxWidth * layoutContainer.columnSpan +
            this._gridLayout.spacing * (layoutContainer.columnSpan - 1);
        this.addGenericContainer(width, height);
    };
    DrawIOExtensionService.prototype.calcWidthByColumns = function (columns) {
        var width = this._gridLayout.boxWidth * columns + this._gridLayout.spacing * (columns - 1);
        return width;
    };
    DrawIOExtensionService.prototype.calcHeightByRows = function (rows) {
        var height = this._gridLayout.boxHeight * rows + this._gridLayout.spacing * (rows - 1);
        return height;
    };
    DrawIOExtensionService.prototype.toggleButtonsForSpecificContainerActions = function (cell) {
        this._host.isAnalysisContainerSelected =
            this._isCellGenericSmartWorkspaceContainerType(cell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Charts) ||
                this._isCellGenericSmartWorkspaceContainerType(cell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].DataExplorerTable);
        this._host.isSnippetsVisible = this._isCellGenericSmartWorkspaceContainerType(cell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Froala);
    };
    DrawIOExtensionService.prototype.addIntroColumn = function () {
        if (!this.hasIntroColumn) {
            // tslint:disable-next-line:max-line-length
            var IntroColumnHeight = this._gridLayout.boxHeight * this._gridLayout.rows +
                this._gridLayout.spacing * (this._gridLayout.rows - 1);
            var IntroColumnWidth = this._gridLayout.boxWidth;
            var genericContainer = this._insertIntroColumnVertex('', IntroColumnWidth, IntroColumnHeight, 
            // tslint:disable-next-line:max-line-length
            'rounded=0;locked=0;overflow=width;fillColor=#0091DA;strokeColor=#0091DA;fontColor=#FFFFFF;rotatable=0;align=left;whiteSpace=wrap;movable=0;resizable=0;deleteable=0;connectable=0;html=1;verticalAlign=top;minWidth=' +
                IntroColumnWidth +
                ';minHeight=' +
                IntroColumnHeight +
                ';');
            if (genericContainer) {
                this._calculateContainer();
                drawIoUi.editor.graph.selectRegion(10000);
            }
        }
    };
    DrawIOExtensionService.prototype.removeIntroColumn = function () {
        if (typeof this._gridLayout.introColumnCell != 'undefined') {
            var cells = [];
            cells.push(this._gridLayout.introColumnCell);
            drawIoUi.editor.graph.removeCells(cells, true);
        }
    };
    DrawIOExtensionService.prototype.addGenericContainer = function (width, height) {
        if (width === void 0) { width = this._gridLayout.boxWidth; }
        if (height === void 0) { height = this._gridLayout.boxHeight; }
        var genericContainer = this._insertVertex('', width, height, 
        // tslint:disable-next-line:max-line-length
        'rounded=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
            this._gridLayout.boxWidth +
            ';minHeight=' +
            this._gridLayout.boxHeight +
            ';' +
            'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;strokeColor=#B3B3B3;dashed=1;');
        if (genericContainer) {
            this._currentCell = genericContainer;
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    };
    DrawIOExtensionService.prototype.InsertTableContainer = function (width, height) {
        if (width === void 0) { width = this._gridLayout.boxWidth; }
        if (height === void 0) { height = this._gridLayout.boxHeight; }
        var genericContainer = this._insertVertexForTableContainer('', width, height, 
        // tslint:disable-next-line:max-line-length
        'rounded=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
            this._gridLayout.boxWidth +
            ';minHeight=' +
            this._gridLayout.boxHeight +
            ';' +
            'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;');
        if (genericContainer) {
            this._calculateContainer();
            this._currentCell = genericContainer;
            this._host.setFroalaPopupSize(width, height);
            this._host.popupVisible = true;
            drawIoUi.editor.graph.selectRegion(10000);
        }
    };
    DrawIOExtensionService.prototype.addImageContainer = function (width, height) {
        if (width === void 0) { width = this._gridLayout.boxWidth; }
        if (height === void 0) { height = this._gridLayout.boxHeight; }
        var genericContainer = this._insertVertexForImage('', width, height, 
        // tslint:disable-next-line:max-line-length
        'rounded=0;overflow=width;strokeColor=none;fillColor=#D9D9D9;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
            this._gridLayout.boxWidth +
            ';minHeight=' +
            this._gridLayout.boxHeight +
            ';' +
            'fontFamily=KPMG Web');
        if (genericContainer) {
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    };
    /**
     * calculates the snapping point for down resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculateNegativResizeSnaping = function (gridLayout, movement, step, border, boxSize) {
        if (movement > border + boxSize * (step - 1.5) && movement < border + boxSize * (step - 0.5)) {
            return border + boxSize * (step - 1) + gridLayout.spacing * (step - 1);
        }
        if (movement < border + boxSize * 0.5) {
            return gridLayout.top;
        }
        return movement;
    };
    /**
     * calculates the snapping point for top resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculatePositivResizeSnaping = function (gridLayout, movement, step, border, boxSize) {
        if (movement < border + boxSize * (step - 0.5) && movement > border + boxSize * (step - 1.5)) {
            return border + boxSize * (step - 1) + gridLayout.spacing * (step - 2);
        }
        return movement;
    };
    /**
     * calculates the snapping point for left resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculateNegativSnapingLeft = function (gridLayout, movement, step, border, boxSize) {
        if (movement < border - boxSize * (step - 1.5) && movement > border - boxSize * (step - 0.5)) {
            if (step == 2) {
                return border - boxSize;
            }
            else {
                return border - boxSize * (step - 1) - gridLayout.spacing * (step - 2);
            }
        }
        return movement;
    };
    /**
     * calculates the snapping point for right resizing
     *
     * @param {*} movement
     * @param {*} step
     * @param {*} border
     * @param {*} boxSize
     * @returns {*}
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculatePositivResizeSnapingRight = function (gridLayout, movement, step, border, boxSize) {
        if (movement < border + boxSize * (step - 0.5) && movement > border + boxSize * (step - 1.5)) {
            if (step == 2) {
                return border + boxSize;
            }
            else {
                return border + boxSize * (step - 1) + gridLayout.spacing * (step - 2);
            }
        }
        return movement;
    };
    /**
     * calculate the positive movement for KPMG Container and return our wanted movement
     *
     * @param {*} movement movement
     * @param {*} step step
     * @param {*} boxSize boxSize
     * @returns {*} movement
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculatePositivMovementSnaping = function (gridLayout, movement, step, boxSize) {
        if (movement > boxSize * (step - 1.5) && movement < boxSize * (step - 0.5)) {
            return boxSize * (step - 1) + (step - 1) * gridLayout.spacing;
        }
        return movement;
    };
    /**
     * calculate the left movement for KPMG Container and return our wanted movement
     *
     * @param {*} movement movement
     * @param {*} step column
     * @param {*} boxSize boxSize
     * @returns {*} movement
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculateNegativMovementSnaping = function (gridLayout, movement, step, boxSize) {
        if (movement < boxSize * -(step - 1.5) && movement > boxSize * -(step - 0.5)) {
            return (boxSize * (step - 1) + (step - 1) * gridLayout.spacing) * -1;
        }
        return movement;
    };
    /**
     * Get easier to read Dimensions from Draw IO Cell Container
     *
     * @param {*} drawIoCell
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._getContainerDimensionFromDrawioContainerCellGeo = function (drawIoCell) {
        var drawIoCellgeo = drawIoCell.getGeometry();
        var containerDimension = new _core_models__WEBPACK_IMPORTED_MODULE_2__["ContainerDimension"]();
        containerDimension.left = drawIoCellgeo.x;
        containerDimension.top = drawIoCellgeo.y;
        containerDimension.right = drawIoCellgeo.x + drawIoCellgeo.width;
        containerDimension.bottom = drawIoCellgeo.y + drawIoCellgeo.height;
        containerDimension.width = drawIoCellgeo.width;
        containerDimension.height = drawIoCellgeo.height;
        return containerDimension;
    };
    /**
     * Get all KPMG Custom Container and update Container info with cells used etc.
     *
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculateContainer = function () {
        var _this = this;
        var allCells = drawIoUi.editor.graph.getChildCells(drawIoUi.editor.graph.getDefaultParent());
        this._gridLayout.container = [];
        this._gridLayout.cellsUsed = [];
        this._gridLayout.cellsAvailable = [];
        this._gridLayout.introColumnCell = undefined;
        allCells.forEach(function (cell) {
            if (mxUtils.isNode(cell.value)) {
                if (cell.value.hasAttribute('GenericContainer')) {
                    _this._gridLayout.container.push(cell);
                    var containerDimension = _this._getContainerDimensionFromDrawioContainerCellGeo(cell);
                    var cellsPerContainer = _this._getCellsPerContainer(containerDimension, true);
                    cell.setAttribute('Cells', cellsPerContainer.join(','));
                    _this._gridLayout.cellsAvailable = _this._gridLayout.cellsCoordinates.filter(function (acell) { return !_this._gridLayout.cellsUsed.includes(acell); });
                }
                if (_this._isCellGenericSmartWorkspaceContainerType(cell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].IntroColumn)) {
                    _this._gridLayout.introColumnCell = cell;
                }
            }
        });
        if (this._gridLayout.container.length == 0) {
            this._gridLayout.cellsAvailable = this._gridLayout.maxCellsAvailable;
        }
        if (this.hasIntroColumn && this._host.switchIntroColumn.instance.option('value') != true) {
            this._host.introColumnEnabled = true;
            this._host.switchIntroColumn.instance.option('value', true);
        }
        if (!this.hasIntroColumn && this._host.switchIntroColumn.instance.option('value') == true) {
            this._host.introColumnEnabled = false;
            this._host.switchIntroColumn.instance.option('value', false);
        }
    };
    /**
     * find all cells that are in a KPMG Container and update the KPMG Container with the used cells values.
     * also get all used / available cells for the Grid
     * @param {ContainerDimension} containerDimension
     * @returns array of cell id
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._getCellsPerContainer = function (containerDimension, updateUsedCells) {
        var _this = this;
        var cellsPerContainer = [];
        this._gridLayout.cellsCoordinates.forEach(function (gridcell) {
            if (gridcell.left >= containerDimension.left &&
                gridcell.right <= containerDimension.right &&
                gridcell.top == containerDimension.top) {
                if (updateUsedCells) {
                    _this._gridLayout.cellsUsed.push(gridcell);
                }
                cellsPerContainer.push(gridcell.id);
            }
            if (gridcell.left >= containerDimension.left &&
                gridcell.right <= containerDimension.right &&
                gridcell.bottom == containerDimension.bottom &&
                gridcell.height < containerDimension.height) {
                if (updateUsedCells) {
                    _this._gridLayout.cellsUsed.push(gridcell);
                }
                cellsPerContainer.push(gridcell.id);
            }
        });
        return cellsPerContainer;
    };
    /**
     * calculate Values for the Grid Layout
     *
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._calculateGrid = function () {
        this._gridLayout = new _core_models__WEBPACK_IMPORTED_MODULE_2__["GridLayout"]();
        this._gridLayout.pageWidth = drawIoUi.editor.graph.pageFormat.width;
        this._gridLayout.pageHeight = drawIoUi.editor.graph.pageFormat.height;
        this._gridLayout.columns = this._host.reportPage.grid.columns;
        this._gridLayout.rows = this._host.reportPage.grid.rows;
        this._gridLayout.spacing = this._host.reportPage.grid.spacing;
        this._gridLayout.left = this._host.reportPage.grid.left;
        this._gridLayout.right = this._host.reportPage.grid.right;
        this._gridLayout.top = this._host.reportPage.grid.top;
        this._gridLayout.bottom = this._host.reportPage.grid.bottom;
        this._gridLayout.maxAvailableHeight =
            this._gridLayout.pageHeight - (this._gridLayout.top + this._gridLayout.bottom);
        this._gridLayout.maxAvailablewidth =
            this._gridLayout.pageWidth - (this._gridLayout.left + this._gridLayout.right);
        this._gridLayout.boxHeight = Math.floor((this._gridLayout.maxAvailableHeight - (this._gridLayout.rows - 1) * this._gridLayout.spacing) /
            this._gridLayout.rows);
        this._gridLayout.boxWidth = Math.floor((this._gridLayout.maxAvailablewidth - (this._gridLayout.columns - 1) * this._gridLayout.spacing) /
            this._gridLayout.columns);
        this._gridLayout.cellCount = this._gridLayout.rows * this._gridLayout.columns;
        this._gridLayout.contentTopBorder = this._gridLayout.top;
        this._gridLayout.contentLeftBorder = this._gridLayout.left;
        var column = 1;
        var row = 1;
        for (var index = 1; index <= this._gridLayout.cellCount; index++) {
            var cellData = new _core_models__WEBPACK_IMPORTED_MODULE_2__["GridCell"]();
            cellData.id = index;
            if (index == 1) {
                this._gridLayout.cellsForIntroColumn.push(cellData);
            }
            if (column > this._gridLayout.columns) {
                column = 1;
                row++;
                this._gridLayout.cellsForIntroColumn.push(cellData);
            }
            if (row <= 1) {
                cellData.top = this._gridLayout.top;
            }
            else if (row > 1) {
                // next row
                cellData.top =
                    this._gridLayout.top +
                        this._gridLayout.boxHeight * (row - 1) +
                        this._gridLayout.spacing * (row - 1);
            }
            cellData.row = row;
            cellData.column = column;
            cellData.y = cellData.top;
            if (column <= 1) {
                cellData.left = this._gridLayout.left;
            }
            else if (column > 1) {
                // next column
                cellData.left =
                    this._gridLayout.left +
                        this._gridLayout.boxWidth * (column - 1) +
                        this._gridLayout.spacing * (column - 1);
            }
            cellData.x = cellData.left;
            column++;
            cellData.right = cellData.left + this._gridLayout.boxWidth;
            cellData.bottom = cellData.top + this._gridLayout.boxHeight;
            cellData.height = this._gridLayout.boxHeight;
            cellData.width = this._gridLayout.boxWidth;
            this._gridLayout.contentRightBorder = cellData.right;
            this._gridLayout.contentBottomBorder = cellData.bottom;
            this._gridLayout.cellsCoordinates.push(cellData);
            this._gridLayout.cellsAvailable.push(cellData);
            this._gridLayout.maxCellsAvailable.push(cellData);
        }
    };
    /**
     * insertVertexForTableContainer function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._insertVertexForTableContainer = function (value, w, h, style) {
        var pt = this._getInsertPoint();
        if (pt == undefined) {
            return undefined;
        }
        var cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        var obj = this.createElementObj(_core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].TableContainer);
        return this.updateGraphAndFireEvent(cell, obj);
    };
    /**
     * insertVertex function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._insertVertex = function (value, w, h, style) {
        var pt = this._getInsertPoint();
        if (pt == undefined) {
            return undefined;
        }
        var cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        var obj = this.createElementObj(_core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Froala);
        obj.setAttribute('label', this.containerPlaceHolderText);
        obj.setAttribute('initialValue', '1');
        return this.updateGraphAndFireEvent(cell, obj);
    };
    DrawIOExtensionService.prototype._insertVertexForImage = function (value, w, h, style) {
        var pt = this._getInsertPoint();
        if (pt == undefined) {
            return undefined;
        }
        var cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        var obj = this.createElementObj(_core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Image);
        return this.updateGraphAndFireEvent(cell, obj);
    };
    /**
     * Method returns true of Object was moved out of Graph page to avoid auto extending
     *
     * @param {any} cell -> current Graph Cell
     * @returns {boolean} -> return true or false
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._isOutOfDrawingPage = function (cell) {
        if (typeof drawIoUi == 'undefined') {
            return false;
        }
        var geo = cell.getGeometry();
        // all other objects
        if (geo.x < 0 ||
            geo.y < 0 ||
            geo.x + geo.width > drawIoUi.editor.graph.pageFormat.width ||
            geo.y + geo.height > drawIoUi.editor.graph.pageFormat.height) {
            return true;
        }
        return false;
    };
    /**
     * Method returns true of Object was moved out of Graph page to avoid auto extending
     *
     * @param {any} cell -> current Graph Cell
     * @returns {boolean} -> return true or false
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._isOutOfContentPage = function (cell) {
        if (!this._isCellGenericContainer(cell)) {
            return false;
        }
        var geo = cell.getGeometry();
        if (mxUtils.isNode(cell.value)) {
            // it is a generic container...
            if (geo.x < this._gridLayout.left ||
                geo.y < this._gridLayout.top ||
                geo.x + geo.width > drawIoUi.editor.graph.pageFormat.width - this._gridLayout.right ||
                geo.y + geo.height > drawIoUi.editor.graph.pageFormat.height - this._gridLayout.bottom) {
                return true;
            }
        }
        return false;
    };
    /**
     * Checks for Cell if its a container and if movement is small like 1 pixel -> so its must be moved by cursor
     *
     * @private
     * @param {*} cell
     * @param {*} evt
     * @returns {boolean}
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._isCellMovementByCursorWithOnlyOnePixel = function (cell, evt) {
        if (this._isCellGenericContainer(cell)) {
            if (evt.properties.dx >= -1 &&
                evt.properties.dx <= 1 &&
                evt.properties.dy >= -1 &&
                evt.properties.dy <= 1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Checks is there is already a cell for the given cell
     *
     * @param {*} cell
     * @returns {boolean}
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._isDrawIoCelloverAnotherDrawiCell = function (cell) {
        if (!this._isCellGenericContainer(cell)) {
            return false;
        }
        var cellToCheckDimension = this._getContainerDimensionFromDrawioContainerCellGeo(cell);
        var conflictCells;
        var _loop_1 = function (drawIoContainer) {
            if (drawIoContainer.id == cell.id) {
                return "continue";
            }
            var cellsPerContainer = this_1._getCellsPerContainer(cellToCheckDimension, false);
            var oldUsedCells = cell.value.attributes['Cells'].nodeValue
                .split(',')
                .map(Number)
                .filter(Boolean);
            var changedCells = cellsPerContainer.filter(function (acell) { return !oldUsedCells.includes(acell); });
            conflictCells = this_1._gridLayout.cellsUsed.filter(function (acell) { return changedCells.includes(acell.id); });
            if (conflictCells != undefined) {
                if (conflictCells.length > 0) {
                    return { value: true };
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this._gridLayout.container; _i < _a.length; _i++) {
            var drawIoContainer = _a[_i];
            var state_1 = _loop_1(drawIoContainer);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false;
    };
    /**
     * Method to overwrite Click method from Graph
     *
     * @param {any} this  -> Graph Context
     * @param {any} tsContext -> Kosmos TS Context
     * @param {any} me  -> Clicked Graph Object
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._click = function (tsContext, me) {
        mxGraph.prototype.click.call(this, me);
        // Stores state and source for checking in dblClick
        this.firstClickState = me.getState();
        if (this.firstClickState != undefined) {
            // cell selected
            tsContext._clickedCell = this.firstClickState.cell;
            try {
                tsContext._clickedCellGeometry = this.firstClickState.cell.getGeometry();
                if (mxUtils.isNode(tsContext._clickedCell.value)) {
                    if (tsContext._clickedCell.hasAttribute('GenericContainer')) {
                        tsContext._currentCell = tsContext._clickedCell;
                        tsContext._host.isAnalysisContainerSelected =
                            tsContext._isCellGenericSmartWorkspaceContainerType(tsContext._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Charts) ||
                                tsContext._isCellGenericSmartWorkspaceContainerType(tsContext._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].DataExplorerTable);
                        tsContext._host.isSnippetsVisible =
                            tsContext._isCellGenericSmartWorkspaceContainerType(tsContext._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Froala) ||
                                tsContext._isCellGenericSmartWorkspaceContainerType(tsContext._currentCell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].IntroColumn);
                    }
                    else {
                        tsContext.disableButtonsForSpecificContainerActions();
                    }
                }
                else {
                    tsContext.disableButtonsForSpecificContainerActions();
                }
            }
            catch (err) {
                tsContext._clickedCell = undefined;
                tsContext._clickedCellGeometry = undefined;
            }
        }
        else {
            tsContext.disableButtonsForSpecificContainerActions();
        }
        this.firstClickSource = me.getSource();
    };
    DrawIOExtensionService.prototype.disableButtonsForSpecificContainerActions = function () {
        this._host.isAnalysisContainerSelected = false;
        this._host.isSnippetsVisible = false;
    };
    /**
     * Method to overwrite dbClick method from Graph
     *
     * @param {any} this -> Graph Context
     * @param {any} tsContext -> Kosmos TS Context
     * @param {any} evt  -> Graph Event
     * @param {any} cell -> Graph Cell
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._dblClick = function (tsContext, evt, cell) {
        if (this.isEnabled()) {
            var pt = mxUtils.convertPoint(this.container, mxEvent.getClientX(evt), mxEvent.getClientY(evt));
            // Automatically adds new child cells to edges on double click
            if (evt != null && !this.model.isVertex(cell)) {
                var state = this.model.isEdge(cell) ? this.view.getState(cell) : null;
                var src = mxEvent.getSource(evt);
                if (this.firstClickState == state && this.firstClickSource == src) {
                    if (state == null ||
                        (state.text == null ||
                            state.text.node == null ||
                            (!mxUtils.contains(state.text.boundingBox, pt.x, pt.y) &&
                                !mxUtils.isAncestorNode(state.text.node, mxEvent.getSource(evt))))) {
                        if ((state == null && !this.isCellLocked(this.getDefaultParent())) ||
                            (state != null && !this.isCellLocked(state.cell))) {
                            // Avoids accidental inserts on background
                            if (state != null ||
                                (mxClient.IS_VML && src == this.view.getCanvas()) ||
                                (mxClient.IS_SVG && src == this.view.getCanvas().ownerSVGElement)) {
                                cell = this.addText(pt.x, pt.y, state);
                            }
                        }
                    }
                }
            }
            var stopEvent = false;
            // add check if generic container then open popup etc...1
            if (mxUtils.isNode(cell.value)) {
                if (tsContext.containerPlaceHolderText == tsContext.getAttributeFromCell(cell, 'label')) {
                    drawIoUi.editor.graph.getModel().beginUpdate();
                    cell.setAttribute('label', '<p><br></p>');
                    drawIoUi.editor.graph.getModel().endUpdate();
                    drawIoUi.editor.graph.refresh();
                }
                if (tsContext._isCellGenericSmartWorkspaceContainerType(cell, _core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Image)) {
                    tsContext._currentCell = cell;
                    tsContext._host.imagePopupVisible = true;
                    var content = tsContext.getAttributeFromCell(cell, 'label');
                    if (content.length > 0) {
                        var wrapper = document.createElement('div');
                        wrapper.innerHTML = content;
                        var imageElement = wrapper.firstChild;
                        tsContext._host.imageFromCell = imageElement.src;
                    }
                    else {
                        tsContext._host.imageFromCell = undefined;
                    }
                    tsContext.disableGraph();
                    stopEvent = true;
                }
            }
            if (!stopEvent) {
                mxGraph.prototype.dblClick.call(this, evt, cell);
            }
        }
    };
    /**
     * check if the given Cell is a custom KPMG Container
     *
     * @param {*} cell
     * @returns
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._isCellGenericContainer = function (cell) {
        if (typeof cell == 'undefined') {
            return false;
        }
        if (mxUtils.isNode(cell.value)) {
            if (cell.value.hasAttribute('GenericContainer')) {
                return true;
            }
        }
        return false;
    };
    /**
     *check if the given Cell is a custom KPMG Container of Type
     *
     * @param {*} cell mxCell to check
     * @param {SmartWorkspaceContainerType} type Type of Container
     * @returns
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype._isCellGenericSmartWorkspaceContainerType = function (cell, type) {
        if (mxUtils.isNode(cell.value)) {
            if (cell.value.hasAttribute('SmartWorkspaceContainerType')) {
                if (cell.value.attributes['SmartWorkspaceContainerType'].nodeValue == type) {
                    return true;
                }
            }
        }
        return false;
    };
    DrawIOExtensionService.prototype._insertIntroColumnVertex = function (value, w, h, style) {
        var _this = this;
        var pt = this._getMouseCurrentLocation();
        this._calculateContainer();
        pt.x = this._gridLayout.left;
        pt.y = this._gridLayout.top;
        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            var isIntroCellUsed = this._gridLayout.cellsForIntroColumn.filter(function (acell) {
                return _this._gridLayout.cellsUsed.includes(acell);
            });
            if (isIntroCellUsed.length > 0) {
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
                    message: 'No Space for Into Column available',
                    type: 'error',
                    displayTime: 3000,
                    closeOnClick: true
                });
                this._host.switchIntroColumn.instance.option('value', false);
                return undefined;
            }
        }
        else {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
                message: 'No Space for Into Column available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            this._host.switchIntroColumn.instance.option('value', false);
            return undefined;
        }
        var cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        var obj = this.createElementObj(_core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].IntroColumn);
        obj.setAttribute('label', '<p class="intro-column"></p>');
        this._gridLayout.introColumnCell = cell;
        return this.updateGraphAndFireEvent(cell, obj);
    };
    DrawIOExtensionService.prototype.createElementObj = function (containerType) {
        var doc = mxUtils.createXmlDocument();
        var obj = doc.createElement('object');
        obj.setAttribute('label', '');
        obj.setAttribute('GenericContainer', '1');
        obj.setAttribute('SmartWorkspaceContainerType', containerType);
        obj.setAttribute('Cells', '1');
        return obj;
    };
    DrawIOExtensionService.prototype.fireStopEditingEvent = function () {
        drawIoUi.editor.graph.fireEvent(new mxEventObject(mxEvent.EDITING_STOPPED));
    };
    DrawIOExtensionService.prototype.updateGraphAndFireEvent = function (cell, obj) {
        cell.vertex = true;
        cell.setConnectable(false);
        drawIoUi.editor.graph.getModel().setValue(cell, obj);
        drawIoUi.editor.graph.getModel().beginUpdate();
        try {
            cell = drawIoUi.editor.graph.addCell(cell);
            drawIoUi.editor.graph.fireEvent(new mxEventObject('cellsInserted', 'cells', [cell]));
        }
        finally {
            drawIoUi.editor.graph.getModel().endUpdate();
        }
        drawIoUi.editor.graph.container.focus();
        drawIoUi.editor.graph.setSelectionCell(cell);
        drawIoUi.editor.graph.scrollCellToVisible(cell);
        return cell;
    };
    // analysis
    /**
     * helper to get attribute from cell
     *
     * @param {*} cell mxCell to check
     * @returns
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype.getAttributeFromCell = function (cell, attribut) {
        if (mxUtils.isNode(cell.value)) {
            if (cell.value.hasAttribute(attribut)) {
                return cell.value.attributes[attribut].nodeValue;
            }
        }
        return undefined;
    };
    /**
     * Adds new DataSheetContainer
     *
     * @param {number} analysisId
     * @param {string} tableData
     * @param {string} projectId
     * @param {number} columns
     * @param {number} rows
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype.addDataSheetContainer = function (analysisId, tableData, projectId, columns, rows) {
        if (columns === void 0) { columns = 1; }
        if (rows === void 0) { rows = 1; }
        var width = this.calcWidthByColumns(columns);
        var height = this.calcHeightByRows(rows);
        var genericContainer = this._insertVertexForAnalysisTable('', width, height, 
        // tslint:disable-next-line:max-line-length
        'rounded=0;editable=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
            this._gridLayout.boxWidth +
            ';minHeight=' +
            this._gridLayout.boxHeight +
            ';' +
            'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;', analysisId, tableData, projectId);
        if (genericContainer) {
            this._currentCell = genericContainer;
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    };
    /**
     * insertVertex function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    // tslint:disable-next-line:max-line-length
    DrawIOExtensionService.prototype._insertVertexForAnalysisTable = function (value, w, h, style, analysisId, tableData, projectId) {
        var noSpace = true;
        var pt = this._getMouseCurrentLocation();
        this._calculateContainer();
        if (this._gridLayout.container.length == 0) {
            // no container there
            pt.x = this._gridLayout.left;
            pt.y = this._gridLayout.top;
            noSpace = false;
        }
        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            var freeCellsInSameRow = this.checkForFreeCellsWithSpan();
            if (typeof freeCellsInSameRow != 'undefined') {
                pt.x = freeCellsInSameRow.x;
                pt.y = freeCellsInSameRow.y;
                noSpace = false;
            }
        }
        if (noSpace) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            return undefined;
        }
        var cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        var obj = this.createElementObj(_core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].DataExplorerTable);
        obj.setAttribute('label', tableData);
        obj.setAttribute('AnalysisId', analysisId);
        obj.setAttribute('ProjectId', projectId);
        return this.updateGraphAndFireEvent(cell, obj);
    };
    /**
     * Adds new Container for Charts
     *
     * @param {number} analysisId
     * @param {string} chartData
     * @param {string} analysisData
     * @param {string} projectId
     * @param {number} columns
     * @param {number} rows
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype.addAnalysisGenericContainer = function (analysisId, chartData, analysisData, analysisName, projectId, columns, rows) {
        if (columns === void 0) { columns = 1; }
        if (rows === void 0) { rows = 1; }
        var width = this.calcWidthByColumns(columns);
        var height = this.calcHeightByRows(rows);
        var genericContainer = this._insertVertexForAnalysisCharts('', width, height, 
        // tslint:disable-next-line:max-line-length
        'rounded=0;editable=0;overflow=width;strokeColor=none;fillColor=none;rotatable=0;align=left;whiteSpace=wrap;html=1;verticalAlign=top;minWidth=' +
            this._gridLayout.boxWidth +
            ';minHeight=' +
            this._gridLayout.boxHeight +
            ';' +
            'fontFamily=Arial, sans-serif;fontColor=#000;fontSize=14;fontStyle=0;', analysisId, chartData, analysisData, analysisName, projectId);
        if (genericContainer) {
            this._currentCell = genericContainer;
            this._calculateContainer();
            drawIoUi.editor.graph.selectRegion(10000);
        }
    };
    /**
     * insertVertex function like original in Graph.js
     * but extended with the feature to return a free cell for a KPMG Container or
     * show a message if no free place is available
     *
     * @private
     * @memberof DrawIOExtensionService
     */
    // tslint:disable-next-line:max-line-length
    DrawIOExtensionService.prototype._insertVertexForAnalysisCharts = function (value, w, h, style, analysisId, chartData, analysisData, analysisName, projectId) {
        var noSpace = true;
        var pt = this._getMouseCurrentLocation();
        this._calculateContainer();
        if (this._gridLayout.container.length == 0) {
            // no container there
            pt.x = this._gridLayout.left;
            pt.y = this._gridLayout.top;
            noSpace = false;
        }
        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            var freeCellsInSameRow = this.checkForFreeCellsWithSpan();
            if (typeof freeCellsInSameRow != 'undefined') {
                pt.x = freeCellsInSameRow.x;
                pt.y = freeCellsInSameRow.y;
                noSpace = false;
            }
        }
        if (noSpace) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            return undefined;
        }
        var cell = new mxCell(value, new mxGeometry(pt.x, pt.y, w, h), style);
        var obj = this.createElementObj(_core_enum_smart_workspace_container_type_enum__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceContainerType"].Charts);
        obj.setAttribute('AnalysisId', analysisId);
        obj.setAttribute('ProjectId', projectId);
        obj.setAttribute('ChartData', chartData);
        obj.setAttribute('AnalysisData', analysisData);
        obj.setAttribute('AnalysisName', analysisName);
        return this.updateGraphAndFireEvent(cell, obj);
    };
    /**
     * inserts new extracted SVG from DX Charts into cell
     *
     * @param {*} content
     * @param {*} width
     * @param {*} height
     * @param {*} currentCell
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype.updateChartSVG = function (content, width, height, currentCell, taskName) {
        var _this = this;
        setTimeout(function () {
            drawIoUi.editor.graph.getModel().beginUpdate();
            var fullImg = "<img alt=\"\" align=\"top\" style=\"width: " +
                width +
                "px; height: " +
                height +
                "px\"\u00A0src=\"data:image/svg+xml;base64," +
                content +
                "\">";
            var title = currentCell.value.attributes['AnalysisName'].nodeValue + ' - ' + taskName;
            // tslint:disable-next-line:max-line-length
            var tableData = "<table class=\"addAnalysis\" style=\"width: 100%\"> <thead><tr><th>" +
                title +
                "</th></tr></thead><tbody><tr><td style=\"width: 100%; padding: 0 !important;\">" +
                fullImg +
                "</td></tr></tbody></table>";
            currentCell.setAttribute('label', tableData);
            drawIoUi.editor.graph.getModel().endUpdate();
            drawIoUi.editor.graph.refresh();
            drawIoUi.editor.graph.container.focus();
            setTimeout(function () {
                drawIoUi.editor.graph.enabled = true;
                _this.contentChanged.emit(true);
            }, 100);
        }, 10);
    };
    /**
     * For Chart and DataTable two columns should be available
     *
     * @returns {GridCell}
     * @memberof DrawIOExtensionService
     */
    DrawIOExtensionService.prototype.checkForFreeCellsWithSpan = function () {
        var _loop_2 = function (freeCell) {
            var freeCellsInSameRow = this_2._gridLayout.cellsAvailable.filter(function (acell) { return acell.row == freeCell.row && acell.column == freeCell.column + 1; });
            if (freeCellsInSameRow.length > 0) {
                return { value: freeCell };
            }
        };
        var this_2 = this;
        for (var _i = 0, _a = this._gridLayout.cellsAvailable; _i < _a.length; _i++) {
            var freeCell = _a[_i];
            var state_2 = _loop_2(freeCell);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return undefined;
    };
    /**
     * Get insertion point after check for free space
     */
    DrawIOExtensionService.prototype._getInsertPoint = function () {
        var noSpace = true;
        this._calculateContainer();
        var pt = this._getMouseCurrentLocation();
        if (this._gridLayout.container.length == 0) {
            // no container there
            pt.x = this._gridLayout.left;
            pt.y = this._gridLayout.top;
            noSpace = false;
        }
        if (this._gridLayout.cellsAvailable.length > 0) {
            // check where is free space
            var freeCell = this._gridLayout.cellsAvailable[0];
            pt.x = freeCell.x;
            pt.y = freeCell.y;
            noSpace = false;
        }
        if (noSpace) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            return undefined;
        }
        return pt;
    };
    /**
     * Get current location of mouse
     */
    DrawIOExtensionService.prototype._getMouseCurrentLocation = function () {
        return drawIoUi.editor.graph.isMouseInsertPoint()
            ? drawIoUi.editor.graph.getInsertPoint()
            : drawIoUi.editor.graph.getFreeInsertPoint();
    };
    DrawIOExtensionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"]])
    ], DrawIOExtensionService);
    return DrawIOExtensionService;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/services/draw-io-scripts.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/project/smart-workspace/services/draw-io-scripts.service.ts ***!
  \*****************************************************************************/
/*! exports provided: DrawIOScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawIOScriptService", function() { return DrawIOScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawIOScriptService = /** @class */ (function () {
    function DrawIOScriptService() {
        if (environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            this.filelist = [{ file: 'assets/scripts/dist/draw.io.min.js' }];
        }
        else {
            this.filelist = __webpack_require__(/*! ../../../../assets/configs/drawIoFileList.json */ "./src/assets/configs/drawIoFileList.json");
        }
        this.filelist.forEach(function (script) {
            script.loaded = false;
        });
    }
    DrawIOScriptService.prototype.load = function () {
        var _this = this;
        var promises = [];
        this.filelist.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    DrawIOScriptService.prototype.loadScript = function (drawIOScript) {
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (drawIOScript.loaded) {
                resolve({ script: drawIOScript.file, loaded: true, status: 'Already Loaded' });
            }
            else {
                // load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = drawIOScript.file;
                script_1.async = false;
                script_1.charset = 'utf-8';
                if (script_1.readyState) {
                    // IE
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === 'loaded' || script_1.readyState === 'complete') {
                            script_1.onreadystatechange = null;
                            drawIOScript.loaded = true;
                            resolve({ script: drawIOScript.file, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script_1.onload = function () {
                        drawIOScript.loaded = true;
                        resolve({ script: drawIOScript.file, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: drawIOScript.file, loaded: false, status: 'Error' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    DrawIOScriptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DrawIOScriptService);
    return DrawIOScriptService;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/services/froala-extension.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/project/smart-workspace/services/froala-extension.service.ts ***!
  \******************************************************************************/
/*! exports provided: FroalaExtensionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FroalaExtensionService", function() { return FroalaExtensionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_configuration_kosmos_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/configuration/kosmos-configuration.service */ "./src/app/core/services/configuration/kosmos-configuration.service.ts");
/* harmony import */ var _html_table_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-table-theme.service */ "./src/app/project/smart-workspace/services/html-table-theme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FroalaExtensionService = /** @class */ (function () {
    function FroalaExtensionService(_htmlTableThemeService) {
        this._htmlTableThemeService = _htmlTableThemeService;
        this._tableColorTemplates = {
            'table.kpmg.borderColors': {
                template: '[_BUTTONS_][_COLORS_]',
                popupName: 'table.kpmg.borderColors',
                cmdName: 'kpmgTableApplyCellBorderColor'
            },
            'table.kpmg.themes': {
                template: '[_BUTTONS_][_COLORS_]',
                popupName: 'table.kpmg.themes',
                cmdName: 'kpmgTableApplyTheme'
            }
        };
    }
    FroalaExtensionService.prototype.getFroalaOptions = function () {
        var parent = this;
        return {
            htmlAllowedTags: $.FE.DEFAULTS.htmlAllowedTags.slice(),
            key: _core_services_configuration_kosmos_configuration_service__WEBPACK_IMPORTED_MODULE_1__["KosmosConfigurationService"].appConfig.FROALA_LICENSE_KEY,
            charCounterCount: false,
            height: 300,
            toolbarSticky: false,
            autofocus: true,
            shortcutsHint: true,
            imageUpload: false,
            fileUpload: false,
            videoUpload: false,
            quickInsertButtons: ['table', 'ul', 'ol', 'hr'],
            quickInsertTags: ['p', 'h1', 'h2', 'h3', 'blockquote'],
            fontSizeSelection: true,
            fontSize: ['8', '9', '10', '11', '12', '14', '16', '18', '24', '30', '36', '48', '60', '72', '96'],
            fontSizeDefaultSelection: '14',
            paragraphFormat: {
                H1: 'Heading 1',
                H2: 'Heading 2',
                H3: 'Heading 3',
                N: 'Paragraph',
                BLOCKQUOTE: 'Quote'
            },
            paragraphFormatSelection: true,
            paragraphDefaultSelection: 'Paragraph',
            toolbarButtons: [
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                '|',
                'paragraphFormat',
                'fontSize',
                'color',
                '-',
                'align',
                'formatOL',
                'formatUL',
                'outdent',
                'indent',
                '|',
                'insertTable',
                '|',
                'specialCharacters',
                'insertHR',
                'selectAll',
                '|',
                'undo',
                'redo'
            ],
            tableEditButtons: [
                'kpmgTableHeader',
                'kpmgTableCellBorderColor',
                'kpmgTableTheme',
                '|',
                'tableRows',
                'tableColumns',
                'tableRemove',
                '-',
                'tableCells',
                'tableCellBackground',
                'tableCellVerticalAlign',
                'tableCellHorizontalAlign'
            ],
            tableColors: this._htmlTableThemeService.getColors().concat(['#FFFFFF', 'REMOVE']),
            tableThemeColor: this._htmlTableThemeService.getColors().concat(['REMOVE']),
            events: {
                'froalaEditor.table.inserted': function (e, editor, table) {
                    $(table).addClass('kpmg-table');
                    parent._addInitialHeader($(table));
                    // Update cursor position.
                    editor.selection.restore();
                    parent._htmlTableThemeService.applyTableThemeByName($(table), parent._htmlTableThemeService.getDefaultTheme());
                }
            },
            helpSets: [
                {
                    title: 'Common actions',
                    commands: [
                        { val: 'OSkeyC', desc: 'Copy' },
                        { val: 'OSkeyX', desc: 'Cut' },
                        { val: 'OSkeyV', desc: 'Paste' },
                        { val: 'OSkeyZ', desc: 'Undo' },
                        { val: 'OSkeyShift+Z', desc: 'Redo' }
                    ]
                },
                {
                    title: 'Basic Formatting',
                    commands: [
                        { val: 'OSkeyA', desc: 'Select All' },
                        { val: 'OSkeyB', desc: 'Bold' },
                        { val: 'OSkeyI', desc: 'Italic' },
                        { val: 'OSkeyU', desc: 'Underline' },
                        { val: 'OSkeyS', desc: 'Strikethrough' },
                        { val: 'OSkey]', desc: 'Increase Indent' },
                        { val: 'OSkey[', desc: 'Decrease Indent' }
                    ]
                },
                {
                    title: 'Quote',
                    commands: [
                        { val: "OSkey'", desc: 'Increase quote level' },
                        { val: "OSkeyShift+'", desc: 'Decrease quote level' }
                    ]
                },
                {
                    title: 'Table',
                    commands: [
                        { val: 'Alt+Space', desc: 'Select table cell' },
                        { val: 'Shift+Left/Right arrow', desc: 'Extend selection one cell' },
                        { val: 'Shift+Up/Down arrow', desc: 'Extend selection one row' }
                    ]
                }
            ]
        };
    };
    FroalaExtensionService.prototype.init = function () {
        var parent = this;
        $.extend($.FE.POPUP_TEMPLATES, {
            'table.kpmg.borderColors': this._tableColorTemplates['table.kpmg.borderColors'].template,
            'table.kpmg.themes': this._tableColorTemplates['table.kpmg.themes'].template
        });
        // Select table cell border color command.
        $.FE.RegisterCommand('kpmgTableApplyCellBorderColor', {
            undo: true,
            focus: false,
            callback: function (cmd, val) {
                parent._setBorder(val, this);
            }
        });
        // Select table cell border color command.
        $.FE.RegisterCommand('kpmgTableApplyTheme', {
            undo: true,
            focus: false,
            callback: function (cmd, val) {
                parent._htmlTableThemeService.applyTableThemeByColor(this.$el.find('.fr-selected-cell').closest('table'), val);
            }
        });
        $.FroalaEditor.RegisterCommand('kpmgTableHeader', {
            title: 'Table Header',
            icon: 'tableHeader',
            focus: false,
            toggle: true,
            callback: function () {
                if (this.popups
                    .get('table.edit')
                    .find('.fr-command[data-cmd="kpmgTableHeader"]')
                    .hasClass('fr-active')) {
                    this.table.removeHeader();
                }
                else {
                    this.table.addHeader();
                    parent._htmlTableThemeService.applyTableHeaderTheme(this.table.selectedTable(), this.table.selectedTable().data('theme'));
                }
            },
            refresh: function (e) {
                var table = this.table.selectedTable();
                if (table.length > 0 && table.find('th').length == 0) {
                    e.removeClass('fr-active').attr('aria-pressed', false);
                }
                else {
                    e.addClass('fr-active').attr('aria-pressed', true);
                }
            }
        });
        $.FroalaEditor.DefineIcon('kpmgTableCellBorderColor', {
            NAME: 'square-o',
            FA5NAME: 'square'
        });
        $.FroalaEditor.RegisterCommand('kpmgTableCellBorderColor', {
            title: 'Border Color',
            icon: 'kpmgTableCellBorderColor',
            undo: true,
            focus: false,
            popup: true,
            refreshAfterCallback: true,
            callback: function (cmd, val, params) {
                parent._showColorPopup(this, parent._tableColorTemplates['table.kpmg.borderColors']);
            }
        });
        $.FroalaEditor.DefineIcon('kpmgTableTheme', { NAME: 'tint' });
        $.FroalaEditor.RegisterCommand('kpmgTableTheme', {
            title: 'Table Theme',
            icon: 'kpmgTableTheme',
            undo: true,
            focus: false,
            popup: true,
            refreshAfterCallback: true,
            callback: function (cmd, val, params) {
                parent._showColorPopup(this, parent._tableColorTemplates['table.kpmg.themes']);
            }
        });
    };
    /*
     * Set background color to selected cells.
     */
    FroalaExtensionService.prototype._setBorder = function (color, editor) {
        var $selected_cells = editor.$el.find('.fr-selected-cell');
        // Set background  color.
        if (color != 'REMOVE') {
            this._htmlTableThemeService.applyTableCellBorderColor($selected_cells, color);
        }
        else {
            this._htmlTableThemeService.applyTableCellBorderColor($selected_cells, undefined);
        }
        editor.table.showEditPopup();
    };
    FroalaExtensionService.prototype._showColorPopup = function (editor, config) {
        var popupName = config.popupName;
        // Set popup position.
        var map = this._tableMap(editor);
        if (map) {
            var $popup = editor.popups.get(popupName);
            if (!$popup) {
                $popup = this._initColorsPopup(editor, config);
            }
            editor.popups.setContainer(popupName, editor.$sc);
            var offset = this._selectionOffset(map, editor);
            var left = (offset.left + offset.right) / 2;
            var top_1 = offset.bottom;
            // Refresh selected color.
            this._refreshColor(editor, config);
            editor.popups.show(popupName, left, top_1, offset.bottom - offset.top);
        }
    };
    FroalaExtensionService.prototype._tableMap = function (editor) {
        var $table = null;
        var map = [];
        if (editor.table.selectedCells().length > 0) {
            $table = editor.table.selectedTable();
        }
        if ($table) {
            $table
                .find('tr:visible')
                .not($table.find('table tr'))
                .each(function (row, tr) {
                var $tr = $(tr);
                var c_index = 0;
                $tr.find('> th, > td').each(function (col, td) {
                    var $td = $(td);
                    var cspan = parseInt($td.attr('colspan'), 10) || 1;
                    var rspan = parseInt($td.attr('rowspan'), 10) || 1;
                    for (var i = row; i < row + rspan; i++) {
                        for (var j = c_index; j < c_index + cspan; j++) {
                            if (!map[i]) {
                                map[i] = [];
                            }
                            if (!map[i][j]) {
                                map[i][j] = td;
                            }
                            else {
                                c_index++;
                            }
                        }
                    }
                    c_index += cspan;
                });
            });
        }
        return map;
    };
    FroalaExtensionService.prototype._initColorsPopup = function (editor, config) {
        var popupName = config.popupName;
        // Table colors buttons.
        var table_buttons = '';
        if (editor.opts.tableColorsButtons.length > 0) {
            table_buttons =
                '<div class="fr-buttons fr-table-colors-buttons">' +
                    editor.button.buildList(editor.opts.tableColorsButtons) +
                    '</div>';
        }
        var template = {
            buttons: table_buttons,
            colors: this._colorsHTML(editor, config)
        };
        var $popup = editor.popups.create(popupName, template);
        editor.events.$on(editor.$wp, 'scroll.table-colors', function () {
            if (editor.popups.isVisible(popupName)) {
                this._showBorderColorPopup(editor);
            }
        });
        this._addColorsAccessibility($popup, editor, config);
        return $popup;
    };
    FroalaExtensionService.prototype._colorsHTML = function (editor, config) {
        var commandName = config.cmdName;
        // Create colors html.
        var colors_html = '<div class="fr-table-colors">';
        // Add colors.
        for (var i = 0; i < editor.opts.tableThemeColor.length; i++) {
            if (i !== 0 && i % editor.opts.tableColorsStep === 0) {
                colors_html += '<br>';
            }
            if (editor.opts.tableThemeColor[i] != 'REMOVE') {
                colors_html +=
                    '<span class="fr-command" style="background: ' +
                        editor.opts.tableThemeColor[i] +
                        ';" tabIndex="-1" role="button" data-cmd="' +
                        commandName +
                        '" data-param1="' +
                        editor.opts.tableThemeColor[i] +
                        '"><span class="fr-sr-only">' +
                        editor.language.translate('Color') +
                        ' ' +
                        editor.opts.tableThemeColor[i] +
                        '&nbsp;&nbsp;&nbsp;</span></span>';
            }
            else {
                colors_html +=
                    // tslint:disable-next-line:max-line-length
                    '<span class="fr-command" data-cmd="' +
                        commandName +
                        '" tabIndex="-1" role="button" data-param1="REMOVE" title="' +
                        editor.language.translate('Clear Formatting') +
                        '">' +
                        editor.icon.create('tableColorRemove') +
                        '<span class="fr-sr-only">' +
                        editor.language.translate('Clear Formatting') +
                        '</span></span>';
            }
        }
        colors_html += '</div>';
        return colors_html;
    };
    FroalaExtensionService.prototype._addColorsAccessibility = function ($popup, editor, config) {
        var popupName = config.popupName;
        // Register popup event.
        editor.events.on('popup.tab', function (e) {
            var $focused_item = $(e.currentTarget);
            // Skip if popup is not visible or focus is elsewere.
            if (!editor.popups.isVisible(popupName) || !$focused_item.is('span')) {
                return true;
            }
            var key_code = e.which;
            var status = true;
            // Tabbing.
            if ($.FE.KEYCODE.TAB == key_code) {
                var $tb = $popup.find('.fr-buttons');
                // Focus back the popup's toolbar if exists.
                status = !editor.accessibility.focusToolbar($tb, e.shiftKey ? true : false);
            }
            else if ($.FE.KEYCODE.ARROW_UP == key_code ||
                $.FE.KEYCODE.ARROW_DOWN == key_code ||
                $.FE.KEYCODE.ARROW_LEFT == key_code ||
                $.FE.KEYCODE.ARROW_RIGHT == key_code) {
                // Arrows.
                // Get all current colors.
                var $colors = $focused_item.parent().find('span.fr-command');
                // Get focused item position.
                var index = $colors.index($focused_item);
                // Get color matrix dimensions.
                var columns = editor.opts.colorsStep;
                var lines = Math.floor($colors.length / columns);
                // Get focused item coordinates.
                var column = index % columns;
                var line = Math.floor(index / columns);
                var nextIndex = line * columns + column;
                var dimension = lines * columns;
                // Calculate next index. Go to the other opposite site of the matrix if there is no next adjacent element.
                // Up/Down: Traverse matrix lines.
                // Left/Right: Traverse the matrix as it is a vector.
                if ($.FE.KEYCODE.ARROW_UP == key_code) {
                    nextIndex = (((nextIndex - columns) % dimension) + dimension) % dimension; // Javascript negative modulo bug.
                }
                else if ($.FE.KEYCODE.ARROW_DOWN == key_code) {
                    nextIndex = (nextIndex + columns) % dimension;
                }
                else if ($.FE.KEYCODE.ARROW_LEFT == key_code) {
                    nextIndex = (((nextIndex - 1) % dimension) + dimension) % dimension; // Javascript negative modulo bug.
                }
                else if ($.FE.KEYCODE.ARROW_RIGHT == key_code) {
                    nextIndex = (nextIndex + 1) % dimension;
                }
                // Get the next element based on the new index.
                var $el = $($colors.get(nextIndex));
                // Focus.
                editor.events.disableBlur();
                $el.focus();
                status = false;
            }
            else if ($.FE.KEYCODE.ENTER == key_code) {
                // ENTER or SPACE.
                editor.button.exec($focused_item);
                status = false;
            }
            // Prevent propagation.
            if (status === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            return status;
        }, true);
    };
    FroalaExtensionService.prototype._selectionOffset = function (map, editor) {
        var selection = this._currentSelection(map, editor);
        // Top left cell.
        var $tl = $(map[selection.min_i][selection.min_j]);
        // Top right cell.
        var $tr = $(map[selection.min_i][selection.max_j]);
        // Bottom left cell.
        var $bl = $(map[selection.max_i][selection.min_j]);
        var left = $tl.offset().left;
        var right = $tr.offset().left + $tr.outerWidth();
        var top = $tl.offset().top;
        var bottom = $bl.offset().top + $bl.outerHeight();
        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        };
    };
    FroalaExtensionService.prototype._currentSelection = function (map, editor) {
        var cells = editor.$el.find('.fr-selected-cell');
        if (cells.length > 0) {
            var min_i = map.length;
            var max_i = 0;
            var min_j = map[0].length;
            var max_j = 0;
            for (var i = 0; i < cells.length; i++) {
                var cellOrigin = this._cellOrigin(cells[i], map);
                var cellEnd = this._cellEnds(cellOrigin.row, cellOrigin.col, map);
                min_i = Math.min(cellOrigin.row, min_i);
                max_i = Math.max(cellEnd.row, max_i);
                min_j = Math.min(cellOrigin.col, min_j);
                max_j = Math.max(cellEnd.col, max_j);
            }
            return {
                min_i: min_i,
                max_i: max_i,
                min_j: min_j,
                max_j: max_j
            };
        }
        else {
            return null;
        }
    };
    /*
     * Get the i, j coordinates of a cell in the table map.
     * These are the coordinates where the cell starts.
     */
    FroalaExtensionService.prototype._cellOrigin = function (td, map) {
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (map[i][j] == td) {
                    return {
                        row: i,
                        col: j
                    };
                }
            }
        }
    };
    /*
     * Get the i, j coordinates where a cell ends in the table map.
     */
    FroalaExtensionService.prototype._cellEnds = function (origin_i, origin_j, map) {
        var max_i = origin_i + 1;
        var max_j = origin_j + 1;
        // Compute max_i
        while (max_i < map.length) {
            if (map[max_i][origin_j] != map[origin_i][origin_j]) {
                max_i--;
                break;
            }
            max_i++;
        }
        if (max_i == map.length) {
            max_i--;
        }
        // Compute max_j
        while (max_j < map[origin_i].length) {
            if (map[origin_i][max_j] != map[origin_i][origin_j]) {
                max_j--;
                break;
            }
            max_j++;
        }
        if (max_j == map[origin_i].length) {
            max_j--;
        }
        return {
            row: max_i,
            col: max_j
        };
    };
    /*
     * Show the current selected color.
     */
    FroalaExtensionService.prototype._refreshColor = function (editor, config) {
        var popupName = config.popupName;
        var $popup = editor.popups.get(popupName);
        var $cell = editor.$el.find('.fr-selected-cell:first');
        var color = $cell.attr('data-color');
        var $input = $popup.find('.fr-table-colors-hex-layer input');
        // Remove current color selection.
        $popup.find('.fr-selected-color').removeClass('fr-selected-color fr-active-item');
        // Find the selected color.
        $popup.find('span[data-param1="' + color.toLowerCase() + '"]').addClass('fr-selected-color fr-active-item');
        $input.val(color).trigger('change');
    };
    /*
     * Add initial table header.
     */
    FroalaExtensionService.prototype._addInitialHeader = function ($table) {
        if ($table.length > 0 && $table.find('th').length === 0) {
            // Create header HTML.
            var thead = '<thead><tr>';
            var i = void 0;
            var col_1 = 0;
            // Get first row and count table columns.
            $table.find('tr:first > td').each(function () {
                var $td = $(this);
                col_1 += parseInt($td.attr('colspan'), 10) || 1;
            });
            // Add cells.
            for (i = 0; i < col_1; i++) {
                thead += '<th>';
                if (i == 0) {
                    thead += $.FE.MARKERS;
                }
                thead += '<br></th>';
            }
            thead += '</tr></thead>';
            $table.prepend(thead);
        }
    };
    FroalaExtensionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_html_table_theme_service__WEBPACK_IMPORTED_MODULE_2__["HtmlTableThemeService"]])
    ], FroalaExtensionService);
    return FroalaExtensionService;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/services/html-table-theme.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/project/smart-workspace/services/html-table-theme.service.ts ***!
  \******************************************************************************/
/*! exports provided: HtmlTableThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTableThemeService", function() { return HtmlTableThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HtmlTableThemeService = /** @class */ (function () {
    function HtmlTableThemeService() {
        var _this = this;
        this._useInlineCss = false;
        this._themes = [
            { name: 'kpmg-blue', displayName: 'KPMG Blue', hexColor: '#00338d' },
            { name: 'kpmg-medium-blue', displayName: 'Medium blue', hexColor: '#005eb8' },
            { name: 'kpmg-light-blue', displayName: 'Light blue', hexColor: '#0091da' },
            { name: 'kpmg-violet', displayName: 'Violet', hexColor: '#483698' },
            { name: 'kpmg-purple', displayName: 'Purple', hexColor: '#470a68' },
            { name: 'kpmg-light-purple', displayName: 'Light purple', hexColor: '#6d2077' },
            { name: 'kpmg-green', displayName: 'Green', hexColor: '#00a3a1' },
            { name: 'kpmg-green-haze', displayName: 'Green Haze', hexColor: '#009A44' },
            { name: 'kpmg-apple', displayName: 'Apple', hexColor: '#43B02A' },
            { name: 'kpmg-web-orange', displayName: 'Web Orange', hexColor: '#EAAA00' },
            { name: 'kpmg-sea-buckthorn', displayName: 'Sea Buckthorn', hexColor: '#F68D2E' },
            { name: 'kpmg-maroon-flush', displayName: 'Maroon Flush', hexColor: '#BC204B' },
            { name: 'kpmg-lipstick', displayName: 'Lipstick', hexColor: '#C6007E' },
            { name: 'kpmg-alto', displayName: 'Alto', hexColor: '#D9D9D9' },
            { name: 'kpmg-walnut', displayName: 'Walnut', hexColor: '#753F19' },
            { name: 'kpmg-paarl', displayName: 'Paarl', hexColor: '#9B642E' },
            { name: 'kpmg-gurkha', displayName: 'Gurkha', hexColor: '#909375' },
            { name: 'kpmg-carissma', displayName: 'Carissma', hexColor: '#E38C9F' },
            { name: 'kpmg-sunglo', displayName: 'Sunglo', hexColor: '#E36877' }
        ];
        this._themesClassNames = {};
        this._themesHexClassName = {};
        this.paddingBase = 5;
        this._themes.forEach(function (_) {
            _this._themesClassNames[_.name] = _.displayName;
            _this._themesHexClassName[_.hexColor.toLowerCase()] = _.name;
        });
    }
    HtmlTableThemeService.prototype.getColors = function () {
        return Object.keys(this._themesHexClassName);
    };
    HtmlTableThemeService.prototype.getDefaultTheme = function () {
        return this._themes[0].name;
    };
    HtmlTableThemeService.prototype.getKpmgThemeOptions = function () {
        var options = {};
        this._themes.forEach(function (theme) {
            options[theme.name] = theme.displayName;
        });
        return options;
    };
    HtmlTableThemeService.prototype.applyTableThemeByName = function ($table, themeName) {
        if ($table.length == 0) {
            return;
        }
        var themeColor = this._getThemeColor(themeName);
        if (this._useInlineCss) {
            $table
                .data('theme', themeName)
                .css('border-color', 'transparent')
                .css('border-spacing', '0')
                .css('border-collapse', 'collapse');
            this.applyTableHeaderColor($table, themeColor);
            this.applyTableBodyColor($table, themeColor);
        }
        else {
            if (!$table.hasClass('kpmg-table')) {
                $table.addClass('kpmg-table');
            }
            this._applyStyle(themeName, $table, false, this._themesClassNames);
        }
        this._setCellColorData($table.find('th, td'), themeColor);
    };
    HtmlTableThemeService.prototype.applyTableThemeByColor = function ($table, hexColor) {
        if ($table.length == 0) {
            return;
        }
        var theme = this._themesHexClassName[hexColor.toLowerCase()];
        if (!theme) {
            this.applyTableThemeByName($table, this.getDefaultTheme());
        }
        this.applyTableThemeByName($table, theme);
    };
    HtmlTableThemeService.prototype.applyTableHeaderTheme = function ($table, themeName) {
        if (this._useInlineCss) {
            this.applyTableHeaderColor($table, this._getThemeColor(themeName));
        }
    };
    HtmlTableThemeService.prototype.applyTableHeaderColor = function ($table, themeColor) {
        if ($table.length == 0) {
            return;
        }
        var $cells = $table.find('th');
        if ($cells.length == 0) {
            return;
        }
        var textColor = '#ffffff';
        $cells
            .css('text-align', 'left')
            .css('background-color', themeColor)
            .css('border-color', themeColor)
            .css('color', textColor);
        this._applyTableCellStyle($cells);
    };
    HtmlTableThemeService.prototype.applyTableBodyTheme = function ($table, themeName) {
        if (this._useInlineCss) {
            this.applyTableBodyColor($table, this._getThemeColor(themeName));
        }
    };
    HtmlTableThemeService.prototype.applyTableBodyColor = function ($table, themeColor) {
        if ($table.length == 0) {
            return;
        }
        var $cells = $table.find('td');
        if ($cells.length == 0) {
            return;
        }
        $cells.css('border-color', themeColor);
        this._applyTableCellStyle($cells);
    };
    HtmlTableThemeService.prototype.applyTableCellPadding = function ($cells, padding) {
        if ($cells.length == 0) {
            return;
        }
        $cells.closest('table').data('userPadding', padding);
        $cells
            .data('userPadding', padding)
            .css('padding-right', this.paddingBase + padding + "px")
            .css('padding-left', this.paddingBase + padding + "px");
    };
    HtmlTableThemeService.prototype.applyTableCellBorderColor = function ($cells, color) {
        if (!color) {
            color = this._getThemeColor(this.getDefaultTheme());
        }
        $cells.css('border-color', color);
        this._setCellColorData($cells, color);
    };
    HtmlTableThemeService.prototype._applyTableCellStyle = function ($cells) {
        if ($cells.length == 0) {
            return;
        }
        $cells
            .css('border-width', '1px')
            .css('border-style', 'solid')
            .css('border-collapse', 'collapse')
            .css('padding-top', this.paddingBase + "px")
            .css('padding-right', this.paddingBase + "px")
            .css('padding-bottom', this.paddingBase + "px")
            .css('padding-left', this.paddingBase + "px");
    };
    HtmlTableThemeService.prototype._getThemeColor = function (themeName) {
        var theme = this._themes.find(function (t) { return t.name == themeName; });
        if (theme) {
            return theme.hexColor;
        }
        return this._getThemeColor(this.getDefaultTheme());
    };
    HtmlTableThemeService.prototype._setCellColorData = function ($cells, color) {
        if ($cells.length == 0) {
            return;
        }
        $cells.attr('data-color', color);
    };
    HtmlTableThemeService.prototype._applyStyle = function (className, element, multiple_styles, styles) {
        if (element.length > 0) {
            // Remove multiple styles.
            if (!multiple_styles) {
                var classes = Object.keys(styles);
                classes.splice(classes.indexOf(className), 1);
                element.removeClass(classes.join(' '));
            }
            element.toggleClass(className);
        }
    };
    HtmlTableThemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HtmlTableThemeService);
    return HtmlTableThemeService;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SmartWorkspaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartWorkspaceRoutingModule", function() { return SmartWorkspaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/guards/unsaved-changes/unsaved-changes.guard */ "./src/app/core/guards/unsaved-changes/unsaved-changes.guard.ts");
/* harmony import */ var _core_resolver_project_project_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/resolver/project/project-resolver */ "./src/app/core/resolver/project/project-resolver.ts");
/* harmony import */ var _core_resolver_project_task_progress_state_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/resolver/project/task-progress-state.resolver */ "./src/app/core/resolver/project/task-progress-state.resolver.ts");
/* harmony import */ var _smart_workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smart-workspace.component */ "./src/app/project/smart-workspace/smart-workspace.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: ':productId/:chapterId/:taskId/page/:sequenceNumber/:guid',
        component: _smart_workspace_component__WEBPACK_IMPORTED_MODULE_5__["SmartWorkspaceComponent"],
        resolve: {
            project: _core_resolver_project_project_resolver__WEBPACK_IMPORTED_MODULE_3__["ProjectResolver"],
            taskState: _core_resolver_project_task_progress_state_resolver__WEBPACK_IMPORTED_MODULE_4__["TaskProgressStateResolver"]
        },
        canDeactivate: [_core_guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_2__["UnsavedChangesGuard"]]
    },
    {
        path: ':productId/:chapterId/:taskId/page/:sequenceNumber',
        component: _smart_workspace_component__WEBPACK_IMPORTED_MODULE_5__["SmartWorkspaceComponent"],
        resolve: {
            project: _core_resolver_project_project_resolver__WEBPACK_IMPORTED_MODULE_3__["ProjectResolver"],
            taskState: _core_resolver_project_task_progress_state_resolver__WEBPACK_IMPORTED_MODULE_4__["TaskProgressStateResolver"]
        },
        canDeactivate: [_core_guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_2__["UnsavedChangesGuard"]]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var SmartWorkspaceRoutingModule = /** @class */ (function () {
    function SmartWorkspaceRoutingModule() {
    }
    SmartWorkspaceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_core_resolver_project_project_resolver__WEBPACK_IMPORTED_MODULE_3__["ProjectResolver"], _core_resolver_project_task_progress_state_resolver__WEBPACK_IMPORTED_MODULE_4__["TaskProgressStateResolver"]]
        })
    ], SmartWorkspaceRoutingModule);
    return SmartWorkspaceRoutingModule;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-of-content--header\">\r\n    <i class=\"close kpmg-icon-remove\" (click)=\"onClose()\"></i>\r\n</div>\r\n<div class=\"table-of-content\">\r\n    <ng-container *ngFor=\"let product of tableOfContent; trackBy: trackById\">\r\n        <section class=\"product\">\r\n            <h2 class=\"product-title\" (click)=\"onCollapse(product)\">\r\n                {{ product?.title }}\r\n                <i class=\"product-collapse dx-icon\" [ngClass]=\"{'dx-icon-chevrondown': product.isCollapsed, 'dx-icon-chevronright': !product.isCollapsed}\"></i>\r\n            </h2>\r\n            <ol class=\"chapters\" [ngClass]=\"{'is-collpased': product.isCollapsed}\">\r\n                <ng-container *ngFor=\"let chapter of product.children; trackBy: trackById\">\r\n                    <li class=\"chapter\">\r\n                        <h4 class=\"chapter-title\">{{ chapter.title }}</h4>\r\n\r\n                        <ol class=\"tasks\">\r\n                            <ng-container *ngFor=\"let task of chapter.children; trackBy: trackById\">\r\n                                <li class=\"task\">\r\n                                    <div class=\"highlight-line\" [ngClass]=\"{'selected': isSelected(task)}\">\r\n                                        <button class=\"task-title\" (click)=\"onSelect(task, $event)\">\r\n                                            {{ task.title }}\r\n                                            <strong *ngIf=\"task.type == pageType.COVER\">&nbsp;(C)</strong>\r\n                                            <span class=\"page-number\" *ngIf=\"task.pageNumber != null\">\r\n                                                {{ task.pageNumber }}\r\n                                            </span>\r\n                                        </button>\r\n                                        <div class=\"task-status\">\r\n                                            <kosmos-task-progress-state [stateId]=\"task.progressStateId\"></kosmos-task-progress-state>\r\n                                        </div>\r\n                                        <button class=\"page-button kpmg-icon-add\" (click)=\"onAddPage(task)\">\r\n                                        </button>\r\n                                    </div>\r\n                                    <ul class=\"task-pages\" *ngIf=\"hasChildren(task)\">\r\n                                        <ng-container *ngFor=\"let page of task.children; let i = index; trackBy: trackById\">\r\n                                            <li class=\"task-page\">\r\n                                                <div class=\"highlight-line\" [ngClass]=\"{'selected': isSelected(page)}\">\r\n                                                    <button class=\"page-title\" (click)=\"onSelect(page, $event)\">\r\n                                                        Page {{ i + 1 }}\r\n                                                        <strong *ngIf=\"page.type == pageType.COVER\">&nbsp;(C)</strong>\r\n                                                        <span class=\"page-number\" *ngIf=\"page.pageNumber != null\">\r\n                                                            {{ page.pageNumber }}\r\n                                                        </span>\r\n                                                    </button>\r\n                                                    <button *ngIf=\"task.children.length > 1\" class=\"page-button kpmg-icon-delete-x\"\r\n                                                        (click)=\"onDeletePage(page)\">\r\n                                                    </button>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ng-container>\r\n                                    </ul>\r\n                                    <kosmos-table-of-content-select-line *ngIf=\"hasChildren(task)\" [selected]=\"task.id == selectedTaskId\"></kosmos-table-of-content-select-line>\r\n                                </li>\r\n                            </ng-container>\r\n                        </ol>\r\n                    </li>\r\n                </ng-container>\r\n            </ol>\r\n        </section>\r\n    </ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n:host {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 315px;\n  flex-basis: 315px;\n  overflow: hidden;\n  background-color: #fff;\n  z-index: 200;\n  box-shadow: 1px 0 0 0 rgba(160, 168, 189, 0.5), 5px 0 25px 0 rgba(40, 44, 55, 0.3);\n  left: -340px;\n  transition: left 0.35s cubic-bezier(0.25, -0.1, 0, 1); }\n:host.open {\n    left: 0;\n    transition-timing-function: cubic-bezier(1, 0, 0.75, 0.9); }\n.table-of-content--header {\n  margin: 16px 10px;\n  font-size: 16px;\n  color: #11151e; }\n.table-of-content--header > .close {\n    cursor: pointer; }\n.table-of-content {\n  background-color: #fff; }\n.table-of-content:hover {\n    -webkit-overflow-scrolling: touch;\n    overflow-x: auto;\n    overflow-y: auto;\n    overflow-x: hidden; }\n.table-of-content:hover::-webkit-scrollbar {\n      -webkit-appearance: none;\n              appearance: none;\n      width: 10px;\n      height: 10px; }\n.table-of-content:hover::-webkit-scrollbar-thumb {\n      background-color: #6b6868;\n      border-radius: 0; }\n.table-of-content:hover::-webkit-scrollbar-track-piece {\n      background-color: #3b445b; }\n.table-of-content .product > .product-title {\n    background: #11151e;\n    font-size: 16px;\n    color: #fff;\n    margin: 0 10px 20px;\n    border-radius: 2px;\n    padding: 6px 24px 6px 10px;\n    position: relative;\n    cursor: pointer; }\n.table-of-content .product > .product-title > .product-collapse {\n      position: absolute;\n      top: 8px;\n      right: 5px; }\n.table-of-content .chapters {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    counter-reset: item;\n    overflow: hidden;\n    color: #11151e;\n    height: 0; }\n.table-of-content .chapters.is-collpased {\n      height: auto; }\n.table-of-content .chapters > .chapter {\n      margin-bottom: 30px; }\n.table-of-content .chapters > .chapter > .chapter-title {\n        font-size: 12px;\n        font-weight: 600;\n        padding: 0 20px;\n        margin: 0;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        width: 100%;\n        display: inline-block;\n        overflow: hidden; }\n.table-of-content .chapters > .chapter > .chapter-title::before {\n          counter-increment: item;\n          content: counter(item) \". \"; }\n.table-of-content .tasks {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    margin: 0 0 15px;\n    counter-reset: item; }\n.table-of-content .tasks > .task {\n      font-size: 12px;\n      position: relative;\n      margin-left: 26px;\n      margin-right: 10px; }\n.table-of-content .tasks > .task:focus {\n        outline: none; }\n.table-of-content .tasks > .task > .highlight-line {\n        border-right: solid 6px #fff;\n        position: relative; }\n.table-of-content .tasks > .task > .highlight-line:hover {\n          background-color: #eee;\n          border-color: #eee; }\n.table-of-content .tasks > .task > .highlight-line:hover > .page-button {\n            opacity: 0.3; }\n.table-of-content .tasks > .task > .highlight-line:hover > .page-button:hover {\n              opacity: 1; }\n.table-of-content .tasks > .task > .highlight-line.selected {\n          border-color: #11151e; }\n.table-of-content .tasks > .task .task-title {\n        text-indent: -30px;\n        padding: 0;\n        font: inherit;\n        color: inherit;\n        cursor: pointer;\n        background: none;\n        border: 0;\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        outline: none;\n        flex-grow: 1;\n        padding: 6px 56px 6px 53px;\n        display: block;\n        text-align: left;\n        position: relative;\n        width: 100%;\n        font-weight: normal;\n        line-height: 1.4;\n        text-align: left;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n.table-of-content .tasks > .task .task-title:disabled {\n          cursor: default; }\n.table-of-content .tasks > .task .task-title .page-number {\n          position: absolute;\n          top: 6px;\n          right: 9px;\n          text-indent: 0; }\n.table-of-content .tasks > .task .task-title::before {\n          background-color: inherit;\n          content: counters(item, \".\") \" \";\n          counter-increment: item;\n          display: inline-block;\n          margin-right: 10px;\n          text-indent: 2px;\n          width: 16px; }\n.table-of-content .tasks > .task .task-status {\n        position: absolute;\n        top: 7px;\n        left: 7px; }\n.table-of-content .tasks > .task .page-button {\n        padding: 0;\n        font: inherit;\n        color: inherit;\n        cursor: pointer;\n        background: none;\n        border: 0;\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        outline: none;\n        position: absolute;\n        top: 5px;\n        right: 28px;\n        opacity: 0;\n        font-size: 16px; }\n.table-of-content .tasks > .task .page-button:disabled {\n          cursor: default; }\n.table-of-content .task-pages {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    margin: 0 0 0 28px; }\n.table-of-content .task-pages > .task-page {\n      font-size: 12px;\n      padding-left: 10px; }\n.table-of-content .task-pages > .task-page:focus {\n        outline: none; }\n.table-of-content .task-pages > .task-page > .highlight-line {\n        border-right: solid 6px #fff;\n        position: relative; }\n.table-of-content .task-pages > .task-page > .highlight-line:hover {\n          background-color: #eee;\n          border-color: #eee; }\n.table-of-content .task-pages > .task-page > .highlight-line:hover > .page-button {\n            opacity: 0.3; }\n.table-of-content .task-pages > .task-page > .highlight-line:hover > .page-button:hover {\n              opacity: 1; }\n.table-of-content .task-pages > .task-page > .highlight-line.selected {\n          border-color: #11151e; }\n.table-of-content .task-pages > .task-page .page-title {\n        padding: 0;\n        font: inherit;\n        color: inherit;\n        cursor: pointer;\n        background: none;\n        border: 0;\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        outline: none;\n        flex-grow: 1;\n        padding: 6px 56px 6px 15px;\n        display: block;\n        text-align: left;\n        position: relative;\n        width: 100%;\n        font-weight: normal;\n        line-height: 1.4;\n        text-align: left;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n.table-of-content .task-pages > .task-page .page-title:disabled {\n          cursor: default; }\n.table-of-content .task-pages > .task-page .page-title .page-number {\n          position: absolute;\n          top: 6px;\n          right: 9px;\n          text-indent: 0; }\n.table-of-content .task-pages > .task-page .page-button.kpmg-icon-delete-x {\n        color: #f00; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: SmartWorkspaceTableOfContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartWorkspaceTableOfContentComponent", function() { return SmartWorkspaceTableOfContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_decorators_when_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/when-empty */ "./src/app/core/decorators/when-empty/index.ts");
/* harmony import */ var _core_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/enum */ "./src/app/core/enum/index.ts");
/* harmony import */ var _core_enum_smart_workspace_message_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/enum/smart-workspace-message-type.enum */ "./src/app/core/enum/smart-workspace-message-type.enum.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/dist/es5/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SmartWorkspaceTableOfContentComponent = /** @class */ (function () {
    function SmartWorkspaceTableOfContentComponent(_ref, _reportService, _smartWorkspaceMessageService, _route) {
        this._ref = _ref;
        this._reportService = _reportService;
        this._smartWorkspaceMessageService = _smartWorkspaceMessageService;
        this._route = _route;
        this.selectPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tableOfContent = [];
        this.pageType = _core_enum__WEBPACK_IMPORTED_MODULE_3__["ReportPageType"];
    }
    Object.defineProperty(SmartWorkspaceTableOfContentComponent.prototype, "selectedTaskId", {
        get: function () {
            return +this._route.snapshot.paramMap.get('taskId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartWorkspaceTableOfContentComponent.prototype, "_selectedProjectId", {
        get: function () {
            return this._route.snapshot.paramMap.get('id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartWorkspaceTableOfContentComponent.prototype, "_selectedSequenceNumber", {
        get: function () {
            return +this._route.snapshot.paramMap.get('sequenceNumber');
        },
        enumerable: true,
        configurable: true
    });
    SmartWorkspaceTableOfContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loadTableOfContent();
        this._route.params.subscribe(function (params) {
            _this._refreshProducts(_this.isOpen);
        });
        this._smartWorkspaceMessageService
            .getMessage()
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe(function (message) {
            switch (message.type) {
                case _core_enum_smart_workspace_message_type_enum__WEBPACK_IMPORTED_MODULE_4__["SmartWorkspaceMessageType"].STRUCTURE_CHANGED:
                    _this._loadTableOfContent();
                    break;
            }
        });
    };
    SmartWorkspaceTableOfContentComponent.prototype.ngOnDestroy = function () { };
    SmartWorkspaceTableOfContentComponent.prototype.trackById = function (_, item) {
        return item.id;
    };
    SmartWorkspaceTableOfContentComponent.prototype.isSelected = function (item) {
        if (item.taskId == null || item.sequenceNumber == null) {
            return false;
        }
        if (item.taskId != this.selectedTaskId || item.sequenceNumber != this._selectedSequenceNumber) {
            return false;
        }
        if (this._selectedSequenceNumber == 1 && this.hasChildren(item)) {
            return false;
        }
        return true;
    };
    SmartWorkspaceTableOfContentComponent.prototype.hasChildren = function (item) {
        return item.children != null && item.children.length > 0;
    };
    SmartWorkspaceTableOfContentComponent.prototype.onSelect = function (item, event) {
        event.stopPropagation();
        if (item.taskId != null && item.sequenceNumber != null) {
            this.selectPage.emit(new _core_models__WEBPACK_IMPORTED_MODULE_5__["ReportPageNavigation"](item.productId, item.chapterId, item.taskId, item.sequenceNumber, item.guid));
        }
    };
    SmartWorkspaceTableOfContentComponent.prototype.onCollapse = function (item) {
        item.isCollapsed = !item.isCollapsed;
    };
    SmartWorkspaceTableOfContentComponent.prototype.onClose = function () {
        this.close.emit();
    };
    SmartWorkspaceTableOfContentComponent.prototype.onAddPage = function (item) {
        if (item.taskId == null) {
            return;
        }
        this.addPage.emit(item);
    };
    SmartWorkspaceTableOfContentComponent.prototype.onDeletePage = function (item) {
        if (item.taskId == null || item.sequenceNumber == null) {
            return;
        }
        this.deletePage.emit(item);
    };
    SmartWorkspaceTableOfContentComponent.prototype._loadTableOfContent = function () {
        var _this = this;
        this._reportService.getTableOfContent(this._selectedProjectId).subscribe(function (tableOfContent) {
            _this.tableOfContent = tableOfContent;
            _this._refreshProducts();
        });
    };
    SmartWorkspaceTableOfContentComponent.prototype._refreshProducts = function (isOpen) {
        var _this = this;
        if (isOpen === void 0) { isOpen = false; }
        this.tableOfContent.forEach(function (item) {
            var check = item.includedTasks.find(function (x) { return x == _this.selectedTaskId; }) != null;
            if (!check && !isOpen) {
                item.isCollapsed = false;
            }
            else if (check) {
                item.isCollapsed = true;
            }
        });
        if (this.isOpen) {
            this._ref.detectChanges();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_core_decorators_when_empty__WEBPACK_IMPORTED_MODULE_2__["WhenEmpty"])(false),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Boolean)
    ], SmartWorkspaceTableOfContentComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SmartWorkspaceTableOfContentComponent.prototype, "selectPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SmartWorkspaceTableOfContentComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SmartWorkspaceTableOfContentComponent.prototype, "addPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SmartWorkspaceTableOfContentComponent.prototype, "deletePage", void 0);
    SmartWorkspaceTableOfContentComponent = __decorate([
        Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["TakeUntilDestroy"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-smart-workspace-table-of-content',
            template: __webpack_require__(/*! ./smart-workspace-table-of-content.component.html */ "./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.html"),
            styles: [__webpack_require__(/*! ./smart-workspace-table-of-content.component.scss */ "./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _core_services__WEBPACK_IMPORTED_MODULE_6__["ReportService"],
            _core_services__WEBPACK_IMPORTED_MODULE_6__["SmartWorkspaceMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SmartWorkspaceTableOfContentComponent);
    return SmartWorkspaceTableOfContentComponent;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace-toolbar/smart-workspace-toolbar.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace-toolbar/smart-workspace-toolbar.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n:host {\n  align-items: center;\n  background: #fff;\n  box-shadow: 0 3px 23px 0 rgba(160, 168, 189, 0.3), 0 1px 0 0 rgba(160, 168, 189, 0.5);\n  box-sizing: content-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px 0 15px;\n  z-index: 100; }\n::ng-deep .smart-workspace-toolbar .toolbar-group {\n  min-height: 30px; }\n::ng-deep .smart-workspace-toolbar .toolbar-group:not([toolbar-right]) {\n    border-right: 1px solid #c4c9d6; }\n::ng-deep .smart-workspace-toolbar .toolbar-group > * {\n    margin-left: 3px;\n    margin-right: 3px; }\n::ng-deep .smart-workspace-toolbar .toolbar-group > *:first-child {\n      margin-left: 0; }\n::ng-deep .smart-workspace-toolbar .toolbar-group > *:last-child {\n      margin-right: 0; }\n::ng-deep .smart-workspace-toolbar .toolbar-group > kosmos-menu ::ng-deep .menu-content {\n    top: calc(100% + 5px); }\n::ng-deep .smart-workspace-toolbar .toolbar-group > kosmos-segmented-button ::ng-deep .items {\n    top: calc(100% + 5px);\n    left: calc(100% - 32px); }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .dx-button-has-text .dx-button-content .kpmg-icon-delete-page,\n  ::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .dx-button-has-icon .dx-button-content .kpmg-icon-delete-page {\n    color: #ed5565; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .dx-button-has-icon:not(.dx-button-has-text) {\n    border: 0 none; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .dx-switch {\n    height: auto !important; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .dx-switch .dx-switch-container {\n      padding-top: 0 !important;\n      padding-bottom: 0 !important; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep label {\n    display: flex;\n    align-items: center; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .dx-texteditor {\n    width: 40px;\n    border: none; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .custom-item {\n    position: relative;\n    min-height: 30px; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .custom-item .product-name {\n    display: inline-block;\n    padding-left: 45px;\n    text-indent: 0;\n    line-height: 30px;\n    font-size: 15px;\n    width: 100%; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .custom-item > img {\n    left: 5px;\n    position: absolute;\n    top: 50%;\n    margin-top: -15px;\n    height: 30px; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .current-value {\n    padding: 10px 0; }\n::ng-deep .smart-workspace-toolbar .toolbar-group ::ng-deep .current-value > span {\n    font-weight: bold; }\n::ng-deep .smart-workspace-toolbar .toolbar-group-icons {\n  padding: 0 8px; }\n::ng-deep .smart-workspace-toolbar .toolbar-group-icons:first-child {\n    padding-left: 0; }\n::ng-deep .smart-workspace-toolbar .toolbar-button {\n  padding: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n  background: none;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  padding: 5px 8px 5px;\n  height: 100%;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 14px; }\n::ng-deep .smart-workspace-toolbar .toolbar-button:disabled {\n    cursor: default; }\n::ng-deep .smart-workspace-toolbar .toolbar-button:hover {\n    background-color: #e6e6e6; }\n::ng-deep .smart-workspace-toolbar .toolbar-button.toolbar-icon-button {\n    font-size: 18px;\n    padding: 8px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state .btn-set-state {\n  display: flex;\n  align-items: center;\n  width: 195px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state .btn-set-state > .label {\n    margin: 0 5px;\n    color: #11151e;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-align: left;\n    flex-basis: 80%;\n    padding: 3px 0; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state .btn-set-state > .kpmg-icon {\n    color: #a0a8bd; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state .btn-set-state:hover > .kpmg-icon {\n    color: #11151e; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state kosmos-menu-item {\n  cursor: pointer; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state kosmos-menu-item > .button {\n    display: flex;\n    align-items: center;\n    padding: 7px 10px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state kosmos-menu-item > .button:hover {\n      background-color: #e6e6e6;\n      color: inherit; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state kosmos-menu-item > .button > span {\n      margin-left: 5px;\n      display: block;\n      line-height: 1;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      padding: 3px 0; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-task-state ::ng-deep .menu-content {\n  padding-top: 3px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item {\n  width: 50%;\n  max-width: 50%;\n  display: block;\n  flex: 1 50%;\n  flex-direction: column;\n  cursor: pointer; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item > .button {\n    padding: 0 10px;\n    overflow: hidden; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item img {\n    max-width: 100%;\n    height: auto;\n    max-height: 128px;\n    border: 1px solid #c4c9d6;\n    border-radius: 3px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item .description {\n    padding: 5px 0 20px;\n    white-space: normal;\n    text-align: left; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item:nth-last-child(-n + 2) .description {\n    padding: 5px 0; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template img {\n    box-sizing: border-box; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template img.error {\n      padding: 0; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images:hover .delete,\n  ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images:hover .download, ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images:focus .delete,\n  ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images:focus .download {\n    opacity: 1;\n    transition: opacity 100ms cubic-bezier(0.25, -0.1, 0, 1); }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .delete,\n  ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .download {\n    cursor: pointer;\n    display: block;\n    opacity: 0;\n    padding: 7px;\n    position: absolute;\n    top: 7px;\n    transition: opacity 100ms cubic-bezier(1, 0, 0.75, 0.9);\n    background: #fff; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .delete kosmos-svg-icon,\n    ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .download kosmos-svg-icon {\n      color: #9b9b9b;\n      display: block;\n      transition: color 100ms cubic-bezier(1, 0, 0.75, 0.9); }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .delete:hover kosmos-svg-icon, ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .delete:focus kosmos-svg-icon,\n    ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .download:hover kosmos-svg-icon,\n    ::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .download:focus kosmos-svg-icon {\n      color: #1791da;\n      transition: color 100ms cubic-bezier(0.25, -0.1, 0, 1); }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .delete {\n    right: 15px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .delete kosmos-svg-icon {\n      height: 9px;\n      width: 9px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .download {\n    left: 15px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add kosmos-menu-item.content-template .template-images .download kosmos-svg-icon {\n      height: 14px;\n      width: 14px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add ::ng-deep .menu-content {\n  max-width: 400px;\n  width: 400px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-page-add ::ng-deep .menu-content .items {\n    flex-wrap: wrap;\n    display: flex; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item {\n  width: 400px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item kosmos-tab-button > .tab-button {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 80px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item > .button {\n    display: flex;\n    align-items: center;\n    padding: 7px 10px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item > .button > p {\n      color: #11151e;\n      font-size: 14px;\n      line-height: 16px;\n      margin: 0;\n      opacity: 0.51;\n      padding: 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      width: 100%; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item > .button > p.analysis-name {\n        opacity: 1;\n        font-weight: 600;\n        margin-bottom: 5px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item > .button > p.analysis-name > span {\n          display: inline; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item > .button > p.analysis-creator {\n        font-weight: 900; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item.analysis-filter > .button {\n    flex-direction: row; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item.analysis {\n    cursor: pointer; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item.analysis > .button {\n      flex-direction: column; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis kosmos-menu-item.analysis > .button:hover {\n        background-color: #e6e6e6;\n        color: inherit; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis ::ng-deep .menu-content {\n  max-width: 400px;\n  width: 400px; }\n::ng-deep .smart-workspace-toolbar kosmos-menu.kosmos-toolbar-menu-analysis ::ng-deep .menu-content .items {\n    flex-wrap: wrap;\n    display: flex; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button.kosmos-toolbar-segmented-button-save kosmos-menu-item {\n  cursor: pointer; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button.kosmos-toolbar-segmented-button-save kosmos-menu-item > .button {\n    display: block;\n    align-items: center; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button.kosmos-toolbar-segmented-button-save kosmos-menu-item > .button:hover {\n      background-color: inherit;\n      color: inherit; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button.kosmos-toolbar-segmented-button-save kosmos-menu-item > .button ::ng-deep > button {\n      padding: 0;\n      font: inherit;\n      color: inherit;\n      cursor: pointer;\n      background: none;\n      border: 0;\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      outline: none;\n      padding: 10px;\n      font-size: 14px;\n      display: block;\n      text-align: left;\n      color: #11151e;\n      width: 100%;\n      box-sizing: border-box; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button.kosmos-toolbar-segmented-button-save kosmos-menu-item > .button ::ng-deep > button:disabled {\n        cursor: default; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button.kosmos-toolbar-segmented-button-save kosmos-menu-item > .button ::ng-deep > button:hover {\n        background-color: #e6e6e6;\n        color: inherit; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button.kosmos-toolbar-segmented-button-save ::ng-deep .items {\n  padding-top: 3px; }\n::ng-deep .smart-workspace-toolbar kosmos-segmented-button ::ng-deep .items {\n  max-width: 180px;\n  width: 180px;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace-toolbar/smart-workspace-toolbar.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace-toolbar/smart-workspace-toolbar.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SmartWorkspaceToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartWorkspaceToolbarComponent", function() { return SmartWorkspaceToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartWorkspaceToolbarComponent = /** @class */ (function () {
    function SmartWorkspaceToolbarComponent() {
    }
    SmartWorkspaceToolbarComponent.prototype.ngOnInit = function () { };
    SmartWorkspaceToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-smart-workspace-toolbar',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./smart-workspace-toolbar.component.scss */ "./src/app/project/smart-workspace/smart-workspace-toolbar/smart-workspace-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartWorkspaceToolbarComponent);
    return SmartWorkspaceToolbarComponent;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace.component.html":
/*!************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <kosmos-smart-workspace-table-of-content *ngIf=\"isPageContentLoaded\" (selectPage)=\"selectPage($event)\" (close)=\"hideTableOfContent()\"\r\n        (addPage)=\"addNewPageByTableOfContent($event)\" (deletePage)=\"removePageByTableOfContent($event)\" [isOpen]=\"tableOfContentVisible\"></kosmos-smart-workspace-table-of-content>\r\n    <kosmos-smart-workspace-toolbar class=\"smart-workspace-toolbar\">\r\n        <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n            <dx-button icon=\"kpmg-icon kpmg-icon-toolbar-list-view\" i18n-text=\"Smart Workspace Toolbar|Show Table of content@@smartworkspace:toolbar:button:showtableofcontent\"\r\n                type=\"normal\" hint=\"Show table of content\" (onClick)=\"showTableOfContent()\"></dx-button>\r\n        </kosmos-toolbar-group>\r\n\r\n        <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n            <dx-select-box [dataSource]=\"layouts\" displayExpr=\"name\" valueExpr=\"id\" fieldTemplate=\"field\" placeholder=\"\"\r\n                [disabled]=\"reportPage?.data?.type != PAGE_TYPE.PAGE\" (onOpened)=\"onLayoutSelectBoxOpen($event)\"\r\n                (onSelectionChanged)=\"onLayoutSelectBoxChange($event)\">\r\n                <div *dxTemplate=\"let data of 'field'\">\r\n                    <dx-text-box class=\"product-name\" [readOnly]=\"true\"></dx-text-box>\r\n                </div>\r\n                <div *dxTemplate=\"let data of 'dropDownButton'\">\r\n                    <div class=\"dx-button-content\">\r\n                        <i class=\"dx-icon kpmg-icon kpmg-icon-template template\"></i>\r\n                    </div>\r\n                </div>\r\n                <div *dxTemplate=\"let data of 'item'\">\r\n                    <img src=\"{{ data.imageSrc }}\" />\r\n                </div>\r\n            </dx-select-box>\r\n        </kosmos-toolbar-group>\r\n\r\n        <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n            <kosmos-segmented-button class=\"kosmos-toolbar-segmented-button-save\">\r\n                <button [kosmosCheckRights]=\"RIGHTS.SAVE_BUTTON_ACTIVE\" [disabled]=\"!hasUnsavedChanges\" i18n=\"Smart Workspace Toolbar|Save@@smartworkspace:toolbar:button:save\"\r\n                    (click)=\"doSavePage()\">Save</button>\r\n                <kosmos-menu-item>\r\n                    <button [kosmosCheckRights]=\"RIGHTS.SAVE_BUTTON_ACTIVE\" [disabled]=\"!hasUnsavedChanges\" i18n=\"Smart Workspace Toolbar|Save@@smartworkspace:toolbar:button:save\"\r\n                        (click)=\"doSavePage()\">Save</button>\r\n                </kosmos-menu-item>\r\n                <kosmos-menu-item *ngIf=\"currentUser?.isAdmin\">\r\n                    <button [disabled]=\"reportPage?.data?.isCustom\" i18n=\"Smart Workspace Toolbar|Save as template@@smartworkspace:toolbar:button:saveastemplate\"\r\n                        (click)=\"doSaveTemplate()\">Save as template</button>\r\n                </kosmos-menu-item>\r\n            </kosmos-segmented-button>\r\n\r\n            <kosmos-menu class=\"kosmos-toolbar-menu-task-state\" *ngIf=\"taskState\">\r\n                <button class=\"toolbar-button btn-set-state\" title=\"{{ taskState?.name }}\">\r\n                    <kosmos-task-progress-state [stateId]=\"taskState?.id\"></kosmos-task-progress-state>\r\n                    <span class=\"label\">{{ taskState?.name }}</span>\r\n                    <span class=\"kpmg-icon kpmg-icon-arrow-down\"></span>\r\n                </button>\r\n                <kosmos-menu-item [kosmosCheckRights]=\"state.progressStateRight\" *ngFor=\"let state of progressStates\"\r\n                    (click)=\"setState(state)\" class=\"progress-states\">\r\n                    <kosmos-task-progress-state [stateId]=\"state.id\"></kosmos-task-progress-state>\r\n                    <span class=\"label-spacing\" title=\"{{ state.name }}\">{{ state.name }}</span>\r\n                </kosmos-menu-item>\r\n            </kosmos-menu>\r\n\r\n            <kosmos-menu class=\"kosmos-toolbar-menu-page-add\">\r\n                <button class=\"toolbar-button toolbar-icon-button btn-toolbar-page-add\" title=\"Add new page\" i18n-text=\"Smart Workspace Toolbar|Add new page@@smartworkspace:toolbar:button:addNewPage\">\r\n                    <span class=\"kpmg-icon kpmg-icon-toolbar-page-add\"></span>\r\n                </button>\r\n                <kosmos-menu-item (click)=\"addNewPage(ReportPageOrientation.Landscape)\">\r\n                    <img src=\"assets/images/page-template.png\" />\r\n                    <span class=\"description\">Blank page</span>\r\n                </kosmos-menu-item>\r\n                <kosmos-menu-item (click)=\"addNewCoverPage(ReportPageOrientation.Landscape)\">\r\n                    <img src=\"assets/images/cover-page.png\" />\r\n                    <span class=\"description\">Cover page</span>\r\n                </kosmos-menu-item>\r\n                <kosmos-menu-item *ngFor=\"let template of reportTemplates$ | async\" (click)=\"addNewPageByTemplate(template.id)\"\r\n                    class=\"content-template\">\r\n                    <div class=\"template-images\">\r\n                        <img [attr.src]=\"template?.previewUrl | secure | async\" onError=\"this.src='assets/images/page-template.png';this.className += 'error'\" />\r\n                        <span class=\"description\">{{ template.name }}</span>\r\n                        <a class=\"download noCloseOnClick\" (click)=\"downloadTemplate($event, template)\" title=\"Download template\">\r\n                            <kosmos-svg-icon [icon]=\"SvgIcons.DOWNLOAD\" width=\"15\" height=\"15\"></kosmos-svg-icon>\r\n                        </a>\r\n                        <a class=\"delete noCloseOnClick\" (click)=\"deleteTemplate($event, template)\" *ngIf=\"currentUser?.isAdmin\"\r\n                            title=\"Delete template\">\r\n                            <kosmos-svg-icon [icon]=\"SvgIcons.CLOSE\" width=\"10\" height=\"10\"></kosmos-svg-icon>\r\n                        </a>\r\n                    </div>\r\n                </kosmos-menu-item>\r\n                <kosmos-menu-footer>\r\n                    <div *ngIf=\"currentUser?.isAdmin\">\r\n                        <dx-button icon=\"upload\" type=\"normal\" (onClick)=\"templateImport.value=null; templateImport.click();\"\r\n                            text=\"Import\" hint=\"Import\" i18n-hint=\"Smart Workspace Toolbar|Import@@smartworkspace:toolbar:button:importtemplate\"\r\n                            i18n-text=\"Smart Workspace Toolbar|Import@@smartworkspace:toolbar:button:importtemplate\"\r\n                            [disabled]=\"reportPage?.data?.isCustom\"></dx-button>\r\n                        <input #templateImport style=\"display:none;\" crossorigin type='file' (change)=\"importTemplate($event)\"\r\n                            accept=\".cosmos\">\r\n                    </div>\r\n                </kosmos-menu-footer>\r\n            </kosmos-menu>\r\n        </kosmos-toolbar-group>\r\n\r\n        <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n            <dx-button icon=\"kpmg-icon kpmg-icon-toolbar-text\" type=\"normal\" (onClick)=\"addGenericContainer()\" hint=\"Insert Text container\"\r\n                i18n-hint=\"Smart Workspace Toolbar|Insert Generic Container@@smartworkspace:toolbar:button:insertgenericcontainer\"></dx-button>\r\n            <dx-button icon=\"kpmg-icon kpmg-icon-toolbar-image\" type=\"normal\" (onClick)=\"addImageContainer()\" hint=\"Insert Image container\"\r\n                i18n-hint=\"Smart Workspace Toolbar|Insert Image Container@@smartworkspace:toolbar:button:insertimageccontainer\"></dx-button>\r\n            <dx-button icon=\"kpmg-icon kpmg-icon-toolbar-table\" type=\"normal\" (onClick)=\"InsertTableContainer()\" hint=\"Insert Table container\"\r\n                i18n-hint=\"Smart Workspace Toolbar|Insert Table Container@@smartworkspace:toolbar:button:inserttablecontainer\"></dx-button>\r\n\r\n            <kosmos-menu class=\"kosmos-toolbar-menu-analysis\">\r\n                <button class=\"toolbar-button toolbar-icon-button btn-toolbar-analysis-add\" title=\"Add new Analysis\"\r\n                    i18n-text=\"Smart Workspace Toolbar|Add new Analysis@@smartworkspace:toolbar:button:addNewAnalysis\">\r\n                    <span class=\"kpmg-icon kpmg-icon-table-chart\"></span>\r\n                </button>\r\n                <kosmos-menu-item class=\"analysis-filter noCloseOnClick\">\r\n                    <kosmos-tab-button caption=\"Mine {{ analysisesByUser?.length }}\" [isLargeButton]=\"false\"\r\n                        [isSelected]=\"analysisForUser\" (click)=\"showAnalysis(true)\"></kosmos-tab-button>\r\n                    <kosmos-tab-button caption=\"All {{ analysises?.length }}\" [isLargeButton]=\"false\" [isSelected]=\"!analysisForUser\"\r\n                        (click)=\"showAnalysis(false)\"></kosmos-tab-button>\r\n                </kosmos-menu-item>\r\n                <kosmos-menu-item *ngFor=\"let analysis of analysisesList\" (click)=\"addAnalysis(analysis)\" class=\"analysis\">\r\n                    <p class=\"analysis-name\">\r\n                        <span [ngClass]=\"{'kpmg-icon-chart-line': analysis.isChartAnalysis, 'kpmg-icon-toolbar-table': !analysis.isChartAnalysis}\"></span>\r\n                        {{ analysis.name }}\r\n                    </p>\r\n                    <p class=\"analysis-creator\">\r\n                        Created by {{ analysis.userCreatedBy.firstName }} {{ analysis.userCreatedBy.lastName }}\r\n                    </p>\r\n                </kosmos-menu-item>\r\n            </kosmos-menu>\r\n            <dx-button text=\"Edit in Data Explorer\" i18n-text=\"Smart Workspace Toolbar|Edit in Data Explorer@@smartworkspace:toolbar:button:editInDataExplorer\"\r\n                type=\"normal\" icon=\"kpmg-icon kpmg-icon-edit\" (onClick)=\"onEditInDataExplorer()\" [visible]=\"isAnalysisContainerSelected\"></dx-button>\r\n            <dx-button text=\"Update Analysis\" i18n-text=\"Smart Workspace Toolbar|Update Analysis@@smartworkspace:toolbar:button:updateanalysis\"\r\n                type=\"normal\" icon=\"kpmg-icon kpmg-icon-refresh\" (onClick)=\"onUpdateAnalysis()\" [visible]=\"isAnalysisContainerSelected\"></dx-button>\r\n        </kosmos-toolbar-group>\r\n\r\n        <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n            <label i18n-text=\"Smart Workspace Toolbar|Preview@@smartworkspace:toolbar:switch:introColumn\">Intro Column</label>\r\n            <dx-switch [value]=\"introColumnEnabled\" #switchIntroColumn (onValueChanged)=\"onIntroColumnChange($event)\"\r\n                [disabled]=\"reportPage?.data?.type != PAGE_TYPE.PAGE\"></dx-switch>\r\n        </kosmos-toolbar-group>\r\n\r\n        <kosmos-toolbar-group class=\"toolbar-group toolbar-group-icons\">\r\n            <dx-button icon=\"chevronup\" i18n-text=\"Smart Workspace Toolbar|Page Down@@smartworkspace:toolbar:button:pageleft\"\r\n                type=\"normal\" hint=\"Flip back\" (onClick)=\"previousPage()\"></dx-button>\r\n            <dx-button icon=\"chevrondown\" i18n-text=\"Smart Workspace Toolbar|Page Up@@smartworkspace:toolbar:button:pageright\"\r\n                type=\"normal\" hint=\"Flip forward\" (onClick)=\"nextPage()\"></dx-button>\r\n        </kosmos-toolbar-group>\r\n\r\n        <!-- the right side buttons ... -->\r\n        <kosmos-toolbar-group toolbar-right class=\"toolbar-group\">\r\n            <dx-button text=\"Generate report\" i18n-text=\"Smart Workspace Toolbar|Generate report@@smartworkspace:toolbar:button:generatereport\"\r\n                type=\"normal\" icon=\"kpmg-icon kpmg-icon-download\" (onClick)=\"doGenerateReport()\"></dx-button>\r\n            <dx-button icon=\"kpmg-icon kpmg-icon-delete-page\" type=\"normal\" (onClick)=\"removePage()\" hint=\"Remove\"\r\n                i18n-hint=\"Smart Workspace Toolbar|Remove@@smartworkspace:toolbar:button:removepage\" [disabled]=\"!reportPage?.data?.canDelete\"></dx-button>\r\n        </kosmos-toolbar-group>\r\n    </kosmos-smart-workspace-toolbar>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"geEditor sm-container\" id=\"drawIOContainer\">\r\n            <div id=\"geInfo\">\r\n                <h1 id=\"geStatus\">Loading\r\n                    <hr />Smart Workspace\r\n                </h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<kosmos-sidebar [showHelpToggle]=\"guidanceSnippetText != undefined && !guidanceIsLoading\" [isSmartWorkspace]=\"true\">\r\n    <span class=\"sidebar-title\">Smart Workspace</span>\r\n    <div class=\"sidebar-content\" *ngIf=\"guidanceSnippetText != undefined && !guidanceIsLoading\" [innerHtml]=\"guidanceSnippetText\">\r\n    </div>\r\n    <div class=\"sidebar-content no-content\" *ngIf=\"guidanceSnippetText == undefined && !guidanceIsLoading\">\r\n        <p i18n=\"Smart Workspace Toolbar|Guidance Text@@smartworkspace:toolbar:guidanceText\">No guidance available.</p>\r\n    </div>\r\n    <div class=\"sidebar-smartworkspace\" id=\"reportsidebar\"></div>\r\n\r\n    <div class=\"sidebar-smartworkspace-snippets\" id=\"\" [style.display]=\"isSnippetsVisible?'inherit':'none'\">\r\n        <div class=\"sidebar-snippets-header\"><span class=\"sidebar-title\">Suggested Snippets</span></div>\r\n        <div class=\"sidebar-snippets\">\r\n            <kosmos-info-snippet-list (clickHandler)=\"handleSidebarSnippetClicked($event)\" [taskId]=\"reportPage?.data?.scopeItemId\"></kosmos-info-snippet-list>\r\n\r\n        </div>\r\n        <div class=\"sidebar-snippets-footer\"></div>\r\n    </div>\r\n</kosmos-sidebar>\r\n\r\n<div id=\"chart-demo\" style=\"position: absolute !important;top: -9999px !important;left: -9999px !important;\">\r\n    <kosmos-chart-view [analysis]=\"analysis\" [showBar]=\"false\" (chartDrawn)=\"onChartReadyEvent($event)\"></kosmos-chart-view>\r\n</div>\r\n\r\n<dx-popup class=\"froala-popup\" [showTitle]=\"true\" title=\"EDITOR\" position=\"10px 10px\" [width]=\"froalaPopupSize.width\"\r\n    [height]=\"froalaPopupSize.height\" [dragEnabled]=\"false\" [closeOnOutsideClick]=\"false\" (onShowing)=\"onEditPopupShowing()\"\r\n    [(visible)]=\"popupVisible\" (onHiding)=\"onFroalaPopupHiding()\">\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" [options]=\"{\r\n        text: 'Done',\r\n        onClick: onDonePopup\r\n    }\">\r\n    </dxi-toolbar-item>\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n        <div class=\"froala-container\" [ngClass]=\"froalaPopupSize.className\" id=\"froala-editor\" [froalaEditor]=\"froalaOptions\"\r\n            (froalaInit)=\"initFroala($event)\"></div>\r\n        <div class=\"snippet-container\" [ngStyle]=\"froalaPopupSize.snippetsStyle\">\r\n            <h3 i18n=\"Smart Froala Popup|Suggested Snippets@@smartworkspace:froala:popup:suggested-snippets\">Suggested\r\n                Snippets</h3>\r\n            <dx-scroll-view class=\"snippet-scroll-view\">\r\n                <kosmos-info-snippet-list (clickHandler)=\"handleSnippetClicked($event)\" [taskId]=\"reportPage?.data?.scopeItemId\"></kosmos-info-snippet-list>\r\n            </dx-scroll-view>\r\n        </div>\r\n    </div>\r\n</dx-popup>\r\n\r\n<dx-popup class=\"delete-page-popup\" [showTitle]=\"false\" title=\"CONFIRM DELETE\" [width]=\"300\" [height]=\"150\"\r\n    [dragEnabled]=\"false\" [closeOnOutsideClick]=\"false\" [(visible)]=\"confirmDeletePopupVisible\">\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"before\" toolbar=\"bottom\" [options]=\"{\r\n        text: 'Yes',\r\n        onClick: onConfirmDeletePagePopup\r\n    }\">\r\n    </dxi-toolbar-item>\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" [options]=\"{\r\n        text: 'No',\r\n        onClick: onCloseDeletePagePopup\r\n    }\">\r\n    </dxi-toolbar-item>\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n        <p>Are you sure you want to delete Page {{ pageToDelete?.pageNumber }} from \"{{ pageToDelete?.taskName }}\"?</p>\r\n    </div>\r\n</dx-popup>\r\n\r\n<dx-popup class=\"delete-template-popup\" [showTitle]=\"true\" title=\"WARNING\" [width]=\"300\" height=\"auto\" [dragEnabled]=\"false\"\r\n    [closeOnOutsideClick]=\"false\" [(visible)]=\"confirmDeleteTemplateVisible\">\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"before\" toolbar=\"bottom\" [options]=\"{\r\n        text: 'Yes',\r\n        onClick: onConfirmDeleteTemplatePopup\r\n    }\">\r\n    </dxi-toolbar-item>\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" [options]=\"{\r\n        text: 'No',\r\n        onClick: onCloseDeleteTemplatePopup\r\n    }\">\r\n    </dxi-toolbar-item>\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n        <p>Are you sure you want to delete the template?</p>\r\n    </div>\r\n</dx-popup>\r\n\r\n<kosmos-new-content-template-popup [(visible)]=\"isNewContentTemplatePopupVisible\" (done)=\"saveContentTemplate($event)\"\r\n    (close)=\"closeContentTemplatePopup()\"></kosmos-new-content-template-popup>\r\n<kosmos-generate-report-popup [visible]=\"generateReportPopupVisible\" [currentPage]=\"reportPage?.data?.globalPageNumber\"\r\n    [pageCount]=\"reportPage?.links?.pageCount\" (done)=\"generateReport($event)\" (close)=\"closeGenerateReportPopup()\"></kosmos-generate-report-popup>\r\n<kosmos-cropper-popup [isVisible]=\"imagePopupVisible\" (done)=\"addImageToCell($event)\" (close)=\"closeImagePopup()\"\r\n    [imageFromCell]=\"imageFromCell\"></kosmos-cropper-popup>"

/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n.sidebar-container {\n  flex-grow: 1;\n  width: 100%;\n  flex-basis: content; }\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n.page-title {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'UniversLTPro-45Light';\n  font-size: 18px;\n  color: #fff;\n  margin-bottom: 4px; }\n.page-title h1 {\n    margin-bottom: 0; }\n.sidebar-title {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'UniversLTPro-45Light';\n  font-size: 18px;\n  color: #fff;\n  margin-bottom: 20px; }\n.help-button {\n  border-radius: 50%;\n  background-color: #fff;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.2s linear;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  flex-shrink: 0;\n  align-self: flex-end; }\n.help-button:hover {\n    opacity: 0.8;\n    cursor: pointer; }\n.help-button span {\n    font-size: 12px;\n    font-family: \"UniversLTStd-55Roman\", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; }\n.help-button .kpmg-icon-help {\n    font-size: 18px;\n    position: relative;\n    left: -1px; }\n.help-button .kpmg-icon-remove {\n    font-size: 16px; }\n.help-content {\n  position: relative;\n  width: 100%;\n  max-width: 260px;\n  min-height: 16px;\n  max-height: 1200px;\n  margin-bottom: 20px;\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n.help-content:not(.no-help-content) {\n    transition: max-height 0.3s ease-in-out 0.1s, padding 0.3s ease-in-out 0.1s;\n    padding: 20px 10px;\n    background-color: #fff;\n    border-radius: 3px;\n    color: #282c37; }\n.help-content:not(.no-help-content)::after {\n      content: '';\n      position: absolute;\n      top: -5px;\n      right: 12px;\n      border-width: 0 6px 6px;\n      border-style: solid;\n      border-color: #fff transparent;\n      display: block;\n      width: 0;\n      transition: right 0.1s ease-in, border-width 0.1s ease-in; }\n.help-content:not(.no-help-content) h2 {\n      color: #282c37; }\n.help-content:not(.no-help-content).no-smart-workspace {\n      max-height: 65vh;\n      overflow-y: auto; }\n.help-content.no-help-content {\n    background-color: transparent;\n    color: #fff; }\n.help-content.no-help-content h2 {\n      color: #fff; }\n.help-content p,\n  .help-content h2,\n  .help-content ul,\n  .help-content li,\n  .help-content a,\n  .help-content .guidelines {\n    max-height: 1000px;\n    opacity: 1;\n    transition: opacity 0.1s linear;\n    pointer-events: auto;\n    cursor: auto; }\n.help-content a {\n    cursor: pointer; }\n.help-content.hidden {\n    transition: max-height 0.3s ease-in-out, padding 0.2s ease-in-out 0.1s;\n    max-height: 0;\n    padding: 0 10px; }\n.help-content.hidden p,\n    .help-content.hidden h2,\n    .help-content.hidden ul,\n    .help-content.hidden li,\n    .help-content.hidden a,\n    .help-content.hidden .guidelines {\n      max-height: 0;\n      opacity: 0;\n      transition: opacity 0.1s linear 0.2s, max-height 0.1s linear 0.2s;\n      pointer-events: none;\n      cursor: default; }\n.help-content.hidden::after {\n      right: 18px;\n      border-width: 0;\n      transition: right 0.1s ease-out 0.3s, border-width 0.1s ease-out 0.3s; }\n.help-content h2 {\n    font-size: 12px;\n    font-family: \"UniversLTStd-55Roman\", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n    letter-spacing: normal;\n    margin-bottom: 10px; }\na {\n  color: #282c37;\n  font-weight: bold;\n  text-decoration: underline;\n  cursor: pointer; }\np {\n  width: 100%;\n  margin-top: 0;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'UniversLTPro-45Light';\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: normal; }\nul,\nol {\n  margin-top: 0;\n  padding-left: 14px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'UniversLTPro-45Light';\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: normal; }\nul li,\n  ol li {\n    margin-bottom: 10px; }\nul:last-of-type li:last-of-type,\n  ol:last-of-type li:last-of-type {\n    margin-bottom: 0; }\n.bootstrap {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  position: relative;\n  min-height: 100%; }\n.btn-secondary {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 20px;\n  flex-grow: 0;\n  flex-shrink: 0; }\n.btn-secondary[disabled] {\n    cursor: default; }\nkosmos-loading-icon {\n  position: absolute;\n  background-color: #fefefe;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0; }\n/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n/* stylelint-disable selector-pseudo-element-no-unknown, selector-class-pattern */\n::ng-deep .sidebar {\n  z-index: 200; }\n::ng-deep .sidebar .sidebar-container {\n    flex-grow: 1;\n    width: 100%;\n    flex-basis: content; }\n::ng-deep .sidebar .title-container {\n    display: flex;\n    justify-content: space-between;\n    width: 100%; }\n::ng-deep .sidebar .page-title {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'UniversLTPro-45Light';\n    font-size: 18px;\n    color: #fff;\n    margin-bottom: 4px; }\n::ng-deep .sidebar .page-title h1 {\n      margin-bottom: 0; }\n::ng-deep .sidebar .sidebar-title {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'UniversLTPro-45Light';\n    font-size: 18px;\n    color: #fff;\n    margin-bottom: 20px; }\n::ng-deep .sidebar .help-button {\n    border-radius: 50%;\n    background-color: #fff;\n    width: 16px;\n    height: 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: opacity 0.2s linear;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    flex-shrink: 0;\n    align-self: flex-end; }\n::ng-deep .sidebar .help-button:hover {\n      opacity: 0.8;\n      cursor: pointer; }\n::ng-deep .sidebar .help-button span {\n      font-size: 12px;\n      font-family: \"UniversLTStd-55Roman\", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; }\n::ng-deep .sidebar .help-button .kpmg-icon-help {\n      font-size: 18px;\n      position: relative;\n      left: -1px; }\n::ng-deep .sidebar .help-button .kpmg-icon-remove {\n      font-size: 16px; }\n::ng-deep .sidebar .help-content {\n    position: relative;\n    width: 100%;\n    max-width: 260px;\n    min-height: 16px;\n    max-height: 1200px;\n    margin-bottom: 20px;\n    /* stylelint-disable */\n    /* stylelint-enable */ }\n::ng-deep .sidebar .help-content:not(.no-help-content) {\n      transition: max-height 0.3s ease-in-out 0.1s, padding 0.3s ease-in-out 0.1s;\n      padding: 20px 10px;\n      background-color: #fff;\n      border-radius: 3px;\n      color: #282c37; }\n::ng-deep .sidebar .help-content:not(.no-help-content)::after {\n        content: '';\n        position: absolute;\n        top: -5px;\n        right: 12px;\n        border-width: 0 6px 6px;\n        border-style: solid;\n        border-color: #fff transparent;\n        display: block;\n        width: 0;\n        transition: right 0.1s ease-in, border-width 0.1s ease-in; }\n::ng-deep .sidebar .help-content:not(.no-help-content) h2 {\n        color: #282c37; }\n::ng-deep .sidebar .help-content:not(.no-help-content).no-smart-workspace {\n        max-height: 65vh;\n        overflow-y: auto; }\n::ng-deep .sidebar .help-content.no-help-content {\n      background-color: transparent;\n      color: #fff; }\n::ng-deep .sidebar .help-content.no-help-content h2 {\n        color: #fff; }\n::ng-deep .sidebar .help-content p,\n    ::ng-deep .sidebar .help-content h2,\n    ::ng-deep .sidebar .help-content ul,\n    ::ng-deep .sidebar .help-content li,\n    ::ng-deep .sidebar .help-content a,\n    ::ng-deep .sidebar .help-content .guidelines {\n      max-height: 1000px;\n      opacity: 1;\n      transition: opacity 0.1s linear;\n      pointer-events: auto;\n      cursor: auto; }\n::ng-deep .sidebar .help-content a {\n      cursor: pointer; }\n::ng-deep .sidebar .help-content.hidden {\n      transition: max-height 0.3s ease-in-out, padding 0.2s ease-in-out 0.1s;\n      max-height: 0;\n      padding: 0 10px; }\n::ng-deep .sidebar .help-content.hidden p,\n      ::ng-deep .sidebar .help-content.hidden h2,\n      ::ng-deep .sidebar .help-content.hidden ul,\n      ::ng-deep .sidebar .help-content.hidden li,\n      ::ng-deep .sidebar .help-content.hidden a,\n      ::ng-deep .sidebar .help-content.hidden .guidelines {\n        max-height: 0;\n        opacity: 0;\n        transition: opacity 0.1s linear 0.2s, max-height 0.1s linear 0.2s;\n        pointer-events: none;\n        cursor: default; }\n::ng-deep .sidebar .help-content.hidden::after {\n        right: 18px;\n        border-width: 0;\n        transition: right 0.1s ease-out 0.3s, border-width 0.1s ease-out 0.3s; }\n::ng-deep .sidebar .help-content h2 {\n      font-size: 12px;\n      font-family: \"UniversLTStd-55Roman\", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n      letter-spacing: normal;\n      margin-bottom: 10px; }\n::ng-deep .sidebar a {\n    color: #282c37;\n    font-weight: bold;\n    text-decoration: underline;\n    cursor: pointer; }\n::ng-deep .sidebar p {\n    width: 100%;\n    margin-top: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'UniversLTPro-45Light';\n    font-size: 12px;\n    line-height: 16px;\n    font-weight: normal; }\n::ng-deep .sidebar ul,\n  ::ng-deep .sidebar ol {\n    margin-top: 0;\n    padding-left: 14px;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'UniversLTPro-45Light';\n    font-size: 12px;\n    line-height: 16px;\n    font-weight: normal; }\n::ng-deep .sidebar ul li,\n    ::ng-deep .sidebar ol li {\n      margin-bottom: 10px; }\n::ng-deep .sidebar ul:last-of-type li:last-of-type,\n    ::ng-deep .sidebar ol:last-of-type li:last-of-type {\n      margin-bottom: 0; }\n::ng-deep .sidebar .bootstrap {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    position: relative;\n    min-height: 100%; }\n::ng-deep .sidebar .btn-secondary {\n    position: relative;\n    width: 100%;\n    height: 40px;\n    margin-bottom: 20px;\n    flex-grow: 0;\n    flex-shrink: 0; }\n::ng-deep .sidebar .btn-secondary[disabled] {\n      cursor: default; }\n::ng-deep .sidebar kosmos-loading-icon {\n    position: absolute;\n    background-color: #fefefe;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0; }\n::ng-deep .sidebar .selected-labels-sidebar {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    overflow: auto;\n    color: #fff;\n    background-color: #282c37;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    z-index: 200; }\n::ng-deep .sidebar .selected-labels-sidebar::-webkit-scrollbar {\n      -webkit-appearance: none;\n              appearance: none;\n      width: 10px;\n      height: 10px; }\n::ng-deep .sidebar .selected-labels-sidebar::-webkit-scrollbar-thumb {\n      background-color: #6b6868;\n      border-radius: 0; }\n::ng-deep .sidebar .selected-labels-sidebar::-webkit-scrollbar-track-piece {\n      background-color: #3b445b; }\n::ng-deep .sidebar .selected-labels-sidebar .sidebar-body {\n      padding: 20px 20px 20px 20px;\n      height: 100vh;\n      width: 300px;\n      overflow: hidden; }\n::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-help,\n    ::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-close,\n    ::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-remove,\n    ::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-graph,\n    ::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-chevron-down,\n    ::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-chevron-left {\n      vertical-align: middle;\n      color: #000;\n      font-size: 16px;\n      float: right; }\n::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-graph {\n      margin-right: 0; }\n::ng-deep .sidebar .selected-labels-sidebar .kpmg-icon-graph.disabled {\n        opacity: 0.5; }\n::ng-deep .sidebar .selected-labels-sidebar .sortable-destination-ghost {\n      visibility: hidden;\n      height: 30px; }\n::ng-deep .sidebar .selected-labels-sidebar .item-options {\n      background-color: #50545d;\n      border: 0;\n      color: #fff;\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      line-height: 20px;\n      height: 20px;\n      font-size: 12px; }\n::ng-deep .sidebar .selected-labels-sidebar .item-options::-ms-expand {\n        display: none; }\n::ng-deep .sidebar .selected-labels-sidebar .item-options:focus {\n        outline: none; }\n::ng-deep .sidebar .hidden {\n    display: none; }\n::ng-deep .sidebar .bottom {\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n    max-width: 260px;\n    padding-right: 10px; }\n::ng-deep .sidebar .bottom dx-button {\n      width: 100%; }\n.main-content {\n  position: relative;\n  color: #fff !important;\n  background-color: #282c37;\n  border-radius: 3px;\n  width: 100%;\n  max-width: 260px;\n  max-height: 1200px;\n  transition: max-height 0.3s ease-in-out 0.1s, padding 0.3s ease-in-out 0.1s;\n  margin-bottom: 20px;\n  margin-top: 50px; }\n.main-content.first {\n    margin-top: 0;\n    z-index: 9999999; }\n.main-content.no-smart-workspace {\n    position: absolute;\n    overflow-y: auto;\n    height: 25vh;\n    max-height: 25vh;\n    bottom: 10px;\n    margin-bottom: 0;\n    margin-top: 0; }\n.absolute {\n  position: absolute; }\n.expander {\n  cursor: pointer;\n  margin-bottom: -40px;\n  font-family: 'UniversLTPro-45Light';\n  font-size: 17px;\n  font-weight: normal;\n  color: #fff; }\n.collapse {\n  height: 20px; }\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n  max-width: 260px;\n  padding-right: 10px; }\n.bottom dx-button {\n    width: 100%; }\n.button {\n  width: 100%; }\n:host {\n  background: #f5f7fa;\n  display: flex;\n  overflow: hidden; }\n.padding {\n  padding-left: 12px; }\nsection:not(:first-child) {\n  border-top: 1px solid #d7d7d7;\n  margin-top: 40px;\n  padding-top: 40px; }\n.validation-message {\n  color: #e95252;\n  margin-top: 4px; }\n#geInfo {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  width: 200px;\n  margin-left: -100px;\n  margin-top: -50px; }\n#geInfo > #geStatus {\n    color: #303030; }\nh3 {\n  color: rgba(48, 48, 48, 0.8);\n  font-size: 18px;\n  margin: 0; }\n.template {\n  font-size: 18px;\n  margin-top: 7px; }\n::ng-deep .dx-popup-wrapper.delete-page-popup .dx-popup-content p {\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center; }\n::ng-deep .dx-popup-wrapper.delete-page-popup .dx-toolbar .dx-button {\n  min-width: 0; }\n::ng-deep .dx-popup-wrapper.delete-page-popup .dx-toolbar .dx-toolbar-after .dx-button.dx-button-normal {\n  background-color: #f5f7fa;\n  border: solid 1px #282c37;\n  color: #282c37; }\n::ng-deep .dx-popup-wrapper.froala-popup {\n  overflow: auto; }\n::ng-deep .dx-popup-wrapper.froala-popup .dx-overlay-content {\n    -webkit-transform: translate(94px, 54px) !important;\n            transform: translate(94px, 54px) !important; }\n::ng-deep .dx-popup-wrapper.froala-popup .dx-overlay-content .dx-popup-content .dx-template-wrapper {\n      position: relative; }\n.froala-container {\n  float: left; }\n.snippet-container2 {\n  padding-left: 5px;\n  float: right;\n  width: 210px; }\n::ng-deep .fr-table-colors .fr-command.fr-selected-color {\n  border: solid 2px #282c37; }\n::ng-deep .froala-container [class*=' fa-'],\n::ng-deep .fr-popup [class*=' fa-'] {\n  color: inherit !important; }\n::ng-deep .fr-box.fr-basic .fr-element.fr-view {\n  padding: 0;\n  word-wrap: normal; }\n/* Styling */\n::ng-deep .sm-container h1,\n::ng-deep .sm-container h2,\n::ng-deep .sm-container h3,\n::ng-deep .sm-container p,\n::ng-deep .sm-container li,\n::ng-deep .sm-container blockquote,\n::ng-deep .sm-container pre,\n::ng-deep .sm-container th,\n::ng-deep .sm-container h1cover,\n::ng-deep .sm-container h2cover,\n::ng-deep .sm-container h3cover,\n::ng-deep .sm-container pcover,\n::ng-deep .sm-container td {\n  line-height: 1.2;\n  -webkit-font-feature-settings: 'liga', 'kern';\n          font-feature-settings: 'liga', 'kern';\n  word-wrap: normal; }\n::ng-deep .sm-container h1 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container h1cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 146px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container h2 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: UniversLTStd-65Bold, sans-serif;\n  color: #00338d;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container h2cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container pcover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #00338d;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container h3cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #00338d;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: bold; }\n::ng-deep .sm-container h3,\n::ng-deep .sm-container h4,\n::ng-deep .sm-container h5,\n::ng-deep .sm-container h6 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: UniversLTStd-55Roman, sans-serif;\n  color: #00338d;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container p,\n::ng-deep .sm-container li {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container blockquote,\n::ng-deep .sm-container pre {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: italic;\n  font-weight: 400; }\n::ng-deep .sm-container th,\n::ng-deep .sm-container td {\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .sm-container span.current {\n  color: #1791da; }\n::ng-deep .sm-container h1.intro-column,\n::ng-deep .sm-container h2.intro-column,\n::ng-deep .sm-container h3.intro-column,\n::ng-deep .sm-container h4.intro-column,\n::ng-deep .sm-container h5.intro-column,\n::ng-deep .sm-container h6.intro-column,\n::ng-deep .sm-container h1cover.intro-column,\n::ng-deep .sm-container h2cover.intro-column,\n::ng-deep .sm-container h3cover.intro-column,\n::ng-deep .sm-container pcover.intro-column,\n::ng-deep .sm-container p.intro-column,\n::ng-deep .sm-container li.intro-column,\n::ng-deep .sm-container blockquote.intro-column,\n::ng-deep .sm-container pre.intro-column,\n::ng-deep .sm-container th.intro-column,\n::ng-deep .sm-container td.intro-column {\n  color: #fff;\n  font-weight: 600;\n  padding: 0 6px 0 6px; }\n::ng-deep .sm-container h1.intro-column:first-child,\n  ::ng-deep .sm-container h2.intro-column:first-child,\n  ::ng-deep .sm-container h3.intro-column:first-child,\n  ::ng-deep .sm-container h4.intro-column:first-child,\n  ::ng-deep .sm-container h5.intro-column:first-child,\n  ::ng-deep .sm-container h6.intro-column:first-child,\n  ::ng-deep .sm-container h1cover.intro-column:first-child,\n  ::ng-deep .sm-container h2cover.intro-column:first-child,\n  ::ng-deep .sm-container h3cover.intro-column:first-child,\n  ::ng-deep .sm-container pcover.intro-column:first-child,\n  ::ng-deep .sm-container p.intro-column:first-child,\n  ::ng-deep .sm-container li.intro-column:first-child,\n  ::ng-deep .sm-container blockquote.intro-column:first-child,\n  ::ng-deep .sm-container pre.intro-column:first-child,\n  ::ng-deep .sm-container th.intro-column:first-child,\n  ::ng-deep .sm-container td.intro-column:first-child {\n    padding-top: 6px; }\n::ng-deep .sm-container h1.intro-column:last-child,\n  ::ng-deep .sm-container h2.intro-column:last-child,\n  ::ng-deep .sm-container h3.intro-column:last-child,\n  ::ng-deep .sm-container h4.intro-column:last-child,\n  ::ng-deep .sm-container h5.intro-column:last-child,\n  ::ng-deep .sm-container h6.intro-column:last-child,\n  ::ng-deep .sm-container h1cover.intro-column:last-child,\n  ::ng-deep .sm-container h2cover.intro-column:last-child,\n  ::ng-deep .sm-container h3cover.intro-column:last-child,\n  ::ng-deep .sm-container pcover.intro-column:last-child,\n  ::ng-deep .sm-container p.intro-column:last-child,\n  ::ng-deep .sm-container li.intro-column:last-child,\n  ::ng-deep .sm-container blockquote.intro-column:last-child,\n  ::ng-deep .sm-container pre.intro-column:last-child,\n  ::ng-deep .sm-container th.intro-column:last-child,\n  ::ng-deep .sm-container td.intro-column:last-child {\n    padding-bottom: 6px;\n    margin-bottom: 0; }\n::ng-deep .sm-container h3.intro-column,\n::ng-deep .sm-container h4.intro-column,\n::ng-deep .sm-container h5.intro-column,\n::ng-deep .sm-container h6.intro-column,\n::ng-deep .sm-container p.intro-column,\n::ng-deep .sm-container li.intro-column,\n::ng-deep .sm-container blockquote.intro-column,\n::ng-deep .sm-container pre.intro-column,\n::ng-deep .sm-container th.intro-column,\n::ng-deep .sm-container td.intro-column {\n  font-family: UniversLTStd-65Bold, sans-serif; }\n::ng-deep .fr-element h1,\n::ng-deep .fr-element h2,\n::ng-deep .fr-element h3,\n::ng-deep .fr-element p,\n::ng-deep .fr-element li,\n::ng-deep .fr-element blockquote,\n::ng-deep .fr-element pre,\n::ng-deep .fr-element th,\n::ng-deep .fr-element h1cover,\n::ng-deep .fr-element h2cover,\n::ng-deep .fr-element h3cover,\n::ng-deep .fr-element pcover,\n::ng-deep .fr-element td,\n::ng-deep .fr-dropdown-list li h1,\n::ng-deep .fr-dropdown-list li h2,\n::ng-deep .fr-dropdown-list li h3,\n::ng-deep .fr-dropdown-list li p,\n::ng-deep .fr-dropdown-list li li,\n::ng-deep .fr-dropdown-list li blockquote,\n::ng-deep .fr-dropdown-list li pre,\n::ng-deep .fr-dropdown-list li th,\n::ng-deep .fr-dropdown-list li h1cover,\n::ng-deep .fr-dropdown-list li h2cover,\n::ng-deep .fr-dropdown-list li h3cover,\n::ng-deep .fr-dropdown-list li pcover,\n::ng-deep .fr-dropdown-list li td {\n  line-height: 1.2;\n  -webkit-font-feature-settings: 'liga', 'kern';\n          font-feature-settings: 'liga', 'kern';\n  word-wrap: normal; }\n::ng-deep .fr-element h1,\n::ng-deep .fr-dropdown-list li h1 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element h1cover,\n::ng-deep .fr-dropdown-list li h1cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 146px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element h2,\n::ng-deep .fr-dropdown-list li h2 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: UniversLTStd-65Bold, sans-serif;\n  color: #00338d;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element h2cover,\n::ng-deep .fr-dropdown-list li h2cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element pcover,\n::ng-deep .fr-dropdown-list li pcover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #00338d;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element h3cover,\n::ng-deep .fr-dropdown-list li h3cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #00338d;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: bold; }\n::ng-deep .fr-element h3,\n::ng-deep .fr-element h4,\n::ng-deep .fr-element h5,\n::ng-deep .fr-element h6,\n::ng-deep .fr-dropdown-list li h3,\n::ng-deep .fr-dropdown-list li h4,\n::ng-deep .fr-dropdown-list li h5,\n::ng-deep .fr-dropdown-list li h6 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: UniversLTStd-55Roman, sans-serif;\n  color: #00338d;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element p,\n::ng-deep .fr-element li,\n::ng-deep .fr-dropdown-list li p,\n::ng-deep .fr-dropdown-list li li {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element blockquote,\n::ng-deep .fr-element pre,\n::ng-deep .fr-dropdown-list li blockquote,\n::ng-deep .fr-dropdown-list li pre {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: italic;\n  font-weight: 400; }\n::ng-deep .fr-element th,\n::ng-deep .fr-element td,\n::ng-deep .fr-dropdown-list li th,\n::ng-deep .fr-dropdown-list li td {\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .fr-element span.current,\n::ng-deep .fr-dropdown-list li span.current {\n  color: #1791da; }\n::ng-deep .fr-element h1.intro-column,\n::ng-deep .fr-dropdown-list li h1.intro-column {\n  color: #00338d; }\n::ng-deep .fr-element h2.intro-column,\n::ng-deep .fr-dropdown-list li h2.intro-column {\n  color: #00338d; }\n::ng-deep .fr-element h1cover.intro-column,\n::ng-deep .fr-element h2cover.intro-column,\n::ng-deep .fr-element h3cover.intro-column,\n::ng-deep .fr-element pcover.intro-column,\n::ng-deep .fr-dropdown-list li h1cover.intro-column,\n::ng-deep .fr-dropdown-list li h2cover.intro-column,\n::ng-deep .fr-dropdown-list li h3cover.intro-column,\n::ng-deep .fr-dropdown-list li pcover.intro-column {\n  color: #00338d; }\n::ng-deep .fr-element h3.intro-column,\n::ng-deep .fr-element h4.intro-column,\n::ng-deep .fr-element h5.intro-column,\n::ng-deep .fr-element h6.intro-column,\n::ng-deep .fr-dropdown-list li h3.intro-column,\n::ng-deep .fr-dropdown-list li h4.intro-column,\n::ng-deep .fr-dropdown-list li h5.intro-column,\n::ng-deep .fr-dropdown-list li h6.intro-column {\n  color: #00338d; }\n::ng-deep .fr-element p.intro-column,\n::ng-deep .fr-element li.intro-column,\n::ng-deep .fr-dropdown-list li p.intro-column,\n::ng-deep .fr-dropdown-list li li.intro-column {\n  color: #000; }\n::ng-deep .fr-element blockquote.intro-column,\n::ng-deep .fr-element pre.intro-column,\n::ng-deep .fr-dropdown-list li blockquote.intro-column,\n::ng-deep .fr-dropdown-list li pre.intro-column {\n  color: #000; }\n::ng-deep .fr-element th.intro-column,\n::ng-deep .fr-element td.intro-column,\n::ng-deep .fr-dropdown-list li th.intro-column,\n::ng-deep .fr-dropdown-list li td.intro-column {\n  color: #000; }\n::ng-deep .fr-element > h1cover,\n::ng-deep .fr-dropdown-list li > h1cover {\n  font-size: 36px !important; }\n::ng-deep .fr-element > h2cover,\n::ng-deep .fr-dropdown-list li > h2cover {\n  font-size: 30px !important; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h1,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h2,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h3,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem p,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem li,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem blockquote,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem pre,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem th,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h1cover,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h2cover,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h3cover,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem pcover,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem td {\n  line-height: 1.2;\n  -webkit-font-feature-settings: 'liga', 'kern';\n          font-feature-settings: 'liga', 'kern';\n  word-wrap: normal; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h1 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h1cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 146px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h2 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: UniversLTStd-65Bold, sans-serif;\n  color: #00338d;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h2cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: KPMG Web, sans-serif;\n  color: #00338d;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem pcover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #00338d;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h3cover {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #00338d;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: bold; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h3,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h4,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h5,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem h6 {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: UniversLTStd-55Roman, sans-serif;\n  color: #00338d;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem p,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem li {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem blockquote,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem pre {\n  border: 0 none;\n  margin: 0 0 8px;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: italic;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem th,\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem td {\n  font-family: Arial, sans-serif;\n  color: #000;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400; }\n::ng-deep .geToolbarMenu table.mxPopupMenu td.mxPopupMenuItem span.current {\n  color: #1791da; }\n::ng-deep .snippet-container {\n  position: absolute;\n  z-index: 2;\n  width: auto;\n  right: 0; }\n::ng-deep .snippet-container h1,\n  ::ng-deep .snippet-container h2,\n  ::ng-deep .snippet-container h3,\n  ::ng-deep .snippet-container p,\n  ::ng-deep .snippet-container li,\n  ::ng-deep .snippet-container blockquote,\n  ::ng-deep .snippet-container pre,\n  ::ng-deep .snippet-container th,\n  ::ng-deep .snippet-container h1cover,\n  ::ng-deep .snippet-container h2cover,\n  ::ng-deep .snippet-container h3cover,\n  ::ng-deep .snippet-container pcover,\n  ::ng-deep .snippet-container td {\n    line-height: 1.2;\n    -webkit-font-feature-settings: 'liga', 'kern';\n            font-feature-settings: 'liga', 'kern';\n    word-wrap: normal; }\n::ng-deep .snippet-container h1 {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: KPMG Web, sans-serif;\n    color: #00338d;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container h1cover {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: KPMG Web, sans-serif;\n    color: #00338d;\n    font-size: 146px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container h2 {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: UniversLTStd-65Bold, sans-serif;\n    color: #00338d;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container h2cover {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: KPMG Web, sans-serif;\n    color: #00338d;\n    font-size: 50px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container pcover {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    color: #00338d;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container h3cover {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    color: #00338d;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: bold; }\n::ng-deep .snippet-container h3,\n  ::ng-deep .snippet-container h4,\n  ::ng-deep .snippet-container h5,\n  ::ng-deep .snippet-container h6 {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: UniversLTStd-55Roman, sans-serif;\n    color: #00338d;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container p,\n  ::ng-deep .snippet-container li {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    color: #000;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container blockquote,\n  ::ng-deep .snippet-container pre {\n    border: 0 none;\n    margin: 0 0 8px;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    color: #000;\n    font-size: 14px;\n    font-style: italic;\n    font-weight: 400; }\n::ng-deep .snippet-container th,\n  ::ng-deep .snippet-container td {\n    font-family: Arial, sans-serif;\n    color: #000;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400; }\n::ng-deep .snippet-container span.current {\n    color: #1791da; }\n::ng-deep .snippet-container .snippet-scroll-view {\n    position: absolute;\n    bottom: 0;\n    height: auto;\n    top: 30px; }\n::ng-deep .sidebar-snippets {\n  margin-top: 10px; }\n::ng-deep .sidebar-snippets .info-sippet-list .info-sippet .info-text {\n    margin-top: 1px;\n    margin-bottom: 1px;\n    padding: 10px;\n    background: #f5f7fa;\n    color: #000;\n    border: thin solid rgba(160, 168, 189, 0.5);\n    border-radius: 5px;\n    text-align: left;\n    font-size: 0.9em;\n    display: block;\n    width: 100%;\n    cursor: pointer; }\n::ng-deep .sidebar-snippets .info-sippet-list .info-sippet .info-text:active {\n      background: #aaaeb8;\n      color: #f5f7fa; }\n::ng-deep .sidebar-snippets .info-sippet-list .info-sippet .info-text:hover {\n      background: #aaaeb8;\n      color: #f5f7fa; }\n::ng-deep .sidebar-snippets-footer {\n  height: 10px; }\n*[contenteditable='true'] {\n  display: inline-block; }\ndiv[contenteditable='true'] > div {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace.component.ts ***!
  \**********************************************************************/
/*! exports provided: SmartWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartWorkspaceComponent", function() { return SmartWorkspaceComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_app_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/app.const */ "./src/app/core/app.const.ts");
/* harmony import */ var _core_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/enum */ "./src/app/core/enum/index.ts");
/* harmony import */ var _core_guards_unsaved_changes_unsaved_changes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/guards/unsaved-changes/unsaved-changes */ "./src/app/core/guards/unsaved-changes/unsaved-changes.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_svg_icon_svg_icon_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/svg-icon/svg-icon.enum */ "./src/app/shared/svg-icon/svg-icon.enum.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var devextreme_angular_ui_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular/ui/switch */ "./node_modules/devextreme-angular/ui/switch.js");
/* harmony import */ var devextreme_angular_ui_switch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_switch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme/ui/notify */ "./node_modules/devextreme/ui/notify.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var devextreme_viz_palette__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme/viz/palette */ "./node_modules/devextreme/viz/palette.js");
/* harmony import */ var devextreme_viz_palette__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(devextreme_viz_palette__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/dist/es5/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_draw_io_extension_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/draw-io-extension.service */ "./src/app/project/smart-workspace/services/draw-io-extension.service.ts");
/* harmony import */ var _services_draw_io_scripts_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/draw-io-scripts.service */ "./src/app/project/smart-workspace/services/draw-io-scripts.service.ts");
/* harmony import */ var _services_froala_extension_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/froala-extension.service */ "./src/app/project/smart-workspace/services/froala-extension.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var EditorType;
(function (EditorType) {
    EditorType[EditorType["Froala"] = 0] = "Froala";
})(EditorType || (EditorType = {}));
var SmartWorkspaceComponent = /** @class */ (function (_super) {
    __extends(SmartWorkspaceComponent, _super);
    function SmartWorkspaceComponent(el, _logger, _drawIOScriptService, _reportService, _taskService, _smartWorkspaceMessageService, _route, _router, _dataExplorerService, _localStorageService, _froalaExtensionService, _drawIOExtensionService, _snippetsService, _sanitizer) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this._logger = _logger;
        _this._drawIOScriptService = _drawIOScriptService;
        _this._reportService = _reportService;
        _this._taskService = _taskService;
        _this._smartWorkspaceMessageService = _smartWorkspaceMessageService;
        _this._route = _route;
        _this._router = _router;
        _this._dataExplorerService = _dataExplorerService;
        _this._localStorageService = _localStorageService;
        _this._froalaExtensionService = _froalaExtensionService;
        _this._drawIOExtensionService = _drawIOExtensionService;
        _this._snippetsService = _snippetsService;
        _this._sanitizer = _sanitizer;
        _this.SvgIcons = _shared_svg_icon_svg_icon_enum__WEBPACK_IMPORTED_MODULE_10__["SvgIconTypes"];
        _this._froalaToolbarHeight = 82;
        _this._froalaPopupBreakSize = 858;
        _this._froalaPopupBreakColumn = 4;
        _this._froalaPopupSnippetsBreakSize = 641;
        _this._froalaPopupSnippetsBreakColumn = 3;
        _this.RIGHTS = _core_app_const__WEBPACK_IMPORTED_MODULE_4__["RIGHTS"];
        _this.PAGE_TYPE = _core_enum__WEBPACK_IMPORTED_MODULE_5__["ReportPageType"];
        _this.analysisForUser = true;
        _this.ReportPageOrientation = _core_enum__WEBPACK_IMPORTED_MODULE_5__["ReportPageOrientation"];
        _this.froalaPopupSize = {
            width: 1100,
            height: 600,
            className: '',
            snippetsStyle: undefined,
            snippetsScrollViewStyle: undefined
        };
        // table of content
        _this.tableOfContentVisible = false;
        // popups
        _this.confirmDeletePopupVisible = false;
        _this.confirmDeleteTemplateVisible = false;
        _this.isNewContentTemplatePopupVisible = false;
        _this.popupVisible = false;
        _this.chartsPopupVisible = false;
        _this.imagePopupVisible = false;
        _this.generateReportPopupVisible = false;
        _this.templateToDeleteId = undefined;
        _this.isAnalysisContainerSelected = false;
        _this.isSnippetsVisible = false;
        _this.taskState = undefined;
        _this.progressStates = [];
        _this.guidanceSnippetText = undefined;
        _this.introColumnEnabled = false;
        _this.guidanceIsLoading = false;
        _this.dxChartData = new _core_models__WEBPACK_IMPORTED_MODULE_7__["ChartData"]();
        _this.hasUnsavedChanges = false;
        _this.isPageContentLoaded = false;
        _this.onConfirmDeletePagePopup = function () {
            _this.confirmDeletePopupVisible = false;
            _this._removePage(_this.pageToDelete.scopeItemId, _this.pageToDelete.sequenceNumber);
        };
        _this.onCloseDeletePagePopup = function () {
            _this.confirmDeletePopupVisible = false;
            _this.pageToDelete = undefined;
        };
        _this.onDonePopup = function () {
            var froalaContent = _this._froala.getEditor()('html.get');
            if (_this._drawIOExtensionService.isIntroColumnSelected && froalaContent.length > 0) {
                var content$ = $(froalaContent)
                    .wrapAll('<div/>')
                    .parent();
                content$.find('h1, h2, h3, p, blockquote').addClass('intro-column');
                froalaContent = content$.html();
            }
            _this._drawIOExtensionService.updateAndEnableGraph(froalaContent);
            _this._drawIOExtensionService.fireStopEditingEvent();
            _this.clearFroala();
        };
        /**
         * handler for changing intro column
         *
         * @memberof SmartWorkspaceComponent
         */
        _this.onIntroColumnChange = function (event) {
            _this.introColumnEnabled = event.value;
            // Intro column should be on left side over all rows
            if (event.value == true) {
                _this._drawIOExtensionService.addIntroColumn();
            }
            else {
                _this._drawIOExtensionService.removeIntroColumn();
            }
        };
        _this.onConfirmDeleteTemplatePopup = function () {
            var projectId = _this._route.snapshot.paramMap.get('id');
            _this.confirmDeleteTemplateVisible = false;
            _this._reportService.deleteContentTemplate(_this.templateToDeleteId).subscribe(function () {
                _this.reportTemplates$ = _this._reportService.getTemplates(projectId, _this.reportPage.data.scopeItemId);
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()({
                    message: 'Content Template deleted',
                    type: 'success',
                    displayTime: 5000,
                    closeOnClick: true
                });
            });
            _this.templateToDeleteId = undefined;
        };
        _this.onCloseDeleteTemplatePopup = function () {
            _this.confirmDeleteTemplateVisible = false;
            _this.templateToDeleteId = undefined;
        };
        _this.onUpdateAnalysis = function () {
            var projectId = _this._route.snapshot.paramMap.get('id');
            var currentCell = _this._drawIOExtensionService.currentCell;
            var analysisId = _this._drawIOExtensionService.getAttributeFromCell(currentCell, 'AnalysisId');
            _this._logger.debug('update on analysis triggerd id:', analysisId);
            _this._dataExplorerService.getAnalysis(projectId, analysisId).subscribe(function (analysisData) {
                if (analysisData.isChartAnalysis) {
                    // update chart
                    _this._dataExplorerService.getAnalysisChartDataById(projectId, analysisId).subscribe(function (data) {
                        _this.dxChartData.chartData = data;
                        _this._logger.debug('got new chart data from api:', data);
                        var encodedChartData = _this.b64EncodeUnicode(JSON.stringify(data));
                        var encodedAnalysis = _this.b64EncodeUnicode(JSON.stringify(analysisData));
                        currentCell.setAttribute('SmartWorkspaceContainerType', _core_enum__WEBPACK_IMPORTED_MODULE_5__["SmartWorkspaceContainerType"].Charts);
                        currentCell.setAttribute('ChartData', encodedChartData);
                        currentCell.setAttribute('AnalysisData', encodedAnalysis);
                        currentCell.setAttribute('AnalysisName', analysisData.name);
                        _this.updateChartsDimensionAndRender(currentCell);
                    });
                }
                else {
                    // update table
                    _this._dataExplorerService.html(projectId, analysisId).subscribe(function (tableData) {
                        _this._logger.debug('got now table data from api:', tableData);
                        tableData = tableData.replace(_core_app_const__WEBPACK_IMPORTED_MODULE_4__["PLACE_HOLDER_TEXT"], analysisData.name + ' - ' + _this.reportPage.data.taskName);
                        currentCell.setAttribute('SmartWorkspaceContainerType', _core_enum__WEBPACK_IMPORTED_MODULE_5__["SmartWorkspaceContainerType"].DataExplorerTable);
                        currentCell.setAttribute('ChartData', '');
                        currentCell.setAttribute('AnalysisData', '');
                        _this._drawIOExtensionService.disableGraph();
                        _this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', tableData);
                    });
                }
            });
        };
        _this.loadScripts();
        _this.froalaOptions = _this._froalaExtensionService.getFroalaOptions();
        return _this;
    }
    SmartWorkspaceComponent.prototype.hasChanges = function () {
        return this.hasUnsavedChanges;
    };
    SmartWorkspaceComponent.prototype.loadScripts = function () {
        this._drawIOScriptService
            .load()
            .then(function (data) {
            // console.log('script loaded', data);
        })
            .catch(function (error) { return console.log(error); });
    };
    SmartWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        this._froalaPopupStyleSheet = style.sheet;
        Object(devextreme_viz_palette__WEBPACK_IMPORTED_MODULE_14__["registerPalette"])('kpmgPalette', _core_app_const__WEBPACK_IMPORTED_MODULE_4__["KPMG_CHART_COLOR_SET"]);
        Object(devextreme_viz_palette__WEBPACK_IMPORTED_MODULE_14__["currentPalette"])('kpmgPalette');
        this.guidanceIsLoading = true;
        this.layouts = this._drawIOExtensionService.layouts;
        this._froalaExtensionService.init();
        this.currentUser = this._localStorageService.get('currentUser');
        this._route.data
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this))
            .subscribe(function (data) {
            _this.progressStates = data.states;
            _this.taskState = data.taskState;
        });
        // Interval is for checking if draw.io is ready
        this._myInterval = setInterval(function () {
            if (typeof App != 'undefined') {
                clearInterval(_this._myInterval);
                _this._route.params.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(_this)).subscribe(function (params) {
                    var projectId = params['id'];
                    var productId = +params['productId'];
                    var chapterId = +params['chapterId'];
                    var taskId = +params['taskId'];
                    var sequenceNumber = +params['sequenceNumber'];
                    _this.reportTemplates$ = _this._reportService.getTemplates(projectId, taskId);
                    _this._dataExplorerService.list(projectId).subscribe(function (data) {
                        _this.analysises = data;
                        _this.analysisesByUser = data.filter(function (a) { return a.userCreatedBy.gpid.includes(_this.currentUser.gpid); });
                        _this.showAnalysis(true);
                    });
                    _this.guidanceIsLoading = true;
                    _this._snippetsService
                        .getGuidanceSnippetByTask(projectId, taskId)
                        .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(_this))
                        .subscribe(function (text) {
                        if (text) {
                            _this.guidanceSnippetText = _this._sanitizer.bypassSecurityTrustHtml(text.contentHtml);
                        }
                        else {
                            _this.guidanceSnippetText = undefined;
                        }
                        _this.guidanceIsLoading = false;
                    });
                    _this._reportService
                        .getPage(projectId, productId, chapterId, taskId, sequenceNumber)
                        .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(_this))
                        .subscribe(function (page) {
                        _this.reportPage = page;
                        if (!_this._drawIOExtensionService.isLoaded) {
                            _this._drawIOExtensionService.init(_this, _this.reportPage.data.content);
                        }
                        else {
                            _this._drawIOExtensionService.setContent(_this.reportPage.data.content);
                        }
                        _this._generatePopupStyles(page.grid);
                    }, function (error) {
                        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                            if (error.status == 404) {
                                _this._router.navigate(['projects', projectId, 'tasks']);
                            }
                        }
                    });
                });
            }
        }, 500);
        this._drawIOExtensionService.contentChanged
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this))
            .subscribe(function (data) { return (_this.hasUnsavedChanges = data); });
        this._drawIOExtensionService.chartCellChanged
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this))
            .subscribe(function (data) { return _this.updateChartsDimensionAndRender(data); });
        this._drawIOExtensionService.imageCellChanged
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this))
            .subscribe(function (data) { return _this.updateImageContainer(data); });
    };
    SmartWorkspaceComponent.prototype.ngOnDestroy = function () {
        this._drawIOExtensionService.dispose();
    };
    SmartWorkspaceComponent.prototype.showAnalysis = function (showByUser) {
        this.analysisForUser = showByUser;
        if (this.analysisForUser) {
            this.analysisesList = this.analysisesByUser;
        }
        else {
            this.analysisesList = this.analysises;
        }
    };
    /**
     * Save Action handler
     *
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.doSavePage = function () {
        this.hasUnsavedChanges = false;
        var projectId = this._route.snapshot.paramMap.get('id');
        var xml = this.b64EncodeUnicode(this._drawIOExtensionService.graphXml);
        var payload = new _core_models__WEBPACK_IMPORTED_MODULE_7__["ReportPageUpdate"](xml);
        this._reportService
            .save(payload, projectId, this.reportPage.data.scopeItemId, this.reportPage.data.sequenceNumber)
            .subscribe();
    };
    SmartWorkspaceComponent.prototype.doSaveTemplate = function () {
        this.isNewContentTemplatePopupVisible = true;
    };
    SmartWorkspaceComponent.prototype.saveContentTemplate = function (templateName) {
        var _this = this;
        var projectId = this._route.snapshot.paramMap.get('id');
        var templateType = _core_enum__WEBPACK_IMPORTED_MODULE_5__["TemplateType"].CONTENT_TEMPLATE_PAGE;
        if (this.reportPage.data.type == _core_enum__WEBPACK_IMPORTED_MODULE_5__["ReportPageType"].COVER) {
            templateType = _core_enum__WEBPACK_IMPORTED_MODULE_5__["TemplateType"].CONTENT_TEMPLATE_COVER;
        }
        var xml = this.b64EncodeUnicode(this._drawIOExtensionService.graphXml);
        var payload = new _core_models__WEBPACK_IMPORTED_MODULE_7__["ReportPageUpdate"](xml, templateName, templateType);
        this._reportService.saveContentTemplate(payload, projectId, this.reportPage.data.scopeItemId).subscribe(function () {
            _this.reportTemplates$ = _this._reportService.getTemplates(projectId, _this.reportPage.data.scopeItemId);
        });
        this.isNewContentTemplatePopupVisible = false;
    };
    SmartWorkspaceComponent.prototype.closeContentTemplatePopup = function () {
        this.isNewContentTemplatePopupVisible = false;
    };
    SmartWorkspaceComponent.prototype.flipOrientation = function () {
        var _this = this;
        var isPortrait = this.isPortrait(this._drawIOExtensionService.pageFormat.width, this._drawIOExtensionService.pageFormat.height);
        var projectId = this._route.snapshot.paramMap.get('id');
        this._reportService
            .getMasterTemplate(!isPortrait, projectId, this.reportPage.data.productId, this.reportPage.data.chapterId, this.reportPage.data.scopeItemId, this.reportPage.data.sequenceNumber)
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this))
            .subscribe(function (page) {
            _this._drawIOExtensionService.setContent(page.data.content);
        });
    };
    SmartWorkspaceComponent.prototype.addNewPage = function (orientation) {
        this._addNewPage(this.reportPage.data.scopeItemId, undefined, orientation);
    };
    SmartWorkspaceComponent.prototype.addNewCoverPage = function (orientation) {
        this._addNewPage(this.reportPage.data.scopeItemId, undefined, orientation, _core_enum__WEBPACK_IMPORTED_MODULE_5__["ReportPageType"].COVER);
    };
    SmartWorkspaceComponent.prototype.addNewPageByTemplate = function (templateId) {
        this._addNewPage(this.reportPage.data.scopeItemId, templateId);
    };
    SmartWorkspaceComponent.prototype.addNewPageByTableOfContent = function (item) {
        this._addNewPage(item.taskId);
    };
    SmartWorkspaceComponent.prototype.removePage = function () {
        this.pageToDelete = new _core_models__WEBPACK_IMPORTED_MODULE_7__["ReportPageData"]();
        this.pageToDelete.scopeItemId = this.reportPage.data.scopeItemId;
        this.pageToDelete.sequenceNumber = this.reportPage.data.sequenceNumber;
        this.pageToDelete.taskName = this.reportPage.data.taskName;
        this.pageToDelete.pageNumber = this.reportPage.data.pageNumber;
        this.confirmDeletePopupVisible = true;
    };
    SmartWorkspaceComponent.prototype.removePageByTableOfContent = function (item) {
        this.pageToDelete = new _core_models__WEBPACK_IMPORTED_MODULE_7__["ReportPageData"]();
        this.pageToDelete.scopeItemId = item.taskId;
        this.pageToDelete.sequenceNumber = item.sequenceNumber;
        this.pageToDelete.taskName = item.title;
        this.pageToDelete.pageNumber = item.pageNumber;
        this.confirmDeletePopupVisible = true;
    };
    SmartWorkspaceComponent.prototype.nextPage = function () {
        var navigation = this._reportService.getNextNavigation(this.reportPage.links);
        this.navigateToReportPage(navigation);
    };
    SmartWorkspaceComponent.prototype.previousPage = function () {
        var navigation = this._reportService.getPreviousNavigation(this.reportPage.links);
        this.navigateToReportPage(navigation);
    };
    SmartWorkspaceComponent.prototype.selectPage = function (navigation) {
        this.navigateToReportPage(navigation);
    };
    SmartWorkspaceComponent.prototype.showTableOfContent = function () {
        this.tableOfContentVisible = true;
    };
    SmartWorkspaceComponent.prototype.hideTableOfContent = function () {
        this.tableOfContentVisible = false;
    };
    /**
     * Generate Report action handler
     *
     * @private
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.doGenerateReport = function () {
        this.generateReportPopupVisible = true;
    };
    SmartWorkspaceComponent.prototype.generateReport = function (settings) {
        var projectId = this._route.snapshot.paramMap.get('id');
        var taskId = this.reportPage.data.scopeItemId;
        this._reportService.getReport(projectId, settings, taskId).subscribe(function (pdfBytes) {
            var file = new Blob([pdfBytes], { type: 'application/pdf' });
            var filename = 'report.pdf';
            Object(file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"])(file, filename);
        }, function (error) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()({
                message: 'No report to display',
                type: 'error',
                displayTime: 5000,
                closeOnClick: true
            });
        });
        this.generateReportPopupVisible = false;
    };
    SmartWorkspaceComponent.prototype.closeGenerateReportPopup = function () {
        this.generateReportPopupVisible = false;
    };
    SmartWorkspaceComponent.prototype.closeImagePopup = function () {
        this.imagePopupVisible = false;
        this._drawIOExtensionService.enableGraph();
    };
    /**
     * function to add our special Generic Container
     *
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.addGenericContainer = function () {
        this._drawIOExtensionService.addGenericContainer();
    };
    /**
     * function to add our special Generic Container
     *
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.addImageContainer = function () {
        this._drawIOExtensionService.addImageContainer();
    };
    /**
     * function to insert Table Container
     *
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.InsertTableContainer = function () {
        this._drawIOExtensionService.InsertTableContainer();
    };
    /**
     * Froala is called first time (initialisation)
     * @param froala
     */
    SmartWorkspaceComponent.prototype.initFroala = function (froala) {
        this._froala = froala;
    };
    /**
     * Froala is called again
     */
    SmartWorkspaceComponent.prototype.onEditPopupShowing = function () {
        this._drawIOExtensionService.disableGraph();
        this._froala.initialize();
        this._froala.getEditor()('html.set', this._drawIOExtensionService.selectedValue);
        this._clearEmptyFroalaContent();
    };
    SmartWorkspaceComponent.prototype.onFroalaPopupHiding = function () {
        this._drawIOExtensionService.enableGraph();
        this.clearFroala();
    };
    /**
     * helper to set the width for the dropdown
     *
     * @param {*} e
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.onLayoutSelectBoxOpen = function (e) {
        e.component.reset();
        e.component._popup.option('width', 100);
    };
    /**
     * handler when layout was changed
     *
     * @param {*} e
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.onLayoutSelectBoxChange = function (e) {
        var _this = this;
        var selectedLayout = e.selectedItem;
        if (selectedLayout) {
            if (this._drawIOExtensionService.hasOnlyIntroColumn) {
                this._drawIOExtensionService.removeIntroColumn();
            }
            if (!this._drawIOExtensionService.hasContainers) {
                this.switchIntroColumn.instance.option('value', selectedLayout.layoutColumn);
                selectedLayout.layoutContainers.forEach(function (container) {
                    _this._drawIOExtensionService.addContainerWithSize(container);
                });
            }
            else {
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()({
                    message: 'There is alreay content on the page',
                    type: 'error',
                    displayTime: 3000,
                    closeOnClick: true
                });
            }
        }
    };
    SmartWorkspaceComponent.prototype.handleSnippetClicked = function (snippet) {
        this._clearEmptyFroalaContent();
        this._froala.getEditor()('html.insert', $.FroalaEditor.START_MARKER + snippet.contentHtml + $.FroalaEditor.END_MARKER, true);
    };
    SmartWorkspaceComponent.prototype.handleSidebarSnippetClicked = function (snippet) {
        if (this._drawIOExtensionService.getIsContentEditing) {
            var range = window.getSelection().getRangeAt(0);
            var content = range.extractContents();
            content.textContent = snippet.contentHtml;
            range.insertNode(content);
        }
        else {
            var currentCell = this._drawIOExtensionService.currentCell;
            var existingContent = this._drawIOExtensionService.getAttributeFromCell(currentCell, 'label');
            var newContent = '';
            if (this._drawIOExtensionService.isIntroColumnSelected) {
                if (existingContent == '<p class="intro-column"></p>') {
                    newContent = '<p class="intro-column">' + snippet.contentHtml + '</p>';
                }
                else {
                    newContent = existingContent + '<p class="intro-column">' + snippet.contentHtml + '</p>';
                }
            }
            else {
                if (existingContent == '<p></p>' ||
                    existingContent == this._drawIOExtensionService.containerPlaceHolderText) {
                    newContent = '<p>' + snippet.contentHtml + '</p>';
                }
                else {
                    newContent = existingContent + '<p>' + snippet.contentHtml + '</p>';
                }
            }
            this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', newContent);
            this._drawIOExtensionService.fireStopEditingEvent();
        }
    };
    SmartWorkspaceComponent.prototype.setState = function (progressState) {
        var _this = this;
        var projectId = this._route.snapshot.paramMap.get('id');
        var taskId = +this._route.snapshot.paramMap.get('taskId');
        var oldTaskState = this.taskState;
        this.taskState = progressState;
        this._taskService.changeState(projectId, taskId, progressState.id).subscribe(function () {
            _this._smartWorkspaceMessageService.sendMessage(_core_enum__WEBPACK_IMPORTED_MODULE_5__["SmartWorkspaceMessageType"].STRUCTURE_CHANGED);
        }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                _this.taskState = oldTaskState;
            }
        });
    };
    SmartWorkspaceComponent.prototype.setFroalaPopupSize = function (width, height) {
        var dxPopupContentPadding = 20;
        var dxPopupBorder = 1;
        var dxPopupHeaderFooter = 36;
        this.froalaOptions.width = this._getFroalaWidth(width);
        this.froalaOptions.height = height;
        this.froalaPopupSize.width =
            this._getFroalaWidth(width) + this._getSnippetsWidth(width) + dxPopupContentPadding * 2 + dxPopupBorder * 2;
        this.froalaPopupSize.height =
            height + this._froalaToolbarHeight + dxPopupHeaderFooter * 2 + dxPopupContentPadding * 2 + 60;
        this.froalaPopupSize.className = this._getFroalaAdditionalClassName(width);
        this.froalaPopupSize.snippetsStyle = this._getSnippetsStyle(width, height);
    };
    SmartWorkspaceComponent.prototype._generatePopupStyles = function (gridLayout) {
        var width = gridLayout.pageWidth - (gridLayout.left + gridLayout.right);
        var boxWidth = Math.floor((width - (gridLayout.columns - 1) * gridLayout.spacing) / gridLayout.columns);
        for (var i = 0; i < this._froalaPopupStyleSheet.rules.length; i++) {
            this._froalaPopupStyleSheet.removeRule(i);
        }
        for (var i = 0; i < gridLayout.columns; i++) {
            var size = boxWidth * (i + 1) + gridLayout.spacing * i;
            if (i + 1 == this._froalaPopupBreakColumn) {
                this._froalaPopupBreakSize = size;
            }
            if (i + 1 == this._froalaPopupSnippetsBreakColumn) {
                this._froalaPopupSnippetsBreakSize = size;
            }
            this._froalaPopupStyleSheet.insertRule(".froala-container.size" + size + " .fr-wrapper {width: " + size + "px;}", 0);
        }
    };
    SmartWorkspaceComponent.prototype._getSnippetsWidth = function (width) {
        if (width <= this._froalaPopupSnippetsBreakSize) {
            return 0;
        }
        return 232;
    };
    SmartWorkspaceComponent.prototype._getSnippetsStyle = function (width, height) {
        var basePadding = 12;
        var baseTop = 0;
        var padding = 0;
        if (width <= this._froalaPopupSnippetsBreakSize) {
            baseTop = this._froalaToolbarHeight;
            padding = basePadding;
        }
        else {
            height += this._froalaToolbarHeight;
        }
        return {
            top: baseTop + padding + "px",
            left: width + basePadding + "px",
            height: height - padding + "px"
        };
    };
    SmartWorkspaceComponent.prototype._getFroalaAdditionalClassName = function (width) {
        if (width <= this._froalaPopupBreakSize) {
            return "size" + width;
        }
        return '';
    };
    SmartWorkspaceComponent.prototype._getFroalaWidth = function (width) {
        if (width <= this._froalaPopupBreakSize) {
            return this._froalaPopupBreakSize;
        }
        return width;
    };
    SmartWorkspaceComponent.prototype.isPortrait = function (width, height) {
        return width <= height;
    };
    SmartWorkspaceComponent.prototype._addNewPage = function (taskId, templateId, orientation, type) {
        var _this = this;
        if (taskId == null) {
            return;
        }
        var projectId = this._route.snapshot.paramMap.get('id');
        this._reportService.newPage(projectId, taskId, templateId, orientation, type).subscribe(function (links) {
            _this._smartWorkspaceMessageService.sendMessage(_core_enum__WEBPACK_IMPORTED_MODULE_5__["SmartWorkspaceMessageType"].STRUCTURE_CHANGED);
            var navigation = _this._reportService.getSelfNavigation(links);
            _this.navigateToReportPage(navigation);
        });
    };
    SmartWorkspaceComponent.prototype.clearFroala = function () {
        this._froala.destroy();
        this.popupVisible = false;
    };
    SmartWorkspaceComponent.prototype._removePage = function (taskId, sequenceNumber) {
        var _this = this;
        if (taskId == null || sequenceNumber == null) {
            return;
        }
        var projectId = this._route.snapshot.paramMap.get('id');
        this._reportService.removePage(projectId, taskId, sequenceNumber).subscribe(function (links) {
            _this._smartWorkspaceMessageService.sendMessage(_core_enum__WEBPACK_IMPORTED_MODULE_5__["SmartWorkspaceMessageType"].STRUCTURE_CHANGED);
            var navigation;
            if (taskId != _this.reportPage.data.scopeItemId || sequenceNumber > _this.reportPage.data.sequenceNumber) {
                // stay at the same page
            }
            else if (sequenceNumber < _this.reportPage.data.sequenceNumber) {
                navigation = new _core_models__WEBPACK_IMPORTED_MODULE_7__["ReportPageNavigation"](_this.reportPage.data.productId, _this.reportPage.data.chapterId, _this.reportPage.data.scopeItemId, _this.reportPage.data.sequenceNumber - 1, _this.reportPage.data.guid);
            }
            else {
                navigation = _this._reportService.getSelfNavigation(links);
            }
            if (navigation) {
                _this.navigateToReportPage(navigation);
            }
        });
    };
    SmartWorkspaceComponent.prototype.navigateToReportPage = function (navigation, triggerRefresh) {
        var _this = this;
        if (triggerRefresh === void 0) { triggerRefresh = false; }
        var projectId = this._route.snapshot.paramMap.get('id');
        var urlTree = this._router.createUrlTree([
            'projects',
            projectId,
            'smart-workspace',
            navigation.productId,
            navigation.chapterId,
            navigation.taskId,
            'page',
            navigation.sequenceNumber,
            navigation.guid
        ]);
        if (triggerRefresh) {
            this._router.navigate(['/'], { skipLocationChange: true }).then(function (params) {
                _this._router.navigateByUrl(urlTree, { replaceUrl: true });
            });
        }
        else {
            this._router.navigateByUrl(urlTree);
        }
    };
    SmartWorkspaceComponent.prototype._clearEmptyFroalaContent = function () {
        var _froalaContent = $('#froala-editor .fr-element');
        if (_froalaContent != undefined) {
            if (_froalaContent.html() == '<p><br></p>' || _froalaContent.html() == '<br>') {
                _froalaContent.html(' ');
                _froalaContent.empty();
            }
        }
    };
    SmartWorkspaceComponent.prototype.addImageToCell = function (event) {
        var _this = this;
        var currentCell = this._drawIOExtensionService.currentCell;
        var style = this._drawIOExtensionService.getCurrentCellStyle;
        style.fillColor = 'none';
        style.strokeColor = 'none';
        var newStyle = '';
        for (var _i = 0, _a = Object.entries(style); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            newStyle = newStyle + (key + '=' + value + ';');
        }
        this._drawIOExtensionService.setCurrentCellStyle(newStyle);
        var style2 = this._drawIOExtensionService.getCurrentCellStyle;
        var image = new Image();
        image.onload = function (e) {
            var imageDimension = _this.getImageDimensions(image, currentCell);
            var fullImg = 
            // tslint:disable-next-line:max-line-length
            "<img alt=\"\" width=\"" +
                imageDimension.width +
                "\" height=\"" +
                imageDimension.height +
                "\"" +
                " src=\"" +
                event +
                "\">";
            _this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', fullImg);
        };
        image.src = event;
    };
    SmartWorkspaceComponent.prototype.deleteTemplate = function (e, template) {
        e.stopPropagation();
        this.templateToDeleteId = template.id;
        this.confirmDeleteTemplateVisible = true;
    };
    SmartWorkspaceComponent.prototype.downloadTemplate = function (e, template) {
        var _this = this;
        e.stopPropagation();
        this._reportService
            .getContentTemplate(template.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["catchError"])(function (error) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()({
                message: 'Content template could not be downloaded',
                type: 'error',
                displayTime: 5000,
                closeOnClick: true
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["throwError"])(error);
        }))
            .subscribe(function (templateContent) {
            var templateFileData = {
                name: template.name,
                backgroundColor: template.backgroundColor,
                id: template.id,
                content: templateContent.content,
                templateType: template.templateType
            };
            var encodedJson = _this.b64EncodeUnicode(JSON.stringify(templateFileData));
            var blob = new Blob([encodedJson], { type: 'text/plain;charset=utf-8' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"])(blob, _this.reportPage.data.scopeItemId + " " + template.name.replace(/[\\/:"*?<>|]+/g, '') + ".cosmos");
        });
    };
    SmartWorkspaceComponent.prototype.importTemplate = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                try {
                    var importfile = _this.b64DecodeUnicode(e.target.result);
                    _this.validateAndImportTempate(importfile);
                }
                catch (_a) {
                    devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()({
                        message: 'File can not be imported',
                        type: 'error',
                        displayTime: 3000,
                        closeOnClick: true
                    });
                }
            };
            reader.readAsText(event.target.files[0]);
        }
    };
    SmartWorkspaceComponent.prototype.validateAndImportTempate = function (importedFile) {
        var _this = this;
        var decodedTemplate = JSON.parse(importedFile);
        if (decodedTemplate.content) {
            var projectId_1 = this._route.snapshot.paramMap.get('id');
            var templateType = decodedTemplate.templateType;
            if (!templateType) {
                templateType = _core_enum__WEBPACK_IMPORTED_MODULE_5__["TemplateType"].CONTENT_TEMPLATE_PAGE;
            }
            var xml = this.b64EncodeUnicode(decodedTemplate.content);
            var payload = new _core_models__WEBPACK_IMPORTED_MODULE_7__["ReportPageUpdate"](xml, decodedTemplate.name, templateType);
            this._reportService
                .saveContentTemplate(payload, projectId_1, this.reportPage.data.scopeItemId)
                .subscribe(function () {
                _this.reportTemplates$ = _this._reportService.getTemplates(projectId_1, _this.reportPage.data.scopeItemId);
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()({
                    message: 'Content Template imported',
                    type: 'success',
                    displayTime: 5000,
                    closeOnClick: true
                });
            });
            this.isNewContentTemplatePopupVisible = false;
        }
    };
    // Charts functions -------------------
    /**
     * load data for given analysis and insert it if space is available
     *
     * @param {Analysis} analysis
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.addAnalysis = function (analysis) {
        var _this = this;
        var projectId = this._route.snapshot.paramMap.get('id');
        var freeCellsInSameRow = this._drawIOExtensionService.checkForFreeCellsWithSpan();
        // if there is no space no need to query BE
        if (typeof freeCellsInSameRow != 'undefined') {
            this._dataExplorerService.getAnalysis(projectId, analysis.id).subscribe(function (analysisData) {
                var analysisGot = new _shared_index__WEBPACK_IMPORTED_MODULE_9__["AnalysisMapper"]().mapFromDto(_this._dataExplorerService, analysisData);
                if (analysisData.isChartAnalysis) {
                    _this.analysis = analysisGot;
                    // load chart
                    _this.loadChartData(analysisGot);
                }
                else {
                    // load table
                    _this.loadTableData(analysisGot);
                }
            });
        }
        else {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()({
                message: 'No more free Space available',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
        }
    };
    /**
     * load Table data and create Container
     *
     * @param {Analysis} analysis
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.loadTableData = function (analysis) {
        var _this = this;
        var projectId = this._route.snapshot.paramMap.get('id');
        this._dataExplorerService.html(projectId, analysis.id).subscribe(function (tableData) {
            tableData = tableData.replace(_core_app_const__WEBPACK_IMPORTED_MODULE_4__["PLACE_HOLDER_TEXT"], analysis.name + ' - ' + _this.reportPage.data.taskName);
            _this._drawIOExtensionService.addDataSheetContainer(analysis.id, tableData, projectId, 2);
        });
    };
    /**
     * load Chart Data and create container
     *
     * @param {Analysis} analysis
     * @memberof SmartWorkspaceComponent
     */
    SmartWorkspaceComponent.prototype.loadChartData = function (analysis) {
        var _this = this;
        var projectId = this._route.snapshot.paramMap.get('id');
        this._dataExplorerService.getAnalysisChartDataById(projectId, analysis.id).subscribe(function (data) {
            _this.dxChartData.chartData = data;
            var encodedChartData = _this.b64EncodeUnicode(JSON.stringify(data));
            var encodedAnalysis = _this.b64EncodeUnicode(JSON.stringify(analysis));
            _this._drawIOExtensionService.addAnalysisGenericContainer(analysis.id, encodedChartData, encodedAnalysis, analysis.name, projectId, 2);
        });
    };
    /**
     * updates charts dimension and render chart
     *
     * @param {*} cell
     */
    SmartWorkspaceComponent.prototype.updateChartsDimensionAndRender = function (cell) {
        this._drawIOExtensionService.disableGraph();
        this._logger.debug('Render Charts after resizing', cell.geometry.width, cell.geometry.height);
        this.chartViewComponent.chartsHeight = cell.geometry.height - 32;
        this.chartViewComponent.chartsWidth = cell.geometry.width - 2;
        var analysisId = this._drawIOExtensionService.getAttributeFromCell(cell, 'AnalysisId');
        var analysisDataDecoded = JSON.parse(this.b64DecodeUnicode(this._drawIOExtensionService.getAttributeFromCell(cell, 'AnalysisData')));
        var chartDataDecoded = JSON.parse(this.b64DecodeUnicode(this._drawIOExtensionService.getAttributeFromCell(cell, 'ChartData')));
        this.chartViewComponent.loadStaticData(analysisDataDecoded, chartDataDecoded);
    };
    SmartWorkspaceComponent.prototype.calculateAspectRatioFit = function (srcWidth, srcHeight, maxWidth, maxHeight) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
        return { width: Math.round(srcWidth * ratio), height: Math.round(srcHeight * ratio) };
    };
    SmartWorkspaceComponent.prototype.updateImageContainer = function (cell) {
        var _this = this;
        var currentCell = this._drawIOExtensionService.currentCell;
        var content = this._drawIOExtensionService.getAttributeFromCell(cell, 'label');
        var wrapper = document.createElement('div');
        wrapper.innerHTML = content;
        var imageElement = wrapper.firstChild;
        var image = new Image();
        image.onload = function (e) {
            var imageDimension = _this.getImageDimensions(image, currentCell);
            imageElement.height = imageDimension.height;
            imageElement.width = imageDimension.width;
            _this._drawIOExtensionService.updateCellPropertyAndEnableGraph(currentCell, 'label', imageElement.outerHTML);
        };
        image.src = imageElement.src;
    };
    SmartWorkspaceComponent.prototype.getImageDimensions = function (image, currentCell) {
        var imageDimension = { width: 0, height: 0 };
        if (image.width > currentCell.geometry.width || image.height > currentCell.geometry.height) {
            imageDimension = this.calculateAspectRatioFit(image.width, image.height, currentCell.geometry.width, currentCell.geometry.height);
        }
        else {
            imageDimension.height = image.height;
            imageDimension.width = image.width;
        }
        return imageDimension;
    };
    /**
     * listener when the chart has finished rendering
     *
     */
    SmartWorkspaceComponent.prototype.onChartReadyEvent = function (chartInstance) {
        var currentCell = this._drawIOExtensionService.currentCell;
        if (typeof currentCell != 'undefined') {
            this._drawIOExtensionService.updateChartSVG(this.b64EncodeUnicode(chartInstance.svg()), this.chartViewComponent.chartsWidth, this.chartViewComponent.chartsHeight, currentCell, this.reportPage.data.taskName);
        }
    };
    SmartWorkspaceComponent.prototype.onEditInDataExplorer = function () {
        var projectId = this._route.snapshot.paramMap.get('id');
        var currentCell = this._drawIOExtensionService.currentCell;
        var analysisId = this._drawIOExtensionService.getAttributeFromCell(currentCell, 'AnalysisId');
        this._router.navigate(['/projects', projectId, 'analysis', analysisId]);
    };
    SmartWorkspaceComponent.prototype.b64EncodeUnicode = function (str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        }));
    };
    SmartWorkspaceComponent.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map
            .call(atob(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('switchIntroColumn'),
        __metadata("design:type", devextreme_angular_ui_switch__WEBPACK_IMPORTED_MODULE_12__["DxSwitchComponent"])
    ], SmartWorkspaceComponent.prototype, "switchIntroColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_index__WEBPACK_IMPORTED_MODULE_9__["ChartViewComponent"]),
        __metadata("design:type", _shared_index__WEBPACK_IMPORTED_MODULE_9__["ChartViewComponent"])
    ], SmartWorkspaceComponent.prototype, "chartViewComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chartVar'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxChartComponent"])
    ], SmartWorkspaceComponent.prototype, "analysisChart", void 0);
    SmartWorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./smart-workspace.component.html */ "./src/app/project/smart-workspace/smart-workspace.component.html"),
            styles: [__webpack_require__(/*! ./smart-workspace.component.scss */ "./src/app/project/smart-workspace/smart-workspace.component.scss")]
        }),
        Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_18__["TakeUntilDestroy"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_16__["NGXLogger"],
            _services_draw_io_scripts_service__WEBPACK_IMPORTED_MODULE_22__["DrawIOScriptService"],
            _core_services__WEBPACK_IMPORTED_MODULE_8__["ReportService"],
            _core_services__WEBPACK_IMPORTED_MODULE_8__["ScopeItemService"],
            _core_services__WEBPACK_IMPORTED_MODULE_8__["SmartWorkspaceMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_8__["DataExplorerService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_17__["LocalStorageService"],
            _services_froala_extension_service__WEBPACK_IMPORTED_MODULE_23__["FroalaExtensionService"],
            _services_draw_io_extension_service__WEBPACK_IMPORTED_MODULE_21__["DrawIOExtensionService"],
            _core_services__WEBPACK_IMPORTED_MODULE_8__["SnippetsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SmartWorkspaceComponent);
    return SmartWorkspaceComponent;
}(_core_guards_unsaved_changes_unsaved_changes__WEBPACK_IMPORTED_MODULE_6__["UnsavedChanges"]));



/***/ }),

/***/ "./src/app/project/smart-workspace/smart-workspace.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/project/smart-workspace/smart-workspace.module.ts ***!
  \*******************************************************************/
/*! exports provided: SmartWorkspaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartWorkspaceModule", function() { return SmartWorkspaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_messages_smart_workspace_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/messages/smart-workspace-message.service */ "./src/app/core/services/messages/smart-workspace-message.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _generate_report_popup_generate_report_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generate-report-popup/generate-report-popup.component */ "./src/app/project/smart-workspace/generate-report-popup/generate-report-popup.component.ts");
/* harmony import */ var _info_snippet_list_info_snippet_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-snippet-list/info-snippet-list.component */ "./src/app/project/smart-workspace/info-snippet-list/info-snippet-list.component.ts");
/* harmony import */ var _new_content_template_popup_new_content_template_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-content-template-popup/new-content-template-popup.component */ "./src/app/project/smart-workspace/new-content-template-popup/new-content-template-popup.component.ts");
/* harmony import */ var _services_draw_io_extension_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/draw-io-extension.service */ "./src/app/project/smart-workspace/services/draw-io-extension.service.ts");
/* harmony import */ var _services_draw_io_scripts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/draw-io-scripts.service */ "./src/app/project/smart-workspace/services/draw-io-scripts.service.ts");
/* harmony import */ var _services_froala_extension_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/froala-extension.service */ "./src/app/project/smart-workspace/services/froala-extension.service.ts");
/* harmony import */ var _services_html_table_theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/html-table-theme.service */ "./src/app/project/smart-workspace/services/html-table-theme.service.ts");
/* harmony import */ var _smart_workspace_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./smart-workspace-routing.module */ "./src/app/project/smart-workspace/smart-workspace-routing.module.ts");
/* harmony import */ var _smart_workspace_table_of_content_smart_workspace_table_of_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./smart-workspace-table-of-content/smart-workspace-table-of-content.component */ "./src/app/project/smart-workspace/smart-workspace-table-of-content/smart-workspace-table-of-content.component.ts");
/* harmony import */ var _smart_workspace_toolbar_smart_workspace_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./smart-workspace-toolbar/smart-workspace-toolbar.component */ "./src/app/project/smart-workspace/smart-workspace-toolbar/smart-workspace-toolbar.component.ts");
/* harmony import */ var _smart_workspace_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./smart-workspace.component */ "./src/app/project/smart-workspace/smart-workspace.component.ts");
/* harmony import */ var _table_of_content_select_line_table_of_content_select_line_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./table-of-content-select-line/table-of-content-select-line.component */ "./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.ts");
/* harmony import */ var _task_progress_state_task_progress_state_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./task-progress-state/task-progress-state.component */ "./src/app/project/smart-workspace/task-progress-state/task-progress-state.component.ts");
/* harmony import */ var _cropper_popup_cropper_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cropper-popup/cropper-popup.component */ "./src/app/project/smart-workspace/cropper-popup/cropper-popup.component.ts");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/fesm5/angular-cropperjs.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var SmartWorkspaceModule = /** @class */ (function () {
    function SmartWorkspaceModule() {
    }
    SmartWorkspaceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_3__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_3__["FroalaViewModule"].forRoot(),
                _smart_workspace_routing_module__WEBPACK_IMPORTED_MODULE_11__["SmartWorkspaceRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                angular_cropperjs__WEBPACK_IMPORTED_MODULE_18__["AngularCropperjsModule"]
            ],
            exports: [],
            declarations: [
                _smart_workspace_component__WEBPACK_IMPORTED_MODULE_14__["SmartWorkspaceComponent"],
                _smart_workspace_toolbar_smart_workspace_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["SmartWorkspaceToolbarComponent"],
                _smart_workspace_table_of_content_smart_workspace_table_of_content_component__WEBPACK_IMPORTED_MODULE_12__["SmartWorkspaceTableOfContentComponent"],
                _task_progress_state_task_progress_state_component__WEBPACK_IMPORTED_MODULE_16__["TaskProgressStateComponent"],
                _table_of_content_select_line_table_of_content_select_line_component__WEBPACK_IMPORTED_MODULE_15__["TableOfContentSelectLineComponent"],
                _info_snippet_list_info_snippet_list_component__WEBPACK_IMPORTED_MODULE_5__["InfoSnippetListComponent"],
                _new_content_template_popup_new_content_template_popup_component__WEBPACK_IMPORTED_MODULE_6__["NewContentTemplatePopupComponent"],
                _generate_report_popup_generate_report_popup_component__WEBPACK_IMPORTED_MODULE_4__["GenerateReportPopupComponent"],
                _cropper_popup_cropper_popup_component__WEBPACK_IMPORTED_MODULE_17__["CropperPopupComponent"]
            ],
            providers: [
                _services_draw_io_scripts_service__WEBPACK_IMPORTED_MODULE_8__["DrawIOScriptService"],
                _core_services_messages_smart_workspace_message_service__WEBPACK_IMPORTED_MODULE_1__["SmartWorkspaceMessageService"],
                _services_html_table_theme_service__WEBPACK_IMPORTED_MODULE_10__["HtmlTableThemeService"],
                _services_froala_extension_service__WEBPACK_IMPORTED_MODULE_9__["FroalaExtensionService"],
                _services_draw_io_extension_service__WEBPACK_IMPORTED_MODULE_7__["DrawIOExtensionService"]
            ]
        })
    ], SmartWorkspaceModule);
    return SmartWorkspaceModule;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-line\" [ngClass]=\"{'is-selected': selected}\">\r\n    <div class=\"top-circle\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n.select-line {\n  display: block;\n  height: calc(100% - 2px - 14px - 6px);\n  margin: 14px 0 0 -14px;\n  position: absolute;\n  top: 1px;\n  left: 27px;\n  width: 2px; }\n.select-line::before {\n    background: #000;\n    bottom: 14px;\n    content: '';\n    display: block;\n    height: 100%;\n    opacity: 0;\n    position: absolute;\n    top: 6px;\n    -webkit-transform: scale(1, 0);\n            transform: scale(1, 0);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    width: 2px;\n    will-change: transform; }\n.select-line.is-selected::before {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    transition: opacity 200ms linear, -webkit-transform 150ms cubic-bezier(0.25, -0.1, 0, 1);\n    transition: opacity 200ms linear, transform 150ms cubic-bezier(0.25, -0.1, 0, 1);\n    transition: opacity 200ms linear, transform 150ms cubic-bezier(0.25, -0.1, 0, 1), -webkit-transform 150ms cubic-bezier(0.25, -0.1, 0, 1); }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: TableOfContentSelectLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContentSelectLineComponent", function() { return TableOfContentSelectLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_decorators_when_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/decorators/when-empty */ "./src/app/core/decorators/when-empty/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableOfContentSelectLineComponent = /** @class */ (function () {
    function TableOfContentSelectLineComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_core_decorators_when_empty__WEBPACK_IMPORTED_MODULE_1__["WhenEmpty"])(false),
        __metadata("design:type", Boolean)
    ], TableOfContentSelectLineComponent.prototype, "selected", void 0);
    TableOfContentSelectLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-table-of-content-select-line',
            template: __webpack_require__(/*! ./table-of-content-select-line.component.html */ "./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.html"),
            styles: [__webpack_require__(/*! ./table-of-content-select-line.component.scss */ "./src/app/project/smart-workspace/table-of-content-select-line/table-of-content-select-line.component.scss")]
        })
    ], TableOfContentSelectLineComponent);
    return TableOfContentSelectLineComponent;
}());



/***/ }),

/***/ "./src/app/project/smart-workspace/task-progress-state/task-progress-state.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/task-progress-state/task-progress-state.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n:host {\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #fefefe;\n  flex: 0 0 auto;\n  display: block;\n  height: 14px;\n  position: relative;\n  width: 14px; }\n:host(.-size-medium) {\n  height: 20px;\n  width: 20px; }\n"

/***/ }),

/***/ "./src/app/project/smart-workspace/task-progress-state/task-progress-state.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/project/smart-workspace/task-progress-state/task-progress-state.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TaskProgressStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskProgressStateComponent", function() { return TaskProgressStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_decorators_when_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/when-empty */ "./src/app/core/decorators/when-empty/index.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/dist/es5/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskProgressStateComponent = /** @class */ (function () {
    function TaskProgressStateComponent(_route) {
        this._route = _route;
        this.class = "-size-" + this.size;
    }
    Object.defineProperty(TaskProgressStateComponent.prototype, "backgroundColor", {
        get: function () {
            // TODO: refactor -> infinity loop
            // currently don't know a better way to update backgroundcolor
            if (!this._state) {
                return '#fff';
            }
            return this._state.color;
        },
        enumerable: true,
        configurable: true
    });
    TaskProgressStateComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this._route.data.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (data) {
            var defaultState = data.states.find(function (x) { return x.isDefault; });
            var state;
            if (_this.stateId) {
                state = data.states.find(function (x) { return x.id == _this.stateId; });
            }
            if (!state) {
                state = defaultState;
            }
            _this._state = state;
        });
    };
    TaskProgressStateComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TaskProgressStateComponent.prototype, "stateId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_core_decorators_when_empty__WEBPACK_IMPORTED_MODULE_2__["WhenEmpty"])('normal'),
        __metadata("design:type", String)
    ], TaskProgressStateComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], TaskProgressStateComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.background-color'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TaskProgressStateComponent.prototype, "backgroundColor", null);
    TaskProgressStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-task-progress-state',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./task-progress-state.component.scss */ "./src/app/project/smart-workspace/task-progress-state/task-progress-state.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["TakeUntilDestroy"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TaskProgressStateComponent);
    return TaskProgressStateComponent;
}());



/***/ }),

/***/ "./src/assets/configs/drawIoFileList.json":
/*!************************************************!*\
  !*** ./src/assets/configs/drawIoFileList.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, default */
/***/ (function(module) {

module.exports = [{"file":"assets/drawio/js/diagramly/Init.js"},{"file":"assets/drawio/js/mxgraph/Init.js"},{"file":"assets/drawio/javascript/src/js/mxClient.js"},{"file":"assets/drawio/javascript/src/js/util/mxLog.js"},{"file":"assets/drawio/javascript/src/js/util/mxObjectIdentity.js"},{"file":"assets/drawio/javascript/src/js/util/mxDictionary.js"},{"file":"assets/drawio/javascript/src/js/util/mxResources.js"},{"file":"assets/drawio/javascript/src/js/util/mxPoint.js"},{"file":"assets/drawio/javascript/src/js/util/mxRectangle.js"},{"file":"assets/drawio/javascript/src/js/util/mxEffects.js"},{"file":"assets/drawio/javascript/src/js/util/mxUtils.js"},{"file":"assets/drawio/javascript/src/js/util/mxConstants.js"},{"file":"assets/drawio/javascript/src/js/util/mxEventObject.js"},{"file":"assets/drawio/javascript/src/js/util/mxMouseEvent.js"},{"file":"assets/drawio/javascript/src/js/util/mxEventSource.js"},{"file":"assets/drawio/javascript/src/js/util/mxEvent.js"},{"file":"assets/drawio/javascript/src/js/util/mxXmlRequest.js"},{"file":"assets/drawio/javascript/src/js/util/mxClipboard.js"},{"file":"assets/drawio/javascript/src/js/util/mxWindow.js"},{"file":"assets/drawio/javascript/src/js/util/mxForm.js"},{"file":"assets/drawio/javascript/src/js/util/mxImage.js"},{"file":"assets/drawio/javascript/src/js/util/mxDivResizer.js"},{"file":"assets/drawio/javascript/src/js/util/mxDragSource.js"},{"file":"assets/drawio/javascript/src/js/util/mxToolbar.js"},{"file":"assets/drawio/javascript/src/js/util/mxUndoableEdit.js"},{"file":"assets/drawio/javascript/src/js/util/mxUndoManager.js"},{"file":"assets/drawio/javascript/src/js/util/mxUrlConverter.js"},{"file":"assets/drawio/javascript/src/js/util/mxPanningManager.js"},{"file":"assets/drawio/javascript/src/js/util/mxPopupMenu.js"},{"file":"assets/drawio/javascript/src/js/util/mxAutoSaveManager.js"},{"file":"assets/drawio/javascript/src/js/util/mxAnimation.js"},{"file":"assets/drawio/javascript/src/js/util/mxMorphing.js"},{"file":"assets/drawio/javascript/src/js/util/mxImageBundle.js"},{"file":"assets/drawio/javascript/src/js/util/mxImageExport.js"},{"file":"assets/drawio/javascript/src/js/util/mxAbstractCanvas2D.js"},{"file":"assets/drawio/javascript/src/js/util/mxXmlCanvas2D.js"},{"file":"assets/drawio/javascript/src/js/util/mxSvgCanvas2D.js"},{"file":"assets/drawio/javascript/src/js/util/mxVmlCanvas2D.js"},{"file":"assets/drawio/javascript/src/js/util/mxGuide.js"},{"file":"assets/drawio/javascript/src/js/shape/mxStencil.js"},{"file":"assets/drawio/javascript/src/js/shape/mxShape.js"},{"file":"assets/drawio/javascript/src/js/shape/mxStencilRegistry.js"},{"file":"assets/drawio/javascript/src/js/shape/mxMarker.js"},{"file":"assets/drawio/javascript/src/js/shape/mxActor.js"},{"file":"assets/drawio/javascript/src/js/shape/mxCloud.js"},{"file":"assets/drawio/javascript/src/js/shape/mxRectangleShape.js"},{"file":"assets/drawio/javascript/src/js/shape/mxEllipse.js"},{"file":"assets/drawio/javascript/src/js/shape/mxDoubleEllipse.js"},{"file":"assets/drawio/javascript/src/js/shape/mxRhombus.js"},{"file":"assets/drawio/javascript/src/js/shape/mxPolyline.js"},{"file":"assets/drawio/javascript/src/js/shape/mxArrow.js"},{"file":"assets/drawio/javascript/src/js/shape/mxArrowConnector.js"},{"file":"assets/drawio/javascript/src/js/shape/mxText.js"},{"file":"assets/drawio/javascript/src/js/shape/mxTriangle.js"},{"file":"assets/drawio/javascript/src/js/shape/mxHexagon.js"},{"file":"assets/drawio/javascript/src/js/shape/mxLine.js"},{"file":"assets/drawio/javascript/src/js/shape/mxImageShape.js"},{"file":"assets/drawio/javascript/src/js/shape/mxLabel.js"},{"file":"assets/drawio/javascript/src/js/shape/mxCylinder.js"},{"file":"assets/drawio/javascript/src/js/shape/mxConnector.js"},{"file":"assets/drawio/javascript/src/js/shape/mxSwimlane.js"},{"file":"assets/drawio/javascript/src/js/layout/mxGraphLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxStackLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxPartitionLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxCompactTreeLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxRadialTreeLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxFastOrganicLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxCircleLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxParallelEdgeLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxCompositeLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/mxEdgeLabelLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/model/mxGraphAbstractHierarchyCell.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/model/mxGraphHierarchyNode.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/model/mxGraphHierarchyEdge.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/model/mxGraphHierarchyModel.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/model/mxSwimlaneModel.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/stage/mxHierarchicalLayoutStage.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/stage/mxMedianHybridCrossingReduction.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/stage/mxMinimumCycleRemover.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/stage/mxCoordinateAssignment.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/stage/mxSwimlaneOrdering.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/mxHierarchicalLayout.js"},{"file":"assets/drawio/javascript/src/js/layout/hierarchical/mxSwimlaneLayout.js"},{"file":"assets/drawio/javascript/src/js/model/mxGraphModel.js"},{"file":"assets/drawio/javascript/src/js/model/mxCell.js"},{"file":"assets/drawio/javascript/src/js/model/mxGeometry.js"},{"file":"assets/drawio/javascript/src/js/model/mxCellPath.js"},{"file":"assets/drawio/javascript/src/js/view/mxPerimeter.js"},{"file":"assets/drawio/javascript/src/js/view/mxPrintPreview.js"},{"file":"assets/drawio/javascript/src/js/view/mxStylesheet.js"},{"file":"assets/drawio/javascript/src/js/view/mxCellState.js"},{"file":"assets/drawio/javascript/src/js/view/mxGraphSelectionModel.js"},{"file":"assets/drawio/javascript/src/js/view/mxCellEditor.js"},{"file":"assets/drawio/javascript/src/js/view/mxCellRenderer.js"},{"file":"assets/drawio/javascript/src/js/view/mxEdgeStyle.js"},{"file":"assets/drawio/javascript/src/js/view/mxStyleRegistry.js"},{"file":"assets/drawio/javascript/src/js/view/mxGraphView.js"},{"file":"assets/drawio/javascript/src/js/view/mxGraph.js"},{"file":"assets/drawio/javascript/src/js/view/mxCellOverlay.js"},{"file":"assets/drawio/javascript/src/js/view/mxOutline.js"},{"file":"assets/drawio/javascript/src/js/view/mxMultiplicity.js"},{"file":"assets/drawio/javascript/src/js/view/mxLayoutManager.js"},{"file":"assets/drawio/javascript/src/js/view/mxSwimlaneManager.js"},{"file":"assets/drawio/javascript/src/js/view/mxTemporaryCellStates.js"},{"file":"assets/drawio/javascript/src/js/view/mxCellStatePreview.js"},{"file":"assets/drawio/javascript/src/js/view/mxConnectionConstraint.js"},{"file":"assets/drawio/javascript/src/js/handler/mxGraphHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxPanningHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxPopupMenuHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxCellMarker.js"},{"file":"assets/drawio/javascript/src/js/handler/mxSelectionCellsHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxConnectionHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxConstraintHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxRubberband.js"},{"file":"assets/drawio/javascript/src/js/handler/mxHandle.js"},{"file":"assets/drawio/javascript/src/js/handler/mxVertexHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxEdgeHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxElbowEdgeHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxEdgeSegmentHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxKeyHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxTooltipHandler.js"},{"file":"assets/drawio/javascript/src/js/handler/mxCellTracker.js"},{"file":"assets/drawio/javascript/src/js/handler/mxCellHighlight.js"},{"file":"assets/drawio/javascript/src/js/editor/mxDefaultKeyHandler.js"},{"file":"assets/drawio/javascript/src/js/editor/mxDefaultPopupMenu.js"},{"file":"assets/drawio/javascript/src/js/editor/mxDefaultToolbar.js"},{"file":"assets/drawio/javascript/src/js/editor/mxEditor.js"},{"file":"assets/drawio/javascript/src/js/io/mxCodecRegistry.js"},{"file":"assets/drawio/javascript/src/js/io/mxCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxObjectCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxCellCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxModelCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxRootChangeCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxChildChangeCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxTerminalChangeCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxGenericChangeCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxGraphCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxGraphViewCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxStylesheetCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxDefaultKeyHandlerCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxDefaultToolbarCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxDefaultPopupMenuCodec.js"},{"file":"assets/drawio/javascript/src/js/io/mxEditorCodec.js"},{"file":"assets/drawio/js/spin/spin.min.js"},{"file":"assets/drawio/js/deflate/pako.min.js"},{"file":"assets/drawio/js/deflate/base64.js"},{"file":"assets/drawio/js/jscolor/jscolor.js"},{"file":"assets/drawio/js/sanitizer/sanitizer.min.js"},{"file":"assets/drawio/js/mxgraph/Editor.js"},{"file":"assets/drawio/js/mxgraph/EditorUi.js"},{"file":"assets/drawio/js/mxgraph/Sidebar.js"},{"file":"assets/drawio/js/mxgraph/Graph.js"},{"file":"assets/drawio/js/mxgraph/Format.js"},{"file":"assets/drawio/js/mxgraph/Shapes.js"},{"file":"assets/drawio/js/mxgraph/Actions.js"},{"file":"assets/drawio/js/mxgraph/Menus.js"},{"file":"assets/drawio/js/mxgraph/Toolbar.js"},{"file":"assets/drawio/js/mxgraph/Dialogs.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Advanced.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Android.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-ArchiMate.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-ArchiMate3.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Arrows2.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Atlassian.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-AWS.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-AWS3.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-AWS3D.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Azure.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Basic.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Bootstrap.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-BPMN.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Cabinet.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-CiscoSafe.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Citrix.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-EIP.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Electrical.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-ER.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Floorplan.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Flowchart.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-GCP.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Gmdl.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-IBM.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Ios.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Ios7.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-LeanMapping.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Mockup.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-MSCAE.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Network.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Office.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-PID.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Rack.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Sitemap.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Sysml.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-Veeam.js"},{"file":"assets/drawio/js/diagramly/sidebar/Sidebar-WebIcons.js"},{"file":"assets/drawio/js/diagramly/util/mxJsCanvas.js"},{"file":"assets/drawio/js/diagramly/util/mxAsyncCanvas.js"},{"file":"assets/drawio/js/diagramly/DrawioFile.js"},{"file":"assets/drawio/js/diagramly/LocalFile.js"},{"file":"assets/drawio/js/diagramly/LocalLibrary.js"},{"file":"assets/drawio/js/diagramly/StorageFile.js"},{"file":"assets/drawio/js/diagramly/StorageLibrary.js"},{"file":"assets/drawio/js/diagramly/Dialogs.js"},{"file":"assets/drawio/js/diagramly/Editor.js"},{"file":"assets/drawio/js/diagramly/EditorUi.js"},{"file":"assets/drawio/js/diagramly/Settings.js"},{"file":"assets/drawio/js/diagramly/DrawioClient.js"},{"file":"assets/drawio/js/diagramly/DrawioUser.js"},{"file":"assets/drawio/js/diagramly/UrlLibrary.js"},{"file":"assets/drawio/js/diagramly/DriveRealtime.js"},{"file":"assets/drawio/js/diagramly/RealtimeMapping.js"},{"file":"assets/drawio/js/diagramly/DriveFile.js"},{"file":"assets/drawio/js/diagramly/DriveLibrary.js"},{"file":"assets/drawio/js/diagramly/ChatWindow.js"},{"file":"assets/drawio/js/diagramly/App.js"},{"file":"assets/drawio/js/diagramly/Menus.js"},{"file":"assets/drawio/js/diagramly/Pages.js"},{"file":"assets/drawio/js/diagramly/Trees.js"},{"file":"assets/drawio/js/diagramly/DevTools.js"},{"file":"assets/drawio/js/diagramly/vsdx/VsdxExport.js"},{"file":"assets/drawio/js/diagramly/vsdx/mxVsdxCanvas2D.js"},{"file":"assets/drawio/js/diagramly/vsdx/bmpDecoder.js"},{"file":"assets/drawio/js/diagramly/vsdx/importer.js"},{"file":"assets/drawio/js/jszip/jszip.min.js"},{"file":"assets/drawio/js/diagramly/ruler/mxRuler.js"},{"file":"assets/drawio/js/diagramly/graphml/mxGraphMlCodec.js"}];

/***/ })

}]);
//# sourceMappingURL=default~app-project-smart-workspace-smart-workspace-module~home-home-module~project-project-module.js.map