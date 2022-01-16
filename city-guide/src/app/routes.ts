import { Routes } from '@angular/router';
import { CityAddComponent } from './city/city-add/city-add.component';
import { CityDetailsComponent } from './city/city-details/city-details.component';
import { CityComponent } from './city/city.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';

export const APP_ROUTES: Routes = [
  { path: '', component: CityComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cityadd', component: CityAddComponent },
  { path: 'cityDetails/:cityId', component: CityDetailsComponent },
  { path: 'nav', component: NavComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
