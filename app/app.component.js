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
var weapon_service_1 = require('./weapon.service');
var AppComponent = (function () {
    function AppComponent(weaponService) {
        this.weaponService = weaponService;
        this.title = 'Weaponry';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getWeapons();
    };
    AppComponent.prototype.getWeapons = function () {
        this.weapons = this.weaponService.getWeapons();
    };
    AppComponent.prototype.onSelect = function (weapon) {
        console.log(weapon);
        this.wpn_sel = weapon;
    };
    AppComponent.prototype.close = function () {
        this.wpn_sel = undefined;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/template/app.template.html',
            styleUrls: ['app/template/app.style.css'],
            providers: [weapon_service_1.WeaponService]
        }), 
        __metadata('design:paramtypes', [weapon_service_1.WeaponService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map