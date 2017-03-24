webpackJsonp([0],{

/***/ 830:
/* exports provided: AboutModule */
/* all exports used */
/*!*******************************************!*\
  !*** ./angular/app/about/about.module.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(/*! @angular/common */ 70);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_routes__ = __webpack_require__(/*! ./about.routes */ 832);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_component__ = __webpack_require__(/*! ./components/about.component */ 831);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AboutModule\", function() { return AboutModule; });\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\n\r\n\r\nvar AboutModule = (function () {\r\n    function AboutModule() {\r\n    }\r\n    return AboutModule;\r\n}());\r\nAboutModule = __decorate([\r\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"a\" /* NgModule */])({\r\n        imports: [\r\n            __WEBPACK_IMPORTED_MODULE_1__angular_common__[\"a\" /* CommonModule */],\r\n            __WEBPACK_IMPORTED_MODULE_2__about_routes__[\"a\" /* AboutRoutes */]\r\n        ],\r\n        declarations: [\r\n            __WEBPACK_IMPORTED_MODULE_3__components_about_component__[\"a\" /* AboutComponent */]\r\n        ],\r\n    })\r\n], AboutModule);\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYW5ndWxhci9hcHAvYWJvdXQvYWJvdXQubW9kdWxlLnRzPzJjYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFib3V0Um91dGVzIH0gZnJvbSAnLi9hYm91dC5yb3V0ZXMnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQWJvdXRSb3V0ZXNcbiAgICBdLFxuXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFib3V0Q29tcG9uZW50XG4gICAgXSxcblxufSlcblxuZXhwb3J0IGNsYXNzIEFib3V0TW9kdWxlIHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL34vdHNsaW50LWxvYWRlciEuL2FuZ3VsYXIvYXBwL2Fib3V0L2Fib3V0Lm1vZHVsZS50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 831:
/* exports provided: AboutComponent */
/* exports used: AboutComponent */
/*!*********************************************************!*\
  !*** ./angular/app/about/components/about.component.ts ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 0);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AboutComponent; });\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\nvar AboutComponent = (function () {\r\n    function AboutComponent() {\r\n        this.message = 'Hello from AboutComponent constructor';\r\n    }\r\n    return AboutComponent;\r\n}());\r\nAboutComponent = __decorate([\r\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"b\" /* Component */])({\r\n        selector: 'about-component',\r\n        template: __webpack_require__(/*! ./about.component.html */ 833)\r\n    }),\r\n    __metadata(\"design:paramtypes\", [])\r\n], AboutComponent);\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYW5ndWxhci9hcHAvYWJvdXQvY29tcG9uZW50cy9hYm91dC5jb21wb25lbnQudHM/ZjdjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhYm91dC1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Fib3V0LmNvbXBvbmVudC5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdIZWxsbyBmcm9tIEFib3V0Q29tcG9uZW50IGNvbnN0cnVjdG9yJztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9+L3RzbGludC1sb2FkZXIhLi9hbmd1bGFyL2FwcC9hYm91dC9jb21wb25lbnRzL2Fib3V0LmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 832:
/* exports provided: AboutRoutes */
/* exports used: AboutRoutes */
/*!*******************************************!*\
  !*** ./angular/app/about/about.routes.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(/*! @angular/router */ 187);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_component__ = __webpack_require__(/*! ./components/about.component */ 831);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AboutRoutes; });\n\r\n\r\nvar routes = [\r\n    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_about_component__[\"a\" /* AboutComponent */] }\r\n];\r\nvar AboutRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__[\"a\" /* RouterModule */].forChild(routes);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYW5ndWxhci9hcHAvYWJvdXQvYWJvdXQucm91dGVzLnRzP2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hYm91dC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH1cbl07XG5cbmV4cG9ydCBjb25zdCBBYm91dFJvdXRlcyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL34vdHNsaW50LWxvYWRlciEuL2FuZ3VsYXIvYXBwL2Fib3V0L2Fib3V0LnJvdXRlcy50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 833:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./angular/app/about/components/about.component.html ***!
  \***********************************************************/
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container-fluid\\\">\\n\\n    <h1>{{message}}</h1>\\n\\n</div>\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYW5ndWxhci9hcHAvYWJvdXQvY29tcG9uZW50cy9hYm91dC5jb21wb25lbnQuaHRtbD9iZTFlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcblxcbiAgICA8aDE+e3ttZXNzYWdlfX08L2gxPlxcblxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hbmd1bGFyL2FwcC9hYm91dC9jb21wb25lbnRzL2Fib3V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

});