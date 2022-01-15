import { Routes } from '@angular/router';
import { CityDetailsComponent } from './city/city-details/city-details.component';
import { CityComponent } from './city/city.component';
import { NavComponent } from './nav/nav.component';

export const APP_ROUTES: Routes = [
  { path: '', component: CityComponent },
  { path: 'cityDetails/:cityId', component: CityDetailsComponent },
  { path: 'nav', component: NavComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
