import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';
import { AuthGuard }            from './auth.guard';
import { LoginComponent }       from './login/login.component';
import { ProfileComponent }     from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
 ];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
