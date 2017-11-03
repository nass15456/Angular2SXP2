import { BrowserModule } from '@angular/platform-browser';
import {  AuthenticationService } from './authentication.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    SearchComponent,
    LoginComponent,
    SubscribeComponent
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
         }


      ]
    )

  ],
  providers: [ AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
