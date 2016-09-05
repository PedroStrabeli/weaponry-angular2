import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { WeaponDetailComponent } from './weapon-detail.component';
import { JsonpModule } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule],
  declarations: [ AppComponent , WeaponDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
