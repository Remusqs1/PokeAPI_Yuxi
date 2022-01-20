function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
  /***/
  "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js":
  /*!********************************************************!*\
    !*** ./node_modules/ngx-toastr/fesm2015/ngx-toastr.js ***!
    \********************************************************/

  /*! exports provided: BasePortalHost, ComponentPortal, DefaultGlobalConfig, DefaultNoAnimationsGlobalConfig, DefaultNoComponentGlobalConfig, Overlay, OverlayContainer, OverlayRef, TOAST_CONFIG, Toast, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastNoAnimation, ToastNoAnimationModule, ToastPackage, ToastRef, ToastrComponentlessModule, ToastrModule, ToastrService */

  /***/
  function node_modulesNgxToastrFesm2015NgxToastrJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultGlobalConfig", function () {
      return DefaultGlobalConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultNoAnimationsGlobalConfig", function () {
      return DefaultNoAnimationsGlobalConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultNoComponentGlobalConfig", function () {
      return DefaultNoComponentGlobalConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG", function () {
      return TOAST_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return Toast;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function () {
      return ToastContainerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function () {
      return ToastContainerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastInjector", function () {
      return ToastInjector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastNoAnimation", function () {
      return ToastNoAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastNoAnimationModule", function () {
      return ToastNoAnimationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastPackage", function () {
      return ToastPackage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastRef", function () {
      return ToastRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastrComponentlessModule", function () {
      return ToastrComponentlessModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastrModule", function () {
      return ToastrModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastrService", function () {
      return ToastrService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ToastContainerDirective = /*#__PURE__*/function () {
      function ToastContainerDirective(el) {
        _classCallCheck(this, ToastContainerDirective);

        this.el = el;
      }

      _createClass(ToastContainerDirective, [{
        key: "getContainerElement",
        value: function getContainerElement() {
          return this.el.nativeElement;
        }
      }]);

      return ToastContainerDirective;
    }();

    ToastContainerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[toastContainer]',
      exportAs: 'toastContainer'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ToastContainerDirective);

    var ToastContainerModule = function ToastContainerModule() {
      _classCallCheck(this, ToastContainerModule);
    };

    ToastContainerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [ToastContainerDirective],
      exports: [ToastContainerDirective]
    })], ToastContainerModule);
    /**
     * Everything a toast needs to launch
     */

    var ToastPackage = /*#__PURE__*/function () {
      function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        var _this = this;

        _classCallCheck(this, ToastPackage);

        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.toastRef.afterClosed().subscribe(function () {
          _this._onAction.complete();

          _this._onTap.complete();
        });
      }
      /** Fired on click */


      _createClass(ToastPackage, [{
        key: "triggerTap",
        value: function triggerTap() {
          this._onTap.next();

          if (this.config.tapToDismiss) {
            this._onTap.complete();
          }
        }
      }, {
        key: "onTap",
        value: function onTap() {
          return this._onTap.asObservable();
        }
        /** available for use in custom toast */

      }, {
        key: "triggerAction",
        value: function triggerAction(action) {
          this._onAction.next(action);
        }
      }, {
        key: "onAction",
        value: function onAction() {
          return this._onAction.asObservable();
        }
      }]);

      return ToastPackage;
    }();

    var DefaultNoComponentGlobalConfig = {
      maxOpened: 0,
      autoDismiss: false,
      newestOnTop: true,
      preventDuplicates: false,
      countDuplicates: false,
      resetTimeoutOnDuplicate: false,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      // Individual
      closeButton: false,
      disableTimeOut: false,
      timeOut: 5000,
      extendedTimeOut: 1000,
      enableHtml: false,
      progressBar: false,
      toastClass: 'ngx-toastr',
      positionClass: 'toast-top-right',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      easing: 'ease-in',
      easeTime: 300,
      tapToDismiss: true,
      onActivateTick: false,
      progressAnimation: 'decreasing'
    };
    var TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ToastConfig');
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     */

    var ComponentPortal = /*#__PURE__*/function () {
      function ComponentPortal(component, injector) {
        _classCallCheck(this, ComponentPortal);

        this.component = component;
        this.injector = injector;
      }
      /** Attach this portal to a host. */


      _createClass(ComponentPortal, [{
        key: "attach",
        value: function attach(host, newestOnTop) {
          this._attachedHost = host;
          return host.attach(this, newestOnTop);
        }
        /** Detach this portal from its host */

      }, {
        key: "detach",
        value: function detach() {
          var host = this._attachedHost;

          if (host) {
            this._attachedHost = undefined;
            return host.detach();
          }
        }
        /** Whether this portal is attached to a host. */

      }, {
        key: "setAttachedHost",

        /**
         * Sets the PortalHost reference without performing `attach()`. This is used directly by
         * the PortalHost when it is performing an `attach()` or `detach()`.
         */
        value: function setAttachedHost(host) {
          this._attachedHost = host;
        }
      }, {
        key: "isAttached",
        get: function get() {
          return this._attachedHost != null;
        }
      }]);

      return ComponentPortal;
    }();
    /**
     * Partial implementation of PortalHost that only deals with attaching a
     * ComponentPortal
     */


    var BasePortalHost = /*#__PURE__*/function () {
      function BasePortalHost() {
        _classCallCheck(this, BasePortalHost);
      }

      _createClass(BasePortalHost, [{
        key: "attach",
        value: function attach(portal, newestOnTop) {
          this._attachedPortal = portal;
          return this.attachComponentPortal(portal, newestOnTop);
        }
      }, {
        key: "detach",
        value: function detach() {
          if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
          }

          this._attachedPortal = undefined;

          if (this._disposeFn) {
            this._disposeFn();

            this._disposeFn = undefined;
          }
        }
      }, {
        key: "setDisposeFn",
        value: function setDisposeFn(fn) {
          this._disposeFn = fn;
        }
      }]);

      return BasePortalHost;
    }();
    /**
     * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     *
     * This is the only part of the portal core that directly touches the DOM.
     */


    var DomPortalHost = /*#__PURE__*/function (_BasePortalHost) {
      _inherits(DomPortalHost, _BasePortalHost);

      var _super = _createSuper(DomPortalHost);

      function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this2;

        _classCallCheck(this, DomPortalHost);

        _this2 = _super.call(this);
        _this2._hostDomElement = _hostDomElement;
        _this2._componentFactoryResolver = _componentFactoryResolver;
        _this2._appRef = _appRef;
        return _this2;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @param portal Portal to be attached
       */


      _createClass(DomPortalHost, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal, newestOnTop) {
          var _this3 = this;

          var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);

          var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
          // for the component (in terms of Angular's component tree, not rendering).
          // When the ViewContainerRef is missing, we use the factory to create the component directly
          // and then manually attach the ChangeDetector for that component to the application (which
          // happens automatically when using a ViewContainer).

          componentRef = componentFactory.create(portal.injector); // When creating a component outside of a ViewContainer, we need to manually register
          // its ChangeDetector with the application. This API is unfortunately not yet published
          // in Angular core. The change detector must also be deregistered when the component
          // is destroyed to prevent memory leaks.

          this._appRef.attachView(componentRef.hostView);

          this.setDisposeFn(function () {
            _this3._appRef.detachView(componentRef.hostView);

            componentRef.destroy();
          }); // At this point the component has been instantiated, so we move it to the location in the DOM
          // where we want it to be rendered.

          if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
          } else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
          }

          return componentRef;
        }
        /** Gets the root HTMLElement for an instantiated component. */

      }, {
        key: "_getComponentRootNode",
        value: function _getComponentRootNode(componentRef) {
          return componentRef.hostView.rootNodes[0];
        }
      }]);

      return DomPortalHost;
    }(BasePortalHost);
    /** Container inside which all toasts will render. */


    var OverlayContainer = /*#__PURE__*/function () {
      function OverlayContainer(_document) {
        _classCallCheck(this, OverlayContainer);

        this._document = _document;
      }

      _createClass(OverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
          }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @returns the container element
         */

      }, {
        key: "getContainerElement",
        value: function getContainerElement() {
          if (!this._containerElement) {
            this._createContainer();
          }

          return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          var container = this._document.createElement('div');

          container.classList.add('overlay-container');

          this._document.body.appendChild(container);

          this._containerElement = container;
        }
      }]);

      return OverlayContainer;
    }();

    OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({
      factory: function OverlayContainer_Factory() {
        return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
      },
      token: OverlayContainer,
      providedIn: "root"
    });
    OverlayContainer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], OverlayContainer);
    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    var OverlayRef = /*#__PURE__*/function () {
      function OverlayRef(_portalHost) {
        _classCallCheck(this, OverlayRef);

        this._portalHost = _portalHost;
      }

      _createClass(OverlayRef, [{
        key: "attach",
        value: function attach(portal) {
          var newestOnTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this._portalHost.attach(portal, newestOnTop);
        }
        /**
         * Detaches an overlay from a portal.
         * @returns Resolves when the overlay has been detached.
         */

      }, {
        key: "detach",
        value: function detach() {
          return this._portalHost.detach();
        }
      }]);

      return OverlayRef;
    }();
    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
     */


    var Overlay = /*#__PURE__*/function () {
      function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
        _classCallCheck(this, Overlay);

        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._document = _document; // Namespace panes by overlay container

        this._paneElements = new Map();
      }
      /**
       * Creates an overlay.
       * @returns A reference to the created overlay.
       */


      _createClass(Overlay, [{
        key: "create",
        value: function create(positionClass, overlayContainer) {
          // get existing pane if possible
          return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
        }
      }, {
        key: "getPaneElement",
        value: function getPaneElement() {
          var positionClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var overlayContainer = arguments.length > 1 ? arguments[1] : undefined;

          if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
          }

          if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
          }

          return this._paneElements.get(overlayContainer)[positionClass];
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @returns Newly-created pane element
         */

      }, {
        key: "_createPaneElement",
        value: function _createPaneElement(positionClass, overlayContainer) {
          var pane = this._document.createElement('div');

          pane.id = 'toast-container';
          pane.classList.add(positionClass);
          pane.classList.add('toast-container');

          if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
          } else {
            overlayContainer.getContainerElement().appendChild(pane);
          }

          return pane;
        }
        /**
         * Create a DomPortalHost into which the overlay content can be loaded.
         * @param pane The DOM element to turn into a portal host.
         * @returns A portal host for the given DOM element.
         */

      }, {
        key: "_createPortalHost",
        value: function _createPortalHost(pane) {
          return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
        }
        /**
         * Creates an OverlayRef for an overlay in the given DOM element.
         * @param pane DOM element for the overlay
         */

      }, {
        key: "_createOverlayRef",
        value: function _createOverlayRef(pane) {
          return new OverlayRef(this._createPortalHost(pane));
        }
      }]);

      return Overlay;
    }();

    Overlay.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({
      factory: function Overlay_Factory() {
        return new Overlay(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(OverlayContainer), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
      },
      token: Overlay,
      providedIn: "root"
    });
    Overlay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [OverlayContainer, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Object])], Overlay);
    /**
     * Reference to a toast opened via the Toastr service.
     */

    var ToastRef = /*#__PURE__*/function () {
      function ToastRef(_overlayRef) {
        _classCallCheck(this, ToastRef);

        this._overlayRef = _overlayRef;
        /** Count of duplicates of this toast */

        this.duplicatesCount = 0;
        /** Subject for notifying the user that the toast has finished closing. */

        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** triggered when toast is activated */

        this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** notifies the toast that it should close before the timeout */

        this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** notifies the toast that it should reset the timeouts */

        this._resetTimeout = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** notifies the toast that it should count a duplicate toast */

        this._countDuplicate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ToastRef, [{
        key: "manualClose",
        value: function manualClose() {
          this._manualClose.next();

          this._manualClose.complete();
        }
      }, {
        key: "manualClosed",
        value: function manualClosed() {
          return this._manualClose.asObservable();
        }
      }, {
        key: "timeoutReset",
        value: function timeoutReset() {
          return this._resetTimeout.asObservable();
        }
      }, {
        key: "countDuplicate",
        value: function countDuplicate() {
          return this._countDuplicate.asObservable();
        }
        /**
         * Close the toast.
         */

      }, {
        key: "close",
        value: function close() {
          this._overlayRef.detach();

          this._afterClosed.next();

          this._manualClose.next();

          this._afterClosed.complete();

          this._manualClose.complete();

          this._activate.complete();

          this._resetTimeout.complete();

          this._countDuplicate.complete();
        }
        /** Gets an observable that is notified when the toast is finished closing. */

      }, {
        key: "afterClosed",
        value: function afterClosed() {
          return this._afterClosed.asObservable();
        }
      }, {
        key: "isInactive",
        value: function isInactive() {
          return this._activate.isStopped;
        }
      }, {
        key: "activate",
        value: function activate() {
          this._activate.next();

          this._activate.complete();
        }
        /** Gets an observable that is notified when the toast has started opening. */

      }, {
        key: "afterActivate",
        value: function afterActivate() {
          return this._activate.asObservable();
        }
        /** Reset the toast timouts and count duplicates */

      }, {
        key: "onDuplicate",
        value: function onDuplicate(resetTimeout, countDuplicate) {
          if (resetTimeout) {
            this._resetTimeout.next();
          }

          if (countDuplicate) {
            this._countDuplicate.next(++this.duplicatesCount);
          }
        }
      }]);

      return ToastRef;
    }();
    /** Custom injector type specifically for instantiating components with a toast. */


    var ToastInjector = /*#__PURE__*/function () {
      function ToastInjector(_toastPackage, _parentInjector) {
        _classCallCheck(this, ToastInjector);

        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
      }

      _createClass(ToastInjector, [{
        key: "get",
        value: function get(token, notFoundValue, flags) {
          if (token === ToastPackage) {
            return this._toastPackage;
          }

          return this._parentInjector.get(token, notFoundValue, flags);
        }
      }]);

      return ToastInjector;
    }();

    var ToastrService = /*#__PURE__*/function () {
      function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
        _classCallCheck(this, ToastrService);

        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        this.toastrConfig = Object.assign({}, token["default"], token.config);

        if (token.config.iconClasses) {
          this.toastrConfig.iconClasses = Object.assign({}, token["default"].iconClasses, token.config.iconClasses);
        }
      }
      /** show toast */


      _createClass(ToastrService, [{
        key: "show",
        value: function show(message, title) {
          var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          return this._preBuildNotification(type, message, title, this.applyConfig(override));
        }
        /** show successful toast */

      }, {
        key: "success",
        value: function success(message, title) {
          var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var type = this.toastrConfig.iconClasses.success || '';
          return this._preBuildNotification(type, message, title, this.applyConfig(override));
        }
        /** show error toast */

      }, {
        key: "error",
        value: function error(message, title) {
          var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var type = this.toastrConfig.iconClasses.error || '';
          return this._preBuildNotification(type, message, title, this.applyConfig(override));
        }
        /** show info toast */

      }, {
        key: "info",
        value: function info(message, title) {
          var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var type = this.toastrConfig.iconClasses.info || '';
          return this._preBuildNotification(type, message, title, this.applyConfig(override));
        }
        /** show warning toast */

      }, {
        key: "warning",
        value: function warning(message, title) {
          var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var type = this.toastrConfig.iconClasses.warning || '';
          return this._preBuildNotification(type, message, title, this.applyConfig(override));
        }
        /**
         * Remove all or a single toast by id
         */

      }, {
        key: "clear",
        value: function clear(toastId) {
          // Call every toastRef manualClose function
          var _iterator = _createForOfIteratorHelper(this.toasts),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var toast = _step.value;

              if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                  toast.toastRef.manualClose();
                  return;
                }
              } else {
                toast.toastRef.manualClose();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Remove and destroy a single toast by id
         */

      }, {
        key: "remove",
        value: function remove(toastId) {
          var found = this._findToast(toastId);

          if (!found) {
            return false;
          }

          found.activeToast.toastRef.close();
          this.toasts.splice(found.index, 1);
          this.currentlyActive = this.currentlyActive - 1;

          if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
          }

          if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].toastRef;

            if (!p.isInactive()) {
              this.currentlyActive = this.currentlyActive + 1;
              p.activate();
            }
          }

          return true;
        }
        /**
         * Determines if toast message is already shown
         */

      }, {
        key: "findDuplicate",
        value: function findDuplicate(message, resetOnDuplicate, countDuplicates) {
          for (var i = 0; i < this.toasts.length; i++) {
            var toast = this.toasts[i];

            if (toast.message === message) {
              toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
              return toast;
            }
          }

          return null;
        }
        /** create a clone of global config and apply individual settings */

      }, {
        key: "applyConfig",
        value: function applyConfig() {
          var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object.assign({}, this.toastrConfig, override);
        }
        /**
         * Find toast object by id
         */

      }, {
        key: "_findToast",
        value: function _findToast(toastId) {
          for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
              return {
                index: i,
                activeToast: this.toasts[i]
              };
            }
          }

          return null;
        }
        /**
         * Determines the need to run inside angular's zone then builds the toast
         */

      }, {
        key: "_preBuildNotification",
        value: function _preBuildNotification(toastType, message, title, config) {
          var _this4 = this;

          if (config.onActivateTick) {
            return this.ngZone.run(function () {
              return _this4._buildNotification(toastType, message, title, config);
            });
          }

          return this._buildNotification(toastType, message, title, config);
        }
        /**
         * Creates and attaches toast data to component
         * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
         */

      }, {
        key: "_buildNotification",
        value: function _buildNotification(toastType, message, title, config) {
          var _this5 = this;

          if (!config.toastComponent) {
            throw new Error('toastComponent required');
          } // max opened and auto dismiss = true


          var duplicate = this.findDuplicate(message, this.toastrConfig.resetTimeoutOnDuplicate, this.toastrConfig.countDuplicates);

          if (message && this.toastrConfig.preventDuplicates && duplicate !== null) {
            return duplicate;
          }

          this.previousToastMessage = message;
          var keepInactive = false;

          if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;

            if (this.toastrConfig.autoDismiss) {
              this.clear(this.toasts[0].toastId);
            }
          }

          var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
          this.index = this.index + 1;
          var sanitizedMessage = message;

          if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, message);
          }

          var toastRef = new ToastRef(overlayRef);
          var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
          var toastInjector = new ToastInjector(toastPackage, this._injector);
          var component = new ComponentPortal(config.toastComponent, toastInjector);
          var portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
          toastRef.componentInstance = portal._component;
          var ins = {
            toastId: this.index,
            message: message || '',
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal: portal
          };

          if (!keepInactive) {
            setTimeout(function () {
              ins.toastRef.activate();
              _this5.currentlyActive = _this5.currentlyActive + 1;
            });
          }

          this.toasts.push(ins);
          return ins;
        }
      }]);

      return ToastrService;
    }();

    ToastrService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({
      factory: function ToastrService_Factory() {
        return new ToastrService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(TOAST_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(Overlay), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: ToastrService,
      providedIn: "root"
    });
    ToastrService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TOAST_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Overlay, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], ToastrService);

    var Toast = /*#__PURE__*/function () {
      function Toast(toastrService, toastPackage, ngZone) {
        var _this6 = this;

        _classCallCheck(this, Toast);

        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.ngZone = ngZone;
        /** width of progress bar */

        this.width = -1;
        /** a combination of toast type and options.toastClass */

        this.toastClasses = '';
        /** controls animation */

        this.state = {
          value: 'inactive',
          params: {
            easeTime: this.toastPackage.config.easeTime,
            easing: 'ease-in'
          }
        };
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
          _this6.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
          _this6.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
          _this6.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
          _this6.duplicatesCount = count;
        });
      }
      /** hides component when waiting to be displayed */


      _createClass(Toast, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
          this.sub1.unsubscribe();
          this.sub2.unsubscribe();
          this.sub3.unsubscribe();
          clearInterval(this.intervalId);
          clearTimeout(this.timeout);
        }
        /**
         * activates toast and sets timeout
         */

      }, {
        key: "activateToast",
        value: function activateToast() {
          var _this7 = this;

          this.state = Object.assign({}, this.state, {
            value: 'active'
          });

          if (!this.options.disableTimeOut && this.options.timeOut) {
            this.outsideTimeout(function () {
              return _this7.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;

            if (this.options.progressBar) {
              this.outsideInterval(function () {
                return _this7.updateProgress();
              }, 10);
            }
          }
        }
        /**
         * updates progress bar width
         */

      }, {
        key: "updateProgress",
        value: function updateProgress() {
          if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
          }

          var now = new Date().getTime();
          var remaining = this.hideTime - now;
          this.width = remaining / this.options.timeOut * 100;

          if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
          }

          if (this.width <= 0) {
            this.width = 0;
          }

          if (this.width >= 100) {
            this.width = 100;
          }
        }
      }, {
        key: "resetTimeout",
        value: function resetTimeout() {
          var _this8 = this;

          clearTimeout(this.timeout);
          clearInterval(this.intervalId);
          this.state = Object.assign({}, this.state, {
            value: 'active'
          });
          this.outsideTimeout(function () {
            return _this8.remove();
          }, this.originalTimeout);
          this.options.timeOut = this.originalTimeout;
          this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
          this.width = -1;

          if (this.options.progressBar) {
            this.outsideInterval(function () {
              return _this8.updateProgress();
            }, 10);
          }
        }
        /**
         * tells toastrService to remove this toast after animation time
         */

      }, {
        key: "remove",
        value: function remove() {
          var _this9 = this;

          if (this.state.value === 'removed') {
            return;
          }

          clearTimeout(this.timeout);
          this.state = Object.assign({}, this.state, {
            value: 'removed'
          });
          this.outsideTimeout(function () {
            return _this9.toastrService.remove(_this9.toastPackage.toastId);
          }, +this.toastPackage.config.easeTime);
        }
      }, {
        key: "tapToast",
        value: function tapToast() {
          if (this.state.value === 'removed') {
            return;
          }

          this.toastPackage.triggerTap();

          if (this.options.tapToDismiss) {
            this.remove();
          }
        }
      }, {
        key: "stickAround",
        value: function stickAround() {
          if (this.state.value === 'removed') {
            return;
          }

          clearTimeout(this.timeout);
          this.options.timeOut = 0;
          this.hideTime = 0; // disable progressBar

          clearInterval(this.intervalId);
          this.width = 0;
        }
      }, {
        key: "delayedHideToast",
        value: function delayedHideToast() {
          var _this10 = this;

          if (this.options.disableTimeOut || this.options.extendedTimeOut === 0 || this.state.value === 'removed') {
            return;
          }

          this.outsideTimeout(function () {
            return _this10.remove();
          }, this.options.extendedTimeOut);
          this.options.timeOut = this.options.extendedTimeOut;
          this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
          this.width = -1;

          if (this.options.progressBar) {
            this.outsideInterval(function () {
              return _this10.updateProgress();
            }, 10);
          }
        }
      }, {
        key: "outsideTimeout",
        value: function outsideTimeout(func, timeout) {
          var _this11 = this;

          if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
              return _this11.timeout = setTimeout(function () {
                return _this11.runInsideAngular(func);
              }, timeout);
            });
          } else {
            this.timeout = setTimeout(function () {
              return func();
            }, timeout);
          }
        }
      }, {
        key: "outsideInterval",
        value: function outsideInterval(func, timeout) {
          var _this12 = this;

          if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
              return _this12.intervalId = setInterval(function () {
                return _this12.runInsideAngular(func);
              }, timeout);
            });
          } else {
            this.intervalId = setInterval(function () {
              return func();
            }, timeout);
          }
        }
      }, {
        key: "runInsideAngular",
        value: function runInsideAngular(func) {
          if (this.ngZone) {
            this.ngZone.run(function () {
              return func();
            });
          } else {
            func();
          }
        }
      }, {
        key: "displayStyle",
        get: function get() {
          if (this.state.value === 'inactive') {
            return 'none';
          }

          return 'inherit';
        }
      }]);

      return Toast;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Toast.prototype, "toastClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@flyInOut'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Toast.prototype, "state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], Toast.prototype, "displayStyle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], Toast.prototype, "tapToast", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], Toast.prototype, "stickAround", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], Toast.prototype, "delayedHideToast", null);
    Toast = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[toast-component]',
      template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ easeTime }}ms {{ easing }}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ easeTime }}ms {{ easing }}'))])],
      preserveWhitespaces: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ToastrService, ToastPackage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], Toast);
    var ToastrModule_1;
    var DefaultGlobalConfig = Object.assign({}, DefaultNoComponentGlobalConfig, {
      toastComponent: Toast
    });

    var ToastrModule = ToastrModule_1 = /*#__PURE__*/function () {
      function ToastrModule() {
        _classCallCheck(this, ToastrModule);
      }

      _createClass(ToastrModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: ToastrModule_1,
            providers: [{
              provide: TOAST_CONFIG,
              useValue: {
                "default": DefaultGlobalConfig,
                config: config
              }
            }]
          };
        }
      }]);

      return ToastrModule;
    }();

    ToastrModule = ToastrModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
      declarations: [Toast],
      exports: [Toast],
      entryComponents: [Toast]
    })], ToastrModule);

    var ToastrComponentlessModule = /*#__PURE__*/function () {
      function ToastrComponentlessModule() {
        _classCallCheck(this, ToastrComponentlessModule);
      }

      _createClass(ToastrComponentlessModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: ToastrModule,
            providers: [{
              provide: TOAST_CONFIG,
              useValue: {
                "default": DefaultNoComponentGlobalConfig,
                config: config
              }
            }]
          };
        }
      }]);

      return ToastrComponentlessModule;
    }();

    ToastrComponentlessModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]
    })], ToastrComponentlessModule);
    var ToastNoAnimationModule_1;

    var ToastNoAnimation = /*#__PURE__*/function () {
      function ToastNoAnimation(toastrService, toastPackage, appRef) {
        var _this13 = this;

        _classCallCheck(this, ToastNoAnimation);

        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /** width of progress bar */

        this.width = -1;
        /** a combination of toast type and options.toastClass */

        this.toastClasses = '';
        /** controls animation */

        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
          _this13.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
          _this13.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
          _this13.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
          _this13.duplicatesCount = count;
        });
      }
      /** hides component when waiting to be displayed */


      _createClass(ToastNoAnimation, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
          this.sub1.unsubscribe();
          this.sub2.unsubscribe();
          this.sub3.unsubscribe();
          clearInterval(this.intervalId);
          clearTimeout(this.timeout);
        }
        /**
         * activates toast and sets timeout
         */

      }, {
        key: "activateToast",
        value: function activateToast() {
          var _this14 = this;

          this.state = 'active';

          if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(function () {
              _this14.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;

            if (this.options.progressBar) {
              this.intervalId = setInterval(function () {
                return _this14.updateProgress();
              }, 10);
            }
          }

          if (this.options.onActivateTick) {
            this.appRef.tick();
          }
        }
        /**
         * updates progress bar width
         */

      }, {
        key: "updateProgress",
        value: function updateProgress() {
          if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
          }

          var now = new Date().getTime();
          var remaining = this.hideTime - now;
          this.width = remaining / this.options.timeOut * 100;

          if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
          }

          if (this.width <= 0) {
            this.width = 0;
          }

          if (this.width >= 100) {
            this.width = 100;
          }
        }
      }, {
        key: "resetTimeout",
        value: function resetTimeout() {
          var _this15 = this;

          clearTimeout(this.timeout);
          clearInterval(this.intervalId);
          this.state = 'active';
          this.options.timeOut = this.originalTimeout;
          this.timeout = setTimeout(function () {
            return _this15.remove();
          }, this.originalTimeout);
          this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
          this.width = -1;

          if (this.options.progressBar) {
            this.intervalId = setInterval(function () {
              return _this15.updateProgress();
            }, 10);
          }
        }
        /**
         * tells toastrService to remove this toast after animation time
         */

      }, {
        key: "remove",
        value: function remove() {
          var _this16 = this;

          if (this.state === 'removed') {
            return;
          }

          clearTimeout(this.timeout);
          this.state = 'removed';
          this.timeout = setTimeout(function () {
            return _this16.toastrService.remove(_this16.toastPackage.toastId);
          });
        }
      }, {
        key: "tapToast",
        value: function tapToast() {
          if (this.state === 'removed') {
            return;
          }

          this.toastPackage.triggerTap();

          if (this.options.tapToDismiss) {
            this.remove();
          }
        }
      }, {
        key: "stickAround",
        value: function stickAround() {
          if (this.state === 'removed') {
            return;
          }

          clearTimeout(this.timeout);
          this.options.timeOut = 0;
          this.hideTime = 0; // disable progressBar

          clearInterval(this.intervalId);
          this.width = 0;
        }
      }, {
        key: "delayedHideToast",
        value: function delayedHideToast() {
          var _this17 = this;

          if (this.options.disableTimeOut || this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
          }

          this.timeout = setTimeout(function () {
            return _this17.remove();
          }, this.options.extendedTimeOut);
          this.options.timeOut = this.options.extendedTimeOut;
          this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
          this.width = -1;

          if (this.options.progressBar) {
            this.intervalId = setInterval(function () {
              return _this17.updateProgress();
            }, 10);
          }
        }
      }, {
        key: "displayStyle",
        get: function get() {
          if (this.state === 'inactive') {
            return 'none';
          }

          return 'inherit';
        }
      }]);

      return ToastNoAnimation;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ToastNoAnimation.prototype, "toastClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ToastNoAnimation.prototype, "displayStyle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ToastNoAnimation.prototype, "tapToast", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ToastNoAnimation.prototype, "stickAround", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ToastNoAnimation.prototype, "delayedHideToast", null);
    ToastNoAnimation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[toast-component]',
      template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ToastrService, ToastPackage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], ToastNoAnimation);
    var DefaultNoAnimationsGlobalConfig = Object.assign({}, DefaultNoComponentGlobalConfig, {
      toastComponent: ToastNoAnimation
    });

    var ToastNoAnimationModule = ToastNoAnimationModule_1 = /*#__PURE__*/function () {
      function ToastNoAnimationModule() {
        _classCallCheck(this, ToastNoAnimationModule);
      }

      _createClass(ToastNoAnimationModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: ToastNoAnimationModule_1,
            providers: [{
              provide: TOAST_CONFIG,
              useValue: {
                "default": DefaultNoAnimationsGlobalConfig,
                config: config
              }
            }]
          };
        }
      }]);

      return ToastNoAnimationModule;
    }();

    ToastNoAnimationModule = ToastNoAnimationModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
      declarations: [ToastNoAnimation],
      exports: [ToastNoAnimation],
      entryComponents: [ToastNoAnimation]
    })], ToastNoAnimationModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-toastr.js.map

    /***/
  },

  /***/
  "./src/app/Management/management.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/Management/management.module.ts ***!
    \*************************************************/

  /*! exports provided: ManagementModule */

  /***/
  function srcAppManagementManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementModule", function () {
      return ManagementModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Shared/shared.module */
    "./src/app/Shared/shared.module.ts");
    /* harmony import */


    var _management_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./management.routing */
    "./src/app/Management/management.routing.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _Commons_Services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Commons/Services/common.service */
    "./src/app/Commons/Services/common.service.ts");
    /* harmony import */


    var _Commons_commons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Commons/commons.module */
    "./src/app/Commons/commons.module.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ManagementModule = function ManagementModule() {
      _classCallCheck(this, ManagementModule);
    };

    ManagementModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_Shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _management_routing__WEBPACK_IMPORTED_MODULE_4__["MANAGEMENT_ROUTES"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
        positionClass: 'toast-bottom-right'
      })],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _Commons_commons_module__WEBPACK_IMPORTED_MODULE_7__["CommonsModule"]],
      declarations: [],
      providers: [_Commons_Services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], {
        provide: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
        useClass: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }]
    })], ManagementModule);
    /***/
  },

  /***/
  "./src/app/Management/management.routing.ts":
  /*!**************************************************!*\
    !*** ./src/app/Management/management.routing.ts ***!
    \**************************************************/

  /*! exports provided: MANAGEMENT_ROUTES */

  /***/
  function srcAppManagementManagementRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MANAGEMENT_ROUTES", function () {
      return MANAGEMENT_ROUTES;
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

    var ManagementRoutes = [{
      path: 'Home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null,
        /*! ./Components/Home/home.module */
        "./src/app/Management/Components/Home/home.module.ts")).then(function (module) {
          return module.HomeModule;
        });
      }
    }, {
      path: 'Details',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null,
        /*! ./Components/Details/details.module */
        "./src/app/Management/Components/Details/details.module.ts")).then(function (module) {
          return module.DetailsModule;
        });
      }
    }];

    var MANAGEMENT_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ManagementRoutes);
    /***/

  }
}]);
//# sourceMappingURL=3-es5.js.map