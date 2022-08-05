import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { LoginService } from '../auth/login.service';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private srvUser: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.srvUser.isLogged) {
      return true;
    }
    console.log("sTATE");
    console.log(state.url);
    this.router.navigate(['/auth'], { queryParams: { redirectTo: state.url } });

    return false;
  }

  
}