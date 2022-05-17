import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EarnedMoney, Transfer } from 'src/app/xmodels/wallet';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  dataForTransfer: Transfer;
  nombre: string;
  banco: string;
  bancoClabe: string;
  email: string;
  dataEarnedMoney: EarnedMoney;
  saldoTotal: number;
  formTransfer: FormGroup ;
  idUsuario:number;
      resTran = {
        "idUsuario" : "",
        "nombreBenef" : "",
        "cuenta" : "",
        "saldo" : "",
        "noOperacion" : ""
    }
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private srvWallet: WalletService,
    public fb  : FormBuilder,
    private toastCtrl: ToastController,
  ) { }

  async ngOnInit() {
    this.idUsuario = Number(localStorage.getItem('idUser'));
    
    
    this.formTransfer = this.fb.group({
      noOperacion : ['58302'],
      nombreBenef:[''],
      cuenta:[''],
      idUsuario: [this.idUsuario ],
      terminos1: [false,[ Validators.required]],
      terminos2: [false,[ Validators.required]],
      saldo: ['', [Validators.minLength(4),Validators.required]],
     });
     this.getDataTransfer();
     this.getSaldo();
  }

   getDataTransfer(){
    const token = localStorage.getItem('token');
    
    this.srvWallet.getTransfer(token).subscribe(
      (res) => {
        this.dataForTransfer = res;
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
        this.dataEarnedMoney = res;
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


    console.log(this.formTransfer.value);



    this.presentToast('Solicitando su dinero.');


    ;(await this.srvWallet.postMoneyTransfer(token, this.formTransfer.value)).subscribe((res) =>{
      if(res){
        console.log(res);
        this.presentToast('Tu dinero ha sido solicitado.');

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
