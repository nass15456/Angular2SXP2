import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { items } from './items';
@Injectable()
export class ItemsService {
Item : items ;
  constructor(private http: Http) {



  }
/* create new item */
  create(item: {}) {
    return this.http.post('https://localhost:8081/api/items', item, this.jwt4()).map((response: Response) => response.json());
  }



  /* get all items of specified user   */
  getAll(url : string) {
    return this.http.get(url+'/api/items', this.jwt4()).map((response: Response) => response.json());
  }


  /* get user by id  */

  getById(id: string) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }



  /* function search   */

  getSh(id: string,url : string) {

    return this.http.get(url+'/api/search/simple?title='+id, this.jwt2()).map((response: Response) => response.json());





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



  /* return the result of search in get method  */


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


  /* add authentication token in header to identify user    */


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
