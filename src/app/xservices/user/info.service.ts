import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserResponse, User, UserRest, ProfileResp, UserProfile, Informacion, Credenciales } from 'src/app/xmodels/user';
import { environment } from 'src/environments/environment';


interface LocalFile {
  name: string;
  path: string;
  data: string;
}


@Injectable({
  providedIn: 'root'
})

export class InfoService {

  constructor(private http : HttpClient) { }

  public setInformation(data: UserRest):void{
    console.log("Start save Data");
    localStorage.setItem('apat',data.apat);
    localStorage.setItem('email',data.email);
    localStorage.setItem('nombre',data.nombre);
    localStorage.setItem('nombreCompleto',data.nombreCompleto);
  }

  public logOut(data : UserRest):void{
    console.log("Start save Data");
    localStorage.setItem('apat',undefined);
    localStorage.setItem('email',undefined);
    localStorage.setItem('nombre',undefined);
    localStorage.setItem('nombreCompleto',undefined);
  }

    ///api/user/credential
    dtcCredential(token: string): Observable < any | void>{
      console.log( token );
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'text/html',
          'Content-Type': 'application/json',
          'Authorization' : token
        }),
        responseType: 'json' as 'json'
      };
      const request = {};
      return this.http.post<any>(`${environment.API_URL}user/credential`,request ,httpOptions).pipe(
        map(( res: any)=> {
          console.log(res);
          return res;
        }),
            catchError((err)=> this.handeleError(err))
      );
    };

    ///view credential in app
    getCredentialJpg(token: string): Observable < any | void>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'text/html',
          'Content-Type': 'application/json',
          'Authorization' : token
        }),
        responseType: 'json' as 'json'
      };
      const request = {};
      return this.http.get<any>(`${environment.API_URL}user`,httpOptions)
      .pipe(
        map(( res: any)=> {
          // console.log(res.resp.credenciales.urlCredencialImg);
          return res;
        }),
            catchError((err)=> this.handeleError(err))
      );
    };

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
  ///api/user/cities
  getCitiesInformation(token : string):Observable<any| void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };
    return this.http.get<any>(`${environment.API_URL}user/cities`,httpOptions).pipe(
          map(( res :  any)=> {
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };


  async updateProfileInformation(token : string,infoUser: Informacion, _file : LocalFile):Promise<Observable<Informacion | void>>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<Informacion>(`${environment.API_URL}user`,infoUser,httpOptions).pipe(
          map(( res :  any)=> {
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  sendSelfFoto(request : any ,token : string):Observable<any>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<any>(`${environment.API_URL}user/photo`,request ,httpOptions).pipe(
          map(( res :  any)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  sendCURPFoto(request : any ,token : string):Observable<any>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<any>(`${environment.API_URL}visitas/sondeo`,request ,httpOptions).pipe(
          map(( res :  any)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  sendDomFoto(request : any ,token : string):Observable<any>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<any>(`${environment.API_URL}user/dom`,request ,httpOptions).pipe(
          map(( res :  any)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  sendINEFoto(request : any ,token : string):Observable<any>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<any>(`${environment.API_URL}user/iner`,request ,httpOptions).pipe(
          map(( res :  any)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  // SERVICIO DE ENVIO A DB FIRMA
  sendFirma(request: any ,token: string): Observable<any>{
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };


    return this.http.post<any>(`${environment.API_URL}user/signature`,request ,httpOptions).pipe(
          map(( res:  any)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

    // SERVICIO DE FIRMA
    sendMail(token : string, request : any):Observable<any>{
      console.log(request);
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'text/html',
          'Content-Type': 'application/json',
          'Authorization' : token
        }),
        responseType: 'json' as 'json'
      };


      return this.http.post<any>(`${environment.API_URL}mail`,request ,httpOptions).pipe(
            map(( res :  any)=>{
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
