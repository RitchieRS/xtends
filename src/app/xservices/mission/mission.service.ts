import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ReqMission, Mission, ResMissionAccepted, AMission, MisionSection3, ContentMission} from 'src/app/xmodels/missions';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sondeo } from 'src/app/xmodels/sondeo';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  getMissionXTiendaProyecto(request: ReqMission,token: string): Observable<Mission | void>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<Mission>(`${environment.API_URL}missions`,request ,httpOptions).pipe(
          map(( res:  Mission)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  acceptMissionXTiendaProyecto(request: ReqMission,token: string): Observable<ResMissionAccepted >{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<Mission>(`${environment.API_URL}missions/accept`,request ,httpOptions).pipe(
          map(( res :  Mission)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  sendSondeo(request : any ,token : string):Observable<ResMissionAccepted >{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<Mission>(`${environment.API_URL}visitas/sondeo`,request ,httpOptions).pipe(
          map(( res :  Mission)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  getSondeoXmission(token: string, request: any): Observable<Sondeo>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<Sondeo>(`${environment.API_URL}sondeos`,request ,httpOptions).pipe(
          map(( res:  Sondeo)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };


  // <servicio Detalle de la mision | sondeo>
  srvSondeoMission(token: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.post<any>(`${environment.API_URL}visitas/view/`,httpOptions).pipe(
          map(( res: any)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };




  // <servicio de missiones por estado>
  // getMissionSondeo(token: string): Observable<AMission>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Accept': 'text/html',
  //       'Content-Type': 'application/json',
  //       'Authorization' : token
  //     }),
  //     responseType: 'json' as 'json'
  //   };


  //   return this.http.get<any>(`${environment.API_URL}missions/user`,httpOptions).pipe(
  //         map(( res: any)=>{
  //           console.log(res);
  //           return res;
  //         }),
  //         catchError((err)=> this.handeleError(err))
  //   );
  // };
  // </servicio de missiones por estado>
  getValeChiles(request: ReqMission, token: string): Observable<AMission | void>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    return this.http.get<AMission>(`${environment.API_URL}missions/user`, httpOptions).pipe(
          map(( res:  AMission)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };



  getMissionXuser(token : string):Observable<AMission>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.get<AMission>(`${environment.API_URL}missions/user`,httpOptions).pipe(
          map(( res:  AMission)=>{
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


  public keepMissionInfo(data : any):void{
    console.log("Start save Data");
    localStorage.setItem('idPV',data.idPV);

  }

}
