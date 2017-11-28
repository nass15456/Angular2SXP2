import { Component } from '@angular/core';
import { User } from './user';
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
  currentUser: User;
  model: any = {};
  set: boolean = false;
  loginForm:boolean = false;
  loginForms:boolean = true;
  acount : boolean = false;
  search:boolean = false;
  subscribe:boolean = false;
  item:boolean = false;
connected : boolean ;
lgout : boolean = false;
logged : boolean = true;
con : boolean = false;
contrac : boolean = false ;



  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService:AlertService,



  ) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

 items()
 {
   this.contrac = false ;
   this.con =false;
   this.acount= false;
   this.set = false;
   this.loginForms=false;
   this.search =false;
   this.subscribe = false;
   this.loginForm = false;
   this.item = true ;
 }

  login1()
  {
    this.contrac = false ;
    this.con =false;
    this.acount= false;
    this.set = false;
    this.loginForms=false;
    this.search =false;
    this.subscribe = false;
    this.loginForm= true;
    this.item = false;

  }
  settingUp()
  {
    this.contrac = false ;
    this.con =false;
    this.acount= false;
    this.set = true;
    this.loginForms=false;
    this.search =false;
    this.subscribe = false;
    this.loginForm= false;
    this.item = false;
  }
  searchIt()
  {
    this.contrac = false ;
    this.con =false;
    this.acount= false;
    this.set = false;
    this.search =true;
    this.loginForm=false;
    this.subscribe = false;
    this.loginForms= false;
    this.item = false;
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



  sub()
  {
    this.contrac = false ;
    this.con =false;
    this.acount= false;
    this.set = false;
    this.search =false;
    this.loginForm=false;
    this.subscribe = true;
    this.loginForms= false;
    this.item = false;
  }
  success(message: string) {
    this.alertService.success(message);
  }
  success3(){
    this.alertService.success('Registration successful', true);

  }

  isConnected()
  {
    if (this.currentUser === undefined) {
     return false;
    }else {
      return true;
    }

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
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.connected = false;
     this.logged = true;
    this.lgout = false;
  }

  acounts()
  {
    this.contrac = false ;
    this.con =false;
    this.acount= true;
    this.set = false;
    this.search =false;
    this.loginForm=false;
    this.subscribe = false;
    this.loginForms= false;
    this.item = false;
  }

  contact()
  {
    this.contrac = false ;
    this.con =true;
    this.acount= false;
    this.set = false;
    this.search =false;
    this.loginForm=false;
    this.subscribe = false;
    this.loginForms= false;
    this.item = false;
  }
  

  contract()
  {
    this.contrac = true ;
    this.con = false;
    this.acount= false;
    this.set = false;
    this.search =false;
    this.loginForm=false;
    this.subscribe = false;
    this.loginForms= false;
    this.item = false;
  }
}

