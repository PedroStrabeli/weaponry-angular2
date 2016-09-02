import {Component} from '@angular/core'
import {WeaponDetailComponent} from './weapon-detail.component'
import {Weapon} from './weapon'

const WEAPONS: Weapon[] = [
  { id: 11, name: 'Karambit' type: ['melee','fixed blade', 'blade']},
  { id: 12, name: 'Recurve Bow' type: ['ranged','arrows','long-distance']},
  { id: 13, name: 'Stiletto' type: ['melee','blade','foldable']},
  { id: 14, name: 'Naginata' type: ['melee','long','spear','blade']},
  { id: 15, name: 'Zweihänder' type: ['melee','sword','broad','two-handed']},
  { id: 16, name: 'Balisong' type: ['melee','blade','foldable','trick-blade']},
  { id: 17, name: 'Javelin' type: ['ranged','spear','mid-distance','throw']},
  { id: 18, name: 'Bowie' type: ['melee','knife','fixed','blade']},
  { id: 19, name: 'Switchblade' type: ['melee','tool','foldable','blade']},
  { id: 20, name: 'Harper' , type: ['melee','sword','broad','one-handed']}
];

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <h2>My Weapons</h2>
              <div>
            <ul class="weapons">
              <li *ngFor="let wpn of weapons" (click)="onSelect(wpn)" [class.selected]="wpn === wpn_sel">
              <span class="badge">{{wpn.id}}</span> {{wpn.name}}
              </li>
            </ul>
            </div>
            <!--<weapon-detail [wpn]="wpn_sel"></weapon-detail>-->
            `,
            styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .weapons {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .weapons li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .weapons li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .weapons li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .weapons .text {
    position: relative;
    top: -3px;
  }
  .weapons .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})
  export class  AppComponent{
    title = 'Weaponry';
    wpn_sel: Weapon;
    weapons = WEAPONS;
    onSelect(weapon):void{
      console.log(weapon);
      this.wpn_sel=weapon;
    }
    Close():void{
      this.wpn_sel=undefined;
    }
  }
