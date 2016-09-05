import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/weapons" class="btn">Weapons</a>
     <a routerLink="/dashboard" class="btn">Dashboard</a>
   </nav>
   <router-outlet></router-outlet>
 `,
 styleUrls: ['app/template/app.style.css'],

})
export class AppComponent {
  title = 'Welcome to the Weaponry';
}
