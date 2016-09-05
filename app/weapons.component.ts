import { Component }       from '@angular/core';
import { Weapon }          from './weapon';
import { Router } from '@angular/router';
import { WeaponService } from './weapon.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'weapon-list',
  templateUrl: 'app/template/weapons.template.html',
  styleUrls: ['app/template/app.style.css'],
  providers: [WeaponService]

})

export class WeaponListComponent implements OnInit {
  ngOnInit(): void {
    this.getWeapons();
  }

  weapons: Weapon[];
  wpn_sel: Weapon;

  constructor(
    private weaponService: WeaponService,
    private router: Router
  ) { }

  getWeapons(): void {
    this.weaponService.getWeapons().then(weapons => this.weapons = weapons);
  }

  onSelect(weapon):void{
    this.wpn_sel=weapon;
  }

  gotoDetail(): void {
    let link = ['/detail', this.wpn_sel.id];
    this.router.navigate(link);
  }

  close():void{
    this.wpn_sel=undefined;
  }
}
