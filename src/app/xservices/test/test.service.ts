import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CursoIntf } from 'src/app/xmodels/curso';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  getTest(token: string, idCurso: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.get<any>(`${environment.API_URL}trainings/sondeo/${idCurso.toString()}`, httpOptions).pipe(
          map(( res )=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };


  postTest(token: string, request: any): Observable<any>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<any>(`${environment.API_URL}trainings/send`,request ,httpOptions).pipe(
          map(( res:  any)=>{
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
