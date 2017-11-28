import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { contrat } from '../contrat';
import { ContractsService } from '../contracts.service';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  currentUser: User;

  cont : contrat[] = [];
  currentUrl: string ;
  constructor(private  contratserv :ContractsService ) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUrl =  localStorage.getItem('currentUrl');
  }

  ngOnInit() {
    this.loadAllcontract();
  }

  private loadAllcontract() {
    this.contratserv.getAll(this.currentUrl).subscribe(cont => { this.cont = cont; });

  }

}
