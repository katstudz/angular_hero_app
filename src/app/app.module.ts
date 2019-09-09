import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  // to co chcemy uzywac
  imports: [
    BrowserModule
  ],
  // to co chcemy reuzywac
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
