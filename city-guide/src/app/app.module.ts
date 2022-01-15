import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './routes';
import { AlertifyService } from './services/alertify.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailsComponent } from './city/city-details/city-details.component';
import { CityAddComponent } from './city/city-add/city-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CityComponent,
    CityDetailsComponent,
    CityAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    GalleryModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
