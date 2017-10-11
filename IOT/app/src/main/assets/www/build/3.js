webpackJsonp([3],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessOtherModule", function() { return BusinessOtherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_other__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BusinessOtherModule = (function () {
    function BusinessOtherModule() {
    }
    return BusinessOtherModule;
}());
BusinessOtherModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__business_other__["a" /* BusinessOther */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__business_other__["a" /* BusinessOther */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__business_other__["a" /* BusinessOther */]
        ]
    })
], BusinessOtherModule);

//# sourceMappingURL=business-other.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessOther; });
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
var BusinessOther = (function () {
    function BusinessOther(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.businessData = {};
        this.id = navParams.get('id');
        this.http.get("commercecontacts/v1/mobile/findByID/" + this.id, {}, 'CONTACT')
            .then(function (res) {
            _this.businessData = res.data;
        });
    }
    BusinessOther.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad BusinessOther');
    };
    return BusinessOther;
}());
BusinessOther = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-business-other',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\business-address\business-other\business-other.html"*/'\n<ion-header>\n\n  <ion-navbar color="energy">\n    <ion-title>其他信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="otherInfo">\n  <div id="infoOther">\n    <ion-list>\n      <ion-item class="item-list"> \n        <span>岗位</span>\n        <span>{{businessData.workPosition}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>职权</span>\n        <span>{{businessData.workRight}}</span>\n      </ion-item> \n      <ion-item class="item-list"> \n        <span>职级</span>\n        <span>{{businessData.workLevel}}</span>\n      </ion-item> \n      <ion-item class="item-list"> \n        <span>微信</span>\n        <span>{{businessData.weChart}}</span>\n      </ion-item>\n      <ion-item class="item-list"> \n        <span>Q Q</span>\n        <span>{{businessData.qq}}</span>\n      </ion-item> \n      <ion-item class="item-list"> \n        <span>座机</span>\n        <span>{{businessData.phone}}</span>\n      </ion-item>    \n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\contacts\business-address\business-other\business-other.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], BusinessOther);

//# sourceMappingURL=business-other.js.map

/***/ })

});
//# sourceMappingURL=3.js.map