import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {

  // local variable. It's an array because there can be multiple matches:
  heroes: any[] = [];
  search: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {
      this.search = params.search;
      this.heroes = this._heroesService.buscarHeroes(params.search);
    } );
  }

}
