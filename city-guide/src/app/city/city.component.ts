import { Component, OnInit } from '@angular/core';
import { City } from '../models/City';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService],
})
export class CityComponent implements OnInit {
  cities: City[] = [];
  message: string = '?';

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityService.getCities().subscribe((data: any) => {
      this.cities = data.data.cities;
      console.log(data);
      console.log(this.cities);
    });
  }
}
