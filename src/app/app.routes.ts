import { RouterModule, Routes } from '@angular/router';

// all routes need to be imported:
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, // default route for fallback
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
