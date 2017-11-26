import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { items } from './items';
@Injectable()
export class ItemsService {

  constructor(private http: Http) {



  }


  getAll() {
    return this.http.get('https://localhost:8081/api/items', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: string) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }
  getAc(id: string) {
    return this.http.get('https://localhost:8081/api/users/'+ id, this.jwt()).map((response: Response) => response.json());
  }
  getSh(id: string) {

    return this.http.get('https://localhost:8081/api/search/simple?title='+id, this.jwt2()).map((response: Response) => response.json());


  }



  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    ;

    if (currentUser && currentUser.token) {

      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });


      return new RequestOptions({ headers: headers });
    }
  }

  private jwt2() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('item'))
    ;

    if (currentUser && currentUser.token) {
   console.log(currentUser);
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });


      return new RequestOptions({ headers: headers });
    }
  }










}
