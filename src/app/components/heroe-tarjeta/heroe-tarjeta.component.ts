import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // heroe and index will come from outside this component, hence input:
  @Input() heroe: any = {};
  @Input() index: number;

  // this will emit outside this component, and will have the name of the event I want the parent to listen. EventEmitter needs to have the type specified. Here is type number because it will emit the index.
  @Output() selectedHero: EventEmitter<number>;

constructor(
  private router: Router,
  ) {
    this.selectedHero = new EventEmitter(); // I need to initialize the event emitter. selected is an observable.

   }

ngOnInit() {
  }

  verHeroe() {
    this.router.navigate( ['/heroe', this.index] );
  }

}
