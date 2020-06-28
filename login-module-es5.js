(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/error.html":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/error.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\r\n  <div class=\"error-img\">\r\n\r\n  </div>\r\n</div>\r\n<h1 mat-dialog-title class=\"error-dialog\">Username or Password is <span class=\"red-color\">Incorrect!</span></h1>\r\n<div mat-dialog-actions>\r\n  <button  mat-raised-button mat-dialog-close color=\"primary\" class=\"error-btn\">Ok</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"left\">\n\n</div>\n<div class=\"right\">\n    <div class=\"logo\">\n\n    </div>\n  \n    <div class=\"login\">\n        <div class=\"header-login\">\n          \n            <h1>LOG<span>IN</span></h1>\n            <p>to access your account from here.......</p>\n        </div>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"login-control\">\n                      <mat-icon  aria-hidden=\"false\" [class.color-icon]=\"isFocus\" aria-label=\"Example home icon\">account_box</mat-icon>\n\n            <mat-form-field class=\"example-full-width\">\n                <mat-label class=\"my-invalid\">Enter UserName</mat-label>\n                <input matInput formControlName=\"username\" required (focus)=\"this.isFocus=true;\" (blur)=\"!this.isFocus=false;\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n              </mat-form-field>\n              <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback error-msg\">\n                <div *ngIf=\"f.username.errors.required\">*Username is required</div>\n            </div>\n        </div>\n        <div class=\"login-control\">\n                    <mat-icon  aria-hidden=\"false\" [class.color-icon]=\"isFocuss\" aria-label=\"Example home icon\">https</mat-icon>\n\n            <mat-form-field class=\"example-full-width\">\n                <mat-label class=\"my-invalid\">Enter Password</mat-label>\n                <input matInput type=\"password\" required formControlName=\"password\" (focus)=\"this.isFocuss=true;\" (blur)=\"this.isFocuss=false;\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" >\n            </mat-form-field>\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback error-msg\">\n                <div *ngIf=\"f.password.errors.required\">*Password is required</div>\n            </div>\n        </div>\n        <div class=\"login-control\">\n            <button mat-raised-button color=\"primary\" >LOGIN</button>\n        </div>\n        </form>\n        <p class=\"forgot-pass\">Forgot Password?</p>\n    </div>\n    <div class=\"footer\">\n        <p>All Rights Reserved &reg; SmartTrak Solar Systems</p>\n    </div>\n\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login.module.ts":
/*!*********************************!*\
  !*** ./src/app/login.module.ts ***!
  \*********************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");











var routes = [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    }];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["DialogElementsExampleDialog"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["DialogElementsExampleDialog"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container\r\n{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.container .left\r\n{\r\n    -webkit-box-flex:3;\r\n            flex:3;\r\n    background-image: url('bg-login.jpg');\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.container .right\r\n{\r\n     -webkit-box-flex: 1.7;\r\n             flex: 1.7;\r\n     background-color: #fff;\r\n     display: -webkit-box;\r\n     display: flex;\r\n     position: relative;\r\n     overflow: hidden;\r\n     -webkit-box-orient: vertical;\r\n     -webkit-box-direction: normal;\r\n             flex-direction: column;\r\n     -webkit-box-pack:justify;\r\n             justify-content:space-between;\r\n}\r\n.container .right::after{\r\n    content: '';\r\n    position: absolute;\r\n    height: 300px;\r\n    width: 400px;\r\n    -webkit-transform: rotateZ(45deg);\r\n            transform: rotateZ(45deg);\r\n    top:60px;\r\n    background: #6190E8;  /* fallback for old browsers */\r\n    background: -webkit-gradient(linear, right top, left top, from(#f2f6fd), to(#8eb5fd));\r\n    background: linear-gradient(to left, #f2f6fd, #8eb5fd); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    box-shadow:0px 0px 23px -12px rgba(0,0,0,0.75);\r\n    right: -200px;\r\n  \r\n}\r\n.container .right::before{\r\n    content: '';\r\n    position: absolute;\r\n    height: 300px;\r\n    width: 300px;\r\n    -webkit-transform: rotateZ(45deg);\r\n            transform: rotateZ(45deg);\r\n    bottom:-150px;\r\n    left: -150px;\r\n    border-radius:50%;\r\n   box-shadow: 0px 0px 23px -12px rgba(0,0,0,0.75);\r\n    background: #6190E8;  /* fallback for old browsers */\r\n    background: -webkit-gradient(linear, right top, left top, from(#f2f6fd), to(#8eb5fd));\r\n    background: linear-gradient(to left, #f2f6fd, #8eb5fd); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    \r\n}\r\n.container .right .logo\r\n{\r\n    height: 100px;\r\n    background-image: url('logo.png');\r\n    background-position: left top;\r\n    background-repeat: no-repeat;\r\n    background-size: 180px 100px;\r\n    z-index: 1;\r\n}\r\n.container .right .login\r\n{\r\n    padding: 0px 30px;\r\n    z-index: 1;\r\n}\r\n.container .right .login-control\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    position: relative;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n.container .right .login-control button\r\n{\r\ndisplay: block;\r\nwidth: 100%;\r\nheight: 48px;\r\nfont-size: 20px;\r\nmargin-top: 20px;\r\n}\r\nmat-form-field\r\n{\r\nwidth:100%;\r\n}\r\nmat-form-field mat-label\r\n{\r\n    font-size: 20px;\r\n}\r\n.container .right .footer p\r\n{\r\n    text-align: center;\r\n    margin: 4px 0px;\r\n    font-size: 15px;\r\n    letter-spacing:0.5px;\r\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\r\n      font-family: 'Open Sans', sans-serif;\r\n    font-weight:800;\r\n    color:#000000;\r\n}\r\n.container .right .footer{\r\n       z-index:1;\r\n}\r\n.header-login\r\n{\r\n    margin-bottom: 30px;\r\n}\r\n.header-login h1\r\n{\r\n    margin: 0px;\r\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\r\n    font-size: 50px;\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.header-login p{\r\n    margin: 0px;\r\n    color: #3f51b5;\r\n    font-weight: 800;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\r\n}\r\n.header-login h1 span{\r\n    color: #3f51b5;\r\n}\r\n.forgot-pass\r\n{\r\n    text-align: center;\r\n    margin: 30px 0px;\r\n    font-size: 16px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\r\n}\r\n.color-icon\r\n{\r\ncolor: #3f51b5!important;\r\n}\r\n.error-msg\r\n{\r\n    position: absolute;\r\n    bottom: -2px;\r\n    left: 0px;\r\n    color:red;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 700;\r\n}\r\n.error-dialog\r\n{\r\n    margin: 0px;\r\n}\r\n.error-btn\r\n{\r\n    padding: 4px 10px;\r\n    font-size: 18px;\r\n    margin: 0 auto;\r\n\r\n}\r\n.mat-form-field.mat-form-field-invalid .mat-form-field-label\r\n{\r\n    color: #ccc!important;\r\n}\r\n.red-color\r\n{\r\n    color:red;\r\n}\r\n.example-full-width\r\n{\r\n    margin-left:2px;\r\n}\r\n.error-box\r\n{\r\n    height: 60px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.error-box .error-img\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n    background-image: url('error.png');\r\n    background-position: center center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFNO1lBQU4sTUFBTTtJQUNOLHFDQUF1RDtJQUN2RCxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjtBQUNBOztLQUVLLHFCQUFTO2FBQVQsU0FBUztLQUNULHNCQUFzQjtLQUN0QixvQkFBYTtLQUFiLGFBQWE7S0FDYixrQkFBa0I7S0FDbEIsZ0JBQWdCO0tBQ2hCLDRCQUFzQjtLQUF0Qiw2QkFBc0I7YUFBdEIsc0JBQXNCO0tBQ3RCLHdCQUE2QjthQUE3Qiw2QkFBNkI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixtQkFBbUIsR0FBRyw4QkFBOEI7SUFDcEQscUZBQXNEO0lBQXRELHNEQUFzRCxFQUFFLHFFQUFxRTtJQUM3SCw4Q0FBOEM7SUFDOUMsYUFBYTs7QUFFakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0dBQ2xCLCtDQUErQztJQUM5QyxtQkFBbUIsR0FBRyw4QkFBOEI7SUFDcEQscUZBQXNEO0lBQXRELHNEQUFzRCxFQUFFLHFFQUFxRTs7QUFFakk7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsaUNBQW1EO0lBQ25ELDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBOztBQUVBLGNBQWM7QUFDZCxXQUFXO0FBQ1gsWUFBWTtBQUNaLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO01BQ2xCLDZDQUE2QztNQUM3QyxvQ0FBb0M7SUFDdEMsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtPQUNPLFNBQVM7QUFDaEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxXQUFXO0VBQ2IsNkNBQTZDO0lBQzNDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw2Q0FBNkM7QUFDakQ7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsNkNBQTZDO0FBQ2pEO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsU0FBUztJQUNULG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7O0FBRWxCO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksU0FBUztBQUNiO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBOztJQUVJLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtDQUFvRDtJQUNwRCxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250YWluZXIgLmxlZnRcclxue1xyXG4gICAgZmxleDozO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctbG9naW4uanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY29udGFpbmVyIC5yaWdodFxyXG57XHJcbiAgICAgZmxleDogMS43O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb250YWluZXIgLnJpZ2h0OjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgICB0b3A6NjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM2MTkwRTg7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2YyZjZmZCwgIzhlYjVmZCk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIGJveC1zaGFkb3c6MHB4IDBweCAyM3B4IC0xMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICByaWdodDogLTIwMHB4O1xyXG4gIFxyXG59XHJcbi5jb250YWluZXIgLnJpZ2h0OjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgYm90dG9tOi0xNTBweDtcclxuICAgIGxlZnQ6IC0xNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDIzcHggLTEycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJhY2tncm91bmQ6ICM2MTkwRTg7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2YyZjZmZCwgIzhlYjVmZCk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIFxyXG59XHJcbi5jb250YWluZXIgLnJpZ2h0IC5sb2dvXHJcbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4MHB4IDEwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uY29udGFpbmVyIC5yaWdodCAubG9naW5cclxue1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5jb250YWluZXIgLnJpZ2h0IC5sb2dpbi1jb250cm9sXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIgLnJpZ2h0IC5sb2dpbi1jb250cm9sIGJ1dHRvblxyXG57XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA0OHB4O1xyXG5mb250LXNpemU6IDIwcHg7XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxubWF0LWZvcm0tZmllbGRcclxue1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIG1hdC1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNvbnRhaW5lciAucmlnaHQgLmZvb3RlciBwXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOjAuNXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLmNvbnRhaW5lciAucmlnaHQgLmZvb3RlcntcclxuICAgICAgIHotaW5kZXg6MTtcclxufVxyXG4uaGVhZGVyLWxvZ2luXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmhlYWRlci1sb2dpbiBoMVxyXG57XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmhlYWRlci1sb2dpbiBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbn1cclxuLmhlYWRlci1sb2dpbiBoMSBzcGFue1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuLmZvcmdvdC1wYXNzXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbn1cclxuLmNvbG9yLWljb25cclxue1xyXG5jb2xvcjogIzNmNTFiNSFpbXBvcnRhbnQ7XHJcbn1cclxuLmVycm9yLW1zZ1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0ycHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5lcnJvci1kaWFsb2dcclxue1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmVycm9yLWJ0blxyXG57XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsXHJcbntcclxuICAgIGNvbG9yOiAjY2NjIWltcG9ydGFudDtcclxufVxyXG4ucmVkLWNvbG9yXHJcbntcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OjJweDtcclxufVxyXG4uZXJyb3ItYm94XHJcbntcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uZXJyb3ItYm94IC5lcnJvci1pbWdcclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9lcnJvci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, DialogElementsExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElementsExampleDialog", function() { return DialogElementsExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService, document, dialog) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.document = document;
        this.dialog = dialog;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isFocus = false;
        this.isFocuss = false;
        this.document.body.classList.add('login-body');
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        // this.router.navigate([this.returnUrl]);
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            var user = _this.authenticationService.currentUserValue;
            if (user.category == 'ttd') {
                _this.router.navigate(['layout']);
            }
            else {
                _this.router.navigate(['plant-view']);
            }
        }, function (error) {
            // added temporarily
            console.log('err', error);
            _this.alertService.error('username & password is incorrect');
            _this.loading = false;
            _this.dialog.open(DialogElementsExampleDialog);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]))
    ], LoginComponent);
    return LoginComponent;
}());

var DialogElementsExampleDialog = /** @class */ (function () {
    function DialogElementsExampleDialog() {
    }
    DialogElementsExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error',
            template: __webpack_require__(/*! raw-loader!./error.html */ "./node_modules/raw-loader/index.js!./src/app/login/error.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], DialogElementsExampleDialog);
    return DialogElementsExampleDialog;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        // clear by calling subject.next() without parameters
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AlertService);
    return AlertService;
}());



/***/ })

}]);
//# sourceMappingURL=login-module-es5.js.map