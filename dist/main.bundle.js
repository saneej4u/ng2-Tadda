webpackJsonp([1,4],Array(20).concat([
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.baseUrl = '';
        this.isLoggedIn = false;
        this.loggenInSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.baseUrl = "http://localhost/Tadda.WebApi/";
        // this.baseUrl = "http://taddatech.azurewebsites.net/";
    }
    AccountService.prototype.signUp = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + 'api/tadda/account/registercompany', JSON.stringify(model), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        var data = "grant_type=password&username=" + username + "&password=" + password;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + 'oauth2/token', data, options)
            .map(function (res) {
            var token = res.json() && res.json().access_token;
            if (token) {
                _this.token = token;
                var data = JSON.stringify({ username: username, token: token });
                localStorage.setItem("currentuser", data);
                _this.isLoggedIn = true;
                return true;
            }
            else {
                return false;
            }
        }).catch(this.handleError);
    };
    AccountService.prototype.checkLoginStatus = function () {
        var authToken = localStorage.getItem('currentuser');
        var tokenId = "";
        if (authToken != null) {
            var authTokenJson = JSON.parse(authToken);
            tokenId = authTokenJson.token;
            var token = "Bearer " + tokenId;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json ');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + 'api/tadda/enduser/isloggedin', options)
            .map(function (res) {
            if (res.status == 401) {
                return false;
            }
            else {
                return true;
            }
        }).
            catch(this.handleError);
    };
    AccountService.prototype.IsLoggedIn = function () {
        var _this = this;
        this.checkLoginStatus().subscribe(function (isLoggedS) {
        }, function (error) {
            _this.logout();
        }, function () {
        });
        var authToken = localStorage.getItem('currentuser');
        if (authToken != null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
        }
    };
    AccountService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        console.log("Logged out...");
        this.token = null;
        localStorage.removeItem('currentuser');
    };
    AccountService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("BODY: " + body);
        return body.data || {};
    };
    AccountService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(JSON.stringify(errMsg));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return AccountService;
}());
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=account.service.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnduserService = (function () {
    function EnduserService(http, router, accountService) {
        this.http = http;
        this.router = router;
        this.accountService = accountService;
        this.baseUrl = '';
        this.orderCreatedEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.baseUrl = "http://localhost/Tadda.WebApi/";
        //this.baseUrl = "http://taddatech.azurewebsites.net/";
    }
    EnduserService.prototype.GetAllEndUser = function (companyId) {
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json ');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + 'api/tadda/enduser/company/' + companyId, options)
            .map(this.extractData).
            catch(this.handleError);
    };
    EnduserService.prototype.GetCompanyByUser = function (email) {
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json ');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + 'api/tadda/company/email/' + email + '/', options)
            .map(this.extractData).
            catch(this.handleError);
    };
    EnduserService.prototype.GetAllOrderByEnduser = function (enduserId) {
        return this.http.get(this.baseUrl + 'api/tadda/order/enduser/' + enduserId + '/all')
            .map(this.extractData).
            catch(this.handleError);
    };
    EnduserService.prototype.GetNotificationByOrder = function (orderId) {
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json ');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + 'api/tadda/notification/order/' + orderId + '/notifications', options)
            .map(this.extractData).
            catch(this.handleError);
    };
    EnduserService.prototype.GetNotificationByEnduser = function (enduserId) {
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json ');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + 'api/tadda/notification/enduser/' + enduserId + '/notifications', options)
            .map(this.extractData).
            catch(this.handleError);
    };
    EnduserService.prototype.CreateEndUser = function (user) {
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + 'api/tadda/enduser/create', JSON.stringify(user), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EnduserService.prototype.CreateOrder = function (order) {
        var _this = this;
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + 'api/tadda/order/create', JSON.stringify(order), options)
            .map(function (res) {
            var body = res.json();
            console.log("BODY: " + body);
            _this.orderCreatedEmit.emit(body);
            return body || {};
        })
            .catch(this.handleError);
    };
    EnduserService.prototype.CreatNotification = function (notification) {
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + 'api/tadda/notification/create', JSON.stringify(notification), options)
            .map(function (res) {
            var body = res.json();
            return body || {};
        })
            .catch(this.handleError);
    };
    EnduserService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Extract Data : " + JSON.stringify(body));
        return body || {};
    };
    EnduserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(JSON.stringify(errMsg));
        //  return Observable.throw(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.status);
    };
    return EnduserService;
}());
EnduserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__account_account_service__["a" /* AccountService */]) === "function" && _c || Object])
], EnduserService);

var _a, _b, _c;
//# sourceMappingURL=enduser.service.js.map

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_bar_nav_bar_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { EnduserModule } from '../enduser/enduser.module';

var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__account_account_module__["a" /* AccountModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__nav_bar_nav_bar_component__["a" /* NavBarComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__nav_bar_nav_bar_component__["a" /* NavBarComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* SharedService */]]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Enduser; });
var Enduser = (function () {
    /*  public EndUserId:number;
      public FirstName: string;
      public LastName: string;
      public EmailAddress: string;
      public CompanyId: number;
      public ProfilePicUrl: string;
      public DateOfBirth: string;
      public IOSDeviceId: string;
      public AndroidDeviceId: string;
      public Orders:Order[]; */
    function Enduser(EndUserId, FirstName, LastName, EmailAddress, ProfilePicUrl, DateOfBirth, IOSDeviceId, AndroidDeviceId, Orders, Notifications, CompanyId) {
        this.EndUserId = EndUserId;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailAddress = EmailAddress;
        this.ProfilePicUrl = ProfilePicUrl;
        this.DateOfBirth = DateOfBirth;
        this.IOSDeviceId = IOSDeviceId;
        this.AndroidDeviceId = AndroidDeviceId;
        this.Orders = Orders;
        this.Notifications = Notifications;
        this.CompanyId = CompanyId;
    }
    return Enduser;
}());

//# sourceMappingURL=enduser.model.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SharedService = (function () {
    function SharedService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = '';
        this.baseUrl = "http://localhost/Tadda.WebApi/";
    }
    SharedService.prototype.GetLoggedInCompany = function () {
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json ');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + 'api/tadda/company/email/' + authTokenJson.username + '/', options)
            .map(this.extractData).
            catch(this.handleError);
    };
    SharedService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SharedService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(JSON.stringify(errMsg));
        //  return Observable.throw(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.status);
    };
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SharedService);

var _a, _b;
//# sourceMappingURL=shared.service.js.map

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsService = (function () {
    function SettingsService(http, router) {
        this.http = http;
        this.router = router;
        this.onLogoUploadCompleteEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.baseUrl = '';
        this.baseUrl = "http://localhost/Tadda.WebApi/";
        //this.baseUrl = "http://taddatech.azurewebsites.net/";
    }
    SettingsService.prototype.SaveCompany = function (company) {
        console.log("SaveCompany Clicked");
        var authToken = localStorage.getItem('currentuser');
        var authTokenJson = JSON.parse(authToken);
        var tokenId = authTokenJson.token;
        var token = "Bearer " + tokenId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + tokenId);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.baseUrl + 'api/tadda/company/update', JSON.stringify(company), options)
            .map(function (res) {
            var body = res.json();
            return body || {};
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.SaveAddress = function () {
    };
    SettingsService.prototype.OnUploadComplete = function (imagePath) {
        this.onLogoUploadCompleteEmit.emit(imagePath);
    };
    SettingsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Extract Data : " + JSON.stringify(body));
        return body || {};
    };
    SettingsService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(JSON.stringify(errMsg));
        //  return Observable.throw(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.status);
    };
    return SettingsService;
}());
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SettingsService);

var _a, _b;
//# sourceMappingURL=settings.service.js.map

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInOutDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInOutDialogComponent = (function () {
    function SignInOutDialogComponent() {
    }
    SignInOutDialogComponent.prototype.ngOnInit = function () {
    };
    return SignInOutDialogComponent;
}());
SignInOutDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-in-out-dialog',
        template: __webpack_require__(249),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], SignInOutDialogComponent);

//# sourceMappingURL=sign-in-out-dialog.component.js.map

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModel; });
var AccountModel = (function () {
    function AccountModel(email, password, confirmPassword, company, firstName, lastName, subId) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.company = company;
        this.firstName = firstName;
        this.lastName = lastName;
        this.subId = subId;
    }
    return AccountModel;
}());

//# sourceMappingURL=account-model.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { MaterialModule } from '@angular/material';
var accountRouting = [
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__["a" /* SignInComponent */] }
];
var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(accountRouting),
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdCardModule */]
            // MaterialModule.forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__["a" /* SignInComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__["a" /* SignInComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__account_service__["a" /* AccountService */]
        ]
    })
], AccountModule);

//# sourceMappingURL=account.module.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enduser_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enduser_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnduserDialogComponent = (function () {
    function EnduserDialogComponent(enduserService, dialogRef) {
        this.enduserService = enduserService;
        this.dialogRef = dialogRef;
        this.primary = "primary";
        this.enduser = new __WEBPACK_IMPORTED_MODULE_1__enduser_model__["a" /* Enduser */](1, "", "", "", "", "08/09/1982", "", "", null);
        this.primary = "primary";
    }
    EnduserDialogComponent.prototype.ngOnInit = function () {
    };
    EnduserDialogComponent.prototype.onEnduserClose = function () {
        this.dialogRef.close();
    };
    EnduserDialogComponent.prototype.onAddEndUser = function () {
        var _this = this;
        this.enduser.CompanyId = this.selcetedComId;
        this.enduserService.CreateEndUser(this.enduser)
            .subscribe(function (result) {
            _this.dialogRef.close();
            console.log("result:" + JSON.stringify(result));
        }, function (error) {
            console.log("error:" + error);
        });
    };
    return EnduserDialogComponent;
}());
EnduserDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enduser-dialog',
        template: __webpack_require__(234),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__enduser_service__["a" /* EnduserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__enduser_service__["a" /* EnduserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialogRef */]) === "function" && _b || Object])
], EnduserDialogComponent);

var _a, _b;
//# sourceMappingURL=enduser-dialog.component.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvitationDialogComponent = (function () {
    function InvitationDialogComponent() {
    }
    InvitationDialogComponent.prototype.ngOnInit = function () {
    };
    return InvitationDialogComponent;
}());
InvitationDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-invitation-dialog',
        template: __webpack_require__(239),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [])
], InvitationDialogComponent);

//# sourceMappingURL=invitation-dialog.component.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_model__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enduser_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationDialogComponent = (function () {
    function NotificationDialogComponent(dialogRef, enduserService) {
        this.dialogRef = dialogRef;
        this.enduserService = enduserService;
        this.notification = new __WEBPACK_IMPORTED_MODULE_2__notification_model__["a" /* Notification */]();
    }
    NotificationDialogComponent.prototype.ngOnInit = function () {
    };
    NotificationDialogComponent.prototype.onNotificationCreate = function () {
        var _this = this;
        this.notification.OrderId = this.selectedOrder.OrderID;
        this.notification.EnduserId = this.selectedOrder.EndUserID;
        this.enduserService.CreatNotification(this.notification).subscribe(function (not) {
            if (not != null) {
                _this.dialogRef.close();
            }
        });
    };
    return NotificationDialogComponent;
}());
NotificationDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification-dialog',
        template: __webpack_require__(240),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__enduser_service__["a" /* EnduserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__enduser_service__["a" /* EnduserService */]) === "function" && _b || Object])
], NotificationDialogComponent);

var _a, _b;
//# sourceMappingURL=notification-dialog.component.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderDetailsDialogComponent = (function () {
    function OrderDetailsDialogComponent() {
    }
    OrderDetailsDialogComponent.prototype.ngOnInit = function () {
    };
    return OrderDetailsDialogComponent;
}());
OrderDetailsDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-details-dialog',
        template: __webpack_require__(241),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [])
], OrderDetailsDialogComponent);

//# sourceMappingURL=order-details-dialog.component.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_model__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enduser_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDialogComponent = (function () {
    function OrderDialogComponent(dialogRef, enduserService) {
        this.dialogRef = dialogRef;
        this.enduserService = enduserService;
        this.primary = "primary";
        this.order = new __WEBPACK_IMPORTED_MODULE_2__order_model__["a" /* Order */]();
    }
    OrderDialogComponent.prototype.ngOnInit = function () {
    };
    OrderDialogComponent.prototype.onOrderCreate = function () {
        var _this = this;
        this.order.CompanyId = this.selectedEndUser.CompanyId;
        this.order.EndUserID = this.selectedEndUser.EndUserId;
        this.enduserService.CreateOrder(this.order).subscribe(function (order) {
            if (order != null) {
                _this.dialogRef.close();
            }
        });
    };
    return OrderDialogComponent;
}());
OrderDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-dialog',
        template: __webpack_require__(242),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__enduser_service__["a" /* EnduserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__enduser_service__["a" /* EnduserService */]) === "function" && _b || Object])
], OrderDialogComponent);

var _a, _b;
//# sourceMappingURL=order-dialog.component.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enduser_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotificationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewNotificationDialogComponent = (function () {
    function ViewNotificationDialogComponent(dialogRef, enduserService) {
        this.dialogRef = dialogRef;
        this.enduserService = enduserService;
    }
    ViewNotificationDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enduserService.GetNotificationByOrder(this.selectedOrder.OrderID)
            .subscribe(function (notification) {
            _this.notifications = notification;
        });
    };
    return ViewNotificationDialogComponent;
}());
ViewNotificationDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-notification-dialog',
        template: __webpack_require__(243),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__enduser_service__["a" /* EnduserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__enduser_service__["a" /* EnduserService */]) === "function" && _b || Object])
], ViewNotificationDialogComponent);

var _a, _b;
//# sourceMappingURL=view-notification-dialog.component.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(CompanyId, Name, AddressLine1, AddressLine2, Street, County, Country, Postcode, PrimaryColor, SecondaryColor, BrandLogoUrl) {
        this.CompanyId = CompanyId;
        this.Name = Name;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2;
        this.Street = Street;
        this.County = County;
        this.Country = Country;
        this.Postcode = Postcode;
        this.PrimaryColor = PrimaryColor;
        this.SecondaryColor = SecondaryColor;
        this.BrandLogoUrl = BrandLogoUrl;
    }
    return Company;
}());

//# sourceMappingURL=company.model.js.map

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 120;


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(151);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_setting_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var settingsRouting = [
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_5__settings_setting_component__["a" /* SettingComponent */] }
];
var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(settingsRouting)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__settings_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileDropDirective"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_shared_service__["a" /* SharedService */]]
    })
], SettingsModule);

//# sourceMappingURL=Settings.module.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_model__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    function SignInComponent(router, accountService, dialogRef) {
        this.router = router;
        this.accountService = accountService;
        this.dialogRef = dialogRef;
        this.submitted = false;
        this.accountModel = new __WEBPACK_IMPORTED_MODULE_2__account_model__["a" /* AccountModel */]('', '', '', '', '', '', 1);
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.accountService.login(this.accountModel.email, this.accountModel.password).subscribe(function (result) {
            if (_this.accountService.isLoggedIn == true) {
                var redirect = _this.accountService.redirectUrl;
                if (redirect) {
                    _this.router.navigate([redirect]);
                }
                else {
                    _this.dialogRef.close();
                    console.log("Sign in - Success ");
                    _this.router.navigate(["enduser"]);
                }
            }
            else {
                alert("Login Failed");
            }
        }, function () {
            _this.errors = 'Username or password is incorrect';
        }, function () {
        });
    };
    SignInComponent.prototype.onSignUp = function () {
        this.dialogRef.close();
        this.router.navigate(["home"]);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tadda-sign-in',
        template: __webpack_require__(230),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdDialogRef */]) === "function" && _c || Object])
], SignInComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_model__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_out_dialog_sign_in_out_dialog_component__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpComponent = (function () {
    function SignUpComponent(dialog, router, accountService) {
        this.dialog = dialog;
        this.router = router;
        this.accountService = accountService;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.submitted = false;
        this.accountModel = new __WEBPACK_IMPORTED_MODULE_3__account_model__["a" /* AccountModel */]('', '', '', '', '', '', 1);
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.accountService.signUp(this.accountModel).
            subscribe(function (res) {
            _this.router.navigate(["home"]);
        }, function (errors) {
            _this.errors = errors._body;
        });
    };
    SignUpComponent.prototype.onSignIn = function () {
        console.log("onSignIn");
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__sign_in_out_dialog_sign_in_out_dialog_component__["a" /* SignInOutDialogComponent */], {
            width: '600px',
            disableClose: true
        });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tadda-sign-up',
        template: __webpack_require__(231),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__account_service__["a" /* AccountService */]) === "function" && _c || Object])
], SignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        console.log("App component");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(232),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orders_orders_module__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enduser_enduser_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Settings_Settings_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notification_notification_module__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_account_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sign_in_out_dialog_sign_in_out_dialog_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings_settings_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */]
    },
    // {
    // path: 'sign-in',
    //component: HomeComponent
    //},
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sign_in_out_dialog_sign_in_out_dialog_component__["a" /* SignInOutDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_13__account_account_module__["a" /* AccountModule */],
            __WEBPACK_IMPORTED_MODULE_9__enduser_enduser_module__["a" /* EnduserModule */],
            __WEBPACK_IMPORTED_MODULE_8__orders_orders_module__["a" /* OrdersModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_10__Settings_Settings_module__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_11__notification_notification_module__["a" /* NotificationModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_14__sign_in_out_dialog_sign_in_out_dialog_component__["a" /* SignInOutDialogComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__settings_settings_service__["a" /* SettingsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__sign_in_out_dialog_sign_in_out_dialog_component__["a" /* SignInOutDialogComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enduser_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invitation_dialog_invitation_dialog_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnduserDetailsComponent = (function () {
    function EnduserDetailsComponent(dialog) {
        this.dialog = dialog;
    }
    EnduserDetailsComponent.prototype.ngOnInit = function () {
    };
    EnduserDetailsComponent.prototype.onSendInvitation = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__invitation_dialog_invitation_dialog_component__["a" /* InvitationDialogComponent */]);
    };
    return EnduserDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__enduser_model__["a" /* Enduser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__enduser_model__["a" /* Enduser */]) === "function" && _a || Object)
], EnduserDetailsComponent.prototype, "endUser", void 0);
EnduserDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tadda-enduser-details',
        template: __webpack_require__(233),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */]) === "function" && _b || Object])
], EnduserDetailsComponent);

var _a, _b;
//# sourceMappingURL=enduser-details.component.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enduser_model__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnduserItemComponent = (function () {
    function EnduserItemComponent() {
        this.showDetailsEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EnduserItemComponent.prototype.ngOnInit = function () {
    };
    EnduserItemComponent.prototype.onSelectedEnduser = function (enduser) {
        this.showDetailsEmit.emit(enduser);
    };
    return EnduserItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__enduser_model__["a" /* Enduser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__enduser_model__["a" /* Enduser */]) === "function" && _a || Object)
], EnduserItemComponent.prototype, "enduser", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EnduserItemComponent.prototype, "showDetailsEmit", void 0);
EnduserItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tadda-enduser-item',
        template: __webpack_require__(235),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], EnduserItemComponent);

var _a;
//# sourceMappingURL=enduser-item.component.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enduser_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enduser_dialog_enduser_dialog_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnduserListComponent = (function () {
    function EnduserListComponent(router, enduserService, dialog, accountService) {
        this.router = router;
        this.enduserService = enduserService;
        this.dialog = dialog;
        this.accountService = accountService;
        this.filterQuery = "";
        this.position = 'before';
        this.showDetailsListEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isRequesting = true;
    }
    EnduserListComponent.prototype.ngOnInit = function () {
        this.populateEndUserList();
    };
    EnduserListComponent.prototype.showDetailsListner = function (enduser) {
        this.showDetailsListEmit.emit(enduser);
    };
    EnduserListComponent.prototype.onAddNewUser = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__enduser_dialog_enduser_dialog_component__["a" /* EnduserDialogComponent */], {
            disableClose: true
        });
        this.dialogRef.componentInstance.selcetedComId = this.selectedCompanyId;
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.populateEndUserList();
        });
    };
    EnduserListComponent.prototype.ngOnDestroy = function () {
        var authToken = localStorage.getItem('currentuser');
        if (authToken != null) {
            this.getCompanyByUserSubscribtion.unsubscribe();
            this.getAllEndUserSubscribtion.unsubscribe();
        }
    };
    EnduserListComponent.prototype.populateEndUserList = function () {
        var _this = this;
        var authToken = localStorage.getItem('currentuser');
        if (authToken != null) {
            var authTokenJson = JSON.parse(authToken);
            this.getCompanyByUserSubscribtion = this.enduserService.GetCompanyByUser(authTokenJson.username).subscribe(function (company) {
                _this.selectedCompanyId = company.CompanyId;
                _this.getAllEndUserSubscribtion = _this.enduserService.GetAllEndUser(company.CompanyId)
                    .subscribe(function (response) {
                    _this.endUsers = response;
                    var _loop_1 = function (user) {
                        _this.enduserService.GetAllOrderByEnduser(user.EndUserId)
                            .subscribe(function (response) {
                            user.Orders = response;
                        });
                    };
                    for (var _i = 0, _a = _this.endUsers; _i < _a.length; _i++) {
                        var user = _a[_i];
                        _loop_1(user);
                    }
                    var _loop_2 = function (user) {
                        _this.enduserService.GetNotificationByEnduser(user.EndUserId)
                            .subscribe(function (response) {
                            user.Notifications = response;
                        });
                    };
                    for (var _b = 0, _c = _this.endUsers; _b < _c.length; _b++) {
                        var user = _c[_b];
                        _loop_2(user);
                    }
                }, function (error) {
                    _this.isRequesting = false;
                }, function () {
                    _this.isRequesting = false;
                });
            }, function (error) {
                if (error == 401) {
                    _this.accountService.logout();
                    _this.router.navigate(["home"]);
                }
            });
        }
        else {
            this.accountService.logout();
            this.router.navigate(["home"]);
        }
    };
    return EnduserListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EnduserListComponent.prototype, "showDetailsListEmit", void 0);
EnduserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tadda-enduser-list',
        template: __webpack_require__(236),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__enduser_service__["a" /* EnduserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__enduser_service__["a" /* EnduserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__account_account_service__["a" /* AccountService */]) === "function" && _d || Object])
], EnduserListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=enduser-list.component.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enduser_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enduser_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_dialog_order_dialog_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_dialog_order_details_dialog_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_dialog_notification_dialog_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_notification_dialog_view_notification_dialog_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EnduserOrderComponent = (function () {
    function EnduserOrderComponent(enduserService, dialog) {
        this.enduserService = enduserService;
        this.dialog = dialog;
    }
    EnduserOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enduserService.orderCreatedEmit.subscribe(function (orderResult) {
            _this.orders.push(orderResult);
        }, function (error) {
            console.log("Emit Order Error: " + error);
        });
    };
    EnduserOrderComponent.prototype.onOrderClick = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__order_dialog_order_dialog_component__["a" /* OrderDialogComponent */]);
        this.dialogRef.componentInstance.selectedEndUser = this.enduser;
    };
    EnduserOrderComponent.prototype.onOrderDetails = function (order) {
        this.orderDetailsDialogComponentDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__order_details_dialog_order_details_dialog_component__["a" /* OrderDetailsDialogComponent */]);
        this.orderDetailsDialogComponentDialogRef.componentInstance.selectedOrder = order;
    };
    EnduserOrderComponent.prototype.onSendNotification = function (order) {
        this.notificationDialogComponentDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__notification_dialog_notification_dialog_component__["a" /* NotificationDialogComponent */]);
        this.notificationDialogComponentDialogRef.componentInstance.selectedOrder = order;
    };
    EnduserOrderComponent.prototype.onViewNotification = function (order) {
        this.viewNotificationDialogComponentDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__view_notification_dialog_view_notification_dialog_component__["a" /* ViewNotificationDialogComponent */]);
        this.viewNotificationDialogComponentDialogRef.componentInstance.selectedOrder = order;
    };
    return EnduserOrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], EnduserOrderComponent.prototype, "orders", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__enduser_model__["a" /* Enduser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__enduser_model__["a" /* Enduser */]) === "function" && _a || Object)
], EnduserOrderComponent.prototype, "enduser", void 0);
EnduserOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tadda-enduser-order',
        template: __webpack_require__(237),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__enduser_service__["a" /* EnduserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__enduser_service__["a" /* EnduserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialog */]) === "function" && _c || Object])
], EnduserOrderComponent);

var _a, _b, _c;
//# sourceMappingURL=enduser-order.component.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnduserComponent = (function () {
    function EnduserComponent() {
    }
    EnduserComponent.prototype.ngOnInit = function () {
    };
    EnduserComponent.prototype.showDetailsList = function (enduser) {
        this.selecetedEnduser = enduser;
    };
    EnduserComponent.prototype.ngOnDestroy = function () {
    };
    return EnduserComponent;
}());
EnduserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enduser',
        template: __webpack_require__(238),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [])
], EnduserComponent);

//# sourceMappingURL=enduser.component.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enduser_list_enduser_list_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enduser_details_enduser_details_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enduser_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enduser_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enduser_item_enduser_item_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enduser_order_enduser_order_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__enduserfilter_pipe__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__order_dialog_order_dialog_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__enduser_dialog_enduser_dialog_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_details_dialog_order_details_dialog_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invitation_dialog_invitation_dialog_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notification_dialog_notification_dialog_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__view_notification_dialog_view_notification_dialog_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var enduserRouting = [
    { path: 'enduser', component: __WEBPACK_IMPORTED_MODULE_6__enduser_component__["a" /* EnduserComponent */] }
];
var EnduserModule = (function () {
    function EnduserModule() {
    }
    return EnduserModule;
}());
EnduserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_15__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(enduserRouting)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__enduser_list_enduser_list_component__["a" /* EnduserListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__enduser_details_enduser_details_component__["a" /* EnduserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__enduser_component__["a" /* EnduserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__enduser_item_enduser_item_component__["a" /* EnduserItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__enduser_order_enduser_order_component__["a" /* EnduserOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__enduserfilter_pipe__["a" /* EnduserfilterPipe */],
            __WEBPACK_IMPORTED_MODULE_12__order_dialog_order_dialog_component__["a" /* OrderDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__enduser_dialog_enduser_dialog_component__["a" /* EnduserDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__order_details_dialog_order_details_dialog_component__["a" /* OrderDetailsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__invitation_dialog_invitation_dialog_component__["a" /* InvitationDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_17__notification_dialog_notification_dialog_component__["a" /* NotificationDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18__view_notification_dialog_view_notification_dialog_component__["a" /* ViewNotificationDialogComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__enduser_service__["a" /* EnduserService */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__order_dialog_order_dialog_component__["a" /* OrderDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__enduser_dialog_enduser_dialog_component__["a" /* EnduserDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__order_details_dialog_order_details_dialog_component__["a" /* OrderDetailsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__invitation_dialog_invitation_dialog_component__["a" /* InvitationDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_17__notification_dialog_notification_dialog_component__["a" /* NotificationDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18__view_notification_dialog_view_notification_dialog_component__["a" /* ViewNotificationDialogComponent */]
        ]
    })
], EnduserModule);

//# sourceMappingURL=enduser.module.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnduserfilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnduserfilterPipe = (function () {
    function EnduserfilterPipe() {
    }
    EnduserfilterPipe.prototype.transform = function (value, filterQuery) {
        if (value.length === 0 || filterQuery === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item.FirstName.toLowerCase().includes(filterQuery.toLowerCase())
                || item.LastName.toLowerCase().includes(filterQuery.toLowerCase())
                || item.EmailAddress.toLowerCase().includes(filterQuery.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return EnduserfilterPipe;
}());
EnduserfilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'enduserfilter'
    })
], EnduserfilterPipe);

//# sourceMappingURL=enduserfilter.pipe.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = (function () {
    function Notification(NotificationId, Name, OrderId, Message, EnduserId) {
        this.NotificationId = NotificationId;
        this.Name = Name;
        this.OrderId = OrderId;
        this.Message = Message;
        this.EnduserId = EnduserId;
    }
    return Notification;
}());

//# sourceMappingURL=notification.model.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(OrderID, Description, EndUserID, CompanyId, OrderLines) {
        this.OrderID = OrderID;
        this.Description = Description;
        this.EndUserID = EndUserID;
        this.CompanyId = CompanyId;
        this.OrderLines = OrderLines;
    }
    return Order;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_in_out_dialog_sign_in_out_dialog_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_company_model__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavBarComponent = (function () {
    function NavBarComponent(accountService, dialog, router, settingsService, sharedService) {
        this.accountService = accountService;
        this.dialog = dialog;
        this.router = router;
        this.settingsService = settingsService;
        this.sharedService = sharedService;
        this.company = new __WEBPACK_IMPORTED_MODULE_7__settings_company_model__["a" /* Company */]();
        console.log("NavBarComponent - Inside constructor - loggedIn.");
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var authToken = localStorage.getItem('currentuser');
        if (authToken != null) {
            this.sharedService.GetLoggedInCompany().subscribe(function (company) {
                _this.company = company;
            }, function () {
            });
        }
        this.settingsService.onLogoUploadCompleteEmit.subscribe(function (path) {
            _this.company.BrandLogoUrl = path;
        });
        this.subscription = this.accountService.IsLoggedIn().subscribe(function (loggedIn) {
            _this.isLoggedIn = loggedIn;
        });
    };
    NavBarComponent.prototype.OnLogout = function () {
        this.accountService.logout();
    };
    NavBarComponent.prototype.onSignIn = function () {
        console.log("onSignIn");
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__sign_in_out_dialog_sign_in_out_dialog_component__["a" /* SignInOutDialogComponent */], {
            width: '600px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("result dialog :" + result);
            dialogRef = null;
        });
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tadda-nav-bar',
        template: __webpack_require__(244),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__settings_settings_service__["a" /* SettingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], NavBarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(dialog, accountService, router) {
        this.dialog = dialog;
        this.accountService = accountService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.accountService.IsLoggedIn().subscribe(function (loggedIn) {
            console.log("Home loggedIn :" + loggedIn);
            if (!loggedIn) {
                /*  let dialogRef = this.dialog.open(SignInOutDialogComponent, {
                    width: '600px',
                    disableClose: true
                  });
          
                  dialogRef.afterClosed().subscribe(result => {
                    console.log("result dialog :" + result);
                    dialogRef = null;
                  });  */
            }
            else {
                _this.router.navigate(["enduser"]);
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(245),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_account_service__["a" /* AccountService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(246),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_module__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var notificationRouting = [
    { path: 'notification', component: __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */] }
];
var NotificationModule = (function () {
    function NotificationModule() {
    }
    return NotificationModule;
}());
NotificationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(notificationRouting)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */]
        ]
    })
], NotificationModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(247),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], OrderComponent);

//# sourceMappingURL=order.component.js.map

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orders_order_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_module__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var orderRouting = [
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_4__orders_order_component__["a" /* OrderComponent */] }
];
var OrdersModule = (function () {
    function OrdersModule() {
    }
    return OrdersModule;
}());
OrdersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(orderRouting)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__orders_order_component__["a" /* OrderComponent */]
        ]
    })
], OrdersModule);

//# sourceMappingURL=orders.module.js.map

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_model__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost/Tadda.WebApi/api/tadda/company/uploadazure';
var SettingComponent = (function () {
    function SettingComponent(settingsService, sharedService) {
        this.settingsService = settingsService;
        this.sharedService = sharedService;
        this.company = new __WEBPACK_IMPORTED_MODULE_2__company_model__["a" /* Company */]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.GetLoggedInCompany().subscribe(function (company) {
            _this.company = company;
        }, function () {
        });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.company.BrandLogoUrl = JSON.parse(response);
            _this.settingsService.SaveCompany(_this.company).subscribe(function () {
                _this.settingsService.OnUploadComplete(_this.company.BrandLogoUrl);
            }, function () {
            });
        };
    };
    SettingComponent.prototype.fileOverBase = function (e) {
        console.log("fileOverBase: " + e);
        this.hasBaseDropZoneOver = e;
    };
    SettingComponent.prototype.onSaveCompany = function () {
        var _this = this;
        this.settingsService.SaveCompany(this.company).subscribe(function (result) {
            _this.company = result;
            console.log("Company Updated..." + JSON.stringify(_this.company));
        }, function () {
        });
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(248),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], SettingComponent);

var _a, _b;
//# sourceMappingURL=setting.component.js.map

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n#ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n\r\n\r\n.md-input-container.md-input-focused label {\r\n  color: green !important;\r\n}\r\n\r\n.md-input-container::-webkit-input-placeholder {\r\n    color: mediumvioletred;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-header-image {\r\n  background-image: url('https://cdn2.iconfinder.com/data/icons/commerce-roundline/512/shopping_cart-512.png');\r\n  background-size: cover;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".primary\r\n{\r\n    background:#215B7D;\r\n}\r\n\r\n.mat-primary\r\n{\r\n      background: #215B7D !important;\r\n    color: white !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".selected\r\n{\r\n    background: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-header-image {\r\n  background-image: url('https://cdn2.iconfinder.com/data/icons/commerce-roundline/512/shopping_cart-512.png');\r\n  background-size: cover;\r\n}\r\n\r\n.mat-card{\r\n\r\nbackground: #F5F2F0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".mat-raised-button\r\n{\r\n    background: #215B7D;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".primary\r\n{\r\n    background:#215B7D !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".mat-raised-button\r\n{\r\n    background: #215B7D;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, " .my-drop-zone { border: dotted 3px lightgray; }\r\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n    .another-file-over-class { border: dotted 3px green; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports) {

module.exports = "<md-card class=\"example-card\">\n  <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n\n      <div class=\"row\">\n        <div class=\"input-field col m12 s12\">\n          <i class=\"material-icons prefix\">account_circle</i>\n\n          <md-input-container>\n            <input mdInput placeholder=\"Email\" type=\"email\" ngModel [(ngModel)]=\"accountModel.email\" required name=\"email\" #email=\"ngModel\">\n          </md-input-container>\n\n          <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n            Email is required\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col m12 s12\">\n          <i class=\"material-icons prefix\">lock</i>\n          <md-input-container>\n            <input mdInput placeholder=\"Password\" type=\"password\"  ngModel [(ngModel)]=\"accountModel.password\" required name=\"password\" #password=\"ngModel\">\n          </md-input-container>\n\n\n          <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n            Password is required\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" style=\"width:100%;\" type=\"submit\" class=\"waves-effect waves-light btn btn-lg btn-primary btn-block\"> Sign In </button>\n    </div>\n\n    <div style=\"padding-top:20px;\" class=\"center-align\">\n      <a (click)=\"onSignUp()\" href=\"#\">Create an account</a>\n    </div>\n\n  </form>\n</md-card>"

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <h4>Create your account</h4>\n        </div>\n      </div>\n\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" style=\"color:white\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n\n            <md-input-container>\n              <input mdInput placeholder=\"First name\" ngModel [(ngModel)]=\"accountModel.firstName\" required name=\"firstName\" #firstName=\"ngModel\">\n            </md-input-container>\n\n            <div [hidden]=\"firstName.valid || firstName.pristine\" class=\"alert alert-danger\">\n              First Name is required\n            </div>\n          </div>\n          <div class=\"input-field col s6\">\n\n            <md-input-container>\n              <input mdInput placeholder=\"Last name\" ngModel [(ngModel)]=\"accountModel.lastName\" required name=\"lastName\" #lastName=\"ngModel\">\n            </md-input-container>\n\n            <div [hidden]=\"lastName.valid || lastName.pristine\" class=\"alert alert-danger\">\n              Last Name is required\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n\n            <md-input-container>\n              <input type=\"email\" mdInput placeholder=\"Email\" ngModel [(ngModel)]=\"accountModel.email\" required name=\"email\" #email=\"ngModel\">\n            </md-input-container>\n\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n              Email is required\n            </div>\n          </div>\n        </div>\n\n\n\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <md-input-container>\n              <input mdInput placeholder=\"Password\" type=\"password\" ngModel [(ngModel)]=\"accountModel.password\" required name=\"password\"\n                #password=\"ngModel\">\n            </md-input-container>\n\n            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n              Password is required\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n\n            <md-input-container>\n              <input mdInput placeholder=\"Confirm Password\" type=\"password\" ngModel [(ngModel)]=\"accountModel.confirmPassword\" required\n                name=\"confirmPassword\" #confirmPassword=\"ngModel\">\n            </md-input-container>\n\n            <div [hidden]=\"confirmPassword.valid || confirmPassword.pristine\" class=\"alert alert-danger\">\n              Password is required\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <md-input-container>\n              <input mdInput placeholder=\"Company Name\" ngModel [(ngModel)]=\"accountModel.company\" required name=\"company\" #company=\"ngModel\">\n            </md-input-container>\n\n            <div [hidden]=\"company.valid || company.pristine\" class=\"alert alert-danger\">\n              Company is required\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"row hide\">\n          <div class=\"input-field col s12\">\n            <select id=\"subId\" ngModel [(ngModel)]=\"accountModel.subId\" required name=\"subId\" #subId=\"ngModel\">\n      <option value=\"1\">Option 1</option>\n      <option value=\"2\">Option 2</option>\n      <option value=\"3\">Option 3</option>\n    </select>\n\n            <div [hidden]=\"subId.valid || subId.pristine\" class=\"alert alert-danger\">\n              Subscription is required\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <button [disabled]=\"!f.valid\" type=\"submit\" style=\"width:100%\" class=\"btn btn-lg btn-primary btn-block\"> Create account </button>\n          </div>\n        </div>\n\n        <div class=\"center-align\">\n          Already on Tadda ? <a (click)=\"onSignIn()\">Sign In</a>\n        </div>\n      </form>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "<!-- <tadda-nav-bar></tadda-nav-bar> -->\n<router-outlet></router-outlet>\n\n\n"

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m12 l12\">\n    <md-tab-group *ngIf=\"endUser; else noenduser\">\n\n      <md-tab label=\"User Details\">\n        <md-card class=\"example-card\">\n          <md-card-header>\n            <md-card-title>\n              <h4> {{ endUser.FirstName }} {{ endUser.LastName }}</h4>\n            </md-card-title>\n          </md-card-header>\n          <md-card-content>\n\n            <div class=\"row\">\n              <div class=\"col xs12 s12 m12 l12\">\n                <div>\n                  <div class=\"col xs6 s6 m6 l6\">\n                    <div style=\"background:#F5F2F0; padding:20px;\">\n                      <fieldset>\n                        <legend>\n                          <h5>Details</h5>\n                        </legend>\n\n                        <ul class=\"\">\n                          <li class=\"collection-item\"> <b>Email:</b> {{ endUser.Email}}</li>\n                          <li class=\"collection-item\"> <b>EndUserId: </b> {{ endUser.EndUserId}}</li>\n                          <li class=\"collection-item hide\"><b>CompanyId: </b> {{ endUser.CompanyId }}</li>\n                          <li class=\"collection-item\"><b>Date of birth:</b> {{ endUser.DateOfBirth }}</li>\n                          <li class=\"collection-item\"><b>Android Id:</b> {{ endUser.AndroidDeviceId }}</li>\n                          <li class=\"collection-item\"><b>IOS Id:</b> {{ endUser.IOSDeviceId }}</li>\n                        </ul>\n                      </fieldset>\n                    </div>\n\n                  </div>\n\n                  <div class=\"col xs6 s6 m6 l6\">\n                    <div style=\"background:#F5F2F0;padding:20px;\">\n                      <fieldset>\n                        <legend>\n                          <h5>Address</h5>\n                        </legend>\n                        <ul class=\"\">\n                          <li class=\"collection-item\">Address 1: {{ endUser.Email}}</li>\n                          <li class=\"collection-item\">Address 2: {{ endUser.EndUserId}}</li>\n                          <li class=\"collection-item\">Street:{{ endUser.CompanyId }}</li>\n                          <li class=\"collection-item\">Poscode: {{ endUser?.ProfilePicUrl }}</li>\n                          <li class=\"collection-item\">Country: {{ endUser.DateOfBirth }}</li>\n                        </ul>\n                      </fieldset>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col s12 m12 l12\">\n                <button class=\"btn waves-effect waves-light\" style=\"background: #215B7D !important;\" (click)=\"onSendInvitation()\" type=\"button\"\n                  click name=\"action\">Send Invitaion\n                <i class=\"material-icons right\">send</i>\n            </button>\n              </div>\n            </div>\n          </md-card-content>\n        </md-card>\n      </md-tab>\n\n      <md-tab label=\"Order Details\">\n        <div style=\"min-height:400px;\">\n          <tadda-enduser-order [enduser]='endUser' [orders]='endUser.Orders'></tadda-enduser-order>\n        </div>\n      </md-tab>\n\n      <md-tab label=\"Notifications\">\n        <div *ngIf=\"endUser.Notifications?.length > 0 ; else noNotifications\">\n          <div class=\"row\">\n            <div class=\"col s12 m12 l12\">\n              <h5>{{endUser.FirstName }} {{ endUser.LastName }}' s Notifications</h5>\n            </div>\n          </div>\n\n          <div class=\"row\" >\n            <div class=\"col s12 m12 l12\">\n              <table class=\"striped\">\n                <tr>\n                  <th>Name</th>\n                  <th> Message</th>\n                </tr>\n                <tr *ngFor=\"let item of endUser.Notifications\">\n                  <td>{{ item?.Name }}</td>\n                  <td>{{ item?.Message}}</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n\n        <ng-template #noNotifications>\n          <div class=\"row\">\n            <div class=\"col s12 m12 l12\">\n              <h5 class=\"center-align\"> No notifications for {{ endUser.FirstName }}  {{ endUser.LastName }}</h5>\n            </div>\n          </div>\n        </ng-template>\n      </md-tab>\n    </md-tab-group>\n\n    <ng-template #noenduser>\n      <div class=\"center-align\" style=\"padding-top:100px;\">\n        <md-card>\n          <h5> <i class=\"material-icons\">arrow_back</i> Please select user</h5>\n        </md-card>\n      </div>\n    </ng-template>\n  </div>\n\n</div>"

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n\n  <md-card class=\"example-card\">\n    <md-card-header>\n      <md-card-title>\n        <h5>Add User</h5>\n        <br>\n      </md-card-title>\n\n    </md-card-header>\n    <md-card-content>\n\n      <div class=\"row\">\n        <form class=\"col s12\">\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <md-input-container>\n                <input mdInput placeholder=\"First Name\" ngModel name=\"FirstName\" [(ngModel)]=\"enduser.FirstName\" #FirstName=\"ngModel\">\n              </md-input-container>\n            </div>\n            <div class=\"input-field col s6\">\n              <md-input-container>\n                <input mdInput placeholder=\"Last Name\" ngModel name=\"LastName\" [(ngModel)]=\"enduser.LastName\" #LastName=\"ngModel\">\n              </md-input-container>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <md-input-container>\n                <input mdInput placeholder=\"Email\" ngModel name=\"EmailAddress\" [(ngModel)]=\"enduser.EmailAddress\" #EmailAddress=\"ngModel\">\n              </md-input-container>\n            </div>\n          </div>\n          <!--  Address - Endusre\n\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n     \n            <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n            <label for=\"icon_prefix\">Address Line 1</label>\n          </div>\n          <div class=\"input-field col s6\">\n    \n            <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n            <label for=\"icon_prefix\">Address Line 2</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s4\">\n     \n            <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n            <label for=\"icon_prefix\">Street</label>\n          </div>\n\n          <div class=\"input-field col s5\">\n           \n            <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n            <label for=\"icon_prefix\">Country</label>\n          </div>\n          <div class=\"input-field col s3\">\n         \n            <input id=\"icon_telephone\" type=\"tel\" class=\"validate\">\n            <label for=\"icon_telephone\">Postcode</label>\n          </div>\n        </div>\n        -->\n        </form>\n      </div>\n    </md-card-content>\n    <md-card-actions class=\"right-align\">\n      <button md-raised-button [color]=\"primary\" (click)=\"onEnduserClose()\">Close</button>\n      <button md-raised-button [color]=\"primary\" (click)=\"onAddEndUser()\">Save</button>\n    </md-card-actions>\n  </md-card>\n\n\n</form>"

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = "\n<md-nav-list (click)=\"onSelectedEnduser(enduser)\">\n  <md-list-item>\n    <img md-list-avatar src=\"http://bootdey.com/img/Content/avatar/avatar1.png\" alt=\"...\">\n    <h3 md-line>{{enduser.LastName}}, {{enduser.FirstName}} </h3>\n    <p md-line>\n      <span> {{enduser.EmailAddress}} </span>\n    </p>\n  </md-list-item>\n</md-nav-list>"

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m12 l12\">\n\n    <div>\n      <md-input-container>\n        <input mdInput placeholder=\"Search for user by name and email\" [(ngModel)]=\"filterQuery\" id=\"enduser_search\" type=\"text\"\n          class=\"validate\">\n      </md-input-container>\n\n    </div>\n\n    <div *ngIf=\"endUsers?.length > 0 ; else noenduserlist\">\n      <div *ngFor=\"let endUser of endUsers | enduserfilter:filterQuery\">\n        <tadda-enduser-item (showDetailsEmit)=\"showDetailsListner($event)\" [enduser]=\"endUser\"></tadda-enduser-item>\n      </div>\n    </div>\n\n    <ng-template #noenduserlist>\n      <div class=\"center-align\" style=\"padding-top:100px;\">\n        <md-card>\n          <h6> Please add new user by clicking + sign at right bottom corner.</h6>\n        </md-card>\n      </div>\n    </ng-template>\n\n\n    <div class=\"fixed-action-btn horizontal\" mdTooltip=\"ADD NEW USER\" [mdTooltipPosition]=\"position\">\n      <a class=\"btn-floating btn-large\" (click)=\"onAddNewUser()\" style=\"background-color:#215B7D\">\n        <i class=\"large material-icons\">add</i>\n      </a>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:20px;\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <md-card style=\"background:#215B7D\">\n        <button md-raised-button (click) =\"onOrderClick()\" ><i class=\"material-icons\">add_circle_outline</i> Add new order</button>\n      </md-card>\n    </div>\n  </div>\n\n  <div *ngIf=\"orders?.length > 0 ; else noorders\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l12\">\n        <h5>{{enduser.FirstName }} {{ enduser.LastName }}' s orders</h5>\n        <div *ngFor=\"let item of orders\">\n          <div style=\"padding-top:20px; padding-bottom:10px;\" class=\"col s6 m6 l6\">\n            <md-card>\n              <md-card-header>\n                <div md-card-avatar class=\"example-header-image\"></div>\n                <md-card-title>Order No: {{item?.OrderID}}</md-card-title>\n                <md-card-subtitle> {{item?.Description}}</md-card-subtitle>\n              </md-card-header>\n              <md-card-content>\n                {{item?.Description}}\n              </md-card-content>\n              <md-card-actions class=\"left-align\">\n                <button md-raised-button style=\"color:white; background: #215B7D !important;\" (click)=\"onOrderDetails(item)\" > Edit</button>\n                <button md-raised-button style=\"color:white; background: #215B7D !important;\" (click)=\"onViewNotification(item)\"> View Notification</button>\n                <button md-raised-button style=\"color:white; background: #215B7D !important;\" (click)=\"onSendNotification(item)\">Send Notification</button>\n              </md-card-actions>\n            </md-card>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #noorders>\n    <div class=\"row\">\n      <div class=\"col s12 m12 l12\">\n        <h3 class=\"center-align\"> No orders!</h3>\n      </div>\n    </div>\n  </ng-template>\n\n</div>"

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "<tadda-nav-bar></tadda-nav-bar>\r\n<div class=\"row\"> \r\n\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col s3 m3 l3\">\r\n    <tadda-enduser-list (showDetailsListEmit)=\"showDetailsList($event)\"></tadda-enduser-list>\r\n  </div>\r\n  <div class=\"col s9 m9 l9\">\r\n    <tadda-enduser-details [endUser]=\"selecetedEnduser\"></tadda-enduser-details>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100px;\" class=\"center-align\">\n\n<p>\n  Email will be send to enduser and ask them to download and register to Tadda!\n</p>\n\n</div>\n"

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:600px;\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <h5> Send Notification </h5>\n      <hr>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <div style=\"background:#F5F2F0; padding:20px;\">\n        <fieldset style=\"min-height:150px;\">\n          <legend>\n            <b>Description</b>\n          </legend>\n          {{selectedOrder?.Description}}\n        </fieldset>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <md-input-container>\n            <input mdInput placeholder=\"Name\" ngModel name=\"Name\" [(ngModel)]=\"notification.Name\" #Name=\"ngModel\">\n          </md-input-container>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <md-input-container>\n            <input mdInput placeholder=\"Message\" ngModel name=\"Message\" [(ngModel)]=\"notification.Message\" #Message=\"ngModel\">\n          </md-input-container>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <button style=\"background:#215B7D\" md-raised-button [color]=\"primary\" style=\"width:100%\" (click)=\"onNotificationCreate()\">Send notification to order # {{ selectedOrder?.OrderID }}</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</div>"

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width:700px; min-height:400px;\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <div style=\"background:#F5F2F0; padding:20px;\">\n        <fieldset style=\"min-height:150px;\">\n          <legend> Order Details</legend>\n          <div class=\"row\">\n            <div class=\"col s1 m1 l1\">\n              # {{selectedOrder?.OrderID}}\n            </div>\n\n            <div class=\"col s11 m11 l11\">\n              {{selectedOrder?.Description}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col s12 m12 l12\">\n              <div class=\"right-align\">\n                Created on {{selectedOrder?.DateTimeCreated}}\n              </div>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <div style=\"background:#215B7D; padding:15px;\">\n        <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">add_circle_outline</i>Add New Line</a>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <table class=\"striped\">\n        <tr>\n          <th>ID</th>\n          <th>Description</th>\n          <th> DateTimeCreated</th>\n          <th></th>\n          <th></th>\n        </tr>\n        <tr *ngFor=\"let lines of selectedOrder.OrderLines\">\n          <td>{{ lines?.OrderLineID}}</td>\n          <td>{{ lines?.Description}}</td>\n          <td>{{ lines?.DateTimeCreated}}</td>\n          <td>\n            <a href=\" \"> <i class=\"material-icons\">&#xE3C9;</i></a>\n          </td>\n          <td>\n            <a href=\" \"> <i class=\"material-icons\">delete</i></a>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m12 l12\">\n    <h5> Create new order for {{ selectedEndUser?.FirstName }} {{ selectedEndUser?.LastName }}</h5>\n  </div>\n</div>\n<div class=\"row\">\n  <form class=\"col s12\">\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <md-input-container>\n          <input mdInput placeholder=\"Order Description\" ngModel name=\"Description\" [(ngModel)]=\"order.Description\" #Description=\"ngModel\">\n        </md-input-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <button md-raised-button [color]=\"primary\" style=\"width:100%\" (click)=\"onOrderCreate()\">CREATE ORDER</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width:600px; min-height:300px;\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <div style=\"background:#F5F2F0; padding:20px;\">\n        <fieldset style=\"min-height:150px;\">\n          <legend> Order Details</legend>\n          <div class=\"row\">\n            <div class=\"col s2 m2 l2\">\n              # {{selectedOrder?.OrderID}}\n            </div>\n\n            <div class=\"col s10 m10 l10\">\n              {{selectedOrder?.Description}}\n            </div>\n          </div>\n        </fieldset>\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <table class=\"striped\">\n        <tr>\n          <th>ID</th>\n          <th>Name</th>\n          <th> Message</th>\n          <th></th>\n        </tr>\n        <tr *ngFor=\"let item of notifications\">\n          <td>{{ item?.NotificationId}}</td>\n          <td>{{ item?.Name}}</td>\n          <td>{{ item?.Message}}</td>\n          <td>\n            <button md-raised-button>Re-send</button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n</div>"

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"home\" class=\"brand-logo\" style=\"padding-left:40px;\"><img [src]=\"'https://companylogotadda.blob.core.windows.net/images/' + company.BrandLogoUrl\" alt=\"\"></a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <ng-template #signUp>\n        <li><a routerLink=\"/enduser\">Users</a></li>\n        <li><a routerLink=\"/order\">Orders</a></li>\n        <li><a routerLink=\"/notification\">Notifications</a></li>\n        <li><a routerLink=\"/settings\">Settings</a></li>\n        <li><a routerLink=\"/\" (click)=\"OnLogout()\" >Log out</a></li>\n      </ng-template>\n      <li *ngIf=\"!isLoggedIn; else signUp\"><a (click)=\"onSignIn()\" >Sign In</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = "<tadda-nav-bar></tadda-nav-bar>\r\n<div class=\"row\">\r\n    <div class=\"col s6 m6 l6\"></div>\r\n\r\n    <div class=\"col s6 m6 l6\" style=\"\">\r\n        <div style=\"margin:30px;padding:50px;background:#215B7D; color:white\">\r\n            <tadda-sign-up></tadda-sign-up>\r\n        </div>\r\n\r\n    </div>\r\n    \r\n</div>"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "<tadda-nav-bar></tadda-nav-bar>\r\n<h5> TODO: Show all the notification of the company which logged in.</h5>"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<tadda-nav-bar></tadda-nav-bar>\r\n<h5> TODO: Show all the orders of the company which logged in.</h5>\r\n"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<tadda-nav-bar></tadda-nav-bar>\r\n<div class=\"container\">\r\n    <div class=\"divider\"></div>\r\n    <div class=\"section\">\r\n        <h5>Company Details</h5>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m12 l12\">\r\n                <form class=\"col s12\" #cnameform=\"ngForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s10\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Company name\" ngModel name=\"Name\" [(ngModel)]=\"company.Name\" #Name=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                        <div class=\"input-field col s2\">\r\n                            <button md-raised-button style=\"background:#215B7D !important; color:white !important; width:100%\" class=\"btn btl-large large\"\r\n                                (click)=\"onSaveCompany()\"> Save</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col m3 s3 l3\">\r\n\r\n                <div style=\"min-height:200px; text-align:center; padding-top:70px;\" ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n                    (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"well my-drop-zone\">\r\n                    Drop brand logo\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col m9 s9 l9\">\r\n                <h5>Upload queue</h5>\r\n                <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th width=\"50%\">Name</th>\r\n                            <th>Size</th>\r\n                            <th>Progress</th>\r\n                            <th>Status</th>\r\n                            <th>Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of uploader.queue\">\r\n                            <td><strong>{{ item?.file?.name }}</strong></td>\r\n                            <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                            <td *ngIf=\"uploader.isHTML5\">\r\n                                <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                                <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                                <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                            </td>\r\n                            <td nowrap>\r\n                                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                        </button>\r\n                                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                        </button>\r\n                                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\r\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                        </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <br>\r\n                <div>\r\n                    Queue progress:\r\n                    <div class=\"progress\" style=\"\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"divider\"></div>\r\n    <div class=\"section\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col s6 m6 l6\">\r\n                <h5>Address</h5>\r\n                <br>\r\n                <form class=\"col s12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Address Line 1\" ngModel name=\"AddressLine1\" [(ngModel)]=\"company.AddressLine1\" #AddressLine1=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Address Line 2\" ngModel name=\"AddressLine2\" [(ngModel)]=\"company.AddressLine2\" #AddressLine2=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Street\" ngModel name=\"Street\" [(ngModel)]=\"company.Street\" #Street=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"County\" ngModel name=\"County\" [(ngModel)]=\"company.County\" #County=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Country\" ngModel name=\"Country\" [(ngModel)]=\"company.Country\" #Country=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Post Code\" ngModel name=\"Postcode\" [(ngModel)]=\"company.Postcode\" #Postcode=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <button md-raised-button style=\"background:#215B7D !important; color:white !important; width:100%\" class=\"btn btl-large large\"\r\n                                (click)=\"onSaveCompany()\">Save Address</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"push-s1 push-m1 push-l1 col s5 m5 l5\">\r\n                <h5>Themes</h5>\r\n                <br>\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Primary Color\" ngModel name=\"PrimaryColor\" [(ngModel)]=\"company.PrimaryColor\" #PrimaryColor=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <md-input-container>\r\n                                <input mdInput placeholder=\"Secondary Color\" ngModel name=\"SecondaryColor\" [(ngModel)]=\"company.SecondaryColor\" #SecondaryColor=\"ngModel\">\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s12\">\r\n                            <button md-raised-button style=\"background:#215B7D !important; color:white !important; width:100%\" class=\"btn btl-large large\"\r\n                               (click)=\"onSaveCompany()\">Save Theme</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "\n  <tadda-sign-in> </tadda-sign-in>\n"

/***/ }),
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ })
]),[301]);
//# sourceMappingURL=main.bundle.js.map