import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService } from '../user-service.service';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-subscribe',
 templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
 model: any = {};
  loading = false;
  constructor(
   private router: Router,
// private userService: UserServiceService,
  //private alertService: AlertService

  ) {


  }

  ngOnInit() {
  }
 /* register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
         console.log("fine");
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }*/
}
