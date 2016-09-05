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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var weapon_service_1 = require('./weapon.service');
var WeaponDetailComponent = (function () {
    function WeaponDetailComponent(weaponService, route) {
        this.weaponService = weaponService;
        this.route = route;
    }
    WeaponDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.weaponService.getWeapon(id)
                .then(function (wpn) { return _this.wpn = wpn; });
        });
    };
    WeaponDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WeaponDetailComponent.prototype, "wpn", void 0);
    WeaponDetailComponent = __decorate([
        core_1.Component({
            selector: 'weapon-detail',
            templateUrl: 'app/template/weapon-detail.template.html',
            styleUrls: ['app/template/weapon-detail.style.css'],
            providers: [weapon_service_1.WeaponService]
        }), 
        __metadata('design:paramtypes', [weapon_service_1.WeaponService, router_1.ActivatedRoute])
    ], WeaponDetailComponent);
    return WeaponDetailComponent;
}());
exports.WeaponDetailComponent = WeaponDetailComponent;
//# sourceMappingURL=weapon-detail.component.js.map