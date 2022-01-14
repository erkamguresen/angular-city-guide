import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  path = 'http://localhost:8080/api/v1/graphq';

  constructor(private httpClient: HttpClient) {}
}
