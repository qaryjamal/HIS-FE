"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var requests_service_1 = require("../services/requests.service");
var permissions_service_1 = require("../services/permissions.service");
var platform_browser_1 = require("@angular/platform-browser");
var LoginComponent = (function () {
    function LoginComponent(requestsService, router, permissionsService, titleService, activatedRoute) {
        this.requestsService = requestsService;
        this.router = router;
        this.permissionsService = permissionsService;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.isPasswordExpired = false;
        this.isLoggedInProcessed = false;
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
    };
    LoginComponent.prototype.onChange = function () {
        this.error = null;
    };
    LoginComponent.prototype.getCookie = function () {
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/forgotPassword']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: '../templates/login.template.html',
            styleUrls: ['../styles/login.style.css']
        }),
        __metadata("design:paramtypes", [requests_service_1.RequestsService,
            router_1.Router,
            permissions_service_1.PermissionsService,
            platform_browser_1.Title,
            router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map