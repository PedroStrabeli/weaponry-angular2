import { Component }       from '@angular/core';
import { Weapon }          from './weapon';
import { WeaponService } from './weapon.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/template/app.template.html',
  styleUrls: ['app/template/app.style.css'],
  providers: [WeaponService]

})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getWeapons();
  }

  title = 'Weaponry';
  weapons: Weapon[];
  wpn_sel: Weapon;

  constructor(private weaponService: WeaponService) { }

  getWeapons(): void {
    this.weapons = this.weaponService.getWeapons();
  }

  onSelect(weapon):void{
    this.wpn_sel=weapon;
  }

  close():void{
    this.wpn_sel=undefined;
  }
}
