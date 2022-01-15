import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryItem, ImageItem } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';

import { City } from '../models/City';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
  providers: [
    CityService,
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover',
      },
    },
  ],
})
export class CityDetailsComponent implements OnInit {
  city: City = new City(-1, '', '', -1, '', []);

  images: GalleryItem[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cityService.getCity(params['cityId']).subscribe((data: any) => {
        this.city = data.data.city;

        this.images = this.city.photos.map((photo: { url: any }) => {
          return new ImageItem({
            src: photo.url,
            thumb: photo.url,
          });
        });

        console.log(this.images);
      });
    });
  }
}
