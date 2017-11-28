import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { ItemsService } from '../items.service';
import {items} from "../items";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  item : items[][] = [];
  model: any = {};
  find : boolean = false;
  currentUrl : string ;
  constructor(private user :UserserviceService,
              private authentificate :ItemsService   ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.item = JSON.parse(localStorage.getItem('item'));
    this.currentUrl =  localStorage.getItem('currentUrl');
  }

  ngOnInit() {
  }

  setSh(){

    this.authentificate.getSh(this.model.search,this.currentUrl).subscribe(item => { this.item =item ; });
 console.log(this.item);
  }

}
