import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http'
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
// Import Components and services
import { AppComponent }   from './app.component';
import { WeaponListComponent }   from './weapons.component';
import { WeaponDetailComponent } from './weapon-detail.component';
import { DashboardComponent } from './dashboard.component';
import { WeaponSearchComponent } from './weapon-search.component';
import { JsonpModule } from '@angular/http';
import { routing } from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    WeaponListComponent,
    WeaponDetailComponent,
    DashboardComponent,
    WeaponSearchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
