import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { contrat } from './contrat';
@Injectable()
export class ContractsService {

  constructor(private http: Http) { }

  getAll(url : string) {
    return this.http.get(url+'/api/contracts', this.jwt4()).map((response: Response) => response.json());
  }

  private jwt4() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Auth-Token':currentUser.token});
      headers.set('Content-Type','application/json;charset=UTF-8');
      return new RequestOptions({ headers: headers });
    }
  }


}
