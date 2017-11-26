import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ItemsService } from '../items.service';
@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent implements OnInit {
  currentUser: User;

  use: User;
  constructor(
              private authentificate :ItemsService ) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {
    this.setAcount();

  }
  setAcount(){

    this.authentificate.getAc(this.currentUser.userid).subscribe(use => { this.use = use; });
  }
}
