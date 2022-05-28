import { Injectable } from '@angular/core';
import { Help } from 'src/app/xmodels/help';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(
    private http: HttpClient
  ) { }

  getHelp(): Observable<Help>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
      }),
      responseType: 'json' as 'json'
    };
    return this.http.get<Help>(`${environment.API_URL}faqs`, httpOptions).pipe(
          map(( res )=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  private handeleError(err): Observable<never>{
    let erroMessage = 'An error has ocurred';
    if(err){
      erroMessage  = `Err code:${err.message}`;
    }
    window.alert(erroMessage);
    return throwError(erroMessage);

  }


}
