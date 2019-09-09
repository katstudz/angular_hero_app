import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mockheroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[] = HEROES;
  private selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
    // this.selectedHero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.name);
  }

  addHero(newHero: Hero) {
    console.log(newHero.name);
    console.log(newHero.id);
    this.heroes.push(newHero);
  }

  print(event: any) {
    console.log(event);
  }
}
