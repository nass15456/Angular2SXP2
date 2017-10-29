import { Component } from '@angular/core';
import {Http} from "@angular/http";
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
  search:boolean = false;
  subscribe:boolean = false;



  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    ) { }


  login()
  {
    this.loginForm=true;
    this.search =false;
    this.subscribe = false;


  }
  searchIt()
  {
    this.search =true;
    this.loginForm=false;
    this.subscribe = false;
  }



  toUpperCase () {
    this.u.username = this.u.username.toUpperCase();
  }

  sub()
  {
    this.search =false;
    this.loginForm=false;
    this.subscribe = true;
  }
  logs()
  {

    if(this.model.username.length > 0 )
    {   console.log(this.model.username);
         let formdata = new FormData();
         formdata.append('username', this.model.username);
         formdata.append('password', this.model.password);
      console.log(this.model.password);


      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
          console.log('succes');
          },
          error => {

            this.loading = false;
          });


    }
  }


}

