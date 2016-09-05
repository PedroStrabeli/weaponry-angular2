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
var weapons_dummy_1 = require('./weapons-dummy');
var WeaponService = (function () {
    function WeaponService() {
    }
    // getWeapons(): Promise<Weapon[]>{
    //   return Promise.resolve(WEAPONS);
    // }
    WeaponService.prototype.getWeapons = function () {
        return Promise.resolve(weapons_dummy_1.WEAPONS);
    };
    WeaponService.prototype.getWeapon = function (id) {
        return this.getWeapons()
            .then(function (weapons) { return weapons.find(function (weapon) { return weapon.id === id; }); });
    };
    WeaponService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WeaponService);
    return WeaponService;
}());
exports.WeaponService = WeaponService;
//# sourceMappingURL=weapon.service.js.map