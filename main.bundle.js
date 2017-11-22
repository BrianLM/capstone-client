webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Enotspac';
        this.apiOrigin = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiOrigin;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__auth_auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/auth/changepassword/changepassword.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
        children: [
            {
                path: 'signin',
                component: __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */]
            },
            {
                path: 'changepassword',
                component: __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword_component__["a" /* ChangepasswordComponent */]
            }
        ]
    }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/auth/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */], __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword_component__["a" /* ChangepasswordComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/changepassword/changepassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-container {\n  margin:  auto;\n  width: 50%;\n}\n\n.input-group-addon.success {\n  background-color: rgb(50, 118, 177);\n  border-color: rgb(40, 94, 142);\n  color: rgb(255, 255, 255);\n}\n\n::-webkit-input-placeholder {\n   text-align:right;\n }\n\n .glyphicon {\n     font-size: 50px;\n }\n\n.btn {\n  margin-top: 10px;\n}\n\n.input-group-addon.danger {\n  color: rgb(255, 255, 255);\n  background-color: rgb(217, 83, 79);\n  border-color: rgb(212, 63, 58);\n}\n\nh3, h5 {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"signup-container \">\n\n    <div class=\"input-group input-group-lg\">\n      <span [ngClass]=\"{'danger': auth.pwcError}\" class=\"input-group-addon success\">Current Password</span>\n      <input class=\"form-control\" type=\"text\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n    </div>\n\n    <span class=\"glyphicon glyphicon-triangle-bottom\"></span>\n    <span class=\"glyphicon glyphicon-triangle-bottom\"></span>\n    <span class=\"glyphicon glyphicon-triangle-bottom\"></span>\n\n    <div class=\"input-group input-group-lg\">\n      <span class=\"input-group-addon success\">New Password</span>\n      <input class=\"form-control\" type=\"text\" name=\"password_confirmation\" [(ngModel)]=\"change\" placeholder=\"Confirm Password\" required>\n    </div>\n\n    <input class=\"btn btn-primary btn-lg\" (click)=\"changePassword()\" type=\"submit\" value=\"Change Password\"/>\n\n  </div>\n</form>\n\n<div *ngIf=\"auth.passwordChanged\">\n  <h3>&#9989; Your password was successfully changed &#9989;</h3>\n  <a (click)=\"goHome()\" >Go back to game</a>\n</div>\n\n<div *ngIf=\"auth.pwcError\">\n  <h3>&#10060; Sorry, something went wrong with your request. &#10060;</h3>\n  <h5>&#10060; Check to make sure you entered the correct password. &#10060;</h5>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        if (!this.auth.user) {
            this.router.navigate(['/home']);
        }
        this.auth.passwordChanged = false;
        this.auth.pwcError = false;
    };
    ChangepasswordComponent.prototype.goHome = function () {
        this.router.navigate(['/home']);
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        this.auth.changePassword(this.password, this.change);
    };
    ChangepasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-changepassword',
            template: __webpack_require__("../../../../../src/app/auth/changepassword/changepassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/changepassword/changepassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-container {\n  margin-right: auto;\n  width: 75%;\n}\n\n.input-group-addon.success {\n  background-color: rgb(50, 118, 177);\n  border-color: rgb(40, 94, 142);\n  color: rgb(255, 255, 255);\n}\n\n.signup-container > :first-child > :first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 10px;\n}\n\n.signup-container > :first-child > :last-child {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 10px;\n}\n\n.signup-container > :nth-child(2) > :last-child, :first-child {\n  border-radius: 0;\n}\n\n.si-r {\n  border-right: 6px dashed #b2b2b2;\n}\n\n.input-group-addon.danger {\n  color: rgb(255, 255, 255);\n  background-color: rgb(217, 83, 79);\n  border-color: rgb(212, 63, 58);\n}\n\n.btn {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  width: 100%;\n}\n::-webkit-input-placeholder {\n   text-align:right;\n }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display:         flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.row > [class*='col-'] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6 si-r\">\n    <app-signup></app-signup>\n  </div>\n\n  <div class=\"col-xs-6 si-l\">\n    <form>\n      <div class=\"signup-container\">\n\n        <div class=\"input-group input-group-lg\">\n          <span [ngClass]=\"{'danger': auth.signInError}\" class=\"input-group-addon success\">Email</span>\n          <input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Your email address\" required>\n        </div>\n\n        <div class=\"input-group input-group-lg\">\n          <span [ngClass]=\"{'danger': auth.signInError}\" class=\"input-group-addon success\">Password</span>\n          <input class=\"form-control\" type=\"text\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n        </div>\n\n        <input [ngClass]=\"{'btn-danger': auth.signInError}\" class=\"btn btn-primary btn-lg\" (click)=\"signIn()\" type=\"submit\" value=\"Sign In\"/>\n\n      </div>\n    </form>\n\n  </div>\n</div>\n<div *ngIf=\"auth.signInError\">\n  <h4>Something went wrong, please check your email and password.</h4>\n</div>\n<div *ngIf=\"auth.signUpError\">\n  <h4>Something went wrong. Your email may already be in use or your passwords may not match.</h4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(auth) {
        this.auth = auth;
        this.user = {};
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signIn = function () {
        this.auth.signIn(this.user.email, this.user.password);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-container {\n  margin-left:  auto;\n  width: 75%;\n}\n\n.input-group-addon.success {\n  color: rgb(255, 255, 255);\n  background-color: rgb(50, 118, 177);\n  border-color: rgb(40, 94, 142);\n}\n\n.input-group-addon.danger {\n  color: rgb(255, 255, 255);\n  background-color: rgb(217, 83, 79);\n  border-color: rgb(212, 63, 58);\n}\n\n.signup-container > :first-child > :first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 10px;\n}\n\n.signup-container > :first-child > :last-child {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 10px;\n}\n\n.signup-container > :nth-child(2) > :last-child, :first-child {\n  border-radius: 0;\n}\n\n.signup-container > :nth-child(3) > :last-child, :first-child {\n  border-radius: 0;\n}\n\n.btn {\n  width: 100%;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n::-webkit-input-placeholder {\n   text-align:right;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"signup-container \">\n\n    <div class=\"input-group input-group-lg\">\n      <span [ngClass]=\"{'danger': auth.signUpError}\" class=\"input-group-addon success\">Email</span>\n      <input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\" placeholder=\"Your email address\" required>\n    </div>\n\n    <div class=\"input-group input-group-lg\">\n      <span [ngClass]=\"{'danger': auth.signUpError}\" class=\"input-group-addon success\">Password</span>\n      <input class=\"form-control\" type=\"text\" name=\"password\" [(ngModel)]=\"newUser.password\" placeholder=\"Password\" required>\n    </div>\n\n    <div class=\"input-group input-group-lg\">\n      <span [ngClass]=\"{'danger': auth.signUpError}\" class=\"input-group-addon success\">Confirm</span>\n      <input class=\"form-control\" type=\"text\" name=\"password_confirmation\" [(ngModel)]=\"newUser.password_confirmation\" placeholder=\"Confirm Password\" required>\n    </div>\n\n    <input [ngClass]=\"{'btn-danger': auth.signUpError}\" class=\"btn btn-primary btn-lg\" (click)=\"signUp()\" type=\"submit\" value=\"Sign Up\"/>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(auth) {
        this.auth = auth;
        this.newUser = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        this.auth.signUp(this.newUser.email, this.newUser.password, this.newUser.password_confirmation);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  border-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#siteNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <span class=\"navbar-brand\"><a routerLink=\"/home\">Enotspac</a></span>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"siteNavbar\">\n      <ul class=\"nav navbar-nav\">\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"auth.user == null\"><a routerLink=\"/auth/signin\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n\n        <li *ngIf=\"auth.user\" class=\"dropdown\" dropdown>\n          <a dropdownToggle role=\"button\">{{auth.user.email}} <span class=\"caret\"></span></a>\n          <ul *dropdownMenu class=\"dropdown-menu\">\n            <li><a routerLink=\"/auth/changepassword\">Change Password</a></li>\n            <li><a (click)=\"signOut()\">Sign Out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.pwcError = false;
        this.signUpError = false;
        this.signInError = false;
        this.passwordChanged = false;
    }
    AuthService.prototype.getUserToken = function () {
        return this.user.token;
    };
    AuthService.prototype.signIn = function (email, password) {
        var _this = this;
        // Create the credentials object.
        var credentials = {
            'credentials': {
                'email': email,
                'password': password
            }
        };
        // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
        this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiOrigin + '/sign-in', credentials)
            .subscribe(
        // Save the response to user
        function (response) {
            _this.user = JSON.parse(response['_body']).user;
            _this.signInError = false;
            _this.router.navigate(['/home']);
        }, function (err) { return _this.signInError = true; });
    };
    AuthService.prototype.signUp = function (email, password, password_confirmation) {
        var _this = this;
        // Create the credentials object.
        var credentials = {
            'credentials': {
                'email': email,
                'password': password,
                'password_confirmation': password_confirmation
            }
        };
        // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
        this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiOrigin + '/sign-up', credentials)
            .subscribe(function (response) {
            // Send the existing credentials back to the server to log in the new user
            _this.signIn(credentials.credentials.email, credentials.credentials.password);
            _this.signUpError = false;
            _this.router.navigate(['/home']);
        }, function (err) { return _this.signUpError = true; });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        this.http.delete(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiOrigin + '/sign-out/' + this.user.id, config)
            .subscribe(
        // Remove the logged in user.
        function (data) {
            _this.user = null;
            _this.router.navigate(['/home']);
        }, function (err) { return console.log(err); });
    };
    AuthService.prototype.changePassword = function (oldPassword, newPassword) {
        var _this = this;
        // Create the passwords data object to send.
        var passwords = {
            'passwords': {
                'old': oldPassword,
                'new': newPassword
            }
        };
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.getUserToken() };
        // Make the patch request to URL, add the password data and token from Config.
        this.http.patch(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiOrigin + '/change-password/' + this.user.id, passwords, config)
            .subscribe(function (data) {
            _this.passwordChanged = true;
            _this.pwcError = false;
        }, function (err) {
            _this.passwordChanged = false;
            _this.pwcError = true;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiOrigin: 'https://fast-stream-81519.herokuapp.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map