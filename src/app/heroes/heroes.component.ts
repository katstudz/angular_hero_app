import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero-service/hero.service';
import {MessageService} from '../message-service/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  private selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    // tu wiazemy pola
  }

  ngOnInit() {
    this.messageService.share('hero component');
    this.heroService.getHeroes().subscribe(value => this.process(value));

    // tu robimy inne rzeczy
    // this.selectedHero = this.heroes[0];

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.name);
  }

  addHero(newHero: Hero) {
    console.log(newHero.name);
    console.log(newHero.id);

    this.messageService.add('new hero added ed');
    this.messageService.share('new heroes added');
    this.heroes.push(newHero);
  }

  print(event: any) {
    console.log(event);
  }

  private process(value: Hero[]) {
    this.heroes = value;
  }
}
