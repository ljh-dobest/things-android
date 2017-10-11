webpackJsonp([8],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowSendPageModule", function() { return BorrowSendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_send__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BorrowSendPageModule = (function () {
    function BorrowSendPageModule() {
    }
    return BorrowSendPageModule;
}());
BorrowSendPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_send__["a" /* BorrowSendPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__borrow_send__["a" /* BorrowSendPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_send__["a" /* BorrowSendPage */]
        ]
    })
], BorrowSendPageModule);

//# sourceMappingURL=borrow-send.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowSendPage; });
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



var BorrowSendPage = (function () {
    function BorrowSendPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.paramObj = {};
        this.paramObj.id = navParams.get('id');
    }
    BorrowSendPage.prototype.ionViewDidLoad = function () {
    };
    BorrowSendPage.prototype.ngOnInit = function () {
    };
    BorrowSendPage.prototype.confirm = function () {
        var _this = this;
        this.http.put('phoneApplylend/v1/send/edit', this.paramObj)
            .then(function (res) {
            var msg;
            if (res.code == 0) {
                msg = '此次寄件成功!';
            }
            else {
                msg = "\u5BC4\u4EF6\u5931\u8D25\uFF1A" + res.msg;
            }
            var confirm = _this.alertCtrl.create({
                title: '消息提示',
                message: msg,
                buttons: [
                    {
                        text: '确认',
                        handler: function () {
                            if (!res.msg) {
                                _this.navCtrl.push('BorrowReturnPage', { id: _this.navParams.get('id') });
                            }
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    return BorrowSendPage;
}());
BorrowSendPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-borrow-send',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-send\borrow-send.html"*/'<ion-header>\n\n  <ion-navbar  color="energy" no-border-bottom>\n    <ion-title class="toCenter">寄件</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="submit" (click)="confirm()">\n        确认\n      </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="content">\n  <ion-list>\n    <ion-item>\n        <ion-label>收件人</ion-label>\n        <ion-select cancelText="取消" okText="确定" [(ngModel)]="paramObj.sendRecevier" placeholder="现金" interface="action-sheet">\n          <ion-option >王博文</ion-option>\n          <ion-option >孟小宝</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>寄件时间</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="paramObj.sendDate" cancelText="取消" doneText="确认" max="2020-10-31"></ion-datetime>\n    </ion-item>\n    <ion-item class="money">\n      <ion-label>地区</ion-label>\n      <ion-select cancelText="取消" okText="确定" [(ngModel)]="paramObj.receiveArea" placeholder="现金" interface="action-sheet">\n          <ion-option >广州</ion-option>\n          <ion-option >深圳</ion-option>\n          <ion-option >湛江</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item  class="money">\n      <ion-label>详细地址</ion-label>\n      <ion-input type="text" item-right [(ngModel)]="paramObj.receiveAddr" placeholder="请输入详情地址"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>单据数量</ion-label>\n      <ion-input type="number" item-right [(ngModel)]="paramObj.documentQuantity"></ion-input>\n    </ion-item>\n    <ion-item class="noBBottom marginTop-10">\n      还款说明\n    </ion-item>\n    <ion-item>\n      <textarea [(ngModel)]="paramObj.sendCondition" placeholder="请输入备注" class="expl"></textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-send\borrow-send.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */]])
], BorrowSendPage);

//# sourceMappingURL=borrow-send.js.map

/***/ })

});
//# sourceMappingURL=8.js.map