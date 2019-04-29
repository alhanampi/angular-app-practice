import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' // imported like this, is like a service, so I need a private in the constructor

// services:
import { HeroesService, Heroe } from './../../services/heroes.service'; // Heroe is the interface that was exported in the service


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []; // empty array, it will be filled later with the ngOnInit

  constructor(
    // using the service:
// tslint:disable-next-line: variable-name
    private _heroesService: HeroesService,
    private _router: Router

  ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); // the empty array is filled with the service, using the public function

  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]) // navigates to the hero with that id
  } 
}