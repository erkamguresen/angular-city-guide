import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/City';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  path = 'http://localhost:8080/api/v1/graphq';

  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<string> {
    const query = `query ($name: String!){
      hello,
      sayHello(name: $name)
    }`;
    const variables = {
      name: 'erkam',
    };
    return this.httpClient.post<string>(
      this.path,
      JSON.stringify({
        query,
        variables,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
  }
}
