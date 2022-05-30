import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Wallet, EarnedMoney, Transfer, MoneyTransfer, OrdenTransfer } from 'src/app/xmodels/wallet';
import { Movimiento } from 'src/app/xmodels/movements';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  getWalletInformation(token : string):Observable<Wallet | void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    const request = {};

    return this.http.get<Wallet>(`${environment.API_URL}wallet`,httpOptions).pipe(
          map(( res : Wallet)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  // getWalletMovements(token : string):Observable<MovimientoResponse | void>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Accept': 'text/html',
  //       'Content-Type': 'application/json',
  //       'Authorization' : token
  //     }),
  //     responseType: 'json' as 'json'
  //   };

  //   const request = {};

  //   return this.http.get<MovimientoResponse>(`${environment.API_URL}wallet/details`,httpOptions).pipe(
  //         map(( res : MovimientoResponse)=>{
  //           console.log(res);
  //           return res;
  //         }),
  //         catchError((err)=> this.handeleError(err))
  //   );
  // };

  getWalletMovements(token: string): Observable<Movimiento | void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    const request = {};

    return this.http.get<Movimiento>(`${environment.API_URL}wallet/movements`,httpOptions).pipe(
          map(( res: Movimiento)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  getEarnedMoney(token: string): Observable<EarnedMoney>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    return this.http.get<EarnedMoney>(`${environment.API_URL}wallet/details`,httpOptions).pipe(
          map(( res: EarnedMoney)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  getTransfer(token: string): Observable<Transfer>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    return this.http.get<Transfer>(`${environment.API_URL}wallet/user`,httpOptions).pipe(
          map(( res: Transfer)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  postMoneyTransfer(token: string,request:any): Observable<MoneyTransfer | void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

   // const request = {};

    return this.http.post<MoneyTransfer>(`${environment.API_URL}wallet/transfer`,request ,httpOptions).pipe(
          map(( res: MoneyTransfer)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };


  getTransferExitosa(token: string, noOperacion: string): Observable<OrdenTransfer>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    return this.http.get<OrdenTransfer>(`${environment.API_URL}wallet/transfer/details/${noOperacion}`,httpOptions).pipe(
          map(( res: OrdenTransfer)=>{
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
