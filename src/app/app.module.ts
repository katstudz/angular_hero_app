import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent
  ],
  // to co chcemy uzywac
  imports: [
    BrowserModule,
    FormsModule
  ],
  // to co chcemy reuzywac
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
