import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weapon } from './weapon';
import { WeaponService } from './weapon.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/template/dashboard.template.html',
  providers: [WeaponService]
})

export class DashboardComponent implements OnInit {
    weapons: Weapon[] = [];

    constructor(
      private weaponService: WeaponService,
      private router: Router
    ) { }

    ngOnInit(): void {
      this.weaponService.getWeapons()
        .then(weapons => this.weapons = weapons.slice(1, 5));
    }

    gotoDetail(weapon: Weapon): void {
      let link = ['/detail', weapon.id];
      this.router.navigate(link);
    }
  }
