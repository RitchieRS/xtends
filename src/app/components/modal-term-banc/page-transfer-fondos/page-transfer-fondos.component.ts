import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-page-transfer-fondos',
  templateUrl: './page-transfer-fondos.component.html',
  styleUrls: ['./page-transfer-fondos.component.scss'],
})
export class PageTransferFondosComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
