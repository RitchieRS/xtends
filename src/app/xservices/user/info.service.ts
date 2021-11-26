import { Injectable } from '@angular/core';
import { UserResponse,User, UserRest } from 'src/app/xmodels/user';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  public setInformation(data : UserRest):void{
    console.log("Start save Data");
    localStorage.setItem('apat',data.apat);
    localStorage.setItem('email',data.email);
    localStorage.setItem('nombre',data.nombre);
    localStorage.setItem('nombreCompleto',data.nombreCompleto);
  }
}
