webpackJsonp([0],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyreimbursementPageModule", function() { return ApplyreimbursementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applyreimbursement__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyreimbursementPageModule = (function () {
    function ApplyreimbursementPageModule() {
    }
    return ApplyreimbursementPageModule;
}());
ApplyreimbursementPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__applyreimbursement__["a" /* ApplyreimbursementPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__applyreimbursement__["a" /* ApplyreimbursementPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__applyreimbursement__["a" /* ApplyreimbursementPage */]
        ]
    })
], ApplyreimbursementPageModule);

//# sourceMappingURL=applyreimbursement.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyreimbursementPage; });
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


var ApplyreimbursementPage = (function () {
    function ApplyreimbursementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fixed1 = '2017-08-22';
        this.person = "王博文";
        this.principal = "胡歌";
        this.area = "广州";
        this.projectName = "1461项目规划";
        this.subjects = "人员租赁";
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
        this.todo = {
            description: "例如:交代清楚报销事由"
        };
    }
    ApplyreimbursementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyreimbursementPage');
    };
    ApplyreimbursementPage.prototype.logForm = function (form) {
        console.log(form.value);
    };
    ApplyreimbursementPage.prototype.submit = function () {
        this.navCtrl.push('ReimbursementPage');
    };
    ApplyreimbursementPage.prototype.addImage = function () {
        var o = { id: this.Iamges.length, url: 'assets/imgs/userImage2.png' };
        this.Iamges.push(o);
    };
    ApplyreimbursementPage.prototype.delImage = function (val) {
        this.Iamges.splice(val, 1);
    };
    return ApplyreimbursementPage;
}());
ApplyreimbursementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-applyreimbursement',template:/*ion-inline-start:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\applyreimbursement\applyreimbursement.html"*/'\n<ion-header>\n  <ion-navbar color="energy">\n    <ion-title>申请报销</ion-title>\n    <ion-buttons end class="commit">\n        <button ion-button (click)="submit()">提交</button> \n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="apply">\n  <div id="select">\n      <ion-list>\n        <ion-item>\n          <ion-label>报销发生的时间</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="fixed1" cancelText="取消" doneText="确定"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>报销人</ion-label>\n          <ion-select [(ngModel)]="person" interface="popover">\n            <ion-option value="胡歌">胡歌</ion-option>\n            <ion-option value="王博文">王博文</ion-option>\n            <ion-option value="黄焕来">黄焕来</ion-option>\n            <ion-option value="黎贵钦">黎贵钦</ion-option>\n            <ion-option value="黄迪娜">黄迪娜</ion-option>\n            <ion-option value="胡程威">胡程威</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>负责人</ion-label>\n          <ion-select [(ngModel)]="principal" interface="popover">\n            <ion-option value="胡歌">胡歌</ion-option>\n            <ion-option value="王博文">王博文</ion-option>\n            <ion-option value="黄焕来">黄焕来</ion-option>\n            <ion-option value="黎贵钦">黎贵钦</ion-option>\n            <ion-option value="黄迪娜">黄迪娜</ion-option>\n            <ion-option value="胡程威">胡程威</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>地区</ion-label>\n          <ion-select [(ngModel)]="area" okText="确定" cancelText="取消">\n            <ion-option value="北京">北京</ion-option>\n            <ion-option value="深圳">深圳</ion-option>\n            <ion-option value="广州">广州</ion-option>\n            <ion-option value="湛江">湛江</ion-option>\n            <ion-option value="江门">江门</ion-option>\n            <ion-option value="佛山">佛山</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>项目名称</ion-label>\n          <ion-select [(ngModel)]="projectName" okText="确定" cancelText="取消">\n            <ion-option value="1461项目规划">1461项目规划</ion-option>\n            <ion-option value="issp开发">issp开发</ion-option>\n            <ion-option value="组织结构">组织结构</ion-option>\n            <ion-option value="项目市场化">项目市场化</ion-option>\n            <ion-option value="业务市场化">业务市场化</ion-option>\n            <ion-option value="员工机会市场化">员工机会市场化</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>三级科目</ion-label>\n          <ion-select [(ngModel)]="subjects" interface="action-sheet" cancelText="取消">\n            <ion-option value="人员租赁">人员租赁</ion-option>\n            <ion-option value="手机端">手机端</ion-option>\n            <ion-option value="科技积分">科技积分</ion-option>\n            <ion-option value="事空间">事空间</ion-option>\n            <ion-option value="莲富大厦">莲富大厦</ion-option>\n            <ion-option value="分隔符">分隔符</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item id="noBottom">\n          <ion-label>报销当天人 <span id="optional">(选填)</span></ion-label>\n          <ion-select [(ngModel)]="person" interface="popover">\n            <ion-option value="胡歌">胡歌</ion-option>\n            <ion-option value="王博文">王博文</ion-option>\n            <ion-option value="黄焕来">黄焕来</ion-option>\n            <ion-option value="黎贵钦">黎贵钦</ion-option>\n            <ion-option value="黄迪娜">黄迪娜</ion-option>\n            <ion-option value="胡程威">胡程威</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <form #form="ngForm" (ngSubmit)="logForm(form)" novalidate>\n          <ion-item class="money">\n            <ion-label>报销金额</ion-label>\n            <ion-input type="text" placeholder="请输入金额" class="input-one"></ion-input>|\n            <!-- <ion-input type="number" placeholder="单据数量" item-right class="input-right"></ion-input> -->\n            <ion-input type="text" placeholder="单据数量" item-right class="input-right"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>参与人 <span id="optional">(选填)</span></ion-label>\n            <ion-input type="text" placeholder="请输入参与人" class="input-right"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>是否有发票</ion-label>\n            <div id="single">\n              <span class="radio-input">有</span>\n              <i class="radio-input">无</i>\n            </div>\n          </ion-item>\n          <ion-item>\n            <ion-label>无发票说明</ion-label>\n            <ion-input type="text" placeholder="请输入说明" class="input-right"></ion-input>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-label>上传凭证</ion-label>\n            <div id="upload"></div>\n          </ion-item> -->\n          <ion-item class="noBBottom">\n              上传凭证\n            </ion-item>\n            <ion-item>\n              <div class="upload">\n                <span class="image" (click)="addImage()"><img class="img" src="assets/imgs/addImage.png"></span>\n                <span class="image" *ngFor="let item of Iamges;let i = index;"><img class="img" src="{{item.url}}"><i (click)="delImage(i)"><img src="assets/imgs/close.png"></i></span>\n              </div>\n            </ion-item>\n          <ion-item id="item-explanation">\n            <ion-label>补充说明</ion-label>\n          </ion-item>\n          <ion-item id="noBottom">\n            <ion-textarea name="description" class="description" placeholder="例如:交代清楚报销事由"></ion-textarea>\n          </ion-item>\n      </form>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IKE\Desktop\ionic\issp-mobile-page-8\src\pages\reimbursement\applyreimbursement\applyreimbursement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ApplyreimbursementPage);

//# sourceMappingURL=applyreimbursement.js.map

/***/ })

});
//# sourceMappingURL=0.js.map