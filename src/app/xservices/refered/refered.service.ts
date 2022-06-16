import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ReqMission,Mission, ResMissionAccepted, AMission} from 'src/app/xmodels/missions';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReferedQR, MissionsRef } from 'src/app/xmodels/refered';
@Injectable({
  providedIn: 'root'
})
export class ReferedService {

  constructor(private http : HttpClient) {

   }


   getCodeRefered(token : string):Observable<ReferedQR>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.get<any>(`${environment.API_URL}referred`,httpOptions).pipe(
          map(( res :  ReferedQR)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

   private handeleError(err): Observable<never>{
    let erroMessage = "An error has ocurred";
    if(err){
      erroMessage  = `Err code:${err.message}`;
    }
    window.alert(erroMessage);
    return throwError(erroMessage);
  }
}
