import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserserviceService } from './userservice.service';
import { AlertService } from './alert.service';
import { User } from './user';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {current} from "codelyzer/util/syntaxKind";

@Injectable()
export class AuthenticationService {
  currentUser: User;
  users: User[] = [];
  data1 : String;

  constructor(private http: Http,
  private router :Router ,
             private alertService : AlertService
             /* private userService : UserServiceService*/)


{  /* this.currentUser = JSON.parse(localStorage.getItem('currentUser'))*/ }

  loginDb(url :string, loginss : string, loading :boolean) {
    console.log(url+'/api/users/login');
    return this.http.post(url+'/api/users/login',  loginss)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem('currentUser', JSON.stringify(user) );
          localStorage.setItem('currentUrl', url);
            console.log("userid =", user.userid);

          console.log("fine login");
          this.alertService.success('user connected ', true);
          loading = true;

          this.router.navigate(['item']);
        }else {
          console.log("not fine ");
          this.alertService.error('wrong password or username', true);
        }
      });
  }

  /** function change password */


 change(url : string, loginss : string, loading :boolean, token : string) {
   let headers = new Headers({ 'Auth-Token':token});
   let options = new RequestOptions({ headers: headers })
    return this.http.post(url+'/api/users/password', loginss,{ headers: headers } )
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem('currentUser', JSON.stringify(user) );
          console.log("userid =", user.userid);

          console.log("fine login");
          this.alertService.success('password changed ', true);
          loading = true;

          this.router.navigate(['login']);
        }else {
          console.log("not fine ");
          this.alertService.error('wrong password ', true);
        }
      });
  }

  /* get user info :  username , id , public key */

  getAc(id: string,url :string) {
    return this.http.get(url+'/api/users/'+ id, this.jwt4()).map((response: Response) => response.json());
  }
  acountload(loginss : string) {
    return this.http.get('https://localhost:8081/api/users/'+loginss)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let users = response.json();
        if (users && users.token) {
        console.log(users);
        }else {

        }
      });
  }

  private jwt4() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Auth-Token':currentUser.token});
      return new RequestOptions({ headers: headers });
    }


  }

}
