webpackJsonp([9],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowReturnPageModule", function() { return BorrowReturnPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_return__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BorrowReturnPageModule = (function () {
    function BorrowReturnPageModule() {
    }
    return BorrowReturnPageModule;
}());
BorrowReturnPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_return__["a" /* BorrowReturnPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__borrow_return__["a" /* BorrowReturnPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_return__["a" /* BorrowReturnPage */]
        ]
    })
], BorrowReturnPageModule);

//# sourceMappingURL=borrow-return.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowReturnPage; });
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



var BorrowReturnPage = (function () {
    function BorrowReturnPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.Iamges = [
            {
                id: 1,
                url: 'assets/imgs/userImage1.png'
            },
            {
                id: 2,
                url: 'assets/imgs/userImage2.png'
            }
        ];
        this.paramObj = {};
        this.paramObj.id = navParams.get('id');
    }
    BorrowReturnPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //获取来源
        this.http.get('applylend/v1/listAccountOrigin')
            .then(function (res) {
            if (res.code == 0) {
                _this.payList = res.data;
            }
        });
    };
    BorrowReturnPage.prototype.confirm = function () {
        var _this = this;
        this.http.put('phoneApplylend/v1/return/edit', this.paramObj)
            .then(function (res) {
            var msg;
            if (res.code == 0) {
                msg = '此次申请还款成功!';
            }
            else {
                msg = "\u501F\u6B3E\u5931\u8D25\uFF1A" + res.msg;
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
    BorrowReturnPage.prototype.addImage = function () {
        var o = { id: this.Iamges.length, url: 'assets/imgs/userImage2.png' };
        this.Iamges.push(o);
    };
    BorrowReturnPage.prototype.delImage = function (val) {
        this.Iamges.splice(val, 1);
    };
    BorrowReturnPage.prototype.send = function () {
        this.navCtrl.push('BorrowSendPage', { id: this.navParams.get('id') });
    };
    return BorrowReturnPage;
}());
BorrowReturnPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-borrow-return',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-return\borrow-return.html"*/'<ion-header>\n\n  <ion-navbar  color="energy" no-border-bottom>\n    <ion-title class="toCenter">还款</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="submit" (click)="confirm()">\n        确认\n      </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="content">\n  <ion-list>\n    <ion-item>\n        <ion-label>还款方式</ion-label>\n        <ion-select cancelText="取消" okText="确定" [(ngModel)]="paramObj.returnWays" placeholder="现金" interface="action-sheet">\n          <ion-option *ngFor="let item of payList">{{ item }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>还款时间</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="paramObj.returnDate" cancelText="取消" doneText="确认" max="2020-10-31"></ion-datetime>\n    </ion-item>\n    <ion-item class="money">\n      <ion-label>实际金额</ion-label>\n      <ion-input type="number" item-right [(ngModel)]="paramObj.reimMoney" placeholder="请输入金额"></ion-input>\n    </ion-item>\n    <ion-item  class="money">\n      <ion-label>退回金额</ion-label>\n      <ion-input type="number" item-right [(ngModel)]="paramObj.returnMoney" placeholder="请输入金额"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>是否有单据</ion-label>\n        <ion-select cancelText="取消" okText="确定" [(ngModel)]="paramObj.invoice" placeholder="是否有单据" interface="action-sheet">\n          <ion-option>是</ion-option>\n          <ion-option>否</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item class="noBBottom marginTop-10">\n      上传凭证\n    </ion-item>\n    <ion-item>\n      <div class="upload">\n        <span class="image"><img class="img" src="assets/imgs/addImage.png"></span>\n        <span class="image" *ngFor="let item of Iamges;let i = index;"><img class="img" src="{{item.url}}"><i (click)="delImage(i)"><img src="assets/imgs/close.png"></i></span>\n      </div>\n    </ion-item>\n    <ion-item class="noBBottom marginTop-10">\n      还款说明\n    </ion-item>\n    <ion-item>\n      <textarea placeholder="请输出说明" [(ngModel)]="paramObj.returnRemark" class="expl"></textarea>\n    </ion-item>\n    <ion-item class="marginTop-10" (click)="send()">\n        寄件\n        <ion-icon name="my-arrow-right" md="md-my-arrow-right" color="energy" clear item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-return\borrow-return.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], BorrowReturnPage);

//# sourceMappingURL=borrow-return.js.map

/***/ })

});
//# sourceMappingURL=9.js.map