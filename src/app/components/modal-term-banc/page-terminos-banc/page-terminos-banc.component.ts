import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-page-terminos-banc',
  templateUrl: './page-terminos-banc.component.html',
  styleUrls: ['./page-terminos-banc.component.scss'],
})
export class PageTerminosBancComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
