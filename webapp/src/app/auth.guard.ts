import { Injectable, NgZone }           from '@angular/core';
import { ActivatedRouteSnapshot, 
         CanActivate, 
         Router, RouterStateSnapshot }  from '@angular/router';
import { Observable }                   from 'rxjs/Observable';
import { UserService }                  from './user.service';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {
      console.log('constructor LoggedIn');
  }

  activationCheck(state):Observable<boolean>{
    return this.userService.user$.do(user => {
      if (user == null) {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      }
      return user;
    }).map(user => {
        return (user != null);  // allow if authenticated
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('canActivate');
    return this.activationCheck(state)
  }
}