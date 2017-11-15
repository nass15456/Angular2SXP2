import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {  AuthenticationService } from './authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

u: any = {};

  model: any = {};
  set: boolean = false;
  loginForm:boolean = false;
  loginForms:boolean = true;
  search:boolean = false;
  subscribe:boolean = false;



  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,

    ) { }



  login1()
  {this.set = false;
    this.loginForms=false;
    this.search =false;
    this.subscribe = false;
    this.loginForm= true;

  }
  settingUp()
  {  this.set = true;
    this.loginForms=false;
    this.search =false;
    this.subscribe = false;
    this.loginForm= false;
  }
  searchIt()
  {this.set = false;
    this.search =true;
    this.loginForm=false;
    this.subscribe = false;
    this.loginForms= false;
  }
  downLogin()
  {this.set = false;
    this.loginForm=false;
    this.loginForms= false;
  }
  upLogin()
  {
    this.set = false;
    this.loginForms= true;
  }

  toUpperCase () {
    this.u.username = this.u.username.toUpperCase();
  }

  sub()
  {this.set = false;
    this.search =false;
    this.loginForm=false;
    this.subscribe = true;
    this.loginForms= false;
  }
  /*logindb() {
    this.loading = true;
    this.authenticationService.logine(this.model.login, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {

          this.loading = false;
        });
  }*/

}

