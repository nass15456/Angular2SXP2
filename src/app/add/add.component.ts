import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { User } from '../user';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  currentUser: User;
  constructor(

    private router: Router,
    private itemService: ItemsService,
    private alertService: AlertService
  ) {  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
  model = {
    title: '',
    description:''

  } ;
  ngOnInit() {
  }
  addItem() {

    this.itemService.create(JSON.stringify(this.model))
      .subscribe(
        data => {
          this.alertService.success('Adding successful', true);
          this.router.navigate(['/items']);
        },
        error => {
          this.alertService.error(error);

        });
  }

}



