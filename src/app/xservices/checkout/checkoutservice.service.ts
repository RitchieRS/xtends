import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CheckoutReq } from 'src/app/xmodels/checkout';
import { UserResponse, User, UserRest, ProfileResp, UserProfile } from 'src/app/xmodels/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CheckoutserviceService  {

  constructor(private http : HttpClient) { }



  checkout(token : string, dataCheck : any):Observable<CheckoutReq >{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.post<CheckoutReq>(`${environment.API_URL}visitas/checkout`,dataCheck,httpOptions).pipe(
          map(( res : CheckoutReq )=> {
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

