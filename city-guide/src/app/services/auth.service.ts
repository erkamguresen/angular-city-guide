import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: string = localStorage.getItem('token') || '';
  decodedUserToken: any;

  // origin: string = location.origin;
  origin: string = 'http://localhost:8080';
  path: string = 'api/v1/graphql';
  url: string = `${this.origin}/${this.path}`;

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    const query = `query ($email: String!, $password: String!){
      loginUser(email: $email, password: $password)
    }`;
    const variables = {
      email: username,
      password: password,
    };

    return this.httpClient.post<String>(
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

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.userToken = token;
    this.decodedUserToken = jwt_decode(token);
    // console.log(this.userToken);
    // console.log(this.decodedUserToken);
  }

  registerUser() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const query = `query {
      registerUser
    }`;
    const variables = {};

    return this.httpClient.post<String>(
      this.url,
      JSON.stringify({
        query,
        variables,
      }),
      {
        headers,
      }
    );
  }
}
