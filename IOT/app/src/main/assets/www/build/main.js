webpackJsonp([16],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Welcome = (function () {
    function Welcome(navCtrl, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.homeName = {};
        this.userName = "admin";
        this.rootPage = 'Welcome';
        this.items = [
            {
                title: '报销管理',
                page: 'ReimbursementPage'
            },
            {
                title: '借款管理',
                page: 'BorrowManagePage',
                message: '您有四个待办借款',
            },
            {
                title: '通讯录',
                page: 'ContactsPage'
            },
            {
                title: '设置',
                page: 'SettingPage'
            }
        ];
    }
    Welcome.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    Welcome.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('userName').then(function (val) {
            _this.temp_userName = val;
            if (_this.temp_userName) {
                _this.http.get('positiondetailuser/v1/userName/userinfo', { userName: _this.temp_userName }, 'may', 'HOME')
                    .then(function (res) {
                    if (res.code == 0) {
                        _this.homeName = res.data;
                    }
                });
            }
        });
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push('LoginPage');
    };
    return Welcome;
}());
Welcome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\welcome\welcome.html"*/'<!-- <ion-header>\n\n        <ion-navbar color="energy">\n\n        </ion-navbar>\n\n      </ion-header> -->\n\n<ion-content id="welcome">\n\n    <div id="home-bg"></div>\n\n    <div id="content">\n\n        <div id="profile-info">\n\n            <img id="avatar-img" src="assets/imgs/usertitle.png">\n\n            <h2 id="person-name">{{homeName.userName}} <ion-icon name="my-avatar" color="energy" id="person"></ion-icon></h2>\n\n            <p id="profile-text">{{homeName.empNumer}} <span>{{homeName.hierarchyName}}</span></p>\n\n        </div>\n\n        <ion-list inset>\n\n            <ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n                {{ item.title }}\n\n                <span item-right class="news-color">{{ item.message }}</span>\n\n                <ion-icon name="my-arrow-right" md="md-my-arrow-right" color="energy" clear item-right></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button round block color="danger" class="esc-button" (click)="signup()">退出当前账号</button>\n\n    </div>\n\n    \n\n<!-- <button ion-button block class="marginTop" (click)="signup()">Signup</button>\n\n<button ion-button block color="lightprimary" (click)="login()">Login</button> -->\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], Welcome);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/borrowmanage/applyborrowmoney/applyborrowmoney.module": [
		337,
		13
	],
	"../pages/borrowmanage/audit-reason/audit-reason.module": [
		338,
		12
	],
	"../pages/borrowmanage/borrow-auditopinon/borrow-auditopinon.module": [
		339,
		11
	],
	"../pages/borrowmanage/borrow-detail/borrow-detail.module": [
		336,
		10
	],
	"../pages/borrowmanage/borrow-return/borrow-return.module": [
		340,
		9
	],
	"../pages/borrowmanage/borrow-send/borrow-send.module": [
		341,
		8
	],
	"../pages/borrowmanage/borrowmanage.module": [
		335,
		7
	],
	"../pages/borrowmanage/check-return/check-return.module": [
		342,
		6
	],
	"../pages/borrowmanage/city/city.module": [
		343,
		5
	],
	"../pages/borrowmanage/payment/payment.module": [
		344,
		4
	],
	"../pages/contacts/business-address/business-address.module": [
		178
	],
	"../pages/contacts/business-address/business-other/business-other.module": [
		345,
		3
	],
	"../pages/contacts/contacts.module": [
		173
	],
	"../pages/contacts/external-address/external-address.module": [
		177
	],
	"../pages/contacts/external-address/external-other/external-other.module": [
		346,
		2
	],
	"../pages/contacts/internal-address/internal-address.module": [
		175
	],
	"../pages/login/login.module": [
		162
	],
	"../pages/number/number.module": [
		347,
		1
	],
	"../pages/reimbursement/applyreimbursement/applyreimbursement.module": [
		334,
		0
	],
	"../pages/reimbursement/mailing/mailing.module": [
		166
	],
	"../pages/reimbursement/payment/payment.module": [
		172
	],
	"../pages/reimbursement/reimbursement-invoice/reimbursement-invoice.module": [
		171
	],
	"../pages/reimbursement/reimbursement.module": [
		169
	],
	"../pages/reimbursement/reimdetails/reimdetails.module": [
		168
	],
	"../pages/reimbursement/reviewReason/reviewReason.module": [
		167
	],
	"../pages/reimbursement/verification/verification.module": [
		170
	],
	"../pages/setting/setting.module": [
		164
	],
	"../pages/signup/signup.module": [
		332,
		15
	],
	"../pages/welcome/welcome.module": [
		333,
		14
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>Contact</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    HomePage.prototype.logout = function () {
        //Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <h2>Welcome to Banana Project</h2> -->\n\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_GlobalData__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, storage, alertCtrl, http, globalData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.globalData = globalData;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function (name, pas) {
        var _this = this;
        this.http.getUser("v1/login?account=" + name + "&password=" + pas)
            .then(function (res) {
            if (res.code == 0) {
                _this.storage.set('userName', name);
                _this.storage.set('token', res.data);
                _this.storage.get('token').then(function (val) {
                    _this.globalData.token = val;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* Welcome */]);
                });
            }
            else {
                var confirm_1 = _this.alertCtrl.create({
                    title: '登录失败!!!',
                    message: res.msg,
                    buttons: [
                        {
                            text: '确认'
                        }
                    ]
                });
                confirm_1.present();
            }
        });
        // this.storage.set('token',pas );
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\login\login.html"*/'\n<ion-header id="login-header">\n\n</ion-header>\n\n\n<ion-content id="content">\n  <ion-list>\n    <ion-item class="title" no-lines>\n      <h1>ISSP</h1>\n    </ion-item>\n    <ion-item  class="ipt">\n        <ion-icon ios="ios-person" md="md-person" item-start color="energy"></ion-icon>\n        <ion-input placeholder="请填写您的账号" [(ngModel)]="userName"></ion-input>\n    </ion-item>\n    <ion-item class="ipt">\n        <ion-icon ios="ios-unlock" md="md-unlock" item-start color="energy"></ion-icon>\n        <ion-input placeholder="  请填写您的密码" type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n    <ion-item class="login ipt noLine" no-lines>\n      <button ion-button block (click)="login(userName,password)" color="loginBtn" >\n        登录\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <!--<ion-img width="100%" height="80" src="assets/imgs/login-footer.png"></ion-img>-->\n  <i><img src="assets/imgs/login-footer.png" alt=""></i>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_GlobalData__["a" /* GlobalData */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = (function () {
    function SettingPageModule() {
    }
    return SettingPageModule;
}());
SettingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]
        ]
    })
], SettingPageModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = 'SettingPage';
        this.items = [
            {
                title: '修改手机号码',
                page: 'NumberPage'
            },
            {
                title: '修改登录密码',
                page: 'SlidingItemPage'
            }
        ];
    }
    // itemTapped(event, item) {
    //   this.navCtrl.push(item.page);
    // }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\setting\setting.html"*/'<ion-header>\n\n    <ion-navbar color="energy">\n\n      <!-- <ion-icon name="my-arrow-left" md="md-my-arrow-left" color="white" item-left (click)=""></ion-icon> -->\n\n      <ion-title>设置</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content id="settings">\n\n    <ion-list>\n\n      <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n        {{item.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailingPageModule", function() { return MailingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mailing__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MailingPageModule = (function () {
    function MailingPageModule() {
    }
    return MailingPageModule;
}());
MailingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mailing__["a" /* MailingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__mailing__["a" /* MailingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__mailing__["a" /* MailingPage */]
        ]
    })
], MailingPageModule);

//# sourceMappingURL=mailing.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewReasonModule", function() { return ReviewReasonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviewReason__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewReasonModule = (function () {
    function ReviewReasonModule() {
    }
    return ReviewReasonModule;
}());
ReviewReasonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reviewReason__["a" /* ReviewReason */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reviewReason__["a" /* ReviewReason */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reviewReason__["a" /* ReviewReason */]
        ]
    })
], ReviewReasonModule);

//# sourceMappingURL=reviewReason.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimdetailsPageModule", function() { return ReimdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reimdetails__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReimdetailsPageModule = (function () {
    function ReimdetailsPageModule() {
    }
    return ReimdetailsPageModule;
}());
ReimdetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reimdetails__["a" /* ReimdetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reimdetails__["a" /* ReimdetailsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reimdetails__["a" /* ReimdetailsPage */]
        ]
    })
], ReimdetailsPageModule);

//# sourceMappingURL=reimdetails.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementPageModule", function() { return ReimbursementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reimbursement__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviewReason_reviewReason_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verification_verification_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reimdetails_reimdetails_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reimbursement_invoice_reimbursement_invoice_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mailing_mailing_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__payment_payment_module__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReimbursementPageModule = (function () {
    function ReimbursementPageModule() {
    }
    return ReimbursementPageModule;
}());
ReimbursementPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reimbursement__["a" /* ReimbursementPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reimbursement__["a" /* ReimbursementPage */]),
            __WEBPACK_IMPORTED_MODULE_3__reviewReason_reviewReason_module__["ReviewReasonModule"],
            __WEBPACK_IMPORTED_MODULE_4__verification_verification_module__["VerificationModule"],
            __WEBPACK_IMPORTED_MODULE_5__reimdetails_reimdetails_module__["ReimdetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_6__reimbursement_invoice_reimbursement_invoice_module__["ReimbursementInvoiceModule"],
            __WEBPACK_IMPORTED_MODULE_7__mailing_mailing_module__["MailingPageModule"],
            __WEBPACK_IMPORTED_MODULE_8__payment_payment_module__["PaymentModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reimbursement__["a" /* ReimbursementPage */],
        ]
    })
], ReimbursementPageModule);

//# sourceMappingURL=reimbursement.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationModule", function() { return VerificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificationModule = (function () {
    function VerificationModule() {
    }
    return VerificationModule;
}());
VerificationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__verification__["a" /* Verification */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__verification__["a" /* Verification */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__verification__["a" /* Verification */]
        ]
    })
], VerificationModule);

//# sourceMappingURL=verification.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementInvoiceModule", function() { return ReimbursementInvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reimbursement_invoice__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReimbursementInvoiceModule = (function () {
    function ReimbursementInvoiceModule() {
    }
    return ReimbursementInvoiceModule;
}());
ReimbursementInvoiceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reimbursement_invoice__["a" /* ReimbursementInvoice */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reimbursement_invoice__["a" /* ReimbursementInvoice */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reimbursement_invoice__["a" /* ReimbursementInvoice */]
        ]
    })
], ReimbursementInvoiceModule);

//# sourceMappingURL=reimbursement-invoice.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentModule = (function () {
    function PaymentModule() {
    }
    return PaymentModule;
}());
PaymentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Payment */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Payment */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Payment */]
        ]
    })
], PaymentModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_address_internal_address_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__external_address_external_address_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_address_business_address_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactsPageModule = (function () {
    function ContactsPageModule() {
    }
    return ContactsPageModule;
}());
ContactsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__internal_address_internal_address_module__["InternalAddressModule"],
            __WEBPACK_IMPORTED_MODULE_4__external_address_external_address_module__["ExternalAddressModule"],
            __WEBPACK_IMPORTED_MODULE_5__business_address_business_address_module__["BusinessAddressModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]
        ]
    })
], ContactsPageModule);

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins_pinyin__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactsProvider = (function () {
    function ContactsProvider(http) {
        this.http = http;
        this.searchQuery = '';
    }
    /**
     * Get contacts data
     * @returns {Promise<TResult|T>}
    //  */
    /**
     * Grouping contacts
     * @param array
     * @returns {any}
     */
    ContactsProvider.prototype.grouping = function (array) {
        var pin = new __WEBPACK_IMPORTED_MODULE_4__plugins_pinyin__["a" /* Pinyin */];
        var groupContacts = [];
        var letterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";
        if (array.length <= 0)
            return [];
        // Create a parent container
        groupContacts = letterStr.split('')
            .map(function (str) {
            return {
                groupName: str,
                contacts: []
            };
        });
        // Push into the correct group
        groupContacts.forEach(function (item, index) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].customerName) {
                    array[i].username = array[i].customerName;
                }
                if (array[i].username) {
                    var aa = void 0;
                    if (pin.toPinyin(array[i].username.split('')[0]) == 'undefined') {
                        aa = array[i].username;
                    }
                    else {
                        aa = pin.toPinyin(array[i].username);
                    }
                    if (aa.split('')[0].toUpperCase() === item.groupName) {
                        item.contacts.push(array[i]);
                    }
                    else if (letterStr.indexOf(aa.split('')[0].toUpperCase()) === -1) {
                        if (index == 26) {
                            groupContacts[groupContacts.length - 1].contacts.push(array[i]);
                        }
                    }
                }
                else {
                    if (index == 26) {
                        groupContacts[groupContacts.length - 1].contacts.push(array[i]);
                    }
                }
                item.keyLetter = item.contacts.length == 0 ? false : true;
            }
        });
        return groupContacts;
    };
    return ContactsProvider;
}());
ContactsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ContactsProvider);

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalAddressModule", function() { return InternalAddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_address__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InternalAddressModule = (function () {
    function InternalAddressModule() {
    }
    return InternalAddressModule;
}());
InternalAddressModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__internal_address__["a" /* InternalAddress */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__internal_address__["a" /* InternalAddress */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__internal_address__["a" /* InternalAddress */]
        ]
    })
], InternalAddressModule);

//# sourceMappingURL=internal-address.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_accordion_list_accordion_list__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_my_radio_my_radio__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_my_back_my_back__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_reviewReason_reviewReason__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_status_pipes__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_color_color__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_time_pipes__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_sex_sex__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_customer_pipes__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_util_toast_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_GlobalData__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_contacts__ = __webpack_require__(174);
// Component





// Pipes





// Providers



var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__components_accordion_list_accordion_list__["a" /* AccordionListComponent */],
    __WEBPACK_IMPORTED_MODULE_1__components_my_radio_my_radio__["a" /* MyRadioComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_my_back_my_back__["a" /* MyBackComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_reviewReason_reviewReason__["a" /* ReviewReasonComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_test_test__["a" /* AreasSelect */]
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_5__pipes_status_pipes__["a" /* StatusPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes_color_color__["a" /* ColorPipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes_time_pipes__["a" /* TimePipe */],
    __WEBPACK_IMPORTED_MODULE_8__pipes_sex_sex__["a" /* SexPipe */],
    __WEBPACK_IMPORTED_MODULE_9__pipes_customer_pipes__["a" /* CustomerPipe */]
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_10__providers_util_toast_service__["a" /* ToastService */],
    __WEBPACK_IMPORTED_MODULE_11__providers_GlobalData__["a" /* GlobalData */],
    __WEBPACK_IMPORTED_MODULE_12__providers_contacts__["a" /* ContactsProvider */]
];
//# sourceMappingURL=imports.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAddressModule", function() { return ExternalAddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__external_address__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExternalAddressModule = (function () {
    function ExternalAddressModule() {
    }
    return ExternalAddressModule;
}());
ExternalAddressModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__external_address__["a" /* ExternalAddress */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__external_address__["a" /* ExternalAddress */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__external_address__["a" /* ExternalAddress */]
        ]
    })
], ExternalAddressModule);

//# sourceMappingURL=external-address.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessAddressModule", function() { return BusinessAddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_address__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BusinessAddressModule = (function () {
    function BusinessAddressModule() {
    }
    return BusinessAddressModule;
}());
BusinessAddressModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__business_address__["a" /* BusinessAddress */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__business_address__["a" /* BusinessAddress */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__business_address__["a" /* BusinessAddress */]
        ]
    })
], BusinessAddressModule);

//# sourceMappingURL=business-address.module.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GlobalData__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToastService = (function () {
    function ToastService(http, storage, globalData) {
        this.http = http;
        this.storage = storage;
        this.globalData = globalData;
        this.rs = { msg: '?' };
    }
    ToastService.prototype.get = function (url, option, dm, he) {
        var _this = this;
        var domain;
        if (dm) {
            domain = __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* CONTACT */];
        }
        else {
            domain = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* APP_URL */];
        }
        if (he) {
            domain = __WEBPACK_IMPORTED_MODULE_3__config_config__["c" /* HOME */];
        }
        var headers = this.setHeader();
        return this.http.get(domain + url + this.toQueryString(option), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ToastService.prototype.getUser = function (url) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_config__["d" /* USER_URL */] + url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .toPromise()
            .then(function (res) {
            var result = res.json();
            if (result) {
                if (result.code == 0) {
                    return result;
                }
                else {
                    _this.rs.msg = result.msg;
                    _this.rs.code = result.code;
                    return _this.rs;
                }
            }
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    ToastService.prototype.post = function (url, paramObj, dm) {
        var _this = this;
        var domain;
        if (dm) {
            domain = __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* CONTACT */];
        }
        else {
            domain = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* APP_URL */];
        }
        var headers = this.setHeader();
        return this.http.post(domain + url, this.toBodyString(paramObj), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ToastService.prototype.put = function (url, paramObj, dm) {
        var _this = this;
        var token = this.globalData.token;
        var domain;
        if (dm) {
            domain = __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* CONTACT */];
        }
        else {
            domain = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* APP_URL */];
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
            'userToken': token
        });
        return this.http.put(domain + url, this.toBodyString(paramObj), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ToastService.prototype.setHeader = function () {
        var token = this.globalData.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
            'userToken': token
        });
        return headers;
    };
    //处理成功之后数据
    ToastService.prototype.handleSuccess = function (result) {
        if (result) {
            if (result.code == 0) {
                return result;
            }
            else {
                this.rs.msg = result.msg;
                this.rs.code = result.code;
                return this.rs;
            }
        }
    };
    //抓取错误
    ToastService.prototype.handleError = function (error) {
        var msg = '请求失败';
        return { success: false, msg: msg };
    };
    //将put请求参数解析
    ToastService.prototype.toBodyString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    };
    //解析get请求参数
    ToastService.prototype.toQueryString = function (obj) {
        var ret = [];
        if (JSON.stringify(obj) == "{}" || !obj)
            return '';
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return '?' + ret.join('&');
    };
    //处理参数的格式 key = value
    ToastService.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    return ToastService;
}());
ToastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__GlobalData__["a" /* GlobalData */]])
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.signup = function () {
        //Api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\signup\signup.html"*/'<ion-content padding>\n\n<ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Name</ion-label>\n\n    <ion-input type="text" value=""></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Email</ion-label>\n\n    <ion-input type="text" value=""></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Username</ion-label>\n\n    <ion-input type="text" value=""></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Password</ion-label>\n\n    <ion-input type="password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block color="primary" (click)="signup()">Signup</button>\n\n\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reimbursement_reimbursement__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reimbursement_reimbursement_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_contacts_contacts_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ion_multi_picker__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__imports__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //获取摄像头
 //获取定位
 //获取图片













//通讯录





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '',
                cancelButton: ' 取消'
            }, {
                links: [
                    { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/applyreimbursement/applyreimbursement.module#ApplyreimbursementPageModule', name: 'ApplyreimbursementPage', segment: 'applyreimbursement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/mailing/mailing.module#MailingPageModule', name: 'MailingPage', segment: 'mailing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/reviewReason/reviewReason.module#ReviewReasonModule', name: 'ReviewReason', segment: 'reviewReason', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/reimdetails/reimdetails.module#ReimdetailsPageModule', name: 'ReimdetailsPage', segment: 'reimdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/reimbursement.module#ReimbursementPageModule', name: 'ReimbursementPage', segment: 'reimbursement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/verification/verification.module#VerificationModule', name: 'Verification', segment: 'verification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/reimbursement-invoice/reimbursement-invoice.module#ReimbursementInvoiceModule', name: 'ReimbursementInvoice', segment: 'reimbursement-invoice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reimbursement/payment/payment.module#PaymentModule', name: 'Payment', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/internal-address/internal-address.module#InternalAddressModule', name: 'InternalAddress', segment: 'internal-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/external-address/external-address.module#ExternalAddressModule', name: 'ExternalAddress', segment: 'external-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/business-address/business-address.module#BusinessAddressModule', name: 'BusinessAddress', segment: 'business-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/borrowmanage.module#BorrowManagePageModule', name: 'BorrowManagePage', segment: 'borrowmanage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/borrow-detail/borrow-detail.module#BorrowDetailPageModule', name: 'BorrowDetailPage', segment: 'borrow-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/applyborrowmoney/applyborrowmoney.module#ApplyborrowmoneyPageModule', name: 'ApplyborrowmoneyPage', segment: 'applyborrowmoney', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/audit-reason/audit-reason.module#AuditReasonPageModule', name: 'AuditReasonPage', segment: 'audit-reason', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/borrow-auditopinon/borrow-auditopinon.module#BorrowAuditopinonPageModule', name: 'BorrowAuditopinonPage', segment: 'borrow-auditopinon', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/borrow-return/borrow-return.module#BorrowReturnPageModule', name: 'BorrowReturnPage', segment: 'borrow-return', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/borrow-send/borrow-send.module#BorrowSendPageModule', name: 'BorrowSendPage', segment: 'borrow-send', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/check-return/check-return.module#CheckReturnPageModule', name: 'CheckReturnPage', segment: 'check-return', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/city/city.module#cityPageModule', name: 'cityPage', segment: 'city', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/borrowmanage/payment/payment.module#PaymentModule', name: 'Paymentss', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/business-address/business-other/business-other.module#BusinessOtherModule', name: 'BusinessOther', segment: 'business-other', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/external-address/external-other/external-other.module#ExternalOtherModule', name: 'ExternalOther', segment: 'external-other', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/number/number.module#NumberPageModule', name: 'NumberPage', segment: 'number', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting_module__["SettingPageModule"],
            __WEBPACK_IMPORTED_MODULE_19__pages_reimbursement_reimbursement_module__["ReimbursementPageModule"],
            __WEBPACK_IMPORTED_MODULE_24_ion_multi_picker__["MultiPickerModule"],
            __WEBPACK_IMPORTED_MODULE_20__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_21__pages_contacts_contacts_module__["ContactsPageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__["LoginPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_reimbursement_reimbursement__["a" /* ReimbursementPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_25__imports__["c" /* PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HOME; });
var APP_URL = 'https://lendreimbursement.issp.bjike.com:8080/'; //借款
//借款
var USER_URL = 'https://user.issp.bjike.com:8080/'; //登录
//登录
var CONTACT = 'https://contacts.issp.bjike.com:8080/'; //通讯录
//通讯录
var HOME = 'https://organize.issp.bjike.com:8080/'; //首页
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MailingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MailingPage = (function () {
    function MailingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.person = '王博文';
        this.sendTime = '2017-09-08';
    }
    MailingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailingPage');
    };
    return MailingPage;
}());
MailingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mailing',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\mailing\mailing.html"*/'\n<ion-header>\n\n  <ion-navbar color="energy">\n    <ion-title>寄件</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="confirm()" class="sure">确认</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="post">\n  <ion-list>\n    <ion-item>\n        <ion-label>收件人</ion-label>\n        <ion-select [(ngModel)]="person" interface="popover">\n          <ion-option value="胡歌">胡歌</ion-option>\n          <ion-option value="王博文">王博文</ion-option>\n          <ion-option value="黄焕来">黄焕来</ion-option>\n          <ion-option value="黎贵钦">黎贵钦</ion-option>\n          <ion-option value="黄迪娜">黄迪娜</ion-option>\n          <ion-option value="胡程威">胡程威</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>寄件时间</ion-label>\n        <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="sendTime" cancelText="取消" doneText="确定"></ion-datetime>\n      </ion-item>\n      <ion-item>\n          <ion-label>地区</ion-label>\n          <ion-select [(ngModel)]="area" okText="确定" cancelText="取消">\n              <ion-option value="北京">北京</ion-option>\n              <ion-option value="深圳">深圳</ion-option>\n              <ion-option value="广州">广州</ion-option>\n              <ion-option value="湛江">湛江</ion-option>\n              <ion-option value="江门">江门</ion-option>\n              <ion-option value="佛山">佛山</ion-option>\n            </ion-select>\n          <!-- <ion-multi-picker item-content [multiPickerColumns]="simpleColumns"></ion-multi-picker> -->\n      </ion-item>\n      <ion-item id="adress">\n        <ion-label>详细地址</ion-label>\n        <ion-input type="text" placeholder="请输入详细地址" class="input-address"></ion-input>\n      </ion-item>\n      <ion-item id="remarks">\n          <ion-label>备注</ion-label>        \n      </ion-item>\n      <ion-item id="block">\n        <ion-textarea placeholder="请输入备注" class="textrea"></ion-textarea>\n      </ion-item>    \n  </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\mailing\mailing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], MailingPage);

//# sourceMappingURL=mailing.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewReason; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MailingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReviewReason = (function () {
    function ReviewReason(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.items = [
            {
                time: '2017-09-11',
                description: '审核通过原因:符合标准符合标准符<br/>审核通过原因1:合标准符合标准符合标准符合标准'
            },
            {
                time: '2017-09-08',
                description: '分析通过原因:符合标准'
            },
            {
                time: '2017-09-06',
                description: '核对无误:已报销200元'
            },
            {
                time: '2017-09-02',
                description: '核对无误:已报销200元'
            }
        ];
    }
    ReviewReason.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailingPage');
    };
    return ReviewReason;
}());
ReviewReason = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reviewReason',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reviewReason\reviewReason.html"*/'<ion-header>\n\n    \n\n  <ion-navbar color="energy" >\n\n    <ion-title>审核过程/原因</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button (click)="successAlert()" class="sure">确认</button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding id="checkReason">\n\n  <ion-list no-lines id="pass">\n\n    <ul class="pass-list">\n\n      <li *ngFor=" let item of items">\n\n        <p class="date">{{item.time}}</p>\n\n        <p class="pass-process" [innerHTML]=\'item.description\'></p>\n\n      </li>\n\n    </ul>\n\n  </ion-list>\n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reviewReason\reviewReason.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], ReviewReason);

//# sourceMappingURL=reviewReason.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReimdetailsPage = (function () {
    function ReimdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isAuditor = true; //是否为审核人员
        this.items = [
            {
                Immutable: '报销单号',
                variable: 'BX20171445'
            },
            {
                Immutable: '发生时间',
                variable: '2017-09-05'
            },
            {
                Immutable: '报销金额',
                variable: '200（元）'
            },
            {
                Immutable: '单据数量',
                variable: '1'
            },
            {
                Immutable: '地区',
                variable: '广州'
            },
            {
                Immutable: '项目名称',
                variable: '高薪企业资质'
            },
            {
                Immutable: '负责人',
                variable: '孟小宝'
            },
            {
                Immutable: '当天任务',
                variable: '企业文化宣传'
            },
            {
                Immutable: '一级科目',
                variable: '营业外支出'
            },
            {
                Immutable: '二级科目',
                variable: '罚款'
            },
            {
                Immutable: '三级科目',
                variable: '交通罚款'
            },
            {
                Immutable: '参与人',
                variable: '孟小宝'
            }, {
                Immutable: '是否有发票',
                variable: '有'
            },
            {
                Immutable: '无发票说明',
                variable: '无'
            },
            {
                Immutable: '补充说明',
                variable: '请看大屏幕'
            }
        ];
        this.posts = [
            {
                Immutable: '收件人',
                variable: '王博文'
            },
            {
                Immutable: '寄件时间',
                variable: '2017-08-21'
            },
            {
                Immutable: '地址',
                variable: '广东省广州市天河区冠达商务中心112'
            },
            {
                Immutable: '备注',
                variable: '收到货记得发短信给我'
            }
        ];
        this.status = navParams.get('name');
        switch (this.status) {
            case '待审核':
                this.statusColor = 'orange';
                this.buttonName = this.isAuditor ? '去寄件' : '去审核';
                break;
            case '待分析':
                this.statusColor = 'danger';
                this.buttonName = '去分析';
                break;
            case '待核对':
                this.statusColor = 'green';
                this.buttonName = '核对有误';
                break;
            case '待核对':
                this.statusColor = 'green';
                this.buttonName = '去付款';
                break;
            case '已报销':
                this.statusColor = 'blue';
                break;
            case '待解冻':
                this.statusColor = 'light';
                this.buttonName = '重新编辑提交';
                break;
        }
    }
    ReimdetailsPage.prototype.send = function () {
        this.navCtrl.push('MailingPage');
    };
    ReimdetailsPage.prototype.itemReason = function () {
        this.navCtrl.push('ReviewReason');
    };
    ReimdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReimdetailsPage');
    };
    ReimdetailsPage.prototype.buttonFn = function (status) {
        if (status == '待还款') {
            this.navCtrl.push('BorrowReturnPage');
        }
    };
    return ReimdetailsPage;
}());
ReimdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reimdetails',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reimdetails\reimdetails.html"*/'\n<ion-header>\n\n  <ion-navbar color="energy">\n    <ion-title>报销详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="details">\n  <ion-list id="top">\n    <ion-item>\n      <h3 class="title-name">王博文</h3>\n      <p class="submit-review">提交时间：2017-08-19</p>\n      <p class="submit-review">审核时间：2017-08-26</p>\n      <!-- <button ion-button color="{{statusColor}}" round item-right id="status-check">{{ status }}</button> -->\n      <div class="btn" item-right>\n          <button ion-button color="{{statusColor}}" round class="status-check">{{ status }}</button>\n          <p class="money" *ngIf="status == \'已报销\'">200元</p>\n        </div>\n    </ion-item>\n  </ion-list>\n  <ion-list no-lines id="under">\n      <ion-item *ngFor="let item of items">\n        <p class="left-text"><span class="title-data">{{item.Immutable}}：</span><span class="varble">{{item.variable}}</span></p>\n      </ion-item>\n      <div id="picture-show">\n        <span>凭证：</span>\n        <div class="certificate-pic">\n          <img src="assets/imgs/userImage1.png" class="img-eff"/>\n          <img src="assets/imgs/userImage2.png" class="img-eff"/>\n        </div>\n      </div>\n  </ion-list>\n  <div id="bottom" *ngIf="status == \'已报销\'">\n    <ion-list no-lines id="details-marks">\n      <ion-item *ngFor="let post of posts" class="firstBorder">\n          <p class="bottom-text"><span class="title-data">{{post.Immutable}}：</span><span class="varble">{{post.variable}}</span></p>\n        </ion-item> \n    </ion-list>\n    <ion-list no-lines id="reason">\n        <button ion-item (click)="itemReason()">\n          审核过程/原因\n        </button> \n      </ion-list>\n  </div>\n\n  <div id="toChecked" *ngIf="status == \'待核对\'">\n      <button ion-button icon-only color="wrongColor" class="check-wrong">核对有误</button>\n      <button ion-button icon-only color="danger" class="pay">去付款</button>  \n  </div>\n  \n  <button ion-button full block icon-only id="button" color="orangel" *ngIf="status == \'待审核\'" (click)="send()">{{buttonName}}</button>\n  <!-- <button ion-button full block id="button" color="danger" *ngIf="isAuditor" (click)="send()">去审核</button> -->\n  <button ion-button full block icon-only id="button" color="orangel" *ngIf="status == \'待解冻\'">{{buttonName}}</button>\n  <button ion-button full block icon-only id="button" color="danger" *ngIf="status == \'待分析\'">{{buttonName}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reimdetails\reimdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ReimdetailsPage);

//# sourceMappingURL=reimdetails.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Verification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VerificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Verification = (function () {
    function Verification(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Verification.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerificationPage');
    };
    return Verification;
}());
Verification = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-verification',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\verification\verification.html"*/'\n<ion-header>\n    <ion-navbar  color="energy" no-border-bottom text-center>\n      <ion-title>核对有误</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only class="submit" (click)="confirm()">\n          确认\n        </button>\n     </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content id="incorrect">\n  <div class="text-reason">\n    <p class="wrong">有误原因</p>\n    <ion-textarea placeholder="请输入原因" class="textarea"></ion-textarea>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\verification\verification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], Verification);

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimbursementInvoice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reimbursement_reimbursement__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VerificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReimbursementInvoice = (function () {
    function ReimbursementInvoice(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReimbursementInvoice.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReimbursementInvoice');
    };
    ReimbursementInvoice.prototype.complete = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reimbursement_reimbursement__["a" /* ReimbursementPage */]);
    };
    return ReimbursementInvoice;
}());
ReimbursementInvoice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reimbursement-invoice',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reimbursement-invoice\reimbursement-invoice.html"*/'\n<ion-header>\n    <ion-navbar  color="energy" no-border-bottom text-center>\n      <ion-title>无发票说明</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only class="submit" (click)="complete()">\n          完成\n        </button>\n     </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content id="incorrect">\n  <div class="text-reason">\n    <p class="wrong">说明的情况是这样的</p>\n    <!-- <ion-textarea placeholder="请输入原因" class="textarea"></ion-textarea> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reimbursement-invoice\reimbursement-invoice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ReimbursementInvoice);

//# sourceMappingURL=reimbursement-invoice.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Payment } from '../payment/payment';
/**
 * Generated class for the MailingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Payment = (function () {
    function Payment(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.payWay = '现金';
        this.sendTime = '2017-09-08';
    }
    Payment.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailingPage');
    };
    Payment.prototype.successAlert = function () {
        var alert = this.alertCtrl.create({
            title: '付款成功',
            buttons: ['Ok']
        });
        alert.present();
    };
    return Payment;
}());
Payment = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\payment\payment.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="energy" >\n\n    <ion-title>付款</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="successAlert()" class="sure">确认</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content id="post">\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-label>付款方式</ion-label>\n\n        <ion-select [(ngModel)]="payWay" interface="popover">\n\n          <ion-option value="现金">现金</ion-option>\n\n          <ion-option value="支付宝">支付宝</ion-option>\n\n          <ion-option value="微信">微信</ion-option>\n\n          <ion-option value="银行卡">银行卡</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item id="adress">\n\n        <ion-label>付款金额</ion-label>\n\n        <ion-input type="text" placeholder="请输入金额" class="input-address"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="remarks">\n\n          <ion-label>付款说明</ion-label>        \n\n      </ion-item>\n\n      <ion-item id="block">\n\n        <ion-textarea placeholder="请输入说明" class="textrea"></ion-textarea>\n\n      </ion-item>    \n\n  </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], Payment);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contacts__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsPage = (function () {
    function ContactsPage(platform, navCtrl, navParams, http, ref, contactsSever) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.ref = ref;
        this.contactsSever = contactsSever;
        this.pet = "internal";
        this.index = 'A';
        this.showModal = false;
        this.showSearch = false;
        this.innerContacts = [];
        this.exterContacts = [];
        this.businessContacts = [];
        this.comContacts = [];
        this.itemss = [];
        this.indexes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
        this.offsetTops = [];
        this.isAndroid = false;
        this.searchQuery = '';
        this.searching = false;
        this.isAndroid = platform.is('android');
        for (var i = 0; i < 30; i++) {
            this.itemss.push(this.itemss.length);
        }
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.initializeItems();
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('internalcontacts/v1/mobile/list', {}, 'CONTACT')
            .then(function (res) {
            _this.allInner = _this.contactsSever.grouping(res.data);
            _this.innerContacts = _this.contactsSever.grouping(res.data);
        });
        this.http.get('externalcontacts/v1/mobile/list', {}, 'CONTACT')
            .then(function (res) {
            _this.allContacts = _this.contactsSever.grouping(res.data);
            _this.exterContacts = _this.contactsSever.grouping(res.data);
        });
        this.http.get('commercecontacts/v1/mobile/list', {}, 'CONTACT')
            .then(function (res) {
            _this.allBusiness = _this.contactsSever.grouping(res.data);
            _this.comContacts = _this.contactsSever.grouping(res.data);
        });
    };
    ContactsPage.prototype.initializeItems = function () {
        this.innerContacts = this.allInner;
        this.exterContacts = this.allContacts;
        this.comContacts = this.allBusiness;
    };
    ContactsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (this.come == '内部通讯录') {
            this.innerContacts = this.allInner;
            if (val && val.trim() != '') {
                this.innerContacts = this.innerContacts.filter(function (item) {
                    for (var i = 0; i < item.contacts.length; i++) {
                        if (item.contacts[i].username) {
                            return (item.contacts[i].username.toLowerCase().indexOf(val.toLowerCase()) > -1);
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
        }
        else if (this.come == '外部通讯录') {
            this.exterContacts = this.allContacts;
            if (val && val.trim() != '') {
                this.exterContacts = this.exterContacts.filter(function (item) {
                    for (var i = 0; i < item.contacts.length; i++) {
                        if (item.contacts[i].username) {
                            return (item.contacts[i].username.toLowerCase().indexOf(val.toLowerCase()) > -1);
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
        }
        else if (this.come == '商务通讯录') {
            this.comContacts = this.allBusiness;
            if (val && val.trim() != '') {
                this.comContacts = this.comContacts.filter(function (item) {
                    for (var i = 0; i < item.contacts.length; i++) {
                        if (item.contacts[i].username) {
                            return (item.contacts[i].username.toLowerCase().indexOf(val.toLowerCase()) > -1);
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
        }
    };
    ContactsPage.prototype.openInternalPage = function (id) {
        this.navCtrl.push('InternalAddress', { id: id });
    };
    ContactsPage.prototype.openOuternalPage = function (id) {
        this.navCtrl.push('ExternalAddress', { id: id });
    };
    ContactsPage.prototype.openBusinessPage = function (id) {
        this.navCtrl.push('BusinessAddress', { id: id });
    };
    ContactsPage.prototype.ionViewDidEnter = function () {
        this.getOffsetTops();
    };
    ContactsPage.prototype.getOffsetTops = function () {
        this.offsetTops = this.ionItemGroup._results.map(function (ele) {
            return ele.nativeElement.offsetTop;
        });
    };
    ContactsPage.prototype.selectIndex = function (index) {
        this.index = this.indexes[index];
        var offsetTop = this.offsetTops[index];
        this.content.scrollTo(0, offsetTop, 300);
        this.createModal();
    };
    ContactsPage.prototype.onScroll = function () {
        var threshold = 42;
        if (this.content.scrollTop < threshold) {
            this.index = this.indexes[0];
            return;
        }
        for (var i = this.offsetTops.length; i > 0; i--) {
            if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
                this.index = this.indexes[i];
                this.ref.detectChanges();
                return;
            }
        }
    };
    // create modal
    ContactsPage.prototype.createModal = function () {
        var _this = this;
        clearTimeout(this.timeout);
        this.showModal = true;
        this.timeout = setTimeout(function () {
            _this.showModal = false;
            _this.ref.detectChanges();
        }, 800);
    };
    ContactsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < 20; i++) {
                _this.itemss.push(_this.itemss.length);
            }
            // console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    return ContactsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('IonItemGroup'),
    __metadata("design:type", Object)
], ContactsPage.prototype, "ionItemGroup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
], ContactsPage.prototype, "content", void 0);
ContactsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contacts',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\contacts.html"*/'\n<ion-header>\n  <ion-navbar  color="energy" text-center>\n    <ion-title>通讯录</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="showSearch = !showSearch">\n        <ion-icon name=\'search\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top no-border-bottom color="white">\n    <ion-segment [(ngModel)]="pet" id="toolbar">\n      <ion-segment-button value="internal" (click)="come=\'内部通讯录\'">\n        内部通讯录\n      </ion-segment-button>\n      <ion-segment-button value="external" (click)="come=\'外部通讯录\'">\n        外部通讯录\n      </ion-segment-button>\n      <ion-segment-button value="business" (click)="come=\'商务通讯录\'">\n        商务通讯录\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content id="contacts" (ionScroll)="onScroll()">\n<ion-searchbar (ionInput)="getItems($event)" placeholder="搜索用户名" *ngIf="showSearch"></ion-searchbar>\n  <div [ngSwitch]="pet">\n    <!-- 内部通讯录 -->\n    <div *ngSwitchCase="\'internal\'">\n      <ion-item-group *ngFor="let item of innerContacts" #IonItemGroup>\n        <ion-item-divider color="bgColor" sticky index-key="item.belong" *ngIf="item.keyLetter">\n          <ion-label>{{item.groupName}}</ion-label>\n        </ion-item-divider>\n        <ion-item-sliding *ngFor="let i of item.contacts" (click)="openInternalPage(i.id)"#slidingItem>\n          <ion-item id="contact-list">\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/contact_pic.png">\n            </ion-thumbnail>\n            <h2>{{i.username}} <ion-icon name="my-avatar" color="{{i.sex | sex}}" class="person"></ion-icon></h2>\n            <p>{{i.department}} <span>{{i.position}}</span></p>    \n          </ion-item>\n        </ion-item-sliding>        \n      </ion-item-group> \n    </div>\n    <!-- 内部通讯录 -->\n\n    <!-- 外部通讯录 -->\n    <div *ngSwitchCase="\'external\'">\n      <ion-item-group *ngFor="let item of exterContacts" #IonItemGroup>\n        <ion-item-divider color="bgColor" sticky index-key="item.belong" *ngIf="item.keyLetter">\n          <ion-label>{{item.groupName}}</ion-label>\n        </ion-item-divider>\n        <ion-item-sliding *ngFor="let i of item.contacts" (click)="openOuternalPage(i.id)"#slidingItem>\n          <ion-item id="contact-list">\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/contact_pic.png">\n            </ion-thumbnail>\n            <h2>{{i.username}} <ion-icon name="my-avatar" color="{{i.sex | sex}}" class="person"></ion-icon></h2>\n            <p>{{i.project}} <span>{{i.position}}</span></p>    \n          </ion-item>\n        </ion-item-sliding>        \n      </ion-item-group>\n    </div>\n    <!-- 外部通讯录 -->\n\n      <!-- 商务通讯录 -->\n      <div *ngSwitchCase="\'business\'">\n        <ion-item-group *ngFor="let item of comContacts" #IonItemGroup>\n          <ion-item-divider color="bgColor" sticky index-key="item.belong" *ngIf="item.keyLetter">\n            <ion-label>{{item.groupName}}</ion-label>\n          </ion-item-divider>\n          <ion-item-sliding *ngFor="let i of item.contacts" (click)="openBusinessPage(i.id)"#slidingItem>\n            <ion-item id="contact-list">\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/contact_pic.png">\n              </ion-thumbnail>\n              <h2>{{i.customerName}} <ion-icon name="my-avatar" color="{{i.sex | sex}}" class="person"></ion-icon></h2>\n              <p>{{i.customerLevelName}} <span>{{i.customerStatus | customer}}</span></p>    \n            </ion-item>\n          </ion-item-sliding>        \n        </ion-item-group>\n      </div>\n      <!-- 商务通讯录 -->\n  </div>\n\n  <div id="letter" #IndexedMenu>\n    <p class="indexed-item" [class.activate]="letter === index" *ngFor="let letter of indexes; let i = index" (click)="selectIndex(i)">{{letter}}</p>\n  </div>\n  <div class="modal"\n    [class.show]="showModal">\n    {{index}}\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\contacts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_3__providers_contacts__["a" /* ContactsProvider */]])
], ContactsPage);

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pinyin; });
var Pinyin = (function () {
    function Pinyin() {
        //汉字所对应的拼音
        this.pinyin = {
            a: "\u554a\u963f\u9515",
            ai: "\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d",
            an: "\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef",
            ang: "\u80ae\u6602\u76ce",
            ao: "\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6",
            ba: "\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43",
            bai: "\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4",
            ban: "\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228",
            bang: "\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783",
            bao: "\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85",
            bo: "\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb",
            bei: "\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e",
            ben: "\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b",
            beng: "\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f",
            bi: "\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0",
            bian: "\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca",
            biao: "\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4",
            bie: "\u9cd6\u618b\u522b\u762a\u8e69\u9cd8",
            bin: "\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13",
            bing: "\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9",
            bu: "\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad",
            ca: "\u64e6\u5693\u7924",
            cai: "\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521",
            can: "\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea",
            cang: "\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27",
            cao: "\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a",
            ce: "\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b",
            ceng: "\u5c42\u8e6d\u564c",
            cha: "\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869",
            chai: "\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87",
            chan: "\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94",
            chang: "\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3",
            chao: "\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016",
            che: "\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817",
            chen: "\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80",
            cheng: "\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172",
            chi: "\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51",
            chong: "\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f",
            chou: "\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b",
            chu: "\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc",
            chuan: "\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221",
            chuang: "\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006",
            chui: "\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc",
            chun: "\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d",
            chuo: "\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a",
            ci: "\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91",
            cong: "\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e",
            cu: "\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59",
            cuan: "\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228",
            cui: "\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9",
            cun: "\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4",
            cuo: "\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c",
            da: "\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791",
            dai: "\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb",
            dan: "\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa",
            dang: "\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6",
            dao: "\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b",
            de: "\u5fb7\u5f97\u7684\u951d",
            deng: "\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26",
            di: "\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6",
            dian: "\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e",
            diao: "\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82",
            die: "\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce",
            ding: "\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a",
            dong: "\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b",
            dou: "\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161",
            du: "\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9",
            duan: "\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16",
            dui: "\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893",
            dun: "\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8",
            duo: "\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31",
            e: "\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4",
            en: "\u6069\u84bd\u6441\u5514\u55ef",
            er: "\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95",
            fa: "\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d",
            fan: "\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f",
            fang: "\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82",
            fei: "\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1",
            fen: "\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22",
            feng: "\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c",
            fu: "\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6",
            ga: "\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486",
            gai: "\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2",
            gan: "\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150",
            gang: "\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b",
            gong: "\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5",
            gao: "\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506",
            ge: "\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2",
            gei: "\u7ed9",
            gen: "\u6839\u8ddf\u4e98\u831b\u54cf\u826e",
            geng: "\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0",
            gou: "\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2",
            gu: "\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58",
            gua: "\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39",
            guai: "\u4e56\u62d0\u602a\u54d9",
            guan: "\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf",
            guang: "\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592",
            gui: "\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc",
            gun: "\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7",
            guo: "\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748",
            ha: "\u54c8",
            hai: "\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2",
            han: "\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e",
            hen: "\u592f\u75d5\u5f88\u72e0\u6068",
            hang: "\u676d\u822a\u6c86\u7ed7\u73e9\u6841",
            hao: "\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d",
            he: "\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee",
            hei: "\u563f\u9ed1",
            heng: "\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605",
            hong: "\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3",
            hou: "\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba",
            hu: "\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b",
            hua: "\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e",
            huai: "\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d",
            huan: "\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f",
            huang: "\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7",
            hui: "\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe",
            hun: "\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17",
            huo: "\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816",
            ji: "\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82",
            jia: "\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf",
            jian: "\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af",
            jiang: "\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47",
            jiao: "\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b",
            jie: "\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb",
            jin: "\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc",
            jing: "\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc",
            jiong: "\u70af\u7a98\u5182\u8fe5\u6243",
            jiu: "\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f",
            ju: "\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab",
            juan: "\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd",
            jue: "\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6",
            jun: "\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87",
            ka: "\u5580\u5496\u5361\u4f67\u5494\u80e9",
            ke: "\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1",
            kai: "\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e",
            kan: "\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0",
            kang: "\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa",
            kao: "\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0",
            ken: "\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880",
            keng: "\u542d\u5fd0\u94ff",
            kong: "\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c",
            kou: "\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58",
            ku: "\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7",
            kua: "\u5938\u57ae\u630e\u8de8\u80ef\u4f89",
            kuai: "\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d",
            kuan: "\u5bbd\u6b3e\u9acb",
            kuang: "\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36",
            kui: "\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec",
            kun: "\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1",
            kuo: "\u62ec\u6269\u5ed3\u9614\u86de",
            la: "\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c",
            lai: "\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41",
            lan: "\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934",
            lang: "\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782",
            lao: "\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa",
            le: "\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3",
            lei: "\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179",
            ling: "\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae",
            leng: "\u695e\u6123",
            li: "\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7",
            lian: "\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2",
            liang: "\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49",
            liao: "\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022",
            lie: "\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23",
            lin: "\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f",
            liu: "\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f",
            long: "\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643",
            lou: "\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5",
            lu: "\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88",
            lv: "\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b", luan: "\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae",
            lue: "\u63a0\u7565\u950a",
            lun: "\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5",
            luo: "\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2",
            ma: "\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd",
            mai: "\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e",
            man: "\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794",
            mang: "\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2",
            meng: "\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe",
            miao: "\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731",
            mao: "\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6",
            me: "\u4e48",
            mei: "\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45",
            men: "\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494",
            mi: "\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b",
            mian: "\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704",
            mie: "\u8511\u706d\u54a9\u881b\u7bfe",
            min: "\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9",
            ming: "\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169",
            miu: "\u8c2c",
            mo: "\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98",
            mou: "\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a",
            mu: "\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc",
            na: "\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac",
            nai: "\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0",
            nan: "\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67",
            nao: "\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2",
            ne: "\u6dd6\u5462\u8bb7",
            nei: "\u9981",
            nen: "\u5ae9\u80fd\u6798\u6041",
            ni: "\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5",
            nian: "\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6",
            niang: "\u5a18\u917f",
            niao: "\u9e1f\u5c3f\u8311\u5b32\u8132\u8885",
            nie: "\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51",
            nin: "\u60a8\u67e0",
            ning: "\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d",
            niu: "\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4",
            nong: "\u8113\u6d53\u519c\u4fac",
            nu: "\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d",
            nv: "\u5973\u6067\u9495\u8844",
            nuan: "\u6696",
            nuenue: "\u8650",
            nue: "\u759f\u8c11",
            nuo: "\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518",
            ou: "\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026",
            pa: "\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62",
            pai: "\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e",
            pan: "\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52",
            pang: "\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004",
            pao: "\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1",
            pei: "\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708",
            pen: "\u55b7\u76c6\u6e53",
            peng: "\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db",
            pi: "\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94",
            pian: "\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41",
            piao: "\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5",
            pie: "\u6487\u77a5\u4e3f\u82e4\u6c15",
            pin: "\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6",
            ping: "\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86",
            po: "\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38",
            pou: "\u5256\u88d2\u8e23",
            pu: "\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c",
            qi: "\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92",
            qia: "\u6390\u6070\u6d3d\u845c",
            qian: "\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d",
            qiang: "\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4",
            qiao: "\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792",
            qie: "\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7",
            qin: "\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e",
            qing: "\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5",
            qiong: "\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e",
            qiu: "\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d",
            qu: "\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2",
            quan: "\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08",
            que: "\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab",
            qun: "\u88d9\u7fa4\u9021",
            ran: "\u7136\u71c3\u5189\u67d3\u82d2\u9aef",
            rang: "\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70",
            rao: "\u9976\u6270\u7ed5\u835b\u5a06\u6861",
            ruo: "\u60f9\u82e5\u5f31",
            re: "\u70ed\u504c",
            ren: "\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d",
            reng: "\u6254\u4ecd", ri: "\u65e5",
            rong: "\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e",
            rou: "\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3",
            ru: "\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5",
            ruan: "\u8f6f\u962e\u670a",
            rui: "\u854a\u745e\u9510\u82ae\u8564\u777f\u868b",
            run: "\u95f0\u6da6",
            sa: "\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2",
            sai: "\u816e\u9cc3\u585e\u8d5b\u567b",
            san: "\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730",
            sang: "\u6851\u55d3\u4e27\u6421\u78c9\u98a1",
            sao: "\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb",
            se: "\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51",
            sen: "\u68ee",
            seng: "\u50e7",
            sha: "\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8",
            shai: "\u7b5b\u6652\u917e",
            shan: "\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd",
            shang: "\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de",
            shao: "\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244",
            she: "\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d",
            shen: "\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703",
            sheng: "\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19",
            shi: "\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba",
            shou: "\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f",
            shu: "\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c",
            shua: "\u5237\u800d\u5530\u6dae",
            shuai: "\u6454\u8870\u7529\u5e05\u87c0",
            shuan: "\u6813\u62f4\u95e9",
            shuang: "\u971c\u53cc\u723d\u5b40",
            shui: "\u8c01\u6c34\u7761\u7a0e",
            shun: "\u542e\u77ac\u987a\u821c\u6042",
            shuo: "\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4",
            si: "\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25",
            song: "\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6",
            sou: "\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b",
            su: "\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23",
            suan: "\u9178\u849c\u7b97",
            sui: "\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762",
            sun: "\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc",
            suo: "\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7",
            ta: "\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93",
            tai: "\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90",
            tan: "\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983",
            tang: "\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3",
            thang: "\u5018\u8eba\u6dcc",
            theng: "\u8d9f\u70eb",
            tao: "\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955",
            te: "\u7279",
            teng: "\u85e4\u817e\u75bc\u8a8a\u6ed5",
            ti: "\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d",
            tian: "\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba",
            tiao: "\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6",
            tie: "\u8d34\u94c1\u5e16\u841c\u992e",
            ting: "\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706",
            tong: "\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c",
            tou: "\u5077\u6295\u5934\u900f\u4ea0",
            tu: "\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174",
            tuan: "\u6e4d\u56e2\u7583",
            tui: "\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a",
            tun: "\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80",
            tuo: "\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d",
            wa: "\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d",
            wai: "\u6b6a\u5916",
            wan: "\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2",
            wang: "\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d",
            wei: "\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94",
            wen: "\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef",
            weng: "\u55e1\u7fc1\u74ee\u84ca\u8579",
            wo: "\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c",
            wu: "\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f",
            xi: "\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37",
            xia: "\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0",
            xian: "\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9",
            xiang: "\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8",
            xiao: "\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48",
            xie: "\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e",
            xin: "\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b",
            xing: "\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e",
            xiong: "\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e",
            xiu: "\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9",
            xu: "\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191",
            xuan: "\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3",
            xue: "\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5",
            xun: "\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f",
            ya: "\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6",
            yan: "\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39",
            yang: "\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785",
            yao: "\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0",
            ye: "\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8",
            yi: "\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf",
            yin: "\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88",
            ying: "\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42",
            yo: "\u54df\u5537",
            yong: "\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954",
            you: "\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c",
            yu: "\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89",
            yuan: "\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b",
            yue: "\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba",
            yun: "\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32",
            za: "\u531d\u7838\u6742\u62f6\u5482",
            zai: "\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e",
            zan: "\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e",
            zang: "\u8d43\u810f\u846c\u5958\u6215\u81e7",
            zao: "\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b",
            ze: "\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234",
            zei: "\u8d3c",
            zen: "\u600e\u8c2e",
            zeng: "\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503",
            zha: "\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44",
            zhai: "\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826",
            zhan: "\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3",
            zhang: "\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1",
            zhao: "\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a",
            zhe: "\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d",
            zhen: "\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29",
            zheng: "\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d",
            zhi: "\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef",
            zhong: "\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35",
            zhou: "\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7",
            zhu: "\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88",
            zhua: "\u6293",
            zhuai: "\u62fd",
            zhuan: "\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b",
            zhuang: "\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c",
            zhui: "\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12",
            zhun: "\u8c06\u51c6",
            zhuo: "\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab",
            zi: "\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed",
            zong: "\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd",
            zou: "\u90b9\u8d70\u594f\u63cd\u9139\u9cb0",
            zu: "\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74",
            zuan: "\u94bb\u7e82\u6525\u7f35",
            zui: "\u5634\u9189\u6700\u7f6a",
            zun: "\u5c0a\u9075\u6499\u6a3d\u9cdf",
            zuo: "\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162",
            cou: "\u85ae\u6971\u8f8f\u8160",
            nang: "\u652e\u54dd\u56d4\u9995\u66e9",
            o: "\u5594",
            dia: "\u55f2",
            chuai: "\u562c\u81aa\u8e39",
            cen: "\u5c91\u6d94",
            diu: "\u94e5",
            nou: "\u8028",
            fou: "\u7f36",
            bia: "\u9adf"
        };
        //汉字转换为拼音
        this.toPinyin = function (string) {
            var temp = '';
            for (var i = 0; i < string.length; i++) {
                temp += this.translateCode(string[i]);
            }
            return temp;
        };
        this.translateCode = function (chinese) {
            for (var key in this.pinyin) {
                var value = this.pinyin[key];
                if (value.indexOf(chinese) != -1) {
                    return key;
                }
            }
        };
    }
    return Pinyin;
}());

//# sourceMappingURL=pinyin.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InternalAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InternalAddress = (function () {
    function InternalAddress(navCtrl, navParams, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.detailData = {};
        this.id = navParams.get('id');
        this.http.get("internalcontacts/v1/mobile/findByID/" + this.id, {}, 'CONTACT')
            .then(function (res) {
            _this.detailData = res.data;
        });
    }
    InternalAddress.prototype.showPrompt = function (phone) {
        var prompt = this.alertCtrl.create({
            title: this.detailData.phone,
            buttons: [
                {
                    text: '呼叫',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    InternalAddress.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad InternalAddress');
    };
    return InternalAddress;
}());
InternalAddress = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-internal-address',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\internal-address\internal-address.html"*/'\n<ion-header>\n\n  <ion-navbar color="energy">\n    <ion-buttons end>\n      <button ion-button>\n        在职\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="contactInternal">\n  <div id="inter">\n    <div class="person-top">\n      <ion-avatar class="avatar-head">\n        <img src="assets/imgs/contact_pic.png">\n        <ion-icon name="my-avatar" color="{{detailData.sex | sex}}" class="person"></ion-icon>\n      </ion-avatar>\n      <h2>{{detailData.username}}</h2>\n      <p class="post">{{detailData.department}} <span>{{detailData.position}}</span></p>\n    </div>\n  </div>\n  <div id="infoList">\n    <ion-list>\n      <ion-item class="item-list"> \n        <span>电话</span>\n        <span>{{detailData.phone}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>邮箱</span>\n        <span>{{detailData.email}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>员工编号</span>\n        <span>{{detailData.number}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>Q Q</span>\n        <span>{{detailData.qq}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>微信</span>\n        <span>{{detailData.weChat}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>集团号</span>\n        <span>{{detailData.bloc}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>备注</span>\n        <span>{{detailData.remark}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="bgColor" id="footer-btn">\n    <a ion-button class="email-btn" color="white">\n      <ion-icon name="mail" color="energy" class="mail"></ion-icon>\n      邮件\n    </a>\n    <a ion-button class="email-btn" color="white" (click)="showPrompt()">\n        <ion-icon name="call" color="green" class="mail"></ion-icon>\n      电话\n    </a>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\internal-address\internal-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], InternalAddress);

//# sourceMappingURL=internal-address.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionListComponent = (function () {
    function AccordionListComponent(renderer) {
        this.renderer = renderer;
        this.headerColor = '#F53D3D';
        this.textColor = '#FFF';
        this.contentColor = '#F9F9F9';
        this.hasMargin = true;
        this.expanded = false;
    }
    AccordionListComponent.prototype.ngAfterViewInit = function () {
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
        this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
    };
    AccordionListComponent.prototype.toggleAccordion = function () {
        this.expanded = !this.expanded;
        var newHeight = this.expanded ? '100%' : '0px';
        this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
    };
    return AccordionListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "headerColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "textColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "contentColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionListComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AccordionListComponent.prototype, "hasMargin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('abc'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], AccordionListComponent.prototype, "elementView", void 0);
AccordionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'accordion-list',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\accordion-list\accordion-list.html"*/'<ion-list class="accordion-list">\n\n  <ion-list-header no-lines no-padding>\n\n    <button ion-item detail-none\n\n            [style.background]="headerColor"\n\n            (click)="toggleAccordion()"\n\n            class="accordion-header"\n\n            [class.active]="expanded">\n\n        <ion-icon\n\n          item-left\n\n          name="ios-arrow-forward">\n\n        </ion-icon>\n\n        {{ title }}\n\n    </button>\n\n    <section #abc\n\n             [style.background]="contentColor"\n\n             [class.active]="expanded"\n\n             class="accordion-content">\n\n      <ng-content></ng-content>\n\n    </section>\n\n  </ion-list-header>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\accordion-list\accordion-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], AccordionListComponent);

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyRadioComponent = (function () {
    function MyRadioComponent(renderer) {
        this.renderer = renderer;
        this.radioChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(MyRadioComponent.prototype, "radio", {
        get: function () {
            return this.radioValue;
        },
        set: function (val) {
            this.radioValue = val;
            this.radioChange.emit(this.radioValue);
        },
        enumerable: true,
        configurable: true
    });
    MyRadioComponent.prototype.ngAfterViewInit = function () {
    };
    return MyRadioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MyRadioComponent.prototype, "buttonColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MyRadioComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MyRadioComponent.prototype, "option1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MyRadioComponent.prototype, "option2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MyRadioComponent.prototype, "radioChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MyRadioComponent.prototype, "radio", null);
MyRadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-radio',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\my-radio\my-radio.html"*/'<ion-item >\n\n    <h3>{{title || "是否通过"}}</h3> \n\n    <div item-right class="dpflex" #abc>\n\n        <span class="radio dpflex" (click)="radio = true"><i *ngIf=\'radio\' [style.background]="buttonColor"></i></span>\n\n        <span> {{option1 || "通过"}}</span>\n\n        <span class="radio dpflex" (click)="radio = false"><i *ngIf=\'!radio\'></i></span>\n\n        <span>{{option2 || "不通过"}}</span>\n\n    </div>  \n\n  </ion-item>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\my-radio\my-radio.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MyRadioComponent);

//# sourceMappingURL=my-radio.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyBackComponent = (function () {
    function MyBackComponent() {
    }
    MyBackComponent.prototype.ngAfterViewInit = function () {
    };
    return MyBackComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MyBackComponent.prototype, "text", void 0);
MyBackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-back',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\my-back\my-back.html"*/'<ion-buttons start>\n\n    <button ion-button>\n\n    <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n    <span color="white">{{ text || \'返回主页\'}}</span>\n\n    </button>\n\n</ion-buttons>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\my-back\my-back.html"*/
    }),
    __metadata("design:paramtypes", [])
], MyBackComponent);

//# sourceMappingURL=my-back.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewReasonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewReasonComponent = (function () {
    function ReviewReasonComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReviewReasonComponent.prototype.ionViewDidLoad = function () {
    };
    return ReviewReasonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ReviewReasonComponent.prototype, "data", void 0);
ReviewReasonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'review-reason',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\reviewReason\reviewReason.html"*/'<ion-header>\n\n    \n\n  <ion-navbar color="energy" >\n\n    <ion-title>审核过程/原因</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content id="checkReason">\n\n  <ion-list no-lines id="pass">\n\n    <ul class="pass-list">\n\n      <li *ngFor=" let item of data">\n\n        <p class="date">{{item.auditTime}}</p>\n\n        <p class="pass-process" [innerHTML]="item.procing"></p>\n\n      </li>\n\n    </ul>\n\n  </ion-list>\n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\reviewReason\reviewReason.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ReviewReasonComponent);

//# sourceMappingURL=reviewReason.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreasSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__areas__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreasSelect = (function () {
    function AreasSelect(Picker) {
        this.Picker = Picker;
        this.provinceCol = 0; // 省列
        this.cityCol = 0; // 市列
        this.regionCol = 0; // 区列
        this.isOpen = false; //  是否被创建
        this.value = ''; // 选中后的数据
        this.citiesData = __WEBPACK_IMPORTED_MODULE_2__areas__["a" /* areasList */]; // 地区数据(默认为areas.ts的数据)
        this.cancelText = '关闭'; // 关闭按钮文本
        this.doneText = '完成'; // 完成按钮文本
        this.separator = ''; // 数据衔接模式
        this.level = 3; // 等级设置 最高为三级
        /**
         *  关闭时触发的事件
         *  没有值返回
         * @type {EventEmitter}
         */
        this.cancel = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](); // 关闭事件
        /**
         *  完成时触发的事件
         *  返回值为obj
         *  obj = {data: object,value: string} data为对应的省市区和编码
         * @type {EventEmitter}
         */
        this.done = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](); // 完成事件
    }
    /**
     *  打开地区选择器
     *  基本思路
     *  1.创建picker
     * 2. 先把数据处理成省市区分开的数组
     * 3. 将数据以列的形式给到picker
     * 4. 设置数据显示样式（picker）
     * 5. 生成picker
     */
    AreasSelect.prototype.open = function () {
        var _this = this;
        var pickerOptions = {
            buttons: [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: function () {
                        _this.cancel.emit(null);
                    }
                },
                {
                    text: this.doneText,
                    handler: function (data) {
                        _this.onChange(data);
                        _this.done.emit({
                            data: data,
                            value: _this.value
                        });
                    }
                }
            ]
        };
        this.picker = this.Picker.create(pickerOptions);
        this.generate(); // 加载
        this.validate(this.picker); // 渲染
        this.picker.ionChange.subscribe(function () {
            _this.validate(_this.picker);
        });
        // 生成
        this.picker.present(pickerOptions).then(function () {
            _this.pickerCmp = _this.picker.instance;
            _this.pickerColumnCmps = _this.pickerCmp._cols.toArray();
            _this.pickerColumnCmps.forEach(function (col) {
                return col.lastIndex = -1;
            });
        });
        this.isOpen = true;
        this.picker.onDidDismiss(function () {
            this.isOpen = false;
        });
    };
    /** 对数据进行处理，并移交给picker
     *
     */
    AreasSelect.prototype.generate = function () {
        var values = this.value.toString().split(this.separator);
        // Add province data to picker
        var provinceCol = {
            name: 'province',
            options: this.citiesData.map(function (province) {
                return { text: province.name, value: province.code, disabled: false };
            }),
            selectedIndex: 0
        };
        var provinceIndex = this.citiesData.findIndex(function (option) {
            return option.name == values[0];
        });
        provinceIndex = provinceIndex === -1 ? 0 : provinceIndex;
        provinceCol.selectedIndex = provinceIndex;
        this.picker.addColumn(provinceCol);
        // Add city data to picker
        var cityColData = this.citiesData[provinceCol.selectedIndex].children;
        var cityCol;
        if (this.level >= 2) {
            cityCol = {
                name: 'city',
                options: cityColData.map(function (city) {
                    return { text: city.name, value: city.code, disabled: false };
                }),
                selectedIndex: 0
            };
            var cityIndex = cityColData.findIndex(function (option) {
                return option.name == values[1];
            });
            cityIndex = cityIndex === -1 ? 0 : cityIndex;
            cityCol.selectedIndex = cityIndex;
            this.picker.addColumn(cityCol);
        }
        // Add region data to picker
        var regionData, regionCol;
        if (this.level === 3) {
            regionData = this.citiesData[provinceCol.selectedIndex].children[cityCol.selectedIndex].children;
            regionCol = {
                name: 'region',
                options: regionData.map(function (city) {
                    return { text: city.name, value: city.code, disabled: false };
                }),
                selectedIndex: 0
            };
            var regionIndex = regionData.findIndex(function (option) {
                return option.name == values[2];
            });
            regionIndex = regionIndex === -1 ? 0 : regionIndex;
            regionCol.selectedIndex = regionIndex;
            this.picker.addColumn(regionCol);
        }
        this.divyColumns(this.picker);
    };
    /**设置数据显示样式
     * @param picker
     */
    AreasSelect.prototype.divyColumns = function (picker) {
        var pickerColumns = this.picker.getColumns(); // 获取列数据
        var columns = [];
        pickerColumns.forEach(function (col, i) {
            columns.push(0);
            col.options.forEach(function (opt) {
                if (opt && opt.text && opt.text.length > columns[i]) {
                    columns[i] = opt.text.length;
                }
            });
        });
        if (columns.length === 2) {
            var width = Math.max(columns[0], columns[1]);
            pickerColumns[0].align = 'right';
            pickerColumns[1].align = 'left';
            pickerColumns[0].optionsWidth = pickerColumns[1].optionsWidth = width * 17 + "px";
        }
        else if (columns.length === 3) {
            var width = Math.max(columns[0], columns[2]);
            pickerColumns[0].align = 'right';
            pickerColumns[1].columnWidth = columns[1] * 33 + "px";
            pickerColumns[0].optionsWidth = pickerColumns[2].optionsWidth = width * 17 + "px";
            pickerColumns[2].align = 'left';
        }
    };
    /**
     * 验证数据
     * @param picker
     */
    AreasSelect.prototype.validate = function (picker) {
        var _this = this;
        var columns = picker.getColumns();
        var provinceCol = columns[0];
        var cityCol = columns[1];
        var regionCol = columns[2];
        if (cityCol && this.provinceCol != provinceCol.selectedIndex) {
            cityCol.selectedIndex = 0;
            var cityColData = this.citiesData[provinceCol.selectedIndex].children;
            cityCol.options = cityColData.map(function (city) {
                return { text: city.name, value: city.code, disabled: false };
            });
            if (this.pickerColumnCmps && cityCol.options.length > 0) {
                setTimeout(function () {
                    return _this.pickerColumnCmps[1].setSelected(0, 100);
                }, 0);
            }
        }
        if (regionCol && (this.cityCol != cityCol.selectedIndex || this.provinceCol != provinceCol.selectedIndex)) {
            var regionData = this.citiesData[provinceCol.selectedIndex].children[cityCol.selectedIndex].children;
            regionCol.selectedIndex = 0;
            regionCol.options = regionData.map(function (city) {
                return { text: city.name, value: city.code, disabled: false };
            });
            if (this.pickerColumnCmps && regionCol.options.length > 0) {
                setTimeout(function () {
                    return _this.pickerColumnCmps[2].setSelected(0, 100);
                }, 0);
            }
        }
        this.provinceCol = provinceCol.selectedIndex;
        this.cityCol = cityCol ? cityCol.selectedIndex : 0;
        this.regionCol = regionCol ? regionCol.selectedIndex : 0;
    };
    /**
     *  设置value
     * @param newData
     */
    AreasSelect.prototype.setValue = function (newData) {
        if (newData === null || newData === undefined) {
            this.value = '';
        }
        else {
            this.value = newData;
        }
    };
    /**
     *  获取value值
     * @returns {string}
     */
    AreasSelect.prototype.getValue = function () {
        return this.value;
    };
    /**
     *  改变value值的显示
     * @param val
     */
    AreasSelect.prototype.onChange = function (val) {
        this.setValue(this.getString(val));
    };
    /**
     *  获取当前选择的地区数据
     * @param newData
     * @returns {string}
     */
    AreasSelect.prototype.getString = function (newData) {
        if (newData['city']) {
            if (newData['region']) {
                return "" + newData['province'].text + this.separator + (newData['city'].text || '') + this.separator + (newData['region'].text || '');
            }
            return "" + newData['province'].text + this.separator + (newData['city'].text || '');
        }
        return "" + newData['province'].text;
    };
    return AreasSelect;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AreasSelect.prototype, "citiesData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AreasSelect.prototype, "cancelText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AreasSelect.prototype, "doneText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AreasSelect.prototype, "separator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AreasSelect.prototype, "level", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], AreasSelect.prototype, "cancel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], AreasSelect.prototype, "done", void 0);
AreasSelect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'areas-select',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\test\test.html"*/'<div>\n\n    \n\n</div>'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\components\test\test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["PickerController"]])
], AreasSelect);

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areasList; });
var areasList = [
    {
        "code": "111",
        "name": "北京市",
        "children": [
            {
                "code": "11101",
                "name": "北京市",
                "children": [
                    {
                        "code": "1110101",
                        "name": "东城区"
                    },
                    {
                        "code": "1110102",
                        "name": "西城区"
                    },
                    {
                        "code": "1110105",
                        "name": "朝阳区"
                    },
                    {
                        "code": "1110106",
                        "name": "丰台区"
                    },
                    {
                        "code": "1110107",
                        "name": "石景山区"
                    },
                    {
                        "code": "1110108",
                        "name": "海淀区"
                    },
                    {
                        "code": "1110109",
                        "name": "门头沟区"
                    },
                    {
                        "code": "1110111",
                        "name": "房山区"
                    },
                    {
                        "code": "1110112",
                        "name": "通州区"
                    },
                    {
                        "code": "1110113",
                        "name": "顺义区"
                    },
                    {
                        "code": "1110114",
                        "name": "昌平区"
                    },
                    {
                        "code": "1110115",
                        "name": "大兴区"
                    },
                    {
                        "code": "1110116",
                        "name": "怀柔区"
                    },
                    {
                        "code": "1110117",
                        "name": "平谷区"
                    },
                    {
                        "code": "1110118",
                        "name": "密云区"
                    },
                    {
                        "code": "1110119",
                        "name": "延庆区"
                    }
                ]
            }
        ]
    },
    {
        "code": "112",
        "name": "天津市",
        "children": [
            {
                "code": "11201",
                "name": "天津市",
                "children": [
                    {
                        "code": "1120101",
                        "name": "和平区"
                    },
                    {
                        "code": "1120102",
                        "name": "河东区"
                    },
                    {
                        "code": "1120103",
                        "name": "河西区"
                    },
                    {
                        "code": "1120104",
                        "name": "南开区"
                    },
                    {
                        "code": "1120105",
                        "name": "河北区"
                    },
                    {
                        "code": "1120106",
                        "name": "红桥区"
                    },
                    {
                        "code": "1120110",
                        "name": "东丽区"
                    },
                    {
                        "code": "1120111",
                        "name": "西青区"
                    },
                    {
                        "code": "1120112",
                        "name": "津南区"
                    },
                    {
                        "code": "1120113",
                        "name": "北辰区"
                    },
                    {
                        "code": "1120114",
                        "name": "武清区"
                    },
                    {
                        "code": "1120115",
                        "name": "宝坻区"
                    },
                    {
                        "code": "1120116",
                        "name": "滨海新区"
                    },
                    {
                        "code": "1120117",
                        "name": "宁河区"
                    },
                    {
                        "code": "1120118",
                        "name": "静海区"
                    }
                ]
            },
            {
                "code": "11202",
                "name": "天津市县",
                "children": [
                    {
                        "code": "1120225",
                        "name": "蓟县"
                    }
                ]
            }
        ]
    },
    {
        "code": "113",
        "name": "河北省",
        "children": [
            {
                "code": "11301",
                "name": "石家庄市",
                "children": [
                    {
                        "code": "1130102",
                        "name": "长安区"
                    },
                    {
                        "code": "1130104",
                        "name": "桥西区"
                    },
                    {
                        "code": "1130105",
                        "name": "新华区"
                    },
                    {
                        "code": "1130107",
                        "name": "井陉矿区"
                    },
                    {
                        "code": "1130108",
                        "name": "裕华区"
                    },
                    {
                        "code": "1130109",
                        "name": "藁城区"
                    },
                    {
                        "code": "1130110",
                        "name": "鹿泉区"
                    },
                    {
                        "code": "1130111",
                        "name": "栾城区"
                    },
                    {
                        "code": "1130121",
                        "name": "井陉县"
                    },
                    {
                        "code": "1130123",
                        "name": "正定县"
                    },
                    {
                        "code": "1130125",
                        "name": "行唐县"
                    },
                    {
                        "code": "1130126",
                        "name": "灵寿县"
                    },
                    {
                        "code": "1130127",
                        "name": "高邑县"
                    },
                    {
                        "code": "1130128",
                        "name": "深泽县"
                    },
                    {
                        "code": "1130129",
                        "name": "赞皇县"
                    },
                    {
                        "code": "1130130",
                        "name": "无极县"
                    },
                    {
                        "code": "1130131",
                        "name": "平山县"
                    },
                    {
                        "code": "1130132",
                        "name": "元氏县"
                    },
                    {
                        "code": "1130133",
                        "name": "赵县"
                    },
                    {
                        "code": "1130181",
                        "name": "辛集市"
                    },
                    {
                        "code": "1130183",
                        "name": "晋州市"
                    },
                    {
                        "code": "1130184",
                        "name": "新乐市"
                    }
                ]
            },
            {
                "code": "11302",
                "name": "唐山市",
                "children": [
                    {
                        "code": "1130202",
                        "name": "路南区"
                    },
                    {
                        "code": "1130203",
                        "name": "路北区"
                    },
                    {
                        "code": "1130204",
                        "name": "古冶区"
                    },
                    {
                        "code": "1130205",
                        "name": "开平区"
                    },
                    {
                        "code": "1130207",
                        "name": "丰南区"
                    },
                    {
                        "code": "1130208",
                        "name": "丰润区"
                    },
                    {
                        "code": "1130209",
                        "name": "曹妃甸区"
                    },
                    {
                        "code": "1130223",
                        "name": "滦县"
                    },
                    {
                        "code": "1130224",
                        "name": "滦南县"
                    },
                    {
                        "code": "1130225",
                        "name": "乐亭县"
                    },
                    {
                        "code": "1130227",
                        "name": "迁西县"
                    },
                    {
                        "code": "1130229",
                        "name": "玉田县"
                    },
                    {
                        "code": "1130281",
                        "name": "遵化市"
                    },
                    {
                        "code": "1130283",
                        "name": "迁安市"
                    }
                ]
            },
            {
                "code": "11303",
                "name": "秦皇岛市",
                "children": [
                    {
                        "code": "1130302",
                        "name": "海港区"
                    },
                    {
                        "code": "1130303",
                        "name": "山海关区"
                    },
                    {
                        "code": "1130304",
                        "name": "北戴河区"
                    },
                    {
                        "code": "1130306",
                        "name": "抚宁区"
                    },
                    {
                        "code": "1130321",
                        "name": "青龙满族自治县"
                    },
                    {
                        "code": "1130322",
                        "name": "昌黎县"
                    },
                    {
                        "code": "1130324",
                        "name": "卢龙县"
                    }
                ]
            },
            {
                "code": "11304",
                "name": "邯郸市",
                "children": [
                    {
                        "code": "1130402",
                        "name": "邯山区"
                    },
                    {
                        "code": "1130403",
                        "name": "丛台区"
                    },
                    {
                        "code": "1130404",
                        "name": "复兴区"
                    },
                    {
                        "code": "1130406",
                        "name": "峰峰矿区"
                    },
                    {
                        "code": "1130421",
                        "name": "邯郸县"
                    },
                    {
                        "code": "1130423",
                        "name": "临漳县"
                    },
                    {
                        "code": "1130424",
                        "name": "成安县"
                    },
                    {
                        "code": "1130425",
                        "name": "大名县"
                    },
                    {
                        "code": "1130426",
                        "name": "涉县"
                    },
                    {
                        "code": "1130427",
                        "name": "磁县"
                    },
                    {
                        "code": "1130428",
                        "name": "肥乡县"
                    },
                    {
                        "code": "1130429",
                        "name": "永年县"
                    },
                    {
                        "code": "1130430",
                        "name": "邱县"
                    },
                    {
                        "code": "1130431",
                        "name": "鸡泽县"
                    },
                    {
                        "code": "1130432",
                        "name": "广平县"
                    },
                    {
                        "code": "1130433",
                        "name": "馆陶县"
                    },
                    {
                        "code": "1130434",
                        "name": "魏县"
                    },
                    {
                        "code": "1130435",
                        "name": "曲周县"
                    },
                    {
                        "code": "1130481",
                        "name": "武安市"
                    }
                ]
            },
            {
                "code": "11305",
                "name": "邢台市",
                "children": [
                    {
                        "code": "1130502",
                        "name": "桥东区"
                    },
                    {
                        "code": "1130503",
                        "name": "桥西区"
                    },
                    {
                        "code": "1130521",
                        "name": "邢台县"
                    },
                    {
                        "code": "1130522",
                        "name": "临城县"
                    },
                    {
                        "code": "1130523",
                        "name": "内丘县"
                    },
                    {
                        "code": "1130524",
                        "name": "柏乡县"
                    },
                    {
                        "code": "1130525",
                        "name": "隆尧县"
                    },
                    {
                        "code": "1130526",
                        "name": "任县"
                    },
                    {
                        "code": "1130527",
                        "name": "南和县"
                    },
                    {
                        "code": "1130528",
                        "name": "宁晋县"
                    },
                    {
                        "code": "1130529",
                        "name": "巨鹿县"
                    },
                    {
                        "code": "1130530",
                        "name": "新河县"
                    },
                    {
                        "code": "1130531",
                        "name": "广宗县"
                    },
                    {
                        "code": "1130532",
                        "name": "平乡县"
                    },
                    {
                        "code": "1130533",
                        "name": "威县"
                    },
                    {
                        "code": "1130534",
                        "name": "清河县"
                    },
                    {
                        "code": "1130535",
                        "name": "临西县"
                    },
                    {
                        "code": "1130581",
                        "name": "南宫市"
                    },
                    {
                        "code": "1130582",
                        "name": "沙河市"
                    }
                ]
            },
            {
                "code": "11306",
                "name": "保定市",
                "children": [
                    {
                        "code": "1130602",
                        "name": "竞秀区"
                    },
                    {
                        "code": "1130604",
                        "name": "南市区"
                    },
                    {
                        "code": "1130606",
                        "name": "莲池区"
                    },
                    {
                        "code": "1130607",
                        "name": "满城区"
                    },
                    {
                        "code": "1130608",
                        "name": "清苑区"
                    },
                    {
                        "code": "1130609",
                        "name": "徐水区"
                    },
                    {
                        "code": "1130623",
                        "name": "涞水县"
                    },
                    {
                        "code": "1130624",
                        "name": "阜平县"
                    },
                    {
                        "code": "1130626",
                        "name": "定兴县"
                    },
                    {
                        "code": "1130627",
                        "name": "唐县"
                    },
                    {
                        "code": "1130628",
                        "name": "高阳县"
                    },
                    {
                        "code": "1130629",
                        "name": "容城县"
                    },
                    {
                        "code": "1130630",
                        "name": "涞源县"
                    },
                    {
                        "code": "1130631",
                        "name": "望都县"
                    },
                    {
                        "code": "1130632",
                        "name": "安新县"
                    },
                    {
                        "code": "1130633",
                        "name": "易县"
                    },
                    {
                        "code": "1130634",
                        "name": "曲阳县"
                    },
                    {
                        "code": "1130635",
                        "name": "蠡县"
                    },
                    {
                        "code": "1130636",
                        "name": "顺平县"
                    },
                    {
                        "code": "1130637",
                        "name": "博野县"
                    },
                    {
                        "code": "1130638",
                        "name": "雄县"
                    },
                    {
                        "code": "1130681",
                        "name": "涿州市"
                    },
                    {
                        "code": "1130682",
                        "name": "定州市"
                    },
                    {
                        "code": "1130683",
                        "name": "安国市"
                    },
                    {
                        "code": "1130684",
                        "name": "高碑店市"
                    }
                ]
            },
            {
                "code": "11307",
                "name": "张家口市",
                "children": [
                    {
                        "code": "1130702",
                        "name": "桥东区"
                    },
                    {
                        "code": "1130703",
                        "name": "桥西区"
                    },
                    {
                        "code": "1130705",
                        "name": "宣化区"
                    },
                    {
                        "code": "1130706",
                        "name": "下花园区"
                    },
                    {
                        "code": "1130721",
                        "name": "宣化县"
                    },
                    {
                        "code": "1130722",
                        "name": "张北县"
                    },
                    {
                        "code": "1130723",
                        "name": "康保县"
                    },
                    {
                        "code": "1130724",
                        "name": "沽源县"
                    },
                    {
                        "code": "1130725",
                        "name": "尚义县"
                    },
                    {
                        "code": "1130726",
                        "name": "蔚县"
                    },
                    {
                        "code": "1130727",
                        "name": "阳原县"
                    },
                    {
                        "code": "1130728",
                        "name": "怀安县"
                    },
                    {
                        "code": "1130729",
                        "name": "万全县"
                    },
                    {
                        "code": "1130730",
                        "name": "怀来县"
                    },
                    {
                        "code": "1130731",
                        "name": "涿鹿县"
                    },
                    {
                        "code": "1130732",
                        "name": "赤城县"
                    },
                    {
                        "code": "1130733",
                        "name": "崇礼县"
                    }
                ]
            },
            {
                "code": "11308",
                "name": "承德市",
                "children": [
                    {
                        "code": "1130802",
                        "name": "双桥区"
                    },
                    {
                        "code": "1130803",
                        "name": "双滦区"
                    },
                    {
                        "code": "1130804",
                        "name": "鹰手营子矿区"
                    },
                    {
                        "code": "1130821",
                        "name": "承德县"
                    },
                    {
                        "code": "1130822",
                        "name": "兴隆县"
                    },
                    {
                        "code": "1130823",
                        "name": "平泉县"
                    },
                    {
                        "code": "1130824",
                        "name": "滦平县"
                    },
                    {
                        "code": "1130825",
                        "name": "隆化县"
                    },
                    {
                        "code": "1130826",
                        "name": "丰宁满族自治县"
                    },
                    {
                        "code": "1130827",
                        "name": "宽城满族自治县"
                    },
                    {
                        "code": "1130828",
                        "name": "围场满族蒙古族自治县"
                    }
                ]
            },
            {
                "code": "11309",
                "name": "沧州市",
                "children": [
                    {
                        "code": "1130902",
                        "name": "新华区"
                    },
                    {
                        "code": "1130903",
                        "name": "运河区"
                    },
                    {
                        "code": "1130921",
                        "name": "沧县"
                    },
                    {
                        "code": "1130922",
                        "name": "青县"
                    },
                    {
                        "code": "1130923",
                        "name": "东光县"
                    },
                    {
                        "code": "1130924",
                        "name": "海兴县"
                    },
                    {
                        "code": "1130925",
                        "name": "盐山县"
                    },
                    {
                        "code": "1130926",
                        "name": "肃宁县"
                    },
                    {
                        "code": "1130927",
                        "name": "南皮县"
                    },
                    {
                        "code": "1130928",
                        "name": "吴桥县"
                    },
                    {
                        "code": "1130929",
                        "name": "献县"
                    },
                    {
                        "code": "1130930",
                        "name": "孟村回族自治县"
                    },
                    {
                        "code": "1130981",
                        "name": "泊头市"
                    },
                    {
                        "code": "1130982",
                        "name": "任丘市"
                    },
                    {
                        "code": "1130983",
                        "name": "黄骅市"
                    },
                    {
                        "code": "1130984",
                        "name": "河间市"
                    }
                ]
            },
            {
                "code": "11310",
                "name": "廊坊市",
                "children": [
                    {
                        "code": "1131002",
                        "name": "安次区"
                    },
                    {
                        "code": "1131003",
                        "name": "广阳区"
                    },
                    {
                        "code": "1131022",
                        "name": "固安县"
                    },
                    {
                        "code": "1131023",
                        "name": "永清县"
                    },
                    {
                        "code": "1131024",
                        "name": "香河县"
                    },
                    {
                        "code": "1131025",
                        "name": "大城县"
                    },
                    {
                        "code": "1131026",
                        "name": "文安县"
                    },
                    {
                        "code": "1131028",
                        "name": "大厂回族自治县"
                    },
                    {
                        "code": "1131081",
                        "name": "霸州市"
                    },
                    {
                        "code": "1131082",
                        "name": "三河市"
                    }
                ]
            },
            {
                "code": "11311",
                "name": "衡水市",
                "children": [
                    {
                        "code": "1131102",
                        "name": "桃城区"
                    },
                    {
                        "code": "1131121",
                        "name": "枣强县"
                    },
                    {
                        "code": "1131122",
                        "name": "武邑县"
                    },
                    {
                        "code": "1131123",
                        "name": "武强县"
                    },
                    {
                        "code": "1131124",
                        "name": "饶阳县"
                    },
                    {
                        "code": "1131125",
                        "name": "安平县"
                    },
                    {
                        "code": "1131126",
                        "name": "故城县"
                    },
                    {
                        "code": "1131127",
                        "name": "景县"
                    },
                    {
                        "code": "1131128",
                        "name": "阜城县"
                    },
                    {
                        "code": "1131181",
                        "name": "冀州市"
                    },
                    {
                        "code": "1131182",
                        "name": "深州市"
                    }
                ]
            }
        ]
    },
    {
        "code": "114",
        "name": "山西省",
        "children": [
            {
                "code": "11401",
                "name": "太原市",
                "children": [
                    {
                        "code": "1140105",
                        "name": "小店区"
                    },
                    {
                        "code": "1140106",
                        "name": "迎泽区"
                    },
                    {
                        "code": "1140107",
                        "name": "杏花岭区"
                    },
                    {
                        "code": "1140108",
                        "name": "尖草坪区"
                    },
                    {
                        "code": "1140109",
                        "name": "万柏林区"
                    },
                    {
                        "code": "1140110",
                        "name": "晋源区"
                    },
                    {
                        "code": "1140121",
                        "name": "清徐县"
                    },
                    {
                        "code": "1140122",
                        "name": "阳曲县"
                    },
                    {
                        "code": "1140123",
                        "name": "娄烦县"
                    },
                    {
                        "code": "1140181",
                        "name": "古交市"
                    }
                ]
            },
            {
                "code": "11402",
                "name": "大同市",
                "children": [
                    {
                        "code": "1140202",
                        "name": "城区"
                    },
                    {
                        "code": "1140203",
                        "name": "矿区"
                    },
                    {
                        "code": "1140211",
                        "name": "南郊区"
                    },
                    {
                        "code": "1140212",
                        "name": "新荣区"
                    },
                    {
                        "code": "1140221",
                        "name": "阳高县"
                    },
                    {
                        "code": "1140222",
                        "name": "天镇县"
                    },
                    {
                        "code": "1140223",
                        "name": "广灵县"
                    },
                    {
                        "code": "1140224",
                        "name": "灵丘县"
                    },
                    {
                        "code": "1140225",
                        "name": "浑源县"
                    },
                    {
                        "code": "1140226",
                        "name": "左云县"
                    },
                    {
                        "code": "1140227",
                        "name": "大同县"
                    }
                ]
            },
            {
                "code": "11403",
                "name": "阳泉市",
                "children": [
                    {
                        "code": "1140302",
                        "name": "城区"
                    },
                    {
                        "code": "1140303",
                        "name": "矿区"
                    },
                    {
                        "code": "1140311",
                        "name": "郊区"
                    },
                    {
                        "code": "1140321",
                        "name": "平定县"
                    },
                    {
                        "code": "1140322",
                        "name": "盂县"
                    }
                ]
            },
            {
                "code": "11404",
                "name": "长治市",
                "children": [
                    {
                        "code": "1140402",
                        "name": "城区"
                    },
                    {
                        "code": "1140411",
                        "name": "郊区"
                    },
                    {
                        "code": "1140421",
                        "name": "长治县"
                    },
                    {
                        "code": "1140423",
                        "name": "襄垣县"
                    },
                    {
                        "code": "1140424",
                        "name": "屯留县"
                    },
                    {
                        "code": "1140425",
                        "name": "平顺县"
                    },
                    {
                        "code": "1140426",
                        "name": "黎城县"
                    },
                    {
                        "code": "1140427",
                        "name": "壶关县"
                    },
                    {
                        "code": "1140428",
                        "name": "长子县"
                    },
                    {
                        "code": "1140429",
                        "name": "武乡县"
                    },
                    {
                        "code": "1140430",
                        "name": "沁县"
                    },
                    {
                        "code": "1140431",
                        "name": "沁源县"
                    },
                    {
                        "code": "1140481",
                        "name": "潞城市"
                    }
                ]
            },
            {
                "code": "11405",
                "name": "晋城市",
                "children": [
                    {
                        "code": "1140502",
                        "name": "城区"
                    },
                    {
                        "code": "1140521",
                        "name": "沁水县"
                    },
                    {
                        "code": "1140522",
                        "name": "阳城县"
                    },
                    {
                        "code": "1140524",
                        "name": "陵川县"
                    },
                    {
                        "code": "1140525",
                        "name": "泽州县"
                    },
                    {
                        "code": "1140581",
                        "name": "高平市"
                    }
                ]
            },
            {
                "code": "11406",
                "name": "朔州市",
                "children": [
                    {
                        "code": "1140602",
                        "name": "朔城区"
                    },
                    {
                        "code": "1140603",
                        "name": "平鲁区"
                    },
                    {
                        "code": "1140621",
                        "name": "山阴县"
                    },
                    {
                        "code": "1140622",
                        "name": "应县"
                    },
                    {
                        "code": "1140623",
                        "name": "右玉县"
                    },
                    {
                        "code": "1140624",
                        "name": "怀仁县"
                    }
                ]
            },
            {
                "code": "11407",
                "name": "晋中市",
                "children": [
                    {
                        "code": "1140702",
                        "name": "榆次区"
                    },
                    {
                        "code": "1140721",
                        "name": "榆社县"
                    },
                    {
                        "code": "1140722",
                        "name": "左权县"
                    },
                    {
                        "code": "1140723",
                        "name": "和顺县"
                    },
                    {
                        "code": "1140724",
                        "name": "昔阳县"
                    },
                    {
                        "code": "1140725",
                        "name": "寿阳县"
                    },
                    {
                        "code": "1140726",
                        "name": "太谷县"
                    },
                    {
                        "code": "1140727",
                        "name": "祁县"
                    },
                    {
                        "code": "1140728",
                        "name": "平遥县"
                    },
                    {
                        "code": "1140729",
                        "name": "灵石县"
                    },
                    {
                        "code": "1140781",
                        "name": "介休市"
                    }
                ]
            },
            {
                "code": "11408",
                "name": "运城市",
                "children": [
                    {
                        "code": "1140802",
                        "name": "盐湖区"
                    },
                    {
                        "code": "1140821",
                        "name": "临猗县"
                    },
                    {
                        "code": "1140822",
                        "name": "万荣县"
                    },
                    {
                        "code": "1140823",
                        "name": "闻喜县"
                    },
                    {
                        "code": "1140824",
                        "name": "稷山县"
                    },
                    {
                        "code": "1140825",
                        "name": "新绛县"
                    },
                    {
                        "code": "1140826",
                        "name": "绛县"
                    },
                    {
                        "code": "1140827",
                        "name": "垣曲县"
                    },
                    {
                        "code": "1140828",
                        "name": "夏县"
                    },
                    {
                        "code": "1140829",
                        "name": "平陆县"
                    },
                    {
                        "code": "1140830",
                        "name": "芮城县"
                    },
                    {
                        "code": "1140881",
                        "name": "永济市"
                    },
                    {
                        "code": "1140882",
                        "name": "河津市"
                    }
                ]
            },
            {
                "code": "11409",
                "name": "忻州市",
                "children": [
                    {
                        "code": "1140902",
                        "name": "忻府区"
                    },
                    {
                        "code": "1140921",
                        "name": "定襄县"
                    },
                    {
                        "code": "1140922",
                        "name": "五台县"
                    },
                    {
                        "code": "1140923",
                        "name": "代县"
                    },
                    {
                        "code": "1140924",
                        "name": "繁峙县"
                    },
                    {
                        "code": "1140925",
                        "name": "宁武县"
                    },
                    {
                        "code": "1140926",
                        "name": "静乐县"
                    },
                    {
                        "code": "1140927",
                        "name": "神池县"
                    },
                    {
                        "code": "1140928",
                        "name": "五寨县"
                    },
                    {
                        "code": "1140929",
                        "name": "岢岚县"
                    },
                    {
                        "code": "1140930",
                        "name": "河曲县"
                    },
                    {
                        "code": "1140931",
                        "name": "保德县"
                    },
                    {
                        "code": "1140932",
                        "name": "偏关县"
                    },
                    {
                        "code": "1140981",
                        "name": "原平市"
                    }
                ]
            },
            {
                "code": "11410",
                "name": "临汾市",
                "children": [
                    {
                        "code": "1141002",
                        "name": "尧都区"
                    },
                    {
                        "code": "1141021",
                        "name": "曲沃县"
                    },
                    {
                        "code": "1141022",
                        "name": "翼城县"
                    },
                    {
                        "code": "1141023",
                        "name": "襄汾县"
                    },
                    {
                        "code": "1141024",
                        "name": "洪洞县"
                    },
                    {
                        "code": "1141025",
                        "name": "古县"
                    },
                    {
                        "code": "1141026",
                        "name": "安泽县"
                    },
                    {
                        "code": "1141027",
                        "name": "浮山县"
                    },
                    {
                        "code": "1141028",
                        "name": "吉县"
                    },
                    {
                        "code": "1141029",
                        "name": "乡宁县"
                    },
                    {
                        "code": "1141030",
                        "name": "大宁县"
                    },
                    {
                        "code": "1141031",
                        "name": "隰县"
                    },
                    {
                        "code": "1141032",
                        "name": "永和县"
                    },
                    {
                        "code": "1141033",
                        "name": "蒲县"
                    },
                    {
                        "code": "1141034",
                        "name": "汾西县"
                    },
                    {
                        "code": "1141081",
                        "name": "侯马市"
                    },
                    {
                        "code": "1141082",
                        "name": "霍州市"
                    }
                ]
            },
            {
                "code": "11411",
                "name": "吕梁市",
                "children": [
                    {
                        "code": "1141102",
                        "name": "离石区"
                    },
                    {
                        "code": "1141121",
                        "name": "文水县"
                    },
                    {
                        "code": "1141122",
                        "name": "交城县"
                    },
                    {
                        "code": "1141123",
                        "name": "兴县"
                    },
                    {
                        "code": "1141124",
                        "name": "临县"
                    },
                    {
                        "code": "1141125",
                        "name": "柳林县"
                    },
                    {
                        "code": "1141126",
                        "name": "石楼县"
                    },
                    {
                        "code": "1141127",
                        "name": "岚县"
                    },
                    {
                        "code": "1141128",
                        "name": "方山县"
                    },
                    {
                        "code": "1141129",
                        "name": "中阳县"
                    },
                    {
                        "code": "1141130",
                        "name": "交口县"
                    },
                    {
                        "code": "1141181",
                        "name": "孝义市"
                    },
                    {
                        "code": "1141182",
                        "name": "汾阳市"
                    }
                ]
            }
        ]
    },
    {
        "code": "115",
        "name": "内蒙古自治区",
        "children": [
            {
                "code": "11501",
                "name": "呼和浩特市",
                "children": [
                    {
                        "code": "1150102",
                        "name": "新城区"
                    },
                    {
                        "code": "1150103",
                        "name": "回民区"
                    },
                    {
                        "code": "1150104",
                        "name": "玉泉区"
                    },
                    {
                        "code": "1150105",
                        "name": "赛罕区"
                    },
                    {
                        "code": "1150121",
                        "name": "土默特左旗"
                    },
                    {
                        "code": "1150122",
                        "name": "托克托县"
                    },
                    {
                        "code": "1150123",
                        "name": "和林格尔县"
                    },
                    {
                        "code": "1150124",
                        "name": "清水河县"
                    },
                    {
                        "code": "1150125",
                        "name": "武川县"
                    }
                ]
            },
            {
                "code": "11502",
                "name": "包头市",
                "children": [
                    {
                        "code": "1150202",
                        "name": "东河区"
                    },
                    {
                        "code": "1150203",
                        "name": "昆都仑区"
                    },
                    {
                        "code": "1150204",
                        "name": "青山区"
                    },
                    {
                        "code": "1150205",
                        "name": "石拐区"
                    },
                    {
                        "code": "1150206",
                        "name": "白云鄂博矿区"
                    },
                    {
                        "code": "1150207",
                        "name": "九原区"
                    },
                    {
                        "code": "1150221",
                        "name": "土默特右旗"
                    },
                    {
                        "code": "1150222",
                        "name": "固阳县"
                    },
                    {
                        "code": "1150223",
                        "name": "达尔罕茂明安联合旗"
                    }
                ]
            },
            {
                "code": "11503",
                "name": "乌海市",
                "children": [
                    {
                        "code": "1150302",
                        "name": "海勃湾区"
                    },
                    {
                        "code": "1150303",
                        "name": "海南区"
                    },
                    {
                        "code": "1150304",
                        "name": "乌达区"
                    }
                ]
            },
            {
                "code": "11504",
                "name": "赤峰市",
                "children": [
                    {
                        "code": "1150402",
                        "name": "红山区"
                    },
                    {
                        "code": "1150403",
                        "name": "元宝山区"
                    },
                    {
                        "code": "1150404",
                        "name": "松山区"
                    },
                    {
                        "code": "1150421",
                        "name": "阿鲁科尔沁旗"
                    },
                    {
                        "code": "1150422",
                        "name": "巴林左旗"
                    },
                    {
                        "code": "1150423",
                        "name": "巴林右旗"
                    },
                    {
                        "code": "1150424",
                        "name": "林西县"
                    },
                    {
                        "code": "1150425",
                        "name": "克什克腾旗"
                    },
                    {
                        "code": "1150426",
                        "name": "翁牛特旗"
                    },
                    {
                        "code": "1150428",
                        "name": "喀喇沁旗"
                    },
                    {
                        "code": "1150429",
                        "name": "宁城县"
                    },
                    {
                        "code": "1150430",
                        "name": "敖汉旗"
                    }
                ]
            },
            {
                "code": "11505",
                "name": "通辽市",
                "children": [
                    {
                        "code": "1150502",
                        "name": "科尔沁区"
                    },
                    {
                        "code": "1150521",
                        "name": "科尔沁左翼中旗"
                    },
                    {
                        "code": "1150522",
                        "name": "科尔沁左翼后旗"
                    },
                    {
                        "code": "1150523",
                        "name": "开鲁县"
                    },
                    {
                        "code": "1150524",
                        "name": "库伦旗"
                    },
                    {
                        "code": "1150525",
                        "name": "奈曼旗"
                    },
                    {
                        "code": "1150526",
                        "name": "扎鲁特旗"
                    },
                    {
                        "code": "1150581",
                        "name": "霍林郭勒市"
                    }
                ]
            },
            {
                "code": "11506",
                "name": "鄂尔多斯市",
                "children": [
                    {
                        "code": "1150602",
                        "name": "东胜区"
                    },
                    {
                        "code": "1150621",
                        "name": "达拉特旗"
                    },
                    {
                        "code": "1150622",
                        "name": "准格尔旗"
                    },
                    {
                        "code": "1150623",
                        "name": "鄂托克前旗"
                    },
                    {
                        "code": "1150624",
                        "name": "鄂托克旗"
                    },
                    {
                        "code": "1150625",
                        "name": "杭锦旗"
                    },
                    {
                        "code": "1150626",
                        "name": "乌审旗"
                    },
                    {
                        "code": "1150627",
                        "name": "伊金霍洛旗"
                    }
                ]
            },
            {
                "code": "11507",
                "name": "呼伦贝尔市",
                "children": [
                    {
                        "code": "1150702",
                        "name": "海拉尔区"
                    },
                    {
                        "code": "1150703",
                        "name": "扎赉诺尔区"
                    },
                    {
                        "code": "1150721",
                        "name": "阿荣旗"
                    },
                    {
                        "code": "1150722",
                        "name": "莫力达瓦达斡尔族自治旗"
                    },
                    {
                        "code": "1150723",
                        "name": "鄂伦春自治旗"
                    },
                    {
                        "code": "1150724",
                        "name": "鄂温克族自治旗"
                    },
                    {
                        "code": "1150725",
                        "name": "陈巴尔虎旗"
                    },
                    {
                        "code": "1150726",
                        "name": "新巴尔虎左旗"
                    },
                    {
                        "code": "1150727",
                        "name": "新巴尔虎右旗"
                    },
                    {
                        "code": "1150781",
                        "name": "满洲里市"
                    },
                    {
                        "code": "1150782",
                        "name": "牙克石市"
                    },
                    {
                        "code": "1150783",
                        "name": "扎兰屯市"
                    },
                    {
                        "code": "1150784",
                        "name": "额尔古纳市"
                    },
                    {
                        "code": "1150785",
                        "name": "根河市"
                    }
                ]
            },
            {
                "code": "11508",
                "name": "巴彦淖尔市",
                "children": [
                    {
                        "code": "1150802",
                        "name": "临河区"
                    },
                    {
                        "code": "1150821",
                        "name": "五原县"
                    },
                    {
                        "code": "1150822",
                        "name": "磴口县"
                    },
                    {
                        "code": "1150823",
                        "name": "乌拉特前旗"
                    },
                    {
                        "code": "1150824",
                        "name": "乌拉特中旗"
                    },
                    {
                        "code": "1150825",
                        "name": "乌拉特后旗"
                    },
                    {
                        "code": "1150826",
                        "name": "杭锦后旗"
                    }
                ]
            },
            {
                "code": "11509",
                "name": "乌兰察布市",
                "children": [
                    {
                        "code": "1150902",
                        "name": "集宁区"
                    },
                    {
                        "code": "1150921",
                        "name": "卓资县"
                    },
                    {
                        "code": "1150922",
                        "name": "化德县"
                    },
                    {
                        "code": "1150923",
                        "name": "商都县"
                    },
                    {
                        "code": "1150924",
                        "name": "兴和县"
                    },
                    {
                        "code": "1150925",
                        "name": "凉城县"
                    },
                    {
                        "code": "1150926",
                        "name": "察哈尔右翼前旗"
                    },
                    {
                        "code": "1150927",
                        "name": "察哈尔右翼中旗"
                    },
                    {
                        "code": "1150928",
                        "name": "察哈尔右翼后旗"
                    },
                    {
                        "code": "1150929",
                        "name": "四子王旗"
                    },
                    {
                        "code": "1150981",
                        "name": "丰镇市"
                    }
                ]
            },
            {
                "code": "11522",
                "name": "兴安盟",
                "children": [
                    {
                        "code": "1152201",
                        "name": "乌兰浩特市"
                    },
                    {
                        "code": "1152202",
                        "name": "阿尔山市"
                    },
                    {
                        "code": "1152221",
                        "name": "科尔沁右翼前旗"
                    },
                    {
                        "code": "1152222",
                        "name": "科尔沁右翼中旗"
                    },
                    {
                        "code": "1152223",
                        "name": "扎赉特旗"
                    },
                    {
                        "code": "1152224",
                        "name": "突泉县"
                    }
                ]
            },
            {
                "code": "11525",
                "name": "锡林郭勒盟",
                "children": [
                    {
                        "code": "1152501",
                        "name": "二连浩特市"
                    },
                    {
                        "code": "1152502",
                        "name": "锡林浩特市"
                    },
                    {
                        "code": "1152522",
                        "name": "阿巴嘎旗"
                    },
                    {
                        "code": "1152523",
                        "name": "苏尼特左旗"
                    },
                    {
                        "code": "1152524",
                        "name": "苏尼特右旗"
                    },
                    {
                        "code": "1152525",
                        "name": "东乌珠穆沁旗"
                    },
                    {
                        "code": "1152526",
                        "name": "西乌珠穆沁旗"
                    },
                    {
                        "code": "1152527",
                        "name": "太仆寺旗"
                    },
                    {
                        "code": "1152528",
                        "name": "镶黄旗"
                    },
                    {
                        "code": "1152529",
                        "name": "正镶白旗"
                    },
                    {
                        "code": "1152530",
                        "name": "正蓝旗"
                    },
                    {
                        "code": "1152531",
                        "name": "多伦县"
                    }
                ]
            },
            {
                "code": "11529",
                "name": "阿拉善盟",
                "children": [
                    {
                        "code": "1152921",
                        "name": "阿拉善左旗"
                    },
                    {
                        "code": "1152922",
                        "name": "阿拉善右旗"
                    },
                    {
                        "code": "1152923",
                        "name": "额济纳旗"
                    }
                ]
            }
        ]
    },
    {
        "code": "121",
        "name": "辽宁省",
        "children": [
            {
                "code": "12101",
                "name": "沈阳市",
                "children": [
                    {
                        "code": "1210102",
                        "name": "和平区"
                    },
                    {
                        "code": "1210103",
                        "name": "沈河区"
                    },
                    {
                        "code": "1210104",
                        "name": "大东区"
                    },
                    {
                        "code": "1210105",
                        "name": "皇姑区"
                    },
                    {
                        "code": "1210106",
                        "name": "铁西区"
                    },
                    {
                        "code": "1210111",
                        "name": "苏家屯区"
                    },
                    {
                        "code": "1210112",
                        "name": "东陵区"
                    },
                    {
                        "code": "1210113",
                        "name": "沈北新区"
                    },
                    {
                        "code": "1210114",
                        "name": "于洪区"
                    },
                    {
                        "code": "1210122",
                        "name": "辽中县"
                    },
                    {
                        "code": "1210123",
                        "name": "康平县"
                    },
                    {
                        "code": "1210124",
                        "name": "法库县"
                    },
                    {
                        "code": "1210181",
                        "name": "新民市"
                    }
                ]
            },
            {
                "code": "12102",
                "name": "大连市",
                "children": [
                    {
                        "code": "1210202",
                        "name": "中山区"
                    },
                    {
                        "code": "1210203",
                        "name": "西岗区"
                    },
                    {
                        "code": "1210204",
                        "name": "沙河口区"
                    },
                    {
                        "code": "1210211",
                        "name": "甘井子区"
                    },
                    {
                        "code": "1210212",
                        "name": "旅顺口区"
                    },
                    {
                        "code": "1210213",
                        "name": "金州区"
                    },
                    {
                        "code": "1210214",
                        "name": "普兰店区"
                    },
                    {
                        "code": "1210224",
                        "name": "长海县"
                    },
                    {
                        "code": "1210281",
                        "name": "瓦房店市"
                    },
                    {
                        "code": "1210283",
                        "name": "庄河市"
                    }
                ]
            },
            {
                "code": "12103",
                "name": "鞍山市",
                "children": [
                    {
                        "code": "1210302",
                        "name": "铁东区"
                    },
                    {
                        "code": "1210303",
                        "name": "铁西区"
                    },
                    {
                        "code": "1210304",
                        "name": "立山区"
                    },
                    {
                        "code": "1210311",
                        "name": "千山区"
                    },
                    {
                        "code": "1210321",
                        "name": "台安县"
                    },
                    {
                        "code": "1210323",
                        "name": "岫岩满族自治县"
                    },
                    {
                        "code": "1210381",
                        "name": "海城市"
                    }
                ]
            },
            {
                "code": "12104",
                "name": "抚顺市",
                "children": [
                    {
                        "code": "1210402",
                        "name": "新抚区"
                    },
                    {
                        "code": "1210403",
                        "name": "东洲区"
                    },
                    {
                        "code": "1210404",
                        "name": "望花区"
                    },
                    {
                        "code": "1210411",
                        "name": "顺城区"
                    },
                    {
                        "code": "1210421",
                        "name": "抚顺县"
                    },
                    {
                        "code": "1210422",
                        "name": "新宾满族自治县"
                    },
                    {
                        "code": "1210423",
                        "name": "清原满族自治县"
                    }
                ]
            },
            {
                "code": "12105",
                "name": "本溪市",
                "children": [
                    {
                        "code": "1210502",
                        "name": "平山区"
                    },
                    {
                        "code": "1210503",
                        "name": "溪湖区"
                    },
                    {
                        "code": "1210504",
                        "name": "明山区"
                    },
                    {
                        "code": "1210505",
                        "name": "南芬区"
                    },
                    {
                        "code": "1210521",
                        "name": "本溪满族自治县"
                    },
                    {
                        "code": "1210522",
                        "name": "桓仁满族自治县"
                    }
                ]
            },
            {
                "code": "12106",
                "name": "丹东市",
                "children": [
                    {
                        "code": "1210602",
                        "name": "元宝区"
                    },
                    {
                        "code": "1210603",
                        "name": "振兴区"
                    },
                    {
                        "code": "1210604",
                        "name": "振安区"
                    },
                    {
                        "code": "1210624",
                        "name": "宽甸满族自治县"
                    },
                    {
                        "code": "1210681",
                        "name": "东港市"
                    },
                    {
                        "code": "1210682",
                        "name": "凤城市"
                    }
                ]
            },
            {
                "code": "12107",
                "name": "锦州市",
                "children": [
                    {
                        "code": "1210702",
                        "name": "古塔区"
                    },
                    {
                        "code": "1210703",
                        "name": "凌河区"
                    },
                    {
                        "code": "1210711",
                        "name": "太和区"
                    },
                    {
                        "code": "1210726",
                        "name": "黑山县"
                    },
                    {
                        "code": "1210727",
                        "name": "义县"
                    },
                    {
                        "code": "1210781",
                        "name": "凌海市"
                    },
                    {
                        "code": "1210782",
                        "name": "北镇市"
                    }
                ]
            },
            {
                "code": "12108",
                "name": "营口市",
                "children": [
                    {
                        "code": "1210802",
                        "name": "站前区"
                    },
                    {
                        "code": "1210803",
                        "name": "西市区"
                    },
                    {
                        "code": "1210804",
                        "name": "鲅鱼圈区"
                    },
                    {
                        "code": "1210811",
                        "name": "老边区"
                    },
                    {
                        "code": "1210881",
                        "name": "盖州市"
                    },
                    {
                        "code": "1210882",
                        "name": "大石桥市"
                    }
                ]
            },
            {
                "code": "12109",
                "name": "阜新市",
                "children": [
                    {
                        "code": "1210902",
                        "name": "海州区"
                    },
                    {
                        "code": "1210903",
                        "name": "新邱区"
                    },
                    {
                        "code": "1210904",
                        "name": "太平区"
                    },
                    {
                        "code": "1210905",
                        "name": "清河门区"
                    },
                    {
                        "code": "1210911",
                        "name": "细河区"
                    },
                    {
                        "code": "1210921",
                        "name": "阜新蒙古族自治县"
                    },
                    {
                        "code": "1210922",
                        "name": "彰武县"
                    }
                ]
            },
            {
                "code": "12110",
                "name": "辽阳市",
                "children": [
                    {
                        "code": "1211002",
                        "name": "白塔区"
                    },
                    {
                        "code": "1211003",
                        "name": "文圣区"
                    },
                    {
                        "code": "1211004",
                        "name": "宏伟区"
                    },
                    {
                        "code": "1211005",
                        "name": "弓长岭区"
                    },
                    {
                        "code": "1211011",
                        "name": "太子河区"
                    },
                    {
                        "code": "1211021",
                        "name": "辽阳县"
                    },
                    {
                        "code": "1211081",
                        "name": "灯塔市"
                    }
                ]
            },
            {
                "code": "12111",
                "name": "盘锦市",
                "children": [
                    {
                        "code": "1211102",
                        "name": "双台子区"
                    },
                    {
                        "code": "1211103",
                        "name": "兴隆台区"
                    },
                    {
                        "code": "1211121",
                        "name": "大洼县"
                    },
                    {
                        "code": "1211122",
                        "name": "盘山县"
                    }
                ]
            },
            {
                "code": "12112",
                "name": "铁岭市",
                "children": [
                    {
                        "code": "1211202",
                        "name": "银州区"
                    },
                    {
                        "code": "1211204",
                        "name": "清河区"
                    },
                    {
                        "code": "1211221",
                        "name": "铁岭县"
                    },
                    {
                        "code": "1211223",
                        "name": "西丰县"
                    },
                    {
                        "code": "1211224",
                        "name": "昌图县"
                    },
                    {
                        "code": "1211281",
                        "name": "调兵山市"
                    },
                    {
                        "code": "1211282",
                        "name": "开原市"
                    }
                ]
            },
            {
                "code": "12113",
                "name": "朝阳市",
                "children": [
                    {
                        "code": "1211302",
                        "name": "双塔区"
                    },
                    {
                        "code": "1211303",
                        "name": "龙城区"
                    },
                    {
                        "code": "1211321",
                        "name": "朝阳县"
                    },
                    {
                        "code": "1211322",
                        "name": "建平县"
                    },
                    {
                        "code": "1211324",
                        "name": "喀喇沁左翼蒙古族自治县"
                    },
                    {
                        "code": "1211381",
                        "name": "北票市"
                    },
                    {
                        "code": "1211382",
                        "name": "凌源市"
                    }
                ]
            },
            {
                "code": "12114",
                "name": "葫芦岛市",
                "children": [
                    {
                        "code": "1211402",
                        "name": "连山区"
                    },
                    {
                        "code": "1211403",
                        "name": "龙港区"
                    },
                    {
                        "code": "1211404",
                        "name": "南票区"
                    },
                    {
                        "code": "1211421",
                        "name": "绥中县"
                    },
                    {
                        "code": "1211422",
                        "name": "建昌县"
                    },
                    {
                        "code": "1211481",
                        "name": "兴城市"
                    }
                ]
            }
        ]
    },
    {
        "code": "122",
        "name": "吉林省",
        "children": [
            {
                "code": "12201",
                "name": "长春市",
                "children": [
                    {
                        "code": "1220102",
                        "name": "南关区"
                    },
                    {
                        "code": "1220103",
                        "name": "宽城区"
                    },
                    {
                        "code": "1220104",
                        "name": "朝阳区"
                    },
                    {
                        "code": "1220105",
                        "name": "二道区"
                    },
                    {
                        "code": "1220106",
                        "name": "绿园区"
                    },
                    {
                        "code": "1220112",
                        "name": "双阳区"
                    },
                    {
                        "code": "1220113",
                        "name": "九台区"
                    },
                    {
                        "code": "1220122",
                        "name": "农安县"
                    },
                    {
                        "code": "1220182",
                        "name": "榆树市"
                    },
                    {
                        "code": "1220183",
                        "name": "德惠市"
                    }
                ]
            },
            {
                "code": "12202",
                "name": "吉林市",
                "children": [
                    {
                        "code": "1220202",
                        "name": "昌邑区"
                    },
                    {
                        "code": "1220203",
                        "name": "龙潭区"
                    },
                    {
                        "code": "1220204",
                        "name": "船营区"
                    },
                    {
                        "code": "1220211",
                        "name": "丰满区"
                    },
                    {
                        "code": "1220221",
                        "name": "永吉县"
                    },
                    {
                        "code": "1220281",
                        "name": "蛟河市"
                    },
                    {
                        "code": "1220282",
                        "name": "桦甸市"
                    },
                    {
                        "code": "1220283",
                        "name": "舒兰市"
                    },
                    {
                        "code": "1220284",
                        "name": "磐石市"
                    }
                ]
            },
            {
                "code": "12203",
                "name": "四平市",
                "children": [
                    {
                        "code": "1220302",
                        "name": "铁西区"
                    },
                    {
                        "code": "1220303",
                        "name": "铁东区"
                    },
                    {
                        "code": "1220322",
                        "name": "梨树县"
                    },
                    {
                        "code": "1220323",
                        "name": "伊通满族自治县"
                    },
                    {
                        "code": "1220381",
                        "name": "公主岭市"
                    },
                    {
                        "code": "1220382",
                        "name": "双辽市"
                    }
                ]
            },
            {
                "code": "12204",
                "name": "辽源市",
                "children": [
                    {
                        "code": "1220402",
                        "name": "龙山区"
                    },
                    {
                        "code": "1220403",
                        "name": "西安区"
                    },
                    {
                        "code": "1220421",
                        "name": "东丰县"
                    },
                    {
                        "code": "1220422",
                        "name": "东辽县"
                    }
                ]
            },
            {
                "code": "12205",
                "name": "通化市",
                "children": [
                    {
                        "code": "1220502",
                        "name": "东昌区"
                    },
                    {
                        "code": "1220503",
                        "name": "二道江区"
                    },
                    {
                        "code": "1220521",
                        "name": "通化县"
                    },
                    {
                        "code": "1220523",
                        "name": "辉南县"
                    },
                    {
                        "code": "1220524",
                        "name": "柳河县"
                    },
                    {
                        "code": "1220581",
                        "name": "梅河口市"
                    },
                    {
                        "code": "1220582",
                        "name": "集安市"
                    }
                ]
            },
            {
                "code": "12206",
                "name": "白山市",
                "children": [
                    {
                        "code": "1220602",
                        "name": "浑江区"
                    },
                    {
                        "code": "1220605",
                        "name": "江源区"
                    },
                    {
                        "code": "1220621",
                        "name": "抚松县"
                    },
                    {
                        "code": "1220622",
                        "name": "靖宇县"
                    },
                    {
                        "code": "1220623",
                        "name": "长白朝鲜族自治县"
                    },
                    {
                        "code": "1220681",
                        "name": "临江市"
                    }
                ]
            },
            {
                "code": "12207",
                "name": "松原市",
                "children": [
                    {
                        "code": "1220702",
                        "name": "宁江区"
                    },
                    {
                        "code": "1220721",
                        "name": "前郭尔罗斯蒙古族自治县"
                    },
                    {
                        "code": "1220722",
                        "name": "长岭县"
                    },
                    {
                        "code": "1220723",
                        "name": "乾安县"
                    },
                    {
                        "code": "1220781",
                        "name": "扶余市"
                    }
                ]
            },
            {
                "code": "12208",
                "name": "白城市",
                "children": [
                    {
                        "code": "1220802",
                        "name": "洮北区"
                    },
                    {
                        "code": "1220821",
                        "name": "镇赉县"
                    },
                    {
                        "code": "1220822",
                        "name": "通榆县"
                    },
                    {
                        "code": "1220881",
                        "name": "洮南市"
                    },
                    {
                        "code": "1220882",
                        "name": "大安市"
                    }
                ]
            },
            {
                "code": "12224",
                "name": "延边朝鲜族自治州",
                "children": [
                    {
                        "code": "1222401",
                        "name": "延吉市"
                    },
                    {
                        "code": "1222402",
                        "name": "图们市"
                    },
                    {
                        "code": "1222403",
                        "name": "敦化市"
                    },
                    {
                        "code": "1222404",
                        "name": "珲春市"
                    },
                    {
                        "code": "1222405",
                        "name": "龙井市"
                    },
                    {
                        "code": "1222406",
                        "name": "和龙市"
                    },
                    {
                        "code": "1222424",
                        "name": "汪清县"
                    },
                    {
                        "code": "1222426",
                        "name": "安图县"
                    }
                ]
            }
        ]
    },
    {
        "code": "123",
        "name": "黑龙江省",
        "children": [
            {
                "code": "12301",
                "name": "哈尔滨市",
                "children": [
                    {
                        "code": "1230102",
                        "name": "道里区"
                    },
                    {
                        "code": "1230103",
                        "name": "南岗区"
                    },
                    {
                        "code": "1230104",
                        "name": "道外区"
                    },
                    {
                        "code": "1230108",
                        "name": "平房区"
                    },
                    {
                        "code": "1230109",
                        "name": "松北区"
                    },
                    {
                        "code": "1230110",
                        "name": "香坊区"
                    },
                    {
                        "code": "1230111",
                        "name": "呼兰区"
                    },
                    {
                        "code": "1230112",
                        "name": "阿城区"
                    },
                    {
                        "code": "1230113",
                        "name": "双城区"
                    },
                    {
                        "code": "1230123",
                        "name": "依兰县"
                    },
                    {
                        "code": "1230124",
                        "name": "方正县"
                    },
                    {
                        "code": "1230125",
                        "name": "宾县"
                    },
                    {
                        "code": "1230126",
                        "name": "巴彦县"
                    },
                    {
                        "code": "1230127",
                        "name": "木兰县"
                    },
                    {
                        "code": "1230128",
                        "name": "通河县"
                    },
                    {
                        "code": "1230129",
                        "name": "延寿县"
                    },
                    {
                        "code": "1230183",
                        "name": "尚志市"
                    },
                    {
                        "code": "1230184",
                        "name": "五常市"
                    }
                ]
            },
            {
                "code": "12302",
                "name": "齐齐哈尔市",
                "children": [
                    {
                        "code": "1230202",
                        "name": "龙沙区"
                    },
                    {
                        "code": "1230203",
                        "name": "建华区"
                    },
                    {
                        "code": "1230204",
                        "name": "铁锋区"
                    },
                    {
                        "code": "1230205",
                        "name": "昂昂溪区"
                    },
                    {
                        "code": "1230206",
                        "name": "富拉尔基区"
                    },
                    {
                        "code": "1230207",
                        "name": "碾子山区"
                    },
                    {
                        "code": "1230208",
                        "name": "梅里斯达斡尔族区"
                    },
                    {
                        "code": "1230221",
                        "name": "龙江县"
                    },
                    {
                        "code": "1230223",
                        "name": "依安县"
                    },
                    {
                        "code": "1230224",
                        "name": "泰来县"
                    },
                    {
                        "code": "1230225",
                        "name": "甘南县"
                    },
                    {
                        "code": "1230227",
                        "name": "富裕县"
                    },
                    {
                        "code": "1230229",
                        "name": "克山县"
                    },
                    {
                        "code": "1230230",
                        "name": "克东县"
                    },
                    {
                        "code": "1230231",
                        "name": "拜泉县"
                    },
                    {
                        "code": "1230281",
                        "name": "讷河市"
                    }
                ]
            },
            {
                "code": "12303",
                "name": "鸡西市",
                "children": [
                    {
                        "code": "1230302",
                        "name": "鸡冠区"
                    },
                    {
                        "code": "1230303",
                        "name": "恒山区"
                    },
                    {
                        "code": "1230304",
                        "name": "滴道区"
                    },
                    {
                        "code": "1230305",
                        "name": "梨树区"
                    },
                    {
                        "code": "1230306",
                        "name": "城子河区"
                    },
                    {
                        "code": "1230307",
                        "name": "麻山区"
                    },
                    {
                        "code": "1230321",
                        "name": "鸡东县"
                    },
                    {
                        "code": "1230381",
                        "name": "虎林市"
                    },
                    {
                        "code": "1230382",
                        "name": "密山市"
                    }
                ]
            },
            {
                "code": "12304",
                "name": "鹤岗市",
                "children": [
                    {
                        "code": "1230402",
                        "name": "向阳区"
                    },
                    {
                        "code": "1230403",
                        "name": "工农区"
                    },
                    {
                        "code": "1230404",
                        "name": "南山区"
                    },
                    {
                        "code": "1230405",
                        "name": "兴安区"
                    },
                    {
                        "code": "1230406",
                        "name": "东山区"
                    },
                    {
                        "code": "1230407",
                        "name": "兴山区"
                    },
                    {
                        "code": "1230421",
                        "name": "萝北县"
                    },
                    {
                        "code": "1230422",
                        "name": "绥滨县"
                    }
                ]
            },
            {
                "code": "12305",
                "name": "双鸭山市",
                "children": [
                    {
                        "code": "1230502",
                        "name": "尖山区"
                    },
                    {
                        "code": "1230503",
                        "name": "岭东区"
                    },
                    {
                        "code": "1230505",
                        "name": "四方台区"
                    },
                    {
                        "code": "1230506",
                        "name": "宝山区"
                    },
                    {
                        "code": "1230521",
                        "name": "集贤县"
                    },
                    {
                        "code": "1230522",
                        "name": "友谊县"
                    },
                    {
                        "code": "1230523",
                        "name": "宝清县"
                    },
                    {
                        "code": "1230524",
                        "name": "饶河县"
                    }
                ]
            },
            {
                "code": "12306",
                "name": "大庆市",
                "children": [
                    {
                        "code": "1230602",
                        "name": "萨尔图区"
                    },
                    {
                        "code": "1230603",
                        "name": "龙凤区"
                    },
                    {
                        "code": "1230604",
                        "name": "让胡路区"
                    },
                    {
                        "code": "1230605",
                        "name": "红岗区"
                    },
                    {
                        "code": "1230606",
                        "name": "大同区"
                    },
                    {
                        "code": "1230621",
                        "name": "肇州县"
                    },
                    {
                        "code": "1230622",
                        "name": "肇源县"
                    },
                    {
                        "code": "1230623",
                        "name": "林甸县"
                    },
                    {
                        "code": "1230624",
                        "name": "杜尔伯特蒙古族自治县"
                    }
                ]
            },
            {
                "code": "12307",
                "name": "伊春市",
                "children": [
                    {
                        "code": "1230702",
                        "name": "伊春区"
                    },
                    {
                        "code": "1230703",
                        "name": "南岔区"
                    },
                    {
                        "code": "1230704",
                        "name": "友好区"
                    },
                    {
                        "code": "1230705",
                        "name": "西林区"
                    },
                    {
                        "code": "1230706",
                        "name": "翠峦区"
                    },
                    {
                        "code": "1230707",
                        "name": "新青区"
                    },
                    {
                        "code": "1230708",
                        "name": "美溪区"
                    },
                    {
                        "code": "1230709",
                        "name": "金山屯区"
                    },
                    {
                        "code": "1230710",
                        "name": "五营区"
                    },
                    {
                        "code": "1230711",
                        "name": "乌马河区"
                    },
                    {
                        "code": "1230712",
                        "name": "汤旺河区"
                    },
                    {
                        "code": "1230713",
                        "name": "带岭区"
                    },
                    {
                        "code": "1230714",
                        "name": "乌伊岭区"
                    },
                    {
                        "code": "1230715",
                        "name": "红星区"
                    },
                    {
                        "code": "1230716",
                        "name": "上甘岭区"
                    },
                    {
                        "code": "1230722",
                        "name": "嘉荫县"
                    },
                    {
                        "code": "1230781",
                        "name": "铁力市"
                    }
                ]
            },
            {
                "code": "12308",
                "name": "佳木斯市",
                "children": [
                    {
                        "code": "1230803",
                        "name": "向阳区"
                    },
                    {
                        "code": "1230804",
                        "name": "前进区"
                    },
                    {
                        "code": "1230805",
                        "name": "东风区"
                    },
                    {
                        "code": "1230811",
                        "name": "郊区"
                    },
                    {
                        "code": "1230822",
                        "name": "桦南县"
                    },
                    {
                        "code": "1230826",
                        "name": "桦川县"
                    },
                    {
                        "code": "1230828",
                        "name": "汤原县"
                    },
                    {
                        "code": "1230833",
                        "name": "抚远县"
                    },
                    {
                        "code": "1230881",
                        "name": "同江市"
                    },
                    {
                        "code": "1230882",
                        "name": "富锦市"
                    }
                ]
            },
            {
                "code": "12309",
                "name": "七台河市",
                "children": [
                    {
                        "code": "1230902",
                        "name": "新兴区"
                    },
                    {
                        "code": "1230903",
                        "name": "桃山区"
                    },
                    {
                        "code": "1230904",
                        "name": "茄子河区"
                    },
                    {
                        "code": "1230921",
                        "name": "勃利县"
                    }
                ]
            },
            {
                "code": "12310",
                "name": "牡丹江市",
                "children": [
                    {
                        "code": "1231002",
                        "name": "东安区"
                    },
                    {
                        "code": "1231003",
                        "name": "阳明区"
                    },
                    {
                        "code": "1231004",
                        "name": "爱民区"
                    },
                    {
                        "code": "1231005",
                        "name": "西安区"
                    },
                    {
                        "code": "1231025",
                        "name": "林口县"
                    },
                    {
                        "code": "1231081",
                        "name": "绥芬河市"
                    },
                    {
                        "code": "1231083",
                        "name": "海林市"
                    },
                    {
                        "code": "1231084",
                        "name": "宁安市"
                    },
                    {
                        "code": "1231085",
                        "name": "穆棱市"
                    },
                    {
                        "code": "1231086",
                        "name": "东宁市"
                    }
                ]
            },
            {
                "code": "12311",
                "name": "黑河市",
                "children": [
                    {
                        "code": "1231102",
                        "name": "爱辉区"
                    },
                    {
                        "code": "1231121",
                        "name": "嫩江县"
                    },
                    {
                        "code": "1231123",
                        "name": "逊克县"
                    },
                    {
                        "code": "1231124",
                        "name": "孙吴县"
                    },
                    {
                        "code": "1231181",
                        "name": "北安市"
                    },
                    {
                        "code": "1231182",
                        "name": "五大连池市"
                    }
                ]
            },
            {
                "code": "12312",
                "name": "绥化市",
                "children": [
                    {
                        "code": "1231202",
                        "name": "北林区"
                    },
                    {
                        "code": "1231221",
                        "name": "望奎县"
                    },
                    {
                        "code": "1231222",
                        "name": "兰西县"
                    },
                    {
                        "code": "1231223",
                        "name": "青冈县"
                    },
                    {
                        "code": "1231224",
                        "name": "庆安县"
                    },
                    {
                        "code": "1231225",
                        "name": "明水县"
                    },
                    {
                        "code": "1231226",
                        "name": "绥棱县"
                    },
                    {
                        "code": "1231281",
                        "name": "安达市"
                    },
                    {
                        "code": "1231282",
                        "name": "肇东市"
                    },
                    {
                        "code": "1231283",
                        "name": "海伦市"
                    }
                ]
            },
            {
                "code": "12327",
                "name": "大兴安岭地区",
                "children": [
                    {
                        "code": "1232701",
                        "name": "加格达奇区"
                    },
                    {
                        "code": "1232702",
                        "name": "松岭区"
                    },
                    {
                        "code": "1232703",
                        "name": "新林区"
                    },
                    {
                        "code": "1232704",
                        "name": "呼中区"
                    },
                    {
                        "code": "1232721",
                        "name": "呼玛县"
                    },
                    {
                        "code": "1232722",
                        "name": "塔河县"
                    },
                    {
                        "code": "1232723",
                        "name": "漠河县"
                    }
                ]
            }
        ]
    },
    {
        "code": "131",
        "name": "上海市",
        "children": [
            {
                "code": "13101",
                "name": "上海市辖区",
                "children": [
                    {
                        "code": "1310101",
                        "name": "黄浦区"
                    },
                    {
                        "code": "1310104",
                        "name": "徐汇区"
                    },
                    {
                        "code": "1310105",
                        "name": "长宁区"
                    },
                    {
                        "code": "1310106",
                        "name": "静安区"
                    },
                    {
                        "code": "1310107",
                        "name": "普陀区"
                    },
                    {
                        "code": "1310109",
                        "name": "虹口区"
                    },
                    {
                        "code": "1310110",
                        "name": "杨浦区"
                    },
                    {
                        "code": "1310112",
                        "name": "闵行区"
                    },
                    {
                        "code": "1310113",
                        "name": "宝山区"
                    },
                    {
                        "code": "1310114",
                        "name": "嘉定区"
                    },
                    {
                        "code": "1310115",
                        "name": "浦东新区"
                    },
                    {
                        "code": "1310116",
                        "name": "金山区"
                    },
                    {
                        "code": "1310117",
                        "name": "松江区"
                    },
                    {
                        "code": "1310118",
                        "name": "青浦区"
                    },
                    {
                        "code": "1310120",
                        "name": "奉贤区"
                    }
                ]
            },
            {
                "code": "13102",
                "name": "上海市县",
                "children": [
                    {
                        "code": "1310230",
                        "name": "崇明县"
                    }
                ]
            }
        ]
    },
    {
        "code": "132",
        "name": "江苏省",
        "children": [
            {
                "code": "13201",
                "name": "南京市",
                "children": [
                    {
                        "code": "1320102",
                        "name": "玄武区"
                    },
                    {
                        "code": "1320104",
                        "name": "秦淮区"
                    },
                    {
                        "code": "1320105",
                        "name": "建邺区"
                    },
                    {
                        "code": "1320106",
                        "name": "鼓楼区"
                    },
                    {
                        "code": "1320111",
                        "name": "浦口区"
                    },
                    {
                        "code": "1320113",
                        "name": "栖霞区"
                    },
                    {
                        "code": "1320114",
                        "name": "雨花台区"
                    },
                    {
                        "code": "1320115",
                        "name": "江宁区"
                    },
                    {
                        "code": "1320116",
                        "name": "六合区"
                    },
                    {
                        "code": "1320117",
                        "name": "溧水区"
                    },
                    {
                        "code": "1320118",
                        "name": "高淳区"
                    }
                ]
            },
            {
                "code": "13202",
                "name": "无锡市",
                "children": [
                    {
                        "code": "1320205",
                        "name": "锡山区"
                    },
                    {
                        "code": "1320206",
                        "name": "惠山区"
                    },
                    {
                        "code": "1320211",
                        "name": "滨湖区"
                    },
                    {
                        "code": "1320213",
                        "name": "梁溪区"
                    },
                    {
                        "code": "1320214",
                        "name": "新吴区"
                    },
                    {
                        "code": "1320281",
                        "name": "江阴市"
                    },
                    {
                        "code": "1320282",
                        "name": "宜兴市"
                    }
                ]
            },
            {
                "code": "13203",
                "name": "徐州市",
                "children": [
                    {
                        "code": "1320302",
                        "name": "鼓楼区"
                    },
                    {
                        "code": "1320303",
                        "name": "云龙区"
                    },
                    {
                        "code": "1320305",
                        "name": "贾汪区"
                    },
                    {
                        "code": "1320311",
                        "name": "泉山区"
                    },
                    {
                        "code": "1320312",
                        "name": "铜山区"
                    },
                    {
                        "code": "1320321",
                        "name": "丰县"
                    },
                    {
                        "code": "1320322",
                        "name": "沛县"
                    },
                    {
                        "code": "1320324",
                        "name": "睢宁县"
                    },
                    {
                        "code": "1320381",
                        "name": "新沂市"
                    },
                    {
                        "code": "1320382",
                        "name": "邳州市"
                    }
                ]
            },
            {
                "code": "13204",
                "name": "常州市",
                "children": [
                    {
                        "code": "1320402",
                        "name": "天宁区"
                    },
                    {
                        "code": "1320404",
                        "name": "钟楼区"
                    },
                    {
                        "code": "1320411",
                        "name": "新北区"
                    },
                    {
                        "code": "1320412",
                        "name": "武进区"
                    },
                    {
                        "code": "1320413",
                        "name": "金坛区"
                    },
                    {
                        "code": "1320481",
                        "name": "溧阳市"
                    }
                ]
            },
            {
                "code": "13205",
                "name": "苏州市",
                "children": [
                    {
                        "code": "1320505",
                        "name": "虎丘区"
                    },
                    {
                        "code": "1320506",
                        "name": "吴中区"
                    },
                    {
                        "code": "1320507",
                        "name": "相城区"
                    },
                    {
                        "code": "1320508",
                        "name": "姑苏区"
                    },
                    {
                        "code": "1320509",
                        "name": "吴江区"
                    },
                    {
                        "code": "1320581",
                        "name": "常熟市"
                    },
                    {
                        "code": "1320582",
                        "name": "张家港市"
                    },
                    {
                        "code": "1320583",
                        "name": "昆山市"
                    },
                    {
                        "code": "1320585",
                        "name": "太仓市"
                    }
                ]
            },
            {
                "code": "13206",
                "name": "南通市",
                "children": [
                    {
                        "code": "1320602",
                        "name": "崇川区"
                    },
                    {
                        "code": "1320611",
                        "name": "港闸区"
                    },
                    {
                        "code": "1320612",
                        "name": "通州区"
                    },
                    {
                        "code": "1320621",
                        "name": "海安县"
                    },
                    {
                        "code": "1320623",
                        "name": "如东县"
                    },
                    {
                        "code": "1320681",
                        "name": "启东市"
                    },
                    {
                        "code": "1320682",
                        "name": "如皋市"
                    },
                    {
                        "code": "1320684",
                        "name": "海门市"
                    }
                ]
            },
            {
                "code": "13207",
                "name": "连云港市",
                "children": [
                    {
                        "code": "1320703",
                        "name": "连云区"
                    },
                    {
                        "code": "1320706",
                        "name": "海州区"
                    },
                    {
                        "code": "1320707",
                        "name": "赣榆区"
                    },
                    {
                        "code": "1320722",
                        "name": "东海县"
                    },
                    {
                        "code": "1320723",
                        "name": "灌云县"
                    },
                    {
                        "code": "1320724",
                        "name": "灌南县"
                    }
                ]
            },
            {
                "code": "13208",
                "name": "淮安市",
                "children": [
                    {
                        "code": "1320802",
                        "name": "清河区"
                    },
                    {
                        "code": "1320803",
                        "name": "淮安区"
                    },
                    {
                        "code": "1320804",
                        "name": "淮阴区"
                    },
                    {
                        "code": "1320811",
                        "name": "清浦区"
                    },
                    {
                        "code": "1320826",
                        "name": "涟水县"
                    },
                    {
                        "code": "1320829",
                        "name": "洪泽县"
                    },
                    {
                        "code": "1320830",
                        "name": "盱眙县"
                    },
                    {
                        "code": "1320831",
                        "name": "金湖县"
                    }
                ]
            },
            {
                "code": "13209",
                "name": "盐城市",
                "children": [
                    {
                        "code": "1320902",
                        "name": "亭湖区"
                    },
                    {
                        "code": "1320903",
                        "name": "盐都区"
                    },
                    {
                        "code": "1320904",
                        "name": "大丰区"
                    },
                    {
                        "code": "1320921",
                        "name": "响水县"
                    },
                    {
                        "code": "1320922",
                        "name": "滨海县"
                    },
                    {
                        "code": "1320923",
                        "name": "阜宁县"
                    },
                    {
                        "code": "1320924",
                        "name": "射阳县"
                    },
                    {
                        "code": "1320925",
                        "name": "建湖县"
                    },
                    {
                        "code": "1320981",
                        "name": "东台市"
                    }
                ]
            },
            {
                "code": "13210",
                "name": "扬州市",
                "children": [
                    {
                        "code": "1321002",
                        "name": "广陵区"
                    },
                    {
                        "code": "1321003",
                        "name": "邗江区"
                    },
                    {
                        "code": "1321012",
                        "name": "江都区"
                    },
                    {
                        "code": "1321023",
                        "name": "宝应县"
                    },
                    {
                        "code": "1321081",
                        "name": "仪征市"
                    },
                    {
                        "code": "1321084",
                        "name": "高邮市"
                    }
                ]
            },
            {
                "code": "13211",
                "name": "镇江市",
                "children": [
                    {
                        "code": "1321102",
                        "name": "京口区"
                    },
                    {
                        "code": "1321111",
                        "name": "润州区"
                    },
                    {
                        "code": "1321112",
                        "name": "丹徒区"
                    },
                    {
                        "code": "1321181",
                        "name": "丹阳市"
                    },
                    {
                        "code": "1321182",
                        "name": "扬中市"
                    },
                    {
                        "code": "1321183",
                        "name": "句容市"
                    }
                ]
            },
            {
                "code": "13212",
                "name": "泰州市",
                "children": [
                    {
                        "code": "1321202",
                        "name": "海陵区"
                    },
                    {
                        "code": "1321203",
                        "name": "高港区"
                    },
                    {
                        "code": "1321204",
                        "name": "姜堰区"
                    },
                    {
                        "code": "1321281",
                        "name": "兴化市"
                    },
                    {
                        "code": "1321282",
                        "name": "靖江市"
                    },
                    {
                        "code": "1321283",
                        "name": "泰兴市"
                    }
                ]
            },
            {
                "code": "13213",
                "name": "宿迁市",
                "children": [
                    {
                        "code": "1321302",
                        "name": "宿城区"
                    },
                    {
                        "code": "1321311",
                        "name": "宿豫区"
                    },
                    {
                        "code": "1321322",
                        "name": "沭阳县"
                    },
                    {
                        "code": "1321323",
                        "name": "泗阳县"
                    },
                    {
                        "code": "1321324",
                        "name": "泗洪县"
                    }
                ]
            }
        ]
    },
    {
        "code": "133",
        "name": "浙江省",
        "children": [
            {
                "code": "13301",
                "name": "杭州市",
                "children": [
                    {
                        "code": "1330102",
                        "name": "上城区"
                    },
                    {
                        "code": "1330103",
                        "name": "下城区"
                    },
                    {
                        "code": "1330104",
                        "name": "江干区"
                    },
                    {
                        "code": "1330105",
                        "name": "拱墅区"
                    },
                    {
                        "code": "1330106",
                        "name": "西湖区"
                    },
                    {
                        "code": "1330108",
                        "name": "滨江区"
                    },
                    {
                        "code": "1330109",
                        "name": "萧山区"
                    },
                    {
                        "code": "1330110",
                        "name": "余杭区"
                    },
                    {
                        "code": "1330111",
                        "name": "富阳区"
                    },
                    {
                        "code": "1330122",
                        "name": "桐庐县"
                    },
                    {
                        "code": "1330127",
                        "name": "淳安县"
                    },
                    {
                        "code": "1330182",
                        "name": "建德市"
                    },
                    {
                        "code": "1330185",
                        "name": "临安市"
                    }
                ]
            },
            {
                "code": "13302",
                "name": "宁波市",
                "children": [
                    {
                        "code": "1330203",
                        "name": "海曙区"
                    },
                    {
                        "code": "1330204",
                        "name": "江东区"
                    },
                    {
                        "code": "1330205",
                        "name": "江北区"
                    },
                    {
                        "code": "1330206",
                        "name": "北仑区"
                    },
                    {
                        "code": "1330211",
                        "name": "镇海区"
                    },
                    {
                        "code": "1330212",
                        "name": "鄞州区"
                    },
                    {
                        "code": "1330225",
                        "name": "象山县"
                    },
                    {
                        "code": "1330226",
                        "name": "宁海县"
                    },
                    {
                        "code": "1330281",
                        "name": "余姚市"
                    },
                    {
                        "code": "1330282",
                        "name": "慈溪市"
                    },
                    {
                        "code": "1330283",
                        "name": "奉化市"
                    }
                ]
            },
            {
                "code": "13303",
                "name": "温州市",
                "children": [
                    {
                        "code": "1330302",
                        "name": "鹿城区"
                    },
                    {
                        "code": "1330303",
                        "name": "龙湾区"
                    },
                    {
                        "code": "1330304",
                        "name": "瓯海区"
                    },
                    {
                        "code": "1330305",
                        "name": "洞头区"
                    },
                    {
                        "code": "1330324",
                        "name": "永嘉县"
                    },
                    {
                        "code": "1330326",
                        "name": "平阳县"
                    },
                    {
                        "code": "1330327",
                        "name": "苍南县"
                    },
                    {
                        "code": "1330328",
                        "name": "文成县"
                    },
                    {
                        "code": "1330329",
                        "name": "泰顺县"
                    },
                    {
                        "code": "1330381",
                        "name": "瑞安市"
                    },
                    {
                        "code": "1330382",
                        "name": "乐清市"
                    }
                ]
            },
            {
                "code": "13304",
                "name": "嘉兴市",
                "children": [
                    {
                        "code": "1330402",
                        "name": "南湖区"
                    },
                    {
                        "code": "1330411",
                        "name": "秀洲区"
                    },
                    {
                        "code": "1330421",
                        "name": "嘉善县"
                    },
                    {
                        "code": "1330424",
                        "name": "海盐县"
                    },
                    {
                        "code": "1330481",
                        "name": "海宁市"
                    },
                    {
                        "code": "1330482",
                        "name": "平湖市"
                    },
                    {
                        "code": "1330483",
                        "name": "桐乡市"
                    }
                ]
            },
            {
                "code": "13305",
                "name": "湖州市",
                "children": [
                    {
                        "code": "1330502",
                        "name": "吴兴区"
                    },
                    {
                        "code": "1330503",
                        "name": "南浔区"
                    },
                    {
                        "code": "1330521",
                        "name": "德清县"
                    },
                    {
                        "code": "1330522",
                        "name": "长兴县"
                    },
                    {
                        "code": "1330523",
                        "name": "安吉县"
                    }
                ]
            },
            {
                "code": "13306",
                "name": "绍兴市",
                "children": [
                    {
                        "code": "1330602",
                        "name": "越城区"
                    },
                    {
                        "code": "1330603",
                        "name": "柯桥区"
                    },
                    {
                        "code": "1330604",
                        "name": "上虞区"
                    },
                    {
                        "code": "1330624",
                        "name": "新昌县"
                    },
                    {
                        "code": "1330681",
                        "name": "诸暨市"
                    },
                    {
                        "code": "1330683",
                        "name": "嵊州市"
                    }
                ]
            },
            {
                "code": "13307",
                "name": "金华市",
                "children": [
                    {
                        "code": "1330702",
                        "name": "婺城区"
                    },
                    {
                        "code": "1330703",
                        "name": "金东区"
                    },
                    {
                        "code": "1330723",
                        "name": "武义县"
                    },
                    {
                        "code": "1330726",
                        "name": "浦江县"
                    },
                    {
                        "code": "1330727",
                        "name": "磐安县"
                    },
                    {
                        "code": "1330781",
                        "name": "兰溪市"
                    },
                    {
                        "code": "1330782",
                        "name": "义乌市"
                    },
                    {
                        "code": "1330783",
                        "name": "东阳市"
                    },
                    {
                        "code": "1330784",
                        "name": "永康市"
                    }
                ]
            },
            {
                "code": "13308",
                "name": "衢州市",
                "children": [
                    {
                        "code": "1330802",
                        "name": "柯城区"
                    },
                    {
                        "code": "1330803",
                        "name": "衢江区"
                    },
                    {
                        "code": "1330822",
                        "name": "常山县"
                    },
                    {
                        "code": "1330824",
                        "name": "开化县"
                    },
                    {
                        "code": "1330825",
                        "name": "龙游县"
                    },
                    {
                        "code": "1330881",
                        "name": "江山市"
                    }
                ]
            },
            {
                "code": "13309",
                "name": "舟山市",
                "children": [
                    {
                        "code": "1330902",
                        "name": "定海区"
                    },
                    {
                        "code": "1330903",
                        "name": "普陀区"
                    },
                    {
                        "code": "1330921",
                        "name": "岱山县"
                    },
                    {
                        "code": "1330922",
                        "name": "嵊泗县"
                    }
                ]
            },
            {
                "code": "13310",
                "name": "台州市",
                "children": [
                    {
                        "code": "1331002",
                        "name": "椒江区"
                    },
                    {
                        "code": "1331003",
                        "name": "黄岩区"
                    },
                    {
                        "code": "1331004",
                        "name": "路桥区"
                    },
                    {
                        "code": "1331021",
                        "name": "玉环县"
                    },
                    {
                        "code": "1331022",
                        "name": "三门县"
                    },
                    {
                        "code": "1331023",
                        "name": "天台县"
                    },
                    {
                        "code": "1331024",
                        "name": "仙居县"
                    },
                    {
                        "code": "1331081",
                        "name": "温岭市"
                    },
                    {
                        "code": "1331082",
                        "name": "临海市"
                    }
                ]
            },
            {
                "code": "13311",
                "name": "丽水市",
                "children": [
                    {
                        "code": "1331102",
                        "name": "莲都区"
                    },
                    {
                        "code": "1331121",
                        "name": "青田县"
                    },
                    {
                        "code": "1331122",
                        "name": "缙云县"
                    },
                    {
                        "code": "1331123",
                        "name": "遂昌县"
                    },
                    {
                        "code": "1331124",
                        "name": "松阳县"
                    },
                    {
                        "code": "1331125",
                        "name": "云和县"
                    },
                    {
                        "code": "1331126",
                        "name": "庆元县"
                    },
                    {
                        "code": "1331127",
                        "name": "景宁畲族自治县"
                    },
                    {
                        "code": "1331181",
                        "name": "龙泉市"
                    }
                ]
            }
        ]
    },
    {
        "code": "134",
        "name": "安徽省",
        "children": [
            {
                "code": "13401",
                "name": "合肥市",
                "children": [
                    {
                        "code": "1340102",
                        "name": "瑶海区"
                    },
                    {
                        "code": "1340103",
                        "name": "庐阳区"
                    },
                    {
                        "code": "1340104",
                        "name": "蜀山区"
                    },
                    {
                        "code": "1340111",
                        "name": "包河区"
                    },
                    {
                        "code": "1340121",
                        "name": "长丰县"
                    },
                    {
                        "code": "1340122",
                        "name": "肥东县"
                    },
                    {
                        "code": "1340123",
                        "name": "肥西县"
                    },
                    {
                        "code": "1340124",
                        "name": "庐江县"
                    },
                    {
                        "code": "1340181",
                        "name": "巢湖市"
                    }
                ]
            },
            {
                "code": "13402",
                "name": "芜湖市",
                "children": [
                    {
                        "code": "1340202",
                        "name": "镜湖区"
                    },
                    {
                        "code": "1340203",
                        "name": "弋江区"
                    },
                    {
                        "code": "1340207",
                        "name": "鸠江区"
                    },
                    {
                        "code": "1340208",
                        "name": "三山区"
                    },
                    {
                        "code": "1340221",
                        "name": "芜湖县"
                    },
                    {
                        "code": "1340222",
                        "name": "繁昌县"
                    },
                    {
                        "code": "1340223",
                        "name": "南陵县"
                    },
                    {
                        "code": "1340225",
                        "name": "无为县"
                    }
                ]
            },
            {
                "code": "13403",
                "name": "蚌埠市",
                "children": [
                    {
                        "code": "1340302",
                        "name": "龙子湖区"
                    },
                    {
                        "code": "1340303",
                        "name": "蚌山区"
                    },
                    {
                        "code": "1340304",
                        "name": "禹会区"
                    },
                    {
                        "code": "1340311",
                        "name": "淮上区"
                    },
                    {
                        "code": "1340321",
                        "name": "怀远县"
                    },
                    {
                        "code": "1340322",
                        "name": "五河县"
                    },
                    {
                        "code": "1340323",
                        "name": "固镇县"
                    }
                ]
            },
            {
                "code": "13404",
                "name": "淮南市",
                "children": [
                    {
                        "code": "1340402",
                        "name": "大通区"
                    },
                    {
                        "code": "1340403",
                        "name": "田家庵区"
                    },
                    {
                        "code": "1340404",
                        "name": "谢家集区"
                    },
                    {
                        "code": "1340405",
                        "name": "八公山区"
                    },
                    {
                        "code": "1340406",
                        "name": "潘集区"
                    },
                    {
                        "code": "1340421",
                        "name": "凤台县"
                    },
                    {
                        "code": "1340422",
                        "name": "寿县"
                    }
                ]
            },
            {
                "code": "13405",
                "name": "马鞍山市",
                "children": [
                    {
                        "code": "1340503",
                        "name": "花山区"
                    },
                    {
                        "code": "1340504",
                        "name": "雨山区"
                    },
                    {
                        "code": "1340506",
                        "name": "博望区"
                    },
                    {
                        "code": "1340521",
                        "name": "当涂县"
                    },
                    {
                        "code": "1340522",
                        "name": "含山县"
                    },
                    {
                        "code": "1340523",
                        "name": "和县"
                    }
                ]
            },
            {
                "code": "13406",
                "name": "淮北市",
                "children": [
                    {
                        "code": "1340602",
                        "name": "杜集区"
                    },
                    {
                        "code": "1340603",
                        "name": "相山区"
                    },
                    {
                        "code": "1340604",
                        "name": "烈山区"
                    },
                    {
                        "code": "1340621",
                        "name": "濉溪县"
                    }
                ]
            },
            {
                "code": "13407",
                "name": "铜陵市",
                "children": [
                    {
                        "code": "1340705",
                        "name": "铜官区"
                    },
                    {
                        "code": "1340706",
                        "name": "义安区"
                    },
                    {
                        "code": "1340711",
                        "name": "郊区"
                    },
                    {
                        "code": "1340722",
                        "name": "枞阳县"
                    }
                ]
            },
            {
                "code": "13408",
                "name": "安庆市",
                "children": [
                    {
                        "code": "1340802",
                        "name": "迎江区"
                    },
                    {
                        "code": "1340803",
                        "name": "大观区"
                    },
                    {
                        "code": "1340811",
                        "name": "宜秀区"
                    },
                    {
                        "code": "1340822",
                        "name": "怀宁县"
                    },
                    {
                        "code": "1340824",
                        "name": "潜山县"
                    },
                    {
                        "code": "1340825",
                        "name": "太湖县"
                    },
                    {
                        "code": "1340826",
                        "name": "宿松县"
                    },
                    {
                        "code": "1340827",
                        "name": "望江县"
                    },
                    {
                        "code": "1340828",
                        "name": "岳西县"
                    },
                    {
                        "code": "1340881",
                        "name": "桐城市"
                    }
                ]
            },
            {
                "code": "13410",
                "name": "黄山市",
                "children": [
                    {
                        "code": "1341002",
                        "name": "屯溪区"
                    },
                    {
                        "code": "1341003",
                        "name": "黄山区"
                    },
                    {
                        "code": "1341004",
                        "name": "徽州区"
                    },
                    {
                        "code": "1341021",
                        "name": "歙县"
                    },
                    {
                        "code": "1341022",
                        "name": "休宁县"
                    },
                    {
                        "code": "1341023",
                        "name": "黟县"
                    },
                    {
                        "code": "1341024",
                        "name": "祁门县"
                    }
                ]
            },
            {
                "code": "13411",
                "name": "滁州市",
                "children": [
                    {
                        "code": "1341102",
                        "name": "琅琊区"
                    },
                    {
                        "code": "1341103",
                        "name": "南谯区"
                    },
                    {
                        "code": "1341122",
                        "name": "来安县"
                    },
                    {
                        "code": "1341124",
                        "name": "全椒县"
                    },
                    {
                        "code": "1341125",
                        "name": "定远县"
                    },
                    {
                        "code": "1341126",
                        "name": "凤阳县"
                    },
                    {
                        "code": "1341181",
                        "name": "天长市"
                    },
                    {
                        "code": "1341182",
                        "name": "明光市"
                    }
                ]
            },
            {
                "code": "13412",
                "name": "阜阳市",
                "children": [
                    {
                        "code": "1341202",
                        "name": "颍州区"
                    },
                    {
                        "code": "1341203",
                        "name": "颍东区"
                    },
                    {
                        "code": "1341204",
                        "name": "颍泉区"
                    },
                    {
                        "code": "1341221",
                        "name": "临泉县"
                    },
                    {
                        "code": "1341222",
                        "name": "太和县"
                    },
                    {
                        "code": "1341225",
                        "name": "阜南县"
                    },
                    {
                        "code": "1341226",
                        "name": "颍上县"
                    },
                    {
                        "code": "1341282",
                        "name": "界首市"
                    }
                ]
            },
            {
                "code": "13413",
                "name": "宿州市",
                "children": [
                    {
                        "code": "1341302",
                        "name": "埇桥区"
                    },
                    {
                        "code": "1341321",
                        "name": "砀山县"
                    },
                    {
                        "code": "1341322",
                        "name": "萧县"
                    },
                    {
                        "code": "1341323",
                        "name": "灵璧县"
                    },
                    {
                        "code": "1341324",
                        "name": "泗县"
                    }
                ]
            },
            {
                "code": "13415",
                "name": "六安市",
                "children": [
                    {
                        "code": "1341502",
                        "name": "金安区"
                    },
                    {
                        "code": "1341503",
                        "name": "裕安区"
                    },
                    {
                        "code": "1341504",
                        "name": "叶集区"
                    },
                    {
                        "code": "1341522",
                        "name": "霍邱县"
                    },
                    {
                        "code": "1341523",
                        "name": "舒城县"
                    },
                    {
                        "code": "1341524",
                        "name": "金寨县"
                    },
                    {
                        "code": "1341525",
                        "name": "霍山县"
                    }
                ]
            },
            {
                "code": "13416",
                "name": "亳州市",
                "children": [
                    {
                        "code": "1341602",
                        "name": "谯城区"
                    },
                    {
                        "code": "1341621",
                        "name": "涡阳县"
                    },
                    {
                        "code": "1341622",
                        "name": "蒙城县"
                    },
                    {
                        "code": "1341623",
                        "name": "利辛县"
                    }
                ]
            },
            {
                "code": "13417",
                "name": "池州市",
                "children": [
                    {
                        "code": "1341702",
                        "name": "贵池区"
                    },
                    {
                        "code": "1341721",
                        "name": "东至县"
                    },
                    {
                        "code": "1341722",
                        "name": "石台县"
                    },
                    {
                        "code": "1341723",
                        "name": "青阳县"
                    }
                ]
            },
            {
                "code": "13418",
                "name": "宣城市",
                "children": [
                    {
                        "code": "1341802",
                        "name": "宣州区"
                    },
                    {
                        "code": "1341821",
                        "name": "郎溪县"
                    },
                    {
                        "code": "1341822",
                        "name": "广德县"
                    },
                    {
                        "code": "1341823",
                        "name": "泾县"
                    },
                    {
                        "code": "1341824",
                        "name": "绩溪县"
                    },
                    {
                        "code": "1341825",
                        "name": "旌德县"
                    },
                    {
                        "code": "1341881",
                        "name": "宁国市"
                    }
                ]
            }
        ]
    },
    {
        "code": "135",
        "name": "福建省",
        "children": [
            {
                "code": "13501",
                "name": "福州市",
                "children": [
                    {
                        "code": "1350102",
                        "name": "鼓楼区"
                    },
                    {
                        "code": "1350103",
                        "name": "台江区"
                    },
                    {
                        "code": "1350104",
                        "name": "仓山区"
                    },
                    {
                        "code": "1350105",
                        "name": "马尾区"
                    },
                    {
                        "code": "1350111",
                        "name": "晋安区"
                    },
                    {
                        "code": "1350121",
                        "name": "闽侯县"
                    },
                    {
                        "code": "1350122",
                        "name": "连江县"
                    },
                    {
                        "code": "1350123",
                        "name": "罗源县"
                    },
                    {
                        "code": "1350124",
                        "name": "闽清县"
                    },
                    {
                        "code": "1350125",
                        "name": "永泰县"
                    },
                    {
                        "code": "1350128",
                        "name": "平潭县"
                    },
                    {
                        "code": "1350181",
                        "name": "福清市"
                    },
                    {
                        "code": "1350182",
                        "name": "长乐市"
                    }
                ]
            },
            {
                "code": "13502",
                "name": "厦门市",
                "children": [
                    {
                        "code": "1350203",
                        "name": "思明区"
                    },
                    {
                        "code": "1350205",
                        "name": "海沧区"
                    },
                    {
                        "code": "1350206",
                        "name": "湖里区"
                    },
                    {
                        "code": "1350211",
                        "name": "集美区"
                    },
                    {
                        "code": "1350212",
                        "name": "同安区"
                    },
                    {
                        "code": "1350213",
                        "name": "翔安区"
                    }
                ]
            },
            {
                "code": "13503",
                "name": "莆田市",
                "children": [
                    {
                        "code": "1350302",
                        "name": "城厢区"
                    },
                    {
                        "code": "1350303",
                        "name": "涵江区"
                    },
                    {
                        "code": "1350304",
                        "name": "荔城区"
                    },
                    {
                        "code": "1350305",
                        "name": "秀屿区"
                    },
                    {
                        "code": "1350322",
                        "name": "仙游县"
                    }
                ]
            },
            {
                "code": "13504",
                "name": "三明市",
                "children": [
                    {
                        "code": "1350402",
                        "name": "梅列区"
                    },
                    {
                        "code": "1350403",
                        "name": "三元区"
                    },
                    {
                        "code": "1350421",
                        "name": "明溪县"
                    },
                    {
                        "code": "1350423",
                        "name": "清流县"
                    },
                    {
                        "code": "1350424",
                        "name": "宁化县"
                    },
                    {
                        "code": "1350425",
                        "name": "大田县"
                    },
                    {
                        "code": "1350426",
                        "name": "尤溪县"
                    },
                    {
                        "code": "1350427",
                        "name": "沙县"
                    },
                    {
                        "code": "1350428",
                        "name": "将乐县"
                    },
                    {
                        "code": "1350429",
                        "name": "泰宁县"
                    },
                    {
                        "code": "1350430",
                        "name": "建宁县"
                    },
                    {
                        "code": "1350481",
                        "name": "永安市"
                    }
                ]
            },
            {
                "code": "13505",
                "name": "泉州市",
                "children": [
                    {
                        "code": "1350502",
                        "name": "鲤城区"
                    },
                    {
                        "code": "1350503",
                        "name": "丰泽区"
                    },
                    {
                        "code": "1350504",
                        "name": "洛江区"
                    },
                    {
                        "code": "1350505",
                        "name": "泉港区"
                    },
                    {
                        "code": "1350521",
                        "name": "惠安县"
                    },
                    {
                        "code": "1350524",
                        "name": "安溪县"
                    },
                    {
                        "code": "1350525",
                        "name": "永春县"
                    },
                    {
                        "code": "1350526",
                        "name": "德化县"
                    },
                    {
                        "code": "1350527",
                        "name": "金门县"
                    },
                    {
                        "code": "1350581",
                        "name": "石狮市"
                    },
                    {
                        "code": "1350582",
                        "name": "晋江市"
                    },
                    {
                        "code": "1350583",
                        "name": "南安市"
                    }
                ]
            },
            {
                "code": "13506",
                "name": "漳州市",
                "children": [
                    {
                        "code": "1350602",
                        "name": "芗城区"
                    },
                    {
                        "code": "1350603",
                        "name": "龙文区"
                    },
                    {
                        "code": "1350622",
                        "name": "云霄县"
                    },
                    {
                        "code": "1350623",
                        "name": "漳浦县"
                    },
                    {
                        "code": "1350624",
                        "name": "诏安县"
                    },
                    {
                        "code": "1350625",
                        "name": "长泰县"
                    },
                    {
                        "code": "1350626",
                        "name": "东山县"
                    },
                    {
                        "code": "1350627",
                        "name": "南靖县"
                    },
                    {
                        "code": "1350628",
                        "name": "平和县"
                    },
                    {
                        "code": "1350629",
                        "name": "华安县"
                    },
                    {
                        "code": "1350681",
                        "name": "龙海市"
                    }
                ]
            },
            {
                "code": "13507",
                "name": "南平市",
                "children": [
                    {
                        "code": "1350702",
                        "name": "延平区"
                    },
                    {
                        "code": "1350703",
                        "name": "建阳区"
                    },
                    {
                        "code": "1350721",
                        "name": "顺昌县"
                    },
                    {
                        "code": "1350722",
                        "name": "浦城县"
                    },
                    {
                        "code": "1350723",
                        "name": "光泽县"
                    },
                    {
                        "code": "1350724",
                        "name": "松溪县"
                    },
                    {
                        "code": "1350725",
                        "name": "政和县"
                    },
                    {
                        "code": "1350781",
                        "name": "邵武市"
                    },
                    {
                        "code": "1350782",
                        "name": "武夷山市"
                    },
                    {
                        "code": "1350783",
                        "name": "建瓯市"
                    }
                ]
            },
            {
                "code": "13508",
                "name": "龙岩市",
                "children": [
                    {
                        "code": "1350802",
                        "name": "新罗区"
                    },
                    {
                        "code": "1350803",
                        "name": "永定区"
                    },
                    {
                        "code": "1350821",
                        "name": "长汀县"
                    },
                    {
                        "code": "1350823",
                        "name": "上杭县"
                    },
                    {
                        "code": "1350824",
                        "name": "武平县"
                    },
                    {
                        "code": "1350825",
                        "name": "连城县"
                    },
                    {
                        "code": "1350881",
                        "name": "漳平市"
                    }
                ]
            },
            {
                "code": "13509",
                "name": "宁德市",
                "children": [
                    {
                        "code": "1350902",
                        "name": "蕉城区"
                    },
                    {
                        "code": "1350921",
                        "name": "霞浦县"
                    },
                    {
                        "code": "1350922",
                        "name": "古田县"
                    },
                    {
                        "code": "1350923",
                        "name": "屏南县"
                    },
                    {
                        "code": "1350924",
                        "name": "寿宁县"
                    },
                    {
                        "code": "1350925",
                        "name": "周宁县"
                    },
                    {
                        "code": "1350926",
                        "name": "柘荣县"
                    },
                    {
                        "code": "1350981",
                        "name": "福安市"
                    },
                    {
                        "code": "1350982",
                        "name": "福鼎市"
                    }
                ]
            }
        ]
    },
    {
        "code": "136",
        "name": "江西省",
        "children": [
            {
                "code": "13601",
                "name": "南昌市",
                "children": [
                    {
                        "code": "1360102",
                        "name": "东湖区"
                    },
                    {
                        "code": "1360103",
                        "name": "西湖区"
                    },
                    {
                        "code": "1360104",
                        "name": "青云谱区"
                    },
                    {
                        "code": "1360105",
                        "name": "湾里区"
                    },
                    {
                        "code": "1360111",
                        "name": "青山湖区"
                    },
                    {
                        "code": "1360112",
                        "name": "新建区"
                    },
                    {
                        "code": "1360121",
                        "name": "南昌县"
                    },
                    {
                        "code": "1360123",
                        "name": "安义县"
                    },
                    {
                        "code": "1360124",
                        "name": "进贤县"
                    }
                ]
            },
            {
                "code": "13602",
                "name": "景德镇市",
                "children": [
                    {
                        "code": "1360202",
                        "name": "昌江区"
                    },
                    {
                        "code": "1360203",
                        "name": "珠山区"
                    },
                    {
                        "code": "1360222",
                        "name": "浮梁县"
                    },
                    {
                        "code": "1360281",
                        "name": "乐平市"
                    }
                ]
            },
            {
                "code": "13603",
                "name": "萍乡市",
                "children": [
                    {
                        "code": "1360302",
                        "name": "安源区"
                    },
                    {
                        "code": "1360313",
                        "name": "湘东区"
                    },
                    {
                        "code": "1360321",
                        "name": "莲花县"
                    },
                    {
                        "code": "1360322",
                        "name": "上栗县"
                    },
                    {
                        "code": "1360323",
                        "name": "芦溪县"
                    }
                ]
            },
            {
                "code": "13604",
                "name": "九江市",
                "children": [
                    {
                        "code": "1360402",
                        "name": "庐山区"
                    },
                    {
                        "code": "1360403",
                        "name": "浔阳区"
                    },
                    {
                        "code": "1360421",
                        "name": "九江县"
                    },
                    {
                        "code": "1360423",
                        "name": "武宁县"
                    },
                    {
                        "code": "1360424",
                        "name": "修水县"
                    },
                    {
                        "code": "1360425",
                        "name": "永修县"
                    },
                    {
                        "code": "1360426",
                        "name": "德安县"
                    },
                    {
                        "code": "1360427",
                        "name": "星子县"
                    },
                    {
                        "code": "1360428",
                        "name": "都昌县"
                    },
                    {
                        "code": "1360429",
                        "name": "湖口县"
                    },
                    {
                        "code": "1360430",
                        "name": "彭泽县"
                    },
                    {
                        "code": "1360481",
                        "name": "瑞昌市"
                    },
                    {
                        "code": "1360482",
                        "name": "共青城市"
                    }
                ]
            },
            {
                "code": "13605",
                "name": "新余市",
                "children": [
                    {
                        "code": "1360502",
                        "name": "渝水区"
                    },
                    {
                        "code": "1360521",
                        "name": "分宜县"
                    }
                ]
            },
            {
                "code": "13606",
                "name": "鹰潭市",
                "children": [
                    {
                        "code": "1360602",
                        "name": "月湖区"
                    },
                    {
                        "code": "1360622",
                        "name": "余江县"
                    },
                    {
                        "code": "1360681",
                        "name": "贵溪市"
                    }
                ]
            },
            {
                "code": "13607",
                "name": "赣州市",
                "children": [
                    {
                        "code": "1360702",
                        "name": "章贡区"
                    },
                    {
                        "code": "1360703",
                        "name": "南康区"
                    },
                    {
                        "code": "1360721",
                        "name": "赣县"
                    },
                    {
                        "code": "1360722",
                        "name": "信丰县"
                    },
                    {
                        "code": "1360723",
                        "name": "大余县"
                    },
                    {
                        "code": "1360724",
                        "name": "上犹县"
                    },
                    {
                        "code": "1360725",
                        "name": "崇义县"
                    },
                    {
                        "code": "1360726",
                        "name": "安远县"
                    },
                    {
                        "code": "1360727",
                        "name": "龙南县"
                    },
                    {
                        "code": "1360728",
                        "name": "定南县"
                    },
                    {
                        "code": "1360729",
                        "name": "全南县"
                    },
                    {
                        "code": "1360730",
                        "name": "宁都县"
                    },
                    {
                        "code": "1360731",
                        "name": "于都县"
                    },
                    {
                        "code": "1360732",
                        "name": "兴国县"
                    },
                    {
                        "code": "1360733",
                        "name": "会昌县"
                    },
                    {
                        "code": "1360734",
                        "name": "寻乌县"
                    },
                    {
                        "code": "1360735",
                        "name": "石城县"
                    },
                    {
                        "code": "1360781",
                        "name": "瑞金市"
                    }
                ]
            },
            {
                "code": "13608",
                "name": "吉安市",
                "children": [
                    {
                        "code": "1360802",
                        "name": "吉州区"
                    },
                    {
                        "code": "1360803",
                        "name": "青原区"
                    },
                    {
                        "code": "1360821",
                        "name": "吉安县"
                    },
                    {
                        "code": "1360822",
                        "name": "吉水县"
                    },
                    {
                        "code": "1360823",
                        "name": "峡江县"
                    },
                    {
                        "code": "1360824",
                        "name": "新干县"
                    },
                    {
                        "code": "1360825",
                        "name": "永丰县"
                    },
                    {
                        "code": "1360826",
                        "name": "泰和县"
                    },
                    {
                        "code": "1360827",
                        "name": "遂川县"
                    },
                    {
                        "code": "1360828",
                        "name": "万安县"
                    },
                    {
                        "code": "1360829",
                        "name": "安福县"
                    },
                    {
                        "code": "1360830",
                        "name": "永新县"
                    },
                    {
                        "code": "1360881",
                        "name": "井冈山市"
                    }
                ]
            },
            {
                "code": "13609",
                "name": "宜春市",
                "children": [
                    {
                        "code": "1360902",
                        "name": "袁州区"
                    },
                    {
                        "code": "1360921",
                        "name": "奉新县"
                    },
                    {
                        "code": "1360922",
                        "name": "万载县"
                    },
                    {
                        "code": "1360923",
                        "name": "上高县"
                    },
                    {
                        "code": "1360924",
                        "name": "宜丰县"
                    },
                    {
                        "code": "1360925",
                        "name": "靖安县"
                    },
                    {
                        "code": "1360926",
                        "name": "铜鼓县"
                    },
                    {
                        "code": "1360981",
                        "name": "丰城市"
                    },
                    {
                        "code": "1360982",
                        "name": "樟树市"
                    },
                    {
                        "code": "1360983",
                        "name": "高安市"
                    }
                ]
            },
            {
                "code": "13610",
                "name": "抚州市",
                "children": [
                    {
                        "code": "1361002",
                        "name": "临川区"
                    },
                    {
                        "code": "1361021",
                        "name": "南城县"
                    },
                    {
                        "code": "1361022",
                        "name": "黎川县"
                    },
                    {
                        "code": "1361023",
                        "name": "南丰县"
                    },
                    {
                        "code": "1361024",
                        "name": "崇仁县"
                    },
                    {
                        "code": "1361025",
                        "name": "乐安县"
                    },
                    {
                        "code": "1361026",
                        "name": "宜黄县"
                    },
                    {
                        "code": "1361027",
                        "name": "金溪县"
                    },
                    {
                        "code": "1361028",
                        "name": "资溪县"
                    },
                    {
                        "code": "1361029",
                        "name": "东乡县"
                    },
                    {
                        "code": "1361030",
                        "name": "广昌县"
                    }
                ]
            },
            {
                "code": "13611",
                "name": "上饶市",
                "children": [
                    {
                        "code": "1361102",
                        "name": "信州区"
                    },
                    {
                        "code": "1361103",
                        "name": "广丰区"
                    },
                    {
                        "code": "1361121",
                        "name": "上饶县"
                    },
                    {
                        "code": "1361123",
                        "name": "玉山县"
                    },
                    {
                        "code": "1361124",
                        "name": "铅山县"
                    },
                    {
                        "code": "1361125",
                        "name": "横峰县"
                    },
                    {
                        "code": "1361126",
                        "name": "弋阳县"
                    },
                    {
                        "code": "1361127",
                        "name": "余干县"
                    },
                    {
                        "code": "1361128",
                        "name": "鄱阳县"
                    },
                    {
                        "code": "1361129",
                        "name": "万年县"
                    },
                    {
                        "code": "1361130",
                        "name": "婺源县"
                    },
                    {
                        "code": "1361181",
                        "name": "德兴市"
                    }
                ]
            }
        ]
    },
    {
        "code": "137",
        "name": "山东省",
        "children": [
            {
                "code": "13701",
                "name": "济南市",
                "children": [
                    {
                        "code": "1370102",
                        "name": "历下区"
                    },
                    {
                        "code": "1370103",
                        "name": "市中区"
                    },
                    {
                        "code": "1370104",
                        "name": "槐荫区"
                    },
                    {
                        "code": "1370105",
                        "name": "天桥区"
                    },
                    {
                        "code": "1370112",
                        "name": "历城区"
                    },
                    {
                        "code": "1370113",
                        "name": "长清区"
                    },
                    {
                        "code": "1370124",
                        "name": "平阴县"
                    },
                    {
                        "code": "1370125",
                        "name": "济阳县"
                    },
                    {
                        "code": "1370126",
                        "name": "商河县"
                    },
                    {
                        "code": "1370181",
                        "name": "章丘市"
                    }
                ]
            },
            {
                "code": "13702",
                "name": "青岛市",
                "children": [
                    {
                        "code": "1370202",
                        "name": "市南区"
                    },
                    {
                        "code": "1370203",
                        "name": "市北区"
                    },
                    {
                        "code": "1370211",
                        "name": "黄岛区"
                    },
                    {
                        "code": "1370212",
                        "name": "崂山区"
                    },
                    {
                        "code": "1370213",
                        "name": "李沧区"
                    },
                    {
                        "code": "1370214",
                        "name": "城阳区"
                    },
                    {
                        "code": "1370281",
                        "name": "胶州市"
                    },
                    {
                        "code": "1370282",
                        "name": "即墨市"
                    },
                    {
                        "code": "1370283",
                        "name": "平度市"
                    },
                    {
                        "code": "1370285",
                        "name": "莱西市"
                    }
                ]
            },
            {
                "code": "13703",
                "name": "淄博市",
                "children": [
                    {
                        "code": "1370302",
                        "name": "淄川区"
                    },
                    {
                        "code": "1370303",
                        "name": "张店区"
                    },
                    {
                        "code": "1370304",
                        "name": "博山区"
                    },
                    {
                        "code": "1370305",
                        "name": "临淄区"
                    },
                    {
                        "code": "1370306",
                        "name": "周村区"
                    },
                    {
                        "code": "1370321",
                        "name": "桓台县"
                    },
                    {
                        "code": "1370322",
                        "name": "高青县"
                    },
                    {
                        "code": "1370323",
                        "name": "沂源县"
                    }
                ]
            },
            {
                "code": "13704",
                "name": "枣庄市",
                "children": [
                    {
                        "code": "1370402",
                        "name": "市中区"
                    },
                    {
                        "code": "1370403",
                        "name": "薛城区"
                    },
                    {
                        "code": "1370404",
                        "name": "峄城区"
                    },
                    {
                        "code": "1370405",
                        "name": "台儿庄区"
                    },
                    {
                        "code": "1370406",
                        "name": "山亭区"
                    },
                    {
                        "code": "1370481",
                        "name": "滕州市"
                    }
                ]
            },
            {
                "code": "13705",
                "name": "东营市",
                "children": [
                    {
                        "code": "1370502",
                        "name": "东营区"
                    },
                    {
                        "code": "1370503",
                        "name": "河口区"
                    },
                    {
                        "code": "1370521",
                        "name": "垦利县"
                    },
                    {
                        "code": "1370522",
                        "name": "利津县"
                    },
                    {
                        "code": "1370523",
                        "name": "广饶县"
                    }
                ]
            },
            {
                "code": "13706",
                "name": "烟台市",
                "children": [
                    {
                        "code": "1370602",
                        "name": "芝罘区"
                    },
                    {
                        "code": "1370611",
                        "name": "福山区"
                    },
                    {
                        "code": "1370612",
                        "name": "牟平区"
                    },
                    {
                        "code": "1370613",
                        "name": "莱山区"
                    },
                    {
                        "code": "1370634",
                        "name": "长岛县"
                    },
                    {
                        "code": "1370681",
                        "name": "龙口市"
                    },
                    {
                        "code": "1370682",
                        "name": "莱阳市"
                    },
                    {
                        "code": "1370683",
                        "name": "莱州市"
                    },
                    {
                        "code": "1370684",
                        "name": "蓬莱市"
                    },
                    {
                        "code": "1370685",
                        "name": "招远市"
                    },
                    {
                        "code": "1370686",
                        "name": "栖霞市"
                    },
                    {
                        "code": "1370687",
                        "name": "海阳市"
                    }
                ]
            },
            {
                "code": "13707",
                "name": "潍坊市",
                "children": [
                    {
                        "code": "1370702",
                        "name": "潍城区"
                    },
                    {
                        "code": "1370703",
                        "name": "寒亭区"
                    },
                    {
                        "code": "1370704",
                        "name": "坊子区"
                    },
                    {
                        "code": "1370705",
                        "name": "奎文区"
                    },
                    {
                        "code": "1370724",
                        "name": "临朐县"
                    },
                    {
                        "code": "1370725",
                        "name": "昌乐县"
                    },
                    {
                        "code": "1370781",
                        "name": "青州市"
                    },
                    {
                        "code": "1370782",
                        "name": "诸城市"
                    },
                    {
                        "code": "1370783",
                        "name": "寿光市"
                    },
                    {
                        "code": "1370784",
                        "name": "安丘市"
                    },
                    {
                        "code": "1370785",
                        "name": "高密市"
                    },
                    {
                        "code": "1370786",
                        "name": "昌邑市"
                    }
                ]
            },
            {
                "code": "13708",
                "name": "济宁市",
                "children": [
                    {
                        "code": "1370811",
                        "name": "任城区"
                    },
                    {
                        "code": "1370812",
                        "name": "兖州区"
                    },
                    {
                        "code": "1370826",
                        "name": "微山县"
                    },
                    {
                        "code": "1370827",
                        "name": "鱼台县"
                    },
                    {
                        "code": "1370828",
                        "name": "金乡县"
                    },
                    {
                        "code": "1370829",
                        "name": "嘉祥县"
                    },
                    {
                        "code": "1370830",
                        "name": "汶上县"
                    },
                    {
                        "code": "1370831",
                        "name": "泗水县"
                    },
                    {
                        "code": "1370832",
                        "name": "梁山县"
                    },
                    {
                        "code": "1370881",
                        "name": "曲阜市"
                    },
                    {
                        "code": "1370883",
                        "name": "邹城市"
                    }
                ]
            },
            {
                "code": "13709",
                "name": "泰安市",
                "children": [
                    {
                        "code": "1370902",
                        "name": "泰山区"
                    },
                    {
                        "code": "1370911",
                        "name": "岱岳区"
                    },
                    {
                        "code": "1370921",
                        "name": "宁阳县"
                    },
                    {
                        "code": "1370923",
                        "name": "东平县"
                    },
                    {
                        "code": "1370982",
                        "name": "新泰市"
                    },
                    {
                        "code": "1370983",
                        "name": "肥城市"
                    }
                ]
            },
            {
                "code": "13710",
                "name": "威海市",
                "children": [
                    {
                        "code": "1371002",
                        "name": "环翠区"
                    },
                    {
                        "code": "1371003",
                        "name": "文登区"
                    },
                    {
                        "code": "1371082",
                        "name": "荣成市"
                    },
                    {
                        "code": "1371083",
                        "name": "乳山市"
                    }
                ]
            },
            {
                "code": "13711",
                "name": "日照市",
                "children": [
                    {
                        "code": "1371102",
                        "name": "东港区"
                    },
                    {
                        "code": "1371103",
                        "name": "岚山区"
                    },
                    {
                        "code": "1371121",
                        "name": "五莲县"
                    },
                    {
                        "code": "1371122",
                        "name": "莒县"
                    }
                ]
            },
            {
                "code": "13712",
                "name": "莱芜市",
                "children": [
                    {
                        "code": "1371202",
                        "name": "莱城区"
                    },
                    {
                        "code": "1371203",
                        "name": "钢城区"
                    }
                ]
            },
            {
                "code": "13713",
                "name": "临沂市",
                "children": [
                    {
                        "code": "1371302",
                        "name": "兰山区"
                    },
                    {
                        "code": "1371311",
                        "name": "罗庄区"
                    },
                    {
                        "code": "1371312",
                        "name": "河东区"
                    },
                    {
                        "code": "1371321",
                        "name": "沂南县"
                    },
                    {
                        "code": "1371322",
                        "name": "郯城县"
                    },
                    {
                        "code": "1371323",
                        "name": "沂水县"
                    },
                    {
                        "code": "1371324",
                        "name": "兰陵县"
                    },
                    {
                        "code": "1371325",
                        "name": "费县"
                    },
                    {
                        "code": "1371326",
                        "name": "平邑县"
                    },
                    {
                        "code": "1371327",
                        "name": "莒南县"
                    },
                    {
                        "code": "1371328",
                        "name": "蒙阴县"
                    },
                    {
                        "code": "1371329",
                        "name": "临沭县"
                    }
                ]
            },
            {
                "code": "13714",
                "name": "德州市",
                "children": [
                    {
                        "code": "1371402",
                        "name": "德城区"
                    },
                    {
                        "code": "1371403",
                        "name": "陵城区"
                    },
                    {
                        "code": "1371422",
                        "name": "宁津县"
                    },
                    {
                        "code": "1371423",
                        "name": "庆云县"
                    },
                    {
                        "code": "1371424",
                        "name": "临邑县"
                    },
                    {
                        "code": "1371425",
                        "name": "齐河县"
                    },
                    {
                        "code": "1371426",
                        "name": "平原县"
                    },
                    {
                        "code": "1371427",
                        "name": "夏津县"
                    },
                    {
                        "code": "1371428",
                        "name": "武城县"
                    },
                    {
                        "code": "1371481",
                        "name": "乐陵市"
                    },
                    {
                        "code": "1371482",
                        "name": "禹城市"
                    }
                ]
            },
            {
                "code": "13715",
                "name": "聊城市",
                "children": [
                    {
                        "code": "1371502",
                        "name": "东昌府区"
                    },
                    {
                        "code": "1371521",
                        "name": "阳谷县"
                    },
                    {
                        "code": "1371522",
                        "name": "莘县"
                    },
                    {
                        "code": "1371523",
                        "name": "茌平县"
                    },
                    {
                        "code": "1371524",
                        "name": "东阿县"
                    },
                    {
                        "code": "1371525",
                        "name": "冠县"
                    },
                    {
                        "code": "1371526",
                        "name": "高唐县"
                    },
                    {
                        "code": "1371581",
                        "name": "临清市"
                    }
                ]
            },
            {
                "code": "13716",
                "name": "滨州市",
                "children": [
                    {
                        "code": "1371602",
                        "name": "滨城区"
                    },
                    {
                        "code": "1371603",
                        "name": "沾化区"
                    },
                    {
                        "code": "1371621",
                        "name": "惠民县"
                    },
                    {
                        "code": "1371622",
                        "name": "阳信县"
                    },
                    {
                        "code": "1371623",
                        "name": "无棣县"
                    },
                    {
                        "code": "1371625",
                        "name": "博兴县"
                    },
                    {
                        "code": "1371626",
                        "name": "邹平县"
                    }
                ]
            },
            {
                "code": "13717",
                "name": "菏泽市",
                "children": [
                    {
                        "code": "1371702",
                        "name": "牡丹区"
                    },
                    {
                        "code": "1371721",
                        "name": "曹县"
                    },
                    {
                        "code": "1371722",
                        "name": "单县"
                    },
                    {
                        "code": "1371723",
                        "name": "成武县"
                    },
                    {
                        "code": "1371724",
                        "name": "巨野县"
                    },
                    {
                        "code": "1371725",
                        "name": "郓城县"
                    },
                    {
                        "code": "1371726",
                        "name": "鄄城县"
                    },
                    {
                        "code": "1371727",
                        "name": "定陶县"
                    },
                    {
                        "code": "1371728",
                        "name": "东明县"
                    }
                ]
            }
        ]
    },
    {
        "code": "141",
        "name": "河南省",
        "children": [
            {
                "code": "14101",
                "name": "郑州市",
                "children": [
                    {
                        "code": "1410102",
                        "name": "中原区"
                    },
                    {
                        "code": "1410103",
                        "name": "二七区"
                    },
                    {
                        "code": "1410104",
                        "name": "管城回族区"
                    },
                    {
                        "code": "1410105",
                        "name": "金水区"
                    },
                    {
                        "code": "1410106",
                        "name": "上街区"
                    },
                    {
                        "code": "1410108",
                        "name": "惠济区"
                    },
                    {
                        "code": "1410122",
                        "name": "中牟县"
                    },
                    {
                        "code": "1410181",
                        "name": "巩义市"
                    },
                    {
                        "code": "1410182",
                        "name": "荥阳市"
                    },
                    {
                        "code": "1410183",
                        "name": "新密市"
                    },
                    {
                        "code": "1410184",
                        "name": "新郑市"
                    },
                    {
                        "code": "1410185",
                        "name": "登封市"
                    }
                ]
            },
            {
                "code": "14102",
                "name": "开封市",
                "children": [
                    {
                        "code": "1410202",
                        "name": "龙亭区"
                    },
                    {
                        "code": "1410203",
                        "name": "顺河回族区"
                    },
                    {
                        "code": "1410204",
                        "name": "鼓楼区"
                    },
                    {
                        "code": "1410205",
                        "name": "禹王台区"
                    },
                    {
                        "code": "1410212",
                        "name": "祥符区"
                    },
                    {
                        "code": "1410221",
                        "name": "杞县"
                    },
                    {
                        "code": "1410222",
                        "name": "通许县"
                    },
                    {
                        "code": "1410223",
                        "name": "尉氏县"
                    },
                    {
                        "code": "1410225",
                        "name": "兰考县"
                    }
                ]
            },
            {
                "code": "14103",
                "name": "洛阳市",
                "children": [
                    {
                        "code": "1410302",
                        "name": "老城区"
                    },
                    {
                        "code": "1410303",
                        "name": "西工区"
                    },
                    {
                        "code": "1410304",
                        "name": "瀍河回族区"
                    },
                    {
                        "code": "1410305",
                        "name": "涧西区"
                    },
                    {
                        "code": "1410306",
                        "name": "吉利区"
                    },
                    {
                        "code": "1410311",
                        "name": "洛龙区"
                    },
                    {
                        "code": "1410322",
                        "name": "孟津县"
                    },
                    {
                        "code": "1410323",
                        "name": "新安县"
                    },
                    {
                        "code": "1410324",
                        "name": "栾川县"
                    },
                    {
                        "code": "1410325",
                        "name": "嵩县"
                    },
                    {
                        "code": "1410326",
                        "name": "汝阳县"
                    },
                    {
                        "code": "1410327",
                        "name": "宜阳县"
                    },
                    {
                        "code": "1410328",
                        "name": "洛宁县"
                    },
                    {
                        "code": "1410329",
                        "name": "伊川县"
                    },
                    {
                        "code": "1410381",
                        "name": "偃师市"
                    }
                ]
            },
            {
                "code": "14104",
                "name": "平顶山市",
                "children": [
                    {
                        "code": "1410402",
                        "name": "新华区"
                    },
                    {
                        "code": "1410403",
                        "name": "卫东区"
                    },
                    {
                        "code": "1410404",
                        "name": "石龙区"
                    },
                    {
                        "code": "1410411",
                        "name": "湛河区"
                    },
                    {
                        "code": "1410421",
                        "name": "宝丰县"
                    },
                    {
                        "code": "1410422",
                        "name": "叶县"
                    },
                    {
                        "code": "1410423",
                        "name": "鲁山县"
                    },
                    {
                        "code": "1410425",
                        "name": "郏县"
                    },
                    {
                        "code": "1410481",
                        "name": "舞钢市"
                    },
                    {
                        "code": "1410482",
                        "name": "汝州市"
                    }
                ]
            },
            {
                "code": "14105",
                "name": "安阳市",
                "children": [
                    {
                        "code": "1410502",
                        "name": "文峰区"
                    },
                    {
                        "code": "1410503",
                        "name": "北关区"
                    },
                    {
                        "code": "1410505",
                        "name": "殷都区"
                    },
                    {
                        "code": "1410506",
                        "name": "龙安区"
                    },
                    {
                        "code": "1410522",
                        "name": "安阳县"
                    },
                    {
                        "code": "1410523",
                        "name": "汤阴县"
                    },
                    {
                        "code": "1410526",
                        "name": "滑县"
                    },
                    {
                        "code": "1410527",
                        "name": "内黄县"
                    },
                    {
                        "code": "1410581",
                        "name": "林州市"
                    }
                ]
            },
            {
                "code": "14106",
                "name": "鹤壁市",
                "children": [
                    {
                        "code": "1410602",
                        "name": "鹤山区"
                    },
                    {
                        "code": "1410603",
                        "name": "山城区"
                    },
                    {
                        "code": "1410611",
                        "name": "淇滨区"
                    },
                    {
                        "code": "1410621",
                        "name": "浚县"
                    },
                    {
                        "code": "1410622",
                        "name": "淇县"
                    }
                ]
            },
            {
                "code": "14107",
                "name": "新乡市",
                "children": [
                    {
                        "code": "1410702",
                        "name": "红旗区"
                    },
                    {
                        "code": "1410703",
                        "name": "卫滨区"
                    },
                    {
                        "code": "1410704",
                        "name": "凤泉区"
                    },
                    {
                        "code": "1410711",
                        "name": "牧野区"
                    },
                    {
                        "code": "1410721",
                        "name": "新乡县"
                    },
                    {
                        "code": "1410724",
                        "name": "获嘉县"
                    },
                    {
                        "code": "1410725",
                        "name": "原阳县"
                    },
                    {
                        "code": "1410726",
                        "name": "延津县"
                    },
                    {
                        "code": "1410727",
                        "name": "封丘县"
                    },
                    {
                        "code": "1410728",
                        "name": "长垣县"
                    },
                    {
                        "code": "1410781",
                        "name": "卫辉市"
                    },
                    {
                        "code": "1410782",
                        "name": "辉县市"
                    }
                ]
            },
            {
                "code": "14108",
                "name": "焦作市",
                "children": [
                    {
                        "code": "1410802",
                        "name": "解放区"
                    },
                    {
                        "code": "1410803",
                        "name": "中站区"
                    },
                    {
                        "code": "1410804",
                        "name": "马村区"
                    },
                    {
                        "code": "1410811",
                        "name": "山阳区"
                    },
                    {
                        "code": "1410821",
                        "name": "修武县"
                    },
                    {
                        "code": "1410822",
                        "name": "博爱县"
                    },
                    {
                        "code": "1410823",
                        "name": "武陟县"
                    },
                    {
                        "code": "1410825",
                        "name": "温县"
                    },
                    {
                        "code": "1410882",
                        "name": "沁阳市"
                    },
                    {
                        "code": "1410883",
                        "name": "孟州市"
                    }
                ]
            },
            {
                "code": "14109",
                "name": "濮阳市",
                "children": [
                    {
                        "code": "1410902",
                        "name": "华龙区"
                    },
                    {
                        "code": "1410922",
                        "name": "清丰县"
                    },
                    {
                        "code": "1410923",
                        "name": "南乐县"
                    },
                    {
                        "code": "1410926",
                        "name": "范县"
                    },
                    {
                        "code": "1410927",
                        "name": "台前县"
                    },
                    {
                        "code": "1410928",
                        "name": "濮阳县"
                    }
                ]
            },
            {
                "code": "14110",
                "name": "许昌市",
                "children": [
                    {
                        "code": "1411002",
                        "name": "魏都区"
                    },
                    {
                        "code": "1411023",
                        "name": "许昌县"
                    },
                    {
                        "code": "1411024",
                        "name": "鄢陵县"
                    },
                    {
                        "code": "1411025",
                        "name": "襄城县"
                    },
                    {
                        "code": "1411081",
                        "name": "禹州市"
                    },
                    {
                        "code": "1411082",
                        "name": "长葛市"
                    }
                ]
            },
            {
                "code": "14111",
                "name": "漯河市",
                "children": [
                    {
                        "code": "1411102",
                        "name": "源汇区"
                    },
                    {
                        "code": "1411103",
                        "name": "郾城区"
                    },
                    {
                        "code": "1411104",
                        "name": "召陵区"
                    },
                    {
                        "code": "1411121",
                        "name": "舞阳县"
                    },
                    {
                        "code": "1411122",
                        "name": "临颍县"
                    }
                ]
            },
            {
                "code": "14112",
                "name": "三门峡市",
                "children": [
                    {
                        "code": "1411202",
                        "name": "湖滨区"
                    },
                    {
                        "code": "1411203",
                        "name": "陕州区"
                    },
                    {
                        "code": "1411221",
                        "name": "渑池县"
                    },
                    {
                        "code": "1411224",
                        "name": "卢氏县"
                    },
                    {
                        "code": "1411281",
                        "name": "义马市"
                    },
                    {
                        "code": "1411282",
                        "name": "灵宝市"
                    }
                ]
            },
            {
                "code": "14113",
                "name": "南阳市",
                "children": [
                    {
                        "code": "1411302",
                        "name": "宛城区"
                    },
                    {
                        "code": "1411303",
                        "name": "卧龙区"
                    },
                    {
                        "code": "1411321",
                        "name": "南召县"
                    },
                    {
                        "code": "1411322",
                        "name": "方城县"
                    },
                    {
                        "code": "1411323",
                        "name": "西峡县"
                    },
                    {
                        "code": "1411324",
                        "name": "镇平县"
                    },
                    {
                        "code": "1411325",
                        "name": "内乡县"
                    },
                    {
                        "code": "1411326",
                        "name": "淅川县"
                    },
                    {
                        "code": "1411327",
                        "name": "社旗县"
                    },
                    {
                        "code": "1411328",
                        "name": "唐河县"
                    },
                    {
                        "code": "1411329",
                        "name": "新野县"
                    },
                    {
                        "code": "1411330",
                        "name": "桐柏县"
                    },
                    {
                        "code": "1411381",
                        "name": "邓州市"
                    }
                ]
            },
            {
                "code": "14114",
                "name": "商丘市",
                "children": [
                    {
                        "code": "1411402",
                        "name": "梁园区"
                    },
                    {
                        "code": "1411403",
                        "name": "睢阳区"
                    },
                    {
                        "code": "1411421",
                        "name": "民权县"
                    },
                    {
                        "code": "1411422",
                        "name": "睢县"
                    },
                    {
                        "code": "1411423",
                        "name": "宁陵县"
                    },
                    {
                        "code": "1411424",
                        "name": "柘城县"
                    },
                    {
                        "code": "1411425",
                        "name": "虞城县"
                    },
                    {
                        "code": "1411426",
                        "name": "夏邑县"
                    },
                    {
                        "code": "1411481",
                        "name": "永城市"
                    }
                ]
            },
            {
                "code": "14115",
                "name": "信阳市",
                "children": [
                    {
                        "code": "1411502",
                        "name": "浉河区"
                    },
                    {
                        "code": "1411503",
                        "name": "平桥区"
                    },
                    {
                        "code": "1411521",
                        "name": "罗山县"
                    },
                    {
                        "code": "1411522",
                        "name": "光山县"
                    },
                    {
                        "code": "1411523",
                        "name": "新县"
                    },
                    {
                        "code": "1411524",
                        "name": "商城县"
                    },
                    {
                        "code": "1411525",
                        "name": "固始县"
                    },
                    {
                        "code": "1411526",
                        "name": "潢川县"
                    },
                    {
                        "code": "1411527",
                        "name": "淮滨县"
                    },
                    {
                        "code": "1411528",
                        "name": "息县"
                    }
                ]
            },
            {
                "code": "14116",
                "name": "周口市",
                "children": [
                    {
                        "code": "1411602",
                        "name": "川汇区"
                    },
                    {
                        "code": "1411621",
                        "name": "扶沟县"
                    },
                    {
                        "code": "1411622",
                        "name": "西华县"
                    },
                    {
                        "code": "1411623",
                        "name": "商水县"
                    },
                    {
                        "code": "1411624",
                        "name": "沈丘县"
                    },
                    {
                        "code": "1411625",
                        "name": "郸城县"
                    },
                    {
                        "code": "1411626",
                        "name": "淮阳县"
                    },
                    {
                        "code": "1411627",
                        "name": "太康县"
                    },
                    {
                        "code": "1411628",
                        "name": "鹿邑县"
                    },
                    {
                        "code": "1411681",
                        "name": "项城市"
                    }
                ]
            },
            {
                "code": "14117",
                "name": "驻马店市",
                "children": [
                    {
                        "code": "1411702",
                        "name": "驿城区"
                    },
                    {
                        "code": "1411721",
                        "name": "西平县"
                    },
                    {
                        "code": "1411722",
                        "name": "上蔡县"
                    },
                    {
                        "code": "1411723",
                        "name": "平舆县"
                    },
                    {
                        "code": "1411724",
                        "name": "正阳县"
                    },
                    {
                        "code": "1411725",
                        "name": "确山县"
                    },
                    {
                        "code": "1411726",
                        "name": "泌阳县"
                    },
                    {
                        "code": "1411727",
                        "name": "汝南县"
                    },
                    {
                        "code": "1411728",
                        "name": "遂平县"
                    },
                    {
                        "code": "1411729",
                        "name": "新蔡县"
                    }
                ]
            },
            {
                "code": "14190",
                "name": "济源市",
                "children": [
                    {
                        "code": "1419001",
                        "name": "济源市"
                    }
                ]
            }
        ]
    },
    {
        "code": "142",
        "name": "湖北省",
        "children": [
            {
                "code": "14201",
                "name": "武汉市",
                "children": [
                    {
                        "code": "1420102",
                        "name": "江岸区"
                    },
                    {
                        "code": "1420103",
                        "name": "江汉区"
                    },
                    {
                        "code": "1420104",
                        "name": "硚口区"
                    },
                    {
                        "code": "1420105",
                        "name": "汉阳区"
                    },
                    {
                        "code": "1420106",
                        "name": "武昌区"
                    },
                    {
                        "code": "1420107",
                        "name": "青山区"
                    },
                    {
                        "code": "1420111",
                        "name": "洪山区"
                    },
                    {
                        "code": "1420112",
                        "name": "东西湖区"
                    },
                    {
                        "code": "1420113",
                        "name": "汉南区"
                    },
                    {
                        "code": "1420114",
                        "name": "蔡甸区"
                    },
                    {
                        "code": "1420115",
                        "name": "江夏区"
                    },
                    {
                        "code": "1420116",
                        "name": "黄陂区"
                    },
                    {
                        "code": "1420117",
                        "name": "新洲区"
                    }
                ]
            },
            {
                "code": "14202",
                "name": "黄石市",
                "children": [
                    {
                        "code": "1420202",
                        "name": "黄石港区"
                    },
                    {
                        "code": "1420203",
                        "name": "西塞山区"
                    },
                    {
                        "code": "1420204",
                        "name": "下陆区"
                    },
                    {
                        "code": "1420205",
                        "name": "铁山区"
                    },
                    {
                        "code": "1420222",
                        "name": "阳新县"
                    },
                    {
                        "code": "1420281",
                        "name": "大冶市"
                    }
                ]
            },
            {
                "code": "14203",
                "name": "十堰市",
                "children": [
                    {
                        "code": "1420302",
                        "name": "茅箭区"
                    },
                    {
                        "code": "1420303",
                        "name": "张湾区"
                    },
                    {
                        "code": "1420304",
                        "name": "郧阳区"
                    },
                    {
                        "code": "1420322",
                        "name": "郧西县"
                    },
                    {
                        "code": "1420323",
                        "name": "竹山县"
                    },
                    {
                        "code": "1420324",
                        "name": "竹溪县"
                    },
                    {
                        "code": "1420325",
                        "name": "房县"
                    },
                    {
                        "code": "1420381",
                        "name": "丹江口市"
                    }
                ]
            },
            {
                "code": "14205",
                "name": "宜昌市",
                "children": [
                    {
                        "code": "1420502",
                        "name": "西陵区"
                    },
                    {
                        "code": "1420503",
                        "name": "伍家岗区"
                    },
                    {
                        "code": "1420504",
                        "name": "点军区"
                    },
                    {
                        "code": "1420505",
                        "name": "猇亭区"
                    },
                    {
                        "code": "1420506",
                        "name": "夷陵区"
                    },
                    {
                        "code": "1420525",
                        "name": "远安县"
                    },
                    {
                        "code": "1420526",
                        "name": "兴山县"
                    },
                    {
                        "code": "1420527",
                        "name": "秭归县"
                    },
                    {
                        "code": "1420528",
                        "name": "长阳土家族自治县"
                    },
                    {
                        "code": "1420529",
                        "name": "五峰土家族自治县"
                    },
                    {
                        "code": "1420581",
                        "name": "宜都市"
                    },
                    {
                        "code": "1420582",
                        "name": "当阳市"
                    },
                    {
                        "code": "1420583",
                        "name": "枝江市"
                    }
                ]
            },
            {
                "code": "14206",
                "name": "襄阳市",
                "children": [
                    {
                        "code": "1420602",
                        "name": "襄城区"
                    },
                    {
                        "code": "1420606",
                        "name": "樊城区"
                    },
                    {
                        "code": "1420607",
                        "name": "襄州区"
                    },
                    {
                        "code": "1420624",
                        "name": "南漳县"
                    },
                    {
                        "code": "1420625",
                        "name": "谷城县"
                    },
                    {
                        "code": "1420626",
                        "name": "保康县"
                    },
                    {
                        "code": "1420682",
                        "name": "老河口市"
                    },
                    {
                        "code": "1420683",
                        "name": "枣阳市"
                    },
                    {
                        "code": "1420684",
                        "name": "宜城市"
                    }
                ]
            },
            {
                "code": "14207",
                "name": "鄂州市",
                "children": [
                    {
                        "code": "1420702",
                        "name": "梁子湖区"
                    },
                    {
                        "code": "1420703",
                        "name": "华容区"
                    },
                    {
                        "code": "1420704",
                        "name": "鄂城区"
                    }
                ]
            },
            {
                "code": "14208",
                "name": "荆门市",
                "children": [
                    {
                        "code": "1420802",
                        "name": "东宝区"
                    },
                    {
                        "code": "1420804",
                        "name": "掇刀区"
                    },
                    {
                        "code": "1420821",
                        "name": "京山县"
                    },
                    {
                        "code": "1420822",
                        "name": "沙洋县"
                    },
                    {
                        "code": "1420881",
                        "name": "钟祥市"
                    }
                ]
            },
            {
                "code": "14209",
                "name": "孝感市",
                "children": [
                    {
                        "code": "1420902",
                        "name": "孝南区"
                    },
                    {
                        "code": "1420921",
                        "name": "孝昌县"
                    },
                    {
                        "code": "1420922",
                        "name": "大悟县"
                    },
                    {
                        "code": "1420923",
                        "name": "云梦县"
                    },
                    {
                        "code": "1420981",
                        "name": "应城市"
                    },
                    {
                        "code": "1420982",
                        "name": "安陆市"
                    },
                    {
                        "code": "1420984",
                        "name": "汉川市"
                    }
                ]
            },
            {
                "code": "14210",
                "name": "荆州市",
                "children": [
                    {
                        "code": "1421002",
                        "name": "沙市区"
                    },
                    {
                        "code": "1421003",
                        "name": "荆州区"
                    },
                    {
                        "code": "1421022",
                        "name": "公安县"
                    },
                    {
                        "code": "1421023",
                        "name": "监利县"
                    },
                    {
                        "code": "1421024",
                        "name": "江陵县"
                    },
                    {
                        "code": "1421081",
                        "name": "石首市"
                    },
                    {
                        "code": "1421083",
                        "name": "洪湖市"
                    },
                    {
                        "code": "1421087",
                        "name": "松滋市"
                    }
                ]
            },
            {
                "code": "14211",
                "name": "黄冈市",
                "children": [
                    {
                        "code": "1421102",
                        "name": "黄州区"
                    },
                    {
                        "code": "1421121",
                        "name": "团风县"
                    },
                    {
                        "code": "1421122",
                        "name": "红安县"
                    },
                    {
                        "code": "1421123",
                        "name": "罗田县"
                    },
                    {
                        "code": "1421124",
                        "name": "英山县"
                    },
                    {
                        "code": "1421125",
                        "name": "浠水县"
                    },
                    {
                        "code": "1421126",
                        "name": "蕲春县"
                    },
                    {
                        "code": "1421127",
                        "name": "黄梅县"
                    },
                    {
                        "code": "1421181",
                        "name": "麻城市"
                    },
                    {
                        "code": "1421182",
                        "name": "武穴市"
                    }
                ]
            },
            {
                "code": "14212",
                "name": "咸宁市",
                "children": [
                    {
                        "code": "1421202",
                        "name": "咸安区"
                    },
                    {
                        "code": "1421221",
                        "name": "嘉鱼县"
                    },
                    {
                        "code": "1421222",
                        "name": "通城县"
                    },
                    {
                        "code": "1421223",
                        "name": "崇阳县"
                    },
                    {
                        "code": "1421224",
                        "name": "通山县"
                    },
                    {
                        "code": "1421281",
                        "name": "赤壁市"
                    }
                ]
            },
            {
                "code": "14213",
                "name": "随州市",
                "children": [
                    {
                        "code": "1421303",
                        "name": "曾都区"
                    },
                    {
                        "code": "1421321",
                        "name": "随县"
                    },
                    {
                        "code": "1421381",
                        "name": "广水市"
                    }
                ]
            },
            {
                "code": "14228",
                "name": "恩施土家族苗族自治州",
                "children": [
                    {
                        "code": "1422801",
                        "name": "恩施市"
                    },
                    {
                        "code": "1422802",
                        "name": "利川市"
                    },
                    {
                        "code": "1422822",
                        "name": "建始县"
                    },
                    {
                        "code": "1422823",
                        "name": "巴东县"
                    },
                    {
                        "code": "1422825",
                        "name": "宣恩县"
                    },
                    {
                        "code": "1422826",
                        "name": "咸丰县"
                    },
                    {
                        "code": "1422827",
                        "name": "来凤县"
                    },
                    {
                        "code": "1422828",
                        "name": "鹤峰县"
                    }
                ]
            },
            {
                "code": "14290",
                "name": "省直辖县级行政区划",
                "children": [
                    {
                        "code": "1429004",
                        "name": "仙桃市"
                    },
                    {
                        "code": "1429005",
                        "name": "潜江市"
                    },
                    {
                        "code": "1429006",
                        "name": "天门市"
                    },
                    {
                        "code": "1429021",
                        "name": "神农架林区"
                    }
                ]
            }
        ]
    },
    {
        "code": "143",
        "name": "湖南省",
        "children": [
            {
                "code": "14301",
                "name": "长沙市",
                "children": [
                    {
                        "code": "1430102",
                        "name": "芙蓉区"
                    },
                    {
                        "code": "1430103",
                        "name": "天心区"
                    },
                    {
                        "code": "1430104",
                        "name": "岳麓区"
                    },
                    {
                        "code": "1430105",
                        "name": "开福区"
                    },
                    {
                        "code": "1430111",
                        "name": "雨花区"
                    },
                    {
                        "code": "1430112",
                        "name": "望城区"
                    },
                    {
                        "code": "1430121",
                        "name": "长沙县"
                    },
                    {
                        "code": "1430124",
                        "name": "宁乡县"
                    },
                    {
                        "code": "1430181",
                        "name": "浏阳市"
                    }
                ]
            },
            {
                "code": "14302",
                "name": "株洲市",
                "children": [
                    {
                        "code": "1430202",
                        "name": "荷塘区"
                    },
                    {
                        "code": "1430203",
                        "name": "芦淞区"
                    },
                    {
                        "code": "1430204",
                        "name": "石峰区"
                    },
                    {
                        "code": "1430211",
                        "name": "天元区"
                    },
                    {
                        "code": "1430221",
                        "name": "株洲县"
                    },
                    {
                        "code": "1430223",
                        "name": "攸县"
                    },
                    {
                        "code": "1430224",
                        "name": "茶陵县"
                    },
                    {
                        "code": "1430225",
                        "name": "炎陵县"
                    },
                    {
                        "code": "1430281",
                        "name": "醴陵市"
                    }
                ]
            },
            {
                "code": "14303",
                "name": "湘潭市",
                "children": [
                    {
                        "code": "1430302",
                        "name": "雨湖区"
                    },
                    {
                        "code": "1430304",
                        "name": "岳塘区"
                    },
                    {
                        "code": "1430321",
                        "name": "湘潭县"
                    },
                    {
                        "code": "1430381",
                        "name": "湘乡市"
                    },
                    {
                        "code": "1430382",
                        "name": "韶山市"
                    }
                ]
            },
            {
                "code": "14304",
                "name": "衡阳市",
                "children": [
                    {
                        "code": "1430405",
                        "name": "珠晖区"
                    },
                    {
                        "code": "1430406",
                        "name": "雁峰区"
                    },
                    {
                        "code": "1430407",
                        "name": "石鼓区"
                    },
                    {
                        "code": "1430408",
                        "name": "蒸湘区"
                    },
                    {
                        "code": "1430412",
                        "name": "南岳区"
                    },
                    {
                        "code": "1430421",
                        "name": "衡阳县"
                    },
                    {
                        "code": "1430422",
                        "name": "衡南县"
                    },
                    {
                        "code": "1430423",
                        "name": "衡山县"
                    },
                    {
                        "code": "1430424",
                        "name": "衡东县"
                    },
                    {
                        "code": "1430426",
                        "name": "祁东县"
                    },
                    {
                        "code": "1430481",
                        "name": "耒阳市"
                    },
                    {
                        "code": "1430482",
                        "name": "常宁市"
                    }
                ]
            },
            {
                "code": "14305",
                "name": "邵阳市",
                "children": [
                    {
                        "code": "1430502",
                        "name": "双清区"
                    },
                    {
                        "code": "1430503",
                        "name": "大祥区"
                    },
                    {
                        "code": "1430511",
                        "name": "北塔区"
                    },
                    {
                        "code": "1430521",
                        "name": "邵东县"
                    },
                    {
                        "code": "1430522",
                        "name": "新邵县"
                    },
                    {
                        "code": "1430523",
                        "name": "邵阳县"
                    },
                    {
                        "code": "1430524",
                        "name": "隆回县"
                    },
                    {
                        "code": "1430525",
                        "name": "洞口县"
                    },
                    {
                        "code": "1430527",
                        "name": "绥宁县"
                    },
                    {
                        "code": "1430528",
                        "name": "新宁县"
                    },
                    {
                        "code": "1430529",
                        "name": "城步苗族自治县"
                    },
                    {
                        "code": "1430581",
                        "name": "武冈市"
                    }
                ]
            },
            {
                "code": "14306",
                "name": "岳阳市",
                "children": [
                    {
                        "code": "1430602",
                        "name": "岳阳楼区"
                    },
                    {
                        "code": "1430603",
                        "name": "云溪区"
                    },
                    {
                        "code": "1430611",
                        "name": "君山区"
                    },
                    {
                        "code": "1430621",
                        "name": "岳阳县"
                    },
                    {
                        "code": "1430623",
                        "name": "华容县"
                    },
                    {
                        "code": "1430624",
                        "name": "湘阴县"
                    },
                    {
                        "code": "1430626",
                        "name": "平江县"
                    },
                    {
                        "code": "1430681",
                        "name": "汨罗市"
                    },
                    {
                        "code": "1430682",
                        "name": "临湘市"
                    }
                ]
            },
            {
                "code": "14307",
                "name": "常德市",
                "children": [
                    {
                        "code": "1430702",
                        "name": "武陵区"
                    },
                    {
                        "code": "1430703",
                        "name": "鼎城区"
                    },
                    {
                        "code": "1430721",
                        "name": "安乡县"
                    },
                    {
                        "code": "1430722",
                        "name": "汉寿县"
                    },
                    {
                        "code": "1430723",
                        "name": "澧县"
                    },
                    {
                        "code": "1430724",
                        "name": "临澧县"
                    },
                    {
                        "code": "1430725",
                        "name": "桃源县"
                    },
                    {
                        "code": "1430726",
                        "name": "石门县"
                    },
                    {
                        "code": "1430781",
                        "name": "津市市"
                    }
                ]
            },
            {
                "code": "14308",
                "name": "张家界市",
                "children": [
                    {
                        "code": "1430802",
                        "name": "永定区"
                    },
                    {
                        "code": "1430811",
                        "name": "武陵源区"
                    },
                    {
                        "code": "1430821",
                        "name": "慈利县"
                    },
                    {
                        "code": "1430822",
                        "name": "桑植县"
                    }
                ]
            },
            {
                "code": "14309",
                "name": "益阳市",
                "children": [
                    {
                        "code": "1430902",
                        "name": "资阳区"
                    },
                    {
                        "code": "1430903",
                        "name": "赫山区"
                    },
                    {
                        "code": "1430921",
                        "name": "南县"
                    },
                    {
                        "code": "1430922",
                        "name": "桃江县"
                    },
                    {
                        "code": "1430923",
                        "name": "安化县"
                    },
                    {
                        "code": "1430981",
                        "name": "沅江市"
                    }
                ]
            },
            {
                "code": "14310",
                "name": "郴州市",
                "children": [
                    {
                        "code": "1431002",
                        "name": "北湖区"
                    },
                    {
                        "code": "1431003",
                        "name": "苏仙区"
                    },
                    {
                        "code": "1431021",
                        "name": "桂阳县"
                    },
                    {
                        "code": "1431022",
                        "name": "宜章县"
                    },
                    {
                        "code": "1431023",
                        "name": "永兴县"
                    },
                    {
                        "code": "1431024",
                        "name": "嘉禾县"
                    },
                    {
                        "code": "1431025",
                        "name": "临武县"
                    },
                    {
                        "code": "1431026",
                        "name": "汝城县"
                    },
                    {
                        "code": "1431027",
                        "name": "桂东县"
                    },
                    {
                        "code": "1431028",
                        "name": "安仁县"
                    },
                    {
                        "code": "1431081",
                        "name": "资兴市"
                    }
                ]
            },
            {
                "code": "14311",
                "name": "永州市",
                "children": [
                    {
                        "code": "1431102",
                        "name": "零陵区"
                    },
                    {
                        "code": "1431103",
                        "name": "冷水滩区"
                    },
                    {
                        "code": "1431121",
                        "name": "祁阳县"
                    },
                    {
                        "code": "1431122",
                        "name": "东安县"
                    },
                    {
                        "code": "1431123",
                        "name": "双牌县"
                    },
                    {
                        "code": "1431124",
                        "name": "道县"
                    },
                    {
                        "code": "1431125",
                        "name": "江永县"
                    },
                    {
                        "code": "1431126",
                        "name": "宁远县"
                    },
                    {
                        "code": "1431127",
                        "name": "蓝山县"
                    },
                    {
                        "code": "1431128",
                        "name": "新田县"
                    },
                    {
                        "code": "1431129",
                        "name": "江华瑶族自治县"
                    }
                ]
            },
            {
                "code": "14312",
                "name": "怀化市",
                "children": [
                    {
                        "code": "1431202",
                        "name": "鹤城区"
                    },
                    {
                        "code": "1431221",
                        "name": "中方县"
                    },
                    {
                        "code": "1431222",
                        "name": "沅陵县"
                    },
                    {
                        "code": "1431223",
                        "name": "辰溪县"
                    },
                    {
                        "code": "1431224",
                        "name": "溆浦县"
                    },
                    {
                        "code": "1431225",
                        "name": "会同县"
                    },
                    {
                        "code": "1431226",
                        "name": "麻阳苗族自治县"
                    },
                    {
                        "code": "1431227",
                        "name": "新晃侗族自治县"
                    },
                    {
                        "code": "1431228",
                        "name": "芷江侗族自治县"
                    },
                    {
                        "code": "1431229",
                        "name": "靖州苗族侗族自治县"
                    },
                    {
                        "code": "1431230",
                        "name": "通道侗族自治县"
                    },
                    {
                        "code": "1431281",
                        "name": "洪江市"
                    }
                ]
            },
            {
                "code": "14313",
                "name": "娄底市",
                "children": [
                    {
                        "code": "1431302",
                        "name": "娄星区"
                    },
                    {
                        "code": "1431321",
                        "name": "双峰县"
                    },
                    {
                        "code": "1431322",
                        "name": "新化县"
                    },
                    {
                        "code": "1431381",
                        "name": "冷水江市"
                    },
                    {
                        "code": "1431382",
                        "name": "涟源市"
                    }
                ]
            },
            {
                "code": "14331",
                "name": "湘西土家族苗族自治州",
                "children": [
                    {
                        "code": "1433101",
                        "name": "吉首市"
                    },
                    {
                        "code": "1433122",
                        "name": "泸溪县"
                    },
                    {
                        "code": "1433123",
                        "name": "凤凰县"
                    },
                    {
                        "code": "1433124",
                        "name": "花垣县"
                    },
                    {
                        "code": "1433125",
                        "name": "保靖县"
                    },
                    {
                        "code": "1433126",
                        "name": "古丈县"
                    },
                    {
                        "code": "1433127",
                        "name": "永顺县"
                    },
                    {
                        "code": "1433130",
                        "name": "龙山县"
                    }
                ]
            }
        ]
    },
    {
        "code": "144",
        "name": "广东省",
        "children": [
            {
                "code": "14401",
                "name": "广州市",
                "children": [
                    {
                        "code": "1440103",
                        "name": "荔湾区"
                    },
                    {
                        "code": "1440104",
                        "name": "越秀区"
                    },
                    {
                        "code": "1440105",
                        "name": "海珠区"
                    },
                    {
                        "code": "1440106",
                        "name": "天河区"
                    },
                    {
                        "code": "1440111",
                        "name": "白云区"
                    },
                    {
                        "code": "1440112",
                        "name": "黄埔区"
                    },
                    {
                        "code": "1440113",
                        "name": "番禺区"
                    },
                    {
                        "code": "1440114",
                        "name": "花都区"
                    },
                    {
                        "code": "1440115",
                        "name": "南沙区"
                    },
                    {
                        "code": "1440117",
                        "name": "从化区"
                    },
                    {
                        "code": "1440118",
                        "name": "增城区"
                    }
                ]
            },
            {
                "code": "14402",
                "name": "韶关市",
                "children": [
                    {
                        "code": "1440203",
                        "name": "武江区"
                    },
                    {
                        "code": "1440204",
                        "name": "浈江区"
                    },
                    {
                        "code": "1440205",
                        "name": "曲江区"
                    },
                    {
                        "code": "1440222",
                        "name": "始兴县"
                    },
                    {
                        "code": "1440224",
                        "name": "仁化县"
                    },
                    {
                        "code": "1440229",
                        "name": "翁源县"
                    },
                    {
                        "code": "1440232",
                        "name": "乳源瑶族自治县"
                    },
                    {
                        "code": "1440233",
                        "name": "新丰县"
                    },
                    {
                        "code": "1440281",
                        "name": "乐昌市"
                    },
                    {
                        "code": "1440282",
                        "name": "南雄市"
                    }
                ]
            },
            {
                "code": "14403",
                "name": "深圳市",
                "children": [
                    {
                        "code": "1440303",
                        "name": "罗湖区"
                    },
                    {
                        "code": "1440304",
                        "name": "福田区"
                    },
                    {
                        "code": "1440305",
                        "name": "南山区"
                    },
                    {
                        "code": "1440306",
                        "name": "宝安区"
                    },
                    {
                        "code": "1440307",
                        "name": "龙岗区"
                    },
                    {
                        "code": "1440308",
                        "name": "盐田区"
                    }
                ]
            },
            {
                "code": "14404",
                "name": "珠海市",
                "children": [
                    {
                        "code": "1440402",
                        "name": "香洲区"
                    },
                    {
                        "code": "1440403",
                        "name": "斗门区"
                    },
                    {
                        "code": "1440404",
                        "name": "金湾区"
                    }
                ]
            },
            {
                "code": "14405",
                "name": "汕头市",
                "children": [
                    {
                        "code": "1440507",
                        "name": "龙湖区"
                    },
                    {
                        "code": "1440511",
                        "name": "金平区"
                    },
                    {
                        "code": "1440512",
                        "name": "濠江区"
                    },
                    {
                        "code": "1440513",
                        "name": "潮阳区"
                    },
                    {
                        "code": "1440514",
                        "name": "潮南区"
                    },
                    {
                        "code": "1440515",
                        "name": "澄海区"
                    },
                    {
                        "code": "1440523",
                        "name": "南澳县"
                    }
                ]
            },
            {
                "code": "14406",
                "name": "佛山市",
                "children": [
                    {
                        "code": "1440604",
                        "name": "禅城区"
                    },
                    {
                        "code": "1440605",
                        "name": "南海区"
                    },
                    {
                        "code": "1440606",
                        "name": "顺德区"
                    },
                    {
                        "code": "1440607",
                        "name": "三水区"
                    },
                    {
                        "code": "1440608",
                        "name": "高明区"
                    }
                ]
            },
            {
                "code": "14407",
                "name": "江门市",
                "children": [
                    {
                        "code": "1440703",
                        "name": "蓬江区"
                    },
                    {
                        "code": "1440704",
                        "name": "江海区"
                    },
                    {
                        "code": "1440705",
                        "name": "新会区"
                    },
                    {
                        "code": "1440781",
                        "name": "台山市"
                    },
                    {
                        "code": "1440783",
                        "name": "开平市"
                    },
                    {
                        "code": "1440784",
                        "name": "鹤山市"
                    },
                    {
                        "code": "1440785",
                        "name": "恩平市"
                    }
                ]
            },
            {
                "code": "14408",
                "name": "湛江市",
                "children": [
                    {
                        "code": "1440802",
                        "name": "赤坎区"
                    },
                    {
                        "code": "1440803",
                        "name": "霞山区"
                    },
                    {
                        "code": "1440804",
                        "name": "坡头区"
                    },
                    {
                        "code": "1440811",
                        "name": "麻章区"
                    },
                    {
                        "code": "1440823",
                        "name": "遂溪县"
                    },
                    {
                        "code": "1440825",
                        "name": "徐闻县"
                    },
                    {
                        "code": "1440881",
                        "name": "廉江市"
                    },
                    {
                        "code": "1440882",
                        "name": "雷州市"
                    },
                    {
                        "code": "1440883",
                        "name": "吴川市"
                    }
                ]
            },
            {
                "code": "14409",
                "name": "茂名市",
                "children": [
                    {
                        "code": "1440902",
                        "name": "茂南区"
                    },
                    {
                        "code": "1440904",
                        "name": "电白区"
                    },
                    {
                        "code": "1440981",
                        "name": "高州市"
                    },
                    {
                        "code": "1440982",
                        "name": "化州市"
                    },
                    {
                        "code": "1440983",
                        "name": "信宜市"
                    }
                ]
            },
            {
                "code": "14412",
                "name": "肇庆市",
                "children": [
                    {
                        "code": "1441202",
                        "name": "端州区"
                    },
                    {
                        "code": "1441203",
                        "name": "鼎湖区"
                    },
                    {
                        "code": "1441204",
                        "name": "高要区"
                    },
                    {
                        "code": "1441223",
                        "name": "广宁县"
                    },
                    {
                        "code": "1441224",
                        "name": "怀集县"
                    },
                    {
                        "code": "1441225",
                        "name": "封开县"
                    },
                    {
                        "code": "1441226",
                        "name": "德庆县"
                    },
                    {
                        "code": "1441284",
                        "name": "四会市"
                    }
                ]
            },
            {
                "code": "14413",
                "name": "惠州市",
                "children": [
                    {
                        "code": "1441302",
                        "name": "惠城区"
                    },
                    {
                        "code": "1441303",
                        "name": "惠阳区"
                    },
                    {
                        "code": "1441322",
                        "name": "博罗县"
                    },
                    {
                        "code": "1441323",
                        "name": "惠东县"
                    },
                    {
                        "code": "1441324",
                        "name": "龙门县"
                    }
                ]
            },
            {
                "code": "14414",
                "name": "梅州市",
                "children": [
                    {
                        "code": "1441402",
                        "name": "梅江区"
                    },
                    {
                        "code": "1441403",
                        "name": "梅县区"
                    },
                    {
                        "code": "1441422",
                        "name": "大埔县"
                    },
                    {
                        "code": "1441423",
                        "name": "丰顺县"
                    },
                    {
                        "code": "1441424",
                        "name": "五华县"
                    },
                    {
                        "code": "1441426",
                        "name": "平远县"
                    },
                    {
                        "code": "1441427",
                        "name": "蕉岭县"
                    },
                    {
                        "code": "1441481",
                        "name": "兴宁市"
                    }
                ]
            },
            {
                "code": "14415",
                "name": "汕尾市",
                "children": [
                    {
                        "code": "1441502",
                        "name": "城区"
                    },
                    {
                        "code": "1441521",
                        "name": "海丰县"
                    },
                    {
                        "code": "1441523",
                        "name": "陆河县"
                    },
                    {
                        "code": "1441581",
                        "name": "陆丰市"
                    }
                ]
            },
            {
                "code": "14416",
                "name": "河源市",
                "children": [
                    {
                        "code": "1441602",
                        "name": "源城区"
                    },
                    {
                        "code": "1441621",
                        "name": "紫金县"
                    },
                    {
                        "code": "1441622",
                        "name": "龙川县"
                    },
                    {
                        "code": "1441623",
                        "name": "连平县"
                    },
                    {
                        "code": "1441624",
                        "name": "和平县"
                    },
                    {
                        "code": "1441625",
                        "name": "东源县"
                    }
                ]
            },
            {
                "code": "14417",
                "name": "阳江市",
                "children": [
                    {
                        "code": "1441702",
                        "name": "江城区"
                    },
                    {
                        "code": "1441704",
                        "name": "阳东区"
                    },
                    {
                        "code": "1441721",
                        "name": "阳西县"
                    },
                    {
                        "code": "1441781",
                        "name": "阳春市"
                    }
                ]
            },
            {
                "code": "14418",
                "name": "清远市",
                "children": [
                    {
                        "code": "1441802",
                        "name": "清城区"
                    },
                    {
                        "code": "1441803",
                        "name": "清新区"
                    },
                    {
                        "code": "1441821",
                        "name": "佛冈县"
                    },
                    {
                        "code": "1441823",
                        "name": "阳山县"
                    },
                    {
                        "code": "1441825",
                        "name": "连山壮族瑶族自治县"
                    },
                    {
                        "code": "1441826",
                        "name": "连南瑶族自治县"
                    },
                    {
                        "code": "1441881",
                        "name": "英德市"
                    },
                    {
                        "code": "1441882",
                        "name": "连州市"
                    }
                ]
            },
            {
                "code": "14419",
                "name": "东莞市",
                "children": [
                    {
                        "code": "1441900",
                        "name": "东莞市"
                    }
                ]
            },
            {
                "code": "14420",
                "name": "中山市",
                "children": [
                    {
                        "code": "1442000",
                        "name": "中山市"
                    }
                ]
            },
            {
                "code": "14451",
                "name": "潮州市",
                "children": [
                    {
                        "code": "1445102",
                        "name": "湘桥区"
                    },
                    {
                        "code": "1445103",
                        "name": "潮安区"
                    },
                    {
                        "code": "1445122",
                        "name": "饶平县"
                    }
                ]
            },
            {
                "code": "14452",
                "name": "揭阳市",
                "children": [
                    {
                        "code": "1445202",
                        "name": "榕城区"
                    },
                    {
                        "code": "1445203",
                        "name": "揭东区"
                    },
                    {
                        "code": "1445222",
                        "name": "揭西县"
                    },
                    {
                        "code": "1445224",
                        "name": "惠来县"
                    },
                    {
                        "code": "1445281",
                        "name": "普宁市"
                    }
                ]
            },
            {
                "code": "14453",
                "name": "云浮市",
                "children": [
                    {
                        "code": "1445302",
                        "name": "云城区"
                    },
                    {
                        "code": "1445303",
                        "name": "云安区"
                    },
                    {
                        "code": "1445321",
                        "name": "新兴县"
                    },
                    {
                        "code": "1445322",
                        "name": "郁南县"
                    },
                    {
                        "code": "1445381",
                        "name": "罗定市"
                    }
                ]
            }
        ]
    },
    {
        "code": "145",
        "name": "广西壮族自治区",
        "children": [
            {
                "code": "14501",
                "name": "南宁市",
                "children": [
                    {
                        "code": "1450102",
                        "name": "兴宁区"
                    },
                    {
                        "code": "1450103",
                        "name": "青秀区"
                    },
                    {
                        "code": "1450105",
                        "name": "江南区"
                    },
                    {
                        "code": "1450107",
                        "name": "西乡塘区"
                    },
                    {
                        "code": "1450108",
                        "name": "良庆区"
                    },
                    {
                        "code": "1450109",
                        "name": "邕宁区"
                    },
                    {
                        "code": "1450110",
                        "name": "武鸣区"
                    },
                    {
                        "code": "1450123",
                        "name": "隆安县"
                    },
                    {
                        "code": "1450124",
                        "name": "马山县"
                    },
                    {
                        "code": "1450125",
                        "name": "上林县"
                    },
                    {
                        "code": "1450126",
                        "name": "宾阳县"
                    },
                    {
                        "code": "1450127",
                        "name": "横县"
                    }
                ]
            },
            {
                "code": "14502",
                "name": "柳州市",
                "children": [
                    {
                        "code": "1450202",
                        "name": "城中区"
                    },
                    {
                        "code": "1450203",
                        "name": "鱼峰区"
                    },
                    {
                        "code": "1450204",
                        "name": "柳南区"
                    },
                    {
                        "code": "1450205",
                        "name": "柳北区"
                    },
                    {
                        "code": "1450221",
                        "name": "柳江县"
                    },
                    {
                        "code": "1450222",
                        "name": "柳城县"
                    },
                    {
                        "code": "1450223",
                        "name": "鹿寨县"
                    },
                    {
                        "code": "1450224",
                        "name": "融安县"
                    },
                    {
                        "code": "1450225",
                        "name": "融水苗族自治县"
                    },
                    {
                        "code": "1450226",
                        "name": "三江侗族自治县"
                    }
                ]
            },
            {
                "code": "14503",
                "name": "桂林市",
                "children": [
                    {
                        "code": "1450302",
                        "name": "秀峰区"
                    },
                    {
                        "code": "1450303",
                        "name": "叠彩区"
                    },
                    {
                        "code": "1450304",
                        "name": "象山区"
                    },
                    {
                        "code": "1450305",
                        "name": "七星区"
                    },
                    {
                        "code": "1450311",
                        "name": "雁山区"
                    },
                    {
                        "code": "1450312",
                        "name": "临桂区"
                    },
                    {
                        "code": "1450321",
                        "name": "阳朔县"
                    },
                    {
                        "code": "1450323",
                        "name": "灵川县"
                    },
                    {
                        "code": "1450324",
                        "name": "全州县"
                    },
                    {
                        "code": "1450325",
                        "name": "兴安县"
                    },
                    {
                        "code": "1450326",
                        "name": "永福县"
                    },
                    {
                        "code": "1450327",
                        "name": "灌阳县"
                    },
                    {
                        "code": "1450328",
                        "name": "龙胜各族自治县"
                    },
                    {
                        "code": "1450329",
                        "name": "资源县"
                    },
                    {
                        "code": "1450330",
                        "name": "平乐县"
                    },
                    {
                        "code": "1450331",
                        "name": "荔浦县"
                    },
                    {
                        "code": "1450332",
                        "name": "恭城瑶族自治县"
                    }
                ]
            },
            {
                "code": "14504",
                "name": "梧州市",
                "children": [
                    {
                        "code": "1450403",
                        "name": "万秀区"
                    },
                    {
                        "code": "1450405",
                        "name": "长洲区"
                    },
                    {
                        "code": "1450406",
                        "name": "龙圩区"
                    },
                    {
                        "code": "1450421",
                        "name": "苍梧县"
                    },
                    {
                        "code": "1450422",
                        "name": "藤县"
                    },
                    {
                        "code": "1450423",
                        "name": "蒙山县"
                    },
                    {
                        "code": "1450481",
                        "name": "岑溪市"
                    }
                ]
            },
            {
                "code": "14505",
                "name": "北海市",
                "children": [
                    {
                        "code": "1450502",
                        "name": "海城区"
                    },
                    {
                        "code": "1450503",
                        "name": "银海区"
                    },
                    {
                        "code": "1450512",
                        "name": "铁山港区"
                    },
                    {
                        "code": "1450521",
                        "name": "合浦县"
                    }
                ]
            },
            {
                "code": "14506",
                "name": "防城港市",
                "children": [
                    {
                        "code": "1450602",
                        "name": "港口区"
                    },
                    {
                        "code": "1450603",
                        "name": "防城区"
                    },
                    {
                        "code": "1450621",
                        "name": "上思县"
                    },
                    {
                        "code": "1450681",
                        "name": "东兴市"
                    }
                ]
            },
            {
                "code": "14507",
                "name": "钦州市",
                "children": [
                    {
                        "code": "1450702",
                        "name": "钦南区"
                    },
                    {
                        "code": "1450703",
                        "name": "钦北区"
                    },
                    {
                        "code": "1450721",
                        "name": "灵山县"
                    },
                    {
                        "code": "1450722",
                        "name": "浦北县"
                    }
                ]
            },
            {
                "code": "14508",
                "name": "贵港市",
                "children": [
                    {
                        "code": "1450802",
                        "name": "港北区"
                    },
                    {
                        "code": "1450803",
                        "name": "港南区"
                    },
                    {
                        "code": "1450804",
                        "name": "覃塘区"
                    },
                    {
                        "code": "1450821",
                        "name": "平南县"
                    },
                    {
                        "code": "1450881",
                        "name": "桂平市"
                    }
                ]
            },
            {
                "code": "14509",
                "name": "玉林市",
                "children": [
                    {
                        "code": "1450902",
                        "name": "玉州区"
                    },
                    {
                        "code": "1450903",
                        "name": "福绵区"
                    },
                    {
                        "code": "1450921",
                        "name": "容县"
                    },
                    {
                        "code": "1450922",
                        "name": "陆川县"
                    },
                    {
                        "code": "1450923",
                        "name": "博白县"
                    },
                    {
                        "code": "1450924",
                        "name": "兴业县"
                    },
                    {
                        "code": "1450981",
                        "name": "北流市"
                    }
                ]
            },
            {
                "code": "14510",
                "name": "百色市",
                "children": [
                    {
                        "code": "1451002",
                        "name": "右江区"
                    },
                    {
                        "code": "1451021",
                        "name": "田阳县"
                    },
                    {
                        "code": "1451022",
                        "name": "田东县"
                    },
                    {
                        "code": "1451023",
                        "name": "平果县"
                    },
                    {
                        "code": "1451024",
                        "name": "德保县"
                    },
                    {
                        "code": "1451026",
                        "name": "那坡县"
                    },
                    {
                        "code": "1451027",
                        "name": "凌云县"
                    },
                    {
                        "code": "1451028",
                        "name": "乐业县"
                    },
                    {
                        "code": "1451029",
                        "name": "田林县"
                    },
                    {
                        "code": "1451030",
                        "name": "西林县"
                    },
                    {
                        "code": "1451031",
                        "name": "隆林各族自治县"
                    },
                    {
                        "code": "1451081",
                        "name": "靖西市"
                    }
                ]
            },
            {
                "code": "14511",
                "name": "贺州市",
                "children": [
                    {
                        "code": "1451102",
                        "name": "八步区"
                    },
                    {
                        "code": "1451103",
                        "name": "平桂管理区"
                    },
                    {
                        "code": "1451121",
                        "name": "昭平县"
                    },
                    {
                        "code": "1451122",
                        "name": "钟山县"
                    },
                    {
                        "code": "1451123",
                        "name": "富川瑶族自治县"
                    }
                ]
            },
            {
                "code": "14512",
                "name": "河池市",
                "children": [
                    {
                        "code": "1451202",
                        "name": "金城江区"
                    },
                    {
                        "code": "1451221",
                        "name": "南丹县"
                    },
                    {
                        "code": "1451222",
                        "name": "天峨县"
                    },
                    {
                        "code": "1451223",
                        "name": "凤山县"
                    },
                    {
                        "code": "1451224",
                        "name": "东兰县"
                    },
                    {
                        "code": "1451225",
                        "name": "罗城仫佬族自治县"
                    },
                    {
                        "code": "1451226",
                        "name": "环江毛南族自治县"
                    },
                    {
                        "code": "1451227",
                        "name": "巴马瑶族自治县"
                    },
                    {
                        "code": "1451228",
                        "name": "都安瑶族自治县"
                    },
                    {
                        "code": "1451229",
                        "name": "大化瑶族自治县"
                    },
                    {
                        "code": "1451281",
                        "name": "宜州市"
                    }
                ]
            },
            {
                "code": "14513",
                "name": "来宾市",
                "children": [
                    {
                        "code": "1451302",
                        "name": "兴宾区"
                    },
                    {
                        "code": "1451321",
                        "name": "忻城县"
                    },
                    {
                        "code": "1451322",
                        "name": "象州县"
                    },
                    {
                        "code": "1451323",
                        "name": "武宣县"
                    },
                    {
                        "code": "1451324",
                        "name": "金秀瑶族自治县"
                    },
                    {
                        "code": "1451381",
                        "name": "合山市"
                    }
                ]
            },
            {
                "code": "14514",
                "name": "崇左市",
                "children": [
                    {
                        "code": "1451402",
                        "name": "江州区"
                    },
                    {
                        "code": "1451421",
                        "name": "扶绥县"
                    },
                    {
                        "code": "1451422",
                        "name": "宁明县"
                    },
                    {
                        "code": "1451423",
                        "name": "龙州县"
                    },
                    {
                        "code": "1451424",
                        "name": "大新县"
                    },
                    {
                        "code": "1451425",
                        "name": "天等县"
                    },
                    {
                        "code": "1451481",
                        "name": "凭祥市"
                    }
                ]
            }
        ]
    },
    {
        "code": "146",
        "name": "海南省",
        "children": [
            {
                "code": "14601",
                "name": "海口市",
                "children": [
                    {
                        "code": "1460105",
                        "name": "秀英区"
                    },
                    {
                        "code": "1460106",
                        "name": "龙华区"
                    },
                    {
                        "code": "1460107",
                        "name": "琼山区"
                    },
                    {
                        "code": "1460108",
                        "name": "美兰区"
                    }
                ]
            },
            {
                "code": "14602",
                "name": "三亚市",
                "children": [
                    {
                        "code": "1460201",
                        "name": "三亚市"
                    },
                    {
                        "code": "1460202",
                        "name": "海棠区"
                    },
                    {
                        "code": "1460203",
                        "name": "吉阳区"
                    },
                    {
                        "code": "1460204",
                        "name": "天涯区"
                    },
                    {
                        "code": "1460205",
                        "name": "崖州区"
                    }
                ]
            },
            {
                "code": "14603",
                "name": "三沙市",
                "children": [
                    {
                        "code": "1460321",
                        "name": "西沙群岛"
                    },
                    {
                        "code": "1460322",
                        "name": "南沙群岛"
                    },
                    {
                        "code": "1460323",
                        "name": "中沙群岛的岛礁及其海域"
                    }
                ]
            },
            {
                "code": "14604",
                "name": "儋州市",
                "children": [
                    {
                        "code": "1460400",
                        "name": "儋州市"
                    }
                ]
            },
            {
                "code": "14690",
                "name": "省直辖县级行政区划",
                "children": [
                    {
                        "code": "1469001",
                        "name": "五指山市"
                    },
                    {
                        "code": "1469002",
                        "name": "琼海市"
                    },
                    {
                        "code": "1469005",
                        "name": "文昌市"
                    },
                    {
                        "code": "1469006",
                        "name": "万宁市"
                    },
                    {
                        "code": "1469007",
                        "name": "东方市"
                    },
                    {
                        "code": "1469021",
                        "name": "定安县"
                    },
                    {
                        "code": "1469022",
                        "name": "屯昌县"
                    },
                    {
                        "code": "1469023",
                        "name": "澄迈县"
                    },
                    {
                        "code": "1469024",
                        "name": "临高县"
                    },
                    {
                        "code": "1469025",
                        "name": "白沙黎族自治县"
                    },
                    {
                        "code": "1469026",
                        "name": "昌江黎族自治县"
                    },
                    {
                        "code": "1469027",
                        "name": "乐东黎族自治县"
                    },
                    {
                        "code": "1469028",
                        "name": "陵水黎族自治县"
                    },
                    {
                        "code": "1469029",
                        "name": "保亭黎族苗族自治县"
                    },
                    {
                        "code": "1469030",
                        "name": "琼中黎族苗族自治县"
                    }
                ]
            }
        ]
    },
    {
        "code": "150",
        "name": "重庆市",
        "children": [
            {
                "code": "15001",
                "name": "重庆市辖区",
                "children": [
                    {
                        "code": "1500101",
                        "name": "万州区"
                    },
                    {
                        "code": "1500102",
                        "name": "涪陵区"
                    },
                    {
                        "code": "1500103",
                        "name": "渝中区"
                    },
                    {
                        "code": "1500104",
                        "name": "大渡口区"
                    },
                    {
                        "code": "1500105",
                        "name": "江北区"
                    },
                    {
                        "code": "1500106",
                        "name": "沙坪坝区"
                    },
                    {
                        "code": "1500107",
                        "name": "九龙坡区"
                    },
                    {
                        "code": "1500108",
                        "name": "南岸区"
                    },
                    {
                        "code": "1500109",
                        "name": "北碚区"
                    },
                    {
                        "code": "1500110",
                        "name": "綦江区"
                    },
                    {
                        "code": "1500111",
                        "name": "大足区"
                    },
                    {
                        "code": "1500112",
                        "name": "渝北区"
                    },
                    {
                        "code": "1500113",
                        "name": "巴南区"
                    },
                    {
                        "code": "1500114",
                        "name": "黔江区"
                    },
                    {
                        "code": "1500115",
                        "name": "长寿区"
                    },
                    {
                        "code": "1500116",
                        "name": "江津区"
                    },
                    {
                        "code": "1500117",
                        "name": "合川区"
                    },
                    {
                        "code": "1500118",
                        "name": "永川区"
                    },
                    {
                        "code": "1500119",
                        "name": "南川区"
                    },
                    {
                        "code": "1500120",
                        "name": "璧山区"
                    },
                    {
                        "code": "1500151",
                        "name": "铜梁区"
                    },
                    {
                        "code": "1500152",
                        "name": "潼南区"
                    },
                    {
                        "code": "1500153",
                        "name": "荣昌区"
                    }
                ]
            },
            {
                "code": "15002",
                "name": "重庆市县",
                "children": [
                    {
                        "code": "1500228",
                        "name": "梁平县"
                    },
                    {
                        "code": "1500229",
                        "name": "城口县"
                    },
                    {
                        "code": "1500230",
                        "name": "丰都县"
                    },
                    {
                        "code": "1500231",
                        "name": "垫江县"
                    },
                    {
                        "code": "1500232",
                        "name": "武隆县"
                    },
                    {
                        "code": "1500233",
                        "name": "忠县"
                    },
                    {
                        "code": "1500234",
                        "name": "开县"
                    },
                    {
                        "code": "1500235",
                        "name": "云阳县"
                    },
                    {
                        "code": "1500236",
                        "name": "奉节县"
                    },
                    {
                        "code": "1500237",
                        "name": "巫山县"
                    },
                    {
                        "code": "1500238",
                        "name": "巫溪县"
                    },
                    {
                        "code": "1500240",
                        "name": "石柱土家族自治县"
                    },
                    {
                        "code": "1500241",
                        "name": "秀山土家族苗族自治县"
                    },
                    {
                        "code": "1500242",
                        "name": "酉阳土家族苗族自治县"
                    },
                    {
                        "code": "1500243",
                        "name": "彭水苗族土家族自治县"
                    }
                ]
            }
        ]
    },
    {
        "code": "151",
        "name": "四川省",
        "children": [
            {
                "code": "15101",
                "name": "成都市",
                "children": [
                    {
                        "code": "1510104",
                        "name": "锦江区"
                    },
                    {
                        "code": "1510105",
                        "name": "青羊区"
                    },
                    {
                        "code": "1510106",
                        "name": "金牛区"
                    },
                    {
                        "code": "1510107",
                        "name": "武侯区"
                    },
                    {
                        "code": "1510108",
                        "name": "成华区"
                    },
                    {
                        "code": "1510112",
                        "name": "龙泉驿区"
                    },
                    {
                        "code": "1510113",
                        "name": "青白江区"
                    },
                    {
                        "code": "1510114",
                        "name": "新都区"
                    },
                    {
                        "code": "1510115",
                        "name": "温江区"
                    },
                    {
                        "code": "1510116",
                        "name": "双流区"
                    },
                    {
                        "code": "1510121",
                        "name": "金堂县"
                    },
                    {
                        "code": "1510124",
                        "name": "郫县"
                    },
                    {
                        "code": "1510129",
                        "name": "大邑县"
                    },
                    {
                        "code": "1510131",
                        "name": "蒲江县"
                    },
                    {
                        "code": "1510132",
                        "name": "新津县"
                    },
                    {
                        "code": "1510181",
                        "name": "都江堰市"
                    },
                    {
                        "code": "1510182",
                        "name": "彭州市"
                    },
                    {
                        "code": "1510183",
                        "name": "邛崃市"
                    },
                    {
                        "code": "1510184",
                        "name": "崇州市"
                    }
                ]
            },
            {
                "code": "15103",
                "name": "自贡市",
                "children": [
                    {
                        "code": "1510302",
                        "name": "自流井区"
                    },
                    {
                        "code": "1510303",
                        "name": "贡井区"
                    },
                    {
                        "code": "1510304",
                        "name": "大安区"
                    },
                    {
                        "code": "1510311",
                        "name": "沿滩区"
                    },
                    {
                        "code": "1510321",
                        "name": "荣县"
                    },
                    {
                        "code": "1510322",
                        "name": "富顺县"
                    }
                ]
            },
            {
                "code": "15104",
                "name": "攀枝花市",
                "children": [
                    {
                        "code": "1510402",
                        "name": "东区"
                    },
                    {
                        "code": "1510403",
                        "name": "西区"
                    },
                    {
                        "code": "1510411",
                        "name": "仁和区"
                    },
                    {
                        "code": "1510421",
                        "name": "米易县"
                    },
                    {
                        "code": "1510422",
                        "name": "盐边县"
                    }
                ]
            },
            {
                "code": "15105",
                "name": "泸州市",
                "children": [
                    {
                        "code": "1510502",
                        "name": "江阳区"
                    },
                    {
                        "code": "1510503",
                        "name": "纳溪区"
                    },
                    {
                        "code": "1510504",
                        "name": "龙马潭区"
                    },
                    {
                        "code": "1510521",
                        "name": "泸县"
                    },
                    {
                        "code": "1510522",
                        "name": "合江县"
                    },
                    {
                        "code": "1510524",
                        "name": "叙永县"
                    },
                    {
                        "code": "1510525",
                        "name": "古蔺县"
                    }
                ]
            },
            {
                "code": "15106",
                "name": "德阳市",
                "children": [
                    {
                        "code": "1510603",
                        "name": "旌阳区"
                    },
                    {
                        "code": "1510623",
                        "name": "中江县"
                    },
                    {
                        "code": "1510626",
                        "name": "罗江县"
                    },
                    {
                        "code": "1510681",
                        "name": "广汉市"
                    },
                    {
                        "code": "1510682",
                        "name": "什邡市"
                    },
                    {
                        "code": "1510683",
                        "name": "绵竹市"
                    }
                ]
            },
            {
                "code": "15107",
                "name": "绵阳市",
                "children": [
                    {
                        "code": "1510703",
                        "name": "涪城区"
                    },
                    {
                        "code": "1510704",
                        "name": "游仙区"
                    },
                    {
                        "code": "1510722",
                        "name": "三台县"
                    },
                    {
                        "code": "1510723",
                        "name": "盐亭县"
                    },
                    {
                        "code": "1510724",
                        "name": "安县"
                    },
                    {
                        "code": "1510725",
                        "name": "梓潼县"
                    },
                    {
                        "code": "1510726",
                        "name": "北川羌族自治县"
                    },
                    {
                        "code": "1510727",
                        "name": "平武县"
                    },
                    {
                        "code": "1510781",
                        "name": "江油市"
                    }
                ]
            },
            {
                "code": "15108",
                "name": "广元市",
                "children": [
                    {
                        "code": "1510802",
                        "name": "利州区"
                    },
                    {
                        "code": "1510811",
                        "name": "昭化区"
                    },
                    {
                        "code": "1510812",
                        "name": "朝天区"
                    },
                    {
                        "code": "1510821",
                        "name": "旺苍县"
                    },
                    {
                        "code": "1510822",
                        "name": "青川县"
                    },
                    {
                        "code": "1510823",
                        "name": "剑阁县"
                    },
                    {
                        "code": "1510824",
                        "name": "苍溪县"
                    }
                ]
            },
            {
                "code": "15109",
                "name": "遂宁市",
                "children": [
                    {
                        "code": "1510903",
                        "name": "船山区"
                    },
                    {
                        "code": "1510904",
                        "name": "安居区"
                    },
                    {
                        "code": "1510921",
                        "name": "蓬溪县"
                    },
                    {
                        "code": "1510922",
                        "name": "射洪县"
                    },
                    {
                        "code": "1510923",
                        "name": "大英县"
                    }
                ]
            },
            {
                "code": "15110",
                "name": "内江市",
                "children": [
                    {
                        "code": "1511002",
                        "name": "市中区"
                    },
                    {
                        "code": "1511011",
                        "name": "东兴区"
                    },
                    {
                        "code": "1511024",
                        "name": "威远县"
                    },
                    {
                        "code": "1511025",
                        "name": "资中县"
                    },
                    {
                        "code": "1511028",
                        "name": "隆昌县"
                    }
                ]
            },
            {
                "code": "15111",
                "name": "乐山市",
                "children": [
                    {
                        "code": "1511102",
                        "name": "市中区"
                    },
                    {
                        "code": "1511111",
                        "name": "沙湾区"
                    },
                    {
                        "code": "1511112",
                        "name": "五通桥区"
                    },
                    {
                        "code": "1511113",
                        "name": "金口河区"
                    },
                    {
                        "code": "1511123",
                        "name": "犍为县"
                    },
                    {
                        "code": "1511124",
                        "name": "井研县"
                    },
                    {
                        "code": "1511126",
                        "name": "夹江县"
                    },
                    {
                        "code": "1511129",
                        "name": "沐川县"
                    },
                    {
                        "code": "1511132",
                        "name": "峨边彝族自治县"
                    },
                    {
                        "code": "1511133",
                        "name": "马边彝族自治县"
                    },
                    {
                        "code": "1511181",
                        "name": "峨眉山市"
                    }
                ]
            },
            {
                "code": "15113",
                "name": "南充市",
                "children": [
                    {
                        "code": "1511302",
                        "name": "顺庆区"
                    },
                    {
                        "code": "1511303",
                        "name": "高坪区"
                    },
                    {
                        "code": "1511304",
                        "name": "嘉陵区"
                    },
                    {
                        "code": "1511321",
                        "name": "南部县"
                    },
                    {
                        "code": "1511322",
                        "name": "营山县"
                    },
                    {
                        "code": "1511323",
                        "name": "蓬安县"
                    },
                    {
                        "code": "1511324",
                        "name": "仪陇县"
                    },
                    {
                        "code": "1511325",
                        "name": "西充县"
                    },
                    {
                        "code": "1511381",
                        "name": "阆中市"
                    }
                ]
            },
            {
                "code": "15114",
                "name": "眉山市",
                "children": [
                    {
                        "code": "1511402",
                        "name": "东坡区"
                    },
                    {
                        "code": "1511403",
                        "name": "彭山区"
                    },
                    {
                        "code": "1511421",
                        "name": "仁寿县"
                    },
                    {
                        "code": "1511423",
                        "name": "洪雅县"
                    },
                    {
                        "code": "1511424",
                        "name": "丹棱县"
                    },
                    {
                        "code": "1511425",
                        "name": "青神县"
                    }
                ]
            },
            {
                "code": "15115",
                "name": "宜宾市",
                "children": [
                    {
                        "code": "1511502",
                        "name": "翠屏区"
                    },
                    {
                        "code": "1511503",
                        "name": "南溪区"
                    },
                    {
                        "code": "1511521",
                        "name": "宜宾县"
                    },
                    {
                        "code": "1511523",
                        "name": "江安县"
                    },
                    {
                        "code": "1511524",
                        "name": "长宁县"
                    },
                    {
                        "code": "1511525",
                        "name": "高县"
                    },
                    {
                        "code": "1511526",
                        "name": "珙县"
                    },
                    {
                        "code": "1511527",
                        "name": "筠连县"
                    },
                    {
                        "code": "1511528",
                        "name": "兴文县"
                    },
                    {
                        "code": "1511529",
                        "name": "屏山县"
                    }
                ]
            },
            {
                "code": "15116",
                "name": "广安市",
                "children": [
                    {
                        "code": "1511602",
                        "name": "广安区"
                    },
                    {
                        "code": "1511603",
                        "name": "前锋区"
                    },
                    {
                        "code": "1511621",
                        "name": "岳池县"
                    },
                    {
                        "code": "1511622",
                        "name": "武胜县"
                    },
                    {
                        "code": "1511623",
                        "name": "邻水县"
                    },
                    {
                        "code": "1511681",
                        "name": "华蓥市"
                    }
                ]
            },
            {
                "code": "15117",
                "name": "达州市",
                "children": [
                    {
                        "code": "1511702",
                        "name": "通川区"
                    },
                    {
                        "code": "1511703",
                        "name": "达川区"
                    },
                    {
                        "code": "1511722",
                        "name": "宣汉县"
                    },
                    {
                        "code": "1511723",
                        "name": "开江县"
                    },
                    {
                        "code": "1511724",
                        "name": "大竹县"
                    },
                    {
                        "code": "1511725",
                        "name": "渠县"
                    },
                    {
                        "code": "1511781",
                        "name": "万源市"
                    }
                ]
            },
            {
                "code": "15118",
                "name": "雅安市",
                "children": [
                    {
                        "code": "1511802",
                        "name": "雨城区"
                    },
                    {
                        "code": "1511803",
                        "name": "名山区"
                    },
                    {
                        "code": "1511822",
                        "name": "荥经县"
                    },
                    {
                        "code": "1511823",
                        "name": "汉源县"
                    },
                    {
                        "code": "1511824",
                        "name": "石棉县"
                    },
                    {
                        "code": "1511825",
                        "name": "天全县"
                    },
                    {
                        "code": "1511826",
                        "name": "芦山县"
                    },
                    {
                        "code": "1511827",
                        "name": "宝兴县"
                    }
                ]
            },
            {
                "code": "15119",
                "name": "巴中市",
                "children": [
                    {
                        "code": "1511902",
                        "name": "巴州区"
                    },
                    {
                        "code": "1511903",
                        "name": "恩阳区"
                    },
                    {
                        "code": "1511921",
                        "name": "通江县"
                    },
                    {
                        "code": "1511922",
                        "name": "南江县"
                    },
                    {
                        "code": "1511923",
                        "name": "平昌县"
                    }
                ]
            },
            {
                "code": "15120",
                "name": "资阳市",
                "children": [
                    {
                        "code": "1512002",
                        "name": "雁江区"
                    },
                    {
                        "code": "1512021",
                        "name": "安岳县"
                    },
                    {
                        "code": "1512022",
                        "name": "乐至县"
                    },
                    {
                        "code": "1512081",
                        "name": "简阳市"
                    }
                ]
            },
            {
                "code": "15132",
                "name": "阿坝藏族羌族自治州",
                "children": [
                    {
                        "code": "1513201",
                        "name": "马尔康区"
                    },
                    {
                        "code": "1513221",
                        "name": "汶川县"
                    },
                    {
                        "code": "1513222",
                        "name": "理县"
                    },
                    {
                        "code": "1513223",
                        "name": "茂县"
                    },
                    {
                        "code": "1513224",
                        "name": "松潘县"
                    },
                    {
                        "code": "1513225",
                        "name": "九寨沟县"
                    },
                    {
                        "code": "1513226",
                        "name": "金川县"
                    },
                    {
                        "code": "1513227",
                        "name": "小金县"
                    },
                    {
                        "code": "1513228",
                        "name": "黑水县"
                    },
                    {
                        "code": "1513230",
                        "name": "壤塘县"
                    },
                    {
                        "code": "1513231",
                        "name": "阿坝县"
                    },
                    {
                        "code": "1513232",
                        "name": "若尔盖县"
                    },
                    {
                        "code": "1513233",
                        "name": "红原县"
                    }
                ]
            },
            {
                "code": "15133",
                "name": "甘孜藏族自治州",
                "children": [
                    {
                        "code": "1513301",
                        "name": "康定市"
                    },
                    {
                        "code": "1513322",
                        "name": "泸定县"
                    },
                    {
                        "code": "1513323",
                        "name": "丹巴县"
                    },
                    {
                        "code": "1513324",
                        "name": "九龙县"
                    },
                    {
                        "code": "1513325",
                        "name": "雅江县"
                    },
                    {
                        "code": "1513326",
                        "name": "道孚县"
                    },
                    {
                        "code": "1513327",
                        "name": "炉霍县"
                    },
                    {
                        "code": "1513328",
                        "name": "甘孜县"
                    },
                    {
                        "code": "1513329",
                        "name": "新龙县"
                    },
                    {
                        "code": "1513330",
                        "name": "德格县"
                    },
                    {
                        "code": "1513331",
                        "name": "白玉县"
                    },
                    {
                        "code": "1513332",
                        "name": "石渠县"
                    },
                    {
                        "code": "1513333",
                        "name": "色达县"
                    },
                    {
                        "code": "1513334",
                        "name": "理塘县"
                    },
                    {
                        "code": "1513335",
                        "name": "巴塘县"
                    },
                    {
                        "code": "1513336",
                        "name": "乡城县"
                    },
                    {
                        "code": "1513337",
                        "name": "稻城县"
                    },
                    {
                        "code": "1513338",
                        "name": "得荣县"
                    }
                ]
            },
            {
                "code": "15134",
                "name": "凉山彝族自治州",
                "children": [
                    {
                        "code": "1513401",
                        "name": "西昌市"
                    },
                    {
                        "code": "1513422",
                        "name": "木里藏族自治县"
                    },
                    {
                        "code": "1513423",
                        "name": "盐源县"
                    },
                    {
                        "code": "1513424",
                        "name": "德昌县"
                    },
                    {
                        "code": "1513425",
                        "name": "会理县"
                    },
                    {
                        "code": "1513426",
                        "name": "会东县"
                    },
                    {
                        "code": "1513427",
                        "name": "宁南县"
                    },
                    {
                        "code": "1513428",
                        "name": "普格县"
                    },
                    {
                        "code": "1513429",
                        "name": "布拖县"
                    },
                    {
                        "code": "1513430",
                        "name": "金阳县"
                    },
                    {
                        "code": "1513431",
                        "name": "昭觉县"
                    },
                    {
                        "code": "1513432",
                        "name": "喜德县"
                    },
                    {
                        "code": "1513433",
                        "name": "冕宁县"
                    },
                    {
                        "code": "1513434",
                        "name": "越西县"
                    },
                    {
                        "code": "1513435",
                        "name": "甘洛县"
                    },
                    {
                        "code": "1513436",
                        "name": "美姑县"
                    },
                    {
                        "code": "1513437",
                        "name": "雷波县"
                    }
                ]
            }
        ]
    },
    {
        "code": "152",
        "name": "贵州省",
        "children": [
            {
                "code": "15201",
                "name": "贵阳市",
                "children": [
                    {
                        "code": "1520102",
                        "name": "南明区"
                    },
                    {
                        "code": "1520103",
                        "name": "云岩区"
                    },
                    {
                        "code": "1520111",
                        "name": "花溪区"
                    },
                    {
                        "code": "1520112",
                        "name": "乌当区"
                    },
                    {
                        "code": "1520113",
                        "name": "白云区"
                    },
                    {
                        "code": "1520115",
                        "name": "观山湖区"
                    },
                    {
                        "code": "1520121",
                        "name": "开阳县"
                    },
                    {
                        "code": "1520122",
                        "name": "息烽县"
                    },
                    {
                        "code": "1520123",
                        "name": "修文县"
                    },
                    {
                        "code": "1520181",
                        "name": "清镇市"
                    }
                ]
            },
            {
                "code": "15202",
                "name": "六盘水市",
                "children": [
                    {
                        "code": "1520201",
                        "name": "钟山区"
                    },
                    {
                        "code": "1520203",
                        "name": "六枝特区"
                    },
                    {
                        "code": "1520221",
                        "name": "水城县"
                    },
                    {
                        "code": "1520222",
                        "name": "盘县"
                    }
                ]
            },
            {
                "code": "15203",
                "name": "遵义市",
                "children": [
                    {
                        "code": "1520302",
                        "name": "红花岗区"
                    },
                    {
                        "code": "1520303",
                        "name": "汇川区"
                    },
                    {
                        "code": "1520321",
                        "name": "遵义县"
                    },
                    {
                        "code": "1520322",
                        "name": "桐梓县"
                    },
                    {
                        "code": "1520323",
                        "name": "绥阳县"
                    },
                    {
                        "code": "1520324",
                        "name": "正安县"
                    },
                    {
                        "code": "1520325",
                        "name": "道真仡佬族苗族自治县"
                    },
                    {
                        "code": "1520326",
                        "name": "务川仡佬族苗族自治县"
                    },
                    {
                        "code": "1520327",
                        "name": "凤冈县"
                    },
                    {
                        "code": "1520328",
                        "name": "湄潭县"
                    },
                    {
                        "code": "1520329",
                        "name": "余庆县"
                    },
                    {
                        "code": "1520330",
                        "name": "习水县"
                    },
                    {
                        "code": "1520381",
                        "name": "赤水市"
                    },
                    {
                        "code": "1520382",
                        "name": "仁怀市"
                    }
                ]
            },
            {
                "code": "15204",
                "name": "安顺市",
                "children": [
                    {
                        "code": "1520402",
                        "name": "西秀区"
                    },
                    {
                        "code": "1520403",
                        "name": "平坝区"
                    },
                    {
                        "code": "1520422",
                        "name": "普定县"
                    },
                    {
                        "code": "1520423",
                        "name": "镇宁布依族苗族自治县"
                    },
                    {
                        "code": "1520424",
                        "name": "关岭布依族苗族自治县"
                    },
                    {
                        "code": "1520425",
                        "name": "紫云苗族布依族自治县"
                    }
                ]
            },
            {
                "code": "15205",
                "name": "毕节市",
                "children": [
                    {
                        "code": "1520502",
                        "name": "七星关区"
                    },
                    {
                        "code": "1520521",
                        "name": "大方县"
                    },
                    {
                        "code": "1520522",
                        "name": "黔西县"
                    },
                    {
                        "code": "1520523",
                        "name": "金沙县"
                    },
                    {
                        "code": "1520524",
                        "name": "织金县"
                    },
                    {
                        "code": "1520525",
                        "name": "纳雍县"
                    },
                    {
                        "code": "1520526",
                        "name": "威宁彝族回族苗族自治县"
                    },
                    {
                        "code": "1520527",
                        "name": "赫章县"
                    }
                ]
            },
            {
                "code": "15206",
                "name": "铜仁市",
                "children": [
                    {
                        "code": "1520602",
                        "name": "碧江区"
                    },
                    {
                        "code": "1520603",
                        "name": "万山区"
                    },
                    {
                        "code": "1520621",
                        "name": "江口县"
                    },
                    {
                        "code": "1520622",
                        "name": "玉屏侗族自治县"
                    },
                    {
                        "code": "1520623",
                        "name": "石阡县"
                    },
                    {
                        "code": "1520624",
                        "name": "思南县"
                    },
                    {
                        "code": "1520625",
                        "name": "印江土家族苗族自治县"
                    },
                    {
                        "code": "1520626",
                        "name": "德江县"
                    },
                    {
                        "code": "1520627",
                        "name": "沿河土家族自治县"
                    },
                    {
                        "code": "1520628",
                        "name": "松桃苗族自治县"
                    }
                ]
            },
            {
                "code": "15223",
                "name": "黔西南布依族苗族自治州",
                "children": [
                    {
                        "code": "1522301",
                        "name": "兴义市"
                    },
                    {
                        "code": "1522322",
                        "name": "兴仁县"
                    },
                    {
                        "code": "1522323",
                        "name": "普安县"
                    },
                    {
                        "code": "1522324",
                        "name": "晴隆县"
                    },
                    {
                        "code": "1522325",
                        "name": "贞丰县"
                    },
                    {
                        "code": "1522326",
                        "name": "望谟县"
                    },
                    {
                        "code": "1522327",
                        "name": "册亨县"
                    },
                    {
                        "code": "1522328",
                        "name": "安龙县"
                    }
                ]
            },
            {
                "code": "15226",
                "name": "黔东南苗族侗族自治州",
                "children": [
                    {
                        "code": "1522601",
                        "name": "凯里市"
                    },
                    {
                        "code": "1522622",
                        "name": "黄平县"
                    },
                    {
                        "code": "1522623",
                        "name": "施秉县"
                    },
                    {
                        "code": "1522624",
                        "name": "三穗县"
                    },
                    {
                        "code": "1522625",
                        "name": "镇远县"
                    },
                    {
                        "code": "1522626",
                        "name": "岑巩县"
                    },
                    {
                        "code": "1522627",
                        "name": "天柱县"
                    },
                    {
                        "code": "1522628",
                        "name": "锦屏县"
                    },
                    {
                        "code": "1522629",
                        "name": "剑河县"
                    },
                    {
                        "code": "1522630",
                        "name": "台江县"
                    },
                    {
                        "code": "1522631",
                        "name": "黎平县"
                    },
                    {
                        "code": "1522632",
                        "name": "榕江县"
                    },
                    {
                        "code": "1522633",
                        "name": "从江县"
                    },
                    {
                        "code": "1522634",
                        "name": "雷山县"
                    },
                    {
                        "code": "1522635",
                        "name": "麻江县"
                    },
                    {
                        "code": "1522636",
                        "name": "丹寨县"
                    }
                ]
            },
            {
                "code": "15227",
                "name": "黔南布依族苗族自治州",
                "children": [
                    {
                        "code": "1522701",
                        "name": "都匀市"
                    },
                    {
                        "code": "1522702",
                        "name": "福泉市"
                    },
                    {
                        "code": "1522722",
                        "name": "荔波县"
                    },
                    {
                        "code": "1522723",
                        "name": "贵定县"
                    },
                    {
                        "code": "1522725",
                        "name": "瓮安县"
                    },
                    {
                        "code": "1522726",
                        "name": "独山县"
                    },
                    {
                        "code": "1522727",
                        "name": "平塘县"
                    },
                    {
                        "code": "1522728",
                        "name": "罗甸县"
                    },
                    {
                        "code": "1522729",
                        "name": "长顺县"
                    },
                    {
                        "code": "1522730",
                        "name": "龙里县"
                    },
                    {
                        "code": "1522731",
                        "name": "惠水县"
                    },
                    {
                        "code": "1522732",
                        "name": "三都水族自治县"
                    }
                ]
            }
        ]
    },
    {
        "code": "153",
        "name": "云南省",
        "children": [
            {
                "code": "15301",
                "name": "昆明市",
                "children": [
                    {
                        "code": "1530102",
                        "name": "五华区"
                    },
                    {
                        "code": "1530103",
                        "name": "盘龙区"
                    },
                    {
                        "code": "1530111",
                        "name": "官渡区"
                    },
                    {
                        "code": "1530112",
                        "name": "西山区"
                    },
                    {
                        "code": "1530113",
                        "name": "东川区"
                    },
                    {
                        "code": "1530114",
                        "name": "呈贡区"
                    },
                    {
                        "code": "1530122",
                        "name": "晋宁县"
                    },
                    {
                        "code": "1530124",
                        "name": "富民县"
                    },
                    {
                        "code": "1530125",
                        "name": "宜良县"
                    },
                    {
                        "code": "1530126",
                        "name": "石林彝族自治县"
                    },
                    {
                        "code": "1530127",
                        "name": "嵩明县"
                    },
                    {
                        "code": "1530128",
                        "name": "禄劝彝族苗族自治县"
                    },
                    {
                        "code": "1530129",
                        "name": "寻甸回族彝族自治县"
                    },
                    {
                        "code": "1530181",
                        "name": "安宁市"
                    }
                ]
            },
            {
                "code": "15303",
                "name": "曲靖市",
                "children": [
                    {
                        "code": "1530302",
                        "name": "麒麟区"
                    },
                    {
                        "code": "1530321",
                        "name": "马龙县"
                    },
                    {
                        "code": "1530322",
                        "name": "陆良县"
                    },
                    {
                        "code": "1530323",
                        "name": "师宗县"
                    },
                    {
                        "code": "1530324",
                        "name": "罗平县"
                    },
                    {
                        "code": "1530325",
                        "name": "富源县"
                    },
                    {
                        "code": "1530326",
                        "name": "会泽县"
                    },
                    {
                        "code": "1530328",
                        "name": "沾益县"
                    },
                    {
                        "code": "1530381",
                        "name": "宣威市"
                    }
                ]
            },
            {
                "code": "15304",
                "name": "玉溪市",
                "children": [
                    {
                        "code": "1530402",
                        "name": "红塔区"
                    },
                    {
                        "code": "1530403",
                        "name": "江川区"
                    },
                    {
                        "code": "1530422",
                        "name": "澄江县"
                    },
                    {
                        "code": "1530423",
                        "name": "通海县"
                    },
                    {
                        "code": "1530424",
                        "name": "华宁县"
                    },
                    {
                        "code": "1530425",
                        "name": "易门县"
                    },
                    {
                        "code": "1530426",
                        "name": "峨山彝族自治县"
                    },
                    {
                        "code": "1530427",
                        "name": "新平彝族傣族自治县"
                    },
                    {
                        "code": "1530428",
                        "name": "元江哈尼族彝族傣族自治县"
                    }
                ]
            },
            {
                "code": "15305",
                "name": "保山市",
                "children": [
                    {
                        "code": "1530502",
                        "name": "隆阳区"
                    },
                    {
                        "code": "1530521",
                        "name": "施甸县"
                    },
                    {
                        "code": "1530523",
                        "name": "龙陵县"
                    },
                    {
                        "code": "1530524",
                        "name": "昌宁县"
                    },
                    {
                        "code": "1530581",
                        "name": "腾冲市"
                    }
                ]
            },
            {
                "code": "15306",
                "name": "昭通市",
                "children": [
                    {
                        "code": "1530602",
                        "name": "昭阳区"
                    },
                    {
                        "code": "1530621",
                        "name": "鲁甸县"
                    },
                    {
                        "code": "1530622",
                        "name": "巧家县"
                    },
                    {
                        "code": "1530623",
                        "name": "盐津县"
                    },
                    {
                        "code": "1530624",
                        "name": "大关县"
                    },
                    {
                        "code": "1530625",
                        "name": "永善县"
                    },
                    {
                        "code": "1530626",
                        "name": "绥江县"
                    },
                    {
                        "code": "1530627",
                        "name": "镇雄县"
                    },
                    {
                        "code": "1530628",
                        "name": "彝良县"
                    },
                    {
                        "code": "1530629",
                        "name": "威信县"
                    },
                    {
                        "code": "1530630",
                        "name": "水富县"
                    }
                ]
            },
            {
                "code": "15307",
                "name": "丽江市",
                "children": [
                    {
                        "code": "1530702",
                        "name": "古城区"
                    },
                    {
                        "code": "1530721",
                        "name": "玉龙纳西族自治县"
                    },
                    {
                        "code": "1530722",
                        "name": "永胜县"
                    },
                    {
                        "code": "1530723",
                        "name": "华坪县"
                    },
                    {
                        "code": "1530724",
                        "name": "宁蒗彝族自治县"
                    }
                ]
            },
            {
                "code": "15308",
                "name": "普洱市",
                "children": [
                    {
                        "code": "1530802",
                        "name": "思茅区"
                    },
                    {
                        "code": "1530821",
                        "name": "宁洱哈尼族彝族自治县"
                    },
                    {
                        "code": "1530822",
                        "name": "墨江哈尼族自治县"
                    },
                    {
                        "code": "1530823",
                        "name": "景东彝族自治县"
                    },
                    {
                        "code": "1530824",
                        "name": "景谷傣族彝族自治县"
                    },
                    {
                        "code": "1530825",
                        "name": "镇沅彝族哈尼族拉祜族自治县"
                    },
                    {
                        "code": "1530826",
                        "name": "江城哈尼族彝族自治县"
                    },
                    {
                        "code": "1530827",
                        "name": "孟连傣族拉祜族佤族自治县"
                    },
                    {
                        "code": "1530828",
                        "name": "澜沧拉祜族自治县"
                    },
                    {
                        "code": "1530829",
                        "name": "西盟佤族自治县"
                    }
                ]
            },
            {
                "code": "15309",
                "name": "临沧市",
                "children": [
                    {
                        "code": "1530902",
                        "name": "临翔区"
                    },
                    {
                        "code": "1530921",
                        "name": "凤庆县"
                    },
                    {
                        "code": "1530922",
                        "name": "云县"
                    },
                    {
                        "code": "1530923",
                        "name": "永德县"
                    },
                    {
                        "code": "1530924",
                        "name": "镇康县"
                    },
                    {
                        "code": "1530925",
                        "name": "双江拉祜族佤族布朗族傣族自治县"
                    },
                    {
                        "code": "1530926",
                        "name": "耿马傣族佤族自治县"
                    },
                    {
                        "code": "1530927",
                        "name": "沧源佤族自治县"
                    }
                ]
            },
            {
                "code": "15323",
                "name": "楚雄彝族自治州",
                "children": [
                    {
                        "code": "1532301",
                        "name": "楚雄市"
                    },
                    {
                        "code": "1532322",
                        "name": "双柏县"
                    },
                    {
                        "code": "1532323",
                        "name": "牟定县"
                    },
                    {
                        "code": "1532324",
                        "name": "南华县"
                    },
                    {
                        "code": "1532325",
                        "name": "姚安县"
                    },
                    {
                        "code": "1532326",
                        "name": "大姚县"
                    },
                    {
                        "code": "1532327",
                        "name": "永仁县"
                    },
                    {
                        "code": "1532328",
                        "name": "元谋县"
                    },
                    {
                        "code": "1532329",
                        "name": "武定县"
                    },
                    {
                        "code": "1532331",
                        "name": "禄丰县"
                    }
                ]
            },
            {
                "code": "15325",
                "name": "红河哈尼族彝族自治州",
                "children": [
                    {
                        "code": "1532501",
                        "name": "个旧市"
                    },
                    {
                        "code": "1532502",
                        "name": "开远市"
                    },
                    {
                        "code": "1532503",
                        "name": "蒙自市"
                    },
                    {
                        "code": "1532504",
                        "name": "弥勒市"
                    },
                    {
                        "code": "1532523",
                        "name": "屏边苗族自治县"
                    },
                    {
                        "code": "1532524",
                        "name": "建水县"
                    },
                    {
                        "code": "1532525",
                        "name": "石屏县"
                    },
                    {
                        "code": "1532527",
                        "name": "泸西县"
                    },
                    {
                        "code": "1532528",
                        "name": "元阳县"
                    },
                    {
                        "code": "1532529",
                        "name": "红河县"
                    },
                    {
                        "code": "1532530",
                        "name": "金平苗族瑶族傣族自治县"
                    },
                    {
                        "code": "1532531",
                        "name": "绿春县"
                    },
                    {
                        "code": "1532532",
                        "name": "河口瑶族自治县"
                    }
                ]
            },
            {
                "code": "15326",
                "name": "文山壮族苗族自治州",
                "children": [
                    {
                        "code": "1532601",
                        "name": "文山市"
                    },
                    {
                        "code": "1532622",
                        "name": "砚山县"
                    },
                    {
                        "code": "1532623",
                        "name": "西畴县"
                    },
                    {
                        "code": "1532624",
                        "name": "麻栗坡县"
                    },
                    {
                        "code": "1532625",
                        "name": "马关县"
                    },
                    {
                        "code": "1532626",
                        "name": "丘北县"
                    },
                    {
                        "code": "1532627",
                        "name": "广南县"
                    },
                    {
                        "code": "1532628",
                        "name": "富宁县"
                    }
                ]
            },
            {
                "code": "15328",
                "name": "西双版纳傣族自治州",
                "children": [
                    {
                        "code": "1532801",
                        "name": "景洪市"
                    },
                    {
                        "code": "1532822",
                        "name": "勐海县"
                    },
                    {
                        "code": "1532823",
                        "name": "勐腊县"
                    }
                ]
            },
            {
                "code": "15329",
                "name": "大理白族自治州",
                "children": [
                    {
                        "code": "1532901",
                        "name": "大理市"
                    },
                    {
                        "code": "1532922",
                        "name": "漾濞彝族自治县"
                    },
                    {
                        "code": "1532923",
                        "name": "祥云县"
                    },
                    {
                        "code": "1532924",
                        "name": "宾川县"
                    },
                    {
                        "code": "1532925",
                        "name": "弥渡县"
                    },
                    {
                        "code": "1532926",
                        "name": "南涧彝族自治县"
                    },
                    {
                        "code": "1532927",
                        "name": "巍山彝族回族自治县"
                    },
                    {
                        "code": "1532928",
                        "name": "永平县"
                    },
                    {
                        "code": "1532929",
                        "name": "云龙县"
                    },
                    {
                        "code": "1532930",
                        "name": "洱源县"
                    },
                    {
                        "code": "1532931",
                        "name": "剑川县"
                    },
                    {
                        "code": "1532932",
                        "name": "鹤庆县"
                    }
                ]
            },
            {
                "code": "15331",
                "name": "德宏傣族景颇族自治州",
                "children": [
                    {
                        "code": "1533102",
                        "name": "瑞丽市"
                    },
                    {
                        "code": "1533103",
                        "name": "芒市"
                    },
                    {
                        "code": "1533122",
                        "name": "梁河县"
                    },
                    {
                        "code": "1533123",
                        "name": "盈江县"
                    },
                    {
                        "code": "1533124",
                        "name": "陇川县"
                    }
                ]
            },
            {
                "code": "15333",
                "name": "怒江傈僳族自治州",
                "children": [
                    {
                        "code": "1533321",
                        "name": "泸水县"
                    },
                    {
                        "code": "1533323",
                        "name": "福贡县"
                    },
                    {
                        "code": "1533324",
                        "name": "贡山独龙族怒族自治县"
                    },
                    {
                        "code": "1533325",
                        "name": "兰坪白族普米族自治县"
                    }
                ]
            },
            {
                "code": "15334",
                "name": "迪庆藏族自治州",
                "children": [
                    {
                        "code": "1533400",
                        "name": "迪庆藏族自治州"
                    },
                    {
                        "code": "1533401",
                        "name": "香格里拉市"
                    },
                    {
                        "code": "1533422",
                        "name": "德钦县"
                    },
                    {
                        "code": "1533423",
                        "name": "维西傈僳族自治县"
                    }
                ]
            }
        ]
    },
    {
        "code": "154",
        "name": "西藏自治区",
        "children": [
            {
                "code": "15401",
                "name": "拉萨市",
                "children": [
                    {
                        "code": "1540102",
                        "name": "城关区"
                    },
                    {
                        "code": "1540103",
                        "name": "堆龙德庆区"
                    },
                    {
                        "code": "1540121",
                        "name": "林周县"
                    },
                    {
                        "code": "1540122",
                        "name": "当雄县"
                    },
                    {
                        "code": "1540123",
                        "name": "尼木县"
                    },
                    {
                        "code": "1540124",
                        "name": "曲水县"
                    },
                    {
                        "code": "1540126",
                        "name": "达孜县"
                    },
                    {
                        "code": "1540127",
                        "name": "墨竹工卡县"
                    }
                ]
            },
            {
                "code": "15402",
                "name": "日喀则市",
                "children": [
                    {
                        "code": "1540202",
                        "name": "桑珠孜区"
                    },
                    {
                        "code": "1540221",
                        "name": "南木林县"
                    },
                    {
                        "code": "1540222",
                        "name": "江孜县"
                    },
                    {
                        "code": "1540223",
                        "name": "定日县"
                    },
                    {
                        "code": "1540224",
                        "name": "萨迦县"
                    },
                    {
                        "code": "1540225",
                        "name": "拉孜县"
                    },
                    {
                        "code": "1540226",
                        "name": "昂仁县"
                    },
                    {
                        "code": "1540227",
                        "name": "谢通门县"
                    },
                    {
                        "code": "1540228",
                        "name": "白朗县"
                    },
                    {
                        "code": "1540229",
                        "name": "仁布县"
                    },
                    {
                        "code": "1540230",
                        "name": "康马县"
                    },
                    {
                        "code": "1540231",
                        "name": "定结县"
                    },
                    {
                        "code": "1540232",
                        "name": "仲巴县"
                    },
                    {
                        "code": "1540233",
                        "name": "亚东县"
                    },
                    {
                        "code": "1540234",
                        "name": "吉隆县"
                    },
                    {
                        "code": "1540235",
                        "name": "聂拉木县"
                    },
                    {
                        "code": "1540236",
                        "name": "萨嘎县"
                    },
                    {
                        "code": "1540237",
                        "name": "岗巴县"
                    }
                ]
            },
            {
                "code": "15403",
                "name": "昌都市",
                "children": [
                    {
                        "code": "1540302",
                        "name": "卡若区"
                    },
                    {
                        "code": "1540321",
                        "name": "江达县"
                    },
                    {
                        "code": "1540322",
                        "name": "贡觉县"
                    },
                    {
                        "code": "1540323",
                        "name": "类乌齐县"
                    },
                    {
                        "code": "1540324",
                        "name": "丁青县"
                    },
                    {
                        "code": "1540325",
                        "name": "察雅县"
                    },
                    {
                        "code": "1540326",
                        "name": "八宿县"
                    },
                    {
                        "code": "1540327",
                        "name": "左贡县"
                    },
                    {
                        "code": "1540328",
                        "name": "芒康县"
                    },
                    {
                        "code": "1540329",
                        "name": "洛隆县"
                    },
                    {
                        "code": "1540330",
                        "name": "边坝县"
                    }
                ]
            },
            {
                "code": "15404",
                "name": "林芝市",
                "children": [
                    {
                        "code": "1540402",
                        "name": "巴宜区"
                    },
                    {
                        "code": "1540421",
                        "name": "工布江达县"
                    },
                    {
                        "code": "1540422",
                        "name": "米林县"
                    },
                    {
                        "code": "1540423",
                        "name": "墨脱县"
                    },
                    {
                        "code": "1540424",
                        "name": "波密县"
                    },
                    {
                        "code": "1540425",
                        "name": "察隅县"
                    },
                    {
                        "code": "1540426",
                        "name": "朗县"
                    }
                ]
            },
            {
                "code": "15422",
                "name": "山南地区",
                "children": [
                    {
                        "code": "1542221",
                        "name": "乃东县"
                    },
                    {
                        "code": "1542222",
                        "name": "扎囊县"
                    },
                    {
                        "code": "1542223",
                        "name": "贡嘎县"
                    },
                    {
                        "code": "1542224",
                        "name": "桑日县"
                    },
                    {
                        "code": "1542225",
                        "name": "琼结县"
                    },
                    {
                        "code": "1542226",
                        "name": "曲松县"
                    },
                    {
                        "code": "1542227",
                        "name": "措美县"
                    },
                    {
                        "code": "1542228",
                        "name": "洛扎县"
                    },
                    {
                        "code": "1542229",
                        "name": "加查县"
                    },
                    {
                        "code": "1542231",
                        "name": "隆子县"
                    },
                    {
                        "code": "1542232",
                        "name": "错那县"
                    },
                    {
                        "code": "1542233",
                        "name": "浪卡子县"
                    }
                ]
            },
            {
                "code": "15424",
                "name": "那曲地区",
                "children": [
                    {
                        "code": "1542421",
                        "name": "那曲县"
                    },
                    {
                        "code": "1542422",
                        "name": "嘉黎县"
                    },
                    {
                        "code": "1542423",
                        "name": "比如县"
                    },
                    {
                        "code": "1542424",
                        "name": "聂荣县"
                    },
                    {
                        "code": "1542425",
                        "name": "安多县"
                    },
                    {
                        "code": "1542426",
                        "name": "申扎县"
                    },
                    {
                        "code": "1542427",
                        "name": "索县"
                    },
                    {
                        "code": "1542428",
                        "name": "班戈县"
                    },
                    {
                        "code": "1542429",
                        "name": "巴青县"
                    },
                    {
                        "code": "1542430",
                        "name": "尼玛县"
                    },
                    {
                        "code": "1542431",
                        "name": "双湖县"
                    }
                ]
            },
            {
                "code": "15425",
                "name": "阿里地区",
                "children": [
                    {
                        "code": "1542521",
                        "name": "普兰县"
                    },
                    {
                        "code": "1542522",
                        "name": "札达县"
                    },
                    {
                        "code": "1542523",
                        "name": "噶尔县"
                    },
                    {
                        "code": "1542524",
                        "name": "日土县"
                    },
                    {
                        "code": "1542525",
                        "name": "革吉县"
                    },
                    {
                        "code": "1542526",
                        "name": "改则县"
                    },
                    {
                        "code": "1542527",
                        "name": "措勤县"
                    }
                ]
            }
        ]
    },
    {
        "code": "161",
        "name": "陕西省",
        "children": [
            {
                "code": "16101",
                "name": "西安市",
                "children": [
                    {
                        "code": "1610102",
                        "name": "新城区"
                    },
                    {
                        "code": "1610103",
                        "name": "碑林区"
                    },
                    {
                        "code": "1610104",
                        "name": "莲湖区"
                    },
                    {
                        "code": "1610111",
                        "name": "灞桥区"
                    },
                    {
                        "code": "1610112",
                        "name": "未央区"
                    },
                    {
                        "code": "1610113",
                        "name": "雁塔区"
                    },
                    {
                        "code": "1610114",
                        "name": "阎良区"
                    },
                    {
                        "code": "1610115",
                        "name": "临潼区"
                    },
                    {
                        "code": "1610116",
                        "name": "长安区"
                    },
                    {
                        "code": "1610117",
                        "name": "高陵区"
                    },
                    {
                        "code": "1610122",
                        "name": "蓝田县"
                    },
                    {
                        "code": "1610124",
                        "name": "周至县"
                    },
                    {
                        "code": "1610125",
                        "name": "户县"
                    }
                ]
            },
            {
                "code": "16102",
                "name": "铜川市",
                "children": [
                    {
                        "code": "1610202",
                        "name": "王益区"
                    },
                    {
                        "code": "1610203",
                        "name": "印台区"
                    },
                    {
                        "code": "1610204",
                        "name": "耀州区"
                    },
                    {
                        "code": "1610222",
                        "name": "宜君县"
                    }
                ]
            },
            {
                "code": "16103",
                "name": "宝鸡市",
                "children": [
                    {
                        "code": "1610302",
                        "name": "渭滨区"
                    },
                    {
                        "code": "1610303",
                        "name": "金台区"
                    },
                    {
                        "code": "1610304",
                        "name": "陈仓区"
                    },
                    {
                        "code": "1610322",
                        "name": "凤翔县"
                    },
                    {
                        "code": "1610323",
                        "name": "岐山县"
                    },
                    {
                        "code": "1610324",
                        "name": "扶风县"
                    },
                    {
                        "code": "1610326",
                        "name": "眉县"
                    },
                    {
                        "code": "1610327",
                        "name": "陇县"
                    },
                    {
                        "code": "1610328",
                        "name": "千阳县"
                    },
                    {
                        "code": "1610329",
                        "name": "麟游县"
                    },
                    {
                        "code": "1610330",
                        "name": "凤县"
                    },
                    {
                        "code": "1610331",
                        "name": "太白县"
                    }
                ]
            },
            {
                "code": "16104",
                "name": "咸阳市",
                "children": [
                    {
                        "code": "1610402",
                        "name": "秦都区"
                    },
                    {
                        "code": "1610403",
                        "name": "杨陵区"
                    },
                    {
                        "code": "1610404",
                        "name": "渭城区"
                    },
                    {
                        "code": "1610422",
                        "name": "三原县"
                    },
                    {
                        "code": "1610423",
                        "name": "泾阳县"
                    },
                    {
                        "code": "1610424",
                        "name": "乾县"
                    },
                    {
                        "code": "1610425",
                        "name": "礼泉县"
                    },
                    {
                        "code": "1610426",
                        "name": "永寿县"
                    },
                    {
                        "code": "1610427",
                        "name": "彬县"
                    },
                    {
                        "code": "1610428",
                        "name": "长武县"
                    },
                    {
                        "code": "1610429",
                        "name": "旬邑县"
                    },
                    {
                        "code": "1610430",
                        "name": "淳化县"
                    },
                    {
                        "code": "1610431",
                        "name": "武功县"
                    },
                    {
                        "code": "1610481",
                        "name": "兴平市"
                    }
                ]
            },
            {
                "code": "16105",
                "name": "渭南市",
                "children": [
                    {
                        "code": "1610502",
                        "name": "临渭区"
                    },
                    {
                        "code": "1610503",
                        "name": "华州区"
                    },
                    {
                        "code": "1610522",
                        "name": "潼关县"
                    },
                    {
                        "code": "1610523",
                        "name": "大荔县"
                    },
                    {
                        "code": "1610524",
                        "name": "合阳县"
                    },
                    {
                        "code": "1610525",
                        "name": "澄城县"
                    },
                    {
                        "code": "1610526",
                        "name": "蒲城县"
                    },
                    {
                        "code": "1610527",
                        "name": "白水县"
                    },
                    {
                        "code": "1610528",
                        "name": "富平县"
                    },
                    {
                        "code": "1610581",
                        "name": "韩城市"
                    },
                    {
                        "code": "1610582",
                        "name": "华阴市"
                    }
                ]
            },
            {
                "code": "16106",
                "name": "延安市",
                "children": [
                    {
                        "code": "1610602",
                        "name": "宝塔区"
                    },
                    {
                        "code": "1610621",
                        "name": "延长县"
                    },
                    {
                        "code": "1610622",
                        "name": "延川县"
                    },
                    {
                        "code": "1610623",
                        "name": "子长县"
                    },
                    {
                        "code": "1610624",
                        "name": "安塞县"
                    },
                    {
                        "code": "1610625",
                        "name": "志丹县"
                    },
                    {
                        "code": "1610626",
                        "name": "吴起县"
                    },
                    {
                        "code": "1610627",
                        "name": "甘泉县"
                    },
                    {
                        "code": "1610628",
                        "name": "富县"
                    },
                    {
                        "code": "1610629",
                        "name": "洛川县"
                    },
                    {
                        "code": "1610630",
                        "name": "宜川县"
                    },
                    {
                        "code": "1610631",
                        "name": "黄龙县"
                    },
                    {
                        "code": "1610632",
                        "name": "黄陵县"
                    }
                ]
            },
            {
                "code": "16107",
                "name": "汉中市",
                "children": [
                    {
                        "code": "1610702",
                        "name": "汉台区"
                    },
                    {
                        "code": "1610721",
                        "name": "南郑县"
                    },
                    {
                        "code": "1610722",
                        "name": "城固县"
                    },
                    {
                        "code": "1610723",
                        "name": "洋县"
                    },
                    {
                        "code": "1610724",
                        "name": "西乡县"
                    },
                    {
                        "code": "1610725",
                        "name": "勉县"
                    },
                    {
                        "code": "1610726",
                        "name": "宁强县"
                    },
                    {
                        "code": "1610727",
                        "name": "略阳县"
                    },
                    {
                        "code": "1610728",
                        "name": "镇巴县"
                    },
                    {
                        "code": "1610729",
                        "name": "留坝县"
                    },
                    {
                        "code": "1610730",
                        "name": "佛坪县"
                    }
                ]
            },
            {
                "code": "16108",
                "name": "榆林市",
                "children": [
                    {
                        "code": "1610802",
                        "name": "榆阳区"
                    },
                    {
                        "code": "1610803",
                        "name": "横山区"
                    },
                    {
                        "code": "1610821",
                        "name": "神木县"
                    },
                    {
                        "code": "1610822",
                        "name": "府谷县"
                    },
                    {
                        "code": "1610824",
                        "name": "靖边县"
                    },
                    {
                        "code": "1610825",
                        "name": "定边县"
                    },
                    {
                        "code": "1610826",
                        "name": "绥德县"
                    },
                    {
                        "code": "1610827",
                        "name": "米脂县"
                    },
                    {
                        "code": "1610828",
                        "name": "佳县"
                    },
                    {
                        "code": "1610829",
                        "name": "吴堡县"
                    },
                    {
                        "code": "1610830",
                        "name": "清涧县"
                    },
                    {
                        "code": "1610831",
                        "name": "子洲县"
                    }
                ]
            },
            {
                "code": "16109",
                "name": "安康市",
                "children": [
                    {
                        "code": "1610902",
                        "name": "汉滨区"
                    },
                    {
                        "code": "1610921",
                        "name": "汉阴县"
                    },
                    {
                        "code": "1610922",
                        "name": "石泉县"
                    },
                    {
                        "code": "1610923",
                        "name": "宁陕县"
                    },
                    {
                        "code": "1610924",
                        "name": "紫阳县"
                    },
                    {
                        "code": "1610925",
                        "name": "岚皋县"
                    },
                    {
                        "code": "1610926",
                        "name": "平利县"
                    },
                    {
                        "code": "1610927",
                        "name": "镇坪县"
                    },
                    {
                        "code": "1610928",
                        "name": "旬阳县"
                    },
                    {
                        "code": "1610929",
                        "name": "白河县"
                    }
                ]
            },
            {
                "code": "16110",
                "name": "商洛市",
                "children": [
                    {
                        "code": "1611002",
                        "name": "商州区"
                    },
                    {
                        "code": "1611021",
                        "name": "洛南县"
                    },
                    {
                        "code": "1611022",
                        "name": "丹凤县"
                    },
                    {
                        "code": "1611023",
                        "name": "商南县"
                    },
                    {
                        "code": "1611024",
                        "name": "山阳县"
                    },
                    {
                        "code": "1611025",
                        "name": "镇安县"
                    },
                    {
                        "code": "1611026",
                        "name": "柞水县"
                    }
                ]
            }
        ]
    },
    {
        "code": "162",
        "name": "甘肃省",
        "children": [
            {
                "code": "16201",
                "name": "兰州市",
                "children": [
                    {
                        "code": "1620102",
                        "name": "城关区"
                    },
                    {
                        "code": "1620103",
                        "name": "七里河区"
                    },
                    {
                        "code": "1620104",
                        "name": "西固区"
                    },
                    {
                        "code": "1620105",
                        "name": "安宁区"
                    },
                    {
                        "code": "1620111",
                        "name": "红古区"
                    },
                    {
                        "code": "1620121",
                        "name": "永登县"
                    },
                    {
                        "code": "1620122",
                        "name": "皋兰县"
                    },
                    {
                        "code": "1620123",
                        "name": "榆中县"
                    }
                ]
            },
            {
                "code": "16202",
                "name": "嘉峪关市",
                "children": [
                    {
                        "code": "1620201",
                        "name": "市辖区"
                    }
                ]
            },
            {
                "code": "16203",
                "name": "金昌市",
                "children": [
                    {
                        "code": "1620302",
                        "name": "金川区"
                    },
                    {
                        "code": "1620321",
                        "name": "永昌县"
                    }
                ]
            },
            {
                "code": "16204",
                "name": "白银市",
                "children": [
                    {
                        "code": "1620402",
                        "name": "白银区"
                    },
                    {
                        "code": "1620403",
                        "name": "平川区"
                    },
                    {
                        "code": "1620421",
                        "name": "靖远县"
                    },
                    {
                        "code": "1620422",
                        "name": "会宁县"
                    },
                    {
                        "code": "1620423",
                        "name": "景泰县"
                    }
                ]
            },
            {
                "code": "16205",
                "name": "天水市",
                "children": [
                    {
                        "code": "1620502",
                        "name": "秦州区"
                    },
                    {
                        "code": "1620503",
                        "name": "麦积区"
                    },
                    {
                        "code": "1620521",
                        "name": "清水县"
                    },
                    {
                        "code": "1620522",
                        "name": "秦安县"
                    },
                    {
                        "code": "1620523",
                        "name": "甘谷县"
                    },
                    {
                        "code": "1620524",
                        "name": "武山县"
                    },
                    {
                        "code": "1620525",
                        "name": "张家川回族自治县"
                    }
                ]
            },
            {
                "code": "16206",
                "name": "武威市",
                "children": [
                    {
                        "code": "1620602",
                        "name": "凉州区"
                    },
                    {
                        "code": "1620621",
                        "name": "民勤县"
                    },
                    {
                        "code": "1620622",
                        "name": "古浪县"
                    },
                    {
                        "code": "1620623",
                        "name": "天祝藏族自治县"
                    }
                ]
            },
            {
                "code": "16207",
                "name": "张掖市",
                "children": [
                    {
                        "code": "1620702",
                        "name": "甘州区"
                    },
                    {
                        "code": "1620721",
                        "name": "肃南裕固族自治县"
                    },
                    {
                        "code": "1620722",
                        "name": "民乐县"
                    },
                    {
                        "code": "1620723",
                        "name": "临泽县"
                    },
                    {
                        "code": "1620724",
                        "name": "高台县"
                    },
                    {
                        "code": "1620725",
                        "name": "山丹县"
                    }
                ]
            },
            {
                "code": "16208",
                "name": "平凉市",
                "children": [
                    {
                        "code": "1620802",
                        "name": "崆峒区"
                    },
                    {
                        "code": "1620821",
                        "name": "泾川县"
                    },
                    {
                        "code": "1620822",
                        "name": "灵台县"
                    },
                    {
                        "code": "1620823",
                        "name": "崇信县"
                    },
                    {
                        "code": "1620824",
                        "name": "华亭县"
                    },
                    {
                        "code": "1620825",
                        "name": "庄浪县"
                    },
                    {
                        "code": "1620826",
                        "name": "静宁县"
                    }
                ]
            },
            {
                "code": "16209",
                "name": "酒泉市",
                "children": [
                    {
                        "code": "1620902",
                        "name": "肃州区"
                    },
                    {
                        "code": "1620921",
                        "name": "金塔县"
                    },
                    {
                        "code": "1620922",
                        "name": "瓜州县"
                    },
                    {
                        "code": "1620923",
                        "name": "肃北蒙古族自治县"
                    },
                    {
                        "code": "1620924",
                        "name": "阿克塞哈萨克族自治县"
                    },
                    {
                        "code": "1620981",
                        "name": "玉门市"
                    },
                    {
                        "code": "1620982",
                        "name": "敦煌市"
                    }
                ]
            },
            {
                "code": "16210",
                "name": "庆阳市",
                "children": [
                    {
                        "code": "1621002",
                        "name": "西峰区"
                    },
                    {
                        "code": "1621021",
                        "name": "庆城县"
                    },
                    {
                        "code": "1621022",
                        "name": "环县"
                    },
                    {
                        "code": "1621023",
                        "name": "华池县"
                    },
                    {
                        "code": "1621024",
                        "name": "合水县"
                    },
                    {
                        "code": "1621025",
                        "name": "正宁县"
                    },
                    {
                        "code": "1621026",
                        "name": "宁县"
                    },
                    {
                        "code": "1621027",
                        "name": "镇原县"
                    }
                ]
            },
            {
                "code": "16211",
                "name": "定西市",
                "children": [
                    {
                        "code": "1621102",
                        "name": "安定区"
                    },
                    {
                        "code": "1621121",
                        "name": "通渭县"
                    },
                    {
                        "code": "1621122",
                        "name": "陇西县"
                    },
                    {
                        "code": "1621123",
                        "name": "渭源县"
                    },
                    {
                        "code": "1621124",
                        "name": "临洮县"
                    },
                    {
                        "code": "1621125",
                        "name": "漳县"
                    },
                    {
                        "code": "1621126",
                        "name": "岷县"
                    }
                ]
            },
            {
                "code": "16212",
                "name": "陇南市",
                "children": [
                    {
                        "code": "1621202",
                        "name": "武都区"
                    },
                    {
                        "code": "1621221",
                        "name": "成县"
                    },
                    {
                        "code": "1621222",
                        "name": "文县"
                    },
                    {
                        "code": "1621223",
                        "name": "宕昌县"
                    },
                    {
                        "code": "1621224",
                        "name": "康县"
                    },
                    {
                        "code": "1621225",
                        "name": "西和县"
                    },
                    {
                        "code": "1621226",
                        "name": "礼县"
                    },
                    {
                        "code": "1621227",
                        "name": "徽县"
                    },
                    {
                        "code": "1621228",
                        "name": "两当县"
                    }
                ]
            },
            {
                "code": "16229",
                "name": "临夏回族自治州",
                "children": [
                    {
                        "code": "1622901",
                        "name": "临夏市"
                    },
                    {
                        "code": "1622921",
                        "name": "临夏县"
                    },
                    {
                        "code": "1622922",
                        "name": "康乐县"
                    },
                    {
                        "code": "1622923",
                        "name": "永靖县"
                    },
                    {
                        "code": "1622924",
                        "name": "广河县"
                    },
                    {
                        "code": "1622925",
                        "name": "和政县"
                    },
                    {
                        "code": "1622926",
                        "name": "东乡族自治县"
                    },
                    {
                        "code": "1622927",
                        "name": "积石山保安族东乡族撒拉族自治县"
                    }
                ]
            },
            {
                "code": "16230",
                "name": "甘南藏族自治州",
                "children": [
                    {
                        "code": "1623001",
                        "name": "合作市"
                    },
                    {
                        "code": "1623021",
                        "name": "临潭县"
                    },
                    {
                        "code": "1623022",
                        "name": "卓尼县"
                    },
                    {
                        "code": "1623023",
                        "name": "舟曲县"
                    },
                    {
                        "code": "1623024",
                        "name": "迭部县"
                    },
                    {
                        "code": "1623025",
                        "name": "玛曲县"
                    },
                    {
                        "code": "1623026",
                        "name": "碌曲县"
                    },
                    {
                        "code": "1623027",
                        "name": "夏河县"
                    }
                ]
            }
        ]
    },
    {
        "code": "163",
        "name": "青海省",
        "children": [
            {
                "code": "16301",
                "name": "西宁市",
                "children": [
                    {
                        "code": "1630102",
                        "name": "城东区"
                    },
                    {
                        "code": "1630103",
                        "name": "城中区"
                    },
                    {
                        "code": "1630104",
                        "name": "城西区"
                    },
                    {
                        "code": "1630105",
                        "name": "城北区"
                    },
                    {
                        "code": "1630121",
                        "name": "大通回族土族自治县"
                    },
                    {
                        "code": "1630122",
                        "name": "湟中县"
                    },
                    {
                        "code": "1630123",
                        "name": "湟源县"
                    }
                ]
            },
            {
                "code": "16302",
                "name": "海东市",
                "children": [
                    {
                        "code": "1630202",
                        "name": "乐都区"
                    },
                    {
                        "code": "1630203",
                        "name": "平安区"
                    },
                    {
                        "code": "1630222",
                        "name": "民和回族土族自治县"
                    },
                    {
                        "code": "1630223",
                        "name": "互助土族自治县"
                    },
                    {
                        "code": "1630224",
                        "name": "化隆回族自治县"
                    },
                    {
                        "code": "1630225",
                        "name": "循化撒拉族自治县"
                    }
                ]
            },
            {
                "code": "16322",
                "name": "海北藏族自治州",
                "children": [
                    {
                        "code": "1632221",
                        "name": "门源回族自治县"
                    },
                    {
                        "code": "1632222",
                        "name": "祁连县"
                    },
                    {
                        "code": "1632223",
                        "name": "海晏县"
                    },
                    {
                        "code": "1632224",
                        "name": "刚察县"
                    }
                ]
            },
            {
                "code": "16323",
                "name": "黄南藏族自治州",
                "children": [
                    {
                        "code": "1632321",
                        "name": "同仁县"
                    },
                    {
                        "code": "1632322",
                        "name": "尖扎县"
                    },
                    {
                        "code": "1632323",
                        "name": "泽库县"
                    },
                    {
                        "code": "1632324",
                        "name": "河南蒙古族自治县"
                    }
                ]
            },
            {
                "code": "16325",
                "name": "海南藏族自治州",
                "children": [
                    {
                        "code": "1632521",
                        "name": "共和县"
                    },
                    {
                        "code": "1632522",
                        "name": "同德县"
                    },
                    {
                        "code": "1632523",
                        "name": "贵德县"
                    },
                    {
                        "code": "1632524",
                        "name": "兴海县"
                    },
                    {
                        "code": "1632525",
                        "name": "贵南县"
                    }
                ]
            },
            {
                "code": "16326",
                "name": "果洛藏族自治州",
                "children": [
                    {
                        "code": "1632621",
                        "name": "玛沁县"
                    },
                    {
                        "code": "1632622",
                        "name": "班玛县"
                    },
                    {
                        "code": "1632623",
                        "name": "甘德县"
                    },
                    {
                        "code": "1632624",
                        "name": "达日县"
                    },
                    {
                        "code": "1632625",
                        "name": "久治县"
                    },
                    {
                        "code": "1632626",
                        "name": "玛多县"
                    }
                ]
            },
            {
                "code": "16327",
                "name": "玉树藏族自治州",
                "children": [
                    {
                        "code": "1632701",
                        "name": "玉树市"
                    },
                    {
                        "code": "1632722",
                        "name": "杂多县"
                    },
                    {
                        "code": "1632723",
                        "name": "称多县"
                    },
                    {
                        "code": "1632724",
                        "name": "治多县"
                    },
                    {
                        "code": "1632725",
                        "name": "囊谦县"
                    },
                    {
                        "code": "1632726",
                        "name": "曲麻莱县"
                    }
                ]
            },
            {
                "code": "16328",
                "name": "海西蒙古族藏族自治州",
                "children": [
                    {
                        "code": "1632801",
                        "name": "格尔木市"
                    },
                    {
                        "code": "1632802",
                        "name": "德令哈市"
                    },
                    {
                        "code": "1632821",
                        "name": "乌兰县"
                    },
                    {
                        "code": "1632822",
                        "name": "都兰县"
                    },
                    {
                        "code": "1632823",
                        "name": "天峻县"
                    }
                ]
            }
        ]
    },
    {
        "code": "164",
        "name": "宁夏回族自治区",
        "children": [
            {
                "code": "16401",
                "name": "银川市",
                "children": [
                    {
                        "code": "1640104",
                        "name": "兴庆区"
                    },
                    {
                        "code": "1640105",
                        "name": "西夏区"
                    },
                    {
                        "code": "1640106",
                        "name": "金凤区"
                    },
                    {
                        "code": "1640121",
                        "name": "永宁县"
                    },
                    {
                        "code": "1640122",
                        "name": "贺兰县"
                    },
                    {
                        "code": "1640181",
                        "name": "灵武市"
                    }
                ]
            },
            {
                "code": "16402",
                "name": "石嘴山市",
                "children": [
                    {
                        "code": "1640202",
                        "name": "大武口区"
                    },
                    {
                        "code": "1640205",
                        "name": "惠农区"
                    },
                    {
                        "code": "1640221",
                        "name": "平罗县"
                    }
                ]
            },
            {
                "code": "16403",
                "name": "吴忠市",
                "children": [
                    {
                        "code": "1640302",
                        "name": "利通区"
                    },
                    {
                        "code": "1640303",
                        "name": "红寺堡区"
                    },
                    {
                        "code": "1640323",
                        "name": "盐池县"
                    },
                    {
                        "code": "1640324",
                        "name": "同心县"
                    },
                    {
                        "code": "1640381",
                        "name": "青铜峡市"
                    }
                ]
            },
            {
                "code": "16404",
                "name": "固原市",
                "children": [
                    {
                        "code": "1640402",
                        "name": "原州区"
                    },
                    {
                        "code": "1640422",
                        "name": "西吉县"
                    },
                    {
                        "code": "1640423",
                        "name": "隆德县"
                    },
                    {
                        "code": "1640424",
                        "name": "泾源县"
                    },
                    {
                        "code": "1640425",
                        "name": "彭阳县"
                    }
                ]
            },
            {
                "code": "16405",
                "name": "中卫市",
                "children": [
                    {
                        "code": "1640502",
                        "name": "沙坡头区"
                    },
                    {
                        "code": "1640521",
                        "name": "中宁县"
                    },
                    {
                        "code": "1640522",
                        "name": "海原县"
                    }
                ]
            }
        ]
    },
    {
        "code": "165",
        "name": "新疆维吾尔自治区",
        "children": [
            {
                "code": "16501",
                "name": "乌鲁木齐市",
                "children": [
                    {
                        "code": "1650102",
                        "name": "天山区"
                    },
                    {
                        "code": "1650103",
                        "name": "沙依巴克区"
                    },
                    {
                        "code": "1650104",
                        "name": "新市区"
                    },
                    {
                        "code": "1650105",
                        "name": "水磨沟区"
                    },
                    {
                        "code": "1650106",
                        "name": "头屯河区"
                    },
                    {
                        "code": "1650107",
                        "name": "达坂城区"
                    },
                    {
                        "code": "1650109",
                        "name": "米东区"
                    },
                    {
                        "code": "1650121",
                        "name": "乌鲁木齐县"
                    }
                ]
            },
            {
                "code": "16502",
                "name": "克拉玛依市",
                "children": [
                    {
                        "code": "1650202",
                        "name": "独山子区"
                    },
                    {
                        "code": "1650203",
                        "name": "克拉玛依区"
                    },
                    {
                        "code": "1650204",
                        "name": "白碱滩区"
                    },
                    {
                        "code": "1650205",
                        "name": "乌尔禾区"
                    }
                ]
            },
            {
                "code": "16504",
                "name": "吐鲁番市",
                "children": [
                    {
                        "code": "1650402",
                        "name": "高昌区"
                    },
                    {
                        "code": "1650421",
                        "name": "鄯善县"
                    },
                    {
                        "code": "1650422",
                        "name": "托克逊县"
                    }
                ]
            },
            {
                "code": "16522",
                "name": "哈密地区",
                "children": [
                    {
                        "code": "1652201",
                        "name": "哈密市"
                    },
                    {
                        "code": "1652222",
                        "name": "巴里坤哈萨克自治县"
                    },
                    {
                        "code": "1652223",
                        "name": "伊吾县"
                    }
                ]
            },
            {
                "code": "16523",
                "name": "昌吉回族自治州",
                "children": [
                    {
                        "code": "1652301",
                        "name": "昌吉市"
                    },
                    {
                        "code": "1652302",
                        "name": "阜康市"
                    },
                    {
                        "code": "1652323",
                        "name": "呼图壁县"
                    },
                    {
                        "code": "1652324",
                        "name": "玛纳斯县"
                    },
                    {
                        "code": "1652325",
                        "name": "奇台县"
                    },
                    {
                        "code": "1652327",
                        "name": "吉木萨尔县"
                    },
                    {
                        "code": "1652328",
                        "name": "木垒哈萨克自治县"
                    }
                ]
            },
            {
                "code": "16527",
                "name": "博尔塔拉蒙古自治州",
                "children": [
                    {
                        "code": "1652701",
                        "name": "博乐市"
                    },
                    {
                        "code": "1652702",
                        "name": "阿拉山口市"
                    },
                    {
                        "code": "1652722",
                        "name": "精河县"
                    },
                    {
                        "code": "1652723",
                        "name": "温泉县"
                    }
                ]
            },
            {
                "code": "16528",
                "name": "巴音郭楞蒙古自治州",
                "children": [
                    {
                        "code": "1652801",
                        "name": "库尔勒市"
                    },
                    {
                        "code": "1652822",
                        "name": "轮台县"
                    },
                    {
                        "code": "1652823",
                        "name": "尉犁县"
                    },
                    {
                        "code": "1652824",
                        "name": "若羌县"
                    },
                    {
                        "code": "1652825",
                        "name": "且末县"
                    },
                    {
                        "code": "1652826",
                        "name": "焉耆回族自治县"
                    },
                    {
                        "code": "1652827",
                        "name": "和静县"
                    },
                    {
                        "code": "1652828",
                        "name": "和硕县"
                    },
                    {
                        "code": "1652829",
                        "name": "博湖县"
                    }
                ]
            },
            {
                "code": "16529",
                "name": "阿克苏地区",
                "children": [
                    {
                        "code": "1652901",
                        "name": "阿克苏市"
                    },
                    {
                        "code": "1652922",
                        "name": "温宿县"
                    },
                    {
                        "code": "1652923",
                        "name": "库车县"
                    },
                    {
                        "code": "1652924",
                        "name": "沙雅县"
                    },
                    {
                        "code": "1652925",
                        "name": "新和县"
                    },
                    {
                        "code": "1652926",
                        "name": "拜城县"
                    },
                    {
                        "code": "1652927",
                        "name": "乌什县"
                    },
                    {
                        "code": "1652928",
                        "name": "阿瓦提县"
                    },
                    {
                        "code": "1652929",
                        "name": "柯坪县"
                    }
                ]
            },
            {
                "code": "16530",
                "name": "克孜勒苏柯尔克孜自治州",
                "children": [
                    {
                        "code": "1653001",
                        "name": "阿图什市"
                    },
                    {
                        "code": "1653022",
                        "name": "阿克陶县"
                    },
                    {
                        "code": "1653023",
                        "name": "阿合奇县"
                    },
                    {
                        "code": "1653024",
                        "name": "乌恰县"
                    }
                ]
            },
            {
                "code": "16531",
                "name": "喀什地区",
                "children": [
                    {
                        "code": "1653101",
                        "name": "喀什市"
                    },
                    {
                        "code": "1653121",
                        "name": "疏附县"
                    },
                    {
                        "code": "1653122",
                        "name": "疏勒县"
                    },
                    {
                        "code": "1653123",
                        "name": "英吉沙县"
                    },
                    {
                        "code": "1653124",
                        "name": "泽普县"
                    },
                    {
                        "code": "1653125",
                        "name": "莎车县"
                    },
                    {
                        "code": "1653126",
                        "name": "叶城县"
                    },
                    {
                        "code": "1653127",
                        "name": "麦盖提县"
                    },
                    {
                        "code": "1653128",
                        "name": "岳普湖县"
                    },
                    {
                        "code": "1653129",
                        "name": "伽师县"
                    },
                    {
                        "code": "1653130",
                        "name": "巴楚县"
                    },
                    {
                        "code": "1653131",
                        "name": "塔什库尔干塔吉克自治县"
                    }
                ]
            },
            {
                "code": "16532",
                "name": "和田地区",
                "children": [
                    {
                        "code": "1653201",
                        "name": "和田市"
                    },
                    {
                        "code": "1653221",
                        "name": "和田县"
                    },
                    {
                        "code": "1653222",
                        "name": "墨玉县"
                    },
                    {
                        "code": "1653223",
                        "name": "皮山县"
                    },
                    {
                        "code": "1653224",
                        "name": "洛浦县"
                    },
                    {
                        "code": "1653225",
                        "name": "策勒县"
                    },
                    {
                        "code": "1653226",
                        "name": "于田县"
                    },
                    {
                        "code": "1653227",
                        "name": "民丰县"
                    }
                ]
            },
            {
                "code": "16540",
                "name": "伊犁哈萨克自治州",
                "children": [
                    {
                        "code": "1654002",
                        "name": "伊宁市"
                    },
                    {
                        "code": "1654003",
                        "name": "奎屯市"
                    },
                    {
                        "code": "1654004",
                        "name": "霍尔果斯市"
                    },
                    {
                        "code": "1654021",
                        "name": "伊宁县"
                    },
                    {
                        "code": "1654022",
                        "name": "察布查尔锡伯自治县"
                    },
                    {
                        "code": "1654023",
                        "name": "霍城县"
                    },
                    {
                        "code": "1654024",
                        "name": "巩留县"
                    },
                    {
                        "code": "1654025",
                        "name": "新源县"
                    },
                    {
                        "code": "1654026",
                        "name": "昭苏县"
                    },
                    {
                        "code": "1654027",
                        "name": "特克斯县"
                    },
                    {
                        "code": "1654028",
                        "name": "尼勒克县"
                    }
                ]
            },
            {
                "code": "16542",
                "name": "塔城地区",
                "children": [
                    {
                        "code": "1654201",
                        "name": "塔城市"
                    },
                    {
                        "code": "1654202",
                        "name": "乌苏市"
                    },
                    {
                        "code": "1654221",
                        "name": "额敏县"
                    },
                    {
                        "code": "1654223",
                        "name": "沙湾县"
                    },
                    {
                        "code": "1654224",
                        "name": "托里县"
                    },
                    {
                        "code": "1654225",
                        "name": "裕民县"
                    },
                    {
                        "code": "1654226",
                        "name": "和布克赛尔蒙古自治县"
                    }
                ]
            },
            {
                "code": "16543",
                "name": "阿勒泰地区",
                "children": [
                    {
                        "code": "1654301",
                        "name": "阿勒泰市"
                    },
                    {
                        "code": "1654321",
                        "name": "布尔津县"
                    },
                    {
                        "code": "1654322",
                        "name": "富蕴县"
                    },
                    {
                        "code": "1654323",
                        "name": "福海县"
                    },
                    {
                        "code": "1654324",
                        "name": "哈巴河县"
                    },
                    {
                        "code": "1654325",
                        "name": "青河县"
                    },
                    {
                        "code": "1654326",
                        "name": "吉木乃县"
                    }
                ]
            },
            {
                "code": "16590",
                "name": "自治区直辖县级行政区划",
                "children": [
                    {
                        "code": "1659001",
                        "name": "石河子市"
                    },
                    {
                        "code": "1659002",
                        "name": "阿拉尔市"
                    },
                    {
                        "code": "1659003",
                        "name": "图木舒克市"
                    },
                    {
                        "code": "1659004",
                        "name": "五家渠市"
                    },
                    {
                        "code": "1659005",
                        "name": "北屯市"
                    },
                    {
                        "code": "1659006",
                        "name": "铁门关市"
                    },
                    {
                        "code": "1659007",
                        "name": "双河市"
                    },
                    {
                        "code": "1659008",
                        "name": "可克达拉市"
                    }
                ]
            }
        ]
    },
    {
        "code": "933",
        "name": "香港特区",
        "children": [
            {
                "code": "93301",
                "name": "香港",
                "children": [
                    {
                        "code": "9330101",
                        "name": "中西区"
                    },
                    {
                        "code": "9330102",
                        "name": "东区"
                    },
                    {
                        "code": "9330103",
                        "name": "九龙城区"
                    },
                    {
                        "code": "9330104",
                        "name": "观塘区"
                    },
                    {
                        "code": "9330105",
                        "name": "南区"
                    },
                    {
                        "code": "9330106",
                        "name": "深水埗区"
                    },
                    {
                        "code": "9330107",
                        "name": "湾仔区"
                    },
                    {
                        "code": "9330108",
                        "name": "黄大仙区"
                    },
                    {
                        "code": "9330109",
                        "name": "油尖旺区"
                    },
                    {
                        "code": "9330110",
                        "name": "离岛区"
                    },
                    {
                        "code": "9330111",
                        "name": "葵青区"
                    },
                    {
                        "code": "9330112",
                        "name": "北区"
                    },
                    {
                        "code": "9330113",
                        "name": "西贡区"
                    },
                    {
                        "code": "9330114",
                        "name": "沙田区"
                    },
                    {
                        "code": "9330115",
                        "name": "屯门区"
                    },
                    {
                        "code": "9330116",
                        "name": "大浦区"
                    },
                    {
                        "code": "9330117",
                        "name": "荃湾区"
                    },
                    {
                        "code": "9330118",
                        "name": "元朗区"
                    }
                ]
            }
        ]
    },
    {
        "code": "934",
        "name": "澳门",
        "children": [
            {
                "code": "93401",
                "name": "澳门",
                "children": [
                    {
                        "code": "9340101",
                        "name": "澳门"
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=areas.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusPipe = (function () {
    function StatusPipe() {
    }
    StatusPipe.prototype.transform = function (value) {
        var result;
        switch (value) {
            case 'WAITAUDIT':
                result = '待审核';
                break;
            case 'WAITPAY':
                result = '待付款';
                break;
            case 'WAITRETURN':
                result = '待还款';
                break;
            case 'HASRETURN':
                result = '已还款';
                break;
            case 'HASLEND':
                result = '已借款';
                break;
            case 'WAITTHAW':
                result = '待解冻';
                break;
        }
        return result;
    };
    return StatusPipe;
}());
StatusPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'status'
    })
], StatusPipe);

//# sourceMappingURL=status.pipes.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColorPipe = (function () {
    function ColorPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ColorPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result;
        switch (value) {
            case 'WAITAUDIT':
                result = 'orange';
                break;
            case 'WAITPAY':
                result = 'red';
                break;
            case 'WAITRETURN':
                result = 'green';
                break;
            case 'HASRETURN':
                result = 'blue';
                break;
            case 'HASLEND':
                result = 'Gcolor';
                break;
            case 'WAITTHAW':
                result = 'grey';
                break;
        }
        return result;
    };
    return ColorPipe;
}());
ColorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'color',
    })
], ColorPipe);

//# sourceMappingURL=color.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value) {
        var result;
        if (typeof value == 'string') {
            result = value.split(' ')[0];
            return result;
        }
    };
    return TimePipe;
}());
TimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'time'
    })
], TimePipe);

//# sourceMappingURL=time.pipes.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SexPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var SexPipe = (function () {
    function SexPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SexPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result;
        switch (value) {
            case "NONE":
                result = "white";
                break;
            case "MAN":
                result = "energy";
                break;
            case "WOMAN":
                result = "womenColor";
                break;
            default:
                result = "white";
                break;
        }
        return result;
    };
    return SexPipe;
}());
SexPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sex',
    })
], SexPipe);

//# sourceMappingURL=sex.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerPipe = (function () {
    function CustomerPipe() {
    }
    CustomerPipe.prototype.transform = function (value) {
        var result;
        switch (value) {
            case 'COMPLETEPROJECT':
                result = '已完成项目客户';
                break;
            case 'PROJECTING':
                result = '现项目客户';
                break;
            case 'POTENTIAL':
                result = '潜在客户';
                break;
            case 'VIP':
                result = 'VIP客户';
                break;
            case 'OLD':
                result = '老客户';
                break;
            case 'COOPERATOR':
                result = '合作伙伴';
                break;
            case 'ORDINARY':
                result = '普通客户';
                break;
        }
        return result;
    };
    return CustomerPipe;
}());
CustomerPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'customer'
    })
], CustomerPipe);

//# sourceMappingURL=customer.pipes.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InternalAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ExternalAddress = (function () {
    function ExternalAddress(navCtrl, navParams, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.exterData = {};
        this.id = navParams.get('id');
        this.http.get("externalcontacts/v1/mobile/findByID/" + this.id, {}, 'CONTACT')
            .then(function (res) {
            _this.exterData = res.data;
        });
    }
    // openModal(characterNum) {
    //   let modal = this.modalCtrl.create('ModalContentPage', characterNum);
    //   modal.present();
    // }
    ExternalAddress.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: this.exterData.phone,
            buttons: [
                {
                    text: '呼叫',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ExternalAddress.prototype.itemOther = function (id) {
        this.navCtrl.push('ExternalOther', { id: id });
    };
    ExternalAddress.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ExternalAddress');
    };
    return ExternalAddress;
}());
ExternalAddress = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-external-address',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\external-address\external-address.html"*/'\n<ion-header>\n\n  <ion-navbar color="energy">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="contactInternal">\n  <div id="inter">\n    <div class="person-top">\n      <ion-avatar class="avatar-head">\n        <img src="assets/imgs/contact_pic.png">\n        <ion-icon name="my-avatar" color="{{exterData.sex | sex}}" class="person"></ion-icon>\n      </ion-avatar>\n      <h2>{{exterData.username}}</h2>\n      <p class="post">{{exterData.project}} <span>{{exterData.position}}</span></p>\n    </div>\n  </div>\n  <div id="infoList">\n    <ion-list>\n      <ion-item class="item-list"> \n        <span>电话</span>\n        <span>{{exterData.phone}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>邮箱</span>\n        <span>{{exterData.email}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>员工编号</span>\n        <span>{{exterData.number}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>单位</span>\n        <span>{{exterData.unit}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>主要负责</span>\n        <span>{{exterData.responsible}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>地区</span>\n        <span>{{exterData.area}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>填写人</span>\n        <span>{{exterData.writer}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>备注</span>\n        <span>{{exterData.remark}}</span>\n      </ion-item>\n      <ion-item (click)="itemOther(exterData.id)">\n        其他\n        <ion-icon name="my-arrow-right" md="md-my-arrow-right" color="lightprimary" clear item-right class="right-arraw"></ion-icon>\n      </ion-item>  \n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="bgColor" id="footer-btn">\n    <a ion-button class="email-btn" color="white">\n      <ion-icon name="mail" color="energy" class="mail"></ion-icon>\n      邮件\n    </a>\n    <a ion-button class="email-btn" color="white" (click)="showPrompt()">\n        <ion-icon name="call" color="green" class="mail"></ion-icon>\n      电话\n    </a>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\external-address\external-address.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], ExternalAddress);

//# sourceMappingURL=external-address.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InternalAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BusinessAddress = (function () {
    function BusinessAddress(navCtrl, navParams, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.businessData = {};
        this.id = navParams.get('id');
        this.http.get("commercecontacts/v1/mobile/findByID/" + this.id, {}, 'CONTACT')
            .then(function (res) {
            _this.businessData = res.data;
        });
    }
    BusinessAddress.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: this.businessData.tel,
            buttons: [
                {
                    text: '呼叫',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    BusinessAddress.prototype.businessOther = function (id) {
        this.navCtrl.push('BusinessOther', { id: id });
    };
    BusinessAddress.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad BusinessAddress');
    };
    return BusinessAddress;
}());
BusinessAddress = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-business-address',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\business-address\business-address.html"*/'\n<ion-header>\n\n  <ion-navbar color="energy">\n    <ion-buttons end>\n      <button ion-button>\n        VIP\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="contactInternal">\n  <div id="inter">\n    <div class="person-top">\n      <ion-avatar class="avatar-head">\n        <img src="assets/imgs/contact_pic.png">\n        <ion-icon name="my-avatar" color="{{businessData.sex | sex}}" class="person"></ion-icon>\n      </ion-avatar>\n      <h2>{{businessData.customerName}}</h2>\n      <p class="post">{{businessData.customerLevelName}} <span>{{businessData.customerStatus | customer}}</span></p>\n    </div>\n  </div>\n  <div id="infoList">\n    <ion-list>\n      <ion-item class="item-list"> \n        <span>电话</span>\n        <span>{{businessData.phone}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>邮箱</span>\n        <span>{{businessData.cusEmail}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>客户来源</span>\n        <span>{{businessData.origin}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>关系程度</span>\n        <span>{{businessData.relation}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>重要性级别</span>\n        <span>{{businessData.customerType | customer}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>地区</span>\n        <span>{{businessData.area}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>第一介绍人</span>\n        <span>{{businessData.introducer}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>备注</span>\n        <span>{{businessData.remark}}</span>\n      </ion-item>\n      <ion-item (click)="businessOther(businessData.id)">\n        其他\n        <ion-icon name="my-arrow-right" md="md-my-arrow-right" color="lightprimary" clear item-right class="right-arraw"></ion-icon>\n      </ion-item>  \n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="bgColor" id="footer-btn">\n    <a ion-button class="email-btn" color="white">\n      <ion-icon name="mail" color="energy" class="mail"></ion-icon>\n      邮件\n    </a>\n    <a ion-button class="email-btn" color="white" (click)="showPrompt()">\n        <ion-icon name="call" color="green" class="mail"></ion-icon>\n      电话\n    </a>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\business-address\business-address.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], BusinessAddress);

//# sourceMappingURL=business-address.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Welcome } from '../pages/welcome/welcome';

// import { ApplyreimbursementPage } from '../pages/applyreimbursement/applyreimbursement';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imports__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__imports__["a" /* COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_0__imports__["b" /* PIPES */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__imports__["a" /* COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_0__imports__["b" /* PIPES */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalData = (function () {
    function GlobalData() {
        //设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
        this._showLoading = true;
        //app更新进度.默认为0,在app升级过程中会改变
        this._updateProgress = -1;
    }
    Object.defineProperty(GlobalData.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "showLoading", {
        get: function () {
            return this._showLoading;
        },
        set: function (value) {
            this._showLoading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "updateProgress", {
        get: function () {
            return this._updateProgress;
        },
        set: function (value) {
            this._updateProgress = value;
        },
        enumerable: true,
        configurable: true
    });
    return GlobalData;
}());
GlobalData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GlobalData);

//# sourceMappingURL=GlobalData.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimbursementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReimbursementPage = (function () {
    function ReimbursementPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.show = false;
        this.index = 0;
        this.statusL = 'ALL'; //报销请求状态
        this.pageNum = 1; //分页
        this.items = [
            {
                value: '全部'
            },
            {
                value: '待分析'
            },
            {
                value: '待审核'
            },
            {
                value: '待核对'
            },
            {
                value: '已报销'
            },
            {
                value: '待解冻'
            }
        ];
        this.status = [
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-22',
                date: '2017-08-31',
                currentStatus: '待审核'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-23',
                date: '2017-08-31',
                currentStatus: '待分析'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-24',
                date: '2017-08-31',
                currentStatus: '待核对'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-25',
                date: '2017-08-31 10:00:00',
                currentStatus: '已报销'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-26',
                date: '2017-08-31',
                currentStatus: '待解冻'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-22',
                date: '2017-08-31',
                currentStatus: '待审核'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-23',
                date: '2017-08-31',
                currentStatus: '待分析'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-24',
                date: '2017-08-31',
                currentStatus: '待核对'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-25',
                date: '2017-08-31',
                currentStatus: '已报销'
            },
            {
                nameWipe: '王博文的报销',
                wipeTime: '报销发生时间：2017-08-26',
                date: '2017-08-31',
                currentStatus: '待解冻'
            }
        ];
        for (var i = 0; i < this.status.length; i++) {
            var currentColor = this.status[i].currentStatus;
            switch (currentColor) {
                case '待审核':
                    this.status[i].color = 'orange';
                    break;
                case '待分析':
                    this.status[i].color = 'danger';
                    break;
                case '待核对':
                    this.status[i].color = 'green';
                    break;
                case '已报销':
                    this.status[i].color = 'blue';
                    break;
                case '待解冻':
                    this.status[i].color = 'light';
                    break;
                case '无报销':
                    this.status[i].color = 'light';
                    break;
            }
        }
    }
    ReimbursementPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.statusButton = this.status;
        this.http.get('phoneReimburse/v1/listAll', { reimPhoneSelectStatus: this.statusL, page: this.pageNum })
            .then(function (res) {
            _this.status = res.data;
        });
    };
    ReimbursementPage.prototype.selectFilter = function (i, val) {
        this.show = !this.show;
        this.index = i;
        this.seleFont = val;
        if (val && val.trim() != '') {
            this.statusButton = this.status.filter(function (item) {
                if (val == '全部')
                    return item;
                if (item.currentStatus == val) {
                    return item;
                }
            });
        }
    };
    ReimbursementPage.prototype.apply = function () {
        this.navCtrl.push('ApplyreimbursementPage');
    };
    ReimbursementPage.prototype.toDetail = function (name) {
        this.navCtrl.push('ReimdetailsPage', { name: name });
    };
    return ReimbursementPage;
}());
ReimbursementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reimbursement',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reimbursement.html"*/'\n<ion-header> \n  <ion-navbar color="energy" no-border-bottom>\n    <ion-title id="title-pointer" (click)="show = !show">\n      {{seleFont || \'全部\'}}<ion-icon name="arrow-down" class="down-center"></ion-icon>\n    </ion-title> \n   <ion-buttons end>\n     <button ion-button class="apply" (click)="apply()">申请报销</button> \n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="reimbursement">\n  <div id="under-model" *ngIf="show"></div>\n  <div id="select-all" *ngIf="show">\n    <ion-list>\n      <ion-item *ngFor="let item of items; let i = index" [ngClass]="{\'active-child\':i == index}" (click)="selectFilter(i, item.value)">{{item.value}}</ion-item>\n    </ion-list>\n  </div>\n  <div id="status-list">\n    <ion-list>\n      <ion-item *ngFor="let statu of statusButton" (click)="toDetail(statu.currentStatus)">\n          <h3 class="title-name">{{statu.nameWipe}}</h3>\n          <p class="happen">{{statu.wipeTime}}</p>\n          <div class="time-date" item-right>\n              <p class="new-time">{{statu.date}}</p>\n              <button ion-button color="{{statu.color}}" round>{{statu.currentStatus}}</button>\n          </div>\n          \n      </ion-item>\n    </ion-list>\n  </div>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\reimbursement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], ReimbursementPage);

//# sourceMappingURL=reimbursement.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map