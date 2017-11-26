import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { User } from '../user';
@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  message: any;
  currentUser: User;
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }
}
