import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dialogacceptmission',
  templateUrl: './dialogacceptmission.component.html',
  styleUrls: ['./dialogacceptmission.component.scss'],
})
export class DialogacceptmissionComponent implements OnInit {

  colorServicio:string;
  iconServicio: string;
  imgCliente : string;
  nombreActividad: string;
  nombreCliente : string;
  pago : string;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      message:string,
      idPV:string,
      colorServicio : string,
      iconServicio: string,
      imgCliente : string,
      nombreActividad: string,
      nombreCliente : string,
      pago : string
    },
    private router: Router,
    private matDialog: MatDialog) {

    this.colorServicio =  data.colorServicio;
    this.iconServicio =  data.iconServicio;
    this.imgCliente = data.imgCliente;
    this.nombreActividad = data.nombreActividad;
    this.nombreCliente = data.nombreCliente;
    this.pago = data.pago;
   }
   @ViewChild(RouterOutlet) outlet: RouterOutlet;
   ngOnInit() {

    console.log(this.colorServicio);
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });
   }


    home() : void{
    this.matDialog.closeAll();
    this.router.navigate(['home'])
    }
    missionPending(): void{
      this.matDialog.closeAll();
      console.log('pending-mission/'+this.data.idPV+"/"+this.colorServicio+"/"+this.nombreCliente+"/"+this.nombreActividad);
      this.router.navigate(['pending-mission/'+this.data.idPV+"/"+this.colorServicio+"/"+this.nombreCliente+"/"+this.nombreActividad])
    }







}
