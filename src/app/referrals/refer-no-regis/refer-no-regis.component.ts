import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-refer-no-regis',
  templateUrl: './refer-no-regis.component.html',
  styleUrls: ['./refer-no-regis.component.scss'],
})
export class ReferNoRegisComponent implements OnInit {
  @Input() laSucursal: string;
  @Input() laInfografia: string;

  txtForCopy: string;
  textoUno: string;
  textoDos: string;
  textoTres: string;
  textoCuatro: string;
  textoCinco: string;
  textoSeis: string;
  textSiete: string;

  evrytingtxtForCopy: string;
  el: string;
  ligaInfografia: string;

  evrytingTxt =
     {
       txt1: 'Te recomiendo esta misión para realizarse en ',
      //  txt2: 'Nuevo León',
       txt3: '¿te interesa la chamba?',
       txt4: 'Actividades:',
       txt5: 'Código: ',
       txt6: 'DONSUNN71279SD',
       txt7: 'https://xtendapp.com/referidos/recomendacion_xtender',
     };

  constructor(
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private socialSharing: SocialSharing
  ) {}

  ngOnInit() {
    this.textoUno = this.evrytingTxt.txt1;
    this.textoDos = this.laSucursal;
    this.textoTres = this.evrytingTxt.txt3;
    this.textoCuatro = this.evrytingTxt.txt4;
    this.textoCinco = this.evrytingTxt.txt5;
    this.ligaInfografia = this.laInfografia;
    this.textoSeis = this.evrytingTxt.txt6;
    this.textSiete = this.evrytingTxt.txt7;

    

    // eslint-disable-next-line max-len
    this.txtForCopy = this.textoUno +  ' '
    + this.textoDos+  ' | '
    + this.textoCuatro + ' ' + this.ligaInfografia + ' '
    + this.textoCinco + this.textoSeis+  ' | '
    + this.textSiete;
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Texto copiado!',
      duration: 2000,
      color: 'navybluextend',
      position: 'top',
      mode : 'ios',
    });
    this.socialSharing.shareViaWhatsApp(this.txtForCopy , 'https://xtendapp.com/images/infografia_appxtend_2-02.png' , null )
    toast.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
