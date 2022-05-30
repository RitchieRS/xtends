import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { PageTerminosBancComponent } from 'src/app/components/modal-term-banc/page-terminos-banc/page-terminos-banc.component';
import { PageTransferFondosComponent } from 'src/app/components/modal-term-banc/page-transfer-fondos/page-transfer-fondos.component';
import { EarnedMoney, RespTransfer } from 'src/app/xmodels/wallet';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  dataForTransfer: any;
  nombre: string;
  banco: string;
  bancoClabe: string;
  email: string;
  dataEarnedMoney: any;
  saldoTotal: number;
  formTransfer: FormGroup ;
  terminos1: boolean;
  idUsuario: number;
      resTran = {
        "idUsuario" : "",
        "nombreBenef" : "",
        "cuenta" : "",
        "saldo" : "",
        "noOperacion" : ""
    };
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private srvWallet: WalletService,
    public fb: FormBuilder,
    private toastCtrl: ToastController,
    private modalController: ModalController,
    private router: Router
  ) { }

  async ngOnInit() {
    this.idUsuario = Number(localStorage.getItem('idUser'));

    this.formTransfer = this.fb.group({
      nombreBenef:[''],
      banco:[''],
      cuenta:[''],
      idUsuario: [this.idUsuario ],
      terminos1: [false,[ Validators.required]],
      terminos2: [false,[ Validators.required]],
      saldo: ['', [Validators.minLength(4),Validators.required]],
     });
     this.getDataTransfer();
     this.getSaldo();
  }

// modalSiNo(){

// }

  async openModalBanc(){
      const modal = await this.modalController.create({
        component: PageTerminosBancComponent,
        cssClass: 'small-modal'
      });
      this.terminos1 = true;
      await modal.present();
 }

   async openModalTransferencia(){
    const modal = await this.modalController.create({
      component: PageTransferFondosComponent,
      cssClass: 'small-modal'
    });
    await modal.present();
  }

   getDataTransfer(){
    const token = localStorage.getItem('token');

    this.srvWallet.getTransfer(token).subscribe(
      (res) => {
        this.dataForTransfer = res.resp;
        this.nombre = this.dataForTransfer.nombre;
        this.banco = this.dataForTransfer.banco;
        this.bancoClabe = this.dataForTransfer.bancoClabe;
        this.email = this.dataForTransfer.email;
      }
    );
  }

   getSaldo(){
    const token = localStorage.getItem('token');
    this.srvWallet.getEarnedMoney(token).subscribe(
      (res) => {
        this.dataEarnedMoney = res.resp;
        this.saldoTotal = this.dataEarnedMoney.saldoTotal;
      }
    );
  }


 // requestTransfer(){
    //routerLink="/wallet/transfer-order"
  //}

  async requestTransfer(){

    const token = localStorage.getItem('token');

    const saldoSol = Number(this.formTransfer.value.saldo);

    this.formTransfer.controls['cuenta'].setValue(this.bancoClabe);
    this.formTransfer.controls['nombreBenef'].setValue(this.nombre);
    this.formTransfer.controls['banco'].setValue(this.banco);


    if(saldoSol > this.saldoTotal  ){
      this.presentToast('Saldo solicitado inválido.');
      return;
    }
    if(saldoSol < 100 ){
      this.presentToast('Saldo solicitado inválido.');
      return;
    }

    if(this.formTransfer.value.terminos1 == false ||  this.formTransfer.value.terminos2 == false  ){
      this.presentToast('Acepte los términos y condiciones');
      return;
    }


    //console.log(this.formTransfer.value);



    this.presentToast('Solicitando su dinero.');


    ;(await this.srvWallet.postMoneyTransfer(token, this.formTransfer.value)).subscribe((res) =>{
      if(res){

        console.log(res);

        let operacion = res['resp'].noOperacion;
      //  console.log(operacion)
        this.presentToast('Tu número de operacion es:'+ res.noOperacion);
       //console.log('transfer-order/'+operacion);
        this.router.navigate(['transfer-order/'+operacion]);

      }
    })


  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      color: 'navybluextend',
      position: 'top',
      mode : 'ios',
    });
    toast.present();
  }


}
