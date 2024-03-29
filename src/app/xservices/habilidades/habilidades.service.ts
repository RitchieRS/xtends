import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CursoIntf, HabilidadesAll} from 'src/app/xmodels/curso';
import { FHabilidad } from 'src/app/xmodels/filter-habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {


  constructor(private http: HttpClient) { }

  getHabilidades(token: string, idCurso: any): Observable<CursoIntf>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.get<CursoIntf>(`${environment.API_URL}trainings/${idCurso.toString()}`, httpOptions).pipe(
          map(( res )=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  getXProyect(token: string, idCliente: string, idProyecto : string): Observable<FHabilidad>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    ///api/skills/idCliente/idProyecto
    return this.http.get<FHabilidad>(`${environment.API_URL}skills/${idCliente}/${idProyecto}`, httpOptions).pipe(
          map(( res )=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };


  getAll(token: string): Observable<HabilidadesAll>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    ///api/skills/idCliente/idProyecto
    return this.http.get<HabilidadesAll>(`${environment.API_URL}user/skills`, httpOptions).pipe(
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
