import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
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
private userService:UserserviceService ,
private alertService: AlertService

  ) {


  }

  ngOnInit() {
  }


 register() {
    this.loading = true;
    this.userService.create(`login=${this.model.login}&password=${this.model.password}`)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
         console.log("fine");
          this.router.navigate(['/login']);
        },
        error => {
   this.alertService.error(error);
          console.log(" not fine");

          this.loading = false;

        });
  }
}
