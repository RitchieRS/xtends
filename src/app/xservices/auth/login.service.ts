import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserResponse,User, UserRest, UserRegister,UserRegisterResponse } from 'src/app/xmodels/user';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { InfoService } from 'src/app/xservices/user/info.service';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient,private saveInfoUsers : InfoService) { }

  
  
  private loggedIn =  new BehaviorSubject<boolean>(false);
  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User):Observable<UserResponse| void>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
  //{"user": "benjamin.glz@gmail.com","pass": "B3nj4miiin.!hdu3kS}"
      
    return this.http.post<UserResponse>(`${environment.API_URL}login`, authData).pipe(
          map(( res :  UserResponse)=>{
            if(res.resp.usuario!==undefined){
                this.saveToken(res.resp.usuario.token);
                this.loggedIn.next(true);
                this.saveInfoUsers.setInformation(res.resp.usuario);
            }
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };


  logauth(): void{}
  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logauth() : this.loggedIn.next(true);
    
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


  register(regData: UserRegisterResponse):Observable<UserRegisterResponse| void>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  //{"user": "benjamin.glz@gmail.com","pass": "B3nj4miiin.!hdu3kS}"
      
    return this.http.post<UserRegisterResponse>(`${environment.API_URL}signup`, regData).pipe(
          map(( res :  UserRegisterResponse)=>{
            if(res.resp.usuario!==undefined){
              this.saveToken(res.resp.usuario.token);
              this.saveInfoUsers.setInformation(res.resp.usuario);
            }
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };



}
