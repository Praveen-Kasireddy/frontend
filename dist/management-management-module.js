(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["management-management-module"],{

/***/ "./src/app/core/enum/process-state-enum.ts":
/*!*************************************************!*\
  !*** ./src/app/core/enum/process-state-enum.ts ***!
  \*************************************************/
/*! exports provided: ProcessStateEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessStateEnum", function() { return ProcessStateEnum; });
var ProcessStateEnum;
(function (ProcessStateEnum) {
    ProcessStateEnum[ProcessStateEnum["STARTED"] = 'Started'] = "STARTED";
    ProcessStateEnum[ProcessStateEnum["FINISHED"] = 'Finished'] = "FINISHED";
    ProcessStateEnum[ProcessStateEnum["FINISHED_WITH_ERRRORS"] = 'FinishedWithErrors'] = "FINISHED_WITH_ERRRORS";
})(ProcessStateEnum || (ProcessStateEnum = {}));


/***/ }),

/***/ "./src/app/management/management-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/management/management-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: managementRoutes, ManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managementRoutes", function() { return managementRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementRoutingModule", function() { return ManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/enum/management-tab.enum */ "./src/app/core/enum/management-tab.enum.ts");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management.component */ "./src/app/management/management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var managementRoutes = [
    {
        path: 'userlist',
        component: _management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"],
        data: { selectedTab: _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__["ManagementTab"].USER_MANAGEMENT }
    },
    {
        path: 'masterdata',
        component: _management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"],
        data: { selectedTab: _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__["ManagementTab"].MASTER_DATA_MANAGEMENT }
    },
    {
        path: '',
        redirectTo: 'userlist'
    }
];
var ManagementRoutingModule = /** @class */ (function () {
    function ManagementRoutingModule() {
    }
    ManagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(managementRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManagementRoutingModule);
    return ManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/management/management.component.html":
/*!******************************************************!*\
  !*** ./src/app/management/management.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kosmos-header i18n-subtitle=\"User Management|List Title for Headerk@@user-management:userlist\" subtitle=\"KPMG Cosmos Management System\"></kosmos-header>\r\n<dx-tabs [dataSource]=\"tabs\" [selectedIndex]=\"selectedTab\" (onItemClick)=\"selectTab($event)\"></dx-tabs>\r\n<div [ngSwitch]=\"selectedTab\">\r\n    <div *ngSwitchCase=\"0\">\r\n        <kosmos-userlist></kosmos-userlist>\r\n    </div>\r\n    <div *ngSwitchCase=\"1\">\r\n        <kosmos-master-data></kosmos-master-data>\r\n    </div>\r\n    <div *ngSwitchDefault></div>\r\n</div>"

/***/ }),

/***/ "./src/app/management/management.component.scss":
/*!******************************************************!*\
  !*** ./src/app/management/management.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/management/management.component.ts":
/*!****************************************************!*\
  !*** ./src/app/management/management.component.ts ***!
  \****************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/enum/management-tab.enum */ "./src/app/core/enum/management-tab.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.tabs = [
            { id: _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__["ManagementTab"].USER_MANAGEMENT, text: 'User Management', icon: '' },
            { id: _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__["ManagementTab"].MASTER_DATA_MANAGEMENT, text: 'Master Data Management', icon: '' }
        ];
        this.selectedTab = 0;
    }
    ManagementComponent.prototype.ngOnInit = function () {
        if (this._route.snapshot.data['selectedTab'] != undefined && this._route.snapshot.data['selectedTab'] != null) {
            this.selectedTab = this._route.snapshot.data['selectedTab'];
        }
        else {
            this.selectTab({ itemIndex: _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__["ManagementTab"].USER_MANAGEMENT });
        }
    };
    ManagementComponent.prototype.selectTab = function (e) {
        if (e.itemIndex == _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__["ManagementTab"].USER_MANAGEMENT) {
            this._router.navigate(['/management/userlist']);
        }
        else if (e.itemIndex == _core_enum_management_tab_enum__WEBPACK_IMPORTED_MODULE_2__["ManagementTab"].MASTER_DATA_MANAGEMENT) {
            this._router.navigate(['/management/masterdata']);
        }
    };
    ManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-management',
            template: __webpack_require__(/*! ./management.component.html */ "./src/app/management/management.component.html"),
            styles: [__webpack_require__(/*! ./management.component.scss */ "./src/app/management/management.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/management/management.module.ts":
/*!*************************************************!*\
  !*** ./src/app/management/management.module.ts ***!
  \*************************************************/
/*! exports provided: ManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_services_master_data_master_data_import_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/master-data/master-data-import.service */ "./src/app/core/services/master-data/master-data-import.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./management-routing.module */ "./src/app/management/management-routing.module.ts");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./management.component */ "./src/app/management/management.component.ts");
/* harmony import */ var _master_data_master_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./master-data/master-data.component */ "./src/app/management/master-data/master-data.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/management/userlist/userlist.component.ts");
/* harmony import */ var _userlist_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userlist/add-user/add-user.component */ "./src/app/management/userlist/add-user/add-user.component.ts");
/* harmony import */ var _userlist_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userlist/edit-user/edit-user.component */ "./src/app/management/userlist/edit-user/edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _management_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManagementRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxSparklineModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTemplateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxAutocompleteModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxSparklineModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxValidationGroupModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxPopupModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTabsModule"]
            ],
            declarations: [_management_component__WEBPACK_IMPORTED_MODULE_7__["ManagementComponent"], _master_data_master_data_component__WEBPACK_IMPORTED_MODULE_8__["MasterDataComponent"], _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_9__["UserlistComponent"], _userlist_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"], _userlist_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"]],
            providers: [_core_services__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _core_services__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"], _core_services_master_data_master_data_import_service__WEBPACK_IMPORTED_MODULE_3__["MasterDataImportService"]]
        })
    ], ManagementModule);
    return ManagementModule;
}());



/***/ }),

/***/ "./src/app/management/master-data/master-data.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/management/master-data/master-data.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"headline\">Master Data Management</h1>\r\n\r\n<div class=\"uploadGroup\">\r\n    <div class=\"form-group\">\r\n        <div class=\"button dx-button\" role=\"button\"><span>Scope Item\r\n                Upload</span>\r\n            <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" />\r\n        </div>\r\n        <div class=\"button dx-button\" role=\"button\"><span>Industries Upload</span>\r\n            <input type=\"file\" id=\"industryFile\" (change)=\"handleIndustries($event.target.files)\" />\r\n        </div>\r\n        <div class=\"loader\" *ngIf=\"isImporting\">\r\n            <kosmos-loading-cube></kosmos-loading-cube>\r\n        </div>\r\n    </div>\r\n</div>\r\n<kosmos-message-box showDoneButton=\"true\" showCloseButton=\"true\"></kosmos-message-box>"

/***/ }),

/***/ "./src/app/management/master-data/master-data.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/management/master-data/master-data.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline {\n  margin: 40px; }\n\n.button {\n  background-color: #282c37;\n  color: #f5f7fa;\n  height: 37px;\n  padding: 10px;\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.button:hover {\n    background-color: #333846; }\n\n.button input#file,\n  .button input#industryFile {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    font-size: 20px;\n    cursor: pointer;\n    filter: alpha(opacity=0); }\n\n.loader {\n  height: 32px;\n  width: 32px;\n  margin: 11px; }\n\n.uploadGroup {\n  margin-left: 40px;\n  margin-right: 40px;\n  padding: 20px;\n  border: 1px solid #282c37;\n  border-radius: 5px; }\n\n.form-group {\n  margin-left: 1px; }\n"

/***/ }),

/***/ "./src/app/management/master-data/master-data.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/management/master-data/master-data.component.ts ***!
  \*****************************************************************/
/*! exports provided: MasterDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDataComponent", function() { return MasterDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enum/process-state-enum */ "./src/app/core/enum/process-state-enum.ts");
/* harmony import */ var _core_services_master_data_master_data_import_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/master-data/master-data-import.service */ "./src/app/core/services/master-data/master-data-import.service.ts");
/* harmony import */ var _shared_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/message-box/message-box.component */ "./src/app/shared/message-box/message-box.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasterDataComponent = /** @class */ (function () {
    function MasterDataComponent(_masterDataImportService) {
        this._masterDataImportService = _masterDataImportService;
        this.fileToUpload = null;
    }
    MasterDataComponent.prototype.ngOnInit = function () {
        this.isImporting = false;
    };
    MasterDataComponent.prototype.ngOnDestroy = function () {
        if (this._intervalId) {
            clearInterval(this._intervalId);
        }
    };
    MasterDataComponent.prototype.uploadScopeItems = function () {
        this.subscribeAndHandleResult(this._masterDataImportService.postFile(this.fileToUpload));
    };
    MasterDataComponent.prototype.checkImportResult = function () {
        var _this = this;
        this._masterDataImportService.checkResult().subscribe(function (result) {
            if (result == undefined || result == null || result.state == _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__["ProcessStateEnum"].STARTED) {
                return;
            }
            _this.isImporting = false;
            if (_this._intervalId) {
                clearInterval(_this._intervalId);
            }
            if (result.state == _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__["ProcessStateEnum"].FINISHED) {
                _this.showMessageBox('Success', 'The data was imported successfully.');
            }
            else if (result.state == _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__["ProcessStateEnum"].FINISHED_WITH_ERRRORS) {
                _this.showMessageBox('Error', 'The import file violates the following conventions: ' + result.message);
            }
        });
    };
    MasterDataComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.uploadScopeItems();
    };
    MasterDataComponent.prototype.handleIndustries = function (files) {
        this.subscribeAndHandleResult(this._masterDataImportService.postIndustries(files.item(0)));
    };
    MasterDataComponent.prototype.showMessageBox = function (title, message) {
        this._messageBox.title = title;
        this._messageBox.message = message;
        this._messageBox.show();
    };
    MasterDataComponent.prototype.subscribeAndHandleResult = function (observable) {
        var _this = this;
        observable.subscribe(function (data) {
            _this.isImporting = true;
            _this._intervalId = setInterval(function () {
                _this.checkImportResult();
            }, 10000);
        }, function (error) {
            _this.showMessageBox('Error', 'The import function is currently not available.');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_3__["MessageBoxComponent"]),
        __metadata("design:type", _shared_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_3__["MessageBoxComponent"])
    ], MasterDataComponent.prototype, "_messageBox", void 0);
    MasterDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-master-data',
            template: __webpack_require__(/*! ./master-data.component.html */ "./src/app/management/master-data/master-data.component.html"),
            styles: [__webpack_require__(/*! ./master-data.component.scss */ "./src/app/management/master-data/master-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_master_data_master_data_import_service__WEBPACK_IMPORTED_MODULE_2__["MasterDataImportService"]])
    ], MasterDataComponent);
    return MasterDataComponent;
}());



/***/ }),

/***/ "./src/app/management/userlist/add-user/add-user.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/management/userlist/add-user/add-user.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-popup title=\"ADD USER\" height=\"560px\" width=\"680px\" resizeEnabled=\"true\" (onHidden)=\"onHidden()\">\r\n    <div *dxTemplate=\"let data of 'content'\" class=\"popup\">\r\n        <dx-validation-group>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-item\">\r\n                    <label>KPMG GPID</label>\r\n                    <dx-text-box class=\"title\" [(value)]=\"user.gpid\" tabIndex=\"0\">\r\n                        <dx-validator>\r\n                            <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                        </dx-validator>\r\n                    </dx-text-box>\r\n                </div>\r\n            </div>\r\n            <div style=\"clear: both;\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Salutation</label>\r\n                        <dx-text-box class=\"title\" [(value)]=\"user.salutation\" tabIndex=\"10\">\r\n                        </dx-text-box>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"clear: both;\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>First Name</label>\r\n                        <dx-text-box class=\"title\" [(value)]=\"user.firstName\" tabIndex=\"20\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-text-box>\r\n                    </div>\r\n                    <div class=\"form-item\">\r\n                        <label>Email</label>\r\n                        <dx-text-box class=\"email\" [(value)]=\"user.email\" tabIndex=\"40\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                                <dxi-validation-rule type=\"email\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-text-box>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Last Name</label>\r\n                        <dx-text-box class=\"title\" [(value)]=\"user.lastName\" tabIndex=\"30\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-text-box>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"clear: both;\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Is Active</label>\r\n                        <dx-check-box [(value)]=\"user.isActive\" tabIndex=\"50\"></dx-check-box>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Is Admin</label>\r\n                        <dx-check-box [(value)]=\"user.isAdmin\" tabIndex=\"60\"></dx-check-box>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </dx-validation-group>\r\n    </div>\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" tabIndex=\"70\" [options]=\"{\r\n        text: 'Done',\r\n        onClick: validateAndSubmitForm\r\n   }\">\r\n    </dxi-toolbar-item>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/management/userlist/add-user/add-user.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/management/userlist/add-user/add-user.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  display: block;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  float: left;\n  margin-left: 0; }\n  .form-group .form-item {\n    flex: 0 1 auto;\n    max-width: none;\n    padding-right: 20px;\n    width: 319px; }\n"

/***/ }),

/***/ "./src/app/management/userlist/add-user/add-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/management/userlist/add-user/add-user.component.ts ***!
  \********************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models/user */ "./src/app/core/models/user.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
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



var AddUserComponent = /** @class */ (function (_super) {
    __extends(AddUserComponent, _super);
    function AddUserComponent() {
        var _this = _super.call(this) || this;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setNewUser();
    };
    AddUserComponent.prototype.submitForm = function () {
        this.done.emit(this.user);
    };
    AddUserComponent.prototype.onHidden = function () {
        this.setNewUser();
    };
    AddUserComponent.prototype.setNewUser = function () {
        this.user = new _core_models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.isActive = true;
        this.user.isAdmin = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddUserComponent.prototype, "done", void 0);
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/management/userlist/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.scss */ "./src/app/management/userlist/add-user/add-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddUserComponent);
    return AddUserComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_2__["ValidatedPopupComponent"]));



/***/ }),

/***/ "./src/app/management/userlist/edit-user/edit-user.component.html":
/*!************************************************************************!*\
  !*** ./src/app/management/userlist/edit-user/edit-user.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-popup title=\"EDIT USER\" height=\"560px\" width=\"680px\" resizeEnabled=\"true\">\r\n    <div *dxTemplate=\"let data of 'content'\" class=\"popup\">\r\n        <dx-validation-group>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-item\">\r\n                    <label>KPMG GPID</label>\r\n                    <dx-text-box class=\"title\" [(value)]=\"user.gpid\"></dx-text-box>\r\n                </div>\r\n            </div>\r\n            <div style=\"clear: both;\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Salutation</label>\r\n                        <dx-text-box class=\"title\" [(value)]=\"user.salutation\">\r\n                        </dx-text-box>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"clear: both;\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>First Name</label>\r\n                        <dx-text-box class=\"title\" [(value)]=\"user.firstName\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-text-box>\r\n                    </div>\r\n                    <div class=\"form-item\" width=\"440px\">\r\n                        <label>Email</label>\r\n                        <dx-text-box class=\"email\" [(value)]=\"user.email\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                                <dxi-validation-rule type=\"email\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-text-box>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Last Name</label>\r\n                        <dx-text-box class=\"title\" [(value)]=\"user.lastName\">\r\n                            <dx-validator>\r\n                                <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n                            </dx-validator>\r\n                        </dx-text-box>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"clear: both;\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Is Active</label>\r\n                        <dx-check-box [(value)]=\"user.isActive\"></dx-check-box>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-item\">\r\n                        <label>Is Admin</label>\r\n                        <dx-check-box [(value)]=\"user.isAdmin\"></dx-check-box>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </dx-validation-group>\r\n    </div>\r\n    <dxi-toolbar-item widget=\"dxButton\" location=\"after\" toolbar=\"bottom\" [options]=\"{\r\n        text: 'Done',\r\n        onClick: validateAndSubmitForm\r\n   }\">\r\n    </dxi-toolbar-item>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/management/userlist/edit-user/edit-user.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/management/userlist/edit-user/edit-user.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  display: block;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  float: left;\n  margin-left: 0; }\n  .form-group .form-item {\n    flex: 0 1 auto;\n    max-width: none;\n    padding-right: 20px;\n    width: 319px; }\n"

/***/ }),

/***/ "./src/app/management/userlist/edit-user/edit-user.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/management/userlist/edit-user/edit-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models/user */ "./src/app/core/models/user.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
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



var EditUserComponent = /** @class */ (function (_super) {
    __extends(EditUserComponent, _super);
    function EditUserComponent() {
        var _this = _super.call(this) || this;
        _this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(EditUserComponent.prototype, "selectedUser", {
        set: function (value) {
            this.user = value;
        },
        enumerable: true,
        configurable: true
    });
    EditUserComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    EditUserComponent.prototype.submitForm = function () {
        this.done.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _core_models_user__WEBPACK_IMPORTED_MODULE_1__["User"]),
        __metadata("design:paramtypes", [_core_models_user__WEBPACK_IMPORTED_MODULE_1__["User"]])
    ], EditUserComponent.prototype, "selectedUser", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditUserComponent.prototype, "done", void 0);
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/management/userlist/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/management/userlist/edit-user/edit-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditUserComponent);
    return EditUserComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_2__["ValidatedPopupComponent"]));



/***/ }),

/***/ "./src/app/management/userlist/userlist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/management/userlist/userlist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\r\n<!-- Attension! Using the div-container with classes content and content-inner creates problems in IE. But they are necessary for scrolling.-->\r\n<!-- <div class=\"content\"> -->\r\n<!--  <div class=\"content-inner\"> -->\r\n<h1 class=\"headline\">User Management</h1>\r\n<div class=\"buttons\">\r\n    <dx-button text=\"Add new user\" [visible]=\"currentUser?.isAdmin\" (onClick)=\"addUser()\" style=\"margin-left: 40px; margin-bottom: 20px; width: 250px;\"></dx-button>\r\n    <div class=\"button dx-button\" *ngIf=\"currentUser?.isAdmin\" role=\"button\">\r\n        <span>Import users</span>\r\n        <input type=\"file\" id=\"userFile\" (change)=\"importUsers($event.target.files)\" />\r\n    </div>\r\n    <div class=\"loader\" *ngIf=\"isImporting\">\r\n        <kosmos-loading-cube></kosmos-loading-cube>\r\n    </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainer\" class=\"grid-component\" [dataSource]=\"users\" keyExpr=\"gpid\" [hoverStateEnabled]=\"true\"\r\n    [showBorders]=\"true\">\r\n\r\n    <dxo-header-filter [visible]=\"showHeaderFilter\"></dxo-header-filter>\r\n    <dxo-search-panel [visible]=\"true\" [width]=\"240\" placeholder=\"Search...\"></dxo-search-panel>\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n    <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n    <dxo-selection mode=\"single\"></dxo-selection>\r\n    <!-- dxo-pager can't be used because right now the page is not scrollable. -->\r\n    <dxo-pager [showPageSizeSelector]=\"false\" [allowedPageSizes]=\"[5, 10, 20]\" [showInfo]=\"true\"></dxo-pager>\r\n    <dxi-column dataField=\"salutation\">\r\n        <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n    </dxi-column>\r\n    <dxi-column dataField=\"lastName\" sortOrder=\"asc\" sortIndex=\"0\">\r\n        <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n    </dxi-column>\r\n    <dxi-column dataField=\"firstName\" sortOrder=\"asc\" sortIndex=\"1\">\r\n        <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n    </dxi-column>\r\n    <dxi-column dataField=\"email\">\r\n        <dxi-validation-rule type=\"required\"></dxi-validation-rule>\r\n        <dxi-validation-rule type=\"email\"></dxi-validation-rule>\r\n    </dxi-column>\r\n    <dxi-column [visible]=\"currentUser?.isAdmin\" dataField=\"isActive\"></dxi-column>\r\n    <dxi-column [visible]=\"currentUser?.isAdmin\" dataField=\"isAdmin\"></dxi-column>\r\n    <dxi-column dataField=\"isAllowCreateProject\" [visible]=\"false\"></dxi-column>\r\n    <dxi-column [visible]=\"currentUser?.isAdmin\" name=\"command-editing\" [allowFiltering]=\"false\" [allowSorting]=\"false\"\r\n        cellTemplate=\"cellTemplate\">\r\n        <div *dxTemplate=\"let data of 'cellTemplate'\" style=\"text-align: center;\">\r\n            <a class=\"dx-link dx-link-edit\" (click)=\"editUser(data, $event)\">Edit</a>\r\n            <!-- <a class=\"dx-link dx-link-edit\" (click)=\"deleteUser(data, $event)\">Delete</a> -->\r\n        </div>\r\n    </dxi-column>\r\n</dx-data-grid>\r\n\r\n<kosmos-add-user (done)=\"addDoneHandler($event)\"></kosmos-add-user>\r\n<kosmos-edit-user [selectedUser]=\"editSelectedUser\" (done)=\"editDoneHandler($event)\"></kosmos-edit-user>\r\n<kosmos-message-box showDoneButton=\"true\" showCloseButton=\"true\"></kosmos-message-box>\r\n<!-- </div> -->\r\n<!-- </div> -->\r\n<!-- </div> -->\r\n\r\n<dx-toast message=\"The user with given KPMG GPID already exists!\" [(visible)]=\"showExistsMessage\" type=\"Error\"\r\n    i18n-message=\"toastMessage|toastMessage@@userlist:editError:toast-message\"></dx-toast>\r\n<dx-toast message=\"User successfully added\" [(visible)]=\"showSuccessMessage\" type=\"Success\" i18n-message=\"toastMessage|toastMessage@@userlist:editSuccess:toast-message\"></dx-toast>"

/***/ }),

/***/ "./src/app/management/userlist/userlist.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/management/userlist/userlist.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  margin-left: 20px;\n  margin-bottom: 20px;\n  padding: 7px 18px 8px;\n  position: relative;\n  width: 250px; }\n  .button input#userFile {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    font-size: 20px;\n    cursor: pointer;\n    filter: alpha(opacity=0); }\n  .buttons {\n  display: flex; }\n  .headline {\n  margin: 40px; }\n  .grid-component {\n  padding: 15px;\n  background-color: white; }\n  .loader {\n  height: 32px;\n  width: 32px;\n  margin: 11px; }\n"

/***/ }),

/***/ "./src/app/management/userlist/userlist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/management/userlist/userlist.component.ts ***!
  \***********************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enum/process-state-enum */ "./src/app/core/enum/process-state-enum.ts");
/* harmony import */ var _core_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models/user */ "./src/app/core/models/user.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _shared_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/message-box/message-box.component */ "./src/app/shared/message-box/message-box.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/management/userlist/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/management/userlist/edit-user/edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(_userService, localStorageService, _masterDataImportService) {
        this._userService = _userService;
        this.localStorageService = localStorageService;
        this._masterDataImportService = _masterDataImportService;
        this.isEditing = false;
        this.showExistsMessage = false;
        this.showSuccessMessage = false;
        this.oldUser = null;
        this.currentUser = this.localStorageService.get('currentUser');
    }
    UserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (users) {
            _this.users = users;
            _this.showHeaderFilter = true;
        }, function (error) { });
        this.addUserPopup.closeEvent.subscribe(function () { return _this.addUserPopup.hide(); });
        this.editUserPopup.closeEvent.subscribe(function () { return _this.editUserPopup.hide(); });
        this.editSelectedUser = new _core_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    /**
     * open a popup to add a user
     */
    UserlistComponent.prototype.addUser = function () {
        this.addUserPopup.show();
    };
    /**
     * open popup to edit a user
     * @param event
     */
    UserlistComponent.prototype.editUser = function (event) {
        this.editUserPopup.show();
        this.editSelectedUser = Object.create(event.data);
    };
    /**
     * Add a user on done-click
     * @param user
     */
    UserlistComponent.prototype.addDoneHandler = function (user) {
        var _this = this;
        this._userService.postUser(user).subscribe(function () {
            _this._userService.getUsers().subscribe(function (users) {
                _this.users = users;
                _this.showHeaderFilter = true;
            }, function (error) { });
            _this.dataGrid.instance.refresh();
            _this.showSuccessMessage = true;
        }, function () {
            _this.showExistsMessage = true;
        });
    };
    /**
     * Edit a user on done-click
     * @param user
     */
    UserlistComponent.prototype.editDoneHandler = function (user) {
        var _this = this;
        this.editSelectedUser = user;
        this._userService.editUser(this.editSelectedUser).subscribe(function () {
            _this.reloadUsers();
        }, function () {
            _this.showExistsMessage = true;
        });
    };
    UserlistComponent.prototype.importUsers = function (files) {
        if (files.length > 0) {
            this.subscribeAndHandleResult(this._masterDataImportService.postUsers(files.item(0)));
        }
    };
    UserlistComponent.prototype.processResult = function (result) {
        var _this = this;
        if (!result) {
            this.showExistsMessage = true;
            if (this.oldUser != null) {
                var userindex = this.users.findIndex(function (x) { return x.gpid == _this.oldUser.gpid; });
                this.users[userindex] = this.oldUser;
                this.oldUser = null;
            }
        }
    };
    UserlistComponent.prototype.checkImportResult = function () {
        var _this = this;
        this._masterDataImportService.checkResult().subscribe(function (result) {
            if (result == undefined || result == null || result.state == _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__["ProcessStateEnum"].STARTED) {
                return;
            }
            _this.isImporting = false;
            if (_this._intervalId) {
                clearInterval(_this._intervalId);
            }
            if (result.state == _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__["ProcessStateEnum"].FINISHED) {
                _this.showMessageBox('Success', 'The data was imported successfully.');
            }
            else if (result.state == _core_enum_process_state_enum__WEBPACK_IMPORTED_MODULE_1__["ProcessStateEnum"].FINISHED_WITH_ERRRORS) {
                _this.showMessageBox('Error', 'The import file violates the following conventions: ' + result.message);
            }
            _this.resetUserFile();
            _this.reloadUsers();
        });
    };
    UserlistComponent.prototype.reloadUsers = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (users) {
            _this.users = users;
            _this.showHeaderFilter = true;
            _this.dataGrid.instance.refresh();
        }, function (error) { });
    };
    UserlistComponent.prototype.resetUserFile = function () {
        document.getElementById('userFile').value = '';
    };
    UserlistComponent.prototype.showMessageBox = function (title, message) {
        this._messageBox.title = title;
        this._messageBox.message = message;
        this._messageBox.show();
    };
    UserlistComponent.prototype.subscribeAndHandleResult = function (observable) {
        var _this = this;
        observable.subscribe(function (data) {
            _this.isImporting = true;
            _this._intervalId = setInterval(function () {
                _this.checkImportResult();
            }, 10000);
        }, function (error) {
            _this.showMessageBox('Error', 'The import function is currently not available.');
            _this.resetUserFile();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"]),
        __metadata("design:type", _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"])
    ], UserlistComponent.prototype, "editUserPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"]),
        __metadata("design:type", _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"])
    ], UserlistComponent.prototype, "addUserPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"])
    ], UserlistComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_5__["MessageBoxComponent"]),
        __metadata("design:type", _shared_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_5__["MessageBoxComponent"])
    ], UserlistComponent.prototype, "_messageBox", void 0);
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kosmos-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/management/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.scss */ "./src/app/management/userlist/userlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["MasterDataImportService"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=management-management-module.js.map