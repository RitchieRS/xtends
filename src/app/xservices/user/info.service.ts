import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserResponse,User, UserRest, ProfileResp, UserProfile } from 'src/app/xmodels/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http : HttpClient) { }

  public setInformation(data : UserRest):void{
    console.log("Start save Data");
    localStorage.setItem('apat',data.apat);
    localStorage.setItem('email',data.email);
    localStorage.setItem('nombre',data.nombre);
    localStorage.setItem('nombreCompleto',data.nombreCompleto);
  }

  getProfileInformation(token : string):Observable<UserProfile| void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.get<UserProfile>(`${environment.API_URL}user`,httpOptions).pipe(
          map(( res :  UserProfile)=> {
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
