import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { WeaponListComponent }   from './weapons.component';
import { WeaponDetailComponent } from './weapon-detail.component';
import { DashboardComponent } from './dashboard.component';
import { JsonpModule } from '@angular/http';
import { routing } from './app.routing'

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    JsonpModule],
  declarations: [
    AppComponent,
    WeaponListComponent,
    WeaponDetailComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
