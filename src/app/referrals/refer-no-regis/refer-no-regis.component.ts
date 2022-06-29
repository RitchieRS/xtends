import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-refer-no-regis',
  templateUrl: './refer-no-regis.component.html',
  styleUrls: ['./refer-no-regis.component.scss'],
})
export class ReferNoRegisComponent implements OnInit {
  @Input() laSucursal: string;

  txtForCopy: string;
  textoUno: string;
  textoDos: string;
  textoTres: string;
  textoCuatro: string;
  textoCinco: string;
  textoSeis: string;
  evrytingtxtForCopy: string;
  el: string;

  evrytingTxt =
     {
       txt1: 'Te recomiendo esta misión para realizarse en',
       txt2: 'Nuevo León',
       txt3: '¿te interesa la chamba?',
       txt4: 'Actividades: xtendapp/miisiones/gbshenks.jpgCódigo:',
       txt5: 'DONSUNN71279SD',
       txt6: 'https://xtendapp.com/misiones_referidos',
     };

  constructor(
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.textoUno = this.evrytingTxt.txt1;
    this.textoDos = this.laSucursal;
    this.textoTres = this.evrytingTxt.txt3;
    this.textoCuatro = this.evrytingTxt.txt4;
    this.textoCinco = this.evrytingTxt.txt5;
    this.textoSeis = this.evrytingTxt.txt6;

    this.txtForCopy = this.textoUno + this.textoDos + this.textoTres + this.textoCuatro + this.textoCinco + this.textoSeis;
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Texto copiado!',
      duration: 2000,
      color: 'navybluextend',
      position: 'top',
      mode : 'ios',
    });
    toast.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
