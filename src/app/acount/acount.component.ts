import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ItemsService } from '../items.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent implements OnInit {
  currentUser: User;

  use: User;
  currentUrl : string ;

  constructor(
              private authentificate : AuthenticationService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUrl =  localStorage.getItem('currentUrl');
  }

  ngOnInit() {
    this.setAcount();

  }
  setAcount(){

    this.authentificate.getAc(this.currentUser.userid,this.currentUrl).subscribe(use => { this.use = use; });
  }
}
