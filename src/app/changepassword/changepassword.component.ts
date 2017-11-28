import { Component, OnInit } from '@angular/core';
import {  AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
 loading : boolean = true;
  model: any = {};
  currentUrl  : string;
  currentUser: User;
  constructor(private authenticationService: AuthenticationService,

              ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUrl =  localStorage.getItem('currentUrl');
  }
  body = `password=${this.model.password}&passwordNew=${this.model.new}&passwordConfirm=${this.model.confirm}`;


  ngOnInit() {
  }



  changepass(){

    this.authenticationService.change(this.currentUrl,`password=${this.model.password}&passwordNew=${this.model.new}&passwordConfirm=${this.model.confirm}`,this.loading,this.currentUser.token).subscribe(
      data => {
        //  console.log("fine login="+  this.model.login+"password : "+this.model.password);

      },
      error => {
        //console.log("not fine login="+  this.model.login+ "password : "+this.model.password);


      });
  }
}
