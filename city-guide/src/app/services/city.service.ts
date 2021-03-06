import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/City';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  //TODO
  // origin: string = location.origin;
  origin: string = 'http://localhost:8080';
  path: string = 'api/v1/graphql';
  url: string = `${this.origin}/${this.path}`;
  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<City[]> {
    const query = `query {
      cities {
        id
        name
        description
        country
        countryCode
        url
      }
    }`;
    const variables = {};
    return this.httpClient.post<City[]>(
      this.url,
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

  getCity(id: string): Observable<City> {
    const query = `
    query ( $cityId: ID!){
      city(id: $cityId) {
        name
        description
        country
        countryCode
        url
        photos {
          url 
        }
      }
    }
    `;

    const variables = {
      cityId: id,
    };

    return this.httpClient.post<City>(
      this.url,
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

  addPhoto(cityId: string, photo: any) {
    return this.httpClient.post(
      this.origin + '/api/cities/' + cityId + '/photos/upload',
      JSON.stringify({
        photo,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    );
  }

  addCity(city: City): Observable<City> {
    const query = `
    mutation ( $city: CityInput!){
      addCity(city: $city) {
        id
        name
        description
        country
        countryCode
        url
      }
    }
    `;

    const variables = {
      city: city,
    };

    return this.httpClient.post<City>(
      this.url,
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
