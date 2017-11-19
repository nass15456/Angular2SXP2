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
import { SettingsComponent } from './settings/settings.component';
import { AlertService } from './alert.service';
import { SettingComponent } from './setting/setting.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    /*AlertComponent,*/
    MenuComponent,
    ContactComponent,
    SearchComponent,
    LoginComponent,
    SubscribeComponent,
    SettingsComponent,
    SettingComponent,
    AlertComponent,


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
          path: 'settings',
           component : SettingsComponent
         }


      ]
    )

  ],
  providers: [ AuthenticationService,UserserviceService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
