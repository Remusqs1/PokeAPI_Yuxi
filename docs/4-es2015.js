(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/Administration/administration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Administration/administration.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _administration_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administration.routing */ "./src/app/Administration/administration.routing.ts");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/shared.module */ "./src/app/Shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let AdministrationModule = class AdministrationModule {
};
AdministrationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _Shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _administration_routing__WEBPACK_IMPORTED_MODULE_4__["ADMINISTRATION_ROUTES"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        declarations: []
    })
], AdministrationModule);



/***/ }),

/***/ "./src/app/Administration/administration.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/Administration/administration.routing.ts ***!
  \**********************************************************/
/*! exports provided: ADMINISTRATION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMINISTRATION_ROUTES", function() { return ADMINISTRATION_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

const AministrationRoutes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./Components/Authentication/authentication.module */ "./src/app/Administration/Components/Authentication/authentication.module.ts")).then(module => module.AuthenticationModule)
    },
    {
        path: 'Authentication',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./Components/Authentication/authentication.module */ "./src/app/Administration/Components/Authentication/authentication.module.ts")).then(module => module.AuthenticationModule)
    }
];
const ADMINISTRATION_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(AministrationRoutes);


/***/ })

}]);
//# sourceMappingURL=4-es2015.js.map