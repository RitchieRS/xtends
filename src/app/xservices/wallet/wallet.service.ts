import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WalletResponse, EarnedMoney, Transfer, MoneyTransfer } from 'src/app/xmodels/wallet';
import { MovimientoResponse } from 'src/app/xmodels/movements';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  getWalletInformation(token : string):Observable<WalletResponse | void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    const request = {};

    return this.http.post<WalletResponse>(`${environment.API_URL}wallet`,request ,httpOptions).pipe(
          map(( res : WalletResponse)=>{
            console.log(res);
            return res;
          }),
          catchError((err)=> this.handeleError(err))
    );
  };

  getWalletMovements(token : string):Observable<MovimientoResponse | void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    const request = {};

    return this.http.post<MovimientoResponse>(`${environment.API_URL}wallet/details`,request ,httpOptions).pipe(
          map(( res : MovimientoResponse)=>{
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

  postMoneyTransfer(token: string): Observable<MoneyTransfer | void>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization' : token
      }),
      responseType: 'json' as 'json'
    };

    const request = {};

    return this.http.post<MoneyTransfer>(`${environment.API_URL}wallet/transfer`,request ,httpOptions).pipe(
          map(( res: MoneyTransfer)=>{
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
