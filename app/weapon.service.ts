import { Injectable } from '@angular/core'
import { Weapon } from './weapon';
import { WEAPONS } from './weapons-dummy';


@Injectable()
export class WeaponService{
  // getWeapons(): Promise<Weapon[]>{
  //   return Promise.resolve(WEAPONS);
  // }
  getWeapons(): Promise<Weapon[]>{
    return Promise.resolve(WEAPONS);
  }
  getWeapon(id: number): Promise<Weapon> {
    return this.getWeapons()
           .then(weapons => weapons.find(weapon => weapon.id === id));
  }

}
