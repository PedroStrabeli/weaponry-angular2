import { Injectable } from '@angular/core'
import { Weapon } from './weapon';
import { WEAPONS } from './weapons-dummy';


@Injectable()
export class WeaponService{
  // getWeapons(): Promise<Weapon[]>{
  //   return Promise.resolve(WEAPONS);
  // }
  getWeapons(): Weapon[]{
    return WEAPONS;
  }
}
