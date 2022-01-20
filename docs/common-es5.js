function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Commons/Components/NavBar/navbar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Commons/Components/NavBar/navbar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonsComponentsNavBarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\">PokeAPI Yuxi Global - {{user.usr_userName}} </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" (click)=\"goHome()\">Home</a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\" [formGroup]=\"searchForm\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" id=\"searchPokemon\" formControlName=\"searchPokemon\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"onSearch()\">Search</button>\r\n        </form>\r\n        <form class=\"form-inline my-2 my-lg-0 ml-1\">\r\n            <button class=\"btn btn-outline-danger my-2 my-sm-0\" (click)=\"goLogin()\">Close Session</button>\r\n        </form>\r\n    </div>\r\n  </nav>";
    /***/
  },

  /***/
  "./src/app/Commons/Components/NavBar/navbar.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/Commons/Components/NavBar/navbar.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonsComponentsNavBarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-link:hover{\r\n    background-color: cornflowerblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tbW9ucy9Db21wb25lbnRzL05hdkJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL0NvbW1vbnMvQ29tcG9uZW50cy9OYXZCYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Commons/Components/NavBar/navbar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Commons/Components/NavBar/navbar.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppCommonsComponentsNavBarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Services/common.service */
    "./src/app/Commons/Services/common.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(routes, commonService) {
        _classCallCheck(this, NavBarComponent);

        this.routes = routes;
        this.commonService = commonService;
        this.hasError = false;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var userData = localStorage.getItem("user");

          if (userData === undefined || userData === null || userData === "") {
            this.goLogin();
          } else {
            this.user = JSON.parse(userData);
            console.log(this.user);
          }

          this.searchForm = this.commonService.getSearchForm();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.user.usr_userName === null || this.user.usr_userName === undefined || this.user.usr_userName === "") {
            this.user.usr_userName = this.user.usr_email;
          }
        }
      }, {
        key: "goLogin",
        value: function goLogin() {
          localStorage.clear();
          this.routes.navigate(['']);
        }
      }, {
        key: "goHome",
        value: function goHome() {
          this.routes.navigate(['Home']);
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var searchValue = this.searchForm.get('searchPokemon').value.toLowerCase();
          ;

          if (this.searchForm.get('searchPokemon').value !== undefined && this.searchForm.get('searchPokemon').value !== null && this.searchForm.get('searchPokemon').value !== "") {
            this.routes.navigate(['Details'], {
              queryParams: {
                searchValue: searchValue
              }
            });
          } else {
            this.routes.navigate(['Home']);
          }
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }];
    };

    NavBarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-navbar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Commons/Components/NavBar/navbar.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/Commons/Components/NavBar/navbar.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/Commons/Services/common.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/Commons/Services/common.service.ts ***!
    \****************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppCommonsServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CommonService = /*#__PURE__*/function () {
      function CommonService(formBuilder) {
        _classCallCheck(this, CommonService);

        this.formBuilder = formBuilder;
      }

      _createClass(CommonService, [{
        key: "getSearchForm",
        value: function getSearchForm() {
          return this.formBuilder.group({
            searchPokemon: [{
              value: undefined,
              disabled: false
            }, []]
          });
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    CommonService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], CommonService);
    /***/
  },

  /***/
  "./src/app/Commons/commons.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/Commons/commons.module.ts ***!
    \*******************************************/

  /*! exports provided: CommonsModule */

  /***/
  function srcAppCommonsCommonsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonsModule", function () {
      return CommonsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Shared/shared.module */
    "./src/app/Shared/shared.module.ts");
    /* harmony import */


    var _commons_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./commons.routing */
    "./src/app/Commons/commons.routing.ts");
    /* harmony import */


    var _Components_NavBar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/NavBar/navbar.component */
    "./src/app/Commons/Components/NavBar/navbar.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CommonsModule = function CommonsModule() {
      _classCallCheck(this, CommonsModule);
    };

    CommonsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _commons_routing__WEBPACK_IMPORTED_MODULE_5__["COMMONS_ROUTES"]],
      declarations: [_Components_NavBar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"]],
      exports: [_Components_NavBar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"]],
      providers: []
    })], CommonsModule);
    /***/
  },

  /***/
  "./src/app/Commons/commons.routing.ts":
  /*!********************************************!*\
    !*** ./src/app/Commons/commons.routing.ts ***!
    \********************************************/

  /*! exports provided: COMMONS_ROUTES */

  /***/
  function srcAppCommonsCommonsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMONS_ROUTES", function () {
      return COMMONS_ROUTES;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SharedRoutes = [];

    var COMMONS_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(SharedRoutes);
    /***/

  },

  /***/
  "./src/app/Management/Components/Home/Services/pokeService.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Management/Components/Home/Services/pokeService.service.ts ***!
    \****************************************************************************/

  /*! exports provided: PokeService */

  /***/
  function srcAppManagementComponentsHomeServicesPokeServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokeService", function () {
      return PokeService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PokeService = /*#__PURE__*/function () {
      function PokeService(http) {
        _classCallCheck(this, PokeService);

        this.http = http;
        this.pokeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pokeApiURl;
      }

      _createClass(PokeService, [{
        key: "getPokes",
        value: function getPokes(index) {
          return this.http.get("".concat(this.pokeUrl, "/pokemon/").concat(index));
        }
      }, {
        key: "getPoke",
        value: function getPoke() {
          return this.http.get("".concat(this.pokeUrl, "/pokemon"));
        }
      }]);

      return PokeService;
    }();

    PokeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }];
    };

    PokeService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], PokeService);
    /***/
  },

  /***/
  "./src/app/Management/MethodParameters/pokemon.ts":
  /*!********************************************************!*\
    !*** ./src/app/Management/MethodParameters/pokemon.ts ***!
    \********************************************************/

  /*! exports provided: Pokemon */

  /***/
  function srcAppManagementMethodParametersPokemonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pokemon", function () {
      return Pokemon;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Pokemon = function Pokemon() {
      _classCallCheck(this, Pokemon);
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map