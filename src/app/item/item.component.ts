import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { items } from '../items';

import { ItemsService } from '../items.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  currentUser: User;

  items: items[] = [];
  currentUrl: string ;

  constructor(private itemService: ItemsService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUrl =  localStorage.getItem('currentUrl');
  }

  ngOnInit() {
    this.loadAllItems();
  }


  private loadAllItems() {
    this.itemService.getAll(this.currentUrl).subscribe(items => { this.items = items; });

  }
}
