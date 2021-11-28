import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/xservices/auth/login.service';
import { take,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private auth : LoginService){}
  canActivate(): Observable<boolean>{
    return this.auth.isLogged.pipe(
      take(1),
      map((isLogged: boolean)=>!isLogged)
    )
    
  }
 
  
}
