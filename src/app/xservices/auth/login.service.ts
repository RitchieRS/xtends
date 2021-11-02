import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserResponse,User } from 'src/app/xmodels/user';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  private loggedIn =  new BehaviorSubject<boolean>(false);

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(`${environment.API_URL}`, authData).pipe(
          map(( res :  UserResponse)=>{
            console.log('Usuario'+res.token);
            this.saveToken(res.token);
            this.loggedIn.next(true);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
        );
  };
  logauth(): void{}
  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    this.loggedIn.next(false);
  }
  private saveToken(token: string):void{
    localStorage.setItem('token',token);
  }
  private handeleError(err) : Observable<never>{
    let erroMessage = "An error has ocurred";
    if(err){
      erroMessage  = `Err code:${err.message}`;
    }
    window.alert(erroMessage);
    return throwError(erroMessage);

  }



}
