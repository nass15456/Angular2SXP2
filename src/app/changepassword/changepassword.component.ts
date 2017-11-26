import { Component, OnInit } from '@angular/core';
import {  AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
 loading : boolean = true;
  model: any = {};
  constructor(private authenticationService: AuthenticationService) { }
  body = `password=${this.model.password}&passwordNew=${this.model.new}&passwordConfirm=${this.model.confirm}`;
  ngOnInit() {
  }



  changepass(){

    this.authenticationService.changepass(`password=${this.model.password}&passwordNew=${this.model.new}&passwordConfirm=${this.model.confirm}`,this.loading).subscribe(
      data => {
        //  console.log("fine login="+  this.model.login+"password : "+this.model.password);

      },
      error => {
        //console.log("not fine login="+  this.model.login+ "password : "+this.model.password);


      });
  }
}
