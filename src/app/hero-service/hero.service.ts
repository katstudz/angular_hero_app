import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from '../hero';
import {HEROES} from '../mockheroes';
import {MessageService} from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('heroes service fetched heroes');
    return of(HEROES);
    // of - programowanie reaktywne, zwraca asynch herosow
  }
}
