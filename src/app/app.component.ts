import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {  AuthenticationService } from './authentication.service'
import { AlertService } from './alert.service';
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
    private alertService:AlertService

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
  success(message: string) {
    this.alertService.success(message);
  }
  success3(){
    this.alertService.success('Registration successful', true);

  }

  success1(message: string) {
    this.alertService.success(message);
    console.log("alert");
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

