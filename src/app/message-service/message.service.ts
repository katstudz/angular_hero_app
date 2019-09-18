import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  private topic: Subject<string>; // dwukierunkowa komunikajacja
  messages$: Observable<string>; // dolarek na koncu -observable
  constructor() {
    this.topic = new Subject<string>();
    this.messages$ = this.topic.asObservable();
  }
  share(message: string) {
    this.topic.next(message); // publikowanie wiadomosci
  }

  add(message: string) {
    this.messages.push(message);

  }

  clear() {
    this.messages = this.messages.splice(0, this.messages.length);
  }

}
