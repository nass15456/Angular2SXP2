import { BrowserModule } from '@angular/platform-browser';
import {  AuthenticationService } from './authentication.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';
import { UserserviceService } from './userservice.service';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContractsService } from './contracts.service';
import { AlertService } from './alert.service';
import { SettingComponent } from './setting/setting.component';
import { AlertComponent } from './alert/alert.component';
import { ItemsService } from './items.service';
import { ItemComponent } from './item/item.component';
import { AcountComponent } from './acount/acount.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddComponent } from './add/add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContractComponent } from './contract/contract.component';
@NgModule({
  declarations: [
    AppComponent,
    /*AlertComponent,*/
    MenuComponent,
    ContactComponent,
    SearchComponent,
    LoginComponent,
    SubscribeComponent,
    SettingComponent,
    AlertComponent,
    ItemComponent,
    AcountComponent,
    ChangepasswordComponent,
    AddComponent,
    NavbarComponent,
    ContractComponent


  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
        {
           path: 'contact',
          component : ContactComponent
        },
        {
        path: 'search',
        component : SearchComponent
        }
        ,
        {
          path: 'login',
          component : LoginComponent
        }
        ,{
          path: 'subscribe',
          component : SubscribeComponent
         },
         {
          path: 'setting',
          component :  SettingComponent
         },
      {
        path: 'item',
        component : ItemComponent
      },
      {
        path: '',
        component : LoginComponent
      },
      {
        path: 'acount',
        component :AcountComponent
      },
      {
        path: 'changepassword',
        component :ChangepasswordComponent
      }
       ,
      {
         path : 'contact',
        component : ContactComponent
      },
      {
        path :'addItem',
        component : AddComponent,
      },
      {
        path :'contract',
        component :  ContractComponent,
      }
      ]
    )

  ],
  providers: [ AuthenticationService,UserserviceService,AlertService,ItemsService,ContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
