import { RouterModule, Routes } from '@angular/router';

// all routes need to be imported:
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent }, // needs an ID to show the complete info of the selected one
  { path: 'search/:search', component: SearchComponent }, // route for searchbar
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, // default route for fallback
  
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
