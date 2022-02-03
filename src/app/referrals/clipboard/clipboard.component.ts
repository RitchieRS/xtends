import { Component} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent  {

  value =`kahfuiw348573984fh`;
  constructor(private toastCtrl: ToastController) { }


  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Código copiado!',
      duration: 2000,
      // cssClass: 'iup-ion-toast',
      color: 'dark',
      position: 'top',
      mode : 'ios',
    });
    toast.present();
  }


}
