import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Home , ReqHome} from 'src/app/xmodels/home';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { InfoService } from 'src/app/xservices/user/info.service';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient,private saveInfoUsers : InfoService) { }

  getDataHome( token : string):Observable<Home| void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.get<Home>(`${environment.API_URL}home`,httpOptions).pipe(
          map(( res :  Home)=> {return res; }),
          catchError((err)=> this.handeleError(err))
    );
  };


  private handeleError(err:any) : Observable<never>{
    let erroMessage = "An error has ocurred";
    if(err){
      erroMessage  = `Err code:${err.message}`;
    }
    window.alert(erroMessage);
    return throwError(erroMessage);

  }




}
