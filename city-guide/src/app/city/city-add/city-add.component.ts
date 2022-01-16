import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/models/City';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private router: Router,
    private authService: AuthService
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
      this.city = Object.assign({}, this.cityAddForm.value);

      this.city.userId = this.authService.getCurrentUserId();

      console.log(this.city);

      this.cityService.addCity(this.city).subscribe((data: any) => {
        this.alertifyService.success(
          `${data.data.addCity.name} is added successfully`
        );

        setTimeout(() => {
          this.router.navigate([`/cityDetails/${data.data.addCity.id}`]);
        }, 2000);
      });
    }
  }
}
