function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Management/Components/Details/Components/details.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Management/Components/Details/Components/details.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagementComponentsDetailsComponentsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n\r\n<div class=\"row mt-2 pb-2 d-flex justify-content-center\" *ngIf=\"pokemon !== null && pokemon !== undefined\">\r\n    <div class=\"card-deck pt-2 col-lg-3\">\r\n      <div class=\"card bg-light text-center\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title text-center text-capitalize font-weight-bold\">{{pokemon.name}}</h3>\r\n        </div>\r\n        <img class=\"card-img-top\" src=\"{{pokemon.image}}\" alt=\"Card image\">\r\n        <div class=\"card-body\">\r\n            <p class=\"card-text\">#Id : {{pokemon.id}} </p>\r\n            <p class=\"card-text\">Height : {{pokemon.height}} </p>\r\n            <p class=\"card-text\">Weight : {{pokemon.weight}} </p>\r\n          <p class=\"card-text\" *ngIf=\"pokemon.type !== undefined && pokemon.type.length > 1\">Type : <label for=\"type\"\r\n              class=\"text-capitalize\">{{pokemon.type[0].name}}/{{pokemon.type[1].name}}</label>\r\n          </p>\r\n          <p class=\"card-text\" *ngIf=\"pokemon.type !== undefined && pokemon.type.length === 1\">Type : <label for=\"type\"\r\n              class=\"text-capitalize\">{{pokemon.type[0].name}}</label>\r\n          </p>\r\n\r\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n            Movement list\r\n          </button>\r\n          <div class=\"collapse\" id=\"collapseExample\">\r\n            <ul>\r\n                <li *ngFor=\"let move of pokemon.movList\">\r\n                    {{move.name}}\r\n                </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n\r\n  <h2 class=\"row mt-2 pb-2 d-flex justify-content-center\" *ngIf=\"pokemon === null || pokemon === undefined\">\r\n    No Pokémon Found with that name! Please check the input and try again.\r\n  </h2>";
    /***/
  },

  /***/
  "./src/app/Management/Components/Details/Components/details.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/Management/Components/Details/Components/details.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagementComponentsDetailsComponentsDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\r\n    border: 2px solid black;\r\n}\r\n\r\n.nav-link:hover{\r\n    background-color: rgb(110, 92, 134, 0.548);\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWFuYWdlbWVudC9Db21wb25lbnRzL0RldGFpbHMvQ29tcG9uZW50cy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL01hbmFnZW1lbnQvQ29tcG9uZW50cy9EZXRhaWxzL0NvbXBvbmVudHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDkyLCAxMzQsIDAuNTQ4KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/Management/Components/Details/Components/details.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/Management/Components/Details/Components/details.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppManagementComponentsDetailsComponentsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
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


    var _MethodParameters_pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../MethodParameters/pokemon */
    "./src/app/Management/MethodParameters/pokemon.ts");
    /* harmony import */


    var _Home_Services_pokeService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Home/Services/pokeService.service */
    "./src/app/Management/Components/Home/Services/pokeService.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

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

    var DetailsComponent = /*#__PURE__*/function () {
      function DetailsComponent(activatedRoute, pokeService, routes, toastr) {
        _classCallCheck(this, DetailsComponent);

        this.activatedRoute = activatedRoute;
        this.pokeService = pokeService;
        this.routes = routes;
        this.toastr = toastr;
      }

      _createClass(DetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.pokemon = new _MethodParameters_pokemon__WEBPACK_IMPORTED_MODULE_2__["Pokemon"]();
          this.activatedRoute.queryParamMap.subscribe(function (params) {
            var paramKey = params.get('id');

            if (paramKey !== null && paramKey !== undefined && paramKey !== "") {
              _this.getPokemon(paramKey);
            } else {
              var paramName = params.get('searchValue');

              if (paramName !== null && paramName !== undefined && paramName !== "") {
                _this.getPokemon(paramName);
              } else {
                _this.goLogin();
              }
            }
          });
        }
      }, {
        key: "getPokemon",
        value: function getPokemon(input) {
          var _this2 = this;

          this.pokeService.getPokes(input).subscribe(function (res) {
            console.log(res);
            _this2.pokemon = new _MethodParameters_pokemon__WEBPACK_IMPORTED_MODULE_2__["Pokemon"]();
            _this2.pokemon.id = res.id;
            _this2.pokemon.name = res.name;
            _this2.pokemon.image = res.sprites.front_default;
            _this2.pokemon.height = res.height;
            _this2.pokemon.weight = res.weight;
            _this2.pokemon.type = new Array();
            _this2.pokemon.movList = new Array();
            res.types.forEach(function (pokeType) {
              _this2.pokemon.type.push(pokeType.type);
            });
            res.moves.forEach(function (move) {
              _this2.pokemon.movList.push(move.move);
            });
          }, function (err) {
            console.log(err);
            _this2.pokemon = null;
          });
        }
      }, {
        key: "goLogin",
        value: function goLogin() {
          this.routes.navigate(['']);
        }
      }, {
        key: "goHome",
        value: function goHome() {
          this.routes.navigate(['Home']);
        }
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _Home_Services_pokeService_service__WEBPACK_IMPORTED_MODULE_3__["PokeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    DetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-details',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Management/Components/Details/Components/details.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./details.component.css */
      "./src/app/Management/Components/Details/Components/details.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Home_Services_pokeService_service__WEBPACK_IMPORTED_MODULE_3__["PokeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], DetailsComponent);
    /***/
  },

  /***/
  "./src/app/Management/Components/Details/details.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Management/Components/Details/details.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DetailsModule */

  /***/
  function srcAppManagementComponentsDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsModule", function () {
      return DetailsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Commons_commons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Commons/commons.module */
    "./src/app/Commons/commons.module.ts");
    /* harmony import */


    var _Home_Services_pokeService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Home/Services/pokeService.service */
    "./src/app/Management/Components/Home/Services/pokeService.service.ts");
    /* harmony import */


    var _Components_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/details.component */
    "./src/app/Management/Components/Details/Components/details.component.ts");
    /* harmony import */


    var _details_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./details.routing */
    "./src/app/Management/Components/Details/details.routing.ts");

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

    var DetailsModule = function DetailsModule() {
      _classCallCheck(this, DetailsModule);
    };

    DetailsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _details_routing__WEBPACK_IMPORTED_MODULE_7__["DETAILS_ROUTES"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _Commons_commons_module__WEBPACK_IMPORTED_MODULE_4__["CommonsModule"]],
      declarations: [_Components_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"]],
      exports: [_Components_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"]],
      providers: [_Home_Services_pokeService_service__WEBPACK_IMPORTED_MODULE_5__["PokeService"]]
    })], DetailsModule);
    /***/
  },

  /***/
  "./src/app/Management/Components/Details/details.routing.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Management/Components/Details/details.routing.ts ***!
    \******************************************************************/

  /*! exports provided: DETAILS_ROUTES */

  /***/
  function srcAppManagementComponentsDetailsDetailsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DETAILS_ROUTES", function () {
      return DETAILS_ROUTES;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Components_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Components/details.component */
    "./src/app/Management/Components/Details/Components/details.component.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DetailsRoutes = [{
      path: '',
      data: {
        title: 'route.breadcrumb.management.home.title',
        urls: [{
          title: 'route.breadcrumb.management.home.url',
          url: '/Details'
        }, {
          title: 'route.breadcrumb.management.home.url'
        }]
      },
      component: _Components_details_component__WEBPACK_IMPORTED_MODULE_1__["DetailsComponent"]
    }];

    var DETAILS_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(DetailsRoutes);
    /***/

  }
}]);
//# sourceMappingURL=2-es5.js.map