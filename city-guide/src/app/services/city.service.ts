import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/City';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  path = 'http://localhost:8080/api/v1/graphql';

  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<City[]> {
    const query = `query {
      cities {
        name
        description
        country
        countryCode
        url
      }
    }`;
    const variables = {};
    return this.httpClient.post<City[]>(
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

/**example call with variables:
 * const query = `query ($name: String!){
      hello,
      sayHello(name: $name)
      cities {
        name
        description
        country
        countryCode
      }
    }`;
    const variables = {
      name: 'erkam',
    };
    return this.httpClient.post<City[]>(
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
 * 
 */
