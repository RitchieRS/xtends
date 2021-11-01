import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse,User } from 'src/app/xmodels/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(authData: User): Observable<any>{
    return this.http.post<UserResponse>(`${environment.API_URL}`, authData).pipe(
          map(( user :  UserResponse)=>{

          })
        );
  };
  logauth(): void{}
  private readToken():void{}
  private saveToken():void{}
  private handeleError():void{}



}
