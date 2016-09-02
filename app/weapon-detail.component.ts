import { Component, Input } from '@angular/core';
import {Weapon} from './weapon'

@Input() wpn: Weapon;

@Component({
  selector: 'weapon-detail',
  template:`<div *ngIf="wpn">
      <h2>{{wpn.name}} details:</h2>
      <div>
          <label>ID:</label><span>{{wpn.id}}</span>
      </div>
      <div>
          <label>Name</label>
          <input [(ngModel)]="wpn.name" placeholder="Weapon Name">
      </div>
      <div>
      <label>Type:</label>
          <ul class="weapons>
              <li *ngFor="let type of wpn.type">{{type}}</li>
          </ul>
      </div>
      <button (click)="Close()">Close Details</button>
  </div>`
})
export class WeaponDetailComponent {
}
