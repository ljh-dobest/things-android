webpackJsonp([13],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyborrowmoneyPageModule", function() { return ApplyborrowmoneyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applyborrowmoney__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { PROVIDERS } from '../../../app/imports';

var ApplyborrowmoneyPageModule = (function () {
    function ApplyborrowmoneyPageModule() {
    }
    return ApplyborrowmoneyPageModule;
}());
ApplyborrowmoneyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__applyborrowmoney__["a" /* ApplyborrowmoneyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__applyborrowmoney__["a" /* ApplyborrowmoneyPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__applyborrowmoney__["a" /* ApplyborrowmoneyPage */]
        ],
        providers: []
    })
], ApplyborrowmoneyPageModule);

//# sourceMappingURL=applyborrowmoney.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyborrowmoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //获取图片
var ApplyborrowmoneyPage = (function () {
    function ApplyborrowmoneyPage(navCtrl, navParams, http, alertCtrl, camera, geolocation, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.geolocation = geolocation;
        this.imagePicker = imagePicker;
        this.paramObj = {};
        this.lenderList = [];
        this.areaList = [];
        this.proNameList = [];
        this.proGroupList = [];
        this.firstList = []; //一级科目
        this.secondList = [];
        this.thirdList = [];
        this.explaisList = []; //说明
        this.Iamges = [
            {
                id: 1,
                url: 'assets/imgs/userImage1.png'
            },
            {
                id: 2,
                url: 'assets/imgs/userImage1.png'
            },
            {
                id: 3,
                url: 'assets/imgs/userImage2.png'
            }
        ];
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    ApplyborrowmoneyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get('id')) {
            this.http.get("phoneApplylend/v1/info/lend/" + this.navParams.get('id') + "/" + this.navParams.get('name'))
                .then(function (res) {
                _this.paramObj = res.data;
            });
        }
        else {
            this.http.get("applylend/v1/getAllUser")
                .then(function (res) {
                _this.lenderList = res.data;
            });
            this.http.get("phoneApplylend/v1/phone/getArea")
                .then(function (res) {
                _this.areaList = res.data;
            });
            this.http.get("reimburserecord/v1/listThirdSubject")
                .then(function (res) {
                _this.thirdList = res.data;
            });
        }
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            console.log("经度：" + resp.coords.latitude + ',' + '纬度：' + resp.coords.longitude);
            var confirm = _this.alertCtrl.create({
                title: '消息提示',
                message: "经度：" + resp.coords.latitude,
                buttons: [
                    {
                        text: '确认',
                        handler: function () {
                        }
                    }
                ]
            });
            confirm.present();
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
            var confirm = _this.alertCtrl.create({
                title: '消息提示',
                message: error,
                buttons: [
                    {
                        text: '确认',
                        handler: function () {
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    ApplyborrowmoneyPage.prototype.areaCh = function () {
        var _this = this;
        this.http.get("phoneApplylend/v1/phone/getPGroupList", { area: this.paramObj.area })
            .then(function (res) {
            _this.proGroupList = res.data;
        });
    };
    ApplyborrowmoneyPage.prototype.proFn = function () {
        var _this = this;
        this.http.get("phoneApplylend/v1/phone/getPNameList", { area: this.paramObj.area, projectGroup: this.paramObj.projectGroup })
            .then(function (res) {
            _this.proNameList = res.data;
        });
    };
    ApplyborrowmoneyPage.prototype.thirdFn = function (val) {
        var _this = this;
        if (val) {
            this.http.get("reimburserecord/v1/listPlains", { thirdSubject: val })
                .then(function (res) {
                _this.explaisList = res.data;
            });
        }
    };
    ApplyborrowmoneyPage.prototype.explainFn = function (val, val1) {
        var _this = this;
        if (val) {
            this.http.get("phoneApplylend/v1/listSecond", { thirdSubject: val, plainInfo: val1 })
                .then(function (res) {
                _this.secondList = res.data;
            });
            this.http.get("phoneApplylend/v1/listFirst", { thirdSubject: val, plainInfo: val1 })
                .then(function (res) {
                var data = res.data;
                for (var i = 0; i < data.length; i++) {
                    _this.firstList.push(data[i].firstSubjectBO.name);
                }
            });
        }
    };
    ApplyborrowmoneyPage.prototype.addImage = function () {
        var _this = this;
        var o = { id: this.Iamges.length, url: 'assets/imgs/userImage2.png' };
        // this.camera.getPicture(this.options).then((imageData) => {
        //   let base64Image = 'data:image/jpeg;base64,' + imageData;
        //   this.croSrc = 'data:image/png;base64,'+imageData;
        //   o.url = 'data:image/png;base64,'+imageData;
        //   this.Iamges.push(o);
        // });
        var opt = { maxImagesCount: 1, width: 100, height: 100, quality: 50 };
        this.imagePicker.getPictures(opt).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                o.url = 'data:image/png;base64,' + results[i];
                ;
                _this.Iamges.push(o);
            }
        });
    };
    ApplyborrowmoneyPage.prototype.delImage = function (val) {
        this.Iamges.splice(val, 1);
    };
    //提交
    ApplyborrowmoneyPage.prototype.submit = function () {
        var _this = this;
        if (this.navParams.get('id')) {
            this.http.put('phoneApplylend/v1/error', this.paramObj)
                .then(function (res) {
                var msg;
                if (res.code == 0) {
                    msg = '此次编辑成功!';
                }
                else {
                    msg = "\u7F16\u8F91\u5931\u8D25\uFF1A" + res.msg;
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
        }
        else {
            this.http.post('phoneApplylend/v1/add', this.paramObj)
                .then(function (res) {
                var msg;
                if (res.code == 0) {
                    msg = '此次申请借款成功!';
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
        }
    };
    return ApplyborrowmoneyPage;
}());
ApplyborrowmoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-applyborrowmoney',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\applyborrowmoney\applyborrowmoney.html"*/'\n<ion-header >\n\n  <ion-navbar color="energy" no-border-bottom>\n    <ion-title>申请借款</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="submit" (click)="submit()">\n        提交\n      </button>\n   </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content id="content">\n  <ion-list>\n    <ion-item>\n      <ion-label>预计借款时间</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" cancelText="取消" doneText="确认" max="2020-10-31" bindon-ngModel="paramObj.estimateLendDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label>借款人</ion-label>\n        <ion-select [(ngModel)]="paramObj.lender" okText="确认" cancelText="取消">\n          <ion-option *ngFor="let item of lenderList">{{ item }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>借款方式</ion-label>+\n        <ion-select [(ngModel)]="paramObj.lendWay" okText="确认" cancelText="取消">\n          <ion-option >现金</ion-option>\n          <ion-option >公司代购</ion-option>\n          <ion-option >转账</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>负责人</ion-label>\n        <ion-select [(ngModel)]="paramObj.charger" okText="确认" cancelText="取消">\n          <ion-option *ngFor="let item of lenderList">{{ item }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>地区</ion-label>\n        <ion-select [(ngModel)]="paramObj.area"okText="确认" cancelText="取消" (ngModelChange)="areaCh()">\n          <ion-option *ngFor="let item of areaList">{{ item }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>项目组</ion-label>\n        <ion-select [(ngModel)]="paramObj.projectGroup" okText="确认" cancelText="取消"(ngModelChange)="proFn()">\n          <ion-option *ngFor="let item of proGroupList">{{ item }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>项目名称</ion-label>\n        <ion-select [(ngModel)]="paramObj.projectName" okText="确认" cancelText="取消">\n          <ion-option *ngFor="let item of proNameList">{{ item }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>三级科目</ion-label>\n        <ion-select [(ngModel)]="paramObj.thirdSubject" okText="确认" cancelText="取消"(ngModelChange)="thirdFn(paramObj.thirdSubject)">\n          <<ion-option *ngFor="let item of thirdList">{{ item.thirdSubject }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>说明</ion-label>\n        <ion-select [(ngModel)]="paramObj.explains" okText="确认" cancelText="取消" (ngModelChange)="explainFn(paramObj.thirdSubject,paramObj.explains)">\n          <ion-option *ngFor="let item of explaisList">{{ item.remark }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>一级科目</ion-label>\n        <ion-select [(ngModel)]="paramObj.firstSubject" okText="确认" cancelText="取消">\n          <ion-option *ngFor="let item of firstList">{{ item }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>二级科目</ion-label>\n        <ion-select [(ngModel)]="paramObj.secondSubject" okText="确认" cancelText="取消">\n          <ion-option *ngFor="let item of secondList">{{ item.secondSubject }}</ion-option>\n        </ion-select>\n    </ion-item>\n    \n  </ion-list>\n  <ion-list>\n    <ion-item class="money">\n      <ion-label>借款金额</ion-label>\n      <ion-input type="text" item-right [(ngModel)]="paramObj.money" placeholder="请输入金额"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>补充说明<span class="selFont">(借款事由)</span></ion-label>\n      <ion-input type="text" [(ngModel)]="paramObj.lendReson" item-right placeholder="请输入补充说明"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>参与人<span class="selFont">(选填)</span></ion-label>\n      <ion-input type="text" [(ngModel)]="paramObj.attender" item-right placeholder="请输入参与人"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>商品链接<span class="selFont">(选填)</span></ion-label>\n      <ion-input type="text" [(ngModel)]="paramObj.goodsLink" item-right placeholder="请输入链接"></ion-input>\n    </ion-item>\n    <ion-item class="noBBottom">\n      上传凭证\n    </ion-item>\n    <img src="data:image/png;base64,{{croSrc}}" alt="">\n    <ion-item>\n      <div class="upload">\n        <span class="image" (click)="addImage()"><img class="img" src="assets/imgs/addImage.png"></span>\n        <span class="image" *ngFor="let item of Iamges;let i = index;"><img class="img" src="{{item.url}}"><i (click)="delImage(i)"><img src="assets/imgs/close.png"></i></span>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\borrowmanage\applyborrowmoney\applyborrowmoney.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */]])
], ApplyborrowmoneyPage);

//# sourceMappingURL=applyborrowmoney.js.map

/***/ })

});
//# sourceMappingURL=13.js.map