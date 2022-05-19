import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageTerminosBancComponent } from './page-terminos-banc/page-terminos-banc.component';

@Component({
  selector: 'app-modal-term-banc',
  templateUrl: './modal-term-banc.component.html',
  styleUrls: ['./modal-term-banc.component.scss'],
})
export class ModalTermBancComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async openModalBanc(){
     const modal = await this.modalCtrl.create({
       component: PageTerminosBancComponent,
       cssClass: 'small-modal'
     });
     await modal.present();
  }

}
