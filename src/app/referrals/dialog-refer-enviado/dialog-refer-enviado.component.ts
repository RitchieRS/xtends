import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dialog-refer-enviado',
  templateUrl: './dialog-refer-enviado.component.html',
  styleUrls: ['./dialog-refer-enviado.component.scss'],
})
export class DialogReferEnviadoComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
