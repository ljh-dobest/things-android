webpackJsonp([11],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowAuditopinonPageModule", function() { return BorrowAuditopinonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_auditopinon__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BorrowAuditopinonPageModule = (function () {
    function BorrowAuditopinonPageModule() {
    }
    return BorrowAuditopinonPageModule;
}());
BorrowAuditopinonPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_auditopinon__["a" /* BorrowAuditopinonPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__borrow_auditopinon__["a" /* BorrowAuditopinonPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_auditopinon__["a" /* BorrowAuditopinonPage */]
        ],
        providers: []
    })
], BorrowAuditopinonPageModule);

//# sourceMappingURL=borrow-auditopinon.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowAuditopinonPage; });
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



var BorrowAuditopinonPage = (function () {
    function BorrowAuditopinonPage(navCtrl, navParams, alertCtrl, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.radio = true;
        this.paramObj = { chargerPass: '是' };
        this.paramObj.id = navParams.get('id');
    }
    BorrowAuditopinonPage.prototype.ionViewDidLoad = function () {
    };
    BorrowAuditopinonPage.prototype.confirm = function () {
        var _this = this;
        this.paramObj.chargerPass = this.paramObj.chargerPass ? '是' : '否';
        this.http.put('phoneApplylend/v1/waitPay/allAudit', this.paramObj)
            .then(function (res) {
            var msg;
            if (res.code == 0) {
                msg = '此次审核成功!';
            }
            else {
                msg = "\u5BA1\u6838\u5931\u8D25\uFF1A" + res.msg;
            }
            var confirm = _this.alertCtrl.create({
                title: '消息提示',
                message: msg,
                buttons: [
                    {
                        text: '确认',
                        handler: function () {
                            if (!res.msg) {
                                _this.navCtrl.push('BorrowManagePage', { tab: true });
                            }
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    BorrowAuditopinonPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ a: 'AllenWei' });
    };
    return BorrowAuditopinonPage;
}());
BorrowAuditopinonPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-borrow-auditopinon',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-auditopinon\borrow-auditopinon.html"*/'<ion-header>\n\n  <ion-navbar  color="energy" no-border-bottom>\n    <ion-title class="toCenter">审核意见</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="submit" (click)="confirm()">\n        确认\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content id="content">\n  <ion-list>\n      <ion-item class="marginBot-10">\n        <ion-label>审核身份</ion-label>\n        <ion-select [(ngModel)]="paramObj.lendIndentityStatus">\n          <ion-option value="CHARGER">负责人</ion-option>\n          <ion-option value="FINACER">财务运营部</ion-option>\n          <ion-option value="MANAGER">总经办</ion-option>\n        </ion-select>\n    </ion-item>\n      <my-radio \n        buttonColor=\'#limegreen\' [(radio)]=\'paramObj.chargerPass\'>\n        </my-radio>\n      <ion-item class="marginTop-10">\n        审核原因<br><textarea [(ngModel)]="paramObj.chargerOpinion" placeholder="请输入原因" class="expl"></textarea>\n      </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-auditopinon\borrow-auditopinon.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], BorrowAuditopinonPage);

//# sourceMappingURL=borrow-auditopinon.js.map

/***/ })

});
//# sourceMappingURL=11.js.map