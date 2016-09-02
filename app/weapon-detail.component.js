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
var weapon_1 = require('./weapon');
wpn: weapon_1.Weapon;
var WeaponDetailComponent = (function () {
    function WeaponDetailComponent() {
    }
    WeaponDetailComponent = __decorate([
        core_1.Component({
            selector: 'weapon-detail',
            template: "<div *ngIf=\"wpn\">\n      <h2>{{wpn.name}} details:</h2>\n      <div>\n          <label>ID:</label><span>{{wpn.id}}</span>\n      </div>\n      <div>\n          <label>Name</label>\n          <input [(ngModel)]=\"wpn.name\" placeholder=\"Weapon Name\">\n      </div>\n      <div>\n      <label>Type:</label>\n          <ul class=\"weapons>\n              <li *ngFor=\"let type of wpn.type\">{{type}}</li>\n          </ul>\n      </div>\n      <button (click)=\"Close()\">Close Details</button>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], WeaponDetailComponent);
    return WeaponDetailComponent;
}());
exports.WeaponDetailComponent = WeaponDetailComponent;
//# sourceMappingURL=weapon-detail.component.js.map