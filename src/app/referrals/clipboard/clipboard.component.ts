import { Component, Input, OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent implements OnInit {
  @Input() code : string;

  referidoCode:string;
  constructor(private toastCtrl: ToastController) {
    
   }
  ngOnInit(): void {
    this.referidoCode = localStorage.getItem('referido');
  }
  

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Código copiado!',
      duration: 2000,
      color: 'dark',
      position: 'top',
      mode : 'ios',
    });
    toast.present();
  }


}
