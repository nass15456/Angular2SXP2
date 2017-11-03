import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {  AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

u: any = {};

  model: any = {};
  loginForm:boolean = true;
  loginForms:boolean = true;
  search:boolean = false;
  subscribe:boolean = false;



  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,

    ) { }


  login()
  {
    this.loginForms=false;
    this.search =false;
    this.subscribe = false;
    this.loginForm= true;

  }
  searchIt()
  {
    this.search =true;
    this.loginForm=false;
    this.subscribe = false;
    this.loginForms= false;
  }
  downLogin()
  {
    this.loginForm=false;
    this.loginForms= false;
  }
  upLogin()
  {

    this.loginForms= true;
  }

  toUpperCase () {
    this.u.username = this.u.username.toUpperCase();
  }

  sub()
  {
    this.search =false;
    this.loginForm=false;
    this.subscribe = true;
    this.loginForms= false;
  }


}

