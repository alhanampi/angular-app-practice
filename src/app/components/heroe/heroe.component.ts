import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  })

export class HeroeComponent {

  heroe: any = {}; // local variable I'll use for the template


  constructor(
// tslint:disable-next-line: variable-name
    private _activatedRoute: ActivatedRoute, // create variable for the router
// tslint:disable-next-line: variable-name
    private _heroesService: HeroesService,

  ) {
    this._activatedRoute.params.subscribe (params => {
      console.log(params); // this will always bring strings, not numbers. These are the parameters that come from the button in heroes. I can ask for the id too (params['id]) because that's how it's in the path in app.routes.
      this.heroe = this._heroesService.getHeroe(params['id'])

    } );
   }


}
