webpackJsonp([4],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(358);
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
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Paymentss */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Paymentss */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Paymentss */]
        ]
    })
], PaymentModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paymentss; });
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



var Paymentss = (function () {
    function Paymentss(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.paramObj = { id: '1' };
        this.paramObj.id = navParams.get('id');
    }
    Paymentss.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('applylend/v1/listAccountOrigin')
            .then(function (res) {
            if (res.code == 0) {
                _this.payList = res.data;
            }
        });
    };
    Paymentss.prototype.successAlert = function () {
        var _this = this;
        var msg;
        this.http.put('phoneApplylend/v1/editPay', this.paramObj)
            .then(function (res) {
            if (res.code == 0) {
                msg = '付款成功';
            }
            else {
                msg = '付款失败';
            }
            var confirm = _this.alertCtrl.create({
                title: '消息提示',
                message: msg,
                buttons: [
                    {
                        text: '确认',
                        handler: function () {
                            if (!res.msg)
                                _this.navCtrl.push('BorrowManagePage', { tab: true });
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    return Paymentss;
}());
Paymentss = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\payment\payment.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="energy" >\n\n    <ion-title>付款</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="successAlert()" class="sure">确认</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content id="post">\n\n  <ion-list>\n\n    <ion-item class="marginBot-10">\n\n      <ion-label>借款时间</ion-label>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" cancelText="取消" doneText="确认" max="2020-10-31" bindon-ngModel="paramObj.payDate"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>付款方式</ion-label>\n\n        <ion-select [(ngModel)]="payWay" interface="popover" [(ngModel)]="paramObj.payOrigin">\n\n          <ion-option *ngFor="let item of payList">{{ item }}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], Paymentss);

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=4.js.map