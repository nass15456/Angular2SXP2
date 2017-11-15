import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,

    private authenticationService: AuthenticationService,
  ) {

  }
  model: any = {};
  loading = false;
  body = `login=${this.model.login}&password=${this.model.password}`;


  ngOnInit() {
  }
  loginDb(){
    this.loading = true;
    this.authenticationService.loginDb(`login=${this.model.login}&password=${this.model.password}`,this.loading).subscribe(
        data => {
        //  console.log("fine login="+  this.model.login+"password : "+this.model.password);

        },
        error => {
          //console.log("not fine login="+  this.model.login+ "password : "+this.model.password);

        });
  }


}
