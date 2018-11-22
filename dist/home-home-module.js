(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: homeRoutes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutes", function() { return homeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_project_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project/project-routing.module */ "./src/app/project/project-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var homeRoutes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(homeRoutes), _project_project_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectRoutingModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kosmos-project-list> </kosmos-project-list>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Usage example:\r\n\t.container {\r\n\t\tdisplay: flex;\r\n\t\tflex: 1;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: -20px;\r\n\t}\r\n\r\n\t.item {\r\n\t\t@include flex-grid(4, 20px);\r\n\r\n\t\tdisplay: flex;\r\n\t\tflex: 0 0 auto;\r\n\t}\r\n */\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/* This file is generated using yarn generate:colours\r\n* If you need to update this file please update app/sandbox/material-styleguide/colours.const.ts\r\n*\r\n* Color names (choose whichever more accurately describes colour):\r\n* http://chir.ag/projects/name-that-color/\r\n* http://www.color-blindness.com/color-name-hue/\r\n*/\n[font-size-h1] {\n  font-size: 30px; }\n[font-size-h2] {\n  font-size: 23px; }\n[font-size-h3] {\n  font-size: 18px; }\n[font-size-h4] {\n  font-size: 16px; }\n[font-size-h5] {\n  font-size: 14px; }\n[font-size-small] {\n  font-size: 12px; }\n[font-size-body] {\n  font-size: 14px; }\n/**\r\n * DO NOT ADD MORE LEVELS\r\n *\r\n * The reason is simple: to keep the design consistency across the app.\r\n * If for some reason you find a design with a size that doesn't match\r\n * one of these list, please pick the near value but do not add more levels.\r\n */\n/**\r\n * Depth scale / z-index\r\n */\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button {\n  background-color: #282c37;\n  color: #f5f7fa; }\n.dx-popup-normal .dx-toolbar.dx-popup-bottom .dx-toolbar-button .dx-button.dx-state-hover {\n    background-color: #333846; }\n_:-ms-fullscreen.kpmg-table,\n:root table.kpmg-table {\n  width: calc(100% - 1px) !important; }\n_:-ms-lang(x).kpmg-table,\n_:-webkit-full-screen.kpmg-table,\ntable.kpmg-table {\n  width: calc(100% - 1px) !important; }\ntable.addAnalysis {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.addAnalysis th,\n  table.addAnalysis td {\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.addAnalysis th {\n    background-color: transparent;\n    font-family: 'Arial';\n    font-size: 12px;\n    text-align: left;\n    font-weight: bold;\n    color: #00338d !important; }\ntable.kpmg-table {\n  border-color: transparent;\n  border-spacing: 0;\n  border-collapse: collapse; }\ntable.kpmg-table th,\n  table.kpmg-table td {\n    border-width: 1px;\n    border-style: solid;\n    border-collapse: collapse;\n    line-height: 1.35715;\n    padding: 5px; }\ntable.kpmg-table th {\n    color: #fff !important;\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table th > h1,\n    table.kpmg-table th h2,\n    table.kpmg-table th h3,\n    table.kpmg-table th p,\n    table.kpmg-table th blockquote {\n      color: #fff !important; }\ntable.kpmg-table th.fr-selected-cell,\n  table.kpmg-table td.fr-selected-cell {\n    border-color: #ed5565 !important;\n    border-width: 1px !important;\n    border-style: double !important; }\ntable.kpmg-table .cell-padding-medium {\n    padding-left: 15px;\n    padding-right: 15px; }\ntable.kpmg-table .cell-padding-large {\n    padding-left: 25px;\n    padding-right: 25px; }\ntable.kpmg-table.default th, table.kpmg-table.kpmg-blue th {\n    background-color: #00338d;\n    text-align: left; }\ntable.kpmg-table.default th,\n  table.kpmg-table.default td, table.kpmg-table.kpmg-blue th,\n  table.kpmg-table.kpmg-blue td {\n    border-color: #00338d; }\ntable.kpmg-table.kpmg-medium-blue th {\n    background-color: #005eb8;\n    text-align: left; }\ntable.kpmg-table.kpmg-medium-blue th,\n  table.kpmg-table.kpmg-medium-blue td {\n    border-color: #005eb8; }\ntable.kpmg-table.kpmg-light-blue th {\n    background-color: #0091da;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-blue th,\n  table.kpmg-table.kpmg-light-blue td {\n    border-color: #0091da; }\ntable.kpmg-table.kpmg-violet th {\n    background-color: #483698;\n    text-align: left; }\ntable.kpmg-table.kpmg-violet th,\n  table.kpmg-table.kpmg-violet td {\n    border-color: #483698; }\ntable.kpmg-table.kpmg-purple th {\n    background-color: #470a68;\n    text-align: left; }\ntable.kpmg-table.kpmg-purple th,\n  table.kpmg-table.kpmg-purple td {\n    border-color: #470a68; }\ntable.kpmg-table.kpmg-light-purple th {\n    background-color: #6d2077;\n    text-align: left; }\ntable.kpmg-table.kpmg-light-purple th,\n  table.kpmg-table.kpmg-light-purple td {\n    border-color: #6d2077; }\ntable.kpmg-table.kpmg-green th {\n    background-color: #00a3a1;\n    text-align: left; }\ntable.kpmg-table.kpmg-green th,\n  table.kpmg-table.kpmg-green td {\n    border-color: #00a3a1; }\ntable.kpmg-table.kpmg-green-haze th {\n    background-color: #009a44;\n    text-align: left; }\ntable.kpmg-table.kpmg-green-haze th,\n  table.kpmg-table.kpmg-green-haze td {\n    border-color: #009a44; }\ntable.kpmg-table.kpmg-apple th {\n    background-color: #43b02a;\n    text-align: left; }\ntable.kpmg-table.kpmg-apple th,\n  table.kpmg-table.kpmg-apple td {\n    border-color: #43b02a; }\ntable.kpmg-table.kpmg-web-orange th {\n    background-color: #eaaa00;\n    text-align: left; }\ntable.kpmg-table.kpmg-web-orange th,\n  table.kpmg-table.kpmg-web-orange td {\n    border-color: #eaaa00; }\ntable.kpmg-table.kpmg-sea-buckthorn th {\n    background-color: #f68d2e;\n    text-align: left; }\ntable.kpmg-table.kpmg-sea-buckthorn th,\n  table.kpmg-table.kpmg-sea-buckthorn td {\n    border-color: #f68d2e; }\ntable.kpmg-table.kpmg-maroon-flush th {\n    background-color: #bc204b;\n    text-align: left; }\ntable.kpmg-table.kpmg-maroon-flush th,\n  table.kpmg-table.kpmg-maroon-flush td {\n    border-color: #bc204b; }\ntable.kpmg-table.kpmg-lipstick th {\n    background-color: #c6007e;\n    text-align: left; }\ntable.kpmg-table.kpmg-lipstick th,\n  table.kpmg-table.kpmg-lipstick td {\n    border-color: #c6007e; }\ntable.kpmg-table.kpmg-alto th {\n    background-color: #d9d9d9;\n    text-align: left; }\ntable.kpmg-table.kpmg-alto th,\n  table.kpmg-table.kpmg-alto td {\n    border-color: #d9d9d9; }\ntable.kpmg-table.kpmg-walnut th {\n    background-color: #753f19;\n    text-align: left; }\ntable.kpmg-table.kpmg-walnut th,\n  table.kpmg-table.kpmg-walnut td {\n    border-color: #753f19; }\ntable.kpmg-table.kpmg-paarl th {\n    background-color: #9b642e;\n    text-align: left; }\ntable.kpmg-table.kpmg-paarl th,\n  table.kpmg-table.kpmg-paarl td {\n    border-color: #9b642e; }\ntable.kpmg-table.kpmg-gurkha th {\n    background-color: #909375;\n    text-align: left; }\ntable.kpmg-table.kpmg-gurkha th,\n  table.kpmg-table.kpmg-gurkha td {\n    border-color: #909375; }\ntable.kpmg-table.kpmg-carissma th {\n    background-color: #e38c9f;\n    text-align: left; }\ntable.kpmg-table.kpmg-carissma th,\n  table.kpmg-table.kpmg-carissma td {\n    border-color: #e38c9f; }\ntable.kpmg-table.kpmg-sunglo th {\n    background-color: #e36877;\n    text-align: left; }\ntable.kpmg-table.kpmg-sunglo th,\n  table.kpmg-table.kpmg-sunglo td {\n    border-color: #e36877; }\n.disabled,\n:disabled,\n:disabled:focus {\n  cursor: default;\n  background-color: #ececec !important;\n  -webkit-touch-callout: none !important;\n  /* iOS Safari */\n  -webkit-user-select: none !important;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none !important;\n  /* Firefox */\n  -ms-user-select: none !important;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  outline-style: none;\n  /*IE*/\n  pointer-events: none;\n  cursor: not-allowed; }\n.hide {\n  display: none; }\n:host {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative; }\nh1 {\n  font-weight: bold;\n  flex-shrink: 0;\n  display: flex;\n  margin: 20px 0 20px 20px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/app.const */ "./src/app/core/app.const.ts");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/ui/notify */ "./node_modules/devextreme/ui/notify.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var error = this._route.snapshot.queryParamMap.get('error');
        if (error == _core_app_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_ERROR"].ACCESS_FORBIDDEN) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
                message: 'Access forbidden',
                type: 'error',
                displayTime: 3000,
                closeOnClick: true
            });
            this._router.navigate(['/']);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project/project.module */ "./src/app/project/project.module.ts");
/* harmony import */ var _project_smart_workspace_smart_workspace_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project/smart-workspace/smart-workspace.module */ "./src/app/project/smart-workspace/smart-workspace.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ProjectSharedModule } from 'app/project/project-shared.module';





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_3__["ProjectModule"], _project_smart_workspace_smart_workspace_module__WEBPACK_IMPORTED_MODULE_4__["SmartWorkspaceModule"]],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map