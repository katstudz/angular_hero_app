import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../message-service/message.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy { // chcemy zamknac na zniszczniu komponentu

  messages$: Observable<string>;
  sub: Subscription;

  constructor(public messageService: MessageService) {
    this.messages$ = messageService.messages$;
  }

  // public - chcemy uzyc servicu w template

  ngOnInit() {
    this.sub = this.messages$.subscribe((message) => console.log(message));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
