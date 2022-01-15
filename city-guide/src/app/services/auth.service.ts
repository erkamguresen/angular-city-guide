import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: string;
  decodedUserToken: any;

  // origin: string = location.origin;
  origin: string = 'http://localhost:8080';
  path: string = 'api/v1/graphql';
  url: string = `${this.origin}/${this.path}`;

  constructor(private httpClient: HttpClient) {
    this.userToken = localStorage.getItem('token') || '';
  }

  login(username: string, password: string): Observable<String> {
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

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.userToken = token;
    this.decodedUserToken = jwt_decode(token);
    // console.log(this.userToken);
    // console.log(this.decodedUserToken);
  }

  registerUser(user: User): Observable<String> {
    const query = `
    mutation (
      $user: UserInput!,
    ){
      registerUser(user: $user){
          username
          email
      }
    }
    `;
    const variables = {
      user,
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

  logout(): void {
    localStorage.removeItem('token');
    this.userToken = '';
    this.decodedUserToken = null;
  }

  isLoggedIn(): boolean {
    return this.userToken?.length > 0 && this.decodedUserToken.exp > Date.now();
  }

  getCurrentUserId(): string {
    return this.decodedUserToken.userId;
  }
}
