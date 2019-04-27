import { Component, OnInit } from '@angular/core';

//services:
import { HeroesService, Heroe } from './../../services/heroes.service'; // Heroe is the interface that was exported in the service


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [] // empty array, it will be filled later with the ngOnInit

  constructor(
    //using the service:
    private _heroesService: HeroesService

  ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes() // the empty array is filled with the service, using the public function
    console.log(this.heroes)
  }

}
