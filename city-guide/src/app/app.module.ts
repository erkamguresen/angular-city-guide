import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './routes';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailsComponent } from './city-details/city-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CityComponent,
    CityDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    GalleryModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
