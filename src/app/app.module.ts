import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesAddComponent } from './heroes-add/heroes-add.component';
import {MatCardModule} from '@angular/material';
import { MessageComponent } from './message/message.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
    HeroesAddComponent,
    MessageComponent,
  ],
  // to co chcemy uzywac
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatCardModule
  ],
  // to co chcemy reuzywac
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
