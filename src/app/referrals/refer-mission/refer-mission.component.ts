import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogReferEnviadoComponent } from '../dialog-refer-enviado/dialog-refer-enviado.component';
import { ReferNoRegisComponent } from '../refer-no-regis/refer-no-regis.component';
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
  iconServicioMis: string;
  pagoMis: string;
  descripcionMis: string;
  canalMis: string;
  cadenaMis: string;
  sucursalMis: string;
  infografiaMis: string;
  formMissionRef: FormGroup;
  respuestaDelMail: any;
  algo: string;


  constructor(
    public dialog: MatDialog,
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private srvMissRef: ReferedService,
    private fb: FormBuilder,
    private toastCtrl: ToastController,
  ) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.nombreActividadMis = this.route.snapshot.paramMap.get('nombreActividad');
    this.colorServicioMis = this.route.snapshot.paramMap.get('colorServicio');
    this.iconServicioMis = this.route.snapshot.paramMap.get('iconServicio');
    this.pagoMis = this.route.snapshot.paramMap.get('pago');
    this.descripcionMis = this.route.snapshot.paramMap.get('descripcion');
    this.canalMis = this.route.snapshot.paramMap.get('canal');
    this.cadenaMis = this.route.snapshot.paramMap.get('cadena');
    this.sucursalMis = this.route.snapshot.paramMap.get('sucursal');
    this.infografiaMis = this.route.snapshot.paramMap.get('infografia');

   }


  ngOnInit() {
    this.idPVMissRef = this.idPV;
    console.log(this.idPVMissRef);
    console.log(this.nombreActividadMis);
    console.log(this.colorServicioMis);
    console.log(this.iconServicioMis);
    console.log(this.pagoMis);
    console.log(this.descripcionMis);
    console.log(this.canalMis);
    console.log(this.cadenaMis);
    console.log(this.sucursalMis);
    console.log(this.infografiaMis);


    this.formMissionRef = this.fb.group({
      idPV:[this.idPVMissRef],
      email:['', [Validators.required, Validators.email]],
      firstName:['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
  });
  }


  get email(){
    return this.formMissionRef.get('email');
  }

  get firstName(){
    return this.formMissionRef.get('firstName');
  }

  get lastName(){
    return this.formMissionRef.get('lastName');
  }

  submit(){
      this.presentToast('¡Procesando info!');
      console.warn(this.formMissionRef.value);
      const token = localStorage.getItem('token');
      const datosForMail = {
        idPV: this.formMissionRef.get('idPV').value,
        email: this.formMissionRef.get('email').value,
        nombre: this.formMissionRef.get('firstName').value,
        apellido: this.formMissionRef.get('lastName').value,
      };
      console.log( datosForMail );
      this.srvMissRef.mailMisionRef(token, datosForMail).subscribe((res)=>{
        console.log(res);
        this.respuestaDelMail = res.resp.value;
        console.log(this.respuestaDelMail);

        if(this.respuestaDelMail === 1){
          // this.presentToast('¡Se ha enviado el mail con exito!');
          this.openModalReferEnviada();
          console.log('respuesta 1');
        }else{
           this.noRegistrado();
          //  this.presentToast('Copia esta info y manda por whatsapp');
           console.log('respuesta 0');
           console.log(this.sucursalMis);
        }

      });
    }


    async presentToast(text) {
      const toast = await this.toastCtrl.create({
        message: text,
        duration: 2000,
        color: 'navybluextend',
        position: 'middle',
        mode : 'ios',
      });
      toast.present();
    }

  clearForm(){
    this.formMissionRef.patchValue({
        idPV: this.idPVMissRef,
        eMail: '',
        firstName: '',
        lastName: '',
    });
  }



  async openModalReferEnviada(){
    const modal = await this.modalController.create({
      component: DialogReferEnviadoComponent,
      cssClass: 'small-modal'
    });
    await modal.present();
 }

 async noRegistrado(){
  const modal = await this.modalController.create({
    component: ReferNoRegisComponent,
    cssClass: 'small-modal',
    componentProps:{
      laSucursal: this.sucursalMis,
      laInfografia: this.infografiaMis,
    }
  });
  await modal.present();
}




}

