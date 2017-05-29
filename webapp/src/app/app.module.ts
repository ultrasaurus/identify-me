// Angular 
import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { RouterModule, Routes }       from '@angular/router';

// Angular Material
import { MaterialModule }             from '@angular/material';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';

// AngularFire2
import { AngularFireModule }          from 'angularfire2';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { AngularFireAuthModule }      from 'angularfire2/auth';

// App stuff
import { environment } from '../environments/environment';

import { AppComponent }     from './app.component';
import { routes }           from './app.router';
import { AuthGuard }        from './auth.guard';
import { UserService }      from './user.service';

import { LoginComponent }   from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    ToolbarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    routes
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
