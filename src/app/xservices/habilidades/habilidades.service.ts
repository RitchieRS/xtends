import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {


  constructor(private http: HttpClient) { }

  postHabilidades(request: any, token: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.post<any>(`${environment.API_URL}training`, request, httpOptions).pipe(
          map(( res: any)=>{
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
