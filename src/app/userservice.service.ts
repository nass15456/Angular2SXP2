import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {User } from './user';
import { Router } from '@angular/router';
@Injectable()
export class UserserviceService {
  currentUser: User;
  constructor(private http: Http,
              private router :Router) {

  }
  create(user: String) {
    return this.http.post('https://localhost:8081/api/users/subscribe', user, this.jwt()).map((response: Response) => response.json());
  }


  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

}
