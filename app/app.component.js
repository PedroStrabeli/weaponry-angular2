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
var WEAPONS = [
    { id: 11, name: 'Karambit', type: ['melee', 'fixed blade', 'blade'] },
    { id: 12, name: 'Recurve Bow', type: ['ranged', 'arrows', 'long-distance'] },
    { id: 13, name: 'Stiletto', type: ['melee', 'blade', 'foldable'] },
    { id: 14, name: 'Naginata', type: ['melee', 'long', 'spear', 'blade'] },
    { id: 15, name: 'Zweihänder', type: ['melee', 'sword', 'broad', 'two-handed'] },
    { id: 16, name: 'Balisong', type: ['melee', 'blade', 'foldable', 'trick-blade'] },
    { id: 17, name: 'Javelin', type: ['ranged', 'spear', 'mid-distance', 'throw'] },
    { id: 18, name: 'Bowie', type: ['melee', 'knife', 'fixed', 'blade'] },
    { id: 19, name: 'Switchblade', type: ['melee', 'tool', 'foldable', 'blade'] },
    { id: 20, name: 'Harper', type: ['melee', 'sword', 'broad', 'one-handed'] }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Weaponry';
        this.weapons = WEAPONS;
    }
    AppComponent.prototype.onSelect = function (weapon) {
        console.log(weapon);
        this.wpn_sel = weapon;
    };
    AppComponent.prototype.Close = function () {
        this.wpn_sel = undefined;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n              <h2>My Weapons</h2>\n              <div>\n            <ul class=\"weapons\">\n              <li *ngFor=\"let wpn of weapons\" (click)=\"onSelect(wpn)\" [class.selected]=\"wpn === wpn_sel\">\n              <span class=\"badge\">{{wpn.id}}</span> {{wpn.name}}\n              </li>\n            </ul>\n            </div>\n            <!--<weapon-detail [wpn]=\"wpn_sel\"></weapon-detail>-->\n            ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .weapons {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .weapons li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .weapons li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .weapons li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .weapons .text {\n    position: relative;\n    top: -3px;\n  }\n  .weapons .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map