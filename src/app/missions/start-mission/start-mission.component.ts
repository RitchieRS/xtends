import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCaptureproductinfoComponent } from '../modal-captureproductinfo/dialog-captureproductinfo/dialog-captureproductinfo.component';

@Component({
  selector: 'app-start-mission',
  templateUrl: './start-mission.component.html',
  styleUrls: ['./start-mission.component.scss'],
})
export class StartMissionComponent  {

  productos = [
    {
     nombre:'Producto uno',
     pres:'320 mil',
     presencia:'checkmark-circle',
     color: 'greenxtend'
    },
    {
      nombre:'Producto',
      pres:'500 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto dos',
      pres:'600 mil',
      presencia:'close-circle',
      color: 'navybluextend'
     },
     {
      nombre:'Producto tres',
      pres:'700 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto cuatro',
      pres:'800 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto cuatro',
      pres:'1000 mil',
      presencia:'close-circle',
      color: 'navybluextend'
     },
  ]

  constructor(public dialog: MatDialog) { }


  openDialog(){
    this.dialog.open(DialogCaptureproductinfoComponent);
  }

}
