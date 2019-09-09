import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Output() output: EventEmitter<boolean>;

  constructor() {
    this.output = new EventEmitter();
  }

  ngOnInit() {
    this.output.emit(true);
  }
}
