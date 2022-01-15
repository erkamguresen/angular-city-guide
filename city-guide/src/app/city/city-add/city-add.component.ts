import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { City } from 'src/app/models/City';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService],
})
export class CityAddComponent implements OnInit {
  city: City = new City(-1, '', '', '', '', '');
  cityAddForm: FormGroup;
  // name = new FormControl('');

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder
  ) {
    this.cityAddForm = this.createCityForm();
  }

  ngOnInit(): void {}

  createCityForm() {
    return this.formBuilder.group({
      // name: ['', Validators.required],
      // description: ['', Validators.required],
      // country: ['', Validators.required],
      // countryCode: ['', Validators.required],
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      countryCode: new FormControl('', Validators.required),
    });
  }

  addCity() {
    if (this.cityAddForm.valid) {
      console.log(this.cityAddForm);
      console.log(this.cityAddForm.get('name'));
      this.city = Object.assign({}, this.cityAddForm.value);
      // TODO
      this.city.userId = '61d9ec10bb93ea7125f89d06';
      this.cityService.addCity(this.city).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
