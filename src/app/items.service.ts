import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { items } from './items';
@Injectable()
export class ItemsService {
Item : items ;
  constructor(private http: Http) {



  }

  create(item: {}) {
    return this.http.post('https://localhost:8081/api/items', item, this.jwt4()).map((response: Response) => response.json());
  }

  getAll() {
    return this.http.get('https://localhost:8081/api/items', this.jwt4()).map((response: Response) => response.json());
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

      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token.userid });


      return new RequestOptions({ headers: headers });
    }
  }

  try() {
    return this.http.get('https://localhost:8081/api/items')
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let users = response.json();
        if (users && users.token) {
          console.log(users);
        }else {

        }
      });
  }



  private jwt3(userid : string, token : string) {


// create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('item'))
    ;

    if (currentUser && currentUser.token) {
      console.log(currentUser);

      let headers = new Headers({ 'Auth-Token':token});
      console.log(headers);
      headers.set('Accept',token);

      return this.http.get('https://localhost:8081/api/search/simple?title='+this.jwt3(userid,token)).map((response: Response) => response.json());
    }

  }

  private jwt2() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('item'))
    ;

    if (currentUser && currentUser.token) {
   console.log(currentUser);
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token.userid});
      headers.append('Content-Type', 'application/json');

      return this.http.get('https://localhost:8081/api/search/simple?title='+this.jwt2()).map((response: Response) => response.json());
    }



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
