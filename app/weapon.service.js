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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var WeaponService = (function () {
    function WeaponService(http) {
        this.http = http;
        this.weaponsUrl = 'app/weapons'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    WeaponService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    WeaponService.prototype.getWeapons = function () {
        // return Promise.resolve(WEAPONS);  old way
        return this.http.get(this.weaponsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    WeaponService.prototype.getWeapon = function (id) {
        return this.getWeapons()
            .then(function (weapons) { return weapons.find(function (weapon) { return weapon.id === id; }); });
    };
    WeaponService.prototype.create = function (name, type) {
        return this.http
            .post(this.weaponsUrl, JSON.stringify({ name: name, type: type }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    WeaponService.prototype.delete = function (id) {
        var url = this.weaponsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    WeaponService.prototype.update = function (weapon) {
        // console.log(weapon)
        var url = this.weaponsUrl + "/" + weapon.id;
        return this.http
            .put(url, JSON.stringify(weapon), { headers: this.headers })
            .toPromise()
            .then(function () { return weapon; })
            .catch(this.handleError);
    };
    WeaponService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeaponService);
    return WeaponService;
}());
exports.WeaponService = WeaponService;
//# sourceMappingURL=weapon.service.js.map