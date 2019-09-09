import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.css']
})
export class HeroesAddComponent implements OnInit {

  initHero: Hero = new Hero();
  @Output() newHero: EventEmitter<Hero>;

  constructor() {
    this.newHero = new EventEmitter();
  }

  ngOnInit() {
    this.initHero.name = 'enter new name';
    this.initHero.id = 222;
  }

  emitHero() {
    console.log('emit');

    const hero = new Hero();
    hero.id = this.initHero.id;
    hero.name = this.initHero.name;
    console.log(this.initHero);
    this.newHero.emit(hero);
  }


}
