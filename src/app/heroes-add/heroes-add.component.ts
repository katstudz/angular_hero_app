import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from '../hero';
import {MessageService} from '../message-service/message.service';

@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.css']
})
export class HeroesAddComponent implements OnInit {

  initHero: Hero = new Hero();
  @Output() newHero: EventEmitter<Hero>;

  constructor(private messageServer: MessageService) {
    this.newHero = new EventEmitter();
  }

  ngOnInit() {
    this.initHero.name = 'enter new name';
    this.initHero.id = 222;
    this.messageServer.messages$.subscribe((message) => console.log(message));

  }

  saveNewHero() {
    this.newHero.emit(this.initHero);
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
