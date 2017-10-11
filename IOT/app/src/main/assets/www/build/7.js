webpackJsonp([7],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowManagePageModule", function() { return BorrowManagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrowmanage__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BorrowManagePageModule = (function () {
    function BorrowManagePageModule() {
    }
    return BorrowManagePageModule;
}());
BorrowManagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__borrowmanage__["a" /* BorrowManagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__borrowmanage__["a" /* BorrowManagePage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__borrowmanage__["a" /* BorrowManagePage */]
        ],
        providers: [],
    })
], BorrowManagePageModule);

//# sourceMappingURL=borrowmanage.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BorrowManagePage = (function () {
    function BorrowManagePage(navCtrl, navParams, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.show = false;
        this.index = 0;
        this.seleFont = '全部';
        this.statusL = 'ALL'; //请求参数
        this.pageNum = 1; //分页
        this.items = [
            {
                value: '全部',
                msg: 'ALL'
            },
            {
                value: '待审核',
                msg: 'WAITAUDIT'
            },
            {
                value: '待付款',
                msg: 'WAITPAY'
            },
            {
                value: '已借款',
                msg: 'HASLEND'
            },
            {
                value: '待还款',
                msg: 'WAITRETURN'
            },
            {
                value: '已还款',
                msg: 'HASRETURN'
            },
            {
                value: '待解冻',
                msg: 'WAITTHAW'
            }
        ];
        this.hideBtn = true; //控制 上拉加载 true 为显示
        this.tab = navParams.get('tab');
    }
    BorrowManagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('phoneApplylend/v1/listAll', { lendPhoneSelectStatus: this.statusL, page: this.pageNum })
            .then(function (res) {
            _this.statusList = res.data;
        });
        if (this.tab) {
            this.viewCtrl.showBackButton(false);
        }
    };
    BorrowManagePage.prototype.selectFilter = function (val, title) {
        var _this = this;
        this.show = !this.show;
        this.statusL = val; //选择的文字对应的英文参数
        this.seleFont = title; //选择的文字
        this.statusList = [];
        if (val) {
            this.pageNum = 1;
            this.http.get('phoneApplylend/v1/listAll', { lendPhoneSelectStatus: val, page: 1 })
                .then(function (res) {
                if (res.data) {
                    _this.statusList = res.data;
                    _this.hideBtn = true; //释放上拉加载功能
                    _this.content.scrollTo(0, 0, 0); //控制滚动到最顶端
                }
            });
        }
    };
    BorrowManagePage.prototype.toPage = function () {
        this.navCtrl.push('ApplyborrowmoneyPage');
    };
    BorrowManagePage.prototype.goDetail = function (value, id) {
        var name;
        switch (value) {
            case '全部':
                name = 'ALL';
                break;
            case 'WAITAUDIT':
                name = 'WAITAUDIT';
                break;
            case 'WAITPAY':
                name = 'WAITPAY';
                break;
            case 'WAITRETURN':
                name = 'WAITRETURNCHECK';
                break;
            case 'HASRETURN':
                name = 'RETURNCHECK';
                break;
            case 'HASLEND':
                name = 'SURERECEIVE';
                break;
            case 'WAITTHAW':
                name = 'WAITTHAW';
                break;
        }
        this.navCtrl.push('BorrowDetailPage', { value: value, name: name, id: id });
    };
    BorrowManagePage.prototype.dismiss = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* Welcome */]);
    };
    //下拉刷新
    BorrowManagePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0, len = 5, value = void 0; i < len; i++) {
                var o = {
                    nameWipe: '王博文的借款',
                    wipeTime: '借款发生时间：2017-08-23',
                    date: '2017-08-31',
                    currentStatus: '待付款'
                };
                _this.statusList.unshift(o);
            }
            refresher.complete();
        }, 2000);
    };
    //上拉加载
    BorrowManagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.pageNum++;
            _this.http.get('phoneApplylend/v1/listAll', { lendPhoneSelectStatus: _this.statusL, page: _this.pageNum })
                .then(function (res) {
                var data = res.data;
                if (res.code == 0) {
                    if (res.data) {
                        for (var i = 0, len = data.length, val = void 0; i < len; i++) {
                            val = data[i];
                            _this.statusList.push(val);
                        }
                    }
                    else {
                        _this.hideBtn = false;
                    }
                }
                infiniteScroll.complete();
            });
            //infiniteScroll.enable(value) value = false 停止下拉操作
        }, 500);
    };
    return BorrowManagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
], BorrowManagePage.prototype, "content", void 0);
BorrowManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-borrowmanage',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrowmanage.html"*/'<ion-header>\n\n  <ion-navbar color="energy" no-border-bottom>\n    <ion-title id="title-pointer" (click)="show = !show" [ngClass]="{\'backActive\':tab}">\n        {{seleFont || \'全部\'}}<ion-icon name="arrow-down" class="down-center"></ion-icon>\n    </ion-title>\n    <my-back text="返回首页" *ngIf="tab" (click)="dismiss()"></my-back>\n   <ion-buttons end>\n      <button ion-button icon-only class="apply" (click)="toPage()">\n        申请借款\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content id="borrowManage-c">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content  loadingText="Loading more data..."></ion-refresher-content>\n  </ion-refresher>\n  <div id="under-model" *ngIf="show"></div>\n  <div id="select-all" *ngIf="show">\n    <ion-list>\n      <ion-item *ngFor="let item of items;let i = index"  [ngClass]="{\'active-child\':item.value == seleFont}" (click)="selectFilter(item.msg,item.value)">{{item.value}}</ion-item>\n    </ion-list>\n  </div>\n  <div id="status-list">\n    <ion-list>\n      <ion-item *ngFor="let statu of statusList" (click)="goDetail(statu.lendPhoneSelectStatus,statu.id)">\n          <h3 class="title-name">{{statu.lender}}</h3>\n          <p class="happen">{{statu.createTime | time}}</p>\n          <div class="time-date" item-right>\n              <p class="new-time">{{statu.commitTime | time }}</p>\n              <button ion-button color="{{statu.lendPhoneSelectStatus | color }}" round>{{statu.lendPhoneSelectStatus | status}}</button>\n          </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="200px" *ngIf=\'hideBtn\'>\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="加载中..."\n     >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\borrowmanage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__["a" /* ToastService */]])
], BorrowManagePage);

//# sourceMappingURL=borrowmanage.js.map

/***/ })

});
//# sourceMappingURL=7.js.map