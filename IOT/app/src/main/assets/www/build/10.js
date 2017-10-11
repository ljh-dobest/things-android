webpackJsonp([10],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowDetailPageModule", function() { return BorrowDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_detail__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BorrowDetailPageModule = (function () {
    function BorrowDetailPageModule() {
    }
    return BorrowDetailPageModule;
}());
BorrowDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_detail__["a" /* BorrowDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__borrow_detail__["a" /* BorrowDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__borrow_detail__["a" /* BorrowDetailPage */]
        ]
    })
], BorrowDetailPageModule);

//# sourceMappingURL=borrow-detail.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowDetailPage; });
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



var BorrowDetailPage = (function () {
    function BorrowDetailPage(navCtrl, navParams, modalCtrl, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.isAuditor = true; //是否为审核人员
        this.data = {};
        this.status = navParams.get('value');
        this.buttonStatus = navParams.get('name');
        this.id = navParams.get('id');
        switch (this.status) {
            case 'WAITAUDIT':
                this.statusColor = 'orange';
                this.buttonName = '去审核';
                break;
            case 'WAITPAY':
                this.statusColor = 'red';
                this.buttonName = '去付款';
                break;
            case 'WAITRETURN':
                this.statusColor = 'green';
                break;
            case 'HASRETURN':
                this.statusColor = 'blue';
                break;
            case 'HASLEND':
                this.statusColor = 'Gcolor';
                this.buttonName = '确认收款';
                break;
            case 'WAITTHAW':
                this.statusColor = 'grey';
                this.buttonName = '重新编辑提交';
                break;
        }
        this.http.get("phoneApplylend/v1/info/lend/" + this.id + "/" + this.buttonStatus)
            .then(function (res) {
            _this.data = res.data;
            if (_this.data.receivePay == '是') {
                if (_this.data.lendRetunStatus == 'WAITRETURNCHECK') {
                    _this.buttonName = "去核对";
                }
                else if (_this.data.lendRetunStatus == 'NONE') {
                    _this.buttonName = '去还款';
                }
            }
        });
    }
    BorrowDetailPage.prototype.ionViewDidLoad = function () {
    };
    BorrowDetailPage.prototype.buttonFn = function (status, lendStatus) {
        var _this = this;
        if (status == 'WAITRETURN') {
            if (lendStatus == 'WAITRETURNCHECK') {
                this.navCtrl.push('CheckReturnPage', { id: this.id });
            }
            else {
                this.navCtrl.push('BorrowReturnPage', { id: this.id });
            }
        }
        else if (status == 'WAITAUDIT') {
            this.navCtrl.push('BorrowAuditopinonPage', { id: this.id });
        }
        else if (status == 'WAITTHAW') {
            this.navCtrl.push('ApplyborrowmoneyPage', { id: this.id, name: 'EDITERROR' });
        }
        else if (status == 'WAITPAY') {
            this.navCtrl.push('Paymentss', { id: this.id });
        }
        else if (status == 'HASLEND') {
            var confirm_1 = this.alertCtrl.create({
                title: '消息提示',
                message: '你确认已收款？',
                buttons: [
                    {
                        text: '取消',
                        handler: function () {
                        }
                    },
                    {
                        text: '确认',
                        handler: function () {
                            _this.http.put("phoneApplylend/v1/editSureRecieve", { id: _this.id })
                                .then(function (res) {
                                if (res.code == 0) {
                                    _this.navCtrl.push('BorrowManagePage');
                                }
                            });
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    BorrowDetailPage.prototype.season = function (id) {
        this.navCtrl.push('AuditReasonPage', { id: id });
    };
    return BorrowDetailPage;
}());
BorrowDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-borrow-detail',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-detail\borrow-detail.html"*/'<ion-header>\n  <ion-navbar color="energy" no-border-bottom>\n    <ion-title class="toCenter">借款详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="content">\n    <ion-list>\n      <ion-item>\n          <h3 class="title-name">{{ data.lender }}</h3>\n          <p class="happen">提交时间: {{ data.createTime }}</p>\n          <div class="time-date" item-right>\n              <button ion-button color="{{statusColor}}" round>{{ status | status}}</button>\n          </div>\n      </ion-item>\n      <ion-item  class="no-bottom-border">\n        <p class="detail1">\n          <span>预计借款时间：</span><span>{{ data.estimateLendDate }}</span>\n        </p>\n        <p class="detail1">\n          <span>借款金额：</span><span>{{ data.money }}(元)</span>\n        </p>\n        <p class="detail1">\n          <span>借款方式：</span><span>{{ data.lendWay }}</span>\n        </p>\n        <p class="detail1">\n          <span>地区：</span><span>{{ data.area }}</span>\n        </p>\n        <p class="detail1">\n          <span>项目名称：</span><span>{{ data.projectName }}</span>\n        </p>\n        <p class="detail1">\n          <span>项目组：</span><span>{{ data.projectGroup }}</span>\n        </p>\n        <p class="detail1">\n          <span>负责人：</span><span>{{ data.charger }}</span>\n        </p>\n        <p class="detail1">\n          <span>一级科目：</span><span>{{ data.firstSubject }}</span>\n        </p>\n        <p class="detail1">\n          <span>二级科目：</span><span>{{ data.secondSubject }}</span>\n        </p>\n        <p class="detail1">\n          <span>三级科目：</span><span>{{ data.thirdSubject }}</span>\n        </p>\n        <p class="detail1">\n          <span>参与人：</span><span>{{ data.attender }}</span>\n        </p>\n        <p class="detail1">\n          <span>商品链接：</span><span>{{ data.goodsLink }}</span>\n        </p>\n        <p class="detail1">\n          <span>说明：</span><span>{{ data.explains }}</span>\n        </p>\n        <p class="detail1">\n          <span>补充说明：</span><span>{{ data.lendReson }}</span>\n        </p>\n        <p class="voucher">\n          <span>凭证：</span>\n          <span class="img">\n            <i><img src="assets/imgs/userImage1.png"></i>\n            <i><img src="assets/imgs/userImage2.png"></i>\n            <i><img src="assets/imgs/userImage1.png"></i>\n            <i><img src="assets/imgs/userImage2.png"></i>\n          </span>\n        </p>\n      </ion-item>\n      <ion-item  class="no-bottom-border" *ngIf="data.lendRetunStatus == \'WAITRETURNCHECK\'">\n        <p class="detail1">\n          <span>还款方式：</span><span>{{data.returnWays}}</span>\n        </p>\n        <p class="detail1">\n          <span>还款时间：</span><span>{{data.returnDate}}</span>\n        </p>\n        <p class="detail1">\n          <span>实际用款：</span><span>{{data.reimMoney}}(元)</span>\n        </p>\n        <p class="detail1">\n          <span>退回金额：</span><span>{{data.returnMoney}}(元)</span>\n        </p>\n        <p class="detail1">\n          <span>还款说明：</span><span>{{data.returnRemark}}</span>\n        </p>\n        <p class="voucher">\n          <span>凭证：</span>\n          <span class="img">\n            <i><img src="assets/imgs/userImage1.png"></i>\n            <i><img src="assets/imgs/userImage2.png"></i>\n          </span>\n        </p>\n        <p class="detail1">\n          <span>收件人：</span><span>{{data.sendRecevier}}</span>\n        </p>\n        <p class="detail1">\n          <span>寄件时间：</span><span>{{data.sendDate}}</span>\n        </p>\n        <p class="detail1">\n          <span>地址：</span><span>{{data.receiveAddr}}</span>\n        </p>\n        <p class="detail1">\n          <span>寄件备注：</span><span>{{data.sendCondition}}</span>\n        </p>\n      </ion-item>\n    </ion-list>\n    <ion-list class="paddingBot-20">\n      <ion-item class="no-bottom-border no-top-border" (click)="season(data.id)" *ngIf="status !== \'WAITAUDIT\'">\n          审核过程/原因\n          <ion-icon name="my-arrow-right" md="md-my-arrow-right" color="lightprimary" clear item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n      <button ion-button icon-only color="{{status==\'WAITTHAW\'?\'orangel\':\'red\'}}" full class="pay" *ngIf="data.phoneShowRight" (click)="buttonFn(status,data.lendRetunStatus)">\n        {{buttonName || \'待定\'}}\n      </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrow-detail\borrow-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], BorrowDetailPage);

//# sourceMappingURL=borrow-detail.js.map

/***/ })

});
//# sourceMappingURL=10.js.map