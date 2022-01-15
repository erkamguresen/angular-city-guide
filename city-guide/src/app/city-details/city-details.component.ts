import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/City';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
  providers: [CityService],
})
export class CityDetailsComponent implements OnInit {
  city: City = new City(-1, '', '', -1, '', []);

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cityService.getCity(params['cityId']).subscribe((data: any) => {
        this.city = data.data.city;
      });
    });
  }
}
