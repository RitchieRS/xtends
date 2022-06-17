import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogReferEnviadoComponent } from '../dialog-refer-enviado/dialog-refer-enviado.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refer-mission',
  templateUrl: './refer-mission.component.html',
  styleUrls: ['./refer-mission.component.scss'],
})
export class ReferMissionComponent implements OnInit {
  idPV= 0;
  idPVMissRef: number;

  constructor(
    public dialog: MatDialog,
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
   }

  ngOnInit() {
    this.idPVMissRef = this.idPV;
    console.log(this.idPVMissRef);
  }

  async openModalReferEnviada(){
    const modal = await this.modalController.create({
      component: DialogReferEnviadoComponent,
      cssClass: 'small-modal'
    });
    await modal.present();
 }


}

