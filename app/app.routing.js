"use strict";
var router_1 = require('@angular/router');
var weapons_component_1 = require('./weapons.component');
var dashboard_component_1 = require('./dashboard.component');
var weapon_detail_component_1 = require('./weapon-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'weapons',
        component: weapons_component_1.WeaponListComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: weapon_detail_component_1.WeaponDetailComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map