import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogReferEnviadoComponent } from '../dialog-refer-enviado/dialog-refer-enviado.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferedService } from 'src/app/xservices/refered/refered.service';
import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

@Component({
  selector: 'app-refer-mission',
  templateUrl: './refer-mission.component.html',
  styleUrls: ['./refer-mission.component.scss'],
})
export class ReferMissionComponent implements OnInit {
  idPV= 0;
  idPVMissRef: number;
  misionesRe: any;
  token: string;
  tiempoMiss: string;
  nombreActividadMis: string;
  colorServicioMis: string;
  pagoMis: string;
  descripcionMis: string;
  canalMis: string;
  cadenaMis: string;
  sucursalMis: string;

  constructor(
    public dialog: MatDialog,
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private srvMissRef: ReferedService,
  ) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.nombreActividadMis = this.route.snapshot.paramMap.get('nombreActividad');
    this.colorServicioMis = this.route.snapshot.paramMap.get('colorServicio');
    this.pagoMis = this.route.snapshot.paramMap.get('pago');
    this.descripcionMis = this.route.snapshot.paramMap.get('descripcion');
    this.canalMis = this.route.snapshot.paramMap.get('canal');
    this.cadenaMis = this.route.snapshot.paramMap.get('cadena');
    this.sucursalMis = this.route.snapshot.paramMap.get('sucursal');
   }

  ngOnInit() {
    this.idPVMissRef = this.idPV;
    console.log(this.idPVMissRef);


    console.log(this.nombreActividadMis);
    console.log(this.colorServicioMis);
    console.log(this.pagoMis);
    console.log(this.descripcionMis);
    console.log(this.canalMis);
    console.log(this.cadenaMis);
    console.log(this.sucursalMis);


    this.token = localStorage.getItem('token');
    // this.srvMissRef.getMissRefPorIdPV(this.token).subscribe((res) =>{



    //  this.srvRefe.getMissRefPorIdPV(this.token).subscribe(() =>{

    //  });
    // });

  }

  async openModalReferEnviada(){
    const modal = await this.modalController.create({
      component: DialogReferEnviadoComponent,
      cssClass: 'small-modal'
    });
    await modal.present();
 }


}

