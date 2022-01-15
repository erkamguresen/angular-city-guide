import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { NavComponent } from './nav/nav.component';

export const APP_ROUTES: Routes = [
  { path: '', component: CityComponent },
  { path: 'cities', component: CityComponent },
  { path: 'nav', component: NavComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
