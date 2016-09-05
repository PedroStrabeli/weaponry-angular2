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
var WeaponListComponent = (function () {
    function WeaponListComponent(weaponService, router) {
        this.weaponService = weaponService;
        this.router = router;
    }
    WeaponListComponent.prototype.ngOnInit = function () {
        this.getWeapons();
    };
    WeaponListComponent.prototype.getWeapons = function () {
        var _this = this;
        this.weaponService.getWeapons().then(function (weapons) { return _this.weapons = weapons; });
    };
    WeaponListComponent.prototype.onSelect = function (weapon) {
        this.wpn_sel = weapon;
    };
    WeaponListComponent.prototype.gotoDetail = function () {
        var link = ['/detail', this.wpn_sel.id];
        this.router.navigate(link);
    };
    WeaponListComponent.prototype.close = function () {
        this.wpn_sel = undefined;
    };
    WeaponListComponent = __decorate([
        core_1.Component({
            selector: 'weapon-list',
            templateUrl: 'app/template/weapons.template.html',
            styleUrls: ['app/template/app.style.css'],
            providers: [weapon_service_1.WeaponService]
        }), 
        __metadata('design:paramtypes', [weapon_service_1.WeaponService, router_1.Router])
    ], WeaponListComponent);
    return WeaponListComponent;
}());
exports.WeaponListComponent = WeaponListComponent;
//# sourceMappingURL=weapons.component.js.map