import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Weapon } from './weapon'
import { WeaponService } from './weapon.service';

@Component({
  selector: 'weapon-detail',
  templateUrl: 'app/template/weapon-detail.template.html',
  styleUrls: ['app/template/weapon-detail.style.css'],
  providers: [WeaponService]
})
export class WeaponDetailComponent implements OnInit{
  constructor(
    private weaponService: WeaponService,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.weaponService.getWeapon(id)
        .then(wpn => this.wpn = wpn);
    });
  }

  save(): void {
  this.weaponService.update(this.wpn)
    .then(this.goBack);
  }


  goBack(): void {
    window.history.back();
  }



  @Input() wpn;
}
