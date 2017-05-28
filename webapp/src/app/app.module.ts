import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { RouterModule, Routes }       from '@angular/router';


import { AngularFireModule }          from 'angularfire2';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { AngularFireAuthModule }      from 'angularfire2/auth';

import { AppComponent }     from './app.component';
import { routes }           from './app.router';
import { AuthGuard }           from './auth.guard';
import { UserService }      from './user.service';

import { LoginComponent }   from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routes
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
