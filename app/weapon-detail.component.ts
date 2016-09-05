import { Component, Input } from '@angular/core';
import { Weapon } from './weapon'

@Component({
  selector: 'weapon-detail',
  templateUrl: 'app/template/weapon-detail.template.html'
})
export class WeaponDetailComponent {
  @Input() wpn;
}
