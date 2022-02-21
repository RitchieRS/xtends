import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CheckinReq } from 'src/app/xmodels/checkin';
import { UserResponse, User, UserRest, ProfileResp, UserProfile } from 'src/app/xmodels/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CheckinserviceService  {

  constructor(private http : HttpClient) { }

  

  checkin(token : string, dataCheck : any):Observable<CheckinReq >{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.post<CheckinReq>(`${environment.API_URL}visitas/checkin`,dataCheck,httpOptions).pipe(
          map(( res : CheckinReq )=> {
            console.log(res);
            return res; 
          }),
          catchError((err)=> this.handeleError(err))
    );
  };
  checkout(token : string, dataCheck : any):Observable<CheckinReq >{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.post<CheckinReq>(`${environment.API_URL}visitas/cheout`,dataCheck,httpOptions).pipe(
          map(( res : CheckinReq )=> {
            console.log(res);
            return res; 
          }),
          catchError((err)=> this.handeleError(err))
    );
  };



  private handeleError(err) : Observable<never>{
    let erroMessage = "An error has ocurred";
    if(err){
      erroMessage  = `Err code:${err.message}`;
    }
    window.alert(erroMessage);
    return throwError(erroMessage);

  }

}

